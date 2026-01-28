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
    function insertdata()
    {
        $sqlquery = 'INSERT INTO emp_data(name,email,password,age,gender,country,file,message)
        VALUES(:name,:email,:password,:age,:gender,:country,:file,:message)';
        $students = $this->dbconnect->prepare($sqlquery);
        $result = $students->execute();
        if ($result) {
            echo "Data Inserted Successfully";
        } else {
            echo "Data Not Inserted";
        }
    }
    function updatedata()
    {
        $sqlquery = 'UPDATE  emp_data SET name = :name ,email = :email,password = :password,age = :age,gender = :gender,country = :country,file = :file,message = :message
        WHERE id = :id';
        $students = $this->dbconnect->prepare($sqlquery);
        $result = $students->execute();
        if ($result) {
            echo "Data update Successfully";
        } else {
            echo "Data Not update";
        }
    }
    function deletedata()
    {
        $sqlquery = 'delete from emp_data WHERE id = :id';
        $students = $this->dbconnect->prepare($sqlquery);
        $result = $students->execute();
        if ($result) {
            echo "Data deleted Successfully";
        } else {
            echo "Data Not deleted";
        }
    }

    // 
    function insertdatawithrequest($request)
    {
        $name = $request['name'];
        $email = $request['email'];
        $password = $request['password'];
        $age = $request['age'];
        $gender = $request['gender'];
        $country = $request['country'];
        $file = $request['file'];
        $message = $request['message'];

        $sqlquery = "INSERT INTO emp_data(`name`, `email`, `password`, `age`, `gender`, `country`, `file`, `message`)
            VALUES('$name','$email','$password','$age','$gender','$country','$file','$message')";
        $students = $this->dbconnect->prepare($sqlquery);
        $result = $students->execute();
        if ($result) {
            echo "Data Inserted Successfully";
        } else {
            echo "Data Not Inserted";
        }
    }
}
$student = new student($conn);
// $student->getdata();
// $student->insertdata();


if (isset($_POST['name'])) {
    $student->insertdatawithrequest($_POST);
}