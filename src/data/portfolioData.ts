import { DeveloperProfile, Project, SkillCategory, ExperienceItem, EducationItem } from "./types";

export const profileData: DeveloperProfile = {
  name: "Al Akbar Baihaqi",
  title: "Mobile Engineer",
  headline: "Building cross-platform Flutter applications from architectural setup to deployment.",
  bio: "Mobile Engineer with a strong background in building cross-platform Flutter applications from architectural setup to deployment. Combines deep technical skills in Clean Architecture, GetX, and Patrol testing with experience handling IoT and AI integrations. Adept at transforming complex UI/UX designs into production-grade mobile applications.",
  status: "Application Developer at Bionic Technology Indonesia",
  location: "Bekasi, Indonesia",
  postalCode: "13930",
  phone: "+6289681754400",
  whatsapp: "https://wa.me/6289681754400",
  email: "baihaqi08.aa@gmail.com",
  github: "https://github.com/EqiBaihaqi",
  linkedin: "https://linkedin.com/in/alakbarbaihaqi",
  yearsOfExperience: "3+ Years",
  projectsCompleted: "6+ Production Projects",
  gpa: "3.68 / 4.00",
  toeicScore: "790 / 990",
};

export const educationData: EducationItem[] = [
  {
    institution: "Politeknik Negeri Malang",
    degree: "Majoring Informatic Engineering",
    period: "2021 – 2025",
    gpa: "3.68 / 4.00",
    toeic: "TOEIC Official Score: 790/990 (Listening & Reading)",
    details: [
      "Relevant Coursework: Mobile Development, Flutter, OOP, Software Engineering, Data Structures.",
      "Conducted bachelor thesis on IoT-based Smart Irrigation with Fuzzy Tsukamoto algorithm."
    ]
  },
  {
    institution: "Studi Independen Bersertifikat (SIB) – Alterra Academy",
    degree: "Mobile Engineer with Flutter",
    period: "February 2024 – June 2024",
    gpa: "Completed with Distinction",
    details: [
      "Mastered Git workflows (Branching, Merging, Git Flow, Staging).",
      "Advanced Flutter UI, Provider & GetX State Management, SQLite, Shared Preferences.",
      "Engineered REST APIs with Dio, MVVM Architecture, and Gemini AI in Flutter."
    ]
  },
  {
    institution: "Dicoding Academy Courses",
    degree: "Flutter Application & Dart Programming Certifications",
    period: "October 2023 – November 2023",
    gpa: "Certified Graduate",
    details: [
      "Dart Fundamentals: Object-Oriented Programming (OOP), Functional Styles, Null Safety, Effective Dart.",
      "Flutter Foundations: Widgets, State Management, and production layouting."
    ]
  }
];

export const featuredProjects: Project[] = [
  {
    id: "dompet-kering",
    title: "Dompet Kering",
    subtitle: "Personal Finance & Cash Flow Management App",
    category: "Mobile",
    badge: "Clean Architecture",
    period: "May 2024 – Present",
    description:
      "Minimalist personal finance tracking mobile application focused on rapid user input and cloud synchronization. Architected using a simplified Clean Architecture pattern with GetX for efficient state management, dependency injection, and routing.",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-7",
    iconName: "Wallet",
    technologies: [
      "Flutter",
      "Dart",
      "Clean Architecture",
      "GetX",
      "Firebase Auth",
      "Cloud Firestore",
      "ThemeExtension",
      "Atomic Batches"
    ],
    metrics: [
      { label: "Architecture", value: "Clean + GetX" },
      { label: "State Management", value: "GetX Pattern" },
      { label: "Backend", value: "Cloud Firestore" },
    ],
    modalDetails: {
      overview:
        "Designed and developed a minimalist personal finance tracking mobile application focused on rapid user input and reliable data management. Architected the codebase using a simplified Clean Architecture pattern with GetX for efficient state management, dependency injection, and routing. Developed core features including multi-wallet management, inter-wallet transfers, and quick-input bottom sheets.",
      architectureTitle: "Simplified Clean Architecture + GetX Pattern",
      architectureDetails: [
        "State Management & DI: GetX controllers managing lightweight UI views, dependency injection, and named routing.",
        "Cloud Integration: Integrated Firebase Auth and Cloud Firestore for authentication and cloud storage.",
        "Data Integrity: Batch/Transactions to ensure atomic data consistency across related multi-wallet collections.",
        "Dynamic Theming: Custom Light/Dark mode implementation via ThemeExtension for seamless user preference switching.",
        "Analytics: Interactive pie charts and bar visualizations for historical monthly cash flow."
      ],
      technicalHighlights: [
        "Multi-wallet ledger with instant inter-wallet transfers and quick-input bottom sheets.",
        "Cloud balance synchronization using Firestore.",
        "Atomic batch writes preventing inconsistent balances during network interruptions.",
        "Custom ThemeExtension styling for light and dark modes."
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing partial data writes during complex multi-wallet transfers.",
          solution: "Implemented Firestore atomic Transactions and Batch writes ensuring all ledger entries succeed or rollback together."
        },
        {
          challenge: "Supporting fluid theme switching across custom graphical elements and pie charts.",
          solution: "Engineered Flutter ThemeExtension hooks that dynamically adjust chart palettes without full widget tree rebuilds."
        }
      ],
      deliverables: [
        "Production Flutter APK & iOS deployment packages",
        "Clean Architecture modular source code",
        "Interactive monthly cash flow visualization engine"
      ],
      githubUrl: "https://github.com/EqiBaihaqi/dompet-kering"
    }
  },
  {
    id: "smart-irrigation",
    title: "Smart Irrigation System",
    subtitle: "Thesis Project: IoT Strawberry Greenhouse Automation",
    category: "IoT & Full-Stack",
    badge: "Fuzzy Tsukamoto Engine",
    period: "January 2025 – July 2025",
    description:
      "Comprehensive IoT-based smart irrigation system to solve chronic underwatering in a strawberry greenhouse. Utilizes Fuzzy Tsukamoto logic for dynamic data-driven decisions, a Flutter mobile app for remote monitoring, and supporting REST APIs.",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-5",
    iconName: "Sprout",
    technologies: [
      "IoT / ESP32",
      "Fuzzy Tsukamoto",
      "Flutter",
      "REST APIs",
      "Sensors Array",
      "Dart",
      "Automation"
    ],
    metrics: [
      { label: "Water Delivery", value: "80L → 372L" },
      { label: "Decision Logic", value: "Fuzzy Tsukamoto" },
      { label: "Monitoring", value: "Flutter Mobile" }
    ],
    modalDetails: {
      overview:
        "Designed and developed a comprehensive IoT-based smart irrigation system to solve chronic underwatering in a strawberry greenhouse. My contributions focused on designing Fuzzy Tsukamoto logic for dynamic, data-driven decisions; developing the Flutter-based mobile app for remote monitoring and manual control; and building the supporting REST APIs. The final system proved highly effective, successfully increasing daily water delivery from 80L (manual) to an estimated 372L (automated).",
      architectureTitle: "IoT Telemetry + Fuzzy Tsukamoto Inference + Flutter Client",
      architectureDetails: [
        "Dynamic Decision Engine: Mathematical modeling of Fuzzy Tsukamoto logic evaluating soil moisture, temperature, and ambient parameters.",
        "Mobile Control Hub: Flutter application providing live telemetry dashboards, actuator statuses, and manual override controls.",
        "Backend & Telemetry: Supporting REST APIs handling sensor data ingestion, storage, and real-time actuator commands."
      ],
      technicalHighlights: [
        "Successfully resolved greenhouse underwatering, scaling daily delivery from 80L to 372L automatically.",
        "Data-driven Fuzzy Tsukamoto rule base responding dynamically to environmental microclimate shifts.",
        "Full mobile control with manual pump override and sensor threshold calibration."
      ],
      challengesAndSolutions: [
        {
          challenge: "Chronic underwatering of strawberry crops under unpredictable greenhouse microclimates.",
          solution: "Formulated multi-variable Fuzzy Tsukamoto membership functions to calculate precision pump run-times."
        },
        {
          challenge: "Enabling reliable remote monitoring for greenhouse operators.",
          solution: "Constructed a responsive Flutter mobile interface communicating with cloud REST endpoints for live sensor reads."
        }
      ],
      deliverables: [
        "Published Academic Bachelor Thesis Report & Dataset",
        "Flutter remote monitoring & control mobile application",
        "Embedded microcontroller firmware and REST API backend"
      ],
      githubUrl: "https://github.com/EqiBaihaqi/Smart-Farming-Mobile-App"
    }
  },
  {
    id: "simba-academy",
    title: "SiMBA Academy",
    subtitle: "BAZNAS Digital Learning & Operations Platform",
    category: "Enterprise Mobile",
    badge: "Enterprise Production",
    period: "September 2024 – December 2024",
    description:
      "Digital learning platform to streamline BAZNAS's management system access for muzakki (donors) and mustahik (beneficiaries). Developed core features (login, dashboard, video courses, QnA) using Flutter and REST APIs, custom Google Apps Script APIs, and Postman testing.",
    featured: true,
    bentoSpan: "col-span-12",
    iconName: "Building2",
    technologies: [
      "Flutter",
      "REST APIs",
      "Google Apps Script",
      "Postman",
      "Agile Scrum",
      "BRD Specs",
      "Figma",
      "GetX"
    ],
    metrics: [
      { label: "Target Users", value: "Muzakki & Mustahik" },
      { label: "APIs & Testing", value: "Postman Verified" },
      { label: "Workflow", value: "Agile Scrum / BRD" }
    ],
    modalDetails: {
      overview:
        "As a Flutter developer, built a digital learning platform to streamline BAZNAS's management system access for muzakki (donors) and mustahik (beneficiaries). Developed core features (login, dashboard, video courses, QnA) using Flutter and REST APIs, including version checks and user progress tracking. Created custom APIs via Google Apps Script/Sheets to manage dynamic content (video links, quizzes) and conducted Postman testing for reliability. Collaborated cross-functionally to implement Agile workflows, BRD specs, and Figma designs, optimizing app performance and user engagement.",
      architectureTitle: "Agile Enterprise Mobile Architecture & Dynamic CMS",
      architectureDetails: [
        "Mobile Frontend: Flutter mobile client translating Figma design systems into responsive, accessible UI views.",
        "State Management: MVVM Architecture with GetX for structured separation of concerns.",
        "Dynamic APIs: Google Apps Script endpoints serving dynamic video courses, quiz modules, and remote version verification.",
        "Quality & Process: Comprehensive Postman API testing suites and adherence to Business Requirement Documents (BRD)."
      ],
      technicalHighlights: [
        "Streamlined access for both donors (muzakki) and beneficiaries (mustahik).",
        "Video course streaming modules with user progress tracking and interactive QnA.",
        "Lightweight serverless content pipeline utilizing Google Apps Script and Sheets.",
        "Automated version-check routines to ensure user clients remain up to date."
      ],
      challengesAndSolutions: [
        {
          challenge: "Managing dynamic educational content without a heavy dedicated CMS infrastructure.",
          solution: "Engineered secure Google Apps Script API endpoints backed by Sheets, allowing staff to update video URLs and quiz data instantly."
        },
        {
          challenge: "Ensuring cross-functional alignment between management specs and engineering delivery.",
          solution: "Assisted in drafting the Business Requirement Document (BRD) and strictly tracked sprint user stories via Agile Scrum."
        }
      ],
      deliverables: [
        "Production Flutter APK for BAZNAS operational learning",
        "Postman API test collections & test run reports",
        "Figma UI/UX design specifications & BRD documentation"
      ]
    }
  },
  {
    id: "tourease",
    title: "Tourease",
    subtitle: "AI-Powered Eco-Friendly Tourism Platform",
    category: "AI & Community",
    badge: "Cross-Functional Team",
    period: "May 2024 – June 2024",
    description:
      "Collaborated as part of a 5-member Flutter team across 6 divisions (UI/UX, React, Golang, Flutter, Data Engineer, QA). Built an AI-powered travel app promoting sustainable and eco-friendly tourism, supporting environmental and cultural preservation.",
    featured: false,
    bentoSpan: "col-span-12 md:col-span-4",
    iconName: "Globe",
    technologies: ["Flutter", "Dart", "GetX", "REST APIs", "AI Integration", "Golang Backend"],
    metrics: [
      { label: "Team Size", value: "5 Members" },
      { label: "Divisions", value: "6 Disciplines" },
      { label: "Focus", value: "Eco-Tourism AI" }
    ],
    modalDetails: {
      overview:
        "Part of the Flutter team in the Tourease project, which consisted of 5 members from 6 divisions: UI/UX, React, Golang, Flutter, Data Engineer, and Quality Assurance. This application focuses on sustainable and eco-friendly tourism, utilizing AI to provide a new experience for users. Tourease helps travelers plan their trips more wisely and responsibly, supporting environmental and local cultural preservation. Responsible for developing key features, API integration, and state management implementation using GetX.",
      architectureTitle: "Collaborative Cross-Discipline Flutter Architecture",
      architectureDetails: [
        "GetX State Management for reactive view models and clean route handling.",
        "REST API integration with high-performance Golang microservices backend.",
        "AI-guided itinerary recommendations tailored for eco-friendly tourism."
      ],
      technicalHighlights: [
        "Seamless teamwork across 6 technical divisions in an Agile rhythm.",
        "AI-driven sustainable travel planning and cultural preservation highlights.",
        "Robust error-handling and response parsing for external API services."
      ],
      challengesAndSolutions: [
        {
          challenge: "Coordinating API contract changes across separate frontend and Golang backend teams.",
          solution: "Maintained standardized Swagger/Postman contracts with mock data pipelines to unblock mobile UI development."
        }
      ],
      deliverables: ["Flutter client application", "Integrated GetX state architecture"],
      githubUrl: "https://github.com/EqiBaihaqi/Tourease"
    }
  },
  {
    id: "your-comfort-recipe",
    title: "Your Comfort Recipe",
    subtitle: "AI-Integrated Culinary & Dietary Explorer",
    category: "AI & Community",
    badge: "Solo Development",
    period: "April 2024 – May 2024",
    description:
      "Solo-developed Flutter application with external API integration. Features authentication, recipe discovery (vegan, dairy-free, standard), search, and AI-implemented alternative ingredient recommendations.",
    featured: false,
    bentoSpan: "col-span-12 md:col-span-4",
    iconName: "Sparkles",
    technologies: ["Flutter", "Dart", "REST APIs", "AI Integration", "Dio", "UI/UX"],
    metrics: [
      { label: "Role", value: "Solo Developer" },
      { label: "AI Feature", value: "Ingredient Swap" },
      { label: "Categories", value: "Vegan & Dairy-Free" }
    ],
    modalDetails: {
      overview:
        "Developed as an individual project using Flutter Framework with API integration. Engineered recipe discovery features such as authentication, browsing all recipes, vegan filters, dairy-free filters, dynamic keyword search, and intelligent alternative ingredient suggestions powered by AI.",
      architectureTitle: "Clean Modular Flutter Application with AI Enhancement",
      architectureDetails: [
        "Modular UI views with search debouncing and dietary category filtering.",
        "REST API integration delivering structured recipes and nutritional metadata.",
        "AI-powered alternative ingredient generator for dietary substitutions."
      ],
      technicalHighlights: [
        "Specialized dietary categories (Vegan, Dairy-Free, Vegetarian).",
        "Dynamic ingredient replacement engine leveraging AI.",
        "Clean, intuitive recipe cards and step-by-step cooking instructions."
      ],
      challengesAndSolutions: [
        {
          challenge: "Handling complex dietary restrictions when ingredients are unavailable.",
          solution: "Integrated an AI helper that suggests accessible pantry substitutes with similar flavor and texture profiles."
        }
      ],
      deliverables: ["Full Flutter mobile source code", "AI substitution feature integration"],
      githubUrl: "https://github.com/EqiBaihaqi/Your_Comfort_Recipe"
    }
  },
  {
    id: "camps-scanner",
    title: "Camps Scanner",
    subtitle: "Machine Learning OCR Vehicle Rental App",
    category: "AI & Community",
    badge: "ML & OCR",
    period: "November 2023 – December 2023",
    description:
      "Worked in a team of 3 to create a mobile application and machine learning model implementing OCR. Built a streamlined vehicle rental app focused on rapid ID scanning verification.",
    featured: false,
    bentoSpan: "col-span-12 md:col-span-4",
    iconName: "Cpu",
    technologies: ["Flutter", "Dart", "Machine Learning", "OCR", "Camera API", "Android"],
    metrics: [
      { label: "Team", value: "3 Developers" },
      { label: "Technology", value: "On-Device OCR" },
      { label: "Use Case", value: "ID Verification" }
    ],
    modalDetails: {
      overview:
        "Collaborated in a team of 3 to develop a mobile application and implement a machine learning model for Optical Character Recognition (OCR). The application enables swift, reliable vehicle rentals by automatically scanning identity cards and populating rental credentials with zero manual typing.",
      architectureTitle: "On-Device Computer Vision & Flutter Mobile Client",
      architectureDetails: [
        "Camera stream integration with real-time bounding box detection.",
        "OCR machine learning pipeline parsing identity document text.",
        "Flutter frontend providing real-time feedback and instant rental verification."
      ],
      technicalHighlights: [
        "On-device OCR parsing eliminating manual identity registration friction.",
        "High-accuracy camera bounding box guides for diverse lighting conditions.",
        "Automated form auto-fill upon ID scan completion."
      ],
      challengesAndSolutions: [
        {
          challenge: "Low-light and blurred text recognition on physical ID cards.",
          solution: "Implemented pre-processing filters and camera autofocus locking before dispatching frames to the OCR model."
        }
      ],
      deliverables: ["Android APK package", "OCR model integration pipeline"],
      githubUrl: "https://github.com/EqiBaihaqi/Proyek-KTM-Pemrograman_Mobile"
    }
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-bionic",
    role: "Application Developer",
    organization: "Bionic Technology Indonesia",
    period: "November 2025 – Present",
    location: "Bekasi, Indonesia",
    type: "Current Role",
    description:
      "Contributing to a large-scale enterprise Flutter codebase utilizing Clean Architecture, Freezed immutable state, Patrol integration testing, and WebView flow optimization.",
    achievements: [
      "Gained in-depth practical understanding of Clean Architecture by navigating and contributing to a large-scale Flutter codebase.",
      "Managed and optimized WebView flows for the existing production application.",
      "Implemented Freezed for immutable data classes and robust state management in the development of the new native application.",
      "Executed Integration Testing using Patrol across Android and iOS platforms to ensure stability for critical features.",
      "Resolved staging environment bugs and implemented Localization to enhance user experience and interface accessibility."
    ],
    technologies: ["Flutter", "Clean Architecture", "Freezed", "Patrol Testing", "WebView", "Localization", "Android & iOS"]
  },
  {
    id: "exp-ragdalion",
    role: "Mobile Developer (Internship)",
    organization: "Ragdalion Technology",
    period: "August 2025 – November 2025",
    location: "Indonesia",
    type: "Internship",
    description:
      "Delivered pixel-perfect Flutter UI screens from Figma, implemented Google Maps and Face Detection biometric modules, and structured REST API layers using GetX Pattern.",
    achievements: [
      "Translated UI/UX designs into pixel-perfect, functional application screens using Flutter.",
      "Developed and implemented core features, including map integration for location-based services and a face detection module.",
      "Integrated the mobile application with backend services via REST APIs to fetch, display, and manage data.",
      "Collaborated closely within an Agile team environment, working with other developers and designers to meet project deadlines and deliver high-quality code.",
      "Applied the GetX Pattern architecture for state management, dependency injection, and route management throughout the application."
    ],
    technologies: ["Flutter", "Dart", "GetX Pattern", "Map Integration", "Face Detection", "REST APIs", "Agile Collaboration"]
  },
  {
    id: "exp-baznas",
    role: "Flutter Engineer (MSIB Internship)",
    organization: "Badan Amil Zakat Nasional (BAZNAS RI)",
    period: "September 2024 – December 2024",
    location: "Jakarta, Indonesia",
    type: "Internship",
    description:
      "Developed mobile operational applications to streamline BAZNAS donor and beneficiary workflows, implemented MVVM with GetX, and created BRD technical documentation.",
    achievements: [
      "Developed a mobile-based application to streamline and enhance BAZNAS's operational workflows.",
      "Designed UI/UX prototypes in Figma, ensuring a user-friendly and intuitive interface.",
      "Translated UI/UX designs from Figma into functional application views using Flutter.",
      "Implemented MVVM Architecture with GetX state management to ensure a clean and maintainable codebase.",
      "Utilized the Agile Scrum methodology to manage project development efficiently.",
      "Contributed to the design and testing of application features to ensure alignment with user needs and functionality.",
      "Assisted in creating the Business Requirement Document (BRD) to define project scope and requirements."
    ],
    technologies: ["Flutter", "MVVM Architecture", "GetX", "Figma", "Agile Scrum", "BRD Documentation", "Postman"]
  },
  {
    id: "exp-alterra",
    role: "Mobile Engineer with Flutter (SIB)",
    organization: "Alterra Academy",
    period: "February 2024 – June 2024",
    location: "Remote, Indonesia",
    type: "Certified Program",
    description:
      "Comprehensive certified industry training in Git branching workflows, Flutter widget systems, Provider & GetX state management, SQLite/Shared Preferences, Dio REST APIs, and Gemini AI.",
    achievements: [
      "Mastered Git version control: Staging area, Status, Commit, Diff, Checkout, Push, Fetch, Pull, Branching, and Merge.",
      "Mastered Flutter Framework: Custom Widgets, Platform Widgets, Layouting, Forms, Assets, Dialogs, Bottom Sheets, and Navigation.",
      "Implemented State Management using Provider and GetX, and local storage with Shared Preferences and SQLite.",
      "Constructed REST APIs using Dio package, MVVM Architecture, and integrated Google Gemini AI in Flutter projects."
    ],
    technologies: ["Flutter", "Dart", "Dio", "SQLite", "GetX", "Provider", "MVVM", "Gemini AI", "Git"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Architecture & Engineering",
    icon: "Smartphone",
    description: "Core mobile engineering stack with deep expertise in cross-platform Flutter, architecture patterns, and native testing.",
    skills: [
      { name: "Flutter", level: "Expert", highlight: true, tags: ["Cross-Platform", "Production", "SDK"] },
      { name: "Dart", level: "Expert", highlight: true, tags: ["OOP", "Async", "Null Safety", "Effective Dart"] },
      { name: "Clean Architecture", level: "Advanced", highlight: true, tags: ["Domain-Driven", "Modular", "Decoupled"] },
      { name: "GetX Pattern", level: "Expert", highlight: true, tags: ["State Management", "DI", "Route Navigation"] },
      { name: "Patrol Testing", level: "Advanced", highlight: true, tags: ["E2E", "Integration Tests", "Android & iOS"] },
      { name: "Freezed", level: "Advanced", highlight: true, tags: ["Immutable Data", "Union Types", "Code Generation"] },
      { name: "MVVM & Provider", level: "Advanced", highlight: false, tags: ["Architecture", "Separation of Concerns"] },
      { name: "Java & Android SDK", level: "Proficient", highlight: false, tags: ["Native Android", "Platform Channels"] }
    ]
  },
  {
    title: "APIs, Cloud & Device Integrations",
    icon: "Layers",
    description: "Robust networking, offline synchronization, cloud infrastructure, and device hardware modules.",
    skills: [
      { name: "RESTful APIs", level: "Expert", highlight: true, tags: ["HTTP Client", "JSON Serialization", "Endpoints"] },
      { name: "Dio HTTP Client", level: "Advanced", highlight: true, tags: ["Interceptors", "Queued Handshake", "Error Handling"] },
      { name: "Firebase", level: "Advanced", highlight: true, tags: ["Firestore Streams", "Auth", "Atomic Batches"] },
      { name: "SQLite & SharedPreferences", level: "Advanced", highlight: false, tags: ["Local DB", "Persistence", "Caching"] },
      { name: "Map Integration", level: "Advanced", highlight: false, tags: ["Google Maps SDK", "Location Services"] },
      { name: "Face Detection & Biometrics", level: "Proficient", highlight: false, tags: ["Native Camera", "Verification"] },
      { name: "IoT & Sensors (ESP32)", level: "Advanced", highlight: false, tags: ["Fuzzy Tsukamoto", "Telemetry", "Actuators"] },
      { name: "AI & Gemini Integration", level: "Proficient", highlight: false, tags: ["Gemini AI", "Alternative Ingredients", "OCR"] }
    ]
  },
  {
    title: "Engineering Tools & Methodologies",
    icon: "Globe",
    description: "Industry-standard developer workflows, API validation, UI/UX design tools, and Agile collaboration.",
    skills: [
      { name: "Git Version Control", level: "Expert", highlight: true, tags: ["Branching", "Merge", "GitFlow", "Diff", "Log"] },
      { name: "Postman", level: "Advanced", highlight: true, tags: ["API Testing", "Environment Variables", "Automation"] },
      { name: "Figma", level: "Advanced", highlight: true, tags: ["UI/UX Design", "Wireframes", "Design Handoff"] },
      { name: "Agile Scrum", level: "Advanced", highlight: true, tags: ["Sprint Planning", "BRD Specs", "Cross-Functional"] },
      { name: "Android Studio & Xcode", level: "Advanced", highlight: false, tags: ["Profiling", "Native Builds", "DevTools"] },
      { name: "Localization & i18n", level: "Advanced", highlight: false, tags: ["Multi-Language", "Accessibility"] },
      { name: "Canva", level: "Proficient", highlight: false, tags: ["Design Systems", "Assets"] },
      { name: "Problem Solving & Teamwork", level: "Expert", highlight: false, tags: ["Critical Thinking", "Communication"] }
    ]
  }
];

export const softSkills = [
  "Teamwork",
  "Problem Solving",
  "Effective Communication",
  "Critical Thinking",
  "Agile Collaboration",
  "BRD Specification Alignment",
  "Cross-Functional Coordination"
];
