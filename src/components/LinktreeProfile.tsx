import { useState } from "react";
import bgAurora from "@/assets/bg-aurora.jpg";
import {
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  Send,
  Twitter,
} from "lucide-react";

// ─── i18n ────────────────────────────────────────────────────────────────────

type Lang = "pt" | "en" | "es";

const i18n: Record<
  Lang,
  {
    title: string;
    bio: string;
    links: { label: string; description: string }[];
    footer: string;
  }
> = {
  pt: {
    title: "Backend Python Developer | Django · Linux SysAdmin · APIs REST · DevOps · Integrações de Sistemas",
    bio: "Engenheira de Sistemas com mais de 15 anos em tecnologia. Especialista em Backend Python (Django, Flask), APIs REST, Linux SysAdmin, DevOps e integrações ERP (TOTVS · Odoo). 🚀",
    links: [
      { label: "GitHub", description: "Repositórios e projetos open source" },
      { label: "LinkedIn", description: "Perfil profissional" },
      { label: "Telegram", description: "Vamos conversar!" },
      { label: "X / Twitter", description: "Novidades e pensamentos tech" },
      { label: "Instagram", description: "Bastidores e comunidade tech" },
    ],
    footer: "Feito com ♥ e muito Python",
  },
  en: {
    title: "Backend Python Developer | Django · Linux SysAdmin · REST APIs · DevOps · System Integrations",
    bio: "Systems Engineer with 15+ years in technology. Expert in Backend Python (Django, Flask), REST APIs, Linux SysAdmin, DevOps, and ERP integrations (TOTVS · Odoo). 🚀",
    links: [
      { label: "GitHub", description: "Repositories & open source projects" },
      { label: "LinkedIn", description: "Professional profile" },
      { label: "Telegram", description: "Let's talk!" },
      { label: "X / Twitter", description: "Tech news & thoughts" },
      { label: "Instagram", description: "Behind the scenes & tech community" },
    ],
    footer: "Made with ♥ and lots of Python",
  },
  es: {
    title: "Desarrolladora Backend Python | Django · Linux SysAdmin · APIs REST · DevOps · Integraciones de Sistemas",
    bio: "Ingeniera de Sistemas con más de 15 años en tecnología. Especialista en Backend Python (Django, Flask), APIs REST, Linux SysAdmin, DevOps e integraciones ERP (TOTVS · Odoo). 🚀",
    links: [
      { label: "GitHub", description: "Repositorios y proyectos open source" },
      { label: "LinkedIn", description: "Perfil profesional" },
      { label: "Telegram", description: "¡Hablemos!" },
      { label: "X / Twitter", description: "Novedades y pensamientos tech" },
      { label: "Instagram", description: "Detrás de escena y comunidad tech" },
    ],
    footer: "Hecho con ♥ y mucho Python",
  },
};

// ─── Links data (URLs are language-agnostic) ────────────────────────────────

interface LinkItem {
  icon: React.ElementType;
  url: string;
}

const linksData: LinkItem[] = [
  { icon: Github, url: "https://github.com/Daregny" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/daregny/" },
  { icon: Send, url: "https://t.me/Daregny" },
  { icon: Twitter, url: "https://x.com/Daregny" },
  { icon: Instagram, url: "https://www.instagram.com/daregnytech" },
];

const socialIcons: { icon: React.ElementType; url: string; label: string }[] = [
  { icon: Github, url: "https://github.com/Daregny", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/daregny/", label: "LinkedIn" },
  { icon: Send, url: "https://t.me/Daregny", label: "Telegram" },
  { icon: Twitter, url: "https://x.com/Daregny", label: "X / Twitter" },
  { icon: Instagram, url: "https://www.instagram.com/daregnytech", label: "Instagram" },
];

const langLabels: Record<Lang, string> = { pt: "PT", en: "EN", es: "ES" };
const langs: Lang[] = ["pt", "en", "es"];

// ─── Component ───────────────────────────────────────────────────────────────

export default function LinktreeProfile() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = i18n[lang];

  return (
    <div
      className="min-h-screen relative flex flex-col items-center px-4 py-12 overflow-hidden"
      style={{
        backgroundImage: `url(${bgAurora})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full glow-dot pointer-events-none" />

      {/* Language switcher */}
      <div className="relative z-10 flex gap-1 mb-8">
        {langs.map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 ${
              lang === l
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card/40 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {langLabels[l]}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">

        {/* Avatar */}
        <div
          className="fade-in-up w-24 h-24 rounded-full pulse-ring mb-4 overflow-hidden flex-shrink-0"
          style={{ animationDelay: "0ms" }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-primary-foreground select-none">
            D
          </div>
        </div>

        {/* Name & Title */}
        <div
          className="fade-in-up text-center mb-3"
          style={{ animationDelay: "80ms" }}
        >
          <h1 className="text-2xl font-bold text-gradient mb-1">Daregny</h1>
          <p className="text-xs font-medium text-foreground/70 max-w-xs leading-snug">{t.title}</p>
        </div>

        {/* Bio */}
        <div
          className="fade-in-up text-center mb-6"
          style={{ animationDelay: "140ms" }}
        >
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            {t.bio}
          </p>
        </div>

        {/* Social icon strip */}
        <div
          className="fade-in-up flex items-center gap-3 mb-8 flex-wrap justify-center"
          style={{ animationDelay: "200ms" }}
        >
          {socialIcons.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Link cards */}
        <div className="w-full flex flex-col gap-3">
          {linksData.map((link, i) => {
            const Icon = link.icon;
            const labelObj = t.links[i];
            return (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="fade-in-up link-card rounded-2xl px-5 py-4 flex items-center gap-4 cursor-pointer group"
                style={{ animationDelay: `${260 + i * 60}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-200">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-sm font-semibold text-foreground">{labelObj.label}</span>
                  <span className="block text-xs text-muted-foreground mt-0.5">{labelObj.description}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary/70 flex-shrink-0 transition-colors duration-200" />
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div
          className="fade-in-up mt-10 text-center"
          style={{ animationDelay: "600ms" }}
        >
          <p className="text-xs text-muted-foreground/50">
            {t.footer.replace("♥", "").trim().split(" ")[0]}{" "}
            <span className="text-primary">♥</span>{" "}
            {t.footer.replace("♥", "").trim().split(" ").slice(1).join(" ")}
          </p>
        </div>
      </div>
    </div>
  );
}
