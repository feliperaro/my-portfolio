export type Locale = "en" | "pt";

export type TimelineItem = {
  role: string;
  org: string;
  url?: string;
  location: string;
  period: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
};

export type Dictionary = {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    blog: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    pitch: string;
    viewWork: string;
    getInTouch: string;
    downloadCV: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  skills: {
    title: string;
    groups: { label: string; items: string[] }[];
  };
  projects: {
    title: string;
    note: string;
    viewLive: string;
    items: Project[];
  };
  experience: {
    title: string;
    workLabel: string;
    educationLabel: string;
    work: TimelineItem[];
    education: TimelineItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
  };
  footer: {
    built: string;
    rights: string;
  };
  gate: {
    welcome: string;
    prompt: string;
    themePrompt: string;
    light: string;
    dark: string;
  };
  blog: {
    title: string;
    construction: string;
    loading: string;
    error: string;
  };
};

const GITHUB = "https://github.com/feliperaro";

export const content: Record<Locale, Dictionary> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, my name is",
      title: "AI & Automation Engineer",
      subtitle: "Founder & CTO @ FEROQ",
      pitch:
        "Full-stack software engineer specialized in intelligent automation — building RPA solutions, AI agents, and full-stack web applications that deliver measurable business impact.",
      viewWork: "View my work",
      getInTouch: "Get in touch",
      downloadCV: "Download CV",
    },
    about: {
      title: "About me",
      paragraphs: [
        "I'm a full-stack software engineer specialized in intelligent automation, with hands-on experience building RPA solutions, AI agents, and full-stack web applications. I work with Python, JavaScript, and Java, SQL & NoSQL databases, APIs, Cloud & DevOps, and automation platforms like n8n.",
        "Over the past year, I've been applying AI directly in production systems and real business processes — not just in theory — building AI agents, integrating systems, and delivering automations that generate measurable business impact, including significant reductions in operational costs and team size.",
        "I'm a quick learner, problem solver, and strong team player. I love technology, software development, cloud computing, AI, games, e-sports, traveling, and learning new things.",
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        { label: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java"] },
        { label: "AI & Automation", items: ["AI Agents", "n8n", "RPA", "Selenium", "OpenCV"] },
        { label: "Full-Stack", items: ["Node.js", "React", "REST APIs", "Web Development"] },
        { label: "Data & Cloud", items: ["SQL", "NoSQL", "Cloud", "DevOps", "Pandas"] },
      ],
    },
    projects: {
      title: "Projects",
      note: "Selected work from my professional experience. Live demos and repositories available on request.",
      viewLive: "View live →",
      items: [
        {
          title: "Healthcare RPA Suite",
          description:
            "20+ automations for healthcare provider processes, delivered end-to-end from requirements to production — cutting operational team size and costs by replacing manual, repetitive tasks with reliable, scalable RPA.",
          stack: ["Python", "RPA", "Selenium"],
          repoUrl: GITHUB,
        },
        {
          title: "AI Agents & n8n Automations",
          description:
            "AI agents and n8n automations running in production for BasicX and its clients — integrating systems and adding intelligence to real business processes to accelerate delivery.",
          stack: ["n8n", "AI Agents", "Python", "APIs"],
          repoUrl: GITHUB,
        },
        {
          title: "Enterprise RPA Automations",
          description:
            "RPA solutions across finance, HR, insurance, health and logistics teams — from process documentation to development, dashboards and production deployment, with ongoing support.",
          stack: ["Python", "Pandas", "OpenCV", "AutoHotkey"],
          repoUrl: GITHUB,
        },
      ],
    },
    experience: {
      title: "Experience",
      workLabel: "Work",
      educationLabel: "Education",
      work: [
        {
          role: "Founder, CEO & CTO · IT Consultant",
          org: "FEROQ",
          url: GITHUB,
          location: "Earth",
          period: "2021 — Present",
        },
        {
          role: "IT Consultant",
          org: "BasicX Solutions",
          url: "https://basicx-solutions.vercel.app/",
          location: "São Paulo, SP, Brasil",
          period: "Out 2025 — Present",
        },
        {
          role: "Senior RPA Developer",
          org: "Fiibo",
          location: "Fortaleza, CE, Brazil",
          period: "Apr 2024 — Sep 2025",
        },
        {
          role: "RPA Analyst Developer",
          org: "Cadmus IT Solutions",
          location: "São Paulo, SP, Brazil",
          period: "Mar 2022 — Sep 2022",
        },
        {
          role: "Python Developer",
          org: "BPA Technologies",
          location: "São Paulo, SP, Brazil",
          period: "Dec 2020 — Mar 2022",
        },
      ],
      education: [
        {
          role: "Postgraduate — AI for Developers",
          org: "FIAP (Postech)",
          location: "Online",
          period: "Aug 2024 — Jun 2025",
        },
        {
          role: "Associate's Degree — Information Technology",
          org: "Tamwood Careers College",
          location: "Toronto, Canada",
          period: "Jul 2023 — Jan 2024",
        },
        {
          role: "Web Development — Course",
          org: "Cantek IT Program",
          location: "Toronto, Canada",
          period: "Aug 2023 — Sep 2023",
        },
        {
          role: "Bachelor's — Systems Analysis & Development",
          org: "FIAP",
          location: "São Paulo, SP, Brazil",
          period: "Feb 2020 — Dec 2021",
        },
        {
          role: "Technical Degree — Information Technology",
          org: "Senac",
          location: "Taboão da Serra, SP, Brazil",
          period: "Feb 2019 — Jul 2020",
        },
      ],
    },
    contact: {
      eyebrow: "05.",
      title: "Get in touch",
      text: "Open to opportunities with people and companies focused on changing the world through technology, automation, and innovation. Have a project in mind or want to collaborate? My inbox is always open.",
      cta: "Say hello",
    },
    footer: {
      built: "Designed & built by Felipe Roque",
      rights: "All rights reserved",
    },
    gate: {
      welcome: "Welcome",
      prompt: "Choose your language",
      themePrompt: "Choose a theme",
      light: "Light",
      dark: "Dark",
    },
    blog: {
      title: "My Posts",
      construction:
        "This page is currently under construction. Exciting things coming soon! ✨",
      loading: "Loading posts...",
      error: "Failed to fetch posts",
    },
  },

  pt: {
    nav: {
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      experience: "Experiência",
      blog: "Blog",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, meu nome é",
      title: "Engenheiro de IA & Automação",
      subtitle: "Fundador & CTO na FEROQ",
      pitch:
        "Engenheiro de software full-stack especializado em automação inteligente — construindo soluções de RPA, agentes de IA e aplicações web que geram impacto real no negócio.",
      viewWork: "Ver meu trabalho",
      getInTouch: "Entrar em contato",
      downloadCV: "Baixar CV",
    },
    about: {
      title: "Sobre mim",
      paragraphs: [
        "Sou engenheiro de software full-stack especializado em automação inteligente, com experiência prática construindo soluções de RPA, agentes de IA e aplicações web full-stack. Trabalho com Python, JavaScript e Java, bancos de dados SQL & NoSQL, APIs, Cloud & DevOps, e plataformas de automação como n8n.",
        "No último ano, venho aplicando IA diretamente em sistemas de produção e processos reais de negócio — não só na teoria — construindo agentes de IA, integrando sistemas e entregando automações que geram impacto mensurável para o negócio, incluindo reduções significativas de custo operacional e tamanho de equipe.",
        "Aprendo rápido, resolvo problemas e trabalho bem em equipe. Gosto de tecnologia, desenvolvimento de software, cloud computing, IA, games, e-sports, viagens e aprender coisas novas.",
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        { label: "Linguagens", items: ["Python", "JavaScript", "TypeScript", "Java"] },
        { label: "IA & Automação", items: ["Agentes de IA", "n8n", "RPA", "Selenium", "OpenCV"] },
        { label: "Full-Stack", items: ["Node.js", "React", "APIs REST", "Desenvolvimento Web"] },
        { label: "Dados & Cloud", items: ["SQL", "NoSQL", "Cloud", "DevOps", "Pandas"] },
      ],
    },
    projects: {
      title: "Projetos",
      note: "Trabalhos selecionados da minha experiência profissional. Demos e repositórios disponíveis sob solicitação.",
      viewLive: "Ver online →",
      items: [
        {
          title: "Suíte de RPA para Saúde",
          description:
            "Mais de 20 automações para processos de provedores de saúde, entregues de ponta a ponta — do levantamento de requisitos à produção — reduzindo o tamanho da equipe operacional e os custos ao substituir tarefas manuais e repetitivas por RPA confiável e escalável.",
          stack: ["Python", "RPA", "Selenium"],
          repoUrl: GITHUB,
        },
        {
          title: "Agentes de IA & Automações n8n",
          description:
            "Agentes de IA e automações com n8n rodando em produção para a BasicX e seus clientes — integrando sistemas e agregando inteligência a processos reais de negócio para acelerar a entrega.",
          stack: ["n8n", "Agentes de IA", "Python", "APIs"],
          repoUrl: GITHUB,
        },
        {
          title: "Automações RPA Corporativas",
          description:
            "Soluções de RPA para times de financeiro, RH, seguros, saúde e logística — da documentação de processos ao desenvolvimento, dashboards e deploy em produção, com suporte contínuo.",
          stack: ["Python", "Pandas", "OpenCV", "AutoHotkey"],
          repoUrl: GITHUB,
        },
      ],
    },
    experience: {
      title: "Experiência",
      workLabel: "Trabalho",
      educationLabel: "Formação",
      work: [
        {
          role: "Fundador, CEO & CTO · Consultor de Tecnologia",
          org: "FEROQ",
          url: GITHUB,
          location: "Terra",
          period: "2021 — Presente",
        },
        {
          role: "Consultor de Tecnologia",
          org: "BasicX Solutions",
          url: "https://basicx-solutions.vercel.app/",
          location: "São Paulo, SP, Brasil",
          period: "Out 2025 — Presente",
        },
        {
          role: "Desenvolvedor RPA Sênior",
          org: "Fiibo",
          location: "Fortaleza, CE, Brasil",
          period: "Abr 2024 — Set 2025",
        },
        {
          role: "Analista e Desenvolvedor RPA",
          org: "Cadmus IT Solutions",
          location: "São Paulo, SP, Brasil",
          period: "Mar 2022 — Set 2022",
        },
        {
          role: "Desenvolvedor Python",
          org: "BPA Technologies",
          location: "São Paulo, SP, Brasil",
          period: "Dez 2020 — Mar 2022",
        },
      ],
      education: [
        {
          role: "Pós-Graduação — IA para Desenvolvedores",
          org: "FIAP (Postech)",
          location: "Online",
          period: "Ago 2024 — Jun 2025",
        },
        {
          role: "Associate's Degree — Tecnologia da Informação",
          org: "Tamwood Careers College",
          location: "Toronto, Canadá",
          period: "Jul 2023 — Jan 2024",
        },
        {
          role: "Curso — Desenvolvimento Web",
          org: "Cantek IT Program",
          location: "Toronto, Canadá",
          period: "Ago 2023 — Set 2023",
        },
        {
          role: "Graduação — Análise e Desenvolvimento de Sistemas",
          org: "FIAP",
          location: "São Paulo, SP, Brasil",
          period: "Fev 2020 — Dez 2021",
        },
        {
          role: "Técnico — Tecnologia da Informação",
          org: "Senac",
          location: "Taboão da Serra, SP, Brasil",
          period: "Fev 2019 — Jul 2020",
        },
      ],
    },
    contact: {
      eyebrow: "05.",
      title: "Entre em contato",
      text: "Aberto a oportunidades com pessoas e empresas focadas em mudar o mundo através de tecnologia, automação e inovação. Tem um projeto em mente ou quer colaborar? Minha caixa de entrada está sempre aberta.",
      cta: "Diga olá",
    },
    footer: {
      built: "Projetado & desenvolvido por Felipe Roque",
      rights: "Todos os direitos reservados",
    },
    gate: {
      welcome: "Bem-vindo",
      prompt: "Escolha seu idioma",
      themePrompt: "Escolha um tema",
      light: "Claro",
      dark: "Escuro",
    },
    blog: {
      title: "Meus Posts",
      construction:
        "Esta página está em construção. Coisas empolgantes chegando em breve! ✨",
      loading: "Carregando posts...",
      error: "Falha ao carregar os posts",
    },
  },
};
