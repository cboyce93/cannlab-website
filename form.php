<?php 
$first_name = $_POST['first_name'];
$middle_name = $_POST['middle_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$age = $_POST['age'];
$english = $_POST['english'];
$gender = $_POST['gender'];
$city = $_POST['city'];
$country = $_POST['country'];
$message = $_POST['message'];
$formcontent="Participatation request for the CNN lab from cannlab.ca!\n\nFrom:\t$first_name $middle_name $last_name \nEmail:\t$email \nAge:\t$age \t\tGender: $gender \nDid you complete most of your education in an English speaking program?  $english \nCity: \t $city \t\t Country: $country \nMessage: \t $message \n";
$recipient = "cameronboyce93@gmail.com";
$subject = "C.N.N. Participation Form Submission";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "";
?>
