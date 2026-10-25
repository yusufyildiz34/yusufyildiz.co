// All site copy lives here, so updating the page never means touching markup.

export const profile = {
  name: 'Yusuf Yıldız',
  role: 'Senior full-stack Java developer',
  headline: 'Java platforms, engineered to last.',
  intro:
    "I'm Yusuf Yıldız, a senior full-stack Java developer and technical lead. I help teams design, build and scale backend systems, web and mobile products, and the cloud infrastructure that runs them.",
  availability: 'Available for remote projects',
  highlights: ['15+ years in production Java', 'Remote, UTC+3', 'English and Turkish'],
  location: 'Istanbul, Türkiye',
  timezone: 'UTC+3',
  email: 'yusufyildiz86@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yusufyildiz34',
  linkedinHandle: 'in/yusufyildiz34',
  github: 'https://github.com/yusufyildiz34',
  githubHandle: 'yusufyildiz34',
  description:
    'Yusuf Yıldız is a senior full-stack Java developer and technical lead. Backend engineering, full-stack products, architecture, cloud-native delivery and technical leadership.',
};

export type ServiceIcon =
  | 'hard-drives'
  | 'devices'
  | 'blueprint'
  | 'cloud-arrow-up'
  | 'users-three'
  | 'circuitry';

export const services: { icon: ServiceIcon; title: string; text: string; tools: string }[] = [
  {
    icon: 'hard-drives',
    title: 'Backend engineering',
    text: 'Fast, secure and well-tested services and APIs that hold up under real traffic.',
    tools: 'Java 21, Spring Boot 3, REST, GraphQL, Kafka, PostgreSQL',
  },
  {
    icon: 'devices',
    title: 'Full-stack products',
    text: 'Web and mobile products built end to end, from the database to the screen your users touch.',
    tools: 'React, React Native, TypeScript, Spring Boot',
  },
  {
    icon: 'blueprint',
    title: 'Architecture and modernization',
    text: 'System design for new platforms, and step-by-step migration of legacy monoliths to services without stopping the business.',
    tools: 'Microservices, domain-driven design, event-driven systems',
  },
  {
    icon: 'cloud-arrow-up',
    title: 'Cloud-native delivery',
    text: 'Containerized deployments, CI/CD pipelines and observability, so shipping becomes routine.',
    tools: 'Docker, Kubernetes, Argo CD, Terraform, AWS, Azure',
  },
  {
    icon: 'users-three',
    title: 'Technical leadership',
    text: 'A hands-on lead for your team: architecture decisions, code review, mentoring and a delivery rhythm that works.',
    tools: 'Scrum, test-driven development, code review, mentoring',
  },
  {
    icon: 'circuitry',
    title: 'AI integration',
    text: 'AI features built into existing products, from anomaly detection to LLM-powered workflows, with the engineering to run them in production.',
    tools: 'Model integration, data pipelines, AI-assisted development',
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

export const industries =
  'Health IoT, mobile payments, telecom, digital identity and commodity trading.';
