/* ============================================
   ME GROWTH BRIDGE â€” GLOBAL ELITE EDITION
   Stylesheet | Dark-First Premium Design
   ============================================ */

:root {
  --bg-primary: #0B0F19;
  --bg-secondary: #111827;
  --bg-card: rgba(17, 24, 39, 0.6);
  --border: rgba(255, 255, 255, 0.08);
  --text-primary: #F8FAFC;
  --text-secondary: #94A3B8;
  --text-muted: #64748B;
  --accent-cyan: #00F0FF;
  --accent-cyan-dim: rgba(0, 240, 255, 0.15);
  --accent-amber: #FFB800;
  --accent-amber-dim: rgba(255, 184, 0, 0.15);
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--bg-primary); }
::-webkit-scrollbar-thumb { background: var(--text-muted); border-radius: 4px; }

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.active { opacity: 1; transform: translateY(0); }

/* Navigation */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: var(--transition);
}
nav.scrolled {
  background: rgba(11, 15, 25, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  padding: 16px 0;
}
nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo span { color: var(--accent-cyan); }

.nav-links {
  display: flex;
  gap: 40px;
  list-style: none;
  align-items: center;
}
.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}
.nav-links a:hover { color: var(--text-primary); }
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  width: 0; height: 2px;
  background: var(--accent-cyan);
  transition: width 0.3s;
}
.nav-links a:hover::after { width: 100%; }

.nav-cta {
  background: linear-gradient(135deg, var(--accent-cyan), #00c2cc);
  color: var(--bg-primary) !important;
  padding: 10px 24px;
  border-radius: 100px;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s !important;
}
.nav-cta::after { display: none !important; }
.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 240, 255, 0.3);
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
}

/* Hero */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
}
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 20s infinite ease-in-out;
}
.orb-1 { width: 600px; height: 600px; background: var(--accent-cyan); top: -200px; right: -100px; }
.orb-2 { width: 500px; height: 500px; background: var(--accent-amber); bottom: -150px; left: -100px; animation-delay: -5s; }
.orb-3 { width: 300px; height: 300px; background: #8B5CF6; top: 40%; left: 30%; opacity: 0.2; animation-delay: -10s; }

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

.grid-overlay {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
  z-index: 1;
}

.hero-content { position: relative; z-index: 2; max-width: 900px; }

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--accent-cyan-dim);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 100px;
  font-size: 0.85rem;
  color: var(--accent-cyan);
  margin-bottom: 32px;
  backdrop-filter: blur(10px);
}
.hero-badge .dot {
  width: 8px; height: 8px;
  background: var(--accent-cyan);
  border-radius: 50%;
  animation: pulse 2s infinite;
}
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}
.hero h1 .gradient-text {
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-amber));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 40px;
  line-height: 1.7;
}

.hero-cta-group {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  background: linear-gradient(135deg, var(--accent-cyan), #00c2cc);
  color: var(--bg-primary);
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: var(--transition);
  border: none;
  cursor: pointer;
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(0, 240, 255, 0.25);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  background: transparent;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 12px;
  font-weight: 500;
  font-size: 1rem;
  border: 1px solid var(--border);
  transition: var(--transition);
  backdrop-filter: blur(10px);
}
.btn-secondary:hover {
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
}

.lang-pills { display: flex; gap: 12px; flex-wrap: wrap; }
.lang-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  backdrop-filter: blur(10px);
}

/* Stats Bar */
.stats-bar { padding: 80px 0; position: relative; }
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 32px;
  backdrop-filter: blur(20px);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}
.stat-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-amber));
  opacity: 0;
  transition: opacity 0.3s;
}
.stat-card:hover { transform: translateY(-5px); border-color: rgba(0, 240, 255, 0.2); }
.stat-card:hover::before { opacity: 1; }

.stat-icon {
  width: 48px; height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 16px;
}
.stat-icon.cyan { background: var(--accent-cyan-dim); }
.stat-icon.amber { background: var(--accent-amber-dim); }

.stat-number {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}
.stat-label { color: var(--text-secondary); font-size: 0.9rem; }

/* Section Headers */
.section-header { margin-bottom: 64px; }
.section-label {
  display: inline-block;
  padding: 6px 14px;
  background: var(--accent-amber-dim);
  border: 1px solid rgba(255, 184, 0, 0.2);
  border-radius: 100px;
  color: var(--accent-amber);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
}
.section-desc {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 600px;
}

/* Capabilities Bento Grid */
.capabilities { padding: 100px 0; }
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.bento-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(20px);
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}
.bento-card::after {
  content: '';
  position: absolute;
  bottom: -50%; right: -50%;
  width: 100%; height: 100%;
  background: radial-gradient(circle, var(--accent-cyan-dim), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s;
}
.bento-card:hover { transform: translateY(-5px); border-color: rgba(0, 240, 255, 0.15); }
.bento-card:hover::after { opacity: 1; }
.bento-card.wide { grid-column: span 2; }
.bento-card.tall { grid-row: span 2; }

.bento-card h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 12px;
  position: relative;
  z-index: 1;
}
.bento-card p, .bento-card ul {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
  position: relative;
  z-index: 1;
}
.bento-card ul { list-style: none; margin-top: 16px; }
.bento-card ul li {
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
}
.bento-card ul li::before {
  content: 'â†’';
  position: absolute;
  left: 0;
  color: var(--accent-cyan);
}
.bento-tag {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(255,255,255,0.05);
  border-radius: 100px;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}

/* Featured Project */
.featured { padding: 100px 0; }
.project-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 32px;
  overflow: hidden;
  backdrop-filter: blur(20px);
}
.project-visual {
  position: relative;
  height: 100%;
  min-height: 400px;
  background: linear-gradient(135deg, rgba(0,240,255,0.1), rgba(255,184,0,0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.project-visual img {
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0.9;
}
.play-btn {
  position: absolute;
  width: 80px; height: 80px;
  background: rgba(255,255,255,0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
.play-btn:hover { transform: scale(1.1); background: white; }
.play-btn svg { width: 24px; height: 24px; fill: var(--bg-primary); margin-left: 4px; }

.project-info { padding: 48px; }
.project-info h3 {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
}
.project-info p {
  color: var(--text-secondary);
  margin-bottom: 24px;
  line-height: 1.7;
}
.project-meta {
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
}
.meta-item { display: flex; flex-direction: column; gap: 4px; }
.meta-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.meta-value { font-weight: 600; color: var(--text-primary); }

/* Philosophy */
.philosophy { padding: 100px 0; text-align: center; }
.quote-card {
  max-width: 800px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 32px;
  padding: 64px 48px;
  backdrop-filter: blur(20px);
  position: relative;
}
.quote-card::before {
  content: '"';
  font-family: var(--font-display);
  font-size: 8rem;
  color: var(--accent-cyan);
  opacity: 0.2;
  position: absolute;
  top: 20px; left: 40px;
  line-height: 1;
}
.quote-text {
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  font-weight: 500;
  line-height: 1.8;
  color: var(--text-primary);
  position: relative;
  z-index: 1;
}
.quote-author {
  margin-top: 32px;
  color: var(--accent-amber);
  font-weight: 600;
}

/* Contact */
.contact { padding: 100px 0; }
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.contact-info h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 24px;
}
.contact-info p {
  color: var(--text-secondary);
  margin-bottom: 40px;
  font-size: 1.1rem;
  line-height: 1.7;
}
.contact-methods { display: flex; flex-direction: column; gap: 24px; }
.contact-method {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  transition: var(--transition);
}
.contact-method:hover {
  border-color: var(--accent-cyan);
  transform: translateX(5px);
}
.contact-icon {
  width: 48px; height: 48px;
  border-radius: 12px;
  background: var(--accent-cyan-dim);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}
.contact-method a {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
}
.contact-method span {
  color: var(--text-muted);
  font-size: 0.85rem;
}
.contact-visual {
  position: relative;
  height: 500px;
  background: linear-gradient(135deg, var(--accent-cyan-dim), var(--accent-amber-dim));
  border-radius: 32px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-visual .orb-mini { position: absolute; border-radius: 50%; filter: blur(60px); }
.contact-visual .orb-mini:nth-child(1) { width: 200px; height: 200px; background: var(--accent-cyan); top: 20%; left: 20%; }
.contact-visual .orb-mini:nth-child(2) { width: 150px; height: 150px; background: var(--accent-amber); bottom: 20%; right: 20%; }

/* Footer */
footer {
  padding: 40px 0;
  border-top: 1px solid var(--border);
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  position: fixed;
  inset: 0;
  background: var(--bg-primary);
  z-index: 999;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
}
.mobile-menu.active { display: flex; }
.mobile-menu a {
  color: var(--text-primary);
  text-decoration: none;
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
}
.mobile-menu .close-btn {
  position: absolute;
  top: 24px; right: 24px;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 2rem;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 1024px) {
  .bento-grid { grid-template-columns: repeat(2, 1fr); }
  .bento-card.wide { grid-column: span 2; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .project-showcase { grid-template-columns: 1fr; }
  .contact-grid { grid-template-columns: 1fr; }
  .contact-visual { height: 300px; order: -1; }
}

@media (max-width: 768px) {
  .nav-links { display: none; }
  .mobile-menu-btn { display: block; }
  .hero h1 { font-size: 2.5rem; }
  .bento-grid { grid-template-columns: 1fr; }
  .bento-card.wide, .bento-card.tall { grid-column: span 1; grid-row: span 1; }
  .stats-grid { grid-template-columns: 1fr; }
  .project-info { padding: 32px; }
  .quote-card { padding: 40px 24px; }
}
