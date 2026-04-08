import type { PortfolioData } from "./types"

export const portfolioData: PortfolioData = {
  basics: {
    name: "Goutham Gatla",
    role: "Frontend Developer",
    tagline: "One-shot developer building scalable, high-performance applications.",
    email: "gouthamgatla888@gmail.com",
    phone: "+91 9642681266",
    location: "Hyderabad, India",
    linkedin: "https://www.linkedin.com/in/goutham-gatla/",
    about: "Results-driven Frontend Developer with 3+ years of experience in React, React Native, and Android development. Known as a one-shot developer, capable of independently delivering scalable, production-ready applications end-to-end. Specialized in building high-performance applications with seamless API integration, offline-first capabilities, and optimized user experiences. Proven track record of scaling apps to 50K+ users and generating ₹50+ crore business impact."
  },
  impactMetrics: [
    { label: "Users Scaled", value: 50, suffix: "K+" },
    { label: "Business Impact", value: 50, prefix: "₹", suffix: "+ Cr" },
    { label: "Performance Boost", value: 7, suffix: "x" },
    { label: "Experience", value: 3, suffix: "+ Years" }
  ],
  projects: [
    {
      id: "crop-insurance-platform",
      title: "Crop Insurance Platform",
      description: "Digital platform for farmers to enroll and claim insurance",
      features: [
        "Google Maps API for geo-tagging farmland",
        "Multimedia capture (photo/video/document upload)",
        "Redux Toolkit for state management"
      ],
      techStack: ["React Native", "TypeScript", "Redux Toolkit", "Google Maps API"],
      impact: [
        "Core platform for farmer insurance operations",
        "Enabled seamless enrollment and claims process"
      ]
    },
    {
      id: "field-survey-app",
      title: "Field Survey Application",
      description: "Offline-first mobile app for surveyors in rural areas",
      features: [
        "Offline-first architecture using Realm DB",
        "Background sync for data persistence",
        "Multimedia evidence capture"
      ],
      techStack: ["React Native", "Realm DB", "Redux Toolkit"],
      impact: [
        "7x increase in farm photo review efficiency",
        "Enabled usage in low connectivity areas"
      ]
    },
    {
      id: "assisted-sales-journey",
      title: "Assisted Sales Journey (ASJ)",
      description: "Web platform for crop insurance sales and administration",
      features: [
        "Keycloak authentication with PKCE",
        "Role-based access control",
        "React + Tailwind UI system"
      ],
      techStack: ["React", "Tailwind CSS", "Keycloak"],
      impact: [
        "Improved workflow efficiency",
        "Enterprise-grade authentication system"
      ]
    },
    {
      id: "kisan-sathi",
      title: "Kisan Sathi",
      description: "Banking integration platform for loan + insurance bundling",
      features: [
        "Extensible architecture",
        "Optimized policy workflows"
      ],
      techStack: ["React", "TypeScript"],
      impact: [
        "Generated ₹50+ crore business within weeks",
        "Improved transaction speed by 5+ seconds"
      ]
    }
  ],
  experience: [
    {
      id: "kshema",
      company: "Kshema General Insurance",
      role: "Member of Technical Staff",
      duration: "Dec 2022 - Present",
      location: "Hyderabad, India",
      highlights: [
        "Developed cross-platform apps using React, React Native, and TypeScript",
        "Scaled applications to 50K+ users within weeks",
        "Generated ₹50+ crore in new business",
        "Implemented Google Maps API for geospatial farm boundary tracking",
        "Improved performance with 7x efficiency gain",
        "Reduced policy load time by 5+ seconds",
        "Implemented secure authentication using Keycloak (PKCE)",
        "Built reusable UI systems and Storybook components",
        "Developed offline-first applications using Redux Toolkit and Realm",
        "Mentored junior developers and led knowledge-sharing sessions"
      ]
    },
    {
      id: "itus",
      company: "ITUS Insurance Brokers Pvt Ltd",
      role: "Software Development Intern",
      duration: "Sep 2022 - Nov 2022",
      location: "Hyderabad, India",
      highlights: [
        "Built responsive UI components for multiple devices",
        "Implemented input validation and data flow handling",
        "Developed Python automation scripts to improve workflow efficiency"
      ]
    }
  ],
  skills: [
    {
      title: "Frontend",
      skills: ["React", "React Native", "TypeScript", "JavaScript (ES6+)"]
    },
    {
      title: "State Management",
      skills: ["Redux", "Redux Toolkit", "React Query"]
    },
    {
      title: "Styling",
      skills: ["Tailwind CSS", "Styled Components"]
    },
    {
      title: "Backend",
      skills: ["REST APIs", "GraphQL", "Node.js"]
    },
    {
      title: "Authentication",
      skills: ["Keycloak", "JWT", "PKCE"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "CI/CD", "Storybook"]
    },
    {
      title: "Other Technologies",
      skills: ["Progressive Web Apps", "Offline-first apps", "Realm DB", "Google Maps API"]
    },
    {
      title: "AI Tools",
      skills: ["ChatGPT", "Cursor", "Builder.io"]
    }
  ],
  branding: [
    "One-shot developer (end-to-end ownership)",
    "Builds scalable, high-performance applications",
    "Expert in offline-first and real-world problem solving",
    "Strong product + engineering mindset"
  ]
}
