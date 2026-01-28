<?php
// print_r($_FILES['fileupload']);

if ($_FILES["fileupload"]) {
    $path = $_FILES["fileupload"]['name'];
    $uploadpath = "./uploads/" . $path;
    if (move_uploaded_file($_FILES["fileupload"]['tmp_name'], $uploadpath)) {
        echo "file uploaded successfully";
    } else {
            die("failed to upload");
    }
} else {
    die("no file found");
}
