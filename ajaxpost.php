<?php

header('Content-type: application/json; charset= UTF-8');
$post_data = json_decode(file_get_contents("php://input"), true);

$arr = [
  'user_id' =>  (@$post_data['user_id']?:''),
  'password' => (@$post_data['password']?:'')
];

echo json_encode($arr);
