// All site copy lives here, so updating the page never means touching markup.

export const profile = {
  name: 'Yusuf YILDIZ',
  role: 'Senior Fullstack Java Developer',
  headline: 'Java platforms, engineered to last.',
  intro:
    "I'm Yusuf YILDIZ, a senior fullstack Java developer and technical lead. I help teams design, build and scale backend systems, web and mobile products, and the cloud infrastructure that runs them.",
  availability: 'Available for remote projects',
  highlights: ['15+ years in production Java', 'Remote, UTC+3', 'English and Turkish'],
  location: 'Istanbul, Türkiye',
  timezone: 'UTC+3',
  email: 'yusufyildiz86@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yusufyildiz34',
  linkedinHandle: 'in/yusufyildiz34',
  github: 'https://github.com/yusufyildiz34',
  githubHandle: 'yusufyildiz34',
  url: 'https://yusufyildiz.co/',
  // Update when the page content changes; used as the sitemap's <lastmod>.
  lastUpdated: '2026-10-26',
  gaMeasurementId: 'G-1J0P085LKC',
  seoTitle: 'Yusuf YILDIZ | Senior Fullstack Java Developer & Technical Lead',
  description:
    'Yusuf YILDIZ, senior fullstack Java developer and technical lead in Istanbul, working remotely. Java 25, Spring Boot 4, React and Kubernetes for product teams.',
  summary:
    'Senior fullstack Java developer and technical lead based in Istanbul, Türkiye (UTC+3), working remotely with product teams. Builds backend systems, web and mobile products, and cloud-native delivery with Java 25, Spring Boot 4, React and Kubernetes.',
  languages: ['English', 'Turkish'],
  skills: [
    'Java',
    'Spring Boot',
    'Microservices',
    'Domain-driven design',
    'Event-driven architecture',
    'Apache Kafka',
    'PostgreSQL',
    'React',
    'React Native',
    'TypeScript',
    'Kubernetes',
    'Docker',
    'Argo CD',
    'Terraform',
    'AWS',
    'Microsoft Azure',
    'CI/CD',
    'Technical leadership',
    'AI integration',
  ],
};

export type ServiceIcon =
  | 'hard-drives'
  | 'devices'
  | 'blueprint'
  | 'cloud-arrow-up'
  | 'users-three'
  | 'circuitry';

export const services: {
  icon: ServiceIcon;
  title: string;
  text: string;
  tools: string[];
  layout?: 'featured' | 'wide';
}[] = [
  {
    icon: 'hard-drives',
    layout: 'featured',
    title: 'Backend engineering',
    text: 'Fast, secure and well-tested services and APIs that hold up under real traffic, designed to stay easy to change as your product grows.',
    tools: ['Java 25', 'Spring Boot 4', 'REST', 'GraphQL', 'Kafka', 'PostgreSQL'],
  },
  {
    icon: 'devices',
    title: 'Fullstack products',
    text: 'Web and mobile products built end to end, from the database to the screen your users touch.',
    tools: ['React', 'React Native', 'TypeScript', 'Spring Boot'],
  },
  {
    icon: 'blueprint',
    title: 'Architecture and modernization',
    text: 'System design for new platforms, and step-by-step migration of legacy monoliths to services without stopping the business.',
    tools: ['Microservices', 'Domain-driven design', 'Event-driven', 'CQRS'],
  },
  {
    icon: 'cloud-arrow-up',
    title: 'Cloud-native delivery',
    text: 'Containerized deployments, CI/CD pipelines and observability, so shipping becomes routine.',
    tools: ['Docker', 'Kubernetes', 'Argo CD', 'Terraform', 'AWS', 'Azure'],
  },
  {
    icon: 'users-three',
    title: 'Technical leadership',
    text: 'A hands-on lead for your team: architecture decisions, code review, mentoring and a delivery rhythm that works.',
    tools: ['Scrum', 'TDD', 'Code review', 'Mentoring'],
  },
  {
    icon: 'circuitry',
    layout: 'wide',
    title: 'AI integration',
    text: 'AI features built into existing products, from anomaly detection to LLM-powered workflows, with the engineering to run them in production.',
    tools: ['LLM integration', 'Anomaly detection', 'Data pipelines', 'AI-assisted development'],
  },
];

export type ReasonIcon = 'code' | 'blueprint' | 'globe-hemisphere-west';

export const reasons: { icon: ReasonIcon; title: string; text: string }[] = [
  {
    icon: 'code',
    title: 'Senior and hands-on',
    text: 'More than 15 years of production Java. I design the architecture and I write the code.',
  },
  {
    icon: 'blueprint',
    title: 'From zero to live, and from legacy to modern',
    text: 'I have built platforms from scratch and migrated a live mobile payment system from a legacy monolith to microservices.',
  },
  {
    icon: 'globe-hemisphere-west',
    title: 'Remote by default',
    text: 'Working from Istanbul (UTC+3) with teams across time zones, in English or Turkish.',
  },
];

export const industries = [
  'Health IoT',
  'Mobile payments',
  'Telecom',
  'Digital identity',
  'Commodity trading',
];

export const stats = [
  { value: '15+', label: 'Years of production Java' },
  { value: '2009', label: 'Shipping software since' },
  { value: '5', label: 'Industries served' },
];

export const faqs = [
  {
    q: 'What kind of projects do you take on?',
    a: 'Backend and fullstack work on Java platforms: new products built from scratch, modernization of legacy systems, cloud-native delivery, and technical leadership for engineering teams.',
  },
  {
    q: 'Do you work remotely?',
    a: 'Yes. I work remotely from Istanbul, Türkiye (UTC+3) with teams in other time zones, in English or Turkish.',
  },
  {
    q: 'Which technologies do you use?',
    a: 'Java 25 and Spring Boot 4 on the backend; React, React Native and TypeScript on the front end; PostgreSQL and Kafka for data; and Docker, Kubernetes, Argo CD and Terraform on AWS or Azure for delivery.',
  },
  {
    q: 'Can you lead an engineering team?',
    a: 'Yes. I have led backend, frontend, mobile and AI engineers on the same product, owning architecture decisions, code review, mentoring and delivery in Scrum.',
  },
  {
    q: 'How do we start working together?',
    a: 'Email me at yusufyildiz86@gmail.com with a short description of your product, your team and your timeline. From there we can set up a call to discuss scope.',
  },
];
