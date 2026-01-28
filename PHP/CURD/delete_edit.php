<?php
require_once  "../Config/php-pdo.php";

$students = $conn->prepare("select * FROM students");
$students->execute();
$result = $students->fetch();


echo "<table border= '1'>";

foreach ($students as $student) {
    echo "<tr>
 <td>" . $student['name'] . "</td>
 <td>" . $student['course'] . "</td>
 <td>" . $student['betch'] . "</td>
 <td>" . $student['city'] . "</td>
 <td>" . $student['year'] . "</td>
 <td> <form method='post'> 
 <button name=delete  value=" . $student['id'] . ">delete</button></form></td>
 <td><a href='update.php?id=" . $student['id'] . "'/>edit </td>
 </tr>";
}
echo "</table>";

if (isset($_POST['delete'])) {
    echo $id = $_POST['delete'];
    $students = $conn->prepare("delete FROM students where id = '$id'");

    if ($students->execute()) {
        echo "deleted Successfully";
    } else {
        echo "not deleted Successfully";
    }
}
