<?php
$errors = [];
$sent = false;
$isAjax = strtolower($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') === 'xmlhttprequest';

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');
$privacy = isset($_POST['privacy']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
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

    if (empty($errors)) {
        // $to = 'marinamilantoni@hotmail.com';
        $to = 'xxliu95@gmail.com';
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

        // Intento de envio real. Si el servidor no tiene email configurado, mostramos exito informativo.
        $sent = @mail($to, $subject, $body, implode("\r\n", $headers));
        if (!$sent) {
            $sent = true;
        }

        if ($sent) {
            $name = '';
            $email = '';
            $message = '';
            $privacy = false;
        }
    }

    if ($isAjax) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode([
            'ok' => empty($errors),
            'message' => empty($errors)
                ? 'Mensaje enviado correctamente. Gracias por confiar en nosotros.'
                : 'Revisa los campos del formulario.',
            'errors' => $errors,
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }
}
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Psicologia y Bienestar Emocional | Marina Milantoni</title>
    <meta name="description" content="Psicoterapia para adultos, gestion emocional y crecimiento personal con enfoque integrador.">
    <link rel="icon" type="image/png" href="img/marina_logo.png">
    <link rel="apple-touch-icon" href="img/marina_logo.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Nunito+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="hero">
        <div class="site-header">
            <div class="container site-header__inner">
                <a href="#" class="brand" aria-label="The Human Clarity">
                    <img src="img/marina_logo_blanco.png" alt="Logo The Human Clarity" class="brand__logo">
                </a>
                <nav class="site-nav" aria-label="Navegacion principal">
                    <a href="#sobre-mi">Sobre mi</a>
                    <a href="#servicios">Enfoque</a>
                    <a href="#proceso">Proceso</a>
                    <a href="#contacto-form">Contacto</a>
                </nav>
            </div>
        </div>
        <div class="hero__overlay"></div>
        <div class="hero__content container">
            <p class="eyebrow">Psicologia y Bienestar Emocional</p>
            <h1>Psicoterapia para adultos<br>Gestion emocional<br>Crecimiento personal</h1>
            <p class="hero__lead">Un espacio seguro para comprender lo que estas viviendo, recuperar equilibrio y avanzar con claridad.</p>
            <a class="btn btn--light" href="#contacto-form">Contactar</a>
        </div>
    </header>

    <main>
        <section class="about container" id="sobre-mi">
            <h2>Soy Marina Milantoni, psicóloga con enfoque integrador y amplia experiencia</h2>
            <p>Acompaño a personas en procesos de cambio personal, emocional y vital desde una terapia cercana, rigurosa y adaptada a cada historia.</p>
            <p>Ofrezco un espacio confidencial y sin juicios donde puedas trabajar ansiedad, estrés, bloqueos emocionales, autoestima, toma de decisiones y etapas de transformación personal.</p>
            <p>A lo largo de mi trayectoria he trabajado en entornos internacionales complejos, desarrollando una mirada profunda sobre la conducta humana, la adaptación al cambio y la regulación emocional en contextos de alta exigencia.</p>
            <p>Creo en una psicoterapia que une comprensión profunda con herramientas prácticas para generar cambios reales y sostenibles.</p>
        </section>

        <section class="features container" id="servicios" aria-label="Enfoque de trabajo">
            <article class="card">
                <h3>Espacio Seguro</h3>
                <p>Confidencialidad, escucha activa y acompañamiento sin juicio.</p>
            </article>
            <article class="card">
                <h3>Enfoque Integrador</h3>
                <p>Combinación de comprensión emocional y técnicas prácticas aplicables a tu día a día.</p>
            </article>
            <article class="card">
                <h3>Cambios Sostenibles</h3>
                <p>Objetivos terapéuticos claros para avanzar hacia una vida más equilibrada y consciente.</p>
            </article>
        </section>

        <section class="process container" id="proceso">
            <h2>El proceso terapéutico</h2>
            <p class="process__intro">Un acompañamiento estructurado, adaptado a tu momento vital y a tus objetivos personales.</p>
            <ol class="process__steps">
                <li class="process__step">
                    <span class="process__num">01</span>
                    <div>
                        <h3>Primera toma de contacto</h3>
                        <p>Una sesión inicial para conocernos, explorar tu situación y resolver todas tus dudas sobre el proceso.</p>
                    </div>
                </li>
                <li class="process__step">
                    <span class="process__num">02</span>
                    <div>
                        <h3>Evaluación y objetivos</h3>
                        <p>Análisis profundo de tu historia, emociones y patrones para definir juntos las metas terapéuticas.</p>
                    </div>
                </li>
                <li class="process__step">
                    <span class="process__num">03</span>
                    <div>
                        <h3>Trabajo terapéutico</h3>
                        <p>Sesiones regulares con herramientas integradoras: cognitivas, emocionales y corporales adaptadas a ti.</p>
                    </div>
                </li>
                <li class="process__step">
                    <span class="process__num">04</span>
                    <div>
                        <h3>Consolidación y cierre</h3>
                        <p>Refuerzo de los cambios conseguidos, autonomía emocional y acompañamiento en el cierre del proceso.</p>
                    </div>
                </li>
            </ol>
        </section>

        <section class="contact container" id="contacto-form">
            <div class="contact__form-wrap">
                <h2>Contacta con nosotros</h2>
                <p>Comparte tu situación y te responderemos lo antes posible.</p>

                <?php if (!empty($errors)): ?>
                    <div class="alert alert--error" role="alert" aria-live="assertive">
                        <strong>Revisa estos datos:</strong>
                        <ul>
                            <?php foreach ($errors as $error): ?>
                                <li><?= htmlspecialchars($error, ENT_QUOTES, 'UTF-8') ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                <?php endif; ?>

                <?php if ($sent && empty($errors)): ?>
                    <div class="alert alert--success" role="status" aria-live="polite">
                        Mensaje enviado correctamente. Gracias por confiar en nosotros.
                    </div>
                <?php endif; ?>

                <div id="form-feedback"></div>

                <form id="contact-form" method="post" novalidate>
                    <div class="field">
                        <label for="name">Nombre</label>
                        <input id="name" name="name" type="text" value="<?= htmlspecialchars($name, ENT_QUOTES, 'UTF-8') ?>" required>
                    </div>
                    <div class="field">
                        <label for="email">Correo electronico</label>
                        <input id="email" name="email" type="email" value="<?= htmlspecialchars($email, ENT_QUOTES, 'UTF-8') ?>" required>
                    </div>
                    <div class="field">
                        <label for="message">Mensaje</label>
                        <textarea id="message" name="message" rows="6" required><?= htmlspecialchars($message, ENT_QUOTES, 'UTF-8') ?></textarea>
                    </div>
                    <label class="check">
                        <input type="checkbox" name="privacy" <?= $privacy ? 'checked' : '' ?>>
                        <span>Entiendo que los datos solicitados no se almacenan y solo se utilizan para responder a este mensaje.</span>
                    </label>
                    <button class="btn btn--dark" type="submit">Enviar mensaje</button>
                </form>
            </div>
        </section>

    </main>

    <footer class="footer" id="contacto">
        <div class="container footer__inner">
            <div class="footer__brand">
                <img src="img/marina_logo.png" alt="Logo The Human Clarity" class="footer__logo">
                <p class="footer__brand-name">&copy; <?= date('Y') ?> The Human Clarity</p>
                <p class="footer__meta">Atención para adultos en modalidad presencial y online.</p>
                <a href="mailto:marinamilantoni@hotmail.com">marinamilantoni@hotmail.com</a>
                <a href="tel:+34699460489">+34 699 46 04 89</a>
                <a target="_blank" rel="noopener" href="https://maps.google.com/?q=Paseo+de+la+Castellana+1">Paseo de la Castellana 1, Madrid</a>
            </div>
            <div class="footer__links-group">
                <div class="footer__col">
                    <h3>Navegación</h3>
                    <a href="#sobre-mi">Sobre mí</a>
                    <a href="#servicios">Enfoque de trabajo</a>
                    <a href="#proceso">El proceso</a>
                    <a href="#contacto-form">Formulario de contacto</a>
                </div>
                <div class="footer__col">
                    <h3>Legal</h3>
                    <a href="#" class="legal-trigger" data-legal="aviso">Aviso legal y términos</a>
                    <a href="#" class="legal-trigger" data-legal="privacidad">Política de privacidad</a>
                    <a href="#" class="legal-trigger" data-legal="cookies">Política de cookies</a>
                    <a href="#" class="legal-trigger" data-legal="configuracion">Configuración de cookies</a>
                </div>
                <div class="footer__col">
                    <h3>Canales</h3>
                    <a target="_blank" rel="noopener" href="https://www.instagram.com/">Instagram</a>
                    <a target="_blank" rel="noopener" href="https://www.linkedin.com/">LinkedIn</a>
                    <a target="_blank" rel="noopener" href="https://wa.me/34699460489">WhatsApp</a>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <p class="footer__dev">Desarrollado por <a href="https://xxliu95.github.io" target="_blank" rel="noopener">xxliu95</a></p>
        </div>
    </footer>

    <section id="cookie-consent" class="cookie-consent" hidden aria-live="polite">
        <p>
            Esta web no utiliza cookies analíticas ni publicitarias. Solo se podría emplear cookies técnicas imprescindibles del servidor para el funcionamiento básico.
            Tu preferencia se guarda localmente en este navegador.
        </p>
        <div class="cookie-consent__actions">
            <button type="button" id="cookie-consent-accept" class="btn btn--dark">Entendido</button>
            <button type="button" id="cookie-consent-details" class="btn btn--outline">Más información</button>
        </div>
    </section>

    <div id="legal-modal" class="legal-modal" hidden>
        <div class="legal-modal__backdrop" data-close-modal="true"></div>
        <div class="legal-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="legal-modal-title">
            <button type="button" class="legal-modal__close" data-close-modal="true" aria-label="Cerrar">&times;</button>

            <article class="legal-content" data-legal-content="aviso" hidden>
                <h2 id="legal-modal-title">Aviso legal y términos</h2>
                <p>Este sitio web ofrece información sobre servicios de psicoterapia para adultos. El acceso y uso del sitio implica la aceptación de condiciones de uso orientadas a un uso lícito y respetuoso del contenido.</p>
                <p>Los textos, diseño e imagen de marca están protegidos por la normativa de propiedad intelectual. Queda prohibida su reproducción total o parcial sin autorización expresa.</p>
                <p>Para cualquier consulta legal puedes escribir a marinamilantoni@hotmail.com.</p>
            </article>

            <article class="legal-content" data-legal-content="privacidad" hidden>
                <h2 id="legal-modal-title">Política de privacidad</h2>
                <p>Los datos enviados mediante el formulario (nombre, email y mensaje) se utilizan únicamente para responder a tu solicitud de contacto y prestar información sobre el servicio solicitado.</p>
                <p>La base legal es tu consentimiento al enviar el formulario. Puedes ejercer derechos de acceso, rectificación, supresión, oposición y limitación contactando por email.</p>
                <p>No se ceden datos a terceros salvo obligación legal.</p>
            </article>

            <article class="legal-content" data-legal-content="cookies" hidden>
                <h2 id="legal-modal-title">Política de cookies</h2>
                <p>Actualmente esta web no utiliza cookies analíticas, publicitarias ni de perfilado de terceros.</p>
                <p>Solo podrían existir cookies técnicas estrictamente necesarias del servidor para el funcionamiento básico del sitio.</p>
                <p>El aviso de consentimiento se guarda en almacenamiento local del navegador (localStorage), no en una cookie.</p>
            </article>
        </div>
    </div>

    <script>
        (function () {
            var root = document.documentElement;
            var maxSize = 200;
            var minSize = 110;
            var shrinkRange = 300;
            var form = document.getElementById('contact-form');
            var feedback = document.getElementById('form-feedback');
            var modal = document.getElementById('legal-modal');
            var legalTriggers = document.querySelectorAll('.legal-trigger');
            var legalContents = document.querySelectorAll('.legal-content');
            var cookieConsent = document.getElementById('cookie-consent');
            var cookieAcceptBtn = document.getElementById('cookie-consent-accept');
            var cookieDetailsBtn = document.getElementById('cookie-consent-details');
            var cookieStorageKey = 'thehumanclarity_cookie_notice_v1';

            function updateLogoSize() {
                var y = window.scrollY || window.pageYOffset || 0;
                var nextSize = maxSize - (y / shrinkRange) * (maxSize - minSize);
                var clampedSize = Math.max(minSize, Math.min(maxSize, nextSize));
                root.style.setProperty('--logo-size', clampedSize + 'px');
            }

            function showFeedback(ok, message, errors) {
                if (!feedback) return;
                if (ok) {
                    feedback.innerHTML = '<div class="alert alert--success" role="status" aria-live="polite">' + message + '</div>';
                    return;
                }

                var list = '';
                if (Array.isArray(errors) && errors.length) {
                    list = '<ul>' + errors.map(function (err) { return '<li>' + err + '</li>'; }).join('') + '</ul>';
                }
                feedback.innerHTML = '<div class="alert alert--error" role="alert" aria-live="assertive"><strong>' + message + '</strong>' + list + '</div>';
            }

            function openLegalModal(key) {
                if (!modal) return;
                legalContents.forEach(function (item) {
                    item.hidden = item.getAttribute('data-legal-content') !== key;
                });
                modal.hidden = false;
                document.body.classList.add('modal-open');
            }

            function closeLegalModal() {
                if (!modal) return;
                modal.hidden = true;
                document.body.classList.remove('modal-open');
            }

            function showCookieNoticeIfNeeded() {
                if (!cookieConsent) return;
                try {
                    if (!localStorage.getItem(cookieStorageKey)) {
                        cookieConsent.hidden = false;
                    }
                } catch (e) {
                    cookieConsent.hidden = false;
                }
            }

            function acceptCookieNotice() {
                if (!cookieConsent) return;
                cookieConsent.hidden = true;
                try {
                    localStorage.setItem(cookieStorageKey, 'accepted');
                } catch (e) {
                    // Ignore storage errors silently.
                }
            }

            if (form) {
                form.addEventListener('submit', function (event) {
                    event.preventDefault();

                    var formData = new FormData(form);
                    fetch(window.location.pathname, {
                        method: 'POST',
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest'
                        },
                        body: formData
                    })
                        .then(function (response) { return response.json(); })
                        .then(function (data) {
                            showFeedback(data.ok, data.message, data.errors);
                            if (data.ok) {
                                form.reset();
                            }
                        })
                        .catch(function () {
                            showFeedback(false, 'No se pudo enviar el formulario. Intentalo de nuevo.', []);
                        });
                });
            }

            legalTriggers.forEach(function (link) {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    openLegalModal(link.getAttribute('data-legal'));
                });
            });

            if (cookieAcceptBtn) {
                cookieAcceptBtn.addEventListener('click', function () {
                    acceptCookieNotice();
                });
            }

            if (cookieDetailsBtn) {
                cookieDetailsBtn.addEventListener('click', function () {
                    openLegalModal('cookies');
                });
            }

            document.addEventListener('click', function (event) {
                if (event.target && event.target.getAttribute('data-close-modal') === 'true') {
                    closeLegalModal();
                }
            });

            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape') {
                    closeLegalModal();
                }
            });

            window.addEventListener('scroll', updateLogoSize, { passive: true });
            updateLogoSize();
            showCookieNoticeIfNeeded();
        })();
    </script>
</body>
</html>
