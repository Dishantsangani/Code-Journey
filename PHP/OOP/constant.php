<?php
class constantdemo
{
    protected const collagename = "IET collage";
    function getcollage()
    {
        echo self::collagename;
    }
}

class child extends constantdemo
{
    function getchildname()
    {
        echo self::collagename;
    }
}

$d1 = new constantdemo();
echo "<br/>"; 
$d1->getcollage();

$s1 = new child();
$s1->getchildname();
