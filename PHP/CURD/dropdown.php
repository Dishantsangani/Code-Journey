<?php
include("./Config/php-pdo.php");

$getStudent = $conn->prepare("SELECT * FROM STUDENTS");
$getStudent->execute();
$studentdata = $getStudent->fetchAll();

echo "<SELECT>";
echo "<option>SELECT name </option>";

foreach ($studentdata as $student) {
    echo "<option values=" . $student['id'] . ">"  . $student['name'] . "</option>";
}
echo "</option>";
print_r($studentdata);
