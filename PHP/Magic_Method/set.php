<?php
class user
{
    private $name;
    function __set($property, $value)
    {
        if (property_exists($this, $property)) {
            $this->$property = $value;
            echo "yes";
        }else{

            // echo " $property this property can  not set with values";
            echo "no";
        }
    }
    function getname()
    {
        echo $this->name;
    }
}
$user = new user();
$user->getname();
$user->name = "dishant sangani";