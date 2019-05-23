<?php
        //Enter your code here, enjoy!

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $POST['mail'];
    $message = $POST['message'];
    
    $mailTo = "marchrahul@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from: ".$name.".\n\n".$message;
    
    mail($mailTo, $subect, $txt, $headers);
    header("Location: index.php?mailSend");
}

