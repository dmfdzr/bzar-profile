import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LogoLoop, { LogoItem } from "@/components/LogoLoop";
import {
    AlertTriangle,
    Blocks,
    Bot,
    Brain,
    Braces,
    Clock,
    Cloud,
    Code2,
    Component,
    Database,
    DatabaseZap,
    Gauge,
    GitBranch,
    GraduationCap,
    Handshake,
    Layers3,
    Network,
    Rocket,
    Route,
    Search,
    Server,
    Sparkles,
    Users,
    Wind,
    Workflow,
    Wrench,
    Zap,
    type LucideIcon,
} from "lucide-react";

const capabilities = [
    {
        title: { en: "Interface Craft", id: "Racikan Antarmuka" },
        command: "render --pixel-ready",
        icon: Layers3,
        description: {
            en: "Build polished, responsive UI from design systems and product requirements.",
            id: "Membangun UI responsif dan rapi dari design system serta kebutuhan produk.",
        },
        skills: ["JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "ShadcnUI"],
    },
    {
        title: { en: "API-Aware Frontend", id: "Frontend Paham API" },
        command: "fetch --resilient",
        icon: DatabaseZap,
        description: {
            en: "Integrate REST APIs with clear loading, error, and data-state behavior.",
            id: "Mengintegrasikan REST API dengan status loading, error, dan data yang jelas.",
        },
        skills: ["RESTful APIs", "Supabase", "Prisma ORM", "PostgreSQL", "Payload Mapping", "Error States", "SQL Context"],
    },
    {
        title: { en: "Performance Mindset", id: "Pola Pikir Performa" },
        command: "audit --runtime",
        icon: Gauge,
        description: {
            en: "Keep interfaces lightweight, stable, and usable across device constraints.",
            id: "Menjaga antarmuka tetap ringan, stabil, dan nyaman di berbagai perangkat.",
        },
        skills: ["DOM Efficiency", "Responsive UI", "Core UX", "Maintainability"],
    },
    {
        title: { en: "Product Workflow", id: "Workflow Produk" },
        command: "ship --with-team",
        icon: Workflow,
        description: {
            en: "Translate ambiguity into scoped work with clean handoff and iteration.",
            id: "Menerjemahkan kebutuhan yang masih abu-abu menjadi pekerjaan yang jelas dan bisa diiterasi.",
        },
        skills: ["Problem Solving", "Time Management", "Fast Learner", "Team Collaboration"],
    },
    {
        title: { en: "Delivery & Version Control", id: "Delivery & Version Control" },
        command: "release --tracked",
        icon: GitBranch,
        description: {
            en: "Manage source control and deploy frontend applications through reliable hosting workflows.",
            id: "Mengelola source control dan deployment aplikasi frontend melalui workflow hosting yang reliable.",
        },
        skills: ["Git", "Node.js", "Vercel", "Render"],
    },
    {
        title: { en: "AI-Assisted Development", id: "Pengembangan Berbantuan AI" },
        command: "augment --dev-workflow",
        icon: Bot,
        description: {
            en: "Use AI tools to accelerate coding, debugging, refactoring, documentation, and implementation planning while keeping engineering judgment in control.",
            id: "Menggunakan AI untuk mempercepat coding, debugging, refactoring, dokumentasi, dan perencanaan implementasi dengan tetap menjaga keputusan engineering secara sadar.",
        },
        skills: ["Codex", "GPT-5.5", "Google Gemini"],
    },
];

const sectionCopy = {
    en: {
        title: "Skills as a working system.",
        description: "Instead of a plain tool list, this section maps how I work: building UI, understanding API data, keeping performance healthy, and communicating clearly with the team.",
        principle: "The working principle is simple: UI should be clear for users, maintainable for the next developer, and avoid runtime waste from unnecessary requests or renders.",
    },
    id: {
        title: "Skill sebagai sistem kerja.",
        description: "Daripada sekadar daftar tools, bagian ini memetakan cara saya bekerja: membangun UI, memahami data dari API, menjaga performa, dan tetap komunikatif di tim.",
        principle: "Prinsip kerjanya sederhana: UI harus jelas untuk pengguna, mudah dirawat developer berikutnya, dan tidak membuang biaya runtime lewat request atau render yang tidak perlu.",
    },
};

const skillLabels: Record<"en" | "id", Record<string, string>> = {
    en: {},
    id: {
        "Payload Mapping": "Pemetaan Payload",
        Supabase: "Supabase",
        "Prisma ORM": "Prisma ORM",
        PostgreSQL: "PostgreSQL",
        "Node.js": "Node.js",
        "Error States": "Status Error",
        "SQL Context": "Konteks SQL",
        "DOM Efficiency": "Efisiensi DOM",
        "Responsive UI": "UI Responsif",
        "Core UX": "Dasar UX",
        Maintainability: "Mudah Dirawat",
        "Problem Solving": "Pemecahan Masalah",
        "Time Management": "Manajemen Waktu",
        "Fast Learner": "Cepat Belajar",
        "Team Collaboration": "Kolaborasi Tim",
    },
};

const skillIcons: Record<string, LucideIcon> = {
    JavaScript: Code2,
    TypeScript: Braces,
    "Next.js": Route,
    "Tailwind CSS": Wind,
    ShadcnUI: Component,
    "RESTful APIs": Network,
    Supabase: Database,
    "Prisma ORM": DatabaseZap,
    PostgreSQL: Database,
    "Payload Mapping": Server,
    "Error States": AlertTriangle,
    "SQL Context": DatabaseZap,
    "DOM Efficiency": Zap,
    "Responsive UI": Layers3,
    "Core UX": Search,
    Maintainability: Wrench,
    "Problem Solving": Brain,
    "Time Management": Clock,
    "Fast Learner": GraduationCap,
    "Team Collaboration": Users,
    Git: GitBranch,
    "Node.js": Server,
    Vercel: Cloud,
    Render: Rocket,
    Codex: Bot,
    "GPT-5.5": Sparkles,
    "Google Gemini": Sparkles,
};

const skillLogoItems: LogoItem[] = Array.from(new Set(capabilities.flatMap((capability) => capability.skills))).map((skill) => {
    const Icon = skillIcons[skill] ?? Blocks;

    return {
        title: skill,
        ariaLabel: skill,
        node: (
            <div className="inline-flex h-10 items-center gap-2 rounded-[8px] border border-border/70 bg-background/72 px-3 font-mono text-xs font-semibold text-foreground shadow-sm backdrop-blur">
                <span className="flex h-6 min-w-6 items-center justify-center rounded-[6px] bg-primary/12 px-1.5 text-primary">
                    <Icon className="h-3.5 w-3.5" />
                </span>
                <span>{skill}</span>
            </div>
        ),
    };
});

export function SkillsSection({ language }: { language: "en" | "id" }) {
    const content = sectionCopy[language];

    return (
        <section className="w-full h-full min-h-0 shrink-0 flex justify-center items-start overflow-y-auto px-4 pb-40 pt-6 md:px-8 md:pt-8 lg:px-8 lg:pt-6">
            <div className="max-w-6xl w-full space-y-5 lg:space-y-4">
                <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr] md:items-end">
                    <div className="space-y-3">
                        <Badge variant="outline" className="h-7 rounded-[6px] border-primary/40 bg-primary/10 px-3 font-mono text-primary">
                            <Blocks className="mr-1 h-3.5 w-3.5" />
                            capabilities.map()
                        </Badge>
                        <h2 className="font-display text-3xl font-black tracking-normal lg:text-4xl">
                            {content.title}
                        </h2>
                    </div>
                    <p className="text-sm leading-7 text-muted-foreground md:text-base">
                        {content.description}
                    </p>
                </div>

                <div className="rounded-[8px] border border-border/70 bg-card/76 p-3 shadow-xl shadow-black/5 backdrop-blur">
                    <LogoLoop
                        logos={skillLogoItems}
                        speed={72}
                        logoHeight={40}
                        gap={14}
                        pauseOnHover
                        fadeOut
                        scaleOnHover
                        ariaLabel="Skill logos"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {capabilities.map(({ title, command, icon: Icon, description, skills }) => (
                        <Card key={command} className="group rounded-[8px] border-border/70 bg-card/82 py-0 shadow-xl shadow-black/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                            <CardHeader className="border-b border-border/60 p-5 lg:p-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="font-mono text-xs text-primary">$ {command}</p>
                                        <CardTitle className="mt-2 font-display text-lg font-bold leading-tight lg:text-xl">{title[language]}</CardTitle>
                                    </div>
                                    <div className="rounded-[8px] border border-border/70 bg-background/70 p-3 text-primary transition-transform duration-300 group-hover:scale-105">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4 p-5 lg:p-4">
                                <p className="text-sm leading-6 text-muted-foreground">{description[language]}</p>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <Badge key={skill} variant="secondary" className="h-7 rounded-[6px] bg-muted/70 px-3 transition-colors hover:bg-primary hover:text-primary-foreground">
                                            {skillLabels[language][skill] ?? skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="rounded-[8px] border border-accent/40 bg-accent/10 p-4">
                        <div className="flex items-start gap-3">
                            <Handshake className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                            <p className="text-sm leading-6 text-muted-foreground">
                                {content.principle}
                            </p>
                        </div>
                </div>
            </div>
        </section>
    );
}
