<?php
// $user = ["name" => "dishant", "age" => 23, "email" => "dishant@gmail.com"];
// $userjson = json_encode($user);
// echo $userjson;

$data = '{"name":"dishant","age":23,"email":"dishant@gmail.com"}';

$userarr = json_decode($data, true);
print_r($userarr);
