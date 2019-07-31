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

$aws3Util->startWrapper();
$filepath = sprintf('s3://%s/%s', getenv('BUCKET_NAME'), 'neru.png');
$fp = fopen($filepath, 'r');
header("Content-type: image/png");
while ($buf = fread($fp, 4096)) {
    echo $buf;
}
fclose($fp);
