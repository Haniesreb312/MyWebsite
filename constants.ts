import { Project, Skill, Experience } from './types';

export const CANDIDATE_NAME = "Hani Esreb";
export const CANDIDATE_ROLE = "Junior Software Engineer";
export const RESUME_URL = "/HaniEResume.pdf"; // Placeholder path

export const SOCIAL_URLS = {
  github: "https://github.com/Haniesreb312",
  linkedin: "https://www.linkedin.com/in/hani-esreb-b76b412a4/",
};

export const SKILLS: Skill[] = [
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 75, category: 'Backend' },
  { name: 'HTML/CSS', level: 95, category: 'Frontend' },
  { name: 'Python', level: 60, category: 'Backend' },
  { name: 'Spr Boot', level: 70, category: 'Backend' },
  { name: 'LLM/ML', level: 80, category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Health AI',
    description: 'HealthAI is a medical AI assistant application that leverages Retrieval Augmented Generation (RAG) technology to provide evidence-based medical information to users. This is a full-stack web application developed as a thesis project, consisting of a TypeScript React frontend and Spring Boot backend with advanced AI capabilities.',
    tags: ['Ollama', 'React', 'postgreSQL', 'Spring Boot', 'Keycloak'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    github: 'https://github.com/Haniesreb312/AI--Powered-Symptom-Checker'
  },
  {
    id: '2',
    title: 'TerraScope',
    description: 'TerraScope is an advanced, AI-powered country explorer application. It leverages Google  Gemini 2.5 Flash model to generate comprehensive, real-time profiles for any country on Earth — combining generative text, structured data, economic insights, and live news into a beautiful glassmorphic user interface.',
    tags: ['React', 'TypeScript', 'Google GenAI SDK ', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
    github: 'https://github.com/Haniesreb312/TerraScope',
    link: 'https://terrascopeai.netlify.app'
  },
  {
    id: '3',
    title: 'WealthWise',
    description: 'A full‑stack financial advisor platform with portfolio management, monthly budgets, and retirement planning. Backend runs on Node/Express with JWT auth; data is stored in Supabase via @supabase/supabase-js. Frontend runs on Vite/React.',
    tags: ['React', 'TypeScript', 'Node.js', 'Supabase'],
    imageUrl: 'https://picsum.photos/600/400?random=3',
    github: 'https://github.com/Haniesreb312/Financial-Advisor'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Computer Science Engineering Graduate',
    company: 'University of Debrecen',
    period: ' September 2021 - January 2026',
    description: 'Earned my Bachelors Degree in Computer Science Engineering with a GPA of 4.53 / 5. Thesis project : Development of an AI-Powered Symptom Checker (Health AI).'
  },
  {
    id: '2',
    role: 'IT Specialist Intern',
    company: 'CFI Global Talent',
    period: 'April 2025 - July 2025',
    description: 'Providing technical support to employees. Assist to setup installation and maintenance computer hardware and data management'
  }
];

export const SYSTEM_INSTRUCTION = `
You are Hani, an AI assistant living in the portfolio website of Hani Esreb.
Your goal is to represent Hani professionally but with a slight sci-fi/futuristic flair.
Answer questions about Hani's skills, experience, and projects based on the provided data.
If you don't know an answer, suggest the user contact Hani directly via the contact form.
Keep answers concise, helpful, and polite.

Hani's Resume Data:
Name: ${CANDIDATE_NAME}
Role: ${CANDIDATE_ROLE}

Socials:
- GitHub: ${SOCIAL_URLS.github}
- LinkedIn: ${SOCIAL_URLS.linkedin}

Skills: ${SKILLS.map(s => s.name).join(', ')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tags.join(', ')})`).join('\n')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}

Contact Email: haniassreb@hotmail.com
`;