import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectArtwork from "@/app/components/ProjectArtwork";
import { projects } from "@/app/lib/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: `${project.title} — Mithil Astik`, description: project.summary } : { title: "Project not found — Mithil Astik" };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];
  if (!project) notFound();
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return <main className={`case-page case-${project.variant}`}><header className="case-header"><Link className="case-brand" href="/?file=home"><span>m.</span> MITHIL ASTIK</Link><Link className="case-back" href="/?file=projects"><span>←</span> ALL PROJECTS</Link><Link className="case-contact" href="/?file=contact">LET&apos;S TALK ↗</Link></header><section className="case-hero"><div className="case-kicker"><span>{project.number} / {project.category}</span><span>{project.year} · {project.status}</span></div><h1>{project.title}</h1><p>{project.subtitle}</p><div className="case-visual"><ProjectArtwork project={project} /></div></section><section className="case-meta"><div><span>ROLE</span><strong>PRODUCT DESIGN + DEVELOPMENT</strong></div><div><span>YEAR</span><strong>{project.year}</strong></div><div><span>STATUS</span><strong>{project.status}</strong></div><div><span>TOOLS / FOCUS</span><strong>{project.stack.join(" · ")}</strong></div></section><section className="case-story"><div className="case-story-heading"><span className="section-number">THE PROJECT / {project.number}</span><h2>Start with<br /><em>the real question.</em></h2></div><div className="case-story-copy"><span className="case-story-label">01 / THE BRIEF</span><p>{project.brief}</p><span className="case-story-label">02 / THE APPROACH</span><p>{project.approach}</p>{project.note && <p className="case-note">{project.note}</p>}</div></section><section className="case-deliverables"><span className="section-number">03 / WHAT'S IN THE BUILD</span><div className="deliverable-list">{project.details.map((detail, index) => <div key={detail}><span>0{index + 1}</span><p>{detail}</p><b>↗</b></div>)}</div></section><section className="case-stack"><span className="section-number">STACK / METHODS</span><div>{project.stack.map((item) => <span key={item}>{item}</span>)}</div></section><section className="case-next"><span>NEXT CASE / {nextProject.number}</span><Link href={`/work/${nextProject.slug}`}><span>{nextProject.title}</span><b>↗</b></Link></section><footer className="case-footer"><Link href="/?file=home">MITHIL ASTIK · © 2026</Link><Link href="/?file=projects">BACK TO ALL WORK ↑</Link></footer></main>;
}
