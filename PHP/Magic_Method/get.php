<?php
class user
{
    public $name = "dishant sangani";

    function __get($property)
    {
        echo "this property not accessible";
    }
}
$user = new user();
echo $user->name;