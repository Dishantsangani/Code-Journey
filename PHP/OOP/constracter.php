<?php
class constructorDemo
{
    public $name;

    function __construct()
    {
        $this->name = "dishant";
    }
    function display()
    {
        echo $this->name;
    }
}
$cd = new constructorDemo();
$cd->display();