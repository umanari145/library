<?php

$post_data = json_decode(file_get_contents('php://input'), true);

var_dump($post_data);

$arr = [
  'user_id' =>  (@$post_data['user_id']?:''),
  'password' => (@$post_data['password']?:''),
  'searchArr' => (@$post_data['searchArr']?:''),
  'keywordArr' => (@$post_data['keywordArr']?:'')
];

var_dump($arr);
exit();

echo json_encode($arr);
