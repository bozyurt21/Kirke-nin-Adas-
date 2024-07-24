<?php
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);
$email = $input['email'];

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Here, you can add the email to your database or mailing list.
    // This example just saves it to a file for simplicity.

    $file = 'subscribers.txt';
    file_put_contents($file, $email . PHP_EOL, FILE_APPEND | LOCK_EX);

    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
}
