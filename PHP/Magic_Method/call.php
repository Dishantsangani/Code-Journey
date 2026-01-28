<?php
class user
{

    private function getname($name)
    {
        echo $name;
    }
    function __call($method, $arguments)
    {
        // echo "this function not accessible";
        // echo "<br/>";
        // print_r($arguments);

        if (method_exists($this, $method)) {
            // $this->$method($arguments);
            // echo "this is a private method";
            call_user_func_array([$this, $method], $arguments);
        } else {
            echo "this is a public method";
        }
    }
}
$user = new user();
$user->getname("dishant");