const translations = {
    es: {
        // Header
        'nav.home': 'Currículum',
        'nav.tools': 'Herramientas',
        'nav.github': 'Mi Github',
        
        // Hero Section
        'hero.title': 'Xinxin Liu',
        'hero.subtitle': 'Ingeniero de Software | Development Team Leader',
        
        // About Section
        'about.title': 'Sobre Mí',
        'about.content': 'Ingeniero de software y Development Team Leader con experiencia en sistemas distribuidos, aplicaciones cloud, desarrollo asistido por IA y colaboración multifuncional. Capacidad demostrada para aprender rápido, resolver retos técnicos complejos y entregar software de alta calidad en entornos Agile.',
        
        // Experience Section
        'experience.title': 'Experiencia',
        'experience.teamlead.title': 'Development Team Leader',
        'experience.teamlead.company': 'Ericsson Spain SA. | Madrid',
        'experience.teamlead.date': 'Mayo 2026 - Presente',
        'experience.teamlead.task1': 'Lidero un equipo de ingeniería multifuncional que desarrolla el producto 5G Core de Ericsson',
        'experience.teamlead.task2': 'Coordino stakeholders, prioridades de entrega y decisiones técnicas',
        'experience.teamlead.task3': 'Impulso la ejecución Agile, el desarrollo del equipo y las mejoras de proceso',
        'experience.teamlead.task4': 'Gestiono riesgos, planificación de recursos y compromisos de entrega',

        'experience.ericsson.title': 'Ingeniero de Desarrollo de Software',
        'experience.ericsson.company': 'Ericsson Spain SA. | Madrid',
        'experience.ericsson.date': 'Julio 2021 - Presente',
        'experience.ericsson.task1': 'Desarrollo sistemas de red distribuidos a gran escala con C++, Python y Linux',
        'experience.ericsson.task2': 'Diseño, implemento, pruebo y mantengo funcionalidades de productos LTE y 5G Core',
        'experience.ericsson.task3': 'Construyo herramientas de automatización y mejoro flujos de CI/CD y testing',
        'experience.ericsson.task4': 'Refactoreo código legacy, mejoro mantenibilidad y resuelvo incidencias complejas en producción',
        'experience.ericsson.task5': 'Colaboro con equipos distribuidos en Europa y China',
        
        'experience.freelance.title': 'Desarrollador Full-stack',
        'experience.freelance.company': 'Autónomo',
        'experience.freelance.date': 'Feb 2025 – Presente',
        'experience.freelance.task1': 'Desarrollo aplicaciones web con React, Django y PostgreSQL desplegadas en Google Cloud',
        'experience.freelance.task2': 'Integro APIs de terceros, servicios de pago y proveedores logísticos',
        'experience.freelance.task3': 'Uso LLMs, agentes de IA y flujos MCP para acelerar el desarrollo y automatizar procesos de negocio',
        'experience.freelance.task4': '<strong><a href="https://xmexpress.es" target="_blank" rel="noopener noreferrer">xmexpress.es</a>:</strong> Sistema de gestión empresarial para logística — React, Django REST Framework, PostgreSQL, Google Cloud',
        'experience.freelance.task5': '<strong><a href="https://colegiobase.cn" target="_blank" rel="noopener noreferrer">colegiobase.cn</a>:</strong> Sitio web de marketing en chino para Base International School (Madrid)',
        'experience.freelance.task6': '<strong><a href="https://thehumanclarity.com" target="_blank" rel="noopener noreferrer">thehumanclarity.com</a>:</strong> Web profesional para psicóloga y coach ejecutiva — servicios, proceso y contacto',
        
        'experience.intern.title': 'Ingeniero de Desarrollo de Software I+D (Prácticas)',
        'experience.intern.company': 'Ericsson Spain SA. | Madrid',
        'experience.intern.date': 'Julio 2020 – Junio 2021',
        'experience.intern.task1': 'Desarrollé simulaciones de optimización de tráfico y streaming adaptativo con NS-3 y C++',
        'experience.intern.task2': 'Implementé algoritmos ABR y realicé análisis de rendimiento',
        
        // Education Section
        'education.title': 'Educación',
        'education.meng.degree': 'Máster en Ingeniería de Telecomunicación',
        'education.meng.school': 'Universidad Politécnica de Madrid | España',
        'education.meng.date': 'Septiembre 2019 – Julio 2021',
        
        'education.beng.degree': 'Grado en Ingeniería de Tecnologías y Servicios de Telecomunicación',
        'education.beng.school': 'Universidad Politécnica de Madrid | España',
        'education.beng.date': 'Septiembre 2015 – Julio 2019',
        
        'education.tsinghua.degree': 'Estudiante de Investigación Visitante - Ciencias de la Computación',
        'education.tsinghua.school': 'Universidad de Tsinghua | China',
        'education.tsinghua.date': 'Septiembre 2018 – Enero 2019',
        
        // Courses Section
        'courses.title': 'Cursos y Certificaciones',
        'courses.cloud.name': 'Fundamentos de Ingeniería Cloud Native',
        'courses.cloud.provider': 'Ericsson | Septiembre 2023',
        
        'courses.redis.name': 'Almacenamiento de Datos en Memoria Redis',
        'courses.redis.provider': 'Skillsoft | Mayo 2024',
        
        'courses.docker.name': 'Introducción a Docker + administración de Kubernetes y Helm',
        'courses.docker.provider': 'Component Soft | Agosto 2024',
        
        'courses.go.name': 'Lenguaje Go',
        'courses.go.provider': 'Ericsson & Universidad Carlos III | Octubre 2024',
        
        // Skills Section
        'skills.title': 'Habilidades',
        'skills.languages.title': 'Idiomas',
        'skills.languages.chinese': 'Chino (Nativo)',
        'skills.languages.spanish': 'Español (Nativo)',
        'skills.languages.english': 'Inglés (C1)',
        
        'skills.programming.title': 'Programación',
        'skills.ai.title': 'IA',
        
        'skills.technologies.title': 'Herramientas',
        
        'skills.soft.title': 'Soft Skills',
        'skills.soft.agile': 'Trabajo en equipo Agile',
        'skills.soft.problem': 'Resolución de problemas complejos',
        'skills.soft.troubleshooting': 'Troubleshooting',
        'skills.soft.leadership': 'Liderazgo de proyectos técnicos',
        
        // Tools Page
        'tools.title': 'Herramientas',
        
        'tools.numero.title': 'Número a letras',
        'tools.numero.description': 'Convierte números a su representación en letras en español. Soporta números enteros y decimales.',
        'tools.numero.button': 'Abrir herramienta',
        'tools.numero.modal.title': 'Número a letras en español',
        'tools.numero.modal.label': 'Ingresa un número',
        'tools.numero.modal.placeholder': 'Ejemplo: 1.234,56',
        'tools.numero.modal.convert': 'Convertir',
        'tools.numero.modal.copy': 'Copiar resultado',
        'tools.numero.modal.copied': 'Copiado',
        
        'tools.qr.title': 'Generador de Código QR',
        'tools.qr.description': 'Genera códigos QR personalizados a partir de texto, URLs o cualquier información.',
        'tools.qr.button': 'Abrir herramienta',
        'tools.qr.modal.title': 'Generador de Código QR',
        'tools.qr.modal.label': 'Texto o URL',
        'tools.qr.modal.placeholder': 'Ejemplo: https://tuwebsite.com',
        'tools.qr.modal.generate': 'Generar QR',
        'tools.qr.modal.download': 'Descargar QR',
        
        'tools.color.title': 'Generador de Paleta de Colores',
        'tools.color.description': 'Genera paletas de colores armoniosas con códigos hexadecimales para tus proyectos.',
        'tools.color.button': 'Abrir herramienta',
        'tools.color.modal.title': 'Generador de Paleta de Colores',
        'tools.color.modal.generate': 'Generar Nueva Paleta',
        'tools.color.modal.copied': 'Copiado',
        
        'tools.unit.title': 'Conversor de Unidades',
        'tools.unit.description': 'Convierte entre diferentes unidades de longitud, peso y temperatura.',
        'tools.unit.button': 'Abrir herramienta',
        'tools.unit.modal.title': 'Conversor de Unidades',
        'tools.unit.modal.type': 'Tipo de conversión',
        'tools.unit.modal.type.length': 'Longitud',
        'tools.unit.modal.type.weight': 'Peso',
        'tools.unit.modal.type.temperature': 'Temperatura',
        'tools.unit.modal.from': 'De',
        'tools.unit.modal.to': 'A',
        'tools.unit.modal.value': 'Valor',
        'tools.unit.modal.placeholder': 'Ingresa el valor',
        
        // Unit converter units - Spanish
        'tools.unit.length.metros': 'Metros',
        'tools.unit.length.kilómetros': 'Kilómetros',
        'tools.unit.length.centímetros': 'Centímetros',
        'tools.unit.length.milímetros': 'Milímetros',
        'tools.unit.length.millas': 'Millas',
        'tools.unit.length.pies': 'Pies',
        'tools.unit.length.pulgadas': 'Pulgadas',
        
        'tools.unit.weight.kilogramos': 'Kilogramos',
        'tools.unit.weight.gramos': 'Gramos',
        'tools.unit.weight.miligramos': 'Miligramos',
        'tools.unit.weight.libras': 'Libras',
        'tools.unit.weight.onzas': 'Onzas',
        'tools.unit.weight.toneladas': 'Toneladas',
        
        'tools.unit.temperature.celsius': 'Celsius',
        'tools.unit.temperature.fahrenheit': 'Fahrenheit',
        'tools.unit.temperature.kelvin': 'Kelvin',
        
        'tools.word.title': 'Contador de Palabras',
        'tools.word.description': 'Cuenta palabras, caracteres, líneas y proporciona estadísticas de texto.',
        'tools.word.button': 'Abrir herramienta',
        'tools.word.modal.title': 'Contador de Palabras',
        'tools.word.modal.label': 'Texto',
        'tools.word.modal.placeholder': 'Escribe o pega tu texto aquí...',
        'tools.word.modal.words': 'Palabras',
        'tools.word.modal.chars': 'Caracteres',
        'tools.word.modal.charsNoSpaces': 'Sin espacios',
        'tools.word.modal.lines': 'Líneas',
        
        'tools.json.title': 'Formateador JSON',
        'tools.json.description': 'Formatea, valida y embellece código JSON de manera rápida y sencilla.',
        'tools.json.button': 'Abrir herramienta',
        'tools.json.modal.title': 'Formateador JSON',
        'tools.json.modal.label': 'JSON sin formatear',
        'tools.json.modal.placeholder': '{"ejemplo": "Pega tu JSON aquí"}',
        'tools.json.modal.format': 'Formatear',
        'tools.json.modal.minify': 'Minificar',
        'tools.json.modal.error': 'Error: JSON inválido',
        
        // Footer
        'footer.rights': '© 2026 Xinxin Liu. Todos los derechos reservados.',
        'footer.language': 'Idioma',
        'footer.langChanged': 'Idioma cambiado a Español'
    },
    en: {
        // Header
        'nav.home': 'CV',
        'nav.tools': 'Tools',
        'nav.github': 'My Github',
        
        // Hero Section
        'hero.title': 'Xinxin Liu',
        'hero.subtitle': 'Software Engineer | Development Team Leader',
        
        // About Section
        'about.title': 'About Me',
        'about.content': 'Software engineer and Development Team Leader with experience in distributed systems, cloud applications, AI-assisted development, and cross-functional collaboration. Proven ability to learn quickly, solve complex technical challenges, and deliver high-quality software solutions in Agile environments.',
        
        // Experience Section
        'experience.title': 'Experience',
        'experience.teamlead.title': 'Development Team Leader',
        'experience.teamlead.company': 'Ericsson Spain SA. | Madrid',
        'experience.teamlead.date': 'May 2026 - Present',
        'experience.teamlead.task1': 'Lead a cross-functional engineering team developing Ericsson\'s 5G Core product',
        'experience.teamlead.task2': 'Coordinate stakeholders, delivery priorities, and technical decisions',
        'experience.teamlead.task3': 'Drive Agile execution, team development, and process improvements',
        'experience.teamlead.task4': 'Manage risks, resource planning, and delivery commitments',

        'experience.ericsson.title': 'Software Development Engineer',
        'experience.ericsson.company': 'Ericsson Spain SA. | Madrid',
        'experience.ericsson.date': 'July 2021 - Present',
        'experience.ericsson.task1': 'Develop large-scale distributed networking systems using C++, Python, and Linux',
        'experience.ericsson.task2': 'Design, implement, test, and maintain software features for LTE and 5G Core products',
        'experience.ericsson.task3': 'Build automation tools and improve CI/CD and testing workflows',
        'experience.ericsson.task4': 'Refactor legacy code, improve maintainability, and resolve complex production issues',
        'experience.ericsson.task5': 'Collaborate with distributed teams across Europe and China',
        
        'experience.freelance.title': 'Full-stack Developer',
        'experience.freelance.company': 'Self-Employed',
        'experience.freelance.date': 'Feb 2025 – Present',
        'experience.freelance.task1': 'Develop web applications with React, Django and PostgreSQL deployed in Google Cloud',
        'experience.freelance.task2': 'Integrate third-party APIs, payment services and logistics providers',
        'experience.freelance.task3': 'Leverage LLMs, AI agents and MCP-based workflows to accelerate development and automate business processes',
        'experience.freelance.task4': '<strong><a href="https://xmexpress.es" target="_blank" rel="noopener noreferrer">xmexpress.es</a>:</strong> Business management system for a logistics company — React, Django REST Framework, PostgreSQL, Google Cloud',
        'experience.freelance.task5': '<strong><a href="https://colegiobase.cn" target="_blank" rel="noopener noreferrer">colegiobase.cn</a>:</strong> Chinese-language marketing website for Base International School (Madrid)',
        'experience.freelance.task6': '<strong><a href="https://thehumanclarity.com" target="_blank" rel="noopener noreferrer">thehumanclarity.com</a>:</strong> Professional website for an executive psychologist and coach — services, process, and contact',
        
        'experience.intern.title': 'R&D Software Development Engineer Intern',
        'experience.intern.company': 'Ericsson Spain SA. | Madrid',
        'experience.intern.date': 'July 2020 – June 2021',
        'experience.intern.task1': 'Developed traffic optimization and adaptive video streaming simulations using NS-3 and C++',
        'experience.intern.task2': 'Implemented ABR algorithms and performed performance analysis',
        
        // Education Section
        'education.title': 'Education',
        'education.meng.degree': 'MEng in Telecommunication Engineering',
        'education.meng.school': 'Universidad Politécnica de Madrid | Spain',
        'education.meng.date': 'September 2019 – July 2021',
        
        'education.beng.degree': 'BEng in Telecommunication Technologies and Services Engineering',
        'education.beng.school': 'Universidad Politécnica de Madrid | Spain',
        'education.beng.date': 'September 2015 – July 2019',
        
        'education.tsinghua.degree': 'Visiting Research Student - Computer Science',
        'education.tsinghua.school': 'Tsinghua University | China',
        'education.tsinghua.date': 'September 2018 – January 2019',
        
        // Courses Section
        'courses.title': 'Courses & Certifications',
        'courses.cloud.name': 'Cloud Native Engineering Fundamentals',
        'courses.cloud.provider': 'Ericsson | September 2023',
        
        'courses.redis.name': 'Redis In-memory Data Store',
        'courses.redis.provider': 'Skillsoft | May 2024',
        
        'courses.docker.name': 'Docker intro + Kubernetes & Helm admin',
        'courses.docker.provider': 'Component Soft | August 2024',
        
        'courses.go.name': 'Go Language',
        'courses.go.provider': 'Ericsson & Universidad Carlos III | October 2024',
        
        // Skills Section
        'skills.title': 'Skills',
        'skills.languages.title': 'Languages',
        'skills.languages.chinese': 'Chinese (Native)',
        'skills.languages.spanish': 'Spanish (Native)',
        'skills.languages.english': 'English (C1)',
        
        'skills.programming.title': 'Programming',
        'skills.ai.title': 'AI',
        
        'skills.technologies.title': 'Tools',
        
        'skills.soft.title': 'Soft Skills',
        'skills.soft.agile': 'Agile Teamwork',
        'skills.soft.problem': 'Complex Problem Solving',
        'skills.soft.troubleshooting': 'Troubleshooting',
        'skills.soft.leadership': 'Tech Project Leadership',
        
        // Tools Page
        'tools.title': 'Tools',
        
        'tools.numero.title': 'Number to Words',
        'tools.numero.description': 'Convert numbers to their written representation in Spanish. Supports integers and decimals.',
        'tools.numero.button': 'Open Tool',
        'tools.numero.modal.title': 'Number to Words in Spanish',
        'tools.numero.modal.label': 'Enter a number',
        'tools.numero.modal.placeholder': 'Example: 1.234,56',
        'tools.numero.modal.convert': 'Convert',
        'tools.numero.modal.copy': 'Copy result',
        'tools.numero.modal.copied': 'Copied',
        
        'tools.qr.title': 'QR Code Generator',
        'tools.qr.description': 'Generate custom QR codes from text, URLs or any information.',
        'tools.qr.button': 'Open Tool',
        'tools.qr.modal.title': 'QR Code Generator',
        'tools.qr.modal.label': 'Text or URL',
        'tools.qr.modal.placeholder': 'Example: https://yourwebsite.com',
        'tools.qr.modal.generate': 'Generate QR',
        'tools.qr.modal.download': 'Download QR',
        
        'tools.color.title': 'Color Palette Generator',
        'tools.color.description': 'Generate harmonious color palettes with hex codes for your projects.',
        'tools.color.button': 'Open Tool',
        'tools.color.modal.title': 'Color Palette Generator',
        'tools.color.modal.generate': 'Generate New Palette',
        'tools.color.modal.copied': 'Copied',
        
        'tools.unit.title': 'Unit Converter',
        'tools.unit.description': 'Convert between different units of length, weight and temperature.',
        'tools.unit.button': 'Open Tool',
        'tools.unit.modal.title': 'Unit Converter',
        'tools.unit.modal.type': 'Conversion type',
        'tools.unit.modal.type.length': 'Length',
        'tools.unit.modal.type.weight': 'Weight',
        'tools.unit.modal.type.temperature': 'Temperature',
        'tools.unit.modal.from': 'From',
        'tools.unit.modal.to': 'To',
        'tools.unit.modal.value': 'Value',
        'tools.unit.modal.placeholder': 'Enter value',
        
        // Unit converter units - English
        'tools.unit.length.metros': 'Meters',
        'tools.unit.length.kilómetros': 'Kilometers',
        'tools.unit.length.centímetros': 'Centimeters',
        'tools.unit.length.milímetros': 'Millimeters',
        'tools.unit.length.millas': 'Miles',
        'tools.unit.length.pies': 'Feet',
        'tools.unit.length.pulgadas': 'Inches',
        
        'tools.unit.weight.kilogramos': 'Kilograms',
        'tools.unit.weight.gramos': 'Grams',
        'tools.unit.weight.miligramos': 'Milligrams',
        'tools.unit.weight.libras': 'Pounds',
        'tools.unit.weight.onzas': 'Ounces',
        'tools.unit.weight.toneladas': 'Tonnes',
        
        'tools.unit.temperature.celsius': 'Celsius',
        'tools.unit.temperature.fahrenheit': 'Fahrenheit',
        'tools.unit.temperature.kelvin': 'Kelvin',
        
        'tools.word.title': 'Word Counter',
        'tools.word.description': 'Count words, characters, lines and provide text statistics.',
        'tools.word.button': 'Open Tool',
        'tools.word.modal.title': 'Word Counter',
        'tools.word.modal.label': 'Text',
        'tools.word.modal.placeholder': 'Type or paste your text here...',
        'tools.word.modal.words': 'Words',
        'tools.word.modal.chars': 'Characters',
        'tools.word.modal.charsNoSpaces': 'No spaces',
        'tools.word.modal.lines': 'Lines',
        
        'tools.json.title': 'JSON Formatter',
        'tools.json.description': 'Format, validate and beautify JSON code quickly and easily.',
        'tools.json.button': 'Open Tool',
        'tools.json.modal.title': 'JSON Formatter',
        'tools.json.modal.label': 'Unformatted JSON',
        'tools.json.modal.placeholder': '{"example": "Paste your JSON here"}',
        'tools.json.modal.format': 'Format',
        'tools.json.modal.minify': 'Minify',
        'tools.json.modal.error': 'Error: Invalid JSON',
        
        // Footer
        'footer.rights': '© 2026 Xinxin Liu. All rights reserved.',
        'footer.language': 'Language',
        'footer.langChanged': 'Language changed to English'
    },
    zh: {
        // Header
        'nav.home': '简历',
        'nav.tools': '工具',
        'nav.github': '我的Github',
        
        // Hero Section
        'hero.title': '留鑫鑫',
        'hero.subtitle': '软件工程师 | 软件开发组长',
        
        // About Section
        'about.title': '关于我',
        'about.content': '软件工程师与软件开发组长，具备分布式系统、云应用、AI 辅助开发及跨职能协作经验。擅长快速学习、解决复杂技术问题，并在敏捷环境中交付高质量软件。',
        
        // Experience Section
        'experience.title': '工作经验',
        'experience.teamlead.title': '软件开发组长',
        'experience.teamlead.company': '爱立信西班牙 | 马德里',
        'experience.teamlead.date': '2026年5月 - 至今',
        'experience.teamlead.task1': '领导跨职能工程团队，开发爱立信 5G Core 产品',
        'experience.teamlead.task2': '协调利益相关方、交付优先级与技术决策',
        'experience.teamlead.task3': '推动敏捷落地、团队发展与流程改进',
        'experience.teamlead.task4': '管理风险、资源规划与交付承诺',

        'experience.ericsson.title': '软件开发工程师',
        'experience.ericsson.company': '爱立信西班牙 | 马德里',
        'experience.ericsson.date': '2021年7月 - 至今',
        'experience.ericsson.task1': '使用 C++、Python 与 Linux 开发大规模分布式网络系统',
        'experience.ericsson.task2': '设计、实现、测试并维护 LTE 与 5G Core 产品功能',
        'experience.ericsson.task3': '构建自动化工具，改进 CI/CD 与测试流程',
        'experience.ericsson.task4': '重构遗留代码，提升可维护性，并解决复杂生产问题',
        'experience.ericsson.task5': '与欧洲及中国的分布式团队协作',
        
        'experience.freelance.title': '全栈开发工程师',
        'experience.freelance.company': '独立开发',
        'experience.freelance.date': '2025年2月 - 至今',
        'experience.freelance.task1': '使用 React、Django 与 PostgreSQL 开发 Web 应用，并部署于 Google Cloud',
        'experience.freelance.task2': '集成第三方 API、支付服务与物流服务商',
        'experience.freelance.task3': '运用 LLM、AI Agent 与 MCP 工作流加速开发并自动化业务流程',
        'experience.freelance.task4': '<strong><a href="https://xmexpress.es" target="_blank" rel="noopener noreferrer">xmexpress.es</a>:</strong> 物流公司业务管理系统 — React、Django REST Framework、PostgreSQL、Google Cloud',
        'experience.freelance.task5': '<strong><a href="https://colegiobase.cn" target="_blank" rel="noopener noreferrer">colegiobase.cn</a>:</strong> 马德里 Base International School 中文营销官网',
        'experience.freelance.task6': '<strong><a href="https://thehumanclarity.com" target="_blank" rel="noopener noreferrer">thehumanclarity.com</a>:</strong> 高管心理咨询与教练个人官网 — 服务介绍、流程与联系',
        
        'experience.intern.title': '研发软件开发工程师实习生',
        'experience.intern.company': '爱立信西班牙 | 马德里',
        'experience.intern.date': '2020年7月 - 2021年6月',
        'experience.intern.task1': '基于 NS-3 与 C++ 开发流量优化及自适应视频流仿真',
        'experience.intern.task2': '实现 ABR 算法并进行性能分析',
        
        // Education Section
        'education.title': '教育背景',
        'education.meng.degree': '电信工程硕士',
        'education.meng.school': '马德里理工大学 | 西班牙',
        'education.meng.date': '2019年9月 - 2021年7月',
        
        'education.beng.degree': '电信技术与服务工程本科',
        'education.beng.school': '马德里理工大学 | 西班牙',
        'education.beng.date': '2015年9月 - 2019年7月',
        
        'education.tsinghua.degree': '交换生 - 计算机科学',
        'education.tsinghua.school': '清华大学 | 中国',
        'education.tsinghua.date': '2018年9月 - 2019年1月',
        
        // Courses Section
        'courses.title': '课程与认证',
        'courses.cloud.name': '云原生工程基础',
        'courses.cloud.provider': '爱立信 | 2023年9月',
        
        'courses.redis.name': 'Redis内存数据存储',
        'courses.redis.provider': 'Skillsoft | 2024年5月',
        
        'courses.docker.name': 'Docker入门 + Kubernetes & Helm管理',
        'courses.docker.provider': 'Component Soft | 2024年8月',
        
        'courses.go.name': 'Go语言',
        'courses.go.provider': '爱立信 & 卡洛斯三世大学 | 2024年10月',
        
        // Skills Section
        'skills.title': '技能',
        'skills.languages.title': '语言',
        'skills.languages.chinese': '中文（母语）',
        'skills.languages.spanish': '西班牙语（母语）',
        'skills.languages.english': '英语（C1）',
        
        'skills.programming.title': '编程',
        'skills.ai.title': 'AI',
        
        'skills.technologies.title': '工具',
        
        'skills.soft.title': '软技能',
        'skills.soft.agile': '敏捷团队协作',
        'skills.soft.problem': '复杂问题解决',
        'skills.soft.troubleshooting': '故障排查',
        'skills.soft.leadership': '技术项目领导',
        
        // Tools Page
        'tools.title': '工具',
        
        'tools.numero.title': '数字转文字',
        'tools.numero.description': '将数字转为西班牙语文字表达，支持整数和小数。',
        'tools.numero.button': '打开工具',
        'tools.numero.modal.title': '西班牙语数字转文字',
        'tools.numero.modal.label': '输入数字',
        'tools.numero.modal.placeholder': '例如：1.234,56',
        'tools.numero.modal.convert': '转换',
        'tools.numero.modal.copy': '复制结果',
        'tools.numero.modal.copied': '已复制',
        
        'tools.qr.title': '二维码生成器',
        'tools.qr.description': '输入文本或网址，一键生成二维码。',
        'tools.qr.button': '打开工具',
        'tools.qr.modal.title': '二维码生成器',
        'tools.qr.modal.label': '文本或URL',
        'tools.qr.modal.placeholder': '例如：https://yourwebsite.com',
        'tools.qr.modal.generate': '生成二维码',
        'tools.qr.modal.download': '下载二维码',
        
        'tools.color.title': '调色板生成器',
        'tools.color.description': '一键生成和谐配色，提供HEX色值。',
        'tools.color.button': '打开工具',
        'tools.color.modal.title': '调色板生成器',
        'tools.color.modal.generate': '生成新调色板',
        'tools.color.modal.copied': '已复制',
        
        'tools.unit.title': '单位转换器',
        'tools.unit.description': '在线换算长度、重量、温度等单位。',
        'tools.unit.button': '打开工具',
        'tools.unit.modal.title': '单位转换器',
        'tools.unit.modal.type': '转换类型',
        'tools.unit.modal.type.length': '长度',
        'tools.unit.modal.type.weight': '重量',
        'tools.unit.modal.type.temperature': '温度',
        'tools.unit.modal.from': '从',
        'tools.unit.modal.to': '到',
        'tools.unit.modal.value': '数值',
        'tools.unit.modal.placeholder': '输入数值',
        
        // Unit converter units - Chinese
        'tools.unit.length.metros': '米',
        'tools.unit.length.kilómetros': '公里',
        'tools.unit.length.centímetros': '厘米',
        'tools.unit.length.milímetros': '毫米',
        'tools.unit.length.millas': '英里',
        'tools.unit.length.pies': '英尺',
        'tools.unit.length.pulgadas': '英寸',
        
        'tools.unit.weight.kilogramos': '公斤',
        'tools.unit.weight.gramos': '克',
        'tools.unit.weight.miligramos': '毫克',
        'tools.unit.weight.libras': '磅',
        'tools.unit.weight.onzas': '盎司',
        'tools.unit.weight.toneladas': '吨',
        
        'tools.unit.temperature.celsius': '摄氏度',
        'tools.unit.temperature.fahrenheit': '华氏度',
        'tools.unit.temperature.kelvin': '开尔文',
        
        'tools.word.title': '字数统计',
        'tools.word.description': '实时统计文本字数、字符、行数。',
        'tools.word.button': '打开工具',
        'tools.word.modal.title': '字数统计',
        'tools.word.modal.label': '文本',
        'tools.word.modal.placeholder': '在此输入或粘贴文本...',
        'tools.word.modal.words': '字数',
        'tools.word.modal.chars': '字符数',
        'tools.word.modal.charsNoSpaces': '不含空格',
        'tools.word.modal.lines': '行数',
        
        'tools.json.title': 'JSON格式化',
        'tools.json.description': '格式化和压缩JSON数据，支持语法校验。',
        'tools.json.button': '打开工具',
        'tools.json.modal.title': 'JSON格式化',
        'tools.json.modal.label': '未格式化的JSON',
        'tools.json.modal.placeholder': '{"示例": "在此粘贴JSON"}',
        'tools.json.modal.format': '格式化',
        'tools.json.modal.minify': '压缩',
        'tools.json.modal.error': '错误：无效的JSON',
        
        // Footer
        'footer.rights': '© 2026 Xinxin Liu. 保留所有权利。',
        'footer.language': '语言',
        'footer.langChanged': '语言已更改为中文'
    }
};

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    const htmlElements = document.querySelectorAll('[data-translate-html]');
    htmlElements.forEach(el => {
        const key = el.getAttribute('data-translate-html');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// Function to initialize translations after page load
function initTranslations() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    translatePage(savedLang);
    
    // Set the language selector if it exists
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = savedLang;
    }
}

// Initialize translation on page load
document.addEventListener('DOMContentLoaded', function() {
    initTranslations();
});

// Expose everything globally so footer and other scripts can access
if (typeof window !== 'undefined') {
    window.translations = translations;
    window.initTranslations = initTranslations;
    window.translatePage = translatePage;
}
