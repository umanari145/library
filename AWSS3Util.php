<?php

use Aws\S3\S3Client;
use Aws\S3\Exception\S3Exception;

class AWSS3Util
{
    private $credentials = [];

    private $region = '';

    private $version = '';


    private $s3Client = null;

    /**
     *
     * AWSS3Util constructor.
     * @param array $configParams 設定ファイル
     */
    public function __construct($configParams = [])
    {
        $awsAccessKey = $configParams['aws_access_key'];
        $awsSecretKey = $configParams['aws_secret_key'];

        $this->credentials = [
            'key' => $awsAccessKey,
            'secret' => $awsSecretKey,
        ];
        $this->region = $configParams['region'];
        $this->version = @$configParams['version'] ?: 'latest';
        $this->initAws();
    }
    /**
     * S3クライアントの作成
     *
     */
    private function initAws()
    {
        $s3Client = new S3Client([
            'credentials' => $this->credentials,
            'region' => $this->region,
            'version' => $this->version,
        ]);
        $this->s3Client = $s3Client;
    }

    /**
     * S3からファイルを取得
     *
     * @param string $bucket  S3のバケット(トップのディレクトリのようなもの)
     * @param string $keyname S3のキー(具体的なアドレス)
     * @return mixed オブジェクトデータ
     */
    public function getS3Contents($bucket, $keyname)
    {
        $contentsObject = null;
        try {
            $result = $this->s3Client->getObject([
                'Bucket' => $bucket,
                'Key'    => $keyname
            ]);
            header("Content-Type: {$result['ContentType']}");
            $contentsObject = $result['Body'];
        } catch (S3Exception $e) {
            $e->getMessage();
        }
        return $contentsObject;
    }

    /**
     * S3からファイルを取得
     *
     * @param string $bucket  S3のバケット(トップのディレクトリのようなもの)
     * @param string $keyname S3のキー(具体的なアドレス)
     * @return mixed オブジェクトデータ
     */
    public function getS3ContentsLastModify($bucket, $keyname)
    {
        $contentsObject = null;
        $lastModify = null;
        try {
            $result = $this->s3Client->getObject([
                'Bucket' => $bucket,
                'Key'    => $keyname
            ]);
            header("Content-Type: {$result['ContentType']}");
            $contentsObject = $result['Body'];
            $lastModify = $result['LastModified']->setTimeZone(new \DateTimeZone('Asia/Tokyo'));
        } catch (S3Exception $e) {
            $e->getMessage();
        }
        return [$contentsObject, $lastModify];
    }

    /**
     * @param string $bucket  バケット名
     * @param string $keyName キー名
     * @param string $searchHash 検索ハッシュ
     * @return array ファイルリスト
     */
    public function getS3FileList($bucket, $keyName, $searchHash = [])
    {
        $objects = $this->s3Client->ListObjects([
            'Bucket' => $bucket,
            'Prefix' => $keyName
        ]);

        if (isset($objects['Contents'])) {
            $contentsList = (array)$objects["Contents"];
            $fileLists = [];
            foreach ($contentsList as $object) {
                // フォルダはスルー。ファイルのみ追加。
                if (substr_count($object['Key'], '/') === 1) {
                    $tmpFile = explode("/", $object['Key']);
                    if (isset($tmpFile[1])) {
                        if (isset($searchHash['from_target_date'])) {
                            if ($searchHash['from_target_date']->diff($object['LastModified'])->format('%R') == '+'
                            && $searchHash['to_target_date']->diff($object['LastModified'])->format('%R') == '-') {
                                //dd($object);
                                echo $object['LastModified'];
                                echo $object['Key'] ."\n";
                            }
                        }
                        $fileLists[] = $tmpFile[1];
                    }
                }
            }
            return $fileLists;
        }
    }

    /**
     * S3からファイルを保存
     *
     * @param string $bucket  S3のバケット(トップのディレクトリのようなもの)
     * @param string $keyname S3のキー(具体的なアドレス)
     * @param string $fileDir 保存するディレクトリ
     * @return string ファイルの保存先
     */
    public function saveS3Contents($bucket, $keyname, $fileDir = '')
    {
        $fileArr = explode("/", $keyname);
        $fileName = last($fileArr);

        if (!file_exists($fileDir)) {
            mkdir($fileDir, 0777, true);
        }

        $filePath = sprintf("%s%s", $fileDir, $fileName);

        try {
            $this->s3Client->getObject([
                'Bucket' => $bucket,
                'Key'    => $keyname,
                'SaveAs' => $filePath
            ]);
        } catch (S3Exception $e) {
            $e->getMessage();
        }
        return $filePath;
    }

    /**
     *
     * S3への保存
     *
     * @param string $bucket    バケット名
     * @param string $awsKey     AWSのファイル名までのファイル
     * @param string $srcPath    サーバーでのファイル名
     */
    public function putS3Contents($bucket, $awsKey, $srcPath)
    {
        try {
            $this->s3Client->putObject([
                'Bucket' => $bucket,
                'Key'    => $awsKey,
                'SourceFile' => $srcPath,
                'ContentType'=> mime_content_type($srcPath)
            ]);
        } catch (S3Exception $e) {
            var_dump($e->getMessage());
        }
    }

    /**
     *
     * S3への保存(バイナリデータを直で)
     *
     * @param string $bucket    バケット名
     * @param string $awsKey    AWSのファイル名までのファイル
     * @param mixed $body       バイナリデータ
     * @param string $mimeType  mime_type
     */
    public function putS3ContentsBinary($bucket, $awsKey, $body, $mimeType)
    {
        return $this->s3Client->putObject([
                'Bucket' => $bucket,
                'Key'    => $awsKey,
                'Body' => $body,
                'ContentType'=> 'image/' . $mimeType,
                'ACL' => 'public-read'
            ]);
    }
}
