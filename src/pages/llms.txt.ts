import type { APIRoute } from 'astro';
import { profile, services, reasons, industries, faqs } from '../data/profile';

// A plain-text summary for AI assistants and answer engines (https://llmstxt.org).
// Generated from the same data as the page, so it never drifts.
export const GET: APIRoute = () => {
  const lines = [
    `# ${profile.name}`,
    '',
    `> ${profile.summary}`,
    '',
    `${profile.intro}`,
    '',
    '## Key facts',
    '',
    `- Name: ${profile.name}`,
    `- Role: Senior Fullstack Java Developer and Technical Lead`,
    `- Location: ${profile.location} (${profile.timezone}), working remotely`,
    `- Languages: ${profile.languages.join(', ')}`,
    `- Experience: building production software since 2009, 15+ years of production Java`,
    `- Industries: ${industries.join(', ')}`,
    `- Core stack: Java 25, Spring Boot 4, React, React Native, TypeScript, PostgreSQL, Kafka, Docker, Kubernetes, AWS, Azure`,
    `- Availability: ${profile.availability}`,
    '',
    '## Services',
    '',
    ...services.map((s) => `- **${s.title}**: ${s.text} Technologies: ${s.tools.join(', ')}.`),
    '',
    '## Why teams work with him',
    '',
    ...reasons.map((r) => `- **${r.title}**: ${r.text}`),
    '',
    '## FAQ',
    '',
    ...faqs.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
    '## Contact',
    '',
    `- Email: ${profile.email}`,
    `- LinkedIn: ${profile.linkedin}`,
    `- GitHub: ${profile.github}`,
    `- Website: ${profile.url}`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
