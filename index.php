<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  $to = "gideonabe2020@gmail.com";
  $subject = "New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nPhone: \n$phone\nMessage: \n$message";

  if (mail($to, $subject, $body)) {
    echo "Message sent successfully!";
  } else {
    echo "Oops! Something went wrong.";
  }
}
?>
