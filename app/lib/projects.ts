export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  status: string;
  summary: string;
  brief: string;
  approach: string;
  details: string[];
  stack: string[];
  variant: "drift" | "stoneforge" | "retail" | "qkd" | "oracle" | "pinn" | "jarvis" | "fraud" | "kepler" | "quantum" | "beijan" | "mobile" | "deltarune";
  sourceUrl?: string;
  liveUrl?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "apex-pinn", number: "01", title: "APEX-PINN",
    subtitle: "Physics-exact neural solvers for coupled systems.", category: "SCIENTIFIC ML / PDE SOLVERS", year: "2026", status: "MID-DUNGEON",
    summary: "A residual-adaptive framework for neural PDE solvers across coupled fluid, thermal, and electromagnetic systems.",
    brief: "Coupled physical systems are difficult to model with a single neural architecture. The solver needs to respect physical constraints while staying flexible enough to compare architectures and approaches.",
    approach: "I am developing a unified framework for physics-informed solvers with residual-adaptive sampling and multi-architecture benchmarking across MLPs, KANs, and Transformers.",
    details: ["Coupled fluid, thermal, and electromagnetic PDEs", "Residual-adaptive collocation", "MLP, KAN, and Transformer benchmarking"],
    stack: ["Python", "PyTorch", "Scientific ML", "PDEs"], variant: "pinn",
    sourceUrl: "https://github.com/lihtim-kitsa/apex-pinn"
  },
  {
    slug: "jarvis", number: "02", title: "J.A.R.V.I.S. v3.0",
    subtitle: "A local-aware AI assistant for building and getting things done.", category: "AI / DESKTOP ASSISTANT", year: "2026", status: "MID-DUNGEON",
    summary: "An agentic assistant built around a cloud-local architecture, Gemini, and persistent state.",
    brief: "A useful assistant needs to understand the current task and work across the local machine and cloud services. J.A.R.V.I.S. explores how to make that interaction feel coherent in a desktop environment.",
    approach: "I am building an Electron application that combines a Node.js orchestration layer, Python utilities, Gemini API access, and SQLite-backed state.",
    details: ["Electron desktop application", "Gemini-powered assistant", "Cloud-local architecture with persistent state"],
    stack: ["Electron", "Node.js", "Python", "Gemini API", "SQLite"], variant: "jarvis",
    sourceUrl: "https://github.com/lihtim-kitsa/jarvis-maybe"
  },
  {
    slug: "fraudguard", number: "03", title: "FraudGuard",
    subtitle: "Explainable fraud signals, ready for real-time review.", category: "MACHINE LEARNING / FINTECH", year: "—", status: "COMPLETED",
    summary: "A real-time transaction risk system with cost-aware decisions and a live monitoring dashboard.",
    brief: "Transaction fraud detection has to balance missed fraud against false alarms. Teams also need to understand why a transaction was flagged and review the system as it runs.",
    approach: "I built a transaction scoring workflow with trained XGBoost and LightGBM models, SHAP explainability, cost-aware decisioning, and a React dashboard backed by FastAPI.",
    details: ["Real-time transaction risk scoring", "XGBoost and LightGBM models with SHAP explanations", "React monitoring dashboard and FastAPI service"],
    stack: ["Python", "FastAPI", "React", "XGBoost", "LightGBM", "SHAP"], variant: "fraud",
    sourceUrl: "https://github.com/lihtim-kitsa/FraudGuard"
  },
  {
    slug: "keplers-oracle", number: "04", title: "Kepler's Oracle",
    subtitle: "Searching NASA's Kepler data for possible new worlds.", category: "DATA SCIENCE / ASTRONOMY", year: "—", status: "COMPLETED",
    summary: "An interactive exoplanet candidate classifier built on NASA Kepler Objects of Interest data.",
    brief: "Kepler observations contain a large set of potential exoplanet signals. This project turns those records into an interactive way to explore which candidates are worth a closer look.",
    approach: "I built a machine-learning workflow and Streamlit dashboard using NASA Kepler Objects of Interest data, with XGBoost and LightGBM models and SHAP to inspect feature contributions.",
    details: ["NASA Kepler Objects of Interest dataset", "XGBoost and LightGBM candidate classifiers", "Interactive Streamlit dashboard with SHAP exploration"],
    stack: ["Python", "Streamlit", "XGBoost", "LightGBM", "SHAP"], variant: "kepler",
    sourceUrl: "https://github.com/lihtim-kitsa/keplers-oracle"
  },
  {
    slug: "temporal-oracle", number: "05", title: "Temporal Oracle",
    subtitle: "A little game of forecasts and hindsight.", category: "WEB APP / FORECASTING", year: "2026", status: "MID-DUNGEON",
    summary: "A web app for forecasting historical events, then learning from how those calls resolve.",
    brief: "Forecasting is difficult when the outcomes already feel obvious. Temporal Oracle gives people a genuine historical fog of war: make a call before seeing what happened, then review calibration over time.",
    approach: "The single-page app structures forecasting into a repeating loop of scenario, prediction, resolution, and reflection, so each result becomes useful feedback rather than a score alone.",
    details: ["Historical scenarios with hidden outcomes", "Prediction and resolution flow", "Calibration feedback over time"],
    stack: ["React", "Tailwind CSS", "Single-page app", "Forecasting UX"], variant: "oracle",
    sourceUrl: "https://github.com/lihtim-kitsa/temporal-oracle",
    liveUrl: "https://temporal-oracle.vercel.app/"
  },
  {
    slug: "quantum-feynatics", number: "06", title: "Quantum Feynatics",
    subtitle: "An inviting front door to quantum computing.", category: "WEB / COMMUNITY", year: "—", status: "COMPLETED",
    summary: "An information website for the IEEE Student Branch quantum computing team at BITS Pilani, Hyderabad.",
    brief: "A student quantum computing group needs one clear place to introduce its mission, make its activities understandable, and help interested students find a way in.",
    approach: "I designed and built an information website for the Quantum Computing Team of IEEE Student Branch, BPHC, using React and Tailwind CSS.",
    details: ["Team introduction and community information", "Responsive React website", "IEEE Student Branch, BPHC"],
    stack: ["React", "Tailwind CSS", "Community website"], variant: "quantum",
    liveUrl: "https://quantum-feynatics.vercel.app/"
  },
  {
    slug: "beijan-tech", number: "07", title: "Beijan Tech",
    subtitle: "A clear introduction to an ambitious startup.", category: "WEB / STARTUP", year: "—", status: "COMPLETED",
    summary: "An information website for Beijan Tech, an India-based startup.",
    brief: "A young company needs a focused online home that introduces its work and gives prospective customers a clear starting point.",
    approach: "I designed and built Beijan Tech's information website in React and Tailwind CSS, bringing the startup's public story into one cohesive web experience.",
    details: ["Startup information architecture", "Responsive React website", "Built with Tailwind CSS"],
    stack: ["React", "Tailwind CSS", "Company website"], variant: "beijan",
    liveUrl: "https://beijan.com/"
  },
  {
    slug: "mobile-store-inventory", number: "08", title: "Mobile Store Inventory Portal",
    subtitle: "Inventory and purchase orders that stay in sync.", category: "FULL STACK / OPERATIONS", year: "—", status: "COMPLETED",
    summary: "A branch inventory and ordering portal that streamlines daily coordination with headquarters.",
    brief: "Phone inventory moves between headquarters and branch stores. Staff need an accurate view of stock, a straightforward ordering process, and purchase orders they can send without rebuilding them by hand.",
    approach: "I built a Next.js app with Supabase for data, role-based access controls, real-time estimates, and ExcelJS-generated purchase orders sent by email using Nodemailer.",
    details: ["Role-based access for staff workflows", "Excel purchase-order exports delivered by email", "Real-time inventory estimates"],
    stack: ["Next.js", "React", "Supabase", "ExcelJS", "Nodemailer"], variant: "mobile"
  },
  {
    slug: "drift-log-analyzer", number: "09", title: "Drift Log Analyzer",
    subtitle: "See position drift in context with the flight footage.", category: "TELEMETRY / DATA VISUALIZATION", year: "2026", status: "COMPLETED",
    summary: "A web-based VIO versus GPS divergence analysis tool synchronized with flight video.",
    brief: "Reviewing flight telemetry means connecting position estimates, GPS measurements, and footage. The analysis becomes much more useful when those signals can be explored together.",
    approach: "I built a browser-based analysis tool for ArduPilot DataFlash .bin and SQLite .db telemetry logs, combining 3D trajectory plots and synchronized video with FFmpeg.wasm-powered transcoding.",
    details: ["VIO and GPS divergence analysis", "ArduPilot DataFlash and SQLite telemetry support", "3D trajectories synchronized with flight footage"],
    stack: ["React", "Plotly", "Chart.js", "FFmpeg.wasm", "SQL.js"], variant: "drift",
    liveUrl: "https://log-analyzer-beijan.vercel.app/"
  },
  {
    slug: "stoneforge-research", number: "10", title: "StoneForge Research",
    subtitle: "A scan becomes a map.", category: "RESEARCH WEBSITE / PRODUCT STORY", year: "2026", status: "WEBSITE REDESIGN",
    summary: "A clear public story for portable electromagnetic imaging and infrastructure inspection.",
    brief: "StoneForge builds portable electromagnetic imaging systems for non-destructive infrastructure inspection. The technology is powerful, but its value is clearest when visitors can picture the journey from sensing a structure to understanding what is inside it.",
    approach: "I organized the site around a scan-to-3D-map story. Visitors encounter the sensing workflow first, then its proof points, limitations, and deployment use cases, with each section answering the next natural question.",
    details: ["Scan-to-map information architecture", "Sensing workflow and use cases", "Clear treatment of proof points and limitations"],
    stack: ["Information architecture", "Visual design", "Responsive web"], variant: "stoneforge"
  },
  {
    slug: "retail-ops-platform", number: "11", title: "Retail Ops Platform",
    subtitle: "Inventory and ordering, without the busywork.", category: "FULL STACK / COMMERCE", year: "2026", status: "CLIENT PROJECT",
    summary: "A retail inventory and ordering application built from the interface to the data layer.",
    brief: "Retail work moves quickly. Inventory and ordering need to be easy to scan and reliable enough to support daily decisions.",
    approach: "I built a full-stack inventory and ordering application with a responsive Next.js interface and a PostgreSQL data layer, using TypeScript across the product.",
    details: ["Inventory management", "Ordering workflows", "Full-stack implementation for multiple clients"],
    stack: ["Next.js", "TypeScript", "PostgreSQL"], variant: "retail"
  },
  {
    slug: "qkd-anomaly-detection", number: "12", title: "QKD Anomaly Detection",
    subtitle: "Stress-testing a detector before the lab.", category: "MACHINE LEARNING / RESEARCH", year: "2026", status: "SIMULATION STUDY",
    summary: "Machine-learning detection for optical injection-locking attacks in twin-field QKD simulations.",
    brief: "Optical injection locking can threaten twin-field quantum key distribution. I wanted to understand how detection approaches behave when attacks are held out from training and operating conditions shift.",
    approach: "I built a stochastic laser and decoy-state twin-field QKD simulator, generated 22 million simulated pulses, and compared semi-supervised and supervised detectors across ten held-out synthetic attack mechanisms.",
    details: ["22 million simulated pulses", "10 held-out synthetic attack mechanisms", "Pooled zero-day AUROC at 100 km: 0.925 (Deep SVDD-type), 0.935 (XGBoost)"],
    stack: ["Python", "PyTorch", "XGBoost", "Simulation"], variant: "qkd",
    note: "Simulation study only; no hardware validation."
  },
  {
    slug: "deltarune-portfolio", number: "13", title: "DELTARUNE Portfolio",
    subtitle: "A game-inspired world for a developer portfolio.", category: "INTERACTIVE WEB / CREATIVE CODING", year: "2026", status: "DESIGN EXPERIMENT",
    summary: "A characterful portfolio concept shaped by DELTARUNE's pixel-art atmosphere, playful storytelling, and expressive motion.",
    brief: "Traditional portfolios can feel like static lists. This concept explores how a game-inspired visual language can make browsing personal work feel more memorable while keeping the path to projects and contact clear.",
    approach: "I translated the mood of DELTARUNE into an original portfolio direction through dark, high-contrast surfaces, pixel-inspired details, playful transitions, and straightforward navigation between work, background, and contact.",
    details: ["Game-inspired visual direction and interface", "Motion-led interactions with clear navigation", "Project storytelling designed for responsive screens"],
    stack: ["Next.js", "TypeScript", "React", "CSS animations"], variant: "deltarune"
  }
];

export const technologies = ["TypeScript", "React", "Next.js", "Python", "PyTorch", "Three.js", "PostgreSQL", "Qiskit", "FastAPI", "Plotly", "C / C++", "Figma"];
