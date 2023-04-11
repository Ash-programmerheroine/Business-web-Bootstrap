<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
     // Check if the form has been submitted
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Retrieve the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Validate the form data
    $errors = [];

    // Validate name
    if (empty($name)) {
        $errors[] = 'Name is required';
    } else if (!preg_match('/^[a-zA-Z\s]+$/', $name)) {
        $errors[] = 'Name must contain only letters and spaces';
    }

    // Validate email
    if (empty($email)) {
        $errors[] = 'Email is required';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
    }

    // Validate phone (optional)
    if (!empty($phone) && !preg_match('/^[0-9]{10}$/', $phone)) {
        $errors[] = 'Phone number must be 10 digits';
    }

    // Validate message
    if (empty($message)) {
        $errors[] = 'Message is required';
    }

    // If there are errors, display them
    if (!empty($errors)) {
        echo '<ul>';
        foreach ($errors as $error) {
        echo '<li>' . $error . '</li>';
        }
        echo '</ul>';
    } else {
        // If there are no errors, send an email notification
        $to = 'ashrafikhanam.18@example.com';
        $subject = 'New Contact Form Submission';
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
        $headers = "From: $email\r\nReply-To: $email\r\n";

        if (mail($to, $subject, $body, $headers)) {
        echo 'Thank you for contacting us. We will get back to you soon.';
        } else {
        echo 'Sorry, there was an error sending your message. Please try again later.';
        }
    }
    }

    ?>                 

    
</body>
</html>



