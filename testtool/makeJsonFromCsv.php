<?php
/**************************************/
//CSVデータからJSONを作成
/*************************************/


define('OPEN_DELIMITER', '{');
define('CLOSE_DELIMITER', '}');
define('BR_CODE', "\n");
define('ENCODING' ,'UTF-8');
setlocale(LC_ALL, 'ja_JP.UTF-8');

$i = 0;
$json ='';
$json .= OPEN_DELIMITER . BR_CODE;
$fp = fopen('sample.csv',"r");
while( $res = fgetcsv( $fp) )
{
    $res_cnt = count( $res);
    for( $i = 0; $i < $res_cnt; $i++ )
    {
        if( $i === 0 )
        //最初は項目
        {
           $json .='"' . $res[$i] . '" :'.OPEN_DELIMITER;

        }
        elseif( $i === ( $res_cnt - 1) )
        //ラストはキー：値 CLOSE_DELIMITER ,
        {
           $json .='"' .$i. '":"' .$res[$i] . '"'. CLOSE_DELIMITER .",\n";
        }
        else
        //それ以外はキー：値 ,
        {
           $json .='"' .$i. '":"' .$res[$i] . '" ,'; 
        }
    }
}

$json .= CLOSE_DELIMITER;
mb_convert_encoding( $json , ENCODING );
file_put_contents( 'sample2.json' , $json  );
?>
