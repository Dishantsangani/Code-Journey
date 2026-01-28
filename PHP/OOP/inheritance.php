<?php
class studentAuth
{
    function login()
    {
        echo "login";
    }

}
class Studnets extends studentAuth
{
 
}

class techer extends studentAuth
{

}
$s1 = new Studnets();
$s1->login();

echo "<br/>";

$s1 = new techer();
$s1->login();