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
        title: { en: "Web Development", id: "Pengembangan Web" },
        command: "build --frontend",
        icon: Layers3,
        description: {
            en: "Build functional, responsive, and maintainable web interfaces using modern frameworks.",
            id: "Membangun antarmuka web yang fungsional, responsif, dan mudah dipelihara menggunakan framework modern.",
        },
        skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
        title: { en: "System & Infrastructure", id: "Sistem & Infrastruktur" },
        command: "manage --environment",
        icon: Server,
        description: {
            en: "Manage databases, containerization, and operating systems to support reliable deployments.",
            id: "Mengelola database, containerization, dan sistem operasi untuk mendukung deployment yang andal.",
        },
        skills: ["Microsoft SQL Server (SSMS)", "Docker", "Linux"],
    },
    {
        title: { en: "Professional Workflow", id: "Workflow Profesional" },
        command: "execute --efficiently",
        icon: Workflow,
        description: {
            en: "Apply strong problem-solving and communication skills to collaborate effectively and resolve complex issues.",
            id: "Menerapkan kemampuan problem-solving dan komunikasi yang kuat untuk berkolaborasi secara efektif dan menyelesaikan masalah kompleks.",
        },
        skills: ["Problem Solving", "Time Management", "Effective Communication", "Adaptability & Fast Learner", "Attention to Detail", "Team Collaboration", "Multitasking Ability"],
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
        "Problem Solving": "Pemecahan Masalah",
        "Time Management": "Manajemen Waktu",
        "Effective Communication": "Komunikasi Efektif",
        "Adaptability & Fast Learner": "Adaptif & Cepat Belajar",
        "Attention to Detail": "Perhatian terhadap Detail",
        "Team Collaboration": "Kolaborasi Tim",
        "Multitasking Ability": "Kemampuan Multitasking",
    },
};

const skillIcons: Record<string, LucideIcon> = {
    JavaScript: Code2,
    TypeScript: Braces,
    React: Component,
    "Next.js": Route,
    "Tailwind CSS": Wind,
    "Microsoft SQL Server (SSMS)": Database,
    Docker: Blocks,
    Linux: Server,
    "Problem Solving": Brain,
    "Time Management": Clock,
    "Effective Communication": Users,
    "Adaptability & Fast Learner": GraduationCap,
    "Attention to Detail": Search,
    "Team Collaboration": Users,
    "Multitasking Ability": Workflow,
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
