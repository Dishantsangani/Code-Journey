<?php
trait parentcompany
{
    function gettotalemp()
    {
        echo 500;
    }
}
trait parentcompany2
{
    function gettotaloffice()
    {
        echo 5;
    }
}
class company
{
    use parentcompany;
    use parentcompany2;
}

$cmp = new company();
$cmp->gettotalemp();
$cmp->gettotaloffice();