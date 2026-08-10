(function () {
    'use strict';

    function t(key, fallback) {
        var lang = localStorage.getItem('preferredLanguage') || 'es';
        if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
            return translations[lang][key];
        }
        return fallback || key;
    }

    function flashCopied(el, original) {
        var prev = el.textContent;
        el.textContent = t('tools.common.copied', 'Copied');
        setTimeout(function () {
            el.textContent = original || prev;
        }, 1000);
    }

    function copyText(text) {
        return navigator.clipboard.writeText(text);
    }

    /* -------- Number to letters (existing) -------- */
    function normalizarNumeroEntrada(numero) {
        var limpio = numero.replace(/\s+/g, '');
        if (!/^\d{1,3}(\.\d{3})*(,\d+)?$|^\d+(,\d+)?$/.test(limpio)) {
            throw new Error('Formato inválido');
        }
        var parts = limpio.split(',');
        return {
            entero: parts[0].replace(/\./g, ''),
            decimal: parts[1] || ''
        };
    }

    function numeroALetras(numero) {
        var unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
        var especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
        var decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
        var centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

        function convertirGrupo(n) {
            if (n === 0) return '';
            if (n < 10) return unidades[n];
            if (n < 20) return especiales[n - 10];
            if (n < 30) return n === 20 ? 'veinte' : 'veinti' + unidades[n - 20];
            if (n < 100) {
                var dec = Math.floor(n / 10);
                var uni = n % 10;
                return decenas[dec] + (uni > 0 ? ' y ' + unidades[uni] : '');
            }
            if (n < 1000) {
                var cent = Math.floor(n / 100);
                var resto = n % 100;
                var centStr = n === 100 ? 'cien' : centenas[cent];
                return centStr + (resto > 0 ? ' ' + convertirGrupo(resto) : '');
            }
            return '';
        }

        function convertirMiles(n) {
            if (n === 0) return 'cero';
            if (n < 1000) return convertirGrupo(n);
            var miles = Math.floor(n / 1000);
            var resto = n % 1000;
            var milesStr = miles === 1 ? 'mil' : convertirGrupo(miles) + ' mil';
            return resto > 0 ? milesStr + ' ' + convertirGrupo(resto) : milesStr;
        }

        function convertirMillones(n) {
            if (n < 1000000) return convertirMiles(n);
            var millones = Math.floor(n / 1000000);
            var resto = n % 1000000;
            var millonesStr = millones === 1 ? 'un millón' : convertirMiles(millones) + ' millones';
            return resto > 0 ? millonesStr + ' ' + convertirMiles(resto) : millonesStr;
        }

        var numeroNormalizado = normalizarNumeroEntrada(numero.toString());
        var resultado;
        if (numeroNormalizado.decimal && parseInt(numeroNormalizado.decimal, 10) !== 0) {
            resultado = convertirMillones(parseInt(numeroNormalizado.entero, 10)) + ' con ' +
                convertirMillones(parseInt(numeroNormalizado.decimal, 10));
        } else {
            resultado = convertirMillones(parseInt(numeroNormalizado.entero, 10));
        }
        return resultado.toUpperCase();
    }

    var numeroForm = document.getElementById('numeroForm');
    if (numeroForm) {
        numeroForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var numeroInput = document.getElementById('numero').value;
            var resultado = document.getElementById('resultado');
            var copyButton = document.getElementById('copyNumero');
            try {
                normalizarNumeroEntrada(numeroInput);
                if (!numeroInput.trim()) throw new Error('empty');
                var letras = numeroALetras(numeroInput);
                resultado.textContent = letras;
                resultado.style.color = '#111827';
                resultado.dataset.resultado = letras;
                resultado.style.display = 'block';
                copyButton.style.display = 'inline-block';
            } catch (err) {
                resultado.textContent = t('tools.numero.modal.error', 'Error: invalid number');
                resultado.style.color = '#dc3545';
                resultado.style.display = 'block';
                copyButton.style.display = 'none';
            }
        });

        document.getElementById('copyNumero').addEventListener('click', function () {
            var texto = document.getElementById('resultado').dataset.resultado || '';
            if (!texto) return;
            var btn = this;
            copyText(texto).then(function () { flashCopied(btn); });
        });

        document.getElementById('numeroModal').addEventListener('hidden.bs.modal', function () {
            numeroForm.reset();
            document.getElementById('resultado').style.display = 'none';
            document.getElementById('copyNumero').style.display = 'none';
        });
    }

    /* -------- QR with styling -------- */
    var qrInstance = null;
    var qrExportCanvas = null;
    var QR_MAX_CHARS = 1200;
    var qrLogoDataUrl = '';
    var qrBakedLogo = null; // { src, bg, dataUrl }
    var qrBuildToken = 0;
    var qrPreviewTimer = null;

    function getQrImage() {
        return qrLogoDataUrl || undefined;
    }

    function setQrPreviewState(opts) {
        opts = opts || {};
        var empty = document.getElementById('qrPreviewEmpty');
        var error = document.getElementById('qrPreviewError');
        var download = document.getElementById('downloadQR');
        var meta = document.getElementById('qrPreviewMeta');
        var mount = document.getElementById('qrcode');

        if (empty) empty.style.display = opts.empty ? 'block' : 'none';
        if (error) {
            error.style.display = opts.error ? 'block' : 'none';
            error.textContent = opts.error || '';
        }
        if (download) download.style.display = opts.showDl ? 'inline-flex' : 'none';
        if (meta) meta.textContent = opts.meta || '';
        if (mount) mount.classList.toggle('is-empty', !!opts.empty || !!opts.clearCanvas);
    }

    function updateQrLogoThumb() {
        var thumb = document.getElementById('qrLogoThumb');
        var clearBtn = document.getElementById('clearQrLogo');
        var options = document.getElementById('qrLogoOptions');
        var hasLogo = !!qrLogoDataUrl;

        if (thumb) {
            if (hasLogo) {
                thumb.src = qrLogoDataUrl;
                thumb.classList.add('has-logo');
            } else {
                thumb.removeAttribute('src');
                thumb.classList.remove('has-logo');
            }
        }
        if (options) options.style.display = hasLogo ? '' : 'none';
        if (clearBtn) clearBtn.style.display = hasLogo ? 'inline-flex' : 'none';
    }

    function clearQrLogo() {
        qrLogoDataUrl = '';
        qrBakedLogo = null;
        var fileInput = document.getElementById('qrLogoFile');
        if (fileInput) fileInput.value = '';
        updateQrLogoThumb();
        scheduleQrPreview();
    }

    function setPickerActive(key, value) {
        document.querySelectorAll('[data-qr="' + key + '"]').forEach(function (b) {
            var on = b.getAttribute('data-value') === String(value);
            b.classList.toggle('active', on);
            b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
    }

    function resetQrPickerDefaults() {
        var defaults = {
            size: '280',
            margin: '8',
            dots: 'square',
            corners: 'square',
            logoSize: '0.8'
        };
        var map = {
            size: 'qrSize',
            margin: 'qrMargin',
            dots: 'qrDots',
            corners: 'qrCorners',
            logoSize: 'qrLogoSize'
        };
        Object.keys(defaults).forEach(function (key) {
            var input = document.getElementById(map[key]);
            if (input) input.value = defaults[key];
            setPickerActive(key, defaults[key]);
        });
        var fg = document.getElementById('qrFg');
        var bg = document.getElementById('qrBg');
        if (fg) fg.value = '#111827';
        if (bg) bg.value = '#ffffff';
        var text = document.getElementById('qrText');
        if (text) text.value = '';
    }

    function clearQrPreview() {
        var mount = document.getElementById('qrcode');
        if (mount) mount.innerHTML = '';
        qrInstance = null;
        qrExportCanvas = null;
        setQrPreviewState({ empty: true, showDl: false, meta: '', error: '' });
    }

    // Discrete margin levels with guaranteed pixel gaps (library margin snaps to modules and can cancel %)
    function computeQrPad(size, marginPct) {
        var levels = { 0: 0, 4: 1, 8: 2, 12: 3, 16: 4 };
        var level = levels[marginPct];
        if (level == null) level = Math.max(0, Math.round(marginPct / 4));
        var step = Math.max(14, Math.round(size * 0.05));
        var pad = level * step;
        var maxPad = Math.floor((size - 100) / 2);
        if (maxPad < 0) maxPad = 0;
        if (pad > maxPad) pad = maxPad;
        return pad;
    }

    // Center-crop any image to a square (used on upload)
    function cropImageToSquare(src, done) {
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function () {
            try {
                var side = Math.min(img.width, img.height);
                if (!side) {
                    done(null);
                    return;
                }
                var sx = Math.floor((img.width - side) / 2);
                var sy = Math.floor((img.height - side) / 2);
                var out = Math.min(1024, side);
                var canvas = document.createElement('canvas');
                canvas.width = out;
                canvas.height = out;
                var ctx = canvas.getContext('2d');
                if (!ctx) {
                    done(null);
                    return;
                }
                ctx.drawImage(img, sx, sy, side, side, 0, 0, out, out);
                done(canvas.toDataURL('image/png'));
            } catch (err) {
                done(null);
            }
        };
        img.onerror = function () {
            done(null);
        };
        img.src = src;
    }

    // Bake square logo with a thin quiet pad; slot size is controlled by imageSize
    function makeSquareLogo(src, bg, done) {
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function () {
            try {
                var size = 512;
                var canvas = document.createElement('canvas');
                canvas.width = size;
                canvas.height = size;
                var ctx = canvas.getContext('2d');
                if (!ctx) {
                    done(null);
                    return;
                }
                ctx.fillStyle = bg || '#ffffff';
                ctx.fillRect(0, 0, size, size);

                // Thin pad only — icon size picker shrinks the whole slot (incl. this margin)
                var pad = Math.round(size * 0.08);
                var inner = size - pad * 2;
                var fit = Math.min(inner / img.width, inner / img.height);
                var w = img.width * fit;
                var h = img.height * fit;
                ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
                done(canvas.toDataURL('image/png'));
            } catch (err) {
                done(null);
            }
        };
        img.onerror = function () {
            done(null);
        };
        img.src = src;
    }

    function hexToRgb(hex) {
        var h = (hex || '').replace('#', '');
        if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
        if (h.length !== 6) return null;
        return {
            r: parseInt(h.slice(0, 2), 16),
            g: parseInt(h.slice(2, 4), 16),
            b: parseInt(h.slice(4, 6), 16)
        };
    }

    function relativeLuminance(rgb) {
        function chan(c) {
            c = c / 255;
            return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * chan(rgb.r) + 0.7152 * chan(rgb.g) + 0.0722 * chan(rgb.b);
    }

    function qrColorsTooClose(fg, bg) {
        var a = hexToRgb(fg);
        var b = hexToRgb(bg);
        if (!a || !b) return false;
        var l1 = relativeLuminance(a);
        var l2 = relativeLuminance(b);
        var lighter = Math.max(l1, l2);
        var darker = Math.min(l1, l2);
        var ratio = (lighter + 0.05) / (darker + 0.05);
        return ratio < 2.5;
    }

    function getQrBaseOptions(data) {
        var size = parseInt(document.getElementById('qrSize').value, 10) || 280;
        var fg = document.getElementById('qrFg').value || '#111827';
        var bg = document.getElementById('qrBg').value || '#ffffff';
        var marginPct = parseInt(document.getElementById('qrMargin').value, 10);
        if (isNaN(marginPct)) marginPct = 8;
        marginPct = Math.max(0, Math.min(24, marginPct));
        var pad = computeQrPad(size, marginPct);
        var contentSize = size - 2 * pad;
        if (contentSize < 100) {
            pad = Math.max(0, Math.floor((size - 100) / 2));
            contentSize = size - 2 * pad;
        }
        var dotsType = document.getElementById('qrDots').value || 'square';
        var cornerType = document.getElementById('qrCorners').value || 'square';
        // Library only supports square | dot | extra-rounded for corner frames.
        // Extra styles are outer+inner combinations for clearer visual variety.
        var cornerPresets = {
            square: { outer: 'square', inner: 'square' },
            soft: { outer: 'square', inner: 'dot' },
            dot: { outer: 'dot', inner: 'dot' },
            rounded: { outer: 'extra-rounded', inner: 'square' },
            'extra-rounded': { outer: 'extra-rounded', inner: 'dot' },
            classy: { outer: 'dot', inner: 'square' }
        };
        var cornerPreset = cornerPresets[cornerType] || cornerPresets.square;
        var logoSize = parseFloat(document.getElementById('qrLogoSize').value);
        if (isNaN(logoSize)) logoSize = 0.8;
        // Whole center slot (icon + quiet margin). Library also scales by EC (H≈0.3).
        logoSize = Math.min(1, Math.max(0.3, logoSize));
        var logoSrc = getQrImage();
        var ec = logoSrc ? 'H' : 'M';

        return {
            // Generate content without library margin; we pad afterward so % steps stay visible
            width: contentSize,
            height: contentSize,
            type: 'canvas',
            data: data,
            margin: 0,
            qrOptions: { errorCorrectionLevel: ec },
            dotsOptions: { color: fg, type: dotsType },
            backgroundOptions: { color: bg },
            cornersSquareOptions: { type: cornerPreset.outer, color: fg },
            cornersDotOptions: { type: cornerPreset.inner, color: fg },
            imageOptions: {
                crossOrigin: 'anonymous',
                margin: 0,
                imageSize: logoSize,
                hideBackgroundDots: true
            },
            _bg: bg,
            _size: size,
            _pad: pad,
            _marginPct: marginPct
        };
    }

    // Preview size follows export size so 200/280/360/480 look different (download stays full-res)
    function applyQrPreviewScale(mount, exportSize) {
        var el = mount && mount.querySelector('canvas, svg');
        if (!el) return;
        var hostW = mount.clientWidth || 280;
        var narrow = window.matchMedia('(max-width: 575px)').matches;
        var maxPreview = Math.min(hostW, narrow ? 196 : 340);
        var minDisplay = narrow ? 128 : 150;
        var t = (exportSize - 200) / 280; // 200→0, 480→1
        if (t < 0) t = 0;
        if (t > 1) t = 1;
        var display = Math.round(minDisplay + t * (maxPreview - minDisplay));
        el.style.width = display + 'px';
        el.style.height = display + 'px';
    }

    function buildQr() {
        var mount = document.getElementById('qrcode');
        if (!mount) return;

        if (typeof QRCodeStyling === 'undefined') {
            setQrPreviewState({
                error: t('tools.qr.error.lib', 'QR library failed to load. Refresh the page.'),
                showDl: false,
                empty: false,
                clearCanvas: true
            });
            return;
        }

        var data = (document.getElementById('qrText').value || '').trim();
        if (!data) {
            clearQrPreview();
            return;
        }

        if (data.length > QR_MAX_CHARS) {
            mount.innerHTML = '';
            qrInstance = null;
            setQrPreviewState({
                error: t('tools.qr.error.long', 'Text is too long for a reliable QR code.'),
                showDl: false,
                empty: false,
                clearCanvas: true
            });
            return;
        }

        var token = ++qrBuildToken;
        var options = getQrBaseOptions(data);
        var logoSrc = getQrImage();
        var sizeLabel = options._size + '\u00d7' + options._size + 'px \u00b7 ' + options._marginPct + '%';

        function render(finalOptions) {
            if (token !== qrBuildToken) return;
            try {
                var exportSize = finalOptions._size;
                var marginPct = finalOptions._marginPct;
                var pad = finalOptions._pad || 0;
                var bg = finalOptions._bg || '#ffffff';
                var contentSize = exportSize - 2 * pad;
                delete finalOptions._bg;
                delete finalOptions._size;
                delete finalOptions._marginPct;
                delete finalOptions._pad;

                mount.innerHTML = '';
                qrExportCanvas = null;
                qrInstance = new QRCodeStyling(finalOptions);
                qrInstance.append(mount);

                function finishPreview() {
                    if (token !== qrBuildToken) return;
                    var src = mount.querySelector('canvas');
                    if (!src) return;

                    if (pad > 0) {
                        var out = document.createElement('canvas');
                        out.width = exportSize;
                        out.height = exportSize;
                        var ctx = out.getContext('2d');
                        if (ctx) {
                            ctx.fillStyle = bg;
                            ctx.fillRect(0, 0, exportSize, exportSize);
                            ctx.drawImage(src, pad, pad, contentSize, contentSize);
                            mount.innerHTML = '';
                            mount.appendChild(out);
                            qrExportCanvas = out;
                        } else {
                            qrExportCanvas = src;
                        }
                    } else {
                        qrExportCanvas = src;
                    }

                    applyQrPreviewScale(mount, exportSize);
                    var warn = '';
                    if (qrColorsTooClose(finalOptions.dotsOptions.color, finalOptions.backgroundOptions.color)) {
                        warn = t('tools.qr.error.contrast', 'Low contrast: this QR may be hard to scan.');
                    }
                    setQrPreviewState({
                        empty: false,
                        error: warn,
                        showDl: true,
                        meta: exportSize + '\u00d7' + exportSize + 'px \u00b7 ' + marginPct + '%'
                    });
                }

                // Wait until library finishes drawing (async SVG→canvas)
                if (qrInstance && typeof qrInstance.getRawData === 'function') {
                    qrInstance.getRawData('png').then(finishPreview).catch(finishPreview);
                } else {
                    setTimeout(finishPreview, 40);
                }
            } catch (err) {
                console.error('QR build failed', err);
                mount.innerHTML = '';
                qrInstance = null;
                qrExportCanvas = null;
                setQrPreviewState({
                    error: t('tools.qr.error.build', 'Could not generate this QR. Try shorter text or different options.'),
                    showDl: false,
                    empty: false,
                    clearCanvas: true
                });
            }
        }

        if (!logoSrc) {
            options.image = undefined;
            render(options);
            return;
        }

        if (qrBakedLogo && qrBakedLogo.src === logoSrc && qrBakedLogo.bg === options._bg) {
            options.image = qrBakedLogo.dataUrl;
            render(options);
            return;
        }

        makeSquareLogo(logoSrc, options._bg, function (squareDataUrl) {
            if (token !== qrBuildToken) return;
            if (squareDataUrl) {
                qrBakedLogo = { src: logoSrc, bg: options._bg, dataUrl: squareDataUrl };
                options.image = squareDataUrl;
            } else {
                options.image = logoSrc;
            }
            render(options);
        });
    }

    function scheduleQrPreview() {
        clearTimeout(qrPreviewTimer);
        qrPreviewTimer = setTimeout(buildQr, 120);
    }

    var qrForm = document.getElementById('qrForm');
    if (qrForm) {
        qrForm.addEventListener('submit', function (e) {
            e.preventDefault();
            buildQr();
        });

        var qrText = document.getElementById('qrText');
        if (qrText) {
            qrText.addEventListener('input', scheduleQrPreview);
            qrText.addEventListener('paste', function () {
                setTimeout(scheduleQrPreview, 0);
            });
        }

        document.querySelectorAll('[data-qr]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var key = btn.getAttribute('data-qr');
                var value = btn.getAttribute('data-value');
                var map = {
                    size: 'qrSize',
                    margin: 'qrMargin',
                    dots: 'qrDots',
                    corners: 'qrCorners',
                    logoSize: 'qrLogoSize'
                };
                var input = document.getElementById(map[key]);
                if (input) input.value = value;
                setPickerActive(key, value);
                scheduleQrPreview();
            });
        });

        ['qrFg', 'qrBg'].forEach(function (id) {
            var el = document.getElementById(id);
            if (!el) return;
            el.addEventListener('change', scheduleQrPreview);
            el.addEventListener('input', scheduleQrPreview);
        });

        var logoFile = document.getElementById('qrLogoFile');
        if (logoFile) {
            logoFile.addEventListener('change', function (e) {
                var file = e.target.files && e.target.files[0];
                if (!file) return;
                if (!file.type || file.type.indexOf('image/') !== 0) {
                    setQrPreviewState({
                        error: t('tools.qr.error.image', 'Please upload an image file.'),
                        showDl: !!qrInstance,
                        empty: false,
                        meta: document.getElementById('qrPreviewMeta') ? document.getElementById('qrPreviewMeta').textContent : ''
                    });
                    logoFile.value = '';
                    return;
                }
                if (file.size > 2 * 1024 * 1024) {
                    setQrPreviewState({
                        error: t('tools.qr.error.imagesize', 'Logo must be under 2MB.'),
                        showDl: !!qrInstance,
                        empty: false,
                        meta: document.getElementById('qrPreviewMeta') ? document.getElementById('qrPreviewMeta').textContent : ''
                    });
                    logoFile.value = '';
                    return;
                }
                var reader = new FileReader();
                reader.onload = function () {
                    cropImageToSquare(reader.result, function (cropped) {
                        qrLogoDataUrl = cropped || reader.result;
                        qrBakedLogo = null;
                        updateQrLogoThumb();
                        scheduleQrPreview();
                    });
                };
                reader.onerror = function () {
                    setQrPreviewState({
                        error: t('tools.qr.error.image', 'Please upload an image file.'),
                        showDl: !!qrInstance,
                        empty: false
                    });
                };
                reader.readAsDataURL(file);
            });
        }

        var clearQrLogoBtn = document.getElementById('clearQrLogo');
        if (clearQrLogoBtn) clearQrLogoBtn.addEventListener('click', clearQrLogo);

        var downloadBtn = document.getElementById('downloadQR');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', function () {
                var canvas = qrExportCanvas || (document.getElementById('qrcode') && document.getElementById('qrcode').querySelector('canvas'));
                if (canvas && canvas.toBlob) {
                    canvas.toBlob(function (blob) {
                        if (!blob) return;
                        var url = URL.createObjectURL(blob);
                        var a = document.createElement('a');
                        a.href = url;
                        a.download = 'qr-code.png';
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                        setTimeout(function () {
                            URL.revokeObjectURL(url);
                        }, 1000);
                    }, 'image/png');
                    return;
                }
                if (qrInstance) {
                    try {
                        qrInstance.download({ name: 'qr-code', extension: 'png' });
                    } catch (err) {
                        console.error(err);
                    }
                }
            });
        }

        var qrModal = document.getElementById('qrModal');
        if (qrModal) {
            qrModal.addEventListener('shown.bs.modal', function () {
                updateQrLogoThumb();
                scheduleQrPreview();
                if (qrText) qrText.focus();
            });

            qrModal.addEventListener('hidden.bs.modal', function () {
                clearTimeout(qrPreviewTimer);
                qrBakedLogo = null;
                resetQrPickerDefaults();
                qrLogoDataUrl = '';
                var fileInput = document.getElementById('qrLogoFile');
                if (fileInput) fileInput.value = '';
                updateQrLogoThumb();
                clearQrPreview();
            });
        }

        // Initial logo thumb state
        updateQrLogoThumb();
    }

    /* -------- Units -------- */
    var units = {
        length: { metros: 1, kilómetros: 0.001, centímetros: 100, milímetros: 1000, millas: 0.000621371, pies: 3.28084, pulgadas: 39.3701 },
        weight: { kilogramos: 1, gramos: 1000, miligramos: 1000000, libras: 2.20462, onzas: 35.274, toneladas: 0.001 },
        temperature: { celsius: 'C', fahrenheit: 'F', kelvin: 'K' }
    };

    function updateUnitSelects() {
        var type = document.getElementById('unitType').value;
        var fromSelect = document.getElementById('unitFrom');
        var toSelect = document.getElementById('unitTo');
        fromSelect.innerHTML = '';
        toSelect.innerHTML = '';
        Object.keys(units[type]).forEach(function (unit) {
            var label = t('tools.unit.length.' + unit, unit);
            if (type === 'weight') label = t('tools.unit.weight.' + unit, unit);
            if (type === 'temperature') label = t('tools.unit.temperature.' + unit, unit);
            fromSelect.innerHTML += '<option value="' + unit + '">' + label + '</option>';
            toSelect.innerHTML += '<option value="' + unit + '">' + label + '</option>';
        });
        if (toSelect.options.length > 1) toSelect.selectedIndex = 1;
        convertUnit();
    }

    function convertTemperature(value, from, to) {
        var celsius;
        if (from === 'celsius') celsius = value;
        else if (from === 'fahrenheit') celsius = (value - 32) * 5 / 9;
        else celsius = value - 273.15;
        if (to === 'celsius') return celsius;
        if (to === 'fahrenheit') return celsius * 9 / 5 + 32;
        return celsius + 273.15;
    }

    function convertUnit() {
        var type = document.getElementById('unitType').value;
        var from = document.getElementById('unitFrom').value;
        var to = document.getElementById('unitTo').value;
        var value = parseFloat(document.getElementById('unitValue').value);
        if (isNaN(value)) return;
        var result;
        if (type === 'temperature') result = convertTemperature(value, from, to);
        else result = value * units[type][to] / units[type][from];
        var resultDiv = document.getElementById('unitResult');
        resultDiv.innerHTML = '<strong>' + value + ' ' + from + '</strong> = <strong>' + result.toFixed(4) + ' ' + to + '</strong>';
        resultDiv.style.display = 'block';
    }

    if (document.getElementById('unitType')) {
        document.getElementById('unitType').addEventListener('change', updateUnitSelects);
        document.getElementById('unitValue').addEventListener('input', convertUnit);
        document.getElementById('unitFrom').addEventListener('change', convertUnit);
        document.getElementById('unitTo').addEventListener('change', convertUnit);
        var swapBtn = document.getElementById('swapUnits');
        if (swapBtn) {
            swapBtn.addEventListener('click', function () {
                var from = document.getElementById('unitFrom');
                var to = document.getElementById('unitTo');
                var tmp = from.value;
                from.value = to.value;
                to.value = tmp;
                convertUnit();
            });
        }
        document.getElementById('unitModal').addEventListener('shown.bs.modal', updateUnitSelects);
    }

    /* -------- Word counter -------- */
    var textInput = document.getElementById('textInput');
    if (textInput) {
        function updateWordStats() {
            var text = textInput.value;
            var words = text.trim() ? text.trim().split(/\s+/).length : 0;
            var chars = text.length;
            var charsNoSpaces = text.replace(/\s/g, '').length;
            var lines = text ? text.split('\n').length : 0;
            var reading = Math.max(1, Math.ceil(words / 200));
            document.getElementById('wordStats').innerHTML =
                '<div class="stats-grid">' +
                '<div class="stat-card"><strong>' + words + '</strong><span>' + t('tools.word.modal.words', 'Words') + '</span></div>' +
                '<div class="stat-card"><strong>' + chars + '</strong><span>' + t('tools.word.modal.chars', 'Characters') + '</span></div>' +
                '<div class="stat-card"><strong>' + charsNoSpaces + '</strong><span>' + t('tools.word.modal.charsNoSpaces', 'No spaces') + '</span></div>' +
                '<div class="stat-card"><strong>' + lines + '</strong><span>' + t('tools.word.modal.lines', 'Lines') + '</span></div>' +
                '<div class="stat-card"><strong>' + reading + ' min</strong><span>' + t('tools.word.modal.reading', 'Reading time') + '</span></div>' +
                '</div>';
        }
        textInput.addEventListener('input', updateWordStats);
        var clearWord = document.getElementById('clearWord');
        if (clearWord) {
            clearWord.addEventListener('click', function () {
                textInput.value = '';
                updateWordStats();
            });
        }
        updateWordStats();
    }

    /* -------- JSON -------- */
    function showJson(content) {
        var output = document.getElementById('jsonOutput');
        var error = document.getElementById('jsonError');
        output.innerHTML = '<pre style="margin:0;white-space:pre-wrap;word-break:break-word;">' +
            content.replace(/</g, '&lt;') + '</pre>';
        output.style.display = 'block';
        output.dataset.json = content;
        error.style.display = 'none';
        var copyBtn = document.getElementById('copyJSON');
        if (copyBtn) copyBtn.style.display = 'inline-block';
    }

    function showJsonError(msg) {
        document.getElementById('jsonError').textContent = msg;
        document.getElementById('jsonError').style.display = 'block';
        document.getElementById('jsonOutput').style.display = 'none';
        var copyBtn = document.getElementById('copyJSON');
        if (copyBtn) copyBtn.style.display = 'none';
    }

    if (document.getElementById('formatJSON')) {
        document.getElementById('formatJSON').addEventListener('click', function () {
            try {
                showJson(JSON.stringify(JSON.parse(document.getElementById('jsonInput').value), null, 2));
            } catch (e) {
                showJsonError(t('tools.json.modal.error', 'Invalid JSON') + ' - ' + e.message);
            }
        });
        document.getElementById('minifyJSON').addEventListener('click', function () {
            try {
                showJson(JSON.stringify(JSON.parse(document.getElementById('jsonInput').value)));
            } catch (e) {
                showJsonError(t('tools.json.modal.error', 'Invalid JSON') + ' - ' + e.message);
            }
        });
        var copyJSON = document.getElementById('copyJSON');
        if (copyJSON) {
            copyJSON.addEventListener('click', function () {
                var data = document.getElementById('jsonOutput').dataset.json || '';
                if (!data) return;
                copyText(data).then(function () { flashCopied(copyJSON); });
            });
        }
    }

    /* -------- Text tools -------- */
    function applyTextTransform(type) {
        var input = document.getElementById('textToolInput');
        if (!input) return;
        var v = input.value;
        if (type === 'upper') input.value = v.toUpperCase();
        else if (type === 'lower') input.value = v.toLowerCase();
        else if (type === 'title') {
            input.value = v.toLowerCase().replace(/\b\w/g, function (c) { return c.toUpperCase(); });
        } else if (type === 'sentence') {
            input.value = v.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function (c) { return c.toUpperCase(); });
        } else if (type === 'trim') {
            input.value = v.replace(/[ \t]+/g, ' ').replace(/ ?\n ?/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
        } else if (type === 'oneline') {
            input.value = v.replace(/\s+/g, ' ').trim();
        }
    }

    document.querySelectorAll('[data-text-action]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            applyTextTransform(btn.getAttribute('data-text-action'));
        });
    });

    var copyTextTool = document.getElementById('copyTextTool');
    if (copyTextTool) {
        copyTextTool.addEventListener('click', function () {
            var v = document.getElementById('textToolInput').value;
            copyText(v).then(function () { flashCopied(copyTextTool); });
        });
    }

    /* -------- Date / business-day calculator (Spain) -------- */
    function parseDateInput(value) {
        if (!value) return null;
        var parts = value.split('-');
        if (parts.length !== 3) return null;
        var y = parseInt(parts[0], 10);
        var m = parseInt(parts[1], 10);
        var d = parseInt(parts[2], 10);
        if (!y || !m || !d) return null;
        return new Date(y, m - 1, d);
    }

    function dateKey(date) {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }

    function easterSunday(year) {
        var a = year % 19;
        var b = Math.floor(year / 100);
        var c = year % 100;
        var d = Math.floor(b / 4);
        var e = b % 4;
        var f = Math.floor((b + 8) / 25);
        var g = Math.floor((b - f + 1) / 3);
        var h = (19 * a + b - d - g + 15) % 30;
        var i = Math.floor(c / 4);
        var k = c % 4;
        var l = (32 + 2 * e + 2 * i - h - k) % 7;
        var m = Math.floor((a + 11 * h + 22 * l) / 451);
        var month = Math.floor((h + l - 7 * m + 114) / 31);
        var day = ((h + l - 7 * m + 114) % 31) + 1;
        return new Date(year, month - 1, day);
    }

    function spainHolidaySet(year) {
        var set = {};
        var fixed = [
            [0, 1],   // Año Nuevo
            [0, 6],   // Reyes
            [4, 1],   // Fiesta del Trabajo
            [7, 15],  // Asunción
            [9, 12],  // Fiesta Nacional
            [10, 1],  // Todos los Santos
            [11, 6],  // Constitución
            [11, 8],  // Inmaculada
            [11, 25]  // Navidad
        ];
        fixed.forEach(function (md) {
            set[dateKey(new Date(year, md[0], md[1]))] = true;
        });
        var easter = easterSunday(year);
        var goodFriday = new Date(easter.getFullYear(), easter.getMonth(), easter.getDate() - 2);
        set[dateKey(goodFriday)] = true;
        return set;
    }

    function holidayCacheForRange(start, end) {
        var cache = {};
        var y0 = start.getFullYear();
        var y1 = end.getFullYear();
        for (var y = y0; y <= y1; y++) cache[y] = spainHolidaySet(y);
        return cache;
    }

    function isSpainHoliday(date, cache) {
        var yearSet = cache[date.getFullYear()];
        return !!(yearSet && yearSet[dateKey(date)]);
    }

    function countDateRange(start, end, inclusive) {
        var a = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        var b = new Date(end.getFullYear(), end.getMonth(), end.getDate());
        if (a.getTime() > b.getTime()) {
            var tmp = a;
            a = b;
            b = tmp;
        }

        if (!inclusive) {
            a.setDate(a.getDate() + 1);
            b.setDate(b.getDate() - 1);
        }

        var calendar = 0;
        var business = 0;
        var holidays = 0;

        if (a.getTime() > b.getTime()) {
            return { calendar: 0, business: 0, holidays: 0 };
        }

        var holidaysCache = holidayCacheForRange(a, b);
        var cur = new Date(a.getFullYear(), a.getMonth(), a.getDate());
        while (cur.getTime() <= b.getTime()) {
            calendar += 1;
            var day = cur.getDay();
            var weekend = day === 0 || day === 6;
            var holiday = isSpainHoliday(cur, holidaysCache);
            if (holiday) holidays += 1;
            if (!weekend && !holiday) business += 1;
            cur.setDate(cur.getDate() + 1);
        }

        return { calendar: calendar, business: business, holidays: holidays };
    }

    var dateFrom = document.getElementById('dateFrom');
    var dateTo = document.getElementById('dateTo');
    var dateInclusive = document.getElementById('dateInclusive');
    var dateStats = document.getElementById('dateStats');

    if (dateFrom && dateTo && dateInclusive && dateStats) {
        function updateDateStats() {
            var start = parseDateInput(dateFrom.value);
            var end = parseDateInput(dateTo.value);
            if (!start || !end) {
                dateStats.innerHTML = '<p class="date-tool-empty">' +
                    t('tools.dates.modal.empty', 'Select two dates to calculate.') + '</p>';
                return;
            }

            var result = countDateRange(start, end, dateInclusive.checked);
            dateStats.innerHTML =
                '<div class="stats-grid">' +
                '<div class="stat-card"><strong>' + result.calendar + '</strong><span>' +
                t('tools.dates.modal.calendar', 'Calendar days') + '</span></div>' +
                '<div class="stat-card"><strong>' + result.business + '</strong><span>' +
                t('tools.dates.modal.business', 'Business days') + '</span></div>' +
                '<div class="stat-card"><strong>' + result.holidays + '</strong><span>' +
                t('tools.dates.modal.holidays', 'National holidays') + '</span></div>' +
                '</div>';
        }

        dateFrom.addEventListener('change', updateDateStats);
        dateTo.addEventListener('change', updateDateStats);
        dateInclusive.addEventListener('change', updateDateStats);

        var datesModal = document.getElementById('datesModal');
        if (datesModal) {
            datesModal.addEventListener('shown.bs.modal', updateDateStats);
            datesModal.addEventListener('hidden.bs.modal', function () {
                dateFrom.value = '';
                dateTo.value = '';
                dateInclusive.checked = true;
                updateDateStats();
            });
        }

        document.addEventListener('languageChanged', updateDateStats);
        updateDateStats();
    }
})();
