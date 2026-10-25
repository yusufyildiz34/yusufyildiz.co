// All site copy lives here, so updating the page never means touching markup.

export const profile = {
  name: 'Yusuf Yildiz',
  role: 'Senior full-stack Java developer and technical lead',
  location: 'Istanbul, Türkiye (UTC+3)',
  availability: 'Open to fully remote senior and lead roles.',
  email: 'yusufyildiz86@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yusufyildiz34',
  github: 'https://github.com/yusufyildiz34',
  repo: 'https://github.com/yusufyildiz34/yusufyildiz.co',
  description:
    'Senior full-stack Java developer and technical lead with 15+ years building production systems in Java, Spring Boot, React and Kubernetes.',
  lede:
    'I design and build backend-heavy products in Java and Spring Boot, along with the React and React Native clients on top and the Kubernetes delivery underneath. Since 2009 that has meant health IoT, mobile payments, carrier charging, digital identity and a national commodity exchange.',
};

// The hero diagram: systems from my career, drawn as one architecture.
export const systems = [
  'telemetry',
  'anomaly-detection',
  'payments',
  'identity',
  'charging',
  'trading',
];

export const systemsCaption =
  'Six systems I have built or helped split apart, drawn as one: health telemetry, anomaly detection, mobile payments, digital identity, carrier charging and commodity trading.';

type Project = {
  name: string;
  years?: string;
  role?: string;
  points: string[];
};

type Job = {
  years: string;
  title: string;
  org: string;
  context: string;
  points?: string[];
  projects?: Project[];
  stack?: string;
};

export const jobs: Job[] = [
  {
    years: '2019 – now',
    title: 'Fullstack developer and technical lead',
    org: 'WOXOS Bilgi Teknolojileri',
    context: 'independent software consultancy',
    projects: [
      {
        name: 'Connected health IoT platform',
        role: 'Technical lead, built from scratch',
        points: [
          'Owned the end-to-end architecture and split delivery into backend, frontend, mobile and AI workstreams, directing all four teams.',
          'Built the Spring Boot services, React web app and React Native mobile client on PostgreSQL.',
          'Delivered an AI-based anomaly-detection capability with the AI engineers, from implementation through product integration.',
          'Set up the DevOps practice and CI/CD from scratch: Docker, Kubernetes, Jenkins and SonarQube quality gates.',
        ],
      },
      {
        name: 'Telecom operator: mobile payment and home internet',
        years: '2019 – 2021',
        points: [
          'Migrated a live mobile payment platform from a legacy OSGi monolith to independently deployable Spring Boot services.',
          'Built the home internet platform from scratch, defining service boundaries, API contracts and event flows on Kafka.',
        ],
      },
      {
        name: 'Global industrial group: product streams',
        years: '2021 – 2025',
        points: [
          'Built containerized Spring Boot services on Kubernetes and AWS, with AngularJS front-end modules, inside an international delivery team.',
        ],
      },
      {
        name: 'National commodity exchange',
        years: '2021 – 2025',
        points: [
          'Developed backend and front-end components for regulated transaction flows, running on Docker and Kubernetes.',
        ],
      },
    ],
    stack:
      'Spring Boot, Spring Cloud, Spring Security, React, React Native, TypeScript, Kafka, Redis, Keycloak, PostgreSQL, Oracle, Docker, Kubernetes, Jenkins, SonarQube, AWS',
  },
  {
    years: '2016 – 2018',
    title: 'Java software architect',
    org: 'KOBIL Systems',
    context: 'digital identity and mobile security',
    points: [
      'Designed Java and JavaScript security products spanning backend services, web clients and native iOS and Android apps.',
      'Built the DevOps environment for KOBIL Türkiye from scratch, replacing manual releases with Jenkins and TeamCity pipelines and container-based deployment.',
      'Introduced a layered test strategy with JUnit, Mockito, Spock and WireMock, enforced through SonarQube.',
    ],
    stack: 'Spring Boot, AngularJS, React, Node.js, Docker, Kubernetes, Jenkins, TeamCity, ELK',
  },
  {
    years: '2015 – 2016',
    title: 'Application development consultant',
    org: 'Innova IT Solutions',
    context: 'Türk Telekom Group',
    points: [
      'Built a fully containerized end-to-end IoT platform for high availability and horizontal scale, deployed across AWS and Azure.',
    ],
    stack: 'Spring Boot, Spring Security, Apache Syncope, Docker, Kubernetes, Oracle, MySQL',
  },
];

export const earlier = [
  {
    years: '2014 – 2015',
    org: 'Pia Bilişim',
    text: 'Java applications for Ericsson CBiO, a carrier-grade convergent charging platform, as part of the team that ran the first CBiO 2 to CBiO 3 migration.',
  },
  {
    years: '2012 – 2013',
    org: '32Bit',
    text: 'Toyota enterprise applications on J2EE with jBPM orchestration and Apache Camel integrations, plus document tracking for TEB Bank on IBM BPM.',
  },
  {
    years: '2009 – 2012',
    org: 'SDIT',
    text: 'Moved a vehicle-tracking system from Struts to Spring and delivered a five-module ERP for the Istanbul Provincial Administration.',
  },
];

export const stack = [
  {
    group: 'Backend',
    items: 'Java 21, Spring Boot 3, Spring Cloud, Spring Security, Hibernate, REST, GraphQL, Apache Kafka',
  },
  {
    group: 'Architecture',
    items: 'Microservices, domain-driven design, hexagonal architecture, CQRS, event sourcing',
  },
  { group: 'Frontend and mobile', items: 'React, React Native, TypeScript' },
  { group: 'Data', items: 'PostgreSQL, Oracle, MongoDB, Redis' },
  {
    group: 'Delivery',
    items: 'Docker, Kubernetes, Helm, Argo CD, Terraform, GitHub Actions, Jenkins, AWS, Azure',
  },
  {
    group: 'Observability and security',
    items: 'Prometheus, Grafana, Jaeger, ELK, Keycloak, SonarQube',
  },
  {
    group: 'How I work',
    items: 'Test-driven development, Scrum since 2015, code review, mentoring, AI-assisted development with Claude Code and Codex',
  },
];

export const education = {
  degree: 'B.Sc. Industrial Engineering',
  school: 'Marmara University, English-medium program',
  years: '2005 – 2010',
  languages: 'Turkish (native), English (advanced, used daily in international teams)',
};
