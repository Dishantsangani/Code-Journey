<?php

function autoloder($class)
{
    echo $class . '.php';
    echo "<br/>";
    include($class . '.php');
}

spl_autoload_register('autoloder');

$t1 = new techer();
$s1 = new student();