/**
 * ==============================================================================
 * PORTFOLIO CENTRAL DATA STORE
 * Katreddy Lakshmi Kameswari — Portfolio Data
 *
 * TO CUSTOMIZE YOUR PORTFOLIO:
 * Simply edit the values below. All components automatically read from this file.
 * You do NOT need to modify the individual component files to update your
 * information, projects, experiences, skills, education, or links!
 * ==============================================================================
 */

const BASE_URL = import.meta.env.BASE_URL || '/';

export const personalInfo = {
  name: "Katreddy Lakshmi Kameswari",
  shortName: "Lakshmi Kameswari",
  firstName: "Katreddy",
  highlightName: "Lakshmi Kameswari.",
  initials: "LK",
  role: "Aspiring AI & ML Engineer · Full Stack Developer",
  focusAreas: "Artificial Intelligence · Machine Learning · Python · Web Development",
  degree: "B.Tech CSE (AI & ML)",
  batch: "2023–2027",
  cgpa: "8.82",
  graduationYear: "2027",
  location: "Guntur, Andhra Pradesh, India",
  email: "lakshmikameswari04@gmail.com",
  linkedin: "https://www.linkedin.com/in/lakshmi-kameswariii-929166370",
  github: "https://github.com/Lakshmi-Kameswari",
  
  // Replace this file whenever you want to update your profile image.
  profileImage: `${BASE_URL}assets/profile.jpeg`,
  resumePath: `${BASE_URL}assets/resume.pdf`,

  // Editorial Hero Taglines & Description
  heroDescription:
    "B.Tech CSE (AI & ML) student focused on intelligent systems, responsive web experiences, practical problem solving, and continuous learning.",
  
  // Call to Actions
  primaryCtaText: "Explore My Work",
  secondaryCtaText: "Let's Connect",

  // Hero Floating Cards (shown around the profile portrait)
  floatingHeroCards: [
    { id: "fc-1", title: "Core Focus", subtitle: "Artificial Intelligence", positionClass: "top-[-10px] left-[-20px]" },
    { id: "fc-2", title: "Frontend", subtitle: "HTML · CSS · JavaScript", positionClass: "top-[45px] right-[-30px]" },
    { id: "fc-3", title: "Data", subtitle: "Python · SQL", positionClass: "bottom-[90px] left-[-35px]" },
    { id: "fc-4", title: "Collaboration", subtitle: "Git & GitHub", positionClass: "bottom-[-15px] right-[-20px]" },
    { id: "fc-5", title: "Current Goal", subtitle: "Build · Learn · Grow", positionClass: "top-[160px] left-[-45px]" },
    { id: "fc-6", title: "Design Style", subtitle: "Clean · Modern · Human", positionClass: "top-[230px] right-[-35px]" }
  ]
};

export const aboutData = {
  heading: "Classic clarity. Modern energy.",
  description:
    "I enjoy turning ideas into useful digital products — from clean interfaces and responsive websites to AI/ML concepts that solve real-world problems.",
  quote:
    "I want to keep learning, keep building, and create technology that feels useful, thoughtful, and beautifully engineered.",
  
  // Bento Grid Cards
  bentoCards: [
    {
      id: "bento-1",
      tag: "Profile",
      title: "Engineering with creativity and purpose.",
      content:
        "Building a strong academic and technical foundation in Computer Science with specialized focus on Artificial Intelligence, machine learning systems, and practical problem solving.",
      highlight: "AI & ML Specialization"
    },
    {
      id: "bento-2",
      tag: "Strength",
      title: "Consistent learner.",
      content:
        "I learn by building: experimenting with modern UI frameworks, improving data logic, refining coding habits, and turning each challenge into a practical skill.",
      highlight: "Continuous Growth"
    },
    {
      id: "bento-3",
      tag: "Objective",
      title: "Grow through practical work.",
      content:
        "Actively seeking internships, research collaborations, and professional opportunities where machine learning, software engineering, and thoughtful product design intersect.",
      highlight: "Open to Opportunities"
    }
  ],

  // Key Statistics
  statistics: [
    { label: "CGPA", value: "8.82", subtext: "Academic Performance" },
    { label: "Graduation", value: "2027", subtext: "B.Tech Batch" },
    { label: "Completed Projects", value: "6+", subtext: "AI, Python & Web" }
  ]
};

export const skillsData = [
  {
    name: "Python",
    percentage: 92,
    category: "AI & Programming",
    description: "Core scripting, automation, data handling, algorithmic thinking, and practical AI prototyping.",
    glowColor: "pink"
  },
  {
    name: "Java",
    percentage: 82,
    category: "Core Engineering",
    description: "Object-oriented programming, backend logic, problem solving, and strong software fundamentals.",
    glowColor: "lavender"
  },
  {
    name: "Machine Learning",
    percentage: 86,
    category: "AI & Data Science",
    description: "Model concepts, evaluation methods, predictive workflows, and practical ML experimentation.",
    glowColor: "pink"
  },
  {
    name: "TensorFlow / OpenCV",
    percentage: 78,
    category: "Computer Vision & AI",
    description: "Building intelligent pipelines for image processing, feature extraction, and AI-driven applications.",
    glowColor: "rose"
  },
  {
    name: "React & JavaScript",
    percentage: 88,
    category: "Modern Web",
    description: "User interfaces, responsive layouts, frontend logic, and interactive digital experiences.",
    glowColor: "lavender"
  },
  {
    name: "Node.js / Express",
    percentage: 80,
    category: "Full-Stack Development",
    description: "Server-side logic, API development, and building connected web applications from end-to-end.",
    glowColor: "pink"
  },
  {
    name: "SQL & Data Handling",
    percentage: 76,
    category: "Data Engineering",
    description: "Querying, filtering, structuring, and making sense of data in practical application workflows.",
    glowColor: "rose"
  },
  {
    name: "Git & GitHub",
    percentage: 84,
    category: "Collaboration",
    description: "Version control, project tracking, clean commits, and team-ready workflows.",
    glowColor: "lavender"
  }
];

export const experiencesData = [
  {
    id: "exp-smartbridge",
    number: "01",
    period: "May 2026 – Jun 2026",
    type: "Internship",
    role: "MERN Stack Intern",
    organization: "Smartbridge",
    location: "Remote / Hybrid",
    description:
      "Built Shopz, an online shopping web application using the MERN stack. Worked on frontend flow, product-focused UI structure, and full-stack integration for a practical e-commerce experience.",
    tags: ["MERN Stack", "React", "Node.js", "MongoDB", "Shopz"],
    isEditablePlaceholder: false
  },
  {
    id: "exp-oasis-python",
    number: "02",
    period: "Apr 2026 – May 2026",
    type: "Internship",
    role: "Python Programming Intern",
    organization: "Oasis Infobyte",
    location: "Virtual",
    description:
      "Developed Python-based projects including a chatbot and password generator application, building practical skills in logic design, user interaction, and script-based problem solving.",
    tags: ["Python", "Chatbot", "Password Generator", "Automation"],
    isEditablePlaceholder: false
  },
  {
    id: "exp-oasis-web",
    number: "03",
    period: "Feb 2026 – Mar 2026",
    type: "Virtual Internship",
    role: "Web Development Virtual Intern",
    organization: "Oasis Infobyte",
    location: "Virtual",
    description:
      "Created responsive web interfaces and landing-page experiences using HTML, CSS, and JavaScript, improving design sensibility and frontend implementation skills.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    isEditablePlaceholder: false
  }
];

export const projectsData = [
  {
    id: "proj-shopz",
    number: "01",
    title: "Shopz — MERN Stack E-Commerce App",
    category: "Full-Stack Web Development",
    description:
      "A practical online shopping application built during the Smartbridge internship, focused on product-driven user experience and full-stack web functionality.",
    features: [
      "Responsive shopping interface",
      "Product-focused user flow",
      "MERN stack implementation and integration"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "MERN"],
    githubUrl: "https://github.com/Lakshmi-Kameswari",
    liveUrl: "https://example.com/shopz-demo",
    image: `${BASE_URL}assets/project-images/project-placeholder.svg`
  },
  {
    id: "proj-chatbot",
    number: "02",
    title: "AI Chatbot Application",
    category: "Python & Conversational AI",
    description:
      "A Python-based chatbot project that demonstrates interactive conversation flow, basic automation, and user-focused logic design for simple AI experiences.",
    features: [
      "Interactive conversational flow",
      "Basic AI logic and input processing",
      "Practical Python project experience"
    ],
    technologies: ["Python", "Chatbot", "Logic Design"],
    githubUrl: "https://github.com/Lakshmi-Kameswari/OIBSIP-Python_Programming",
    liveUrl: "https://example.com/chatbot-demo",
    image: `${BASE_URL}assets/project-images/project-placeholder.svg`
  },
  {
    id: "proj-password",
    number: "03",
    title: "Password Generator Utility",
    category: "Python Security Tool",
    description:
      "A lightweight password generator built for secure credential creation with customizable length and complexity in a user-friendly interface.",
    features: [
      "Custom length control",
      "Number and symbol toggle options",
      "Practical security utility design"
    ],
    technologies: ["Python", "Tkinter", "Security Basics"],
    githubUrl: "https://github.com/Lakshmi-Kameswari/OIBSIP-Python_Programming",
    liveUrl: "https://example.com/password-generator-demo",
    image: `${BASE_URL}assets/project-images/project-placeholder.svg`
  },
  {
    id: "proj-landing",
    number: "04",
    title: "Landing Page Development",
    category: "Web Engineering",
    description:
      "A responsive and visually engaging landing page focused on clean layout, modern styling, and a polished user experience across devices.",
    features: [
      "Responsive multi-device layout",
      "Modern visual hierarchy and hover states",
      "Semantic HTML and clean frontend structure"
    ],
    technologies: ["HTML5", "CSS3", "Responsive UI"],
    githubUrl: "https://github.com/Lakshmi-Kameswari/OIBSIP-Web_Development_and_Designing",
    liveUrl: "https://lakshmi-kameswari.github.io/OIBSIP-Web_Development_and_Designing/",
    image: `${BASE_URL}assets/project-images/project-placeholder.svg`
  },
  {
    id: "proj-portfolio",
    number: "05",
    title: "Personal Portfolio Website",
    category: "Interactive Frontend",
    description:
      "A portfolio built to present projects, technical strengths, and professional narrative in a clean, modern, and engaging format.",
    features: [
      "Interactive project showcase",
      "Custom visual storytelling",
      "Mobile-friendly portfolio presentation"
    ],
    technologies: ["React", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Lakshmi-Kameswari",
    liveUrl: "https://example.com/portfolio-demo",
    image: `${BASE_URL}assets/project-images/project-placeholder.svg`
  },
  {
    id: "proj-temp",
    number: "06",
    title: "Temperature Converter",
    category: "Web Utility",
    description:
      "A straightforward JavaScript utility for converting temperature values between Celsius, Fahrenheit, and Kelvin in real time.",
    features: [
      "Instant bidirectional conversion",
      "Support for major temperature scales",
      "Clean, fast frontend logic"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/Lakshmi-Kameswari/OIBSIP-Web_Development_and_Designing",
    liveUrl: "https://example.com/temperature-demo",
    image: `${BASE_URL}assets/project-images/project-placeholder.svg`
  }
];

export const educationData = [
  {
    period: "2023 – 2027",
    degree: "B.Tech — CSE (AI & ML)",
    institution: "Kallam Haranadhareddy Institute of Technology",
    cgpa: "8.82",
    badge: "Undergraduate",
    description:
      "Specializing in Artificial Intelligence and Machine Learning fundamentals, Data Structures, Algorithms, Python programming, and Object-Oriented Engineering."
  },
  {
    period: "2021 – 2023",
    degree: "Intermediate Education",
    institution: "Abhyudaya Mahila Junior College",
    cgpa: "9.2",
    badge: "Higher Secondary",
    description:
      "Completed intermediate coursework with deep academic excellence in Mathematics, Physics, and Chemistry."
  },
  {
    period: "2020 – 2021",
    degree: "Secondary Education",
    institution: "Jain High School",
    cgpa: "10.0",
    badge: "Secondary School",
    description:
      "Achieved a perfect score of 10.0 CGPA, demonstrating lifelong discipline and academic rigor."
  }
];

export const careerFocusData = {
  title: "AI-driven product thinking + full-stack execution",
  description:
    "Building practical, production-ready projects with AI tools, modern web development workflows, and efficient problem-solving for real-world applications."
};

export const contactData = {
  heading: "Let's create something meaningful.",
  description:
    "Open to internships, student opportunities, project collaborations, and conversations around AI/ML and web development.",
  email: "lakshmikameswari04@gmail.com",
  linkedin: "https://www.linkedin.com/in/lakshmi-kameswariii-929166370",
  github: "https://github.com/Lakshmi-Kameswari",
  location: "Guntur, Andhra Pradesh, India",
  resumePath: `${BASE_URL}assets/resume.pdf`
};
