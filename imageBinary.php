<?php

$filepath = __DIR__ . '/sample_image/matui_rena.jpg';
$fp = fopen($filepath, 'r');
header("Content-type: image/jpg");
while ($buf = fread($fp, 4096)) {
    echo $buf;
}
fclose($fp);
