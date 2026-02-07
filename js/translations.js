const translations = {
    es: {
        // Header
        'nav.home': 'Currículum',
        'nav.tools': 'Herramientas',
        'nav.github': 'Mi Github',
        
        // Hero Section
        'hero.title': 'Xinxin Liu',
        'hero.subtitle': 'Ingeniero de Software | Desarrollador Full-Stack',
        
        // About Section
        'about.title': 'Sobre Mí',
        'about.content': 'Soy ingeniero de software con experiencia en desarrollo LTE y 5G. Tengo una capacidad demostrada para aprender rápidamente y adaptarme a nuevas tecnologías. Graduado en el 10% superior de mi clase, destaco en colaboración ágil en equipo, liderazgo técnico y entrega de proyectos de alta calidad. Mis sólidas habilidades de comunicación me permiten conectar equipos entre China y España de manera efectiva.',
        
        // Experience Section
        'experience.title': 'Experiencia',
        'experience.ericsson.title': 'Ingeniero de Desarrollo de Software JS5',
        'experience.ericsson.company': 'Ericsson Spain SA. | Madrid',
        'experience.ericsson.date': 'Julio 2021 - Presente',
        'experience.ericsson.description': 'Experiencia en funcionalidades de LTE EPC y 5G Packet Core, incluyendo Deep Packet Inspection, IP Allocator y L2TP/PFCP Endpoint.',
        'experience.ericsson.task1': 'Diseño, documentación, implementación y pruebas de historias de usuario utilizando C/C++ y Python',
        'experience.ericsson.task2': 'Mejoras de código, como refactorización, eliminación de código duplicado y resolución de errores de clang-tidy',
        'experience.ericsson.task3': 'Corrección de errores y mejoras de estabilidad, junto con el desarrollo de pruebas funcionales y unitarias',
        'experience.ericsson.task4': 'Scripting de automatización usando Shell y Python',
        'experience.ericsson.task5': 'Sólida familiaridad con protocolos de red, incluyendo TCP/IP, UDP, HTTP, L2TP, PFCP, DNS, y más',
        'experience.ericsson.task6': 'Familiaridad con herramientas y metodologías de desarrollo de software, como Scrum, Kanban, Git, Gerrit, CI/CD, JIRA, UML',
        
        'experience.freelance.title': 'Desarrollador Full-stack',
        'experience.freelance.company': 'Freelance',
        'experience.freelance.date': 'Feb 2025 – Presente',
        'experience.freelance.description': 'Desarrollo de aplicaciones web con React, Django y PostgreSQL desplegadas en Google Cloud.',
        'experience.freelance.task1': 'xmexpress.es: Construí un sistema completo de gestión empresarial para una empresa de logística utilizando React (frontend), Django REST Framework (backend) y PostgreSQL (base de datos), desplegado en Google Cloud Platform',
        
        'experience.intern.title': 'Ingeniero de Desarrollo de Software I+D (Prácticas)',
        'experience.intern.company': 'Ericsson Spain SA. | Madrid',
        'experience.intern.date': 'Julio 2020 – Junio 2021',
        'experience.intern.description': 'Optimización de tráfico y análisis de rendimiento de streaming usando NS-3, incluyendo desarrollo de módulo ABR en C++.',
        
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
        'skills.languages.english': 'Inglés (Profesional)',
        
        'skills.programming.title': 'Programación',
        
        'skills.technologies.title': 'Tecnologías y Herramientas',
        
        'skills.soft.title': 'Soft Skills',
        'skills.soft.agile': 'Trabajo en Equipo Ágil',
        'skills.soft.problem': 'Resolución de Problemas',
        'skills.soft.troubleshooting': 'Solución de Incidencias',
        'skills.soft.leadership': 'Liderazgo Técnico',
        
        // Tools Page
        'tools.title': 'Herramientas',
        
        'tools.numero.title': 'Número a letras',
        'tools.numero.description': 'Convierte números a su representación en letras en español. Soporta números enteros y decimales.',
        'tools.numero.button': 'Abrir herramienta',
        'tools.numero.modal.title': 'Número a letras en español',
        'tools.numero.modal.label': 'Ingresa un número',
        'tools.numero.modal.placeholder': 'Ejemplo: 123 o 45.67',
        'tools.numero.modal.convert': 'Convertir',
        
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
        'hero.subtitle': 'Software Engineer | Full-Stack Developer',
        
        // About Section
        'about.title': 'About Me',
        'about.content': 'I am a software engineer with LTE and 5G development experience. I have a proven ability to quickly learn and adapt to new technologies. Graduating in the top 10% of my class, I excel in agile team collaboration, technical leadership, and high-quality project delivery. My strong communication skills enable me to bridge teams between China and Spain effectively.',
        
        // Experience Section
        'experience.title': 'Experience',
        'experience.ericsson.title': 'Software Development Engineer JS5',
        'experience.ericsson.company': 'Ericsson Spain SA. | Madrid',
        'experience.ericsson.date': 'July 2021 - Present',
        'experience.ericsson.description': 'Experience in LTE EPC and 5G Packet Core features, including Deep Packet Inspection, IP Allocator and L2TP/PFCP Endpoint.',
        'experience.ericsson.task1': 'Design, documentation, implementation, and testing of user stories using C/C++ and Python',
        'experience.ericsson.task2': 'Code improvements, such as refactoring, removing duplicate code, and resolving clang-tidy errors',
        'experience.ericsson.task3': 'Bug fixing and stability enhancements, along with the development of functional and unit tests',
        'experience.ericsson.task4': 'Automation scripting using Shell and Python',
        'experience.ericsson.task5': 'Strong familiarity with network protocols, including TCP/IP, UDP, HTTP, L2TP, PFCP, DNS, and more',
        'experience.ericsson.task6': 'Familiarity with software development tools and methodologies, such as Scrum, Kanban, Git, Gerrit, CI/CD, JIRA, UML',
        
        'experience.freelance.title': 'Full-stack Developer',
        'experience.freelance.company': 'Freelance',
        'experience.freelance.date': 'Feb 2025 – Present',
        'experience.freelance.description': 'Develop web applications with React, Django and PostgreSQL deployed in Google Cloud.',
        'experience.freelance.task1': 'xmexpress.es: Built a complete business management system for a logistics company using React (frontend), Django REST Framework (backend), and PostgreSQL (database), deployed on Google Cloud Platform',
        
        'experience.intern.title': 'R&D Software Development Engineer Intern',
        'experience.intern.company': 'Ericsson Spain SA. | Madrid',
        'experience.intern.date': 'July 2020 – June 2021',
        'experience.intern.description': 'Traffic optimization and streaming performance analysis using NS-3, including ABR module development in C++.',
        
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
        'skills.languages.english': 'English (Professional)',
        
        'skills.programming.title': 'Programming',
        
        'skills.technologies.title': 'Technologies & Tools',
        
        'skills.soft.title': 'Soft Skills',
        'skills.soft.agile': 'Agile Teamwork',
        'skills.soft.problem': 'Problem Solving',
        'skills.soft.troubleshooting': 'Troubleshooting',
        'skills.soft.leadership': 'Tech Leadership',
        
        // Tools Page
        'tools.title': 'Tools',
        
        'tools.numero.title': 'Number to Words',
        'tools.numero.description': 'Convert numbers to their written representation in Spanish. Supports integers and decimals.',
        'tools.numero.button': 'Open Tool',
        'tools.numero.modal.title': 'Number to Words in Spanish',
        'tools.numero.modal.label': 'Enter a number',
        'tools.numero.modal.placeholder': 'Example: 123 or 45.67',
        'tools.numero.modal.convert': 'Convert',
        
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
        'hero.subtitle': '软件工程师 | Full-stack开发',
        
        // About Section
        'about.title': '关于我',
        'about.content': '软件工程师，专注LTE和5G开发。善于快速学习和适应新技术，本硕均以年级前10%毕业。在敏捷开发中经验丰富，具备技术领导能力，注重项目质量。中西双语环境成长，能够顺畅协调中西团队协作。',
        
        // Experience Section
        'experience.title': '工作经验',
        'experience.ericsson.title': '软件开发工程师 JS5',
        'experience.ericsson.company': '爱立信西班牙 | 马德里',
        'experience.ericsson.date': '2021年7月 - 至今',
        'experience.ericsson.description': '负责LTE EPC及5G核心网功能开发，包含深度包检测(DPI)、IP Allocator、L2TP/PFCP Endpoint等模块。',
        'experience.ericsson.task1': '使用C/C++和Python完成需求设计、文档编写、代码实现及测试',
        'experience.ericsson.task2': '代码优化重构，消除冗余代码，修复clang-tidy静态检查问题',
        'experience.ericsson.task3': '修复Bug并提升系统稳定性，编写功能测试和单元测试',
        'experience.ericsson.task4': '编写Shell和Python自动化脚本',
        'experience.ericsson.task5': '熟练掌握TCP/IP、UDP、HTTP、L2TP、PFCP、DNS等网络协议',
        'experience.ericsson.task6': '熟悉Scrum、Kanban敏捷开发，掌握Git、Gerrit、CI/CD、JIRA、UML等工具',
        
        'experience.freelance.title': '全栈开发工程师',
        'experience.freelance.company': '自由职业',
        'experience.freelance.date': '2025年2月 - 至今',
        'experience.freelance.description': '基于React、Django和PostgreSQL开发Web应用，部署于Google Cloud。',
        'experience.freelance.task1': 'xmexpress.es: 为物流公司搭建完整业务管理系统，采用React前端、Django REST Framework后端、PostgreSQL数据库，部署在Google Cloud Platform',
        
        'experience.intern.title': '研发软件开发工程师实习生',
        'experience.intern.company': '爱立信西班牙 | 马德里',
        'experience.intern.date': '2020年7月 - 2021年6月',
        'experience.intern.description': '基于NS-3进行流量优化及流媒体性能分析，使用C++开发ABR自适应码率模块。',
        
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
        
        'skills.technologies.title': '技术与工具',
        
        'skills.soft.title': '软技能',
        'skills.soft.agile': '敏捷团队协作',
        'skills.soft.problem': '问题解决',
        'skills.soft.troubleshooting': '故障排查',
        'skills.soft.leadership': '技术领导',
        
        // Tools Page
        'tools.title': '工具',
        
        'tools.numero.title': '数字转文字',
        'tools.numero.description': '将数字转为西班牙语文字表达，支持整数和小数。',
        'tools.numero.button': '打开工具',
        'tools.numero.modal.title': '西班牙语数字转文字',
        'tools.numero.modal.label': '输入数字',
        'tools.numero.modal.placeholder': '例如：123 或 45.67',
        'tools.numero.modal.convert': '转换',
        
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
