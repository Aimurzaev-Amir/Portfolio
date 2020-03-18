<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$subject = "=?utf-8?B?".base64_encode("Message from Front End Portfolio: aimurzayev.com")."?=";
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";


$success = mail("aimurzaev@mail.ru", $subject, $message, $headers);
echo $success;
?>