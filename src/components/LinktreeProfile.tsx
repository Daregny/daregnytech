import bgAurora from "@/assets/bg-aurora.jpg";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
  Youtube,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  BookOpen,
  Coffee,
} from "lucide-react";

interface LinkItem {
  label: string;
  url: string;
  icon: React.ElementType;
  description?: string;
  featured?: boolean;
}

const links: LinkItem[] = [
  {
    label: "GitHub",
    url: "https://github.com/seu-usuario",
    icon: Github,
    description: "Meus repositórios e projetos",
    featured: true,
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/seu-usuario",
    icon: Linkedin,
    description: "Meu perfil profissional",
    featured: true,
  },
  {
    label: "Portfolio",
    url: "https://seusite.dev",
    icon: Globe,
    description: "Projetos e trabalhos",
  },
  {
    label: "Blog & Artigos",
    url: "https://dev.to/seu-usuario",
    icon: BookOpen,
    description: "Textos sobre tecnologia",
  },
  {
    label: "Twitter / X",
    url: "https://twitter.com/seu-usuario",
    icon: Twitter,
    description: "Pensamentos e novidades",
  },
  {
    label: "YouTube",
    url: "https://youtube.com/@seu-usuario",
    icon: Youtube,
    description: "Conteúdo em vídeo",
  },
  {
    label: "Me pague um café ☕",
    url: "https://buymeacoffee.com/seu-usuario",
    icon: Coffee,
    description: "Apoie meu trabalho",
  },
  {
    label: "Contato",
    url: "mailto:seu@email.com",
    icon: Mail,
    description: "Entre em contato",
  },
];

const socialIcons = [
  { icon: Github, url: "https://github.com/seu-usuario", label: "GitHub" },
  { icon: Linkedin, url: "https://linkedin.com/in/seu-usuario", label: "LinkedIn" },
  { icon: Twitter, url: "https://twitter.com/seu-usuario", label: "Twitter" },
  { icon: Instagram, url: "https://instagram.com/seu-usuario", label: "Instagram" },
];

export default function LinktreeProfile() {
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

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full glow-dot pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">

        {/* Avatar */}
        <div
          className="fade-in-up w-24 h-24 rounded-full pulse-ring mb-4 overflow-hidden flex-shrink-0"
          style={{ animationDelay: "0ms" }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Code2 className="w-10 h-10 text-primary-foreground" />
          </div>
        </div>

        {/* Name & Bio */}
        <div
          className="fade-in-up text-center mb-2"
          style={{ animationDelay: "80ms" }}
        >
          <h1 className="text-2xl font-bold text-gradient mb-1">@seu-usuario</h1>
          <p className="text-base font-medium text-foreground/90">Desenvolvedor Full Stack</p>
        </div>

        <div
          className="fade-in-up text-center mb-6"
          style={{ animationDelay: "140ms" }}
        >
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Apaixonado por código, café e boas ideias. Construindo produtos digitais que fazem a diferença. 🚀
          </p>
        </div>

        {/* Social icons */}
        <div
          className="fade-in-up flex items-center gap-4 mb-8"
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

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="fade-in-up link-card rounded-2xl px-5 py-4 flex items-center gap-4 cursor-pointer group"
                style={{ animationDelay: `${260 + i * 60}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-200">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-sm font-600 text-foreground">{link.label}</span>
                  {link.description && (
                    <span className="block text-xs text-muted-foreground mt-0.5">{link.description}</span>
                  )}
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary/70 flex-shrink-0 transition-colors duration-200" />
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div
          className="fade-in-up mt-10 text-center"
          style={{ animationDelay: "800ms" }}
        >
          <p className="text-xs text-muted-foreground/50">
            Feito com <span className="text-primary">♥</span> e muito café
          </p>
        </div>
      </div>
    </div>
  );
}
