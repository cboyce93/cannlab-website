<?php 
$first_name = $_POST['first_name'];
$middle_name = $_POST['middle_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$city = $_POST['city'];
$country = $_POST['country'];
$message = $_POST['message'];
$formcontent="<strong>From:</strong>$first_name $middle_name $last_name \n 
		<strong>Email:</strong> $email \n
		<strong>Age:</strong> $age \t <strong>Gender:</strong> $gender \n
		<strong>City:</strong> $city \t <strong>Country:</strong> $country \n
		<strong>Message:<strong> $message" \n;
$recipient = "cameronboyce93@gmail.com";
$subject = "C.N.N. Participation Form Submission";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "";
?>
