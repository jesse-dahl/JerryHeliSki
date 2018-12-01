<?php
    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $mailfrom = $_POST['email'];
        $message = $_POST['comments'];

        $mailTo = "jddahl19@yahoo.com";
        $headers = "From: ".$mailFrom;
        $txt = "Your have received an email from ".$name.".\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);
        header("Location: index.html?mailsend");
    }
?>