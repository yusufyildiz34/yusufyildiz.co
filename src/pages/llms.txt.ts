import type { APIRoute } from 'astro';
import { profile, services, reasons, industries, faqs } from '../data/profile';

// A Markdown summary for AI assistants and answer engines, following the llms.txt
// proposal (https://llmstxt.org): an H1, a blockquote summary, and link lists.
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
    ...services.map((s) => `- [${s.title}](${profile.url}#services): ${s.text} Technologies: ${s.tools.join(', ')}.`),
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
    `- [Email](mailto:${profile.email}): ${profile.email}, the quickest way to reach him`,
    `- [LinkedIn](${profile.linkedin}): professional profile`,
    `- [GitHub](${profile.github}): code and open-source contributions`,
    `- [Website](${profile.url}): services, background and FAQ`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
