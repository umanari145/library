<?php

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/AWSS3Util.php';

$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();

$aws3Util = new AWSS3Util([
    'aws_access_key' => getenv('ACCESS_KEY'),
    'aws_secret_key' => getenv('SECRET_KEY'),
    'region' => getenv('REGION')
]);

$dir = __DIR__ . '/sample_image/*';
$imageData = [];
foreach (glob($dir) as $file_path) {
    $file_info = new SplFileInfo($file_path);
    $file_name = $file_info->getFilename();
    $extension = $file_info->getExtension();
    $image_binary = file_get_contents($file_path);

    $imageData[] = [
        'key'  => 'sample_image/' . $file_name,
        'body' => $image_binary,
        'mimeType' => $extension
    ];
 }

 $aws3Util->bulkPutS3ContentsBinary(getenv('BUCKET_NAME'), $imageData);
