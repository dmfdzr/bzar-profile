import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Activity, Braces, Cpu, GitBranch, Sparkles, Terminal } from "lucide-react";

const copy = {
    en: {
        live: "live profile",
        command: "$ init profile --interactive",
        body: "Frontend Engineer who translates UI/UX into interactive, stable, and fast web apps. I am comfortable working around APIs, data payloads, and business needs so the interface is not only attractive, but also reliable in production.",
        signals: [
            { label: "Availability", value: "Open to frontend roles" },
            { label: "Focus", value: "Interfaces, APIs, performance" },
            { label: "Runtime", value: "Next.js + JavaScript" },
        ],
        stats: [
            { value: "3", label: "major experiences" },
            { value: "4", label: "live project links" },
            { value: "100%", label: "frontend ownership" },
        ],
        traits: ["Clean UI", "API aware", "Maintainable"],
        note: "Currently shaping interfaces that balance visual polish, network efficiency, and long-term maintainability.",
    },
    id: {
        live: "profil aktif",
        command: "$ mulai profil --interaktif",
        body: "Frontend Engineer yang menerjemahkan UI/UX menjadi aplikasi web interaktif, stabil, dan cepat. Saya nyaman bekerja di area API, payload data, dan kebutuhan bisnis supaya antarmuka tidak hanya menarik, tapi juga andal di produksi.",
        signals: [
            { label: "Ketersediaan", value: "Terbuka untuk peran frontend" },
            { label: "Fokus", value: "Antarmuka, API, performa" },
            { label: "Runtime", value: "Next.js + JavaScript" },
        ],
        stats: [
            { value: "3", label: "pengalaman utama" },
            { value: "4", label: "tautan proyek live" },
            { value: "100%", label: "kepemilikan frontend" },
        ],
        traits: ["UI Rapi", "Paham API", "Mudah Dirawat"],
        note: "Saat ini fokus membentuk antarmuka yang seimbang antara kualitas visual, efisiensi jaringan, dan kemudahan perawatan jangka panjang.",
    },
};

export function HeroSection({ language }: { language: "en" | "id" }) {
    const content = copy[language];
    const traitIcons = [Braces, Cpu, GitBranch];

    return (
        <section className="w-full h-full shrink-0 flex justify-center items-start lg:items-center p-4 md:p-8 lg:px-8 lg:py-4 pb-36 lg:pb-20 overflow-y-auto lg:overflow-hidden animate-in fade-in duration-1000">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-5 items-start">
                <div className="scanline relative overflow-hidden rounded-[8px] border border-border/70 bg-card/82 p-5 lg:p-6 shadow-2xl shadow-black/10 backdrop-blur-xl">
                    <div className="mb-6 flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="h-7 rounded-[6px] border-primary/40 bg-primary/10 px-3 font-mono text-primary">
                            <Terminal className="mr-1 h-3.5 w-3.5" />
                            frontend.engineer
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
                        <h1 className="pb-1 font-display text-4xl font-black leading-[1.08] tracking-normal sm:text-5xl lg:text-6xl">
                            Dimas Abidzar
                            <span className="block pb-1 bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                                Fadly
                            </span>
                        </h1>
                        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg">
                            {content.body}
                        </p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {content.stats.map((item) => (
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
                            <div className="shrink-0 relative group">
                                <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent opacity-35 blur-xl transition duration-700 group-hover:opacity-65" />
                                <Avatar className="relative h-36 w-36 border-4 border-background shadow-2xl ring-1 ring-border sm:h-44 sm:w-44 lg:h-48 lg:w-48">
                                    <AvatarImage src="/profile.jpg" alt="Dimas Abidzar Fadly" className="object-cover" />
                                    <AvatarFallback className="text-2xl md:text-4xl bg-primary text-primary-foreground font-bold">DA</AvatarFallback>
                                </Avatar>
                            </div>
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
