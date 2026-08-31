"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LogoLoop, { LogoItem } from "@/components/LogoLoop";
import {
    AlertTriangle,
    Blocks,
    Bot,
    Brain,
    Braces,
    ChevronLeft,
    ChevronRight,
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
    LayoutTemplate,
    Network,
    Rocket,
    Route,
    Search,
    Server,
    ServerCog,
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
        title: { en: "Frontend Development", id: "Frontend Development" },
        command: "build --frontend",
        icon: LayoutTemplate,
        description: {
            en: "Build functional, responsive, and maintainable web interfaces using modern frameworks.",
            id: "Membangun antarmuka web yang fungsional, responsif, dan mudah dipelihara menggunakan framework modern.",
        },
        skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
        title: { en: "Backend & API", id: "Backend & API" },
        command: "serve --backend",
        icon: DatabaseZap,
        description: {
            en: "Develop robust server-side logic, design relational databases, and construct scalable RESTful APIs.",
            id: "Mengembangkan logika sisi server yang kuat, mendesain database relasional, dan membangun RESTful API yang skalabel.",
        },
        skills: ["Node.js", "RESTful API", "Prisma ORM", "PostgreSQL", "Supabase"],
    },
    {
        title: { en: "System & Infrastructure", id: "Sistem & Infrastruktur" },
        command: "manage --environment",
        icon: Server,
        description: {
            en: "Manage databases, containerization, and deployments to support reliable applications.",
            id: "Mengelola database, containerization, dan deployment untuk mendukung aplikasi yang andal.",
        },
        skills: ["Microsoft SQL Server (SSMS)", "Docker", "Linux", "Vercel", "Render"],
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
        gallery: "Capabilities carousel",
        previous: "Previous capabilities",
        next: "Next capabilities",
    },
    id: {
        title: "Skill sebagai sistem kerja.",
        description: "Daripada sekadar daftar tools, bagian ini memetakan cara saya bekerja: membangun UI, memahami data dari API, menjaga performa, dan tetap komunikatif di tim.",
        principle: "Prinsip kerjanya sederhana: UI harus jelas untuk pengguna, mudah dirawat developer berikutnya, dan tidak membuang biaya runtime lewat request atau render yang tidak perlu.",
        gallery: "Carousel kapabilitas",
        previous: "Kapabilitas sebelumnya",
        next: "Kapabilitas berikutnya",
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
    "Node.js": ServerCog,
    "RESTful API": Network,
    "Prisma ORM": Database,
    PostgreSQL: Database,
    Supabase: DatabaseZap,
    "Microsoft SQL Server (SSMS)": Database,
    Docker: Blocks,
    Linux: Server,
    Vercel: Cloud,
    Render: Cloud,
    "Problem Solving": Brain,
    "Time Management": Clock,
    "Effective Communication": Users,
    "Adaptability & Fast Learner": GraduationCap,
    "Attention to Detail": Search,
    "Team Collaboration": Users,
    "Multitasking Ability": Workflow,
};

const skillLogoUrls: Record<string, string> = {
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "Prisma ORM": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    Supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    "Microsoft SQL Server (SSMS)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    Render: "https://cdn.simpleicons.org/render"
};

const skillLogoItems: LogoItem[] = Array.from(new Set(capabilities.flatMap((capability) => capability.skills))).map((skill) => {
    const Icon = skillIcons[skill] ?? Blocks;
    const logoUrl = skillLogoUrls[skill];
    const isDarkLogo = skill === "Next.js" || skill === "Vercel";

    return {
        title: skill,
        ariaLabel: skill,
        node: (
            <div className="inline-flex h-10 items-center gap-2 rounded-[8px] border border-border/70 bg-background/72 px-3 font-mono text-xs font-semibold text-foreground shadow-sm backdrop-blur">
                <span className={`flex h-6 min-w-6 items-center justify-center rounded-[6px] ${logoUrl ? 'bg-transparent px-0' : 'bg-primary/12 px-1.5 text-primary'}`}>
                    {logoUrl ? (
                        <img 
                            src={logoUrl} 
                            alt={`${skill} logo`} 
                            className={`h-4 w-4 object-contain ${isDarkLogo ? 'dark:invert' : ''}`}
                            loading="lazy"
                        />
                    ) : (
                        <Icon className="h-3.5 w-3.5" />
                    )}
                </span>
                <span>{skill}</span>
            </div>
        ),
    };
});

export function SkillsSection({ language }: { language: "en" | "id" }) {
    const content = sectionCopy[language];

    const carouselRef = useRef<HTMLDivElement | null>(null);

    const scrollSkills = (direction: "left" | "right") => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        carousel.scrollBy({
            left: direction === "left" ? -carousel.clientWidth * 0.86 : carousel.clientWidth * 0.86,
            behavior: "smooth",
        });
    };

    return (
        <section id="skills" className="w-full lg:h-full shrink-0 flex flex-col justify-center items-center px-4 py-12 md:px-8 md:py-16 lg:px-8 lg:py-0">
            <div className="max-w-6xl min-w-0 w-full space-y-5 lg:space-y-4">
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

                <div className="flex min-w-0 flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{content.gallery}</h3>
                        <span className="h-px flex-1 bg-border/70" />
                        <div className="hidden items-center gap-2 md:flex">
                            <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={() => scrollSkills("left")}
                                aria-label={content.previous}
                                className="size-9 rounded-[8px] border-border/60 bg-background/45 backdrop-blur"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={() => scrollSkills("right")}
                                aria-label={content.next}
                                className="size-9 rounded-[8px] border-border/60 bg-background/45 backdrop-blur"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div
                        ref={carouselRef}
                        data-section-swipe-skip="true"
                        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden px-4 pt-2 pb-3 [scrollbar-width:none] md:-mx-8 md:px-8 [&::-webkit-scrollbar]:hidden"
                    >
                        {capabilities.map(({ title, command, icon: Icon, description, skills }) => (
                            <Card key={command} className="group flex w-[82vw] shrink-0 snap-center min-w-0 flex-col rounded-[8px] border-border/70 bg-card/82 py-0 shadow-xl shadow-black/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-primary/10 sm:w-105 lg:w-97.5">
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
                                <CardContent className="flex flex-1 flex-col space-y-4 p-5 lg:p-4">
                                    <p className="text-sm leading-6 text-muted-foreground">{description[language]}</p>
                                    <div className="mt-auto pt-2 flex flex-wrap gap-2">
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
                </div>


            </div>
        </section>
    );
}
