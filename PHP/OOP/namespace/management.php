<?php
include("./techer.php");
include("./student.php");

$teher = new techer\joiningdetails();
$teher->joining();

$student = new student\joiningdetails();
$student->admissiondate();

