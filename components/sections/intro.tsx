"use client";

import { useEffect, useMemo, useState } from "react";
import GlitchText from "@/components/GlitchText";
import ProfileCard from "@/components/ProfileCard";
import { Badge } from "@/components/ui/badge";
import { Activity, Braces, Cpu, GitBranch, Sparkles, Terminal } from "lucide-react";

const copy = {
    en: {
        live: "live profile",
        command: "$ init profile --interactive",
        body: "A highly motivated Application Support Engineer with a strong foundation in web architecture and operational stability. As a dedicated problem solver, I am committed to continuously learning best practices and delivering highly reliable applications.",
        signals: [
            { label: "Education", value: "B.S. Information System (GPA 3.68) - Amikom Yogyakarta" },
            { label: "Availability", value: "Open to Application Support & Web Development" },
            { label: "Focus", value: "L2 Ops, Troubleshooting, Web Development" },
        ],
        stats: [
            { id: "experiences", value: "4", label: "major experiences" },
            { id: "liveProjects", value: "4", label: "live project links" },
        ],
        traits: ["Problem Solver", "Reliable", "Maintainable"],
        note: "Currently shaping interfaces and resolving complex operational flows that balance visual polish, network efficiency, and long-term maintainability.",
    },
    id: {
        live: "profil aktif",
        command: "$ mulai profil --interaktif",
        body: "Seorang Application Support Engineer yang sangat termotivasi dengan fondasi kuat dalam arsitektur web dan stabilitas operasional. Sebagai problem solver yang berdedikasi, saya berkomitmen untuk terus mempelajari praktik terbaik dan menghadirkan aplikasi yang sangat andal.",
        signals: [
            { label: "Pendidikan", value: "S1 Sistem Informasi (IPK 3.68) - Universitas Amikom Yogyakarta" },
            { label: "Ketersediaan", value: "Terbuka untuk peran Application Support & Web Development" },
            { label: "Fokus", value: "L2 Ops, Troubleshooting, Web Development" },
        ],
        stats: [
            { id: "experiences", value: "4", label: "pengalaman utama" },
            { id: "liveProjects", value: "4", label: "tautan proyek live" },
        ],
        traits: ["Problem Solver", "Andal", "Mudah Dirawat"],
        note: "Saat ini fokus pada penyelesaian masalah operasional kompleks dan antarmuka yang seimbang antara kualitas visual, efisiensi jaringan, dan kemudahan perawatan.",
    },
};

type ProjectSummary = {
    liveUrl?: string | null;
};

export function IntroSection({ language }: { language: "en" | "id" }) {
    const content = copy[language];
    const traitIcons = [Braces, Cpu, GitBranch];
    const [liveProjectLinks, setLiveProjectLinks] = useState("4");

    useEffect(() => {
        let isMounted = true;

        async function loadLiveProjectLinks() {
            try {
                const response = await fetch("/api/projects", {
                    headers: { Accept: "application/json" },
                });

                if (!response.ok) return;

                const payload = await response.json();
                const projects: ProjectSummary[] = Array.isArray(payload.projects) ? payload.projects : [];
                const liveLinks = projects.filter((project) => Boolean(project.liveUrl)).length;

                if (isMounted) {
                    setLiveProjectLinks(String(liveLinks));
                }
            } catch {
                // Keep the curated baseline stat if GitHub is unavailable.
            }
        }

        loadLiveProjectLinks();

        return () => {
            isMounted = false;
        };
    }, []);

    const stats = useMemo(
        () => content.stats.map((item) => (item.id === "liveProjects" ? { ...item, value: liveProjectLinks } : item)),
        [content.stats, liveProjectLinks],
    );

    return (
        <section className="w-full h-full shrink-0 flex justify-center items-start lg:items-center p-4 md:p-8 lg:px-8 lg:py-4 pb-36 lg:pb-20 overflow-y-auto lg:overflow-hidden animate-in fade-in duration-1000">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-5 items-start">
                <div className="scanline relative overflow-hidden rounded-[8px] border border-border/70 bg-card/82 p-5 lg:p-6 shadow-2xl shadow-black/10 backdrop-blur-xl">
                    <div className="mb-6 flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="h-7 rounded-[6px] border-primary/40 bg-primary/10 px-3 font-mono text-primary">
                            <Terminal className="mr-1 h-3.5 w-3.5" />
                            application.support
                        </Badge>
                        <Badge variant="secondary" className="h-7 rounded-[6px] bg-accent/18 px-3 font-mono text-accent-foreground dark:text-accent">
                            <Activity className="mr-1 h-3.5 w-3.5" />
                            {content.live}
                        </Badge>
                    </div>

                    <div className="space-y-5">
                        <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                            {content.command}
                        </p>
                        <h1 className="pb-1 font-display text-2xl font-black leading-[1.08] tracking-normal sm:text-5xl lg:text-5xl">
                            <GlitchText
                                speed={0.56}
                                enableShadows
                                className="mx-0 cursor-default text-inherit leading-[inherit] after:bg-card after:text-foreground before:bg-card before:text-foreground"
                            >
                                Dimas Abidzar Fadly
                            </GlitchText>
                        </h1>
                        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg">
                            {content.body}
                        </p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {stats.map((item) => (
                            <div key={item.label} className="rounded-[8px] border border-border/60 bg-background/55 p-4">
                                <div className="font-mono text-2xl font-bold text-primary">{item.value}</div>
                                <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid gap-4">
                    <div className="relative overflow-hidden rounded-[8px] border border-border/70 bg-card/88 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl">
                        <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-3 font-mono text-xs text-muted-foreground">
                            <span>profile.preview</span>
                            <span className="flex items-center gap-1.5 text-primary">
                                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary))]" />
                                online
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-5 sm:flex-row">
                            <ProfileCard
                                avatarUrl="/profile.jpg"
                                iconUrl=""
                                grainUrl=""
                                name="Dimas Abidzar Fadly"
                                showUserInfo={false}
                                showDetails={false}
                                showHolographicEffect={false}
                                enableMobileTilt
                                cardHeight="220px"
                                cardMaxHeight="220px"
                                cardAspectRatio="0.78"
                                innerGradient="linear-gradient(145deg,hsl(var(--primary)/0.30) 0%,hsl(var(--accent)/0.18) 100%)"
                                behindGlowColor="hsl(var(--primary) / 0.55)"
                                behindGlowSize="62%"
                                className="w-43 shrink-0 sm:w-47.5 lg:w-50.5"
                            />
                            <div className="w-full space-y-3">
                                {content.signals.map((signal) => (
                                    <div key={signal.label} className="rounded-[8px] border border-border/60 bg-background/55 p-3">
                                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{signal.label}</p>
                                        <p className="mt-1 text-sm font-semibold text-foreground">{signal.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        {content.traits.map((label, index) => {
                            const Icon = traitIcons[index];

                            return (
                                <div key={label} className="rounded-[8px] border border-border/70 bg-card/78 p-3 text-center shadow-lg shadow-black/5 backdrop-blur">
                                    <Icon className="mx-auto h-5 w-5 text-primary" />
                                    <p className="mt-2 text-xs font-semibold">{label}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="rounded-[8px] border border-accent/40 bg-accent/10 p-4 text-sm text-muted-foreground">
                        <Sparkles className="mr-2 inline h-4 w-4 text-accent" />
                        {content.note}
                    </div>
                </div>
            </div>
        </section>
    );
}
