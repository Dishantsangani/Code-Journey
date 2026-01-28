<?php
class techer
{
    public $city = "delhi";
    function nexteam()
    {
        echo "next exam is maths";
    }
    function age()
    {
        echo "my age is 40";
    }
}
class Students extends techer
{
    public $city = "noida";
    function age()
    {
        echo "Students age is 20";
    }
}

$s1 = new Students();
$s1->age();
echo "<br/>";
echo $s1->city;