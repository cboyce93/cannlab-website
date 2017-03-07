<?php 
$first_name = $_POST['first_name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $first_name \n Message: $message";
$recipient = "cameronboyce93@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>
