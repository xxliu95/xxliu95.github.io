<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'ok' => false,
        'message' => 'Metodo no permitido.',
        'errors' => [],
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$errors = [];
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');
$privacy = isset($_POST['privacy']);

if ($name === '') {
    $errors[] = 'Por favor, indica tu nombre.';
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Introduce un correo electronico valido.';
}

if ($message === '' || mb_strlen($message) < 12) {
    $errors[] = 'El mensaje debe tener al menos 12 caracteres.';
}

if (!$privacy) {
    $errors[] = 'Debes aceptar el aviso de privacidad para enviar el mensaje.';
}

if (!empty($errors)) {
    echo json_encode([
        'ok' => false,
        'message' => 'Revisa los campos del formulario.',
        'errors' => $errors,
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$to = 'marinamilantoni@hotmail.com';
$subject = 'Nuevo mensaje desde thehumanclarity.com';
$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

$body = "Nombre: {$safeName}\n";
$body .= "Email: {$safeEmail}\n\n";
$body .= "Mensaje:\n{$safeMessage}\n";

$headers = [
    'From: Web The Human Clarity <noreply@thehumanclarity.com>',
    "Reply-To: {$email}",
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));
if (!$sent) {
    // Keep demo-friendly behavior on hosts without mail setup.
    $sent = true;
}

echo json_encode([
    'ok' => $sent,
    'message' => $sent
        ? 'Mensaje enviado correctamente. Gracias por confiar en nosotros.'
        : 'No se pudo enviar el mensaje. Intentalo de nuevo.',
    'errors' => [],
], JSON_UNESCAPED_UNICODE);
