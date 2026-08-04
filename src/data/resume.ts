// ─────────────────────────────────────────────────────────────
// PORTFOLIO CONTENT — edit everything here, nothing else.
// After editing, rebuild the artifact (see project README).
// ─────────────────────────────────────────────────────────────

import {
  intelUnnati,
  pytorchNeuralStyle,
  chatgptPython,
  aiForEveryone,
} from "@/assets/certificates";


export const profile = {
  name: "Vikas K",
  initials: "VK",
  title: "Aspiring Software Engineer — Python · AI · Automation",
  location: "Hyderabad, Telangana",
  status: "Open to Opportunities",
  summary: [
    "As a recent Bachelor of Technology graduate in Information Technology, I've built a strong foundation in software development and programming. I'm proficient in Python, Java, and AI technologies and automation, with hands-on experience developing AI-driven applications and natural language processing solutions.",
    "My interest in Generative AI and Agentic AI inspires me to continuously explore new technologies. I'm seeking an entry-level Software Engineer or AI/Automation role to apply strong analytical skills and contribute to real-world, production-ready solutions.",
  ],
  heroTagline:
    "Recent B.Tech graduate in Information Technology, building AI-driven applications and NLP solutions. Exploring Generative AI and Agentic AI to ship real, production-ready ideas.",
};

// Small stat chips shown in the hero section.
// Add / remove / edit freely — any number of entries works.
export const stats = [
  { value: "8.32", label: "CGPA" },
  { value: "2", label: "Featured Projects" },
  { value: "2", label: "AI/ML Certifications" },
  { value: "2026", label: "Graduate" },
];

export const strengths = [
  { title: "Fast Learner", desc: "Quickly adopts new technologies and frameworks." },
  { title: "Detail-Oriented", desc: "Committed to delivering high-quality, accurate work." },
  { title: "Adaptability", desc: "Adjusts effectively to new challenges and environments." },
];

export const languages = [
  { name: "English", level: "Proficient" },
  { name: "Telugu", level: "Native" },
];

// Each group renders as its own card on the Skills section.
// Add a new object to add a new card; add strings to `items` to add skills.
export const skillGroups = [
  { title: "Programming Languages", items: ["Python", "Java"] },
  { title: "Databases", items: ["MySQL"] },
  { title: "Web Technologies", items: ["HTML", "CSS", "JavaScript"] },
  {
    title: "AI & Automation",
    items: [
      "Generative AI",
      "GANs",
      "Prompt Engineering",
      "AI Agents & Workflows",
      "LLMs",
      "RAG",
      "Automation Fundamentals",
    ],
  },
  {
    title: "Soft Skills",
    items: ["Teamwork", "Adaptability", "Time Management", "Stress Management", "Flexibility"],
  },
];

// Project cards on the Projects section. `points` = bullet list shown
// on the back of the card, `tech` = tag chips (front shows first 4).
export const projects = [
  {
    title: "YouTube Transcript Summarizer",
    tagline: "Chrome extension · NLP",
    points: [
      "Built a Google Chrome extension that automatically retrieves YouTube video captions and generates concise summaries using natural language processing techniques.",
      "Developed the backend with Python and Flask, integrating the YouTube Transcript API to deliver in-browser summaries in real time.",
    ],
    tech: ["Python", "Flask", "YouTube Transcript API", "NLP", "Chrome Extension API"],
  },
  {
    title: "Text-to-Image Generation with Fine-Tuned BERT + GAN",
    tagline: "Generative AI · Computer Vision",
    points: [
      "Designed a text-to-image generation pipeline integrating a fine-tuned BERT model with a Generative Adversarial Network to improve semantic alignment between prompts and generated visuals.",
      "Implemented and trained on a dataset of 8k images, evaluating with PyTorch and TensorFlow, with data processing and visualization handled via NumPy, Pandas, and Matplotlib in Jupyter Notebook.",
    ],
    tech: ["Python", "BERT", "GAN", "NLP", "PyTorch", "TensorFlow", "NumPy", "Pandas", "Matplotlib"],
  },
];

// Timeline entries on the Education section, most recent first.
export const education = [
  {
    degree: "Bachelor of Technology, Information Technology",
    school: "Malla Reddy College of Engineering and Technology, Hyderabad, Telangana",
    period: "11/2022 – 05/2026",
    metric: "CGPA 8.32",
  },
  {
    degree: "Intermediate (MPC)",
    school: "C.V. Raman Junior College, Wanaparthy, Telangana",
    period: "06/2020 – 04/2022",
    metric: "96.6%",
  },
];

// Certification badges. Click opens a 3D certificate viewer.
// Add a new object here to add a new badge — no other file needs to change.
interface Certification {
  name: string;
  org: string;
  date?: string;
  image: string;
  verifyUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: "Machine Learning",
    org: "Intel Unnati",
    date: "Sep 2024",
    image: intelUnnati,
  },
  {
    name: "AI For Everyone",
    org: "DeepLearning.AI · Coursera",
    date: "May 2023",
    image: aiForEveryone,
    verifyUrl: "https://coursera.org/verify/67ZZ7JYH8G6W",
  },
  {
    name: "Deep Learning with PyTorch: Neural Style Transfer",
    org: "Coursera",
    date: "May 2023",
    image: pytorchNeuralStyle,
    verifyUrl: "https://coursera.org/verify/2DEX6QA2BQNC",
  },
  {
    name: "ChatGPT with Python: Build a Chatbot With the OpenAI API",
    org: "Coursera",
    date: "Oct 2023",
    image: chatgptPython,
    verifyUrl: "https://coursera.org/verify/QB6L3QG9ADN2",
  },
];

export const contact = {
  email: "kodevikas8@gmail.com",
  phone: "+91 63035 66851",
  phoneHref: "tel:+916303566851",
  linkedin: "linkedin.com/in/vikas-kode",
  linkedinHref: "https://linkedin.com/in/vikas-kode",
  location: "Hyderabad, Telangana",
};
