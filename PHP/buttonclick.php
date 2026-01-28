<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>call php</title>
</head>

<body>
    <form action="" method="post">
        <button name="btn">call function</button>
    </form>
</body>

<?php
if (isset($_REQUEST['btn'])) {
    btnclick();
}
function btnclick()
{
    echo "function called";
}
?>

</html>