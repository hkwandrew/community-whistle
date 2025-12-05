<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$payload = json_decode(file_get_contents('php://input'), true);

$name = trim($payload['name'] ?? '');
$email = trim($payload['email'] ?? '');
$message = trim($payload['message'] ?? '');

if (!$name || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Invalid input']);
  exit;
}

$domain = preg_replace('/[^A-Za-z0-9\.\-]/', '', $_SERVER['SERVER_NAME'] ?? 'example.com');
$fromAddress = 'no-reply@' . $domain;
$to = 'hello@hkw.io';
$subject = 'New contact form message';

$body = "Name: {$name}\nEmail: {$email}\n\n{$message}";
$headers = "From: {$fromAddress}\r\nReply-To: {$email}\r\nContent-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
  echo json_encode(['ok' => true]);
  exit;
}

http_response_code(500);
echo json_encode(['ok' => false, 'error' => 'Mail send failed']);
