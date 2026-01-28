<?php
// class honda
// {

// }

// class cars extends honda
// {

// }

// $car = new cars();

class honda
{
    final function companyname()
    {
        echo "honda";
    }
}

class cars extends honda
{
    // function companyname()
    // {
    //     echo "honda";
    // }

}
$car = new cars();
$car->companyname();