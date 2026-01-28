<?php
abstract class products
{
    abstract function productname();
    // abstract function productimage();
    // abstract function productorderdetails();
}
class uploadProduct extends products
{
    function productname()
    {
        echo "product details";
    }
}

$upload = new uploadProduct();
$upload->productname();