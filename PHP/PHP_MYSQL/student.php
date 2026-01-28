<?php
include("../Config/php-pdo.php");
class student
{
    public $dbconnect;
    function __construct($conn)
    {
        $this->dbconnect = $conn;
    }
    function getdata()
    {
        $getStudents = $this->dbconnect->prepare("SELECT * FROM emp_data");
        $getStudents->execute();
        $result = $getStudents->fetchAll();
        print_r($result);
    }


}
$student = new student($conn);
$student->getdata();