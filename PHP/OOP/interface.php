<?php
interface productfeature
{
    function images();
    function ownerdeatils();
}

class Products implements productfeature
{
    function images()
    {
        echo "images";
    }
    function ownerdeatils()
    {
        echo "ownerdeatils";
    }
}

$product = new Products();
$product->images();