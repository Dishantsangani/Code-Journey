<!-- <?php
        // if (isset($_FILES['file'])) {
        //     $filepath = $_FILES['file']['tmp_name'];
        //     $myfile = fopen($filepath, "r") or die("Unable to read file");
        //     echo fread($myfile, filesize($filepath));
        //     fclose($myfile);
        // }
        // 
        ?>
<form  method="post">
    <input type="file" name="file" id="">
    <br />
    <br />
    <button>Read File</button>

</form> --><?php
            if (isset($_FILES['file']) && $_FILES['file']['error'] === 0) {

                $filePath = $_FILES['file']['tmp_name']; // ✅ STRING path

                $myfile = fopen($filePath, "r") or die("Unable to read file");
                echo fread($myfile, filesize($filePath));
                fclose($myfile);
            }
            ?>

<form method="post" enctype="multipart/form-data">
    <input type="file" name="file">
    <br><br>
    <button type="submit">Read File</button>
</form>