export type Locale = "en" | "pt";

export type TimelineItem = {
  role: string;
  org: string;
  url?: string;
  location: string;
  mapsUrl?: string;
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
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    availability: string;
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
    title: string;
    text: string;
    cta: string;
  };
  footer: {
    built: string;
    rights: string;
  };
  feroq: {
    eyebrow: string;
    tagline: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    servicesTitle: string;
    services: { title: string; description: string }[];
    approachTitle: string;
    approach: { title: string; description: string }[];
    aboutTitle: string;
    aboutParagraphs: string[];
    contactTitle: string;
    contactText: string;
    contactCta: string;
    backLink: string;
  };
};

export const GITHUB = "https://github.com/feliperaro";
export const LINKEDIN = "https://www.linkedin.com/in/felipe-ramos-roque-b901a417b/";

export const content: Record<Locale, Dictionary> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, my name is",
      title: "Applied AI Engineer",
      subtitle: "AI Agents & Automation · Founder @ FEROQ",
      availability:
        "Open to remote roles worldwide · Based in Brazil (UTC−3), full overlap with US business hours · Available as an international contractor",
      pitch:
        "I build AI agents that run in production — multi-agent systems with retrieval, guardrails and tracing, serving 22 client brands on Kubernetes. Before that, 20+ RPA automations taught me what actually breaks in a business process.",
      viewWork: "View my work",
      getInTouch: "Get in touch",
      downloadCV: "Download CV",
    },
    about: {
      title: "About me",
      paragraphs: [
        "I'm an applied AI engineer who builds agents that survive contact with real users. I co-build and operate a multi-tenant AI agent platform serving 22 client brands in production on Kubernetes — a hand-written LangGraph state machine with tool calling, hybrid retrieval, per-customer memory, guardrails and human handoff, traced end to end.",
        "Before moving into agent architecture I delivered 20+ production RPA automations, which is why I approach AI differently from most: I know what actually breaks in a business workflow, not just how to prompt around it. That work removed over 500 hours of manual processing per month across multiple business fronts and handles tens of thousands of records monthly.",
        "My stack is Python and TypeScript — LangGraph, FastAPI, PostgreSQL, MongoDB and Redis, Next.js and React, with Kubernetes and CI/CD for delivery. I use Claude Code daily for development and code review, and treat reviewing and refining AI-generated code as part of the job rather than a shortcut around it. Portuguese native, English fluent, open to remote work with global teams.",
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        { label: "AI & Agents", items: ["AI Agents", "LangGraph", "LangChain", "RAG", "Guardrails"] },
        // Evaluation and tracing are the half of agent work that job posts screen
        // on and portfolios forget. Six groups also fill the 2-column grid evenly;
        // five left the last one alone in its row.
        { label: "Evaluation & Observability", items: ["Evals", "Langfuse", "LangSmith", "OpenTelemetry"] },
        { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java"] },
        { label: "Backend & Web", items: ["FastAPI", "Node.js", "React", "Next.js", "REST APIs"] },
        { label: "Automation", items: ["RPA", "n8n", "Selenium", "OpenCV"] },
        { label: "Data & Cloud", items: ["Kubernetes", "Azure OpenAI", "PostgreSQL", "MongoDB", "Redis", "CI/CD"] },
      ],
    },
    projects: {
      title: "Projects",
      note: "Client work is closed-source. The two repositories linked here are public, and the first one runs its own evaluation suite on a fresh clone without an API key.",
      viewLive: "View live →",
      items: [
        {
          title: "support-agent",
          description:
            "An open-source support agent built to show production practice rather than a demo: hybrid retrieval, tool-level access control that refuses privileged actions before identity is verified, output guardrails, and an evaluation suite that scores the agent's behavior in CI with no API key.",
          stack: ["Python", "LangGraph", "Anthropic API", "GitHub Actions"],
          repoUrl: "https://github.com/feliperaro/support-agent",
        },
        {
          title: "Multi-Tenant AI Agent Platform",
          description:
            "Conversational AI serving 22 client brands in production as isolated Kubernetes services — a hand-written LangGraph state machine with tool calling, hybrid BM25 + FAISS retrieval, per-customer memory, guardrails and human handoff, traced with Langfuse and LangSmith.",
          stack: ["LangGraph", "Python", "FastAPI", "Kubernetes"],
        },
        {
          title: "Healthcare RPA Suite",
          description:
            "20+ automations for healthcare provider processes, delivered end-to-end from requirements to production — removing over 500 hours of manual processing per month across multiple business fronts and handling tens of thousands of records monthly.",
          stack: ["Python", "RPA", "Selenium"],
        },
        {
          title: "Correios Tracking Automation",
          description:
            "Python RPA against a site with no API: drives package tracking through Selenium, with structured logging and JSON output. Small, public, and representative of the automation work that is otherwise all behind client NDAs.",
          stack: ["Python", "Selenium"],
          repoUrl: "https://github.com/feliperaro/automacao-correios",
        },
      ],
    },
    experience: {
      title: "Experience",
      workLabel: "Work",
      educationLabel: "Education",
      work: [
        // BasicX leads rather than FEROQ, even though FEROQ started earlier. It
        // is the current employed role, and it is what the CVs open with.
        {
          role: "AI Engineer",
          org: "BasicX Solutions",
          url: "https://basicx-solutions.vercel.app/",
          location: "São Paulo, SP, Brazil",
          mapsUrl: "https://maps.google.com/?q=São+Paulo,+SP,+Brazil",
          period: "Oct 2025 — Present",
        },
        {
          role: "Founder & Principal Consultant",
          org: "FEROQ",
          // Internal: Timeline renders a same-tab link for a root-relative
          // href. Without this the consultancy page has no inbound link from
          // the portfolio at all, which is how it sat orphaned.
          url: "/feroq",
          location: "Worldwide",
          period: "2021 — Present",
        },
        {
          role: "Senior RPA Developer",
          org: "Fiibo",
          url: "https://fiibo.com.br",
          location: "Fortaleza, CE, Brazil",
          mapsUrl: "https://maps.google.com/?q=Fortaleza,+CE,+Brazil",
          period: "Apr 2024 — Sep 2025",
        },
        {
          role: "RPA Analyst Developer",
          org: "Cadmus IT Solutions",
          url: "https://cadmus.com.br",
          location: "São Paulo, SP, Brazil",
          mapsUrl: "https://maps.google.com/?q=São+Paulo,+SP,+Brazil",
          period: "Mar 2022 — Sep 2022",
        },
        {
          role: "Python Developer",
          org: "BPA Technologies",
          url: "https://bpatechnologies.com/",
          location: "São Paulo, SP, Brazil",
          mapsUrl: "https://maps.google.com/?q=São+Paulo,+SP,+Brazil",
          period: "Dec 2020 — Mar 2022",
        },
      ],
      education: [
        {
          role: "Postgraduate — AI for Developers",
          org: "FIAP (Postech)",
          url: "https://postech.fiap.com.br",
          location: "São Paulo, Brazil",
          period: "Aug 2024 — Jun 2025",
        },
        {
          role: "Associate's Degree — Information Technology",
          org: "Tamwood Careers College",
          url: "https://tamwood.com",
          location: "Toronto, Canada",
          mapsUrl: "https://maps.google.com/?q=Toronto,+Canada",
          period: "Jul 2023 — Dec 2023",
        },
        {
          role: "Web Development — Course",
          org: "Cantek IT Program",
          url: "https://futuretek.go.studio/",
          location: "Toronto, Canada",
          mapsUrl: "https://maps.google.com/?q=Toronto,+Canada",
          period: "Aug 2023 — Sep 2023",
        },
        {
          role: "Bachelor's — Systems Analysis & Development",
          org: "FIAP",
          url: "https://fiap.com.br",
          location: "São Paulo, SP, Brazil",
          mapsUrl: "https://maps.google.com/?q=São+Paulo,+SP,+Brazil",
          period: "Feb 2020 — Dec 2021",
        },
        {
          role: "Technical Degree — Information Technology",
          org: "Senac",
          url: "https://sp.senac.br",
          location: "Taboão da Serra, SP, Brazil",
          mapsUrl: "https://maps.google.com/?q=Taboão+da+Serra,+SP,+Brazil",
          period: "Feb 2019 — Jul 2020",
        },
      ],
    },
    contact: {
      title: "Get in touch",
      text: "Open to opportunities with people and companies focused on changing the world through technology, automation, and innovation. Have a project in mind or want to collaborate? My inbox is always open.",
      cta: "Say hello",
    },
    footer: {
      built: "Designed & built by Felipe Ramos Roque",
      rights: "All rights reserved",
    },
    // FEROQ is a trading name, not a registered company — Felipe is the only
    // person behind it. Nothing here may imply staff, offices, or headcount,
    // and the 22-brand platform belongs to his BasicX role, not to FEROQ.
    feroq: {
      eyebrow: "Independent consultancy · Since 2021",
      tagline: "AI agents and process automation, delivered end to end.",
      intro:
        "FEROQ is the practice I run for direct client work: applied AI, intelligent process automation, and the software that has to exist around them. One engineer, accountable from the first discovery call through to production support — no handoffs, no account managers, nobody standing between you and the person writing the code.",
      ctaPrimary: "Start a conversation",
      ctaSecondary: "See my engineering work",
      servicesTitle: "What I take on",
      services: [
        {
          title: "AI agents that survive production",
          description:
            "Not demos. Agents with retrieval over your own documents, tool access scoped to what they are actually allowed to do, guardrails on what they say, and tracing so you can see why they did it. Built to be measured, not just shipped.",
        },
        {
          title: "Intelligent process automation",
          description:
            "The repetitive, high-volume work your team still does by hand — data entry, reconciliation, moving records between systems that refuse to talk to each other. Automated in Python, with monitoring and error handling for the day the upstream system changes.",
        },
        {
          title: "The software around it",
          description:
            "APIs, internal tools, dashboards and web applications in TypeScript and Python. The integration work that makes an automation genuinely useful is usually most of the job, so I do that too.",
        },
      ],
      approachTitle: "How I work",
      approach: [
        {
          title: "Discovery before code",
          description:
            "I start by watching what actually happens today, including the exceptions your team handles without thinking about them. Most automation projects fail here rather than in the code.",
        },
        {
          title: "One person accountable",
          description:
            "You work directly with me for requirements, architecture, delivery and support. Nothing gets lost being passed between a salesperson, an analyst and a developer.",
        },
        {
          title: "Built to be maintained",
          description:
            "Automated tests, CI/CD and monitoring from the start. What I deliver should keep running when I am not watching it, and make sense to whoever picks it up next.",
        },
      ],
      aboutTitle: "Who you would be working with",
      aboutParagraphs: [
        "FEROQ is me — Felipe Ramos Roque, an applied AI engineer based in São Paulo. I have taken on independent client work under this name since 2021, alongside full-time engineering roles.",
        "Day to day I co-build and operate a multi-tenant AI agent platform running in production on Kubernetes: LangGraph state machines with hybrid retrieval, guardrails and end-to-end tracing. Before moving into agent architecture I delivered 20+ production RPA automations for healthcare operations, which is why I approach AI differently from most — I know what breaks in a business process, not just how to prompt around it.",
        "Portuguese native, English fluent. I work remotely with clients worldwide from UTC−3, which overlaps a full US business day.",
      ],
      contactTitle: "Have a process worth automating?",
      contactText:
        "Tell me what the work looks like today — what your team does by hand, where it breaks, and what it costs you. If it is a good fit I will tell you how I would approach it. If it is not, I will say so.",
      contactCta: "Email me",
      backLink: "Felipe's engineering portfolio",
    },
  },

  pt: {
    nav: {
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, meu nome é",
      title: "Engenheiro de IA Aplicada",
      subtitle: "Agentes de IA & Automação · Fundador na FEROQ",
      availability:
        "Aberto a vagas remotas no mundo todo · No Brasil (UTC−3), sobreposição total com o horário comercial dos EUA · Disponível como contractor internacional",
      pitch:
        "Construo agentes de IA que rodam em produção — sistemas multiagente com retrieval, guardrails e tracing, atendendo 22 marcas em Kubernetes. Antes disso, mais de 20 automações de RPA me ensinaram o que realmente quebra em um processo de negócio.",
      viewWork: "Ver meu trabalho",
      getInTouch: "Entrar em contato",
      downloadCV: "Baixar CV",
    },
    about: {
      title: "Sobre mim",
      paragraphs: [
        "Sou engenheiro de IA aplicada e construo agentes que aguentam o contato com usuários reais. Ajudo a construir e opero uma plataforma multi-tenant de agentes de IA que atende 22 marcas em produção sobre Kubernetes — uma máquina de estados escrita à mão em LangGraph, com tool calling, retrieval híbrido, memória por cliente, guardrails e transferência para humano, com tracing de ponta a ponta.",
        "Antes de migrar para arquitetura de agentes, entreguei mais de 20 automações de RPA em produção — e é por isso que enxergo IA de um jeito diferente: sei o que de fato quebra em um processo de negócio, não apenas como contornar com prompt. Esse trabalho eliminou mais de 500 horas de processamento manual por mês em diferentes frentes do negócio e movimenta dezenas de milhares de registros mensais.",
        "Meu stack é Python e TypeScript — LangGraph, FastAPI, PostgreSQL, MongoDB e Redis, Next.js e React, com Kubernetes e CI/CD para entrega. Uso Claude Code todos os dias para desenvolvimento e code review, e trato revisar e refinar código gerado por IA como parte do trabalho, não como um atalho. Português nativo, inglês fluente, aberto a trabalho remoto com times globais.",
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        { label: "IA & Agentes", items: ["Agentes de IA", "LangGraph", "LangChain", "RAG", "Guardrails"] },
        { label: "Avaliação & Observabilidade", items: ["Evals", "Langfuse", "LangSmith", "OpenTelemetry"] },
        { label: "Linguagens", items: ["Python", "TypeScript", "JavaScript", "Java"] },
        { label: "Backend & Web", items: ["FastAPI", "Node.js", "React", "Next.js", "APIs REST"] },
        { label: "Automação", items: ["RPA", "n8n", "Selenium", "OpenCV"] },
        { label: "Dados & Cloud", items: ["Kubernetes", "Azure OpenAI", "PostgreSQL", "MongoDB", "Redis", "CI/CD"] },
      ],
    },
    projects: {
      title: "Projetos",
      note: "O trabalho para clientes é fechado. Os dois repositórios linkados aqui são públicos, e o primeiro roda a própria suíte de avaliação em um clone novo, sem chave de API.",
      viewLive: "Ver online →",
      items: [
        {
          title: "support-agent",
          description:
            "Um agente de suporte open-source feito para mostrar prática de produção, não uma demo: retrieval híbrido, controle de acesso na camada de ferramentas que recusa ações privilegiadas antes da verificação de identidade, guardrails de saída e uma suíte de avaliação que pontua o comportamento do agente na CI, sem chave de API.",
          stack: ["Python", "LangGraph", "Anthropic API", "GitHub Actions"],
          repoUrl: "https://github.com/feliperaro/support-agent",
        },
        {
          title: "Plataforma Multi-Tenant de Agentes de IA",
          description:
            "IA conversacional atendendo 22 marcas em produção como serviços isolados em Kubernetes — uma máquina de estados escrita à mão em LangGraph, com tool calling, retrieval híbrido BM25 + FAISS, memória por cliente, guardrails e transferência para humano, com tracing via Langfuse e LangSmith.",
          stack: ["LangGraph", "Python", "FastAPI", "Kubernetes"],
        },
        {
          title: "Suíte de RPA para Saúde",
          description:
            "Mais de 20 automações para processos de provedores de saúde, entregues de ponta a ponta — do levantamento de requisitos à produção — eliminando mais de 500 horas de processamento manual por mês em diferentes frentes do negócio e movimentando dezenas de milhares de registros mensais.",
          stack: ["Python", "RPA", "Selenium"],
        },
        {
          title: "Automação de Rastreio nos Correios",
          description:
            "RPA em Python contra um site sem API: conduz o rastreio de encomendas via Selenium, com logging estruturado e saída em JSON. Pequeno, público e representativo do trabalho de automação que, de resto, está todo sob NDA.",
          stack: ["Python", "Selenium"],
          repoUrl: "https://github.com/feliperaro/automacao-correios",
        },
      ],
    },
    experience: {
      title: "Experiência",
      workLabel: "Trabalho",
      educationLabel: "Formação",
      work: [
        {
          role: "Engenheiro de IA",
          org: "BasicX Solutions",
          url: "https://basicx-solutions.vercel.app/",
          location: "São Paulo, SP, Brasil",
          mapsUrl: "https://maps.google.com/?q=São+Paulo,+SP,+Brasil",
          period: "Out 2025 — Presente",
        },
        {
          role: "Fundador & Consultor Principal",
          org: "FEROQ",
          url: "/feroq",
          location: "Worldwide",
          // Bare year, to match the English entry and the CVs.
          period: "2021 — Presente",
        },
        {
          role: "Desenvolvedor RPA Sênior",
          org: "Fiibo",
          url: "https://fiibo.com.br",
          location: "Fortaleza, CE, Brasil",
          mapsUrl: "https://maps.google.com/?q=Fortaleza,+CE,+Brasil",
          period: "Abr 2024 — Set 2025",
        },
        {
          role: "Analista e Desenvolvedor RPA",
          org: "Cadmus IT Solutions",
          url: "https://cadmus.com.br",
          location: "São Paulo, SP, Brasil",
          mapsUrl: "https://maps.google.com/?q=São+Paulo,+SP,+Brasil",
          period: "Mar 2022 — Set 2022",
        },
        {
          role: "Desenvolvedor Python",
          org: "BPA Technologies",
          url: "https://bpatechnologies.com/",
          location: "São Paulo, SP, Brasil",
          mapsUrl: "https://maps.google.com/?q=São+Paulo,+SP,+Brasil",
          period: "Dez 2020 — Mar 2022",
        },
      ],
      education: [
        {
          role: "Pós-Graduação — IA para Desenvolvedores",
          org: "FIAP (Postech)",
          url: "https://postech.fiap.com.br",
          location: "São Paulo, Brasil",
          period: "Ago 2024 — Jun 2025",
        },
        {
          role: "Associate's Degree — Tecnologia da Informação",
          org: "Tamwood Careers College",
          url: "https://tamwood.com",
          location: "Toronto, Canadá",
          mapsUrl: "https://maps.google.com/?q=Toronto,+Canada",
          period: "Jul 2023 — Dez 2023",
        },
        {
          role: "Curso — Desenvolvimento Web",
          org: "Cantek IT Program",
          url: "https://futuretek.go.studio/",
          location: "Toronto, Canadá",
          mapsUrl: "https://maps.google.com/?q=Toronto,+Canada",
          period: "Ago 2023 — Set 2023",
        },
        {
          role: "Graduação — Análise e Desenvolvimento de Sistemas",
          org: "FIAP",
          url: "https://fiap.com.br",
          location: "São Paulo, SP, Brasil",
          mapsUrl: "https://maps.google.com/?q=São+Paulo,+SP,+Brasil",
          period: "Fev 2020 — Dez 2021",
        },
        {
          role: "Técnico — Tecnologia da Informação",
          org: "Senac",
          url: "https://sp.senac.br",
          location: "Taboão da Serra, SP, Brasil",
          mapsUrl: "https://maps.google.com/?q=Taboão+da+Serra,+SP,+Brasil",
          period: "Fev 2019 — Jul 2020",
        },
      ],
    },
    contact: {
      title: "Entre em contato",
      text: "Aberto a oportunidades com pessoas e empresas focadas em mudar o mundo através de tecnologia, automação e inovação. Tem um projeto em mente ou quer colaborar? Minha caixa de entrada está sempre aberta.",
      cta: "Diga olá",
    },
    footer: {
      built: "Projetado & desenvolvido por Felipe Ramos Roque",
      rights: "Todos os direitos reservados",
    },
    feroq: {
      eyebrow: "Consultoria independente · Desde 2021",
      tagline: "Agentes de IA e automação de processos, de ponta a ponta.",
      intro:
        "A FEROQ é como atendo clientes diretamente: IA aplicada, automação inteligente de processos e o software que precisa existir em volta disso. Um engenheiro, responsável desde a primeira conversa de levantamento até o suporte em produção — sem repasses, sem gerente de conta, sem ninguém entre você e quem escreve o código.",
      ctaPrimary: "Vamos conversar",
      ctaSecondary: "Ver meu trabalho de engenharia",
      servicesTitle: "O que eu assumo",
      services: [
        {
          title: "Agentes de IA que aguentam produção",
          description:
            "Não são demos. Agentes com retrieval sobre os seus próprios documentos, acesso a ferramentas restrito ao que eles realmente podem fazer, guardrails sobre o que dizem e tracing para você ver por que agiram assim. Feitos para serem medidos, não apenas entregues.",
        },
        {
          title: "Automação inteligente de processos",
          description:
            "O trabalho repetitivo e de alto volume que seu time ainda faz na mão — digitação, conciliação, mover registros entre sistemas que se recusam a conversar. Automatizado em Python, com monitoramento e tratamento de erro para o dia em que o sistema de origem mudar.",
        },
        {
          title: "O software em volta",
          description:
            "APIs, ferramentas internas, dashboards e aplicações web em TypeScript e Python. O trabalho de integração que torna uma automação realmente útil costuma ser a maior parte do serviço, então eu faço isso também.",
        },
      ],
      approachTitle: "Como eu trabalho",
      approach: [
        {
          title: "Levantamento antes do código",
          description:
            "Começo observando o que de fato acontece hoje, incluindo as exceções que seu time resolve no automático sem nem perceber. A maioria dos projetos de automação falha aí, não no código.",
        },
        {
          title: "Uma pessoa responsável",
          description:
            "Você fala diretamente comigo em requisitos, arquitetura, entrega e suporte. Nada se perde sendo repassado entre um vendedor, um analista e um desenvolvedor.",
        },
        {
          title: "Feito para ser mantido",
          description:
            "Testes automatizados, CI/CD e monitoramento desde o início. O que eu entrego precisa continuar rodando quando eu não estiver olhando, e fazer sentido para quem pegar depois.",
        },
      ],
      aboutTitle: "Com quem você vai trabalhar",
      aboutParagraphs: [
        "A FEROQ sou eu — Felipe Ramos Roque, engenheiro de IA aplicada, em São Paulo. Atendo clientes de forma independente sob esse nome desde 2021, em paralelo a posições full-time de engenharia.",
        "No dia a dia ajudo a construir e opero uma plataforma multi-tenant de agentes de IA rodando em produção sobre Kubernetes: máquinas de estado em LangGraph com retrieval híbrido, guardrails e tracing de ponta a ponta. Antes de migrar para arquitetura de agentes, entreguei mais de 20 automações de RPA em produção para operações de saúde — e é por isso que enxergo IA de um jeito diferente: sei o que quebra em um processo de negócio, não apenas como contornar com prompt.",
        "Português nativo, inglês fluente. Atendo clientes remotamente no mundo todo a partir do UTC−3, com sobreposição a um dia comercial inteiro nos EUA.",
      ],
      contactTitle: "Tem um processo que vale automatizar?",
      contactText:
        "Me conte como o trabalho funciona hoje — o que seu time faz na mão, onde quebra e quanto isso custa. Se fizer sentido, eu digo como abordaria. Se não fizer, eu falo também.",
      contactCta: "Me mande um e-mail",
      backLink: "Portfólio de engenharia do Felipe",
    },
  },
};
