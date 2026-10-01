"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import ProjectArtwork from "@/app/components/ProjectArtwork";
import { projects, technologies } from "@/app/lib/projects";

type FileId = "home" | "about" | "projects" | "skills" | "experience" | "contact" | "readme";
type FileInfo = { id: FileId; label: string; icon: string; color: string; language: string };
const files: FileInfo[] = [
  { id: "home", label: "home.tsx", icon: "⚛", color: "#5ec9e9", language: "TypeScript React" },
  { id: "about", label: "about.html", icon: "▤", color: "#e78364", language: "HTML" },
  { id: "projects", label: "projects.js", icon: "JS", color: "#eacb60", language: "JavaScript" },
  { id: "skills", label: "skills.json", icon: "{}", color: "#d7ba62", language: "JSON" },
  { id: "experience", label: "experience.ts", icon: "TS", color: "#5198db", language: "TypeScript" },
  { id: "contact", label: "contact.css", icon: "▣", color: "#5587d2", language: "CSS" },
  { id: "readme", label: "README.md", icon: "M↓", color: "#73bd8c", language: "Markdown" },
];
const socialLinks = [
  { label: "GitHub", href: "https://github.com/lihtim-kitsa", icon: "⌘" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mithil-astik", icon: "in" },
  { label: "Instagram", href: "https://www.instagram.com/genuinelywot", icon: "◎" },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return <article className="ide-project-card">
    <Link className="ide-project-art" href={`/work/${project.slug}`} aria-label={`Open ${project.title} case study`}>
      <ProjectArtwork project={project} /><span className="ide-card-open">↗</span>
    </Link>
    <div className="ide-project-info"><div className="ide-project-meta"><span>{project.category}</span><span>{project.number} / {String(projects.length).padStart(2, "0")}</span></div>
      <h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p>
      <div className="ide-project-tags">{project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
      <div className="ide-project-links"><Link className="ide-text-link" href={`/work/${project.slug}`}>Open case study <span>↗</span></Link>
        {project.sourceUrl && <a className="ide-text-link" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">Source <span>↗</span></a>}
        {project.liveUrl && <a className="ide-text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live site <span>↗</span></a>}
      </div>
    </div>
  </article>;
}

function HomeView({ open }: { open: (id: FileId) => void }) {
  return <div className="editor-page home-view">
    <p className="code-comment">// hello world !! welcome to my portfolio</p>
    <h1 className="home-title"><span>Mithil</span><em>Astik</em></h1>
    <div className="role-pills"><span><i className="pip pip-green" /> Developer</span><span><i className="pip pip-pink" /> Product Designer</span><span><i className="pip pip-blue" /> Physics &amp; EEE</span><span className="role-affiliation">@ BITS Pilani</span></div>
    <p className="home-tagline">Building thoughtful software &nbsp;↗</p>
    <p className="home-intro">I live at the crossroads of <b>software engineering</b>, <b>product design</b>, and <b>physics</b>. I build systems that make complex ideas easier to see, understand, and use.</p>
    <div className="home-actions"><button className="editor-primary" onClick={() => open("projects")}>📁 Projects</button><button onClick={() => open("about")}>👤 About me</button><button onClick={() => open("contact")}>✉ Contact</button></div>
    <div className="stat-strip"><div><b>{String(projects.length).padStart(2, "0")}</b><span>SELECTED PROJECTS</span></div><div><b>03</b><span>FIELDS OF PRACTICE</span></div><div><b>∞</b><span>CURIOSITY</span></div><div><b>↗</b><span>ALWAYS LEARNING</span></div></div>
    <div className="home-bottom"><span>SCROLL OR PICK A FILE TO EXPLORE</span><span>HYDERABAD, INDIA&nbsp; <i>●</i></span></div>
  </div>;
}

function AboutView() {
  return <div className="editor-page content-view">
    <p className="code-comment">&lt;!-- a little context --&gt;</p><h1 className="view-title">About <em>me</em></h1>
    <p className="view-lead">Equal parts curiosity, engineering, and craft.</p>
    <div className="about-columns"><div><p>I&apos;m Mithil, a developer and product designer studying Physics and Electrical &amp; Electronics Engineering at BITS Pilani, Hyderabad.</p><p>My work moves between software, interfaces, and scientific computing. I like untangling complicated systems, finding the human story inside them, and turning that into something clear and useful.</p><p>Outside the screen, I lead quantum computing activities with IEEE and explore machine learning for quantum communication.</p></div><aside className="about-aside"><span className="aside-label">CURRENTLY</span><b>Learning in public</b><span>Physics-informed ML<br />Quantum communication<br />Product engineering</span><a href="/resumes/Resume-MithilAstik.pdf" download>Download my resume ↓</a></aside></div>
    <div className="quote-card"><span>“</span><p>Understand the system.<br /><em>Make the experience legible.</em><br />Then ship something people can use.</p><b>— MY BUILDING LOOP</b></div>
  </div>;
}

function ProjectsView() {
  return <div className="editor-page content-view projects-view"><p className="code-comment">// selected work : things I&apos;ve designed, built &amp; explored</p><div className="view-heading-row"><div><h1 className="view-title">Projects<span className="title-count">{String(projects.length).padStart(2, "0")}</span></h1><p className="view-lead">A selection of products, experiments, and research.</p></div><span className="view-mode">GRID / 02 COL</span></div><div className="ide-project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div><p className="projects-foot">More experiments are brewing <span>✳</span></p></div>;
}

function SkillsView() {
  const groups = [
    { title: "LANGUAGES", items: ["TypeScript", "Python", "C / C++", "JavaScript"] },
    { title: "WEB & PRODUCT", items: ["React", "Next.js", "FastAPI", "PostgreSQL", "Figma"] },
    { title: "ML & SCIENCE", items: ["PyTorch", "Qiskit", "NumPy", "Plotly", "Three.js"] },
  ];
  return <div className="editor-page content-view"><p className="code-comment">// tools I reach for when the problem calls</p><h1 className="view-title">My <em>toolkit</em></h1><p className="view-lead">Strong fundamentals, an open mind, and the right tool for the question.</p><div className="skills-layout">{groups.map((group, index) => <section className="skill-group" key={group.title}><div className="skill-group-title"><span>0{index + 1}</span>{group.title}</div><div className="skill-list">{group.items.map((skill) => <div key={skill}><span className="skill-file-icon" style={{ color: files.find((file) => file.label.includes(skill === "TypeScript" ? "tsx" : "json"))?.color || "#67c8d8" }}>▰</span>{skill}<b>↗</b></div>)}</div></section>)}</div><div className="skill-note"><span>ALSO EXPLORING</span><p>{technologies.join(" · ")}</p></div></div>;
}

function ExperienceView() {
  return <div className="editor-page content-view experience-view">
    <p className="code-comment">// experience.ts : where I&apos;ve been putting ideas to work</p>
    <h1 className="view-title">Experience<span className="title-count">04</span></h1>
    <p className="view-lead">Freelance product work, academic research, industry experience, and quantum computing leadership.</p>
    <div className="experience-timeline">
      <article><span className="timeline-date">FEB 2026 — PRESENT</span><div><h2>Freelance Developer &amp; Designer</h2><p>Working with multiple clients across full-stack development and product design. Recent work includes a Next.js, PostgreSQL, and TypeScript inventory and ordering platform.</p><div className="timeline-tags"><span>FREELANCE</span><span>PRODUCT DESIGN</span><span>FULL STACK</span></div></div><i>●</i></article>
      <article><span className="timeline-date">MAY — JUL 2026</span><div><h2>Summer Intern · Beijan</h2><p>Developed a React hardware-telemetry viewer and configured edge-computing interfaces for GPS-denied navigation.</p><div className="timeline-tags"><span>REACT</span><span>HARDWARE TELEMETRY</span><span>EDGE COMPUTING</span></div></div><i>●</i></article>
      <article><span className="timeline-date">2026 — PRESENT</span><div><h2>Academic Research · BITS Pilani</h2><p>Researching machine-learning methods for collider anomaly detection and simulated twin-field QKD security, including evaluation against held-out attack topologies.</p><div className="timeline-tags"><span>SCIENTIFIC ML</span><span>PYTORCH</span><span>QUANTUM COMMUNICATION</span></div></div><i>●</i></article>
      <article><span className="timeline-date">FEB 2025 — PRESENT</span><div><h2>Quantum Computing Team Lead · IEEE Student Branch, BPHC</h2><p>Led Qiskit activities, secured an IBM Quantum-sponsored partnership, and led Quantumverse Vol. 3 with ATMoS &apos;25 at BITS Pilani, Hyderabad.</p><div className="timeline-tags"><span>TEAM LEADERSHIP</span><span>QISKIT</span><span>COMMUNITY</span></div></div><i>●</i></article>
    </div>
    <a className="editor-download" href="/resumes/Resume-MithilAstik.pdf" download>↓ &nbsp;DOWNLOAD FULL RESUME</a>
  </div>;
}

function ContactView() {
  return <div className="editor-page content-view contact-view"><p className="code-comment">/* contact.css : let&apos;s make something matter */</p><h1 className="view-title">Let&apos;s build<br /><em>something good.</em></h1><p className="view-lead">Have a knotty product problem, an ambitious idea, or a question that crosses disciplines? I&apos;d love to hear about it.</p><a className="contact-address" href="mailto:astik.mithil@gmail.com">astik.mithil@gmail.com <span>↗</span></a><div className="contact-socials">{socialLinks.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}><span>{link.icon}</span>{link.label}<b>↗</b></a>)}</div><div className="contact-availability"><i /> OPEN TO INTERESTING PROJECTS <span>HYDERABAD, INDIA</span></div></div>;
}

function ReadmeView() {
  return <div className="editor-page content-view readme-view"><p className="code-comment"># README.md</p><div className="readme-badge">MITHIL ASTIK <span>PORTFOLIO / 2026</span></div><h1>Hey, thanks for stopping by<span>!</span></h1><p>I&apos;m a developer and product designer who enjoys bringing curious ideas to life.</p><h2>Quick links</h2><div className="readme-links"><a href="/resumes/Resume-MithilAstik.pdf" download>Technical resume <span>↓</span></a><a href="/resumes/Mithil_Astik_Design_Resume.pdf" download>Design resume <span>↓</span></a><a href="mailto:astik.mithil@gmail.com">Send me an email <span>↗</span></a></div><p className="readme-foot">Made with curiosity, strong coffee, and a few too many browser tabs.</p></div>;
}

function View({ active, open }: { active: FileId; open: (id: FileId) => void }) {
  switch (active) {
    case "home": return <HomeView open={open} />;
    case "about": return <AboutView />;
    case "projects": return <ProjectsView />;
    case "skills": return <SkillsView />;
    case "experience": return <ExperienceView />;
    case "contact": return <ContactView />;
    case "readme": return <ReadmeView />;
  }
}

export default function Home() {
  const [active, setActive] = useState<FileId>("home");
  const [openFiles, setOpenFiles] = useState<FileId[]>(["home"]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [paletteQuery, setPaletteQuery] = useState("");
  const [clockTime, setClockTime] = useState("");
  const activeFile = files.find((file) => file.id === active)!;
  const paletteItems = useMemo(() => files.map((file) => ({ id: file.id, label: file.label, icon: file.icon })), []);
  const visiblePaletteItems = paletteItems.filter((item) => item.label.toLowerCase().includes(paletteQuery.toLowerCase()));

  function openFile(id: FileId) {
    setActive(id);
    setOpenFiles((current) => current.includes(id) ? current : [...current, id]);
    setPaletteOpen(false);
    setPaletteQuery("");
    setMenu(null);
    setSidebarOpen(window.innerWidth > 700);
  }
  function closeFile(id: FileId) {
    if (active === id) {
      const activeIndex = openFiles.indexOf(id);
      setActive(openFiles[activeIndex - 1] || openFiles[activeIndex + 1] || "home");
    }
    setOpenFiles((current) => {
      const next = current.filter((item) => item !== id);
      return next.length ? next : ["home"];
    });
  }

  useEffect(() => {
    const compactLayout = window.matchMedia("(max-width: 700px)");
    const syncExplorer = () => setSidebarOpen(!compactLayout.matches);
    syncExplorer();
    compactLayout.addEventListener("change", syncExplorer);
    function onKey(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "p") { event.preventDefault(); setPaletteOpen((value) => !value); }
      if (event.key === "Escape") { setPaletteOpen(false); setCopilotOpen(false); setMenu(null); }
    }
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); compactLayout.removeEventListener("change", syncExplorer); };
  }, []);

  useEffect(() => {
    const requestedFile = new URLSearchParams(window.location.search).get("file") as FileId | null;
    if (requestedFile && files.some((file) => file.id === requestedFile)) {
      setActive(requestedFile);
      setOpenFiles((current) => current.includes(requestedFile) ? current : [...current, requestedFile]);
    }
  }, []);

  useEffect(() => {
    const updateClock = () => setClockTime(new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()));
    updateClock();
    const timer = window.setInterval(updateClock, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return <main className={`ide-shell ${theme === "light" ? "theme-light" : ""}`}>
    <div className="window-chrome"><div className="window-lights"><i /><i /><i /></div><button className="command-center" onClick={() => setPaletteOpen(true)}><span>⌕</span> mithil-astik : portfolio <kbd>Ctrl</kbd><kbd>P</kbd></button><div className="chrome-spacer" /><button className="chrome-icon" aria-label="Toggle theme" onClick={() => setTheme((value) => value === "dark" ? "light" : "dark")}>◐</button></div>
    <div className="menu-bar">{["File", "Edit", "View", "Go", "Run", "Terminal", "Help"].map((item) => <div className="menu-holder" key={item}><button onClick={() => setMenu(menu === item ? null : item)}>{item}</button>{menu === item && <div className="menu-popover"><button onClick={() => openFile("home")}>Open home.tsx</button><button onClick={() => setPaletteOpen(true)}>Go to file… <kbd>Ctrl P</kbd></button><button onClick={() => setSidebarOpen((value) => !value)}>Toggle explorer</button><button onClick={() => setTheme((value) => value === "dark" ? "light" : "dark")}>Toggle color theme</button></div>}</div>)}<button className="menu-copilot" onClick={() => setCopilotOpen((value) => !value)}>Copilot <span>⌄</span></button></div>
    <div className={`ide-body${sidebarOpen ? " explorer-open" : ""}`}>
      <aside className="activity-rail" aria-label="IDE tools"><button aria-label="Explorer" className={sidebarOpen ? "activity-active" : ""} onClick={() => setSidebarOpen((value) => !value)}>◫</button><button aria-label="Search files" onClick={() => setPaletteOpen(true)}>⌕</button><button aria-label="Source control">⑂</button><a className="rail-download" href="/resumes/Resume-MithilAstik.pdf" download aria-label="Download resume">⇩</a><button aria-label="Open Copilot" onClick={() => setCopilotOpen((value) => !value)}>✧</button><span className="activity-bottom">⚙</span></aside>
      {sidebarOpen && <aside className="explorer"><div className="explorer-title">PORTFOLIO <span>•••</span></div><div className="explorer-folder"><span>⌄</span> MITHIL-ASTIK</div><nav className="file-list" aria-label="Portfolio sections">{files.map((file) => <button key={file.id} className={active === file.id ? "file-row file-active" : "file-row"} onClick={() => openFile(file.id)}><span className="file-icon" style={{ color: file.color }}>{file.icon}</span>{file.label}{openFiles.includes(file.id) && <i />}</button>)}<a className="file-row resume-file" href="/resumes/Resume-MithilAstik.pdf" download><span className="file-icon pdf-icon">PDF</span>Resume-MithilAstik.pdf <span className="download-mini">↓</span></a><a className="file-row resume-file" href="/resumes/Mithil_Astik_Design_Resume.pdf" download><span className="file-icon pdf-icon">PDF</span>Design_Resume.pdf <span className="download-mini">↓</span></a></nav><button className="copilot-card" onClick={() => setCopilotOpen((value) => !value)}><span>✧</span><strong>Mithil&apos;s Copilot</strong><small>AI</small><b>›</b></button><div className="explorer-branch"><span>⌁</span> main <b>↑1&nbsp; ✦3</b></div></aside>}
      {sidebarOpen && <button className="explorer-scrim" aria-label="Close explorer" onClick={() => setSidebarOpen(false)} />}
      <section className="editor-area"><div className="tab-row" role="tablist" aria-label="Open files">{openFiles.map((id) => { const file = files.find((item) => item.id === id)!; return <div key={id} role="tab" aria-selected={active === id} className={`editor-tab${active === id ? " tab-active" : ""}`}><button onClick={() => openFile(id)}><span className="file-icon" style={{ color: file.color }}>{file.icon}</span>{file.label}</button>{id !== "home" && <button className="tab-close" aria-label={`Close ${file.label}`} onClick={() => closeFile(id)}>×</button>}</div>; })}<div className="tab-tools"><button aria-label="Split editor">▣</button><button aria-label="More editor actions">•••</button></div></div>
        <div className="breadcrumbs"><span>mithil-astik</span><b>›</b><span>src</span><b>›</b><span className="crumb-icon" style={{ color: activeFile.color }}>{activeFile.icon}</span><span>{activeFile.label}</span><span className="crumb-right">⋯</span></div>
        <div className="editor-scroll"><View active={active} open={openFile} /></div>
        {copilotOpen && <aside className="copilot-panel"><div><strong>✧ Mithil&apos;s Copilot</strong><button onClick={() => setCopilotOpen(false)}>×</button></div><p>Hey! I&apos;m a little portfolio guide. Pick a file in the explorer to browse Mithil&apos;s work, research, and experience.</p><button onClick={() => openFile("projects")}>Show me the projects <span>↗</span></button><small>PORTFOLIO GUIDE / MITHIL ASTIK</small></aside>}
      </section>
    </div>
    <footer className="status-bar"><div><span>⑂&nbsp; main</span><span>↑1&nbsp; ✦3</span><span className="status-warning">◈ 0</span><span>◉ 0</span></div><div className="status-right"><button onClick={() => setCopilotOpen((value) => !value)}>✧ Copilot</button><span>{activeFile.language}</span><span>UTF-8</span><span>Prettier</span><button onClick={() => setTheme((value) => value === "dark" ? "light" : "dark")}>◐ Mithil Dark&nbsp;⌄</button><span>◷ {clockTime || "--:--"}</span></div></footer>
    {paletteOpen && <div className="palette-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setPaletteOpen(false); }}><div className="command-palette"><label htmlFor="palette-search">⌕</label><input id="palette-search" autoFocus value={paletteQuery} placeholder="Go to file..." onChange={(event) => setPaletteQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && visiblePaletteItems[0]) openFile(visiblePaletteItems[0].id); }} /><div className="palette-hint">{paletteQuery ? "MATCHING FILES" : "RECENTLY OPENED"}</div>{visiblePaletteItems.map((item) => <button key={item.id} onClick={() => openFile(item.id)}><span>{item.icon}</span>{item.label}<kbd>↵</kbd></button>)}</div></div>}
  </main>;
}
