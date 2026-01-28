<?php
class honda
{
    static public $countryName = "japan";
    static function companyame()
    {
        echo "honda";
    }
}

// $honda = new honda();

// $honda->companyame();
honda::companyame();
echo honda::$countryName; 