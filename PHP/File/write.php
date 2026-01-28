<?php
if (isset($_POST['filename'])) {
    $filename = "files/" . $_POST['filename'];
    $content = $_POST["content"];
    $file = fopen($filename, "w") or die("unable to create file");
    fwrite($file, $content);
    fclose($file);
    echo "file created";
}
?>
<form action="" method="post">
    <input type="text" placeholder="enter file name" name="filename">
    <br />
    <br />
    <textarea name="content" placeholder="enter file content" id="">
    </textarea>
    <br />
    <br />
    <button> create file</button>
</form>