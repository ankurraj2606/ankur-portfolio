export const personalInfo = {
  name: "Ankur Raj",
  title: "Senior Frontend Engineer",
  location: "Bengaluru, India (Open to Remote)",
  email: "ankurraj2606@gmail.com",
  phone: "+91 91422 79544",
  linkedin: "https://www.linkedin.com/in/ankur-raj-b25743138/",
  github: "https://github.com/ankurraj2606",
  bio: "Senior Frontend Engineer with strong problem-solving skills and expertise in Data Structures & Algorithms, specializing in React/Next.js and TypeScript. With 4+ years of experience building scalable web applications for enterprise clients, I excel at breaking down complex problems into efficient, maintainable solutions. Currently seeking senior frontend roles in product-based companies where I can drive product development from concept to launch. I excel at owning full product features end-to-end, optimizing for performance and user experience, and collaborating cross-functionally to deliver high-impact solutions. Open to remote opportunities with competitive compensation packages.",
  resumeUrl: "/Ankur-Resume.pdf",
  careerGoals: {
    targetRole: "Senior Frontend Engineer",
    targetCompanies: "Product-based companies (SaaS, Fintech, Healthtech)",
    salaryRange: "₹25-45 LPA (or equivalent USD)",
    workPreference: "Remote / Hybrid",
    availability: "Immediately available",
  },
};

export const skills = [
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "JavaScript ES6+", level: 95, category: "Programming" },
  { name: "Java", level: 85, category: "Programming" },
  { name: "Data Structures & Algorithms", level: 90, category: "Programming" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "Redux/Redux Toolkit", level: 90, category: "State Management" },
  { name: "Zustand", level: 85, category: "State Management" },
  { name: "Tailwind CSS", level: 85, category: "Styling" },
  { name: "SCSS/SASS", level: 80, category: "Styling" },
  { name: "HTML5/CSS3", level: 95, category: "Web Standards" },
  { name: "Node.js", level: 65, category: "Backend" },
  { name: "MongoDB", level: 60, category: "Database" },
  { name: "AWS", level: 65, category: "Cloud" },
  { name: "Git/GitHub", level: 90, category: "Tools" },
  { name: "Jest/Testing", level: 80, category: "Testing" },
  { name: "Webpack", level: 75, category: "Build Tools" },
];

export const experience = [
  {
    company: "Grid Dynamics",
    client: "Visa",
    role: "Software Engineer 2 — UI",
    period: "October 2024 - Present",
    location: "Bengaluru, India",
    description:
      "Engineering platform-agnostic JavaScript Web SDKs (Flutter compatible) powering secure card lifecycle & transaction experiences used by 15+ issuing banks globally.",
    achievements: [
      "Delivered 6+ core SDK modules (transaction controls, click‑to‑pay, step‑up auth) cutting partner integration effort by 30%",
      "Developed issuer onboarding React application improving onboarding/enablement throughput by 40%",
      "Built interactive demo & harness reducing QA validation cycles by 25% and accelerating stakeholder sign‑off",
      "Maintained 100% on‑time delivery across Agile increments collaborating with distributed squads (FE, BE, Security)",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "Redux",
      "Redux Saga",
      "SCSS",
      "Context API",
      "HTML5",
      "CSS3",
    ],
  },
  {
    company: "Deloitte Digital",
    role: "Frontend Developer",
    period: "June 2021 - September 2024",
    location: "Bengaluru, India",
    description:
      "Led frontend delivery for Fortune 500 clients (AstraZeneca, KeyBank) across greenfield builds, modernization, and accessibility uplift initiatives.",
    achievements: [
      "Architected GPT‑assisted financial analysis platform (Next.js + AWS) enabling real‑time advisory workflows",
      "Achieved 90%+ ADA / WCAG compliance across 20+ responsive healthcare UI surfaces; reduced accessibility defects backlog by ~70%",
      "Migrated legacy KeyBank JSP modules to React + Redux improving mobile performance & responsiveness by 35%",
      "Redesigned enterprise financial UI flows reducing navigation friction (task completion time) by 25%",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "AWS",
      "Salesforce LWC",
      "Redux",
      "SCSS",
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering",
  specialization: "Electronics & Instrumentation Engineering",
  institution: "University Institute of Technology, The University of Burdwan",
  location: "West Bengal, India",
  year: "2016 - 2020",
  grade: "First Class",
  description:
    "Comprehensive study in electronics, instrumentation, and control systems with strong foundation in programming and embedded systems. Developed expertise in analog and digital electronics, microprocessors, sensors, measurement techniques, and automation systems.",
  keySubjects: [
    "Analog & Digital Electronics",
    "Microprocessors & Microcontrollers",
    "Instrumentation & Measurement",
    "Control Systems",
    "Sensors & Transducers",
    "Signal Processing",
    "Embedded Systems",
    "Programming & Software Development",
  ],
};

export const certifications = [
  {
    name: "Advanced React",
    issuer: "Meta/Coursera",
    year: "2024",
    description:
      "Enterprise-scale application development and performance optimization",
  },
  {
    name: "Namaste React",
    issuer: "namastedev.com",
    year: "2023",
    description:
      "React core concepts, rendering behavior, and advanced patterns",
  },
];

export const projects = [
  {
    id: 1,
    title: "JavaScript Web SDK for Visa",
    company: "Grid Dynamics",
    description:
      "Led end-to-end development of a production-grade Web SDK powering Visa's global card services. Owned full product lifecycle from architecture design to deployment, enabling secure digital payment experiences for 15+ major banks worldwide.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop",
    technologies: [
      "JavaScript",
      "React.js",
      "Redux Saga",
      "Flutter Integration",
      "Banking APIs",
    ],
    category: "Product Development",
    impact: "30% reduction in integration time",
    featured: true,
  },
  {
    id: 2,
    title: "React.js Issuer Onboarding Platform",
    company: "Grid Dynamics",
    description:
      "Self‑service issuer onboarding portal reducing support touchpoints and accelerating activation throughput by 40%.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    technologies: ["React.js", "Redux", "SCSS", "Context API"],
    category: "Web Application",
    impact: "40% improvement in onboarding efficiency",
    featured: true,
  },
  {
    id: 3,
    title: "GPT-Powered Financial Application",
    company: "Deloitte Digital",
    description:
      "Designed and built an AI-powered financial analysis platform from concept to production. Led cross-functional team to deliver real-time GPT-assisted insights, improving analyst productivity and decision-making speed for enterprise clients.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "AWS", "GPT Integration"],
    category: "Product Development",
    impact: "Adopted by enterprise clients",
    featured: true,
  },
  {
    id: 4,
    title: "AstraZeneca Healthcare UI",
    company: "Deloitte Digital",
    description:
      "Led product development of accessible healthcare interfaces serving millions of users. Owned end-to-end delivery of WCAG-compliant components, establishing accessibility standards and improving user experience across 20+ medical devices and platforms.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
    technologies: ["Salesforce LWC", "Healthcare APIs", "Accessibility"],
    category: "Product Development",
    impact: "90% ADA compliance across 20+ devices",
    featured: true,
  },
  {
    id: 5,
    title: "KeyBank Legacy Modernization",
    company: "Deloitte Digital",
    description:
      "Legacy JSP to React + Redux modernization improving mobile interaction performance & layout responsiveness by 35%.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    technologies: ["React.js", "Redux", "JSP Migration", "Banking Systems"],
    category: "Legacy Modernization",
    impact: "35% improvement in mobile responsiveness",
    featured: false,
  },
  {
    id: 6,
    title: "Web Demo Application",
    company: "Grid Dynamics",
    description:
      "Interactive demo & QA sandbox enabling reproducible test scenarios and accelerating stakeholder validation (25% faster cycles).",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    technologies: ["React.js", "Demo Framework", "QA Tools"],
    category: "Demo Platform",
    impact: "25% improvement in QA cycle time",
    featured: false,
  },
  {
    id: 7,
    title: "Best Image Editor",
    description:
      "A comprehensive web-based image editing application built with React.js featuring advanced editing tools, filters, and real-time image manipulation capabilities.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=300&fit=crop",
    technologies: [
      "React.js",
      "Canvas API",
      "Image Processing",
      "CSS3",
      "HTML5",
    ],
    category: "Personal Project",
    featured: true,
    github: "https://github.com/ankurraj2606/Image-Editor",
    demo: "https://bestimageditor.netlify.app/imageeditor",
  },
  {
    id: 8,
    title: "Password Generator",
    description:
      "A secure and customizable password generator application with advanced options for creating strong passwords. Features length customization, character set selection, and password strength indicators.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
    technologies: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Security Algorithms",
      "HTML5",
    ],
    category: "Personal Project",
    featured: true,
    github: "https://github.com/ankurraj2606/password-generator",
    demo: "https://jade-youtiao-def719.netlify.app/",
  },
];

export const stats = {
  yearsExperience: 4,
  banksAdopted: 15,
  projectsCompleted: 20,
  clientsSatisfied: 10,
};
