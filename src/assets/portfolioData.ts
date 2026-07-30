export interface PersonalInformation {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  percentage: string;
}

export interface Experience {
  position: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  description: string;
  status: string;
  github: string;
}

export interface TechnicalSkills {
  languages: string[];
  frontend: string[];
  backend: string[];
  databases: string[];
  tools: string[];
  technologies: string[];
}

export interface PortfolioData {
  personalInformation: PersonalInformation;
  professionalSummary: string;
  education: Education;
  experience: Experience[];
  projects: Project[];
  technicalSkills: TechnicalSkills;
  certificationsAndAchievements: string[];
}

const data: PortfolioData = {
  personalInformation: {
    fullName: "Laxman Subhash Shinde",
    title: "MERN Stack Developer",
    email: "25032002shindelaxman@gmail.com",
    phone: "+91 9579731172",
    github: "github.com/Lakhya2503",
    linkedin: "linkedin.com/in/laxman-shinde-a968b2253",
  },
  professionalSummary:
    "MERN Stack Developer with hands-on experience building scalable web applications using React, Node.js, Express.js, MongoDB, PostgreSQL, Redis, Docker, and TypeScript. Strong understanding of REST APIs, authentication, WebSockets, Git, and modern software development practices.",
  education: {
    degree: "MCA",
    institution: "Jain Online",
    duration: "2022 – 2025",
    percentage: "74.86%",
  },
  experience: [
    {
      position: "MERN Developer Intern",
      company: "Athenura",
      duration: "Feb 2026 – Present",
      responsibilities: [
        "Built full-stack MERN applications using React, TypeScript, Node.js, and Express.",
        "Developed REST APIs and integrated WebSocket features for real-time functionality.",
        "Used Redux, Tailwind CSS, Git, and GitHub for collaborative development.",
        "Worked on debugging, testing, and third-party API integration.",
      ],
    },
    {
      position: "Full Stack Developer Intern",
      company: "Unified Mentor Pvt. Ltd.",
      duration: "May 2025 – Jun 2025",
      responsibilities: [
        "Developed responsive React applications and reusable UI components.",
        "Improved state management and user experience across multiple screens.",
        "Integrated Supabase for authentication, database operations, and real-time features.",
      ],
    },
  ],
  projects: [
    {
      name: "Real-Time Collaborative Document System",
      description:
        "🚧 Currently in development. Building a Google Docs–style collaborative editor using MERN, Redis, Socket.IO, Operational Transformation (OT), Quill.js, and JWT authentication. Features include real-time collaboration, version control, document sharing, and scalable architecture.",
      status: "Working Project",
      github:
        "https://github.com/virajkasabe/real-time-collaborative-document-system",
    },
    {
      name: "LOR Generation System",
      description:
        "Built a secure MERN application with Cloudinary, Brevo, and authentication integration. Designed scalable REST APIs and a responsive user interface for generating and managing Letters of Recommendation.",
      status: "Completed",
      github:
        "https://github.com/Lakhya2503/Intern_Performance_Analytics_-_LOR",
    },
    {
      name: "Task Management System",
      description:
        "Developed a role-based MERN task management platform using React Context API and secure REST APIs for efficient workflow and team collaboration.",
      status: "Completed",
      github: "https://github.com/Lakhya2503/TaskManagementSystem",
    },
    {
      name: "Restaurant Management System",
      description:
        "Built a MERN + TypeScript restaurant platform featuring Google OAuth, Razorpay payment integration, and an admin dashboard for menu, orders, and customer management.",
      status: "Completed",
      github: "https://github.com/Lakhya2503/Restaurant-Management-System",
    },
    {
      name: "CafeCoder",
      description:
        "Developed a Django-based web application demonstrating authentication, CRUD operations, and backend development using Django and SQLite.",
      status: "Completed",
      github:
        "https://github.com/Lakhya2503/Django_Project/tree/main/cafeCoder",
    },
  ],
  technicalSkills: {
    languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
    frontend: ["React", "Redux", "Tailwind CSS", "Axios"],
    backend: ["Node.js", "Express.js"],
    databases: ["MongoDB", "PostgreSQL", "Redis"],
    tools: ["Docker", "Git", "GitHub"],
    technologies: ["WebSocket"],
  },
  certificationsAndAchievements: [
    "Full Stack Development Certification",
    "MERN Developer Intern at Athenura",
    "Offer Letter from Athenura",
    "Built multiple production-level MERN applications",
  ],
};

export default data;
