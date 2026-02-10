export const header = {
  name: "Mohan Seetha",
  title: "Full Stack Developer & Machine Learning Engineer",
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/mohans44",
      icon: "Github",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mohansseetha/",
      icon: "Linkedin",
    },
    {
      label: "Email",
      url: "mailto:mohansseetha@gmail.com",
      icon: "Mail",
    },
    {
      label: "Resume",
      url: "https://drive.google.com/file/d/1gF4sI8kluY6TeeQiiPXTXx-BHIc2-nbn/view?usp=sharing",
      icon: "FileText",
      isResume: true,
    },
  ],
};

export const bio = `
I build scalable, high-performance web applications and intelligent AI systems. With a strong foundation in Full Stack Development and Machine Learning, I transform complex problems into clean, efficient code. Whether you need a robust SaaS platform, a custom AI model, or a seamless user experience, I deliver production-ready solutions that drive results. Open for freelance and contract opportunities.
`;

export const blogs = [
  {
    title: "Compilers and How They Work",
    summary:
      "A straightforward guide to what compilers do, how they turn code into programs, and why they’re a crucial part of the software we use every day.",
    link: "https://medium.com/@mohansseetha/compilers-and-how-they-work-a7f20f2e3061",
  },
  {
    title: "Designing a Robust Notification System",
    summary:
      "An in-depth exploration of the challenges and solutions in building a reliable notification system for messaging applications.",
    link: "https://medium.com/@mohansseetha/the-unsung-hero-of-messaging-apps-designing-a-robust-notification-system-c8ed97a357f5",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science (AI & ML)",
    college: "Godavari Institute of Engineering and Technology",
    years: "2022 – 2026",
    cgpa: "8.97/10",
    coursework: [
      "Data Structures & Algorithms",
      "Object Oriented Programming",
      "Operating Systems",
      "Databases",
      "Computer Networks",
      "Machine Learning",
      "Natural Language Processing",
    ],
  },
];

export const experience = [
  {
    title: "Research Intern",
    organization: "Godavari Institute of Engineering and Technology",
    duration: "Dec 2024 – Mar 2025",
    responsibilities: [
      "Engineered a land use prediction model achieving 91% accuracy using satellite imagery and Markov chains.",
      "Developed a plant disease detection system processing 30,000+ images with 94.6% accuracy.",
      "Delivered actionable insights to the agricultural department, optimizing resource allocation.",
    ],
  },
];

export const projects = [
  {
    name: "Movie Vault",
    desc: "Personalized movie journal with a recommendation engine. Handles 1M+ records with sub-second search latency.",
    github: "https://github.com/mohans44/movie-vault",
    live: "https://movie-vault-web.vercel.app/",
    tech: ["MERN Stack", "TailwindCSS", "Scikit-Learn"],
    featured: true,
    media: "/movie-vault-demo.gif",
    mediaType: "image",
  },
  {
    name: "Feed Focus",
    desc: "A high-scale news aggregator processing 10,000+ daily articles. Features real-time topic filtering and a highly optimized backend.",
    github: "https://github.com/mohans44/feed-focus",
    live: "https://feed-focus-news.onrender.com/",
    tech: ["React", "Spring Boot", "MongoDB", "Material UI"],
    media: "/feed-focus-demo.gif",
    mediaType: "image",
  },
  {
    name: "Job Finder",
    desc: "Full-featured job portal with application tracking and role-based dashboards. Secure and responsive.",
    github: "https://github.com/mohans44/job-finder",
    live: "https://job-finder-web.web.app/",
    tech: ["React", "Firebase", "Chakra UI"],
    media: "/job-finder-demo.gif",
    mediaType: "image",
  },
  {
    name: "GIET UniPass",
    desc: "Digital hall ticket system serving 1500+ students. Eliminated manual paperwork and streamlined exam entry.",
    github: "https://github.com/giet-intern/giet-unipass",
    live: "https://giet-unipass.vercel.app/",
    tech: ["React", "Flask", "MongoDB"],
    media: "/giet-unipass-demo.gif",
    mediaType: "image",
  },
  {
    name: "Pneumonia Prediction",
    desc: "Deep learning model for medical diagnosis with 99% recall. Deployed for real-time inference via Streamlit.",
    github: "https://github.com/mohans44/pneumonia-prediction/",
    live: "https://pneumoniaprediction.streamlit.app/",
    tech: ["PyTorch", "ResNet", "Streamlit"],
    media: "/pneumonia-prediction-demo.gif",
    mediaType: "image",
  },
];

export const skills = [
  {
    category: "Programming",
    items: [
      { name: "Python", icon: "SiPython" },
      { name: "Java", icon: "FaJava" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "Go", icon: "SiGo" },
      { name: "C++", icon: "SiCplusplus" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: "SiReact" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express", icon: "SiExpress" },
      { name: "Spring Boot", icon: "SiSpringboot" },
      { name: "PyTorch", icon: "SiPytorch" },
      { name: "Scikit-learn", icon: "SiScikitlearn" },
      { name: "Tailwind", icon: "SiTailwindcss" },
      { name: "Material UI", icon: "SiMui" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "Firebase", icon: "SiFirebase" },
    ],
  },
  {
    category: "Dev Tools",
    items: [
      { name: "Docker", icon: "SiDocker" },
      { name: "AWS", icon: "SiAmazonwebservices" },
      { name: "Git", icon: "SiGit" },
      { name: "Postman", icon: "SiPostman" },
    ],
  },
];
