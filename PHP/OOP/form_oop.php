<?php
if (isset($_POST['user'])) {
    class User
    {
        function getname($name)
        {
            echo "user name is " . $name;

        }
    }
    $s1 = new User();
    $s1->getname($_POST['user']);

}

?>
<form action="" method="post">
    <input type="text" name="user" placeholder="Enter User Name">
    <br />
    <br />
    <button>click me</button>
</form>