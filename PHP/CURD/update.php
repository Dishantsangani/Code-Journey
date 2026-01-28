<?php

require_once  __DIR__ . "/../Config/php-pdo.php";
if (isset($_GET['id'])) {
    $getStudent = $conn->prepare("select *  FROM STUDENTs where id ='$id' ");
    $getStudent->execute();
    $student = $getStudent->fetchAll();
    $name = $student[0]['name'];
    $course = $student[0]['course'];
    $betch = $student[0]['betch'];
    $city = $student[0]['city'];
    $year = $student[0]['year'];
}
?>

<form method="post">
    <input type="text" value="<?php echo $name ?>" name="name" id="">
    <br />
    <br />
    <input type="text" value="<?php echo $course ?>" name="course" id="">
    <br />
    <br />
    <input type="text" value="<?php echo $betch ?>" name="betch" id="">
    <br />
    <br />
    <input type="text" value="<?php echo $city ?>" name="city" id="">
    <br />
    <br />
    <input type="text" value="<?php echo $year ?>" name="year" id="">
    <br />
    <br />
    <button value="<?php echo $id ?>" name="update">Update</button>
</form>

<?php
if (isset($_POST['update'])) {
    $id = $_POST['update'];
    $name = $_POST['name'];
    $course = $_POST['course'];
    $betch = $_POST['betch'];
    $city = $_POST['city'];
    $year = $_POST['year'];
    $updateStudent = $conn->prepare("UPDATE  STUDENTS SET
      name = '$name',
      course = '$course', 
      betch = '$betch',
      city = '$city', 
      year = '$year'      
      WHERE id = '$id' ");

    if ($updateStudent->execute()) {
        echo "Updated Successfully";
    } else {
        echo "Not Updated Successfully";
    }
}
?>