<form action="" method="post">
    <input type="text" name="search" id="" placeholder="Search">
    <br />
    <br />
    <button>Search</button>
</form>

<?php



require_once __DIR__ . "/../Config/php-pdo.php";
if (isset($_POST['search'])) {
    $search = $_POST['search'];
    $student = $conn->prepare("SELECT * FROM EMP_DATA WHERE name = '%$search%' ");
    $student->execute();
    $result = $student->fetchAll();
    echo "<table border='1'>";
    echo "<tr><th>ID</th><th>Name</th><th>Age</th><th>Gender</th></tr>";
    foreach ($result as $row) {
        echo "<tr><td>" . $row['id'] . "</td><td>" . $row['name'] . "</td><td>" . $row['age'] . "</td><td>" . $row['gender'] . "</td></tr>";
    }
    echo "</table>";
}
?>