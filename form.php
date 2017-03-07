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
$formcontent="Participation form submission for the CNN Lab!\n\nFrom:\t$first_name $middle_name $last_name \n\nEmail:\t$email \n\nAge:\t$age \n\nGender: $gender \n\nDid you complete most of your education in an English speaking program? \n $english \n\nCity: \t $city \n\n Country: $country \n\nMessage: \n $message \t";
$recipient = "cameronboyce93@gmail.com";
$subject = "C.N.N. Participation Form Submission";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "";
?>
