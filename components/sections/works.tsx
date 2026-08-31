"use client";

import Link from "next/link";
import { useRef } from "react";
import ElectricBorder from "@/components/ElectricBorder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Briefcase,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Code2,
    Database,
    ExternalLink,
    Github,
    Layout,
    Link as LinkIcon,
    Milestone,
    Search,
    Sparkles,
    TerminalSquare,
} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const experiences = [
    {
        id: "insignia",
        company: "PT. Kreasi Media Asia (Insignia.co.id)",
        role: {
            en: "L2 Ops",
            id: "L2 Ops",
        },
        period: { en: "August 2026 - Present", id: "Agustus 2026 - Sekarang" },
        badge: { en: "Contract", id: "Kontrak" },
        icon: TerminalSquare,
        accent: "text-blue-500",
        color: "#3b82f6",
        command: "monitor production-ops",
        metric: {
            en: "Stability and reliability of critical production environments",
            id: "Stabilitas dan keandalan lingkungan produksi kritis",
        },
        impact: {
            en: "Specialized in deep technical investigations, minimizing resolution times, and acting as the primary bridge between users and L3.",
            id: "Spesialisasi dalam investigasi teknis mendalam, meminimalkan waktu penyelesaian, dan menjadi penghubung utama antara pengguna dan L3.",
        },
        scope: {
            en: ["Incident Investigation", "Escalation Management", "Technical Debt Mitigation"],
            id: ["Investigasi Insiden", "Manajemen Eskalasi", "Mitigasi Technical Debt"],
        },
        description: {
            en: "Served as a L2 Ops responsible for maintaining the stability and reliability of critical production environments, with a specific focus on complex transactional flows and order management systems.",
            id: "Bertugas sebagai L2 Ops yang bertanggung jawab menjaga stabilitas dan keandalan lingkungan produksi kritis, dengan fokus khusus pada alur transaksional kompleks dan sistem manajemen pesanan.",
        },
        details: {
            en: [
                "Incident Investigation & Troubleshooting: Analyzed system logs, inspected network request/response payloads, and performed client-side debugging to accurately isolate root causes from error reports.",
                "L2 to L3 Escalation Management: Triaged system anomalies and technical constraints within transactional flows, ensuring all escalated tickets included clear reproduction steps and precise technical context for the developer team.",
                "Operational Technical Debt Mitigation: Identified recurring error patterns in production and provided an actionable feedback loop to L3 Engineering for longterm system and architectural improvements.",
            ],
            id: [
                "Investigasi Insiden & Troubleshooting: Menganalisis log sistem, memeriksa payload request/response jaringan, dan melakukan debugging sisi klien untuk mengisolasi akar penyebab dari laporan error secara akurat.",
                "Manajemen Eskalasi L2 ke L3: Melakukan triase anomali sistem dan kendala teknis dalam alur transaksional, memastikan semua tiket yang dieskalasi menyertakan langkah reproduksi yang jelas dan konteks teknis yang tepat untuk tim developer.",
                "Mitigasi Technical Debt Operasional: Mengidentifikasi pola error berulang di produksi dan memberikan feedback yang dapat ditindaklanjuti ke tim L3 Engineering untuk peningkatan sistem dan arsitektur jangka panjang.",
            ],
        },
        stack: ["Log Analysis", "Debugging", "Payload Inspection", "Troubleshooting"],
        links: [],
    },
    {
        id: "sat",
        company: "PT. Sumber Alfaria Trijaya, Tbk.",
        role: {
            en: "Building Maintenance Digital Store",
            id: "Building Maintenance Digital Store",
        },
        period: { en: "November 2025 - May 2026", id: "November 2025 - Mei 2026" },
        badge: { en: "Internship", id: "Magang" },
        icon: Briefcase,
        accent: "text-primary",
        color: "#22d3ee",
        command: "deploy enterprise-ui",
        metric: {
            en: "National-scale construction documentation platform",
            id: "Platform dokumentasi konstruksi berskala nasional",
        },
        impact: {
            en: "Supported legacy maintenance and modern architecture migration for SPARTA Building.",
            id: "Mendukung maintenance legacy dan migrasi arsitektur modern untuk SPARTA Building.",
        },
        scope: {
            en: ["Legacy maintenance", "Modernization", "API integration"],
            id: ["Maintenance legacy", "Modernisasi", "Integrasi API"],
        },
        description: {
            en: "Participated in a frontend development internship for SPARTA Building, an enterprise platform used to document and manage construction phases for new Alfamart stores.",
            id: "Mengikuti magang frontend development untuk SPARTA Building, platform enterprise untuk mendokumentasikan dan mengelola tahapan konstruksi toko Alfamart baru.",
        },
        details: {
            en: [
                "Core System Development: Developed and maintained the application using Vanilla JavaScript, focusing on efficient DOM manipulation and lightweight runtime performance.",
                "Modernization & Migration: Migrated the platform to a modern stack using Next.js and TypeScript, establishing modular component architecture and strict type safety for long-term scalability.",
                "API Integration: Integrated RESTful APIs across legacy and modern platforms, managing efficient payload handling, real-time data exchange, and dynamic content rendering.",
                "Performance & Code Quality: Applied clean code principles and optimized frontend rendering to meet business requirements while minimizing technical debt during migration.",
            ],
            id: [
                "Core System Development: Mengembangkan dan menjaga aplikasi menggunakan Vanilla JavaScript dengan fokus pada manipulasi DOM yang efisien dan runtime ringan.",
                "Modernization & Migration: Memigrasikan platform ke stack modern menggunakan Next.js dan TypeScript, membangun arsitektur komponen modular dan type safety untuk skalabilitas jangka panjang.",
                "API Integration: Mengintegrasikan RESTful API pada platform legacy dan modern, termasuk payload handling, pertukaran data real-time, dan rendering konten dinamis.",
                "Performance & Code Quality: Menerapkan clean code dan mengoptimalkan rendering frontend sesuai kebutuhan bisnis sambil menekan technical debt selama proses migrasi.",
            ],
        },
        stack: ["Javascript", "Next.js", "TypeScript", "RESTful API", "Tailwind CSS"],
        links: [
            { label: { en: "Live App", id: "Aplikasi Live" }, url: "https://sparta-building.vercel.app", icon: ExternalLink, variant: "default" },
            { label: { en: "Landing Page", id: "Landing Page" }, url: "https://sparta-alfamart.vercel.app", icon: ExternalLink, variant: "default" },
            { label: { en: "Next.js Source", id: "Kode Next.js" }, url: "https://github.com/dmfdzr/sparta-fe.git", icon: Github, variant: "outline" },
            { label: { en: "VanillaJS Source", id: "Kode VanillaJS" }, url: "https://github.com/dmfdzr/sparta-frontend.git", icon: Github, variant: "outline" },
        ],
    },
    {
        id: "indocyber",
        company: "PT. Indocyber Global Teknologi",
        role: { en: "Microsoft SQL Server", id: "Microsoft SQL Server" },
        period: { en: "September 2025 - October 2025", id: "September 2025 - Oktober 2025" },
        badge: { en: "Work Training", id: "Pelatihan Kerja" },
        icon: Database,
        accent: "text-emerald-500",
        color: "#34d399",
        command: "query relational-data",
        metric: { en: "Database design and reporting context", id: "Konteks desain database dan pelaporan" },
        impact: {
            en: "Built stronger data fundamentals for frontend work that depends on accurate backend contracts.",
            id: "Memperkuat fondasi data untuk pekerjaan frontend yang bergantung pada kontrak backend yang akurat.",
        },
        scope: {
            en: ["Relational design", "Query practice", "Reporting context"],
            id: ["Desain relasional", "Latihan query", "Konteks pelaporan"],
        },
        description: {
            en: "Focused on relational database management and practical backend integration fundamentals.",
            id: "Berfokus pada pengelolaan database relasional dan dasar integrasi backend secara praktis.",
        },
        details: {
            en: [
                "Learned practical database management using Microsoft SQL Server and SSMS.",
                "Designed and optimized relational databases to support real-world applications.",
                "Practiced backend database integration using SQL queries and stored procedures.",
                "Focused on data handling, query performance, and reporting for work-related scenarios.",
            ],
            id: [
                "Mempelajari pengelolaan database secara praktis menggunakan Microsoft SQL Server dan SSMS.",
                "Mendesain dan mengoptimalkan database relasional untuk mendukung aplikasi nyata.",
                "Berlatih integrasi backend database menggunakan SQL query dan stored procedure.",
                "Berfokus pada pengolahan data, performa query, dan pelaporan untuk skenario kerja.",
            ],
        },
        stack: ["SSMS", "SQL Queries"],
        links: [
            { label: { en: "View Course", id: "Lihat Materi" }, url: "https://drive.google.com/drive/folders/1yi5vJ5lA0d8Lzp14RBzpyqeGDpLPdmat?usp=sharing", icon: ExternalLink, variant: "default" },
        ],
    },
    {
        id: "kinema",
        company: "PT. Kinema Systrans",
        role: { en: "Web Development & UI/UX Design", id: "Web Development & UI/UX Design" },
        period: { en: "February 2024 - June 2024", id: "Februari 2024 - Juni 2024" },
        badge: { en: "Independent Study", id: "Studi Independen" },
        icon: Search,
        accent: "text-accent",
        color: "#f59e0b",
        command: "prototype product-flow",
        metric: { en: "Research, design, prototype, frontend", id: "Riset, desain, prototipe, frontend" },
        impact: {
            en: "Connected end-to-end product design and frontend development through the national Studi Independen program.",
            id: "Menghubungkan desain produk end-to-end dan pengembangan frontend melalui program Studi Independen nasional.",
        },
        scope: {
            en: ["Product research", "UI/UX design", "Frontend delivery"],
            id: ["Riset produk", "Desain UI/UX", "Delivery frontend"],
        },
        description: {
            en: "Participated in an intensive study focused on end-to-end product design and frontend web development.",
            id: "Mengikuti studi intensif yang berfokus pada desain produk end-to-end dan pengembangan web frontend.",
        },
        details: {
            en: [
                "Participated in the national Studi Independen program focused on product design and frontend web development.",
                "Handled product research for freelance and mental health service website concepts.",
                "Designed wireframes and high-fidelity interfaces in Figma.",
                "Created clickable prototypes to validate user flows before implementation.",
                "Developed frontend pages based on the validated design direction.",
            ],
            id: [
                "Mengikuti program Studi Independen nasional yang berfokus pada desain produk dan pengembangan web frontend.",
                "Melakukan product research untuk konsep website freelance dan layanan mental health.",
                "Mendesain wireframe dan high-fidelity antarmuka menggunakan Figma.",
                "Membuat prototipe interaktif untuk memvalidasi alur pengguna sebelum implementasi.",
                "Mengembangkan halaman frontend berdasarkan arah desain yang sudah divalidasi.",
            ],
        },
        stack: ["Figma", "Prototyping", "Product Research", "UI/UX Principles", "Frontend Development"],
        links: [
            { label: { en: "ReLive Project", id: "Proyek ReLive" }, url: "https://relive-health.vercel.app/", icon: ExternalLink, variant: "outline" },
            { label: { en: "ReLive Source", id: "Kode ReLive" }, url: "https://github.com/dmfdzr/relive-frontend.git", icon: Github, variant: "outline" },
            { label: { en: "YakinKerja Project", id: "Proyek YakinKerja" }, url: "https://freelance-lake.vercel.app/", icon: ExternalLink, variant: "outline" },
            { label: { en: "YakinKerja Source", id: "Kode YakinKerja" }, url: "https://github.com/dmfdzr/freelance.git", icon: Github, variant: "outline" },
        ],
    },
];

const stackLabels: Record<"en" | "id", Record<string, string>> = {
    en: {},
    id: {
        "Product Research": "Riset Produk",
        Prototyping: "Prototyping",
        "UI/UX Principles": "Prinsip UI/UX",
        "Frontend Development": "Pengembangan Frontend",
        "Log Analysis": "Analisis Log",
        "Debugging": "Debugging",
        "Payload Inspection": "Inspeksi Payload",
        "Troubleshooting": "Troubleshooting",
    },
};

export function WorksSection({ language }: { language: "en" | "id" }) {
    const sectionCopy = {
        en: {
            title: "Experience with signal.",
            description: "Each card works like a case-study snapshot: work context, key contribution, stack, and links that can be verified directly.",
            signal: "signal",
            viewDetails: "View Details",
            keyContributions: "Key Contributions",
            technologies: "Technologies & Tools",
            projectLinks: "Project Links",
            impact: "Impact",
            scope: "Scope",
            overview: "Overview",
            gallery: "Experience carousel",
            previous: "Previous experiences",
            next: "Next experiences",
        },
        id: {
            title: "Pengalaman yang jelas sinyalnya.",
            description: "Setiap card dibuat seperti snapshot case study: konteks pekerjaan, kontribusi utama, stack, dan link yang bisa langsung diverifikasi.",
            signal: "sinyal",
            viewDetails: "Lihat Detail",
            keyContributions: "Kontribusi Utama",
            technologies: "Teknologi & Tools",
            projectLinks: "Tautan Proyek",
            impact: "Dampak",
            scope: "Cakupan",
            overview: "Ringkasan",
            gallery: "Carousel pengalaman",
            previous: "Pengalaman sebelumnya",
            next: "Pengalaman berikutnya",
        },
    }[language];

    const carouselRef = useRef<HTMLDivElement | null>(null);

    const scrollWorks = (direction: "left" | "right") => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        carousel.scrollBy({
            left: direction === "left" ? -carousel.clientWidth * 0.86 : carousel.clientWidth * 0.86,
            behavior: "smooth",
        });
    };

    return (
        <section className="w-full h-full min-h-0 shrink-0 flex justify-center items-start lg:items-center overflow-x-hidden overflow-y-auto lg:overflow-hidden px-4 pb-8 pt-4 lg:pb-0 md:px-8 md:pb-10 md:pt-7 lg:px-8 lg:pt-0">
            <div className="max-w-6xl min-w-0 w-full flex flex-col gap-4">
                <div className="grid gap-3 md:grid-cols-[0.9fr_1.1fr] md:items-end">
                    <div className="space-y-2">
                        <Badge variant="outline" className="h-7 rounded-[6px] border-primary/40 bg-primary/10 px-3 font-mono text-primary">
                            <TerminalSquare className="mr-1 h-3.5 w-3.5" />
                            case-studies.json
                        </Badge>
                        <h2 className="font-display text-2xl font-black tracking-normal md:text-3xl lg:text-4xl">{sectionCopy.title}</h2>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                        {sectionCopy.description}
                    </p>
                </div>

                <div className="flex min-w-0 flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{sectionCopy.gallery}</h3>
                        <span className="h-px flex-1 bg-border/70" />
                        <div className="hidden items-center gap-2 md:flex">
                            <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={() => scrollWorks("left")}
                                aria-label={sectionCopy.previous}
                                className="size-9 rounded-[8px] border-border/60 bg-background/45 backdrop-blur"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={() => scrollWorks("right")}
                                aria-label={sectionCopy.next}
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
                        {experiences.map((exp, index) => {
                            const Icon = exp.icon;

                            return (
                                <Dialog key={exp.id}>
                                    <div className="group flex w-[82vw] shrink-0 snap-center min-w-0 overflow-hidden rounded-[8px] p-px sm:w-105 lg:w-97.5 lg:overflow-visible">
                                        <ElectricBorder
                                            color={exp.color}
                                            speed={0.42}
                                            chaos={0.055}
                                            borderRadius={8}
                                            className="flex flex-1 min-w-0 rounded-[8px]"
                                        >
                                            <DialogTrigger asChild>
                                                <Card className="flex flex-1 flex-col h-full min-w-0 cursor-pointer rounded-[8px] border-border/70 bg-card/86 py-0 shadow-xl shadow-black/5 backdrop-blur transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-primary/10">
                                            <CardHeader className="border-b border-border/60 p-4 lg:p-4">
                                                <div className="mb-3 flex items-center justify-between">
                                                    <div className="rounded-[8px] border border-border/70 bg-background/70 p-2.5 transition-transform duration-300 group-hover:scale-105">
                                                        <Icon className={`h-5 w-5 md:h-6 md:w-6 ${exp.accent}`} />
                                                    </div>
                                                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                                                </div>
                                                <p className="font-mono text-xs text-primary">$ {exp.command}</p>
                                                <CardTitle className="mt-1.5 font-display text-lg font-bold leading-tight group-hover:text-primary md:text-xl">
                                                    {exp.role[language]}
                                                </CardTitle>
                                                <CardDescription className="font-medium text-foreground/80">
                                                    {exp.company}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="flex flex-1 flex-col gap-3 p-4 md:gap-4 md:p-5">
                                                <p className="overflow-hidden text-sm leading-6 text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">{exp.description[language]}</p>
                                                <div className="rounded-[8px] border border-border/60 bg-background/55 p-3">
                                                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{sectionCopy.signal}</p>
                                                    <p className="mt-1 text-sm font-semibold">{exp.metric[language]}</p>
                                                </div>
                                                <div className="mt-auto flex items-center text-xs text-muted-foreground gap-2">
                                                    <Calendar size={14} /> {exp.period[language]}
                                                </div>
                                                <div className="flex items-center text-sm font-semibold text-primary">
                                                    {sectionCopy.viewDetails} <ExternalLink size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </CardContent>
                                            </Card>
                                        </DialogTrigger>
                                    </ElectricBorder>
                                </div>

                                <DialogContent
                                    onEscapeKeyDown={(event) => event.preventDefault()}
                                    onInteractOutside={(event) => event.preventDefault()}
                                    className="w-[calc(100vw-2rem)] max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-2rem)] lg:max-w-312 xl:max-w-336 max-h-[88vh] overflow-hidden rounded-[8px] border-border/70 bg-background/96 p-0 shadow-2xl backdrop-blur-2xl"
                                >
                                    <div className="max-h-[88vh] overflow-y-auto">
                                        <div className="relative overflow-hidden border-b border-border/60 bg-card/90 p-5 md:p-6">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--primary)/0.16),transparent_24rem)]" />
                                            <DialogHeader className="relative">
                                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                                    <Badge variant="secondary" className="rounded-[6px] bg-primary/10 text-primary border-primary/20">
                                                        {exp.badge[language]}
                                                    </Badge>
                                                    <span className="font-mono text-xs text-muted-foreground">$ {exp.command}</span>
                                                </div>
                                                <DialogTitle className="font-display text-2xl font-bold md:text-4xl">{exp.role[language]}</DialogTitle>
                                                <DialogDescription className="text-base font-semibold text-foreground/90">
                                                    {exp.company}
                                                </DialogDescription>
                                            </DialogHeader>
                                        </div>

                                        <div className="grid gap-5 p-5 md:grid-cols-[0.9fr_1.1fr] md:p-6">
                                            <aside className="space-y-4">
                                                <div className="rounded-[8px] border border-border/70 bg-card/70 p-4">
                                                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{sectionCopy.signal}</p>
                                                    <p className="mt-1 text-sm font-semibold">{exp.metric[language]}</p>
                                                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                                                        <Calendar size={16} />
                                                        <span>{exp.period[language]}</span>
                                                    </div>
                                                </div>

                                                <div className="rounded-[8px] border border-accent/40 bg-accent/10 p-4">
                                                    <h4 className="font-bold flex items-center gap-2">
                                                        <Sparkles size={18} className="text-accent" /> {sectionCopy.impact}
                                                    </h4>
                                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{exp.impact[language]}</p>
                                                </div>

                                                <div className="rounded-[8px] border border-border/70 bg-card/70 p-4">
                                                    <h4 className="font-bold flex items-center gap-2">
                                                        <Milestone size={18} className="text-primary" /> {sectionCopy.scope}
                                                    </h4>
                                                    <div className="mt-3 flex flex-wrap gap-2">
                                                        {exp.scope[language].map((scope) => (
                                                            <Badge key={scope} variant="outline" className="rounded-[6px] bg-muted/50">
                                                                {scope}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </aside>

                                            <div className="space-y-5">
                                                <div className="rounded-[8px] border border-border/70 bg-card/70 p-4">
                                                    <h4 className="font-bold flex items-center gap-2">
                                                        <TerminalSquare size={18} className="text-primary" /> {sectionCopy.overview}
                                                    </h4>
                                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{exp.description[language]}</p>
                                                </div>

                                                <div className="rounded-[8px] border border-border/70 bg-card/70 p-4">
                                                    <h4 className="font-bold flex items-center gap-2">
                                                        <Code2 size={18} className="text-primary" /> {sectionCopy.keyContributions}
                                                    </h4>
                                                    <ol className="mt-4 grid gap-3">
                                                        {exp.details[language].map((detail, detailIndex) => (
                                                            <li key={detail} className="grid grid-cols-[auto_1fr] gap-3 text-sm text-muted-foreground">
                                                                <span className="flex h-7 w-7 items-center justify-center rounded-[6px] border border-primary/30 bg-primary/10 font-mono text-xs font-bold text-primary">
                                                                    {detailIndex + 1}
                                                                </span>
                                                                <span className="pt-1">{detail}</span>
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </div>

                                                <div className="rounded-[8px] border border-border/70 bg-card/70 p-4">
                                                    <h4 className="font-bold flex items-center gap-2">
                                                        <Layout size={18} className="text-primary" /> {sectionCopy.technologies}
                                                    </h4>
                                                    <div className="mt-3 flex flex-wrap gap-2">
                                                        {exp.stack.map((tech) => (
                                                            <Badge key={tech} variant="outline" className="rounded-[6px] bg-muted/50">
                                                                {stackLabels[language][tech] ?? tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {exp.links.length > 0 && (
                                            <div className="border-t border-border/60 bg-muted/25 p-5 md:p-6">
                                                <h4 className="font-bold flex items-center gap-2">
                                                    <LinkIcon size={18} className="text-primary" /> {sectionCopy.projectLinks}
                                                </h4>
                                                <div className="mt-3 flex flex-wrap gap-3">
                                                    {exp.links.map((link) => {
                                                        const LinkIconComponent = link.icon;

                                                        return (
                                                            <Button
                                                                key={link.label.en}
                                                                asChild
                                                                variant={link.variant as "default" | "outline"}
                                                                className="gap-2 rounded-[8px] shadow-md transition-all duration-300 hover:-translate-y-0.5"
                                                            >
                                                                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                                                                    <LinkIconComponent size={16} /> {link.label[language]}
                                                                </Link>
                                                            </Button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </DialogContent>
                            </Dialog>
                        );
                    })}
                </div>
            </div>
            </div>
        </section>
    );
}
