// =============================================================
//  All site content in English (en) and Indonesian (id).
//  Components read the active language via useLang().t
//  Edit copy here. Language-independent values (links, tech
//  stack names, accents, icon keys) are kept identical in both.
// =============================================================

const links = {
  name: 'Dervio Rahmatdianto',
  email: 'derviord23@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dervio-rahmatdianto-703bb4153',
  github: 'https://github.com/Dervioo23',
  whatsapp: 'https://wa.me/6282169046446',
  fastwork: 'https://fastwork.id/user/dervio?source=web_marketplace_profile-menu_profile',
  cv: 'https://drive.google.com/file/d/1pkang76MJeCPRneFGvj8OhUstdC007gN/view?usp=sharing',
}

export const translations = {
  // ----------------------------------------------------------- ENGLISH
  en: {
    profile: { ...links },

    nav: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],

    ui: {
      letsTalk: 'Let’s Talk',
      // hero
      available: 'Available for AI & automation projects',
      greeting: 'Hi, I’m',
      role: 'Applied AI Engineer & Automation System Builder',
      heroStatement: 'Applied systems for AI, data, and workflow automation.',
      subheadline:
        'I build intelligent systems that turn data, workflows, and operations into automated, measurable, and scalable solutions.',
      badges: ['AI Engineering', 'Data Science', 'Workflow Automation', 'Operational Intelligence'],
      viewProjects: 'View Projects',
      letsWork: 'Let’s Work Together',
      scroll: 'Scroll to explore',
      // about
      aboutEyebrow: 'About Me',
      aboutTitle: 'A builder, not just an analyst',
      viewCv: 'View CV',
      // expertise
      expertiseEyebrow: 'What I Build',
      expertiseTitle: 'Systems across the AI & automation stack',
      expertiseIntro:
        'From predictive models to the dashboards and workflows that put them to work — built to run in real operations.',
      // projects
      projectsEyebrow: 'Selected Work',
      projectsTitle: 'Projects built for real operations',
      projectsIntro:
        "A few systems I've designed and shipped — each one solving an actual operational problem, not just a demo.",
      viewCaseStudy: 'View Case Study',
      viewDemo: 'View Demo',
      sourceCode: 'Source Code',
      projectsOnRequest: 'Case study available on request',
      projectFilters: [
        { label: 'All', value: 'All' },
        { label: 'AI', value: 'AI' },
        { label: 'Dashboard', value: 'Dashboard' },
        { label: 'Automation', value: 'Automation' },
        { label: 'Workflow', value: 'Workflow' },
        { label: 'Computer Vision', value: 'Computer Vision' },
      ],
      closeProjectModal: 'Close project details',
      prevProject: 'Previous project',
      nextProject: 'Next project',
      projectProblem: 'Problem',
      projectSolution: 'Solution',
      projectImpact: 'Impact',
      projectRole: 'Role',
      // skills
      skillsEyebrow: 'Tech Stack',
      skillsTitle: 'Tools I build with',
      skillsIntro:
        'A practical stack focused on shipping AI, data, and automation systems end to end.',
      // experience
      experienceEyebrow: 'Experience',
      experienceTitle: "Where I've built and led",
      // process
      processEyebrow: 'How I Work',
      processTitle: 'From problem to a system that scales',
      processIntro:
        'A repeatable process that turns a vague operational pain into a working, maintainable system.',
      // services
      servicesEyebrow: 'Services',
      servicesTitle: 'Ways I can help you build',
      servicesIntro:
        'Engagements focused on shipping something that works in the real world — not slideware.',
      ctaLead: 'Have an idea but not sure how to build it?',
      ctaHighlight: 'Let’s turn it into a working system.',
      startProject: 'Start a Project',
      // contact
      contactEyebrow: 'Contact',
      contactTitleLead: 'Let’s Build Something ',
      contactTitleHighlight: 'Useful',
      contactDescription:
        'If you need an AI system, automation workflow, dashboard, or operational tool that actually works in the real world, let’s talk.',
      emailMe: 'Email Me',
      contactHints: {
        linkedin: 'Connect professionally',
        github: 'See the code',
        whatsapp: '082169046446',
      },
      // footer
      footerTagline:
        'Applied AI Engineer & Automation System Builder — turning data and workflows into systems that run.',
      footerCopyright:
        '© 2026 Dervio Rahmatdianto. Built with AI, data, and real-world systems.',
      footerSubnote: 'Designed & engineered with a builder’s mindset.',
    },

    about: {
      paragraphs: [
        'I’m a Data Science graduate focused on building applied AI systems for real-world operational problems. My work combines machine learning, automation, dashboard development, and workflow design to help businesses make better decisions and reduce manual work.',
        'I don’t just analyze data. I build systems that can be used, monitored, and improved in real operations.',
      ],
      highlights: [
        { label: 'Projects', value: '5+ Systems' },
        { label: 'Education', value: 'Data Science Graduate' },
        { label: 'Focus', value: 'Applied AI & Automation' },
        { label: 'Strength', value: 'Operational Systems' },
      ],
    },

    expertise: [
      {
        icon: 'brain',
        title: 'AI & Machine Learning Systems',
        description:
          'Building predictive models, classification systems, forecasting models, and intelligent automation using Python and modern ML frameworks.',
      },
      {
        icon: 'dashboard',
        title: 'Data Dashboard & Analytics',
        description:
          'Creating interactive dashboards, reporting systems, and business intelligence tools for operational monitoring and decision-making.',
      },
      {
        icon: 'workflow',
        title: 'Workflow Automation Systems',
        description:
          'Designing digital workflows that connect teams, documents, project status, approvals, and operational processes.',
      },
      {
        icon: 'eye',
        title: 'Computer Vision Applications',
        description:
          'Developing visual detection systems, image-based analysis, real-time monitoring, and AI-assisted recognition tools.',
      },
      {
        icon: 'trend',
        title: 'Time Series Forecasting',
        description:
          'Building forecasting models such as LSTM-based prediction systems for sales, transactions, and operational demand.',
      },
      {
        icon: 'spider',
        title: 'Web Scraping & Data Extraction',
        description:
          'Automating data collection from websites, transforming raw data into structured Excel, dashboards, or databases.',
      },
    ],

    projects: [
      {
        name: 'AI Companion — Tenri',
        category: 'AI Agent / Voice Interaction / Cultural Technology',
        description:
          'An AI companion designed for presentations, conferences, and performative lectures. Tenri acts as a living narrative character that can respond, interrupt gently, and support dialogue based on knowledge sources.',
        tags: ['AI', 'Automation'],
        problem:
          'Live presentations often feel static, making it difficult to create responsive dialogue with an AI character in front of an audience.',
        solution:
          'Built a grounded AI companion flow with character behavior rules, interaction structure, and voice-oriented system design.',
        impact:
          'Created a reusable foundation for audience-facing AI demonstrations and more natural narrative interaction.',
        role:
          'Designed the character behavior, prompt structure, interaction flow, and implementation logic.',
        stack: ['Python', 'LLM', 'Speech-to-Text', 'Text-to-Speech', 'Retrieval', 'Prompt Engineering'],
        directUrl:
          'https://www.linkedin.com/posts/dervio-rahmatdianto-703bb4153_ai-voiceai-digitalheritage-activity-7469059430479843328-qXod?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUEzfMBVhRvuNFln6f6ooMAP-26_2dpx3k',
        links: {
          caseStudy:
            'https://www.linkedin.com/posts/dervio-rahmatdianto-703bb4153_ai-voiceai-digitalheritage-activity-7469059430479843328-qXod?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUEzfMBVhRvuNFln6f6ooMAP-26_2dpx3k',
          demo: '#',
          source: '#',
        },
        accent: 'cyan',
      },
      {
        name: 'Renus Workflow',
        category: 'Workflow Management / Renewable Energy Operations',
        description:
          'A workflow management system for solar power operations, connecting sales, project coordinators, engineers, warehouse, procurement, installers, and owners into one operational tracking system.',
        tags: ['Dashboard', 'Automation', 'Workflow'],
        problem:
          'Solar project coordination can become fragmented across teams, documents, approvals, and operational status updates.',
        solution:
          'Designed a role-based workflow system for tracking project stages, responsibilities, documents, and execution status.',
        impact:
          'Improves team visibility and reduces manual coordination work in renewable energy operations.',
        role:
          'Planned the workflow structure, role boundaries, project tracking logic, and interface direction.',
        stack: ['Web App', 'Dashboard', 'Role-Based Access', 'Document Tracking', 'Project Workflow'],
        directUrl:
          'https://www.linkedin.com/posts/dervio-rahmatdianto-703bb4153_webdevelopment-workflowsystem-renewableenergy-activity-7465282578258915328-MXPm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUEzfMBVhRvuNFln6f6ooMAP-26_2dpx3k',
        links: {
          caseStudy:
            'https://www.linkedin.com/posts/dervio-rahmatdianto-703bb4153_webdevelopment-workflowsystem-renewableenergy-activity-7465282578258915328-MXPm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUEzfMBVhRvuNFln6f6ooMAP-26_2dpx3k',
          demo: '#',
          source: '#',
        },
        accent: 'emerald',
      },
      {
        name: 'LSTM Sales Forecasting System',
        category: 'Deep Learning / Time Series Forecasting',
        description:
          'A forecasting system for digital product transaction data, using LSTM to predict sales patterns and support better business planning.',
        tags: ['AI'],
        problem:
          'Sales planning is difficult when transaction patterns shift over time and are evaluated only from historical tables.',
        solution:
          'Built a time-series forecasting workflow using LSTM, preprocessing, and application-level presentation for predictions.',
        impact:
          'Turns historical transaction data into forward-looking planning signals for better business decisions.',
        role:
          'Handled data preparation, model workflow, evaluation direction, and application structure.',
        stack: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Flask', 'Time Series Analysis'],
        directUrl: 'https://github.com/Dervioo23/Skripsi-Kodingan.git',
        links: { caseStudy: '#', demo: '#', source: 'https://github.com/Dervioo23/Skripsi-Kodingan.git' },
        accent: 'violet',
      },
      {
        name: 'Airport Operational Reporting System',
        category: 'Operational Dashboard / Reporting Automation',
        description:
          'A digital reporting and dashboard system built for airport quality and safety operations to improve inspection reporting, monitoring, and workflow visibility.',
        tags: ['Dashboard', 'Automation', 'Workflow'],
        problem:
          'Inspection and reporting workflows become slow when operational data is scattered across manual files and repeated reports.',
        solution:
          'Created reporting and dashboard workflows to organize inspection data, monitoring views, and recurring operational reports.',
        impact:
          'Improves reporting speed, visibility, and consistency for quality and safety operations.',
        role:
          'Supported dashboard design, reporting workflow structure, and operational data organization.',
        stack: ['Dashboard', 'Reporting System', 'Data Management', 'Workflow Digitization'],
        directUrl: 'https://safetypdg.com/',
        links: { caseStudy: '#', demo: 'https://safetypdg.com/', source: '#' },
        accent: 'sky',
      },
      {
        name: 'Computer Vision Detection Projects',
        category: 'AI Vision / Real-Time Detection',
        description:
          'AI-based visual detection systems using computer vision techniques for recognition, monitoring, and intelligent interaction.',
        tags: ['AI', 'Computer Vision'],
        problem:
          'Visual recognition tasks need reliable detection logic that can turn images or live input into usable signals.',
        solution:
          'Built computer vision prototypes using Python-based detection workflows for recognition and real-time interaction experiments.',
        impact:
          'Provides a practical foundation for monitoring, recognition, and AI-assisted visual applications.',
        role:
          'Developed the prototype logic, detection workflow, and technical experimentation.',
        stack: ['Python', 'OpenCV', 'CNN', 'MediaPipe', 'FaceMesh'],
        directUrl:
          'https://www.linkedin.com/posts/dervio-rahmatdianto-703bb4153_artificialintelligence-datascience-computervision-activity-7409825544537550848-1HYW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUEzfMBVhRvuNFln6f6ooMAP-26_2dpx3k',
        links: {
          caseStudy:
            'https://www.linkedin.com/posts/dervio-rahmatdianto-703bb4153_artificialintelligence-datascience-computervision-activity-7409825544537550848-1HYW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUEzfMBVhRvuNFln6f6ooMAP-26_2dpx3k',
          demo: '#',
          source: '#',
        },
        accent: 'amber',
      },
      {
        name: 'AI Video Clipper',
        category: 'AI Video Automation / Content Creation',
        description:
          'An AI-powered automation tool that turns horizontal YouTube-style videos into vertical short-form clips for TikTok, Reels, and creator content workflows.',
        tags: ['AI', 'Automation', 'Computer Vision'],
        problem:
          'Turning long horizontal videos into vertical clips usually takes hours of manual hook discovery, reframing, and word-safe cutting.',
        solution:
          'Built an end-to-end video automation workflow with smart hook discovery, word-boundary snapping, dynamic reframing, and parallel clip processing.',
        impact:
          'Helps creators produce multiple short-form clips faster while keeping subjects centered and captions or spoken words from being cut awkwardly.',
        role:
          'Designed the AI scoring workflow, video processing pipeline, reframing logic, and automation structure.',
        stack: ['Python', 'Groq', 'Llama 3.1', 'MediaPipe', 'FFmpeg', 'Librosa'],
        directUrl:
          'https://www.linkedin.com/posts/dervio-rahmatdianto-703bb4153_ai-videoautomation-python-activity-7438971756075233280-icLx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUEzfMBVhRvuNFln6f6ooMAP-26_2dpx3k',
        links: {
          caseStudy:
            'https://www.linkedin.com/posts/dervio-rahmatdianto-703bb4153_ai-videoautomation-python-activity-7438971756075233280-icLx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUEzfMBVhRvuNFln6f6ooMAP-26_2dpx3k',
          demo: '#',
          source: '#',
        },
        accent: 'sky',
      },
    ],

    skillGroups: [
      { title: 'Programming & Backend', items: ['Python', 'JavaScript', 'Flask', 'Node.js', 'REST API'] },
      {
        title: 'AI & Data',
        items: [
          'Machine Learning',
          'Deep Learning',
          'LSTM',
          'Time Series Forecasting',
          'Computer Vision',
          'NLP',
          'Data Analysis',
        ],
      },
      {
        title: 'Data Tools',
        items: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras', 'Matplotlib', 'Power BI'],
      },
      {
        title: 'Automation & Systems',
        items: [
          'Workflow Automation',
          'Web Scraping',
          'Dashboard Automation',
          'API Integration',
          'Reporting System',
        ],
      },
      { title: 'Design & Productivity', items: ['Canva', 'CapCut', 'GitHub', 'Git', 'VS Code'] },
    ],

    experience: [
      {
        role: 'Airport Quality & Safety Intern',
        org: 'Minangkabau International Airport / InJourney Airports',
        description:
          'Built and supported operational reporting systems, inspection workflows, dashboards, and data management processes.',
      },
      {
        role: 'Freelance AI & Automation Builder',
        org: 'Fastwork / Independent Projects',
        description:
          'Delivered digital reporting systems, automation tools, data extraction, AI prototypes, and workflow solutions for clients.',
      },
      {
        role: 'Data Science Student Leadership',
        org: 'President of Data Science Student Association',
        description:
          'Led organizational programs, communication, collaboration, and student development initiatives.',
      },
    ],

    process: [
      { step: '01', title: 'Discover the Problem', detail: 'Understand the real operational pain before any code.' },
      { step: '02', title: 'Map the Workflow', detail: 'Trace how people, data, and decisions actually move.' },
      { step: '03', title: 'Design the System', detail: 'Architect a solution that fits the team, not the other way around.' },
      { step: '04', title: 'Build the MVP', detail: 'Ship a working core fast — usable, not just a demo.' },
      { step: '05', title: 'Test with Real Use Case', detail: 'Validate against live operations and real edge cases.' },
      { step: '06', title: 'Improve and Scale', detail: 'Monitor, refine, and grow the system over time.' },
    ],

    services: [
      {
        icon: 'spark',
        title: 'AI Prototype Development',
        description:
          'For businesses or creators who need AI-powered tools, chatbots, vision systems, or automation prototypes.',
      },
      {
        icon: 'dashboard',
        title: 'Dashboard & Reporting System',
        description:
          'For teams that still depend on manual reports, spreadsheets, and scattered operational data.',
      },
      {
        icon: 'workflow',
        title: 'Workflow Management System',
        description:
          'For businesses that need structured project tracking, document control, approval flow, and role-based collaboration.',
      },
      {
        icon: 'spider',
        title: 'Data Extraction & Automation',
        description:
          'For clients who need web scraping, Excel automation, data cleaning, or repetitive process automation.',
      },
    ],
  },

  // ----------------------------------------------------------- INDONESIAN
  id: {
    profile: { ...links },

    nav: [
      { label: 'Beranda', href: '#home' },
      { label: 'Tentang', href: '#about' },
      { label: 'Proyek', href: '#projects' },
      { label: 'Layanan', href: '#services' },
      { label: 'Kontak', href: '#contact' },
    ],

    ui: {
      letsTalk: 'Hubungi Saya',
      available: 'Tersedia untuk proyek AI & automasi',
      greeting: 'Halo, saya',
      role: 'AI Engineer Terapan & Pembangun Sistem Automasi',
      heroStatement: 'Sistem terapan untuk AI, data, dan automasi alur kerja.',
      subheadline:
        'Saya membangun sistem cerdas yang mengubah data, alur kerja, dan operasional menjadi solusi yang otomatis, terukur, dan skalabel.',
      badges: ['Rekayasa AI', 'Sains Data', 'Automasi Alur Kerja', 'Inteligensi Operasional'],
      viewProjects: 'Lihat Proyek',
      letsWork: 'Mari Bekerja Sama',
      scroll: 'Gulir untuk menjelajah',
      aboutEyebrow: 'Tentang Saya',
      aboutTitle: 'Seorang builder, bukan sekadar analis',
      viewCv: 'Lihat CV',
      expertiseEyebrow: 'Yang Saya Bangun',
      expertiseTitle: 'Sistem di seluruh lini AI & automasi',
      expertiseIntro:
        'Dari model prediktif hingga dashboard dan alur kerja yang menjalankannya — dibangun untuk beroperasi di lingkungan nyata.',
      projectsEyebrow: 'Karya Pilihan',
      projectsTitle: 'Proyek yang dibangun untuk operasional nyata',
      projectsIntro:
        'Beberapa sistem yang saya rancang dan kirimkan — masing-masing menyelesaikan masalah operasional nyata, bukan sekadar demo.',
      viewCaseStudy: 'Lihat Studi Kasus',
      viewDemo: 'Lihat Demo',
      sourceCode: 'Kode Sumber',
      projectsOnRequest: 'Studi kasus tersedia atas permintaan',
      projectFilters: [
        { label: 'Semua', value: 'All' },
        { label: 'AI', value: 'AI' },
        { label: 'Dashboard', value: 'Dashboard' },
        { label: 'Automasi', value: 'Automation' },
        { label: 'Workflow', value: 'Workflow' },
        { label: 'Computer Vision', value: 'Computer Vision' },
      ],
      closeProjectModal: 'Tutup detail proyek',
      prevProject: 'Proyek sebelumnya',
      nextProject: 'Proyek berikutnya',
      projectProblem: 'Masalah',
      projectSolution: 'Solusi',
      projectImpact: 'Dampak',
      projectRole: 'Peran',
      skillsEyebrow: 'Tumpukan Teknologi',
      skillsTitle: 'Alat yang saya gunakan',
      skillsIntro:
        'Stack praktis yang berfokus mengirimkan sistem AI, data, dan automasi secara menyeluruh.',
      experienceEyebrow: 'Pengalaman',
      experienceTitle: 'Tempat saya membangun dan memimpin',
      processEyebrow: 'Cara Saya Bekerja',
      processTitle: 'Dari masalah menjadi sistem yang skalabel',
      processIntro:
        'Proses berulang yang mengubah keluhan operasional yang samar menjadi sistem yang berfungsi dan mudah dirawat.',
      servicesEyebrow: 'Layanan',
      servicesTitle: 'Cara saya membantu Anda membangun',
      servicesIntro:
        'Kerja sama yang berfokus mengirimkan sesuatu yang berfungsi di dunia nyata — bukan sekadar slide.',
      ctaLead: 'Punya ide tapi belum tahu cara membangunnya?',
      ctaHighlight: 'Mari wujudkan menjadi sistem yang berfungsi.',
      startProject: 'Mulai Proyek',
      contactEyebrow: 'Kontak',
      contactTitleLead: 'Mari Bangun Sesuatu yang ',
      contactTitleHighlight: 'Bermanfaat',
      contactDescription:
        'Jika Anda membutuhkan sistem AI, alur automasi, dashboard, atau alat operasional yang benar-benar berfungsi di dunia nyata, mari bicara.',
      emailMe: 'Email Saya',
      contactHints: {
        linkedin: 'Terhubung secara profesional',
        github: 'Lihat kodenya',
        whatsapp: '082169046446',
      },
      footerTagline:
        'AI Engineer Terapan & Pembangun Sistem Automasi — mengubah data dan alur kerja menjadi sistem yang berjalan.',
      footerCopyright:
        '© 2026 Dervio Rahmatdianto. Dibangun dengan AI, data, dan sistem dunia nyata.',
      footerSubnote: 'Dirancang & direkayasa dengan pola pikir seorang builder.',
    },

    about: {
      paragraphs: [
        'Saya lulusan Sains Data yang berfokus membangun sistem AI terapan untuk masalah operasional dunia nyata. Pekerjaan saya memadukan machine learning, automasi, pengembangan dashboard, dan perancangan alur kerja untuk membantu bisnis mengambil keputusan lebih baik dan mengurangi pekerjaan manual.',
        'Saya tidak sekadar menganalisis data. Saya membangun sistem yang bisa digunakan, dipantau, dan ditingkatkan dalam operasional nyata.',
      ],
      highlights: [
        { label: 'Proyek', value: '5+ Sistem' },
        { label: 'Pendidikan', value: 'Lulusan Sains Data' },
        { label: 'Fokus', value: 'AI Terapan & Automasi' },
        { label: 'Keunggulan', value: 'Sistem Operasional' },
      ],
    },

    expertise: [
      {
        icon: 'brain',
        title: 'Sistem AI & Machine Learning',
        description:
          'Membangun model prediktif, sistem klasifikasi, model peramalan, dan automasi cerdas menggunakan Python dan framework ML modern.',
      },
      {
        icon: 'dashboard',
        title: 'Dashboard Data & Analitik',
        description:
          'Membuat dashboard interaktif, sistem pelaporan, dan alat business intelligence untuk pemantauan operasional dan pengambilan keputusan.',
      },
      {
        icon: 'workflow',
        title: 'Sistem Automasi Alur Kerja',
        description:
          'Merancang alur kerja digital yang menghubungkan tim, dokumen, status proyek, persetujuan, dan proses operasional.',
      },
      {
        icon: 'eye',
        title: 'Aplikasi Computer Vision',
        description:
          'Mengembangkan sistem deteksi visual, analisis berbasis gambar, pemantauan real-time, dan alat pengenalan berbantuan AI.',
      },
      {
        icon: 'trend',
        title: 'Peramalan Time Series',
        description:
          'Membangun model peramalan seperti sistem prediksi berbasis LSTM untuk penjualan, transaksi, dan permintaan operasional.',
      },
      {
        icon: 'spider',
        title: 'Web Scraping & Ekstraksi Data',
        description:
          'Mengotomatiskan pengumpulan data dari situs web, mengubah data mentah menjadi Excel, dashboard, atau basis data yang terstruktur.',
      },
    ],

    projects: [
      {
        name: 'AI Companion — Tenri',
        category: 'Agen AI / Interaksi Suara / Teknologi Budaya',
        description:
          'Pendamping AI yang dirancang untuk presentasi, konferensi, dan kuliah performatif. Tenri berperan sebagai karakter naratif hidup yang dapat merespons, menyela dengan halus, dan mendukung dialog berdasarkan sumber pengetahuan.',
        tags: ['AI', 'Automation'],
        problem:
          'Presentasi langsung sering terasa statis, sehingga sulit menciptakan dialog responsif dengan karakter AI di depan audiens.',
        solution:
          'Membangun alur AI companion berbasis grounding dengan aturan perilaku karakter, struktur interaksi, dan desain sistem berorientasi suara.',
        impact:
          'Menciptakan fondasi yang dapat digunakan ulang untuk demonstrasi AI di depan audiens dan interaksi naratif yang lebih natural.',
        role:
          'Merancang perilaku karakter, struktur prompt, alur interaksi, dan logika implementasi.',
        stack: ['Python', 'LLM', 'Speech-to-Text', 'Text-to-Speech', 'Retrieval', 'Prompt Engineering'],
        directUrl:
          'https://www.linkedin.com/posts/dervio-rahmatdianto-703bb4153_ai-voiceai-digitalheritage-activity-7469059430479843328-qXod?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUEzfMBVhRvuNFln6f6ooMAP-26_2dpx3k',
        links: {
          caseStudy:
            'https://www.linkedin.com/posts/dervio-rahmatdianto-703bb4153_ai-voiceai-digitalheritage-activity-7469059430479843328-qXod?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUEzfMBVhRvuNFln6f6ooMAP-26_2dpx3k',
          demo: '#',
          source: '#',
        },
        accent: 'cyan',
      },
      {
        name: 'Renus Workflow',
        category: 'Manajemen Alur Kerja / Operasional Energi Terbarukan',
        description:
          'Sistem manajemen alur kerja untuk operasional pembangkit listrik tenaga surya, menghubungkan sales, koordinator proyek, engineer, gudang, pengadaan, installer, dan pemilik ke dalam satu sistem pelacakan operasional.',
        tags: ['Dashboard', 'Automation', 'Workflow'],
        problem:
          'Koordinasi proyek solar dapat terpecah di banyak tim, dokumen, persetujuan, dan pembaruan status operasional.',
        solution:
          'Merancang sistem workflow berbasis peran untuk melacak tahapan proyek, tanggung jawab, dokumen, dan status eksekusi.',
        impact:
          'Meningkatkan visibilitas tim dan mengurangi pekerjaan koordinasi manual dalam operasional energi terbarukan.',
        role:
          'Merancang struktur workflow, batasan peran, logika pelacakan proyek, dan arah antarmuka.',
        stack: ['Web App', 'Dashboard', 'Role-Based Access', 'Document Tracking', 'Project Workflow'],
        directUrl:
          'https://www.linkedin.com/posts/dervio-rahmatdianto-703bb4153_webdevelopment-workflowsystem-renewableenergy-activity-7465282578258915328-MXPm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUEzfMBVhRvuNFln6f6ooMAP-26_2dpx3k',
        links: {
          caseStudy:
            'https://www.linkedin.com/posts/dervio-rahmatdianto-703bb4153_webdevelopment-workflowsystem-renewableenergy-activity-7465282578258915328-MXPm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUEzfMBVhRvuNFln6f6ooMAP-26_2dpx3k',
          demo: '#',
          source: '#',
        },
        accent: 'emerald',
      },
      {
        name: 'LSTM Sales Forecasting System',
        category: 'Deep Learning / Peramalan Time Series',
        description:
          'Sistem peramalan untuk data transaksi produk digital, menggunakan LSTM untuk memprediksi pola penjualan dan mendukung perencanaan bisnis yang lebih baik.',
        tags: ['AI'],
        problem:
          'Perencanaan penjualan sulit dilakukan ketika pola transaksi berubah dari waktu ke waktu dan hanya dibaca dari tabel historis.',
        solution:
          'Membangun workflow peramalan time series menggunakan LSTM, preprocessing, dan presentasi aplikasi untuk hasil prediksi.',
        impact:
          'Mengubah data transaksi historis menjadi sinyal perencanaan ke depan untuk keputusan bisnis yang lebih baik.',
        role:
          'Menangani persiapan data, workflow model, arah evaluasi, dan struktur aplikasi.',
        stack: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Flask', 'Time Series Analysis'],
        directUrl: 'https://github.com/Dervioo23/Skripsi-Kodingan.git',
        links: { caseStudy: '#', demo: '#', source: 'https://github.com/Dervioo23/Skripsi-Kodingan.git' },
        accent: 'violet',
      },
      {
        name: 'Airport Operational Reporting System',
        category: 'Dashboard Operasional / Automasi Pelaporan',
        description:
          'Sistem pelaporan dan dashboard digital yang dibangun untuk operasional quality & safety bandara guna meningkatkan pelaporan inspeksi, pemantauan, dan visibilitas alur kerja.',
        tags: ['Dashboard', 'Automation', 'Workflow'],
        problem:
          'Workflow inspeksi dan pelaporan menjadi lambat ketika data operasional tersebar di file manual dan laporan berulang.',
        solution:
          'Membuat workflow pelaporan dan dashboard untuk mengorganisasi data inspeksi, tampilan monitoring, dan laporan operasional rutin.',
        impact:
          'Meningkatkan kecepatan pelaporan, visibilitas, dan konsistensi untuk operasional quality dan safety.',
        role:
          'Mendukung desain dashboard, struktur workflow pelaporan, dan organisasi data operasional.',
        stack: ['Dashboard', 'Reporting System', 'Data Management', 'Workflow Digitization'],
        directUrl: 'https://safetypdg.com/',
        links: { caseStudy: '#', demo: 'https://safetypdg.com/', source: '#' },
        accent: 'sky',
      },
      {
        name: 'Computer Vision Detection Projects',
        category: 'AI Vision / Deteksi Real-Time',
        description:
          'Sistem deteksi visual berbasis AI menggunakan teknik computer vision untuk pengenalan, pemantauan, dan interaksi cerdas.',
        tags: ['AI', 'Computer Vision'],
        problem:
          'Tugas pengenalan visual membutuhkan logika deteksi yang dapat mengubah gambar atau input langsung menjadi sinyal yang berguna.',
        solution:
          'Membangun prototipe computer vision menggunakan workflow deteksi berbasis Python untuk eksperimen pengenalan dan interaksi real-time.',
        impact:
          'Memberikan fondasi praktis untuk monitoring, recognition, dan aplikasi visual berbantuan AI.',
        role:
          'Mengembangkan logika prototipe, workflow deteksi, dan eksperimen teknis.',
        stack: ['Python', 'OpenCV', 'CNN', 'MediaPipe', 'FaceMesh'],
        directUrl:
          'https://www.linkedin.com/posts/dervio-rahmatdianto-703bb4153_artificialintelligence-datascience-computervision-activity-7409825544537550848-1HYW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUEzfMBVhRvuNFln6f6ooMAP-26_2dpx3k',
        links: {
          caseStudy:
            'https://www.linkedin.com/posts/dervio-rahmatdianto-703bb4153_artificialintelligence-datascience-computervision-activity-7409825544537550848-1HYW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUEzfMBVhRvuNFln6f6ooMAP-26_2dpx3k',
          demo: '#',
          source: '#',
        },
        accent: 'amber',
      },
      {
        name: 'AI Video Clipper',
        category: 'AI Video Automation / Content Creation',
        description:
          'Alat automasi berbasis AI yang mengubah video horizontal seperti YouTube menjadi klip vertikal untuk TikTok, Reels, dan workflow konten kreator.',
        tags: ['AI', 'Automation', 'Computer Vision'],
        problem:
          'Mengubah video panjang horizontal menjadi klip vertikal biasanya memakan waktu berjam-jam untuk mencari hook, reframing manual, dan memastikan potongan kata tetap aman.',
        solution:
          'Membangun workflow automasi video end-to-end dengan smart hook discovery, word-boundary snapping, dynamic reframing, dan parallel clip processing.',
        impact:
          'Membantu kreator menghasilkan beberapa klip short-form lebih cepat sambil menjaga subjek tetap di tengah dan potongan kata tidak terasa janggal.',
        role:
          'Merancang workflow AI scoring, pipeline pemrosesan video, logika reframing, dan struktur automasi.',
        stack: ['Python', 'Groq', 'Llama 3.1', 'MediaPipe', 'FFmpeg', 'Librosa'],
        directUrl:
          'https://www.linkedin.com/posts/dervio-rahmatdianto-703bb4153_ai-videoautomation-python-activity-7438971756075233280-icLx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUEzfMBVhRvuNFln6f6ooMAP-26_2dpx3k',
        links: {
          caseStudy:
            'https://www.linkedin.com/posts/dervio-rahmatdianto-703bb4153_ai-videoautomation-python-activity-7438971756075233280-icLx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACUEzfMBVhRvuNFln6f6ooMAP-26_2dpx3k',
          demo: '#',
          source: '#',
        },
        accent: 'sky',
      },
    ],

    skillGroups: [
      { title: 'Pemrograman & Backend', items: ['Python', 'JavaScript', 'Flask', 'Node.js', 'REST API'] },
      {
        title: 'AI & Data',
        items: [
          'Machine Learning',
          'Deep Learning',
          'LSTM',
          'Time Series Forecasting',
          'Computer Vision',
          'NLP',
          'Analisis Data',
        ],
      },
      {
        title: 'Alat Data',
        items: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras', 'Matplotlib', 'Power BI'],
      },
      {
        title: 'Automasi & Sistem',
        items: [
          'Automasi Alur Kerja',
          'Web Scraping',
          'Automasi Dashboard',
          'Integrasi API',
          'Sistem Pelaporan',
        ],
      },
      { title: 'Desain & Produktivitas', items: ['Canva', 'CapCut', 'GitHub', 'Git', 'VS Code'] },
    ],

    experience: [
      {
        role: 'Magang Quality & Safety Bandara',
        org: 'Bandara Internasional Minangkabau / InJourney Airports',
        description:
          'Membangun dan mendukung sistem pelaporan operasional, alur kerja inspeksi, dashboard, dan proses pengelolaan data.',
      },
      {
        role: 'Freelance AI & Automation Builder',
        org: 'Fastwork / Proyek Independen',
        description:
          'Mengirimkan sistem pelaporan digital, alat automasi, ekstraksi data, prototipe AI, dan solusi alur kerja untuk klien.',
      },
      {
        role: 'Kepemimpinan Mahasiswa Sains Data',
        org: 'Presiden Himpunan Mahasiswa Sains Data',
        description:
          'Memimpin program organisasi, komunikasi, kolaborasi, dan inisiatif pengembangan mahasiswa.',
      },
    ],

    process: [
      { step: '01', title: 'Pahami Masalah', detail: 'Pahami pain operasional nyata sebelum menulis kode.' },
      { step: '02', title: 'Petakan Alur Kerja', detail: 'Telusuri bagaimana orang, data, dan keputusan benar-benar bergerak.' },
      { step: '03', title: 'Rancang Sistem', detail: 'Arsitektur solusi yang menyesuaikan tim, bukan sebaliknya.' },
      { step: '04', title: 'Bangun MVP', detail: 'Kirim inti yang berfungsi dengan cepat — bisa dipakai, bukan sekadar demo.' },
      { step: '05', title: 'Uji dengan Kasus Nyata', detail: 'Validasi terhadap operasional langsung dan kasus tepi nyata.' },
      { step: '06', title: 'Tingkatkan & Skalakan', detail: 'Pantau, sempurnakan, dan kembangkan sistem dari waktu ke waktu.' },
    ],

    services: [
      {
        icon: 'spark',
        title: 'Pengembangan Prototipe AI',
        description:
          'Untuk bisnis atau kreator yang membutuhkan alat bertenaga AI, chatbot, sistem vision, atau prototipe automasi.',
      },
      {
        icon: 'dashboard',
        title: 'Sistem Dashboard & Pelaporan',
        description:
          'Untuk tim yang masih bergantung pada laporan manual, spreadsheet, dan data operasional yang berserakan.',
      },
      {
        icon: 'workflow',
        title: 'Sistem Manajemen Alur Kerja',
        description:
          'Untuk bisnis yang membutuhkan pelacakan proyek terstruktur, kontrol dokumen, alur persetujuan, dan kolaborasi berbasis peran.',
      },
      {
        icon: 'spider',
        title: 'Ekstraksi Data & Automasi',
        description:
          'Untuk klien yang membutuhkan web scraping, automasi Excel, pembersihan data, atau automasi proses berulang.',
      },
    ],
  },
}
