"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Activity,
    ExternalLink,
    Github,
    GitPullRequest,
    Loader2,
    MonitorUp,
    RadioTower,
    RefreshCw,
    TerminalSquare,
} from "lucide-react";

type ProjectFilter = "all" | "live" | "latest";

const copy = {
    en: {
        title: "Projects shipped and traceable.",
        description: "This panel reads public repository data from GitHub and enriches matching repos with clearer portfolio metadata.",
        badge: "projects.api",
        sourceGithub: "Live from GitHub",
        sourceUnavailable: "GitHub unavailable",
        loading: "Syncing repositories",
        retry: "Retry",
        live: "Live",
        source: "Source",
        latest: "Latest",
        updated: "Updated",
        stack: "Stack",
        empty: "Project data is not available right now.",
        filteredEmpty: "No projects match this filter.",
        stats: ["projects", "live links", "latest"],
    },
    id: {
        title: "Proyek yang pernah dikerjakan.",
        description: "Panel ini membaca data repository publik dari GitHub dan memperkaya repo yang cocok dengan metadata portfolio yang lebih jelas.",
        badge: "projects.api",
        sourceGithub: "Langsung dari GitHub",
        sourceUnavailable: "GitHub tidak tersedia",
        loading: "Sinkronisasi repository",
        retry: "Coba lagi",
        live: "Live",
        source: "Source",
        latest: "Terbaru",
        updated: "Diupdate",
        stack: "Stack",
        empty: "Data proyek dari GitHub belum tersedia saat ini.",
        filteredEmpty: "Tidak ada proyek yang cocok dengan filter ini.",
        stats: ["proyek", "link live", "terbaru"],
    },
};

type Project = {
    name: string;
    title: string;
    description: {
        en: string;
        id: string;
    };
    sourceUrl: string;
    liveUrl?: string | null;
    language: string;
    stack: string[];
    updatedAt?: string;
    stars?: number;
    forks?: number;
};

function formatDate(value: string | undefined, language: "en" | "id") {
    if (!value) return "-";

    return new Intl.DateTimeFormat(language === "id" ? "id-ID" : "en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(new Date(value));
}

function normalizeProjects(projects: Project[]) {
    return projects.map((project) => ({
        ...project,
        description: project.description ?? {
            en: "Public repository from the GitHub profile.",
            id: "Repository publik dari profil GitHub.",
        },
        stack: project.stack?.length ? project.stack : [project.language].filter(Boolean),
    }));
}

function isLatestProject(updatedAt: string | undefined) {
    if (!updatedAt) return false;

    const updatedDate = new Date(updatedAt);
    const twoMonthsAgo = new Date();
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

    return updatedDate >= twoMonthsAgo;
}

export function ProjectsSection({ language }: { language: "en" | "id" }) {
    const content = copy[language];
    const [projects, setProjects] = useState<Project[]>([]);
    const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
    const [isAvailable, setIsAvailable] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const loadProjects = async () => {
        setIsLoading(true);

        try {
            const response = await fetch("/api/projects", {
                headers: { Accept: "application/json" },
            });

            if (!response.ok) {
                throw new Error(`projects-${response.status}`);
            }

            const payload = await response.json();
            const nextProjects = Array.isArray(payload.projects) ? normalizeProjects(payload.projects) : [];

            setProjects(nextProjects);
            setIsAvailable(true);
        } catch {
            setProjects([]);
            setIsAvailable(false);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadProjects();
    }, []);

    const stats = useMemo(() => {
        const liveLinks = projects.filter((project) => project.liveUrl).length;
        const latest = projects.filter((project) => isLatestProject(project.updatedAt)).length;

        return [
            { value: projects.length, label: content.stats[0], filter: "all" as const },
            { value: liveLinks, label: content.stats[1], filter: "live" as const },
            { value: latest, label: content.stats[2], filter: "latest" as const },
        ];
    }, [content.stats, projects]);

    const visibleProjects = useMemo(() => {
        if (activeFilter === "live") {
            return projects.filter((project) => project.liveUrl);
        }

        if (activeFilter === "latest") {
            return projects.filter((project) => isLatestProject(project.updatedAt));
        }

        return projects;
    }, [activeFilter, projects]);

    return (
        <section className="w-full h-full min-h-0 shrink-0 flex justify-center items-start overflow-y-auto px-4 pb-40 pt-6 md:px-8 md:pt-8 lg:px-8 lg:pt-6">
            <div className="max-w-6xl w-full flex flex-col gap-5 lg:gap-4">
                <div className="grid gap-4 md:grid-cols-[0.92fr_1.08fr] md:items-end">
                    <div className="flex flex-col gap-3">
                        <Badge variant="outline" className="h-7 w-fit rounded-[6px] border-primary/40 bg-primary/10 px-3 font-mono text-primary">
                            <TerminalSquare className="mr-1 h-3.5 w-3.5" />
                            {content.badge}
                        </Badge>
                        <h2 className="font-display text-3xl font-black tracking-normal lg:text-4xl">{content.title}</h2>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-sm leading-7 text-muted-foreground md:text-base">{content.description}</p>
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge variant={isAvailable ? "default" : "secondary"} className="h-7 rounded-[6px] px-3 font-mono">
                                <RadioTower className="mr-1 h-3.5 w-3.5" />
                                {isAvailable ? content.sourceGithub : content.sourceUnavailable}
                            </Badge>
                            {isLoading && (
                                <Badge variant="outline" className="h-7 rounded-[6px] px-3 font-mono">
                                    <Loader2 className="mr-1 h-3.5 w-3.5 animate-spin" />
                                    {content.loading}
                                </Badge>
                            )}
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={loadProjects}
                                disabled={isLoading}
                                className="h-7 rounded-[6px] px-3 font-mono text-xs"
                            >
                                <RefreshCw className={`mr-1.5 h-3.5 w-3.5 ${isLoading ? "animate-spin" : ""}`} />
                                {content.retry}
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    {stats.map((item) => (
                        <button
                            key={item.label}
                            type="button"
                            onClick={() => setActiveFilter(item.filter)}
                            aria-pressed={activeFilter === item.filter}
                            className={`rounded-[8px] border p-3 text-left shadow-lg shadow-black/5 backdrop-blur transition-all duration-300 sm:p-4 ${
                                activeFilter === item.filter
                                    ? "border-primary/60 bg-primary/10"
                                    : "border-border/70 bg-card/78 hover:border-primary/40 hover:bg-card"
                            }`}
                        >
                            <div className="font-mono text-xl font-bold text-primary sm:text-2xl">{item.value}</div>
                            <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px]">{item.label}</div>
                        </button>
                    ))}
                </div>

                {projects.length === 0 ? (
                    <div className="rounded-[8px] border border-border/70 bg-card/82 p-6 text-sm text-muted-foreground">{content.empty}</div>
                ) : visibleProjects.length === 0 ? (
                    <div className="rounded-[8px] border border-border/70 bg-card/82 p-6 text-sm text-muted-foreground">{content.filteredEmpty}</div>
                ) : (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {visibleProjects.map((project) => (
                            <Card key={project.name} className="group rounded-[8px] border-border/70 bg-card/82 py-0 shadow-xl shadow-black/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-primary/10">
                                <CardHeader className="border-b border-border/60 p-4">
                                    <div className="mb-2 flex items-center justify-between gap-3">
                                        <div className="rounded-[8px] border border-border/70 bg-background/70 p-3 transition-transform duration-300 group-hover:scale-105">
                                            <MonitorUp className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {isLatestProject(project.updatedAt) && (
                                                <Badge variant="secondary" className="rounded-[6px] bg-accent/18 text-accent-foreground dark:text-accent">
                                                    {content.latest}
                                                </Badge>
                                            )}
                                            <Badge variant="outline" className="rounded-[6px] bg-muted/50 font-mono">
                                                {project.language}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardTitle className="font-display text-lg font-bold leading-tight group-hover:text-primary">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="truncate font-mono text-xs">
                                        github.com/dmfdzr/{project.name}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex h-full flex-col gap-3 p-4">
                                    <p className="text-sm leading-6 text-muted-foreground">{project.description[language]}</p>

                                    <div className="rounded-[8px] border border-border/60 bg-background/55 p-3">
                                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{content.stack}</p>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {project.stack.slice(0, 4).map((tech) => (
                                                <Badge key={tech} variant="outline" className="rounded-[6px] bg-muted/50">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex min-w-0 items-center gap-2 text-xs text-muted-foreground">
                                        <Activity size={14} />
                                        <span className="truncate">{content.updated}: {formatDate(project.updatedAt, language)}</span>
                                        {typeof project.stars === "number" && (
                                            <span className="ml-auto flex items-center gap-1">
                                                stars {project.stars}
                                            </span>
                                        )}
                                        {typeof project.forks === "number" && (
                                            <span className="flex items-center gap-1">
                                                <GitPullRequest size={13} /> {project.forks}
                                            </span>
                                        )}
                                    </div>

                                    <div className="mt-auto flex flex-wrap gap-2 pt-1">
                                        {project.liveUrl && (
                                            <Button asChild size="sm" className="rounded-[8px]">
                                                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="mr-1.5 h-4 w-4" />
                                                    {content.live}
                                                </Link>
                                            </Button>
                                        )}
                                        <Button asChild size="sm" variant="outline" className="rounded-[8px]">
                                            <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-1.5 h-4 w-4" />
                                                {content.source}
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
