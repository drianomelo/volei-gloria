export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface AppConfig {
  basePath: string;
  name: string;
  logo: string;
  theme: {
    primary: string;
    bg: string;
    dot: string;
    border: string;
    gradientFrom: string;
    gradientTo: string;
  };
  nav: NavItem[];
  cta: CTA;
}

export const apps: Record<string, AppConfig> = {
  volei: {
    basePath: "/volei-gloria",
    name: "Vôlei Glória",
    logo: "/logo-verde.png",
    theme: {
      primary: "emerald",
      bg: "bg-emerald-100/80",
      dot: "bg-emerald-400",
      border: "border-emerald-400",
      gradientFrom: "from-[#277f4a]",
      gradientTo: " to-[#ffd21f]",
    },
    nav: [
      { label: "Início", href: "/volei-gloria" },
      { label: "Elenco", href: "/volei-gloria/elenco" },
      { label: "Calendário", href: "/volei-gloria/calendario" },
      { label: "Resultados", href: "/volei-gloria/resultados" },
      { label: "SVI", href: "/volei-gloria/svi" },
    ],
    cta: {
      label: "Próximo Jogo",
      href: "/",
    },
  },

  projeto: {
    basePath: "/saltando-para-o-futuro",
    name: "Saltando para o Futuro",
    logo: "/logo-projeto.png",
    theme: {
      primary: "yellow",
      bg: "bg-yellow-100/80",
      dot: "bg-yellow-400",
      border: "border-yellow-400",
      gradientFrom: "from-[#113300]",
      gradientTo: " to-[#FFE801]",
    },
    nav: [
      { label: "Início", href: "/saltando-para-o-futuro" },
      { label: "Projeto", href: "/saltando-para-o-futuro/projeto" },
      { label: "Times", href: "/saltando-para-o-futuro/times" },
      { label: "SVI", href: "/saltando-para-o-futuro/svi" },
    ],
    cta: {
      label: "Seja um Patrocinador",
      href: "/",
    },
  },
};
