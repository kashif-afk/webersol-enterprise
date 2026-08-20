<?php
declare(strict_types=1);

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed.']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid request body.']);
    exit;
}

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$service = trim((string)($data['service'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$website = trim((string)($data['website'] ?? '')); // honeypot
$renderedAt = (int)($data['renderedAt'] ?? 0);

// Honeypot: bots tend to fill every field. Fake-succeed silently, no mail sent.
if ($website !== '') {
    echo json_encode(['success' => true]);
    exit;
}

// Minimum fill-time check: a real visitor can't submit within 2 seconds of page render.
if ($renderedAt > 0 && (time() - $renderedAt) < 2) {
    echo json_encode(['success' => true]);
    exit;
}

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Name, email, and message are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid email address.']);
    exit;
}

// Header-injection guard: reject any field carrying a raw CR/LF.
foreach (['name' => $name, 'email' => $email, 'phone' => $phone, 'service' => $service] as $field => $value) {
    if (preg_match('/[\r\n]/', $value)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid characters in ' . $field . '.']);
        exit;
    }
}

$to = 'info@webersol.com';
$subject = 'New Architecture Consultation Request — ' . $name;

$bodyLines = [
    'New consultation request from webersol.com',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
    'Focus area: ' . ($service !== '' ? $service : 'Not specified'),
    '',
    'Message:',
    $message,
];
$body = implode("\n", $bodyLines);

// From must be a domain-owned address — using the visitor's address here commonly
// fails SPF/DKIM checks and gets the message flagged as spam by the receiving server.
$fromAddress = 'noreply@webersol.com';

$headers = [
    'From: Webersol Website <' . $fromAddress . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Unable to send your request right now. Please email info@webersol.com directly.']);
}
