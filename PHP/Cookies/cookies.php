<?php

setcookie("apple", time() + (86400));
if (isset($_COOKIE['apple'])) {
    echo ($_COOKIE);
} else {
    echo "no set";
}
