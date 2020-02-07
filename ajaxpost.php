<?php
header('Content-type: application/json; charset= UTF-8');
$arr = [
  'user_id' =>  (@$_POST['user_id']?:''),
  'password' => (@$_POST['password']?:'')
];

echo json_encode($arr);
