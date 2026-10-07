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
  role: "Aspiring AI & ML Engineer · Web Developer",
  focusAreas: "Artificial Intelligence · Machine Learning · Python · Web Development",
  degree: "B.Tech CSE (AI & ML)",
  batch: "2023–2027",
  cgpa: "9.0",
  graduationYear: "2027",
  location: "Guntur, Andhra Pradesh, India",
  email: "lakshmikameswari04@gmail.com",
  linkedin: "https://www.linkedin.com/in/lakshmi-kameswariii-929166370",
  github: "https://github.com/Lakshmi-Kameswari",
  
  // File paths in /public directory
  profileImage: `${BASE_URL}assets/profile.jpg`,
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
        "Building a solid academic and technical foundation in Computer Science with a specialized focus on Artificial Intelligence and Machine Learning algorithms.",
      highlight: "AI & ML Specialization"
    },
    {
      id: "bento-2",
      tag: "Strength",
      title: "Consistent learner.",
      content:
        "Proactive approach to coding every day, experimenting with new UI frameworks, exploring data logic, and refining problem-solving abilities.",
      highlight: "Continuous Growth"
    },
    {
      id: "bento-3",
      tag: "Objective",
      title: "Grow through practical work.",
      content:
        "Actively seeking engineering internships, hands-on collaborations, and technical challenges where machine learning and modern web design intersect.",
      highlight: "Open to Opportunities"
    },
    {
      id: "bento-4",
      tag: "Location",
      title: "Guntur",
      subtitle: "Andhra Pradesh, India",
      content: "Based in Guntur, available for on-site, hybrid, or global remote collaborations.",
      highlight: "India · Global Remote"
    }
  ],

  // Key Statistics
  statistics: [
    { label: "CGPA", value: "9.0", subtext: "Academic Performance" },
    { label: "Graduation", value: "2027", subtext: "B.Tech Batch" },
    { label: "Completed Projects", value: "6+", subtext: "AI, Python & Web" }
  ]
};

export const skillsData = [
  {
    name: "Python",
    percentage: 90,
    category: "Programming & AI",
    description: "Core scripting, OOP, Tkinter GUI, socket programming, data structures",
    glowColor: "pink"
  },
  {
    name: "HTML & CSS",
    percentage: 95,
    category: "Frontend UI",
    description: "Semantic HTML5, modern CSS3 layout, responsive design, animations",
    glowColor: "rose"
  },
  {
    name: "JavaScript",
    percentage: 85,
    category: "Web Development",
    description: "ES6+, DOM manipulation, asynchronous logic, interactive frontend interfaces",
    glowColor: "lavender"
  },
  {
    name: "Machine Learning",
    percentage: 80,
    category: "AI & Intelligent Systems",
    description: "Supervised & unsupervised learning concepts, algorithm evaluation, model exploration",
    glowColor: "pink"
  },
  {
    name: "SQL",
    percentage: 75,
    category: "Database Systems",
    description: "Relational database queries, schema design, data filtering, and aggregations",
    glowColor: "rose"
  },
  {
    name: "Git & GitHub",
    percentage: 78,
    category: "Version Control",
    description: "Repository workflows, version branching, open-source practices, collaboration",
    glowColor: "lavender"
  }
];

export const experiencesData = [
  {
    id: "exp-oasis",
    number: "01",
    period: "Feb 2026 – Mar 2026",
    type: "Virtual Internship",
    role: "Web Development Virtual Intern",
    organization: "Oasis Infobyte",
    location: "Virtual",
    description:
      "Developed responsive web projects using HTML, CSS, and JavaScript; designed user-friendly interfaces and strengthened frontend development and problem-solving skills.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    isEditablePlaceholder: false
  },
  {
    id: "exp-placeholder",
    number: "02",
    period: "Upcoming / Open Opportunity",
    type: "Internship & Project Experience",
    role: "AI & ML / Software Development Intern",
    organization: "Your Next Company / Organization Name",
    location: "Remote / Hybrid / On-site",
    description:
      "Open to upcoming internships and research collaborations. Replace this placeholder card easily inside src/data/portfolioData.js with your next role, training program, or technical achievem[...]",
    tags: ["Machine Learning", "Python", "Full Stack", "Problem Solving"],
    isEditablePlaceholder: true
  }
];

export const projectsData = [
  {
    id: "proj-1",
    number: "01",
    title: "Chat Application (Client–Server)",
    category: "Networking & Python GUI",
    description:
      "A real-time text-based chat application built using Python socket programming and Tkinter GUI. It allows multiple users to communicate in real-time using a client-server architecture.",
    features: [
      "Real-time multi-client messaging",
      "Client-server communication using sockets",
      "Interactive desktop Tkinter GUI"
    ],
    technologies: ["Python", "Socket Programming", "Tkinter"],
    githubUrl: "https://github.com/Lakshmi-Kameswari/OIBSIP-Python_Programming/tree/main/chat-application.py",
    liveUrl: null,
    image: `${BASE_URL}assets/project-images/chat-app.jpg`
  },
  {
    id: "proj-2",
    number: "02",
    title: "BMI Calculator (GUI)",
    category: "Python Desktop Application",
    description:
      "A professional GUI-based BMI calculator built using Tkinter. Calculates Body Mass Index and provides corresponding health categories.",
    features: [
      "Instant BMI calculation",
      "WHO health category classification",
      "Input validation and boundary checking",
      "One-click reset functionality"
    ],
    technologies: ["Python", "Tkinter", "GUI Development"],
    githubUrl: "https://github.com/Lakshmi-Kameswari/OIBSIP-Python_Programming/tree/main/bmi-calculator-gui",
    liveUrl: null,
    image: `${BASE_URL}assets/project-images/python-tools.jpg`
  },
  {
    id: "proj-3",
    number: "03",
    title: "Password Generator (GUI)",
    category: "Security Utility",
    description:
      "A customizable password generator allowing users to adjust length and complexity rules to generate resilient security credentials.",
    features: [
      "Adjustable password length",
      "Configurable numbers and symbols toggles",
      "Instant copy to clipboard functionality"
    ],
    technologies: ["Python", "Tkinter", "Cybersecurity Basics"],
    githubUrl: "https://github.com/Lakshmi-Kameswari/OIBSIP-Python_Programming/tree/main/password-generator-gui",
    liveUrl: null,
    image: `${BASE_URL}assets/project-images/python-tools.jpg`
  },
  {
    id: "proj-4",
    number: "04",
    title: "Landing Page Development",
    category: "Web Engineering",
    description:
      "A responsive and visually engaging landing page focused on clean layout, modern styling, and seamless user experience across devices.",
    features: [
      "Responsive multi-device layout",
      "Smooth modern styling and hover states",
      "Fast static rendering and semantic HTML"
    ],
    technologies: ["HTML5", "CSS3", "Responsive UI"],
    githubUrl: "https://github.com/Lakshmi-Kameswari/OIBSIP-Web_Development_and_Designing",
    liveUrl: "https://lakshmi-kameswari.github.io/OIBSIP-Web_Development_and_Designing/",
    image: `${BASE_URL}assets/project-images/landing-page.jpg`
  },
  {
    id: "proj-5",
    number: "05",
    title: "Personal Portfolio Website",
    category: "Interactive Frontend",
    description:
      "A stylish interactive portfolio demonstrating skills, projects, and education with custom animations and smooth navigation.",
    features: [
      "Interactive project and skill showcases",
      "Custom CSS keyframe transitions and glows",
      "Mobile-optimized touch navigation"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/Lakshmi-Kameswari/OIBSIP-Web_Development_and_Designing",
    liveUrl: "https://lakshmi-kameswari.github.io/OIBSIP-Web_Development_and_Designing/",
    image: `${BASE_URL}assets/project-images/landing-page.jpg`
  },
  {
    id: "proj-6",
    number: "06",
    title: "Temperature Converter",
    category: "Web Utility",
    description:
      "An intuitive web utility using JavaScript logic to convert values between Celsius, Fahrenheit, and Kelvin in real time.",
    features: [
      "Instant bidirectional calculations",
      "Support for Celsius, Fahrenheit, and Kelvin",
      "Real-time input validation"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/Lakshmi-Kameswari/OIBSIP-Web_Development_and_Designing",
    liveUrl: "https://lakshmi-kameswari.github.io/OIBSIP-Web_Development_and_Designing/",
    image: `${BASE_URL}assets/project-images/landing-page.jpg`
  }
];

export const educationData = [
  {
    period: "2023 – 2027",
    degree: "B.Tech — CSE (AI & ML)",
    institution: "Kallam Haranadhareddy Institute of Technology",
    cgpa: "9.0",
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
  title: "AI & ML + Web Development",
  description:
    "Building practical skills through coursework, internships, personal projects, and continuous learning."
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
