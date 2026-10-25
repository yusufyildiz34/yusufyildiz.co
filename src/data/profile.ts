// All site copy lives here, so updating the page never means touching markup.

export const profile = {
  name: 'Yusuf YILDIZ',
  firstName: 'Yusuf',
  lastName: 'YILDIZ',
  role: 'Senior full-stack Java developer and technical lead',
  statement:
    'I help teams design, build and scale Java platforms, from Spring Boot services and React front ends to Kubernetes delivery in the cloud.',
  availability: 'Open to remote projects and lead roles',
  location: 'Istanbul, Türkiye',
  timezone: 'UTC+3',
  email: 'yusufyildiz86@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yusufyildiz34',
  linkedinHandle: 'in/yusufyildiz34',
  github: 'https://github.com/yusufyildiz34',
  githubHandle: 'yusufyildiz34',
  description:
    'Yusuf YILDIZ, senior full-stack Java developer and technical lead. Backend engineering, full-stack products, architecture, cloud-native delivery and technical leadership.',
};

export type IconName =
  | 'hard-drives'
  | 'devices'
  | 'blueprint'
  | 'cloud-arrow-up'
  | 'users-three'
  | 'circuitry';

export const services: { icon: IconName; title: string; text: string; tools: string }[] = [
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
    tools: 'Microservices, domain-driven design, event-driven systems, CQRS',
  },
  {
    icon: 'cloud-arrow-up',
    title: 'Cloud-native delivery',
    text: 'Containerized deployments, CI/CD pipelines and observability, so shipping becomes routine.',
    tools: 'Docker, Kubernetes, Helm, Argo CD, Terraform, GitHub Actions, AWS, Azure',
  },
  {
    icon: 'users-three',
    title: 'Technical leadership',
    text: 'Hands-on lead for your engineering team: architecture decisions, code review, mentoring and a delivery rhythm that works.',
    tools: 'Scrum, test-driven development, code review, mentoring',
  },
  {
    icon: 'circuitry',
    title: 'AI integration',
    text: 'AI features built into existing products, from anomaly detection to LLM-powered workflows, with the engineering to run them in production.',
    tools: 'Model integration, data pipelines, AI-assisted development',
  },
];

export const about = {
  text: [
    'I have been building production software since 2009, as a hands-on engineer and as a technical lead. My work spans health IoT, mobile payments, telecom charging, digital identity and a national commodity exchange.',
    'I care about software that stays reliable, fast and easy to change long after launch, and I work best as part of the team rather than as an outside voice.',
  ],
  facts: [
    { label: 'Experience', value: '15+ years in production Java' },
    { label: 'Core stack', value: 'Java 21, Spring Boot 3, React, Kubernetes' },
    { label: 'Working model', value: 'Remote, UTC+3, English and Turkish' },
  ],
};
