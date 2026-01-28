<?php
class company
{

    function getname()
    {
        echo "this is honda moters";
        return $this;
    }
    function getemp()
    {
        echo "this is 3000 employee";
        return $this;
    }
    function gettotaoffice()
    {
        echo "this is 3000 office";
    }
}

$compay = new company();
$compay->getname()->getemp()->gettotaoffice();