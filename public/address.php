<?php

require_once dirname(__DIR__) .'/vendor/autoload.php';
require_once __DIR__ .'/config.php';

use Underbar\ArrayImpl as _;
use Carbon\Carbon;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Formatter\LineFormatter;

$logging_dir = dirname(__DIR__) . '/public/logs';
$logging_path = sprintf('%s/%s', $logging_dir, 'test.log');
if (!file_exists($logging_dir)) {
    mkdir($logging_dir, '777');
}

if (!file_exists($logging_path)) {
    touch($logging_dir);
    chmod($logging_dir, 0777);
}

$stream = new StreamHandler($logging_path, Logger::INFO);
$logger = new Logger('foo_test');
$logger->pushHandler($stream);
$logger->pushProcessor(function ($record) {
    $record['extra']['dummy'] = '';
    return $record;
});

/*
 *
 * DBの接続設定
 */
try {
    //メインのDB
    ORM::configure(sprintf('%s:host=%s;dbname=%s;port=%d', DB_DSN, DB_HOST, DB_NAME, DB_PORT));
    ORM::configure('username', DB_USER);
    ORM::configure('password', DB_PASS);
    ORM::configure('driver_options', array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
    ORM::configure('logging', true);
    ORM::configure('logger', function ($log_string) use ($logger) {
        $logger->addInfo('sql ' . $log_string);
    });

} catch (Exception $e) {
    $app->halt(500, $e->getMessage());
}

switch ($_SERVER ['REQUEST_METHOD']) {
     case 'GET':
        if (isset($_GET['paginationjs'])) {
            //paginationjs使用
            $zip = (isset($_GET['zip']) && preg_match('/^\d{1,7}$/', $_GET['zip']) === 1) ? $_GET['zip']:'';

            $limit = (isset($_GET['pageSize']) && preg_match('/^\d+$/', $_GET['pageSize']) === 1) ? $_GET['pageSize']:100;
            if ($sEcho === "1") {
                $limit = 1000;
            }
            $offset = (isset($_GET['pageNumber']) && preg_match('/^\d+$/', $_GET['pageNumber']) === 1) ? ($_GET['pageNumber'] - 1) * $limit :0;
            $addressinfo = getAddress($zip, $offset, $limit);
            $jsonData['data'] = _::map($addressinfo, function ($address) {
                return array_values($address);
            });
            $jsonData['total'] = getAddressCount($zip);
        } else {
            //dataTable使用
            //暫定的にzipをoffsetとして扱う
            $zip = (isset($_GET['zip']) && preg_match('/^\d{1,7}$/', $_GET['zip']) === 1) ? $_GET['zip']:'';
            $offset = (isset($_GET['offset']) && preg_match('/^\d+$/', $_GET['offset']) === 1) ? $_GET['offset']:0;

            $sEcho = (isset($_GET['sEcho']) && preg_match('/^\d+$/', $_GET['sEcho']) === 1) ? $_GET['sEcho']:1;

            $limit = (isset($_GET['iDisplayLength']) && preg_match('/^\d+$/', $_GET['iDisplayLength']) === 1) ? $_GET['iDisplayLength']:100;
            if ($sEcho === "1") {
                $limit = 1000;
            }
            $offset = (isset($_GET['iDisplayStart']) && preg_match('/^\d+$/', $_GET['iDisplayStart']) === 1) ? $_GET['iDisplayStart']:0;
            $addressinfo = getAddress($zip, $offset, $limit);
            $jsonData = formatDataTables($addressinfo);
        }
        header('content-type: application/json; charset=utf-8');
        echo json_encode($jsonData);
        exit();
     break;
}

function getAddress($zip, $offset, $limit)
{
    $datas =[];

    $query = ORM::for_table('postcode')
             ->select_many('zip', 'pref', 'city', 'town');

    if (!empty($zip)) {
        $query->where_like('zip', $zip.'%');
    }

    $datas = $query->limit($limit)
           ->offset($offset)
           ->find_array();
    return $datas;
}


function getAddressCount($zip)
{
    $query = ORM::for_table('postcode')
             ->select_many('zip', 'pref', 'city', 'town');

    if (!empty($zip)) {
        $query->where_like('zip', $zip.'%');
    }

    return $query->count();
}

function formatDataTables($addressinfo)
{
    $data = _::map($addressinfo, function ($address) {
        return array_values($address);
    });

    return [
        'iTotalRecords' => count($data),
        'aaData' => $data,
        "iTotalDisplayRecords"=> count($data),
        "aoColumns"=>["zip","pref","city","town"],
        "sEcho"=> $sEcho
    ];
}
