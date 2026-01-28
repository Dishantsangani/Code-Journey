<?php
class MathOperation
{
    public $val = 30;
    function sum($a, $b)
    {
        echo $a + $b;
    }

}

$maths = new MathOperation();
$maths->sum(10, 50);
echo "<br/>";
