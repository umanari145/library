<?php

//application/x-www-form-urlencodedの場合はGET,POSTなどのグローバル変数で受け取れる

$post_data = @$_POST?:"";

//var_dump($post_data);

$arr = [
  'user_id' =>  (@$post_data['user_id']?:''),
  'password' => (@$post_data['password']?:''),
  'searchArr' => (@$post_data['searchArr']?:''),
  'keywordArr' => (@$post_data['keywordArr']?:'')
];

var_dump($arr);
exit();

echo json_encode($arr);
