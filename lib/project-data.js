export const FALLBACK_PROJECTS = [
  {
    name: "sparta-fe",
    title: "SPARTA Building",
    description: {
      en: "Modernized frontend for a building maintenance and construction documentation platform.",
      id: "Frontend modern untuk platform maintenance gedung dan dokumentasi konstruksi.",
    },
    sourceUrl: "https://github.com/dmfdzr/sparta-fe",
    liveUrl: "https://sparta-building.vercel.app",
    language: "TypeScript",
    stack: ["Next.js", "TypeScript", "REST API", "Tailwind CSS"],
  },
  {
    name: "sparta-frontend",
    title: "SPARTA Landing",
    description: {
      en: "Landing experience for the SPARTA Building product surface.",
      id: "Landing experience untuk permukaan produk SPARTA Building.",
    },
    sourceUrl: "https://github.com/dmfdzr/sparta-frontend",
    liveUrl: "https://sparta-alfamart.vercel.app",
    language: "JavaScript",
    stack: ["JavaScript", "Frontend", "Responsive UI"],
  },
  {
    name: "relive-frontend",
    title: "ReLive Health",
    description: {
      en: "Mental health service concept built from research, UI/UX flow, and frontend delivery.",
      id: "Konsep layanan mental health dari riset, alur UI/UX, sampai delivery frontend.",
    },
    sourceUrl: "https://github.com/dmfdzr/relive-frontend",
    liveUrl: "https://relive-health.vercel.app",
    language: "JavaScript",
    stack: ["React", "JavaScript", "Product Research", "UI/UX"],
  },
  {
    name: "freelance",
    title: "YakinKerja",
    description: {
      en: "Freelance marketplace concept with validated UI flow and frontend implementation.",
      id: "Konsep marketplace freelance dengan alur UI tervalidasi dan implementasi frontend.",
    },
    sourceUrl: "https://github.com/dmfdzr/freelance",
    liveUrl: "https://freelance-lake.vercel.app",
    language: "TypeScript",
    stack: ["React", "TypeScript", "UI/UX", "Frontend"],
  },
  {
    name: "aull-shop",
    title: "Aull Shop",
    description: {
      en: "E-commerce storefront experiment with catalog-oriented interaction.",
      id: "Eksperimen storefront e-commerce dengan interaksi berbasis katalog.",
    },
    sourceUrl: "https://github.com/dmfdzr/aull-shop",
    liveUrl: "https://skzmart.vercel.app",
    language: "TypeScript",
    stack: ["TypeScript", "E-commerce", "Frontend"],
  },
  {
    name: "bzar-profile",
    title: "Bzar Profile",
    description: {
      en: "Interactive personal profile built with a console-inspired portfolio flow.",
      id: "Profil personal interaktif dengan flow portfolio bergaya console.",
    },
    sourceUrl: "https://github.com/dmfdzr/bzar-profile",
    liveUrl: "https://bzar-nine.vercel.app",
    language: "TypeScript",
    stack: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
  },
];

export const PROJECT_REPO_PRIORITY = FALLBACK_PROJECTS.map((project) => project.name);
