import Link from "next/link";
import { Github, Linkedin, Mail, Terminal, UserRoundCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const copy = {
    en: {
        command: "$ connect --intent collaboration",
        title: "Let's build something useful.",
        description: "Open to career opportunities, web development projects, IT operations, or product collaboration that needs a fast, clear, production-ready interface.",
        availability: "Availability",
        availabilityValue: "Open for Application Support & Web Development roles",
        response: "Response style",
        responseValue: "Async, practical, no fluff",
        primary: "Send Email",
        github: "Open GitHub profile",
        linkedin: "Open LinkedIn profile",
        direct: "Direct channels",
        directValue: "Email, GitHub, and LinkedIn are one tap away.",
    },
    id: {
        command: "$ kontak --tujuan kolaborasi",
        title: "Mari bangun sesuatu yang berguna.",
        description: "Terbuka untuk peluang karier, proyek web development, operasional IT, atau kolaborasi produk yang butuh antarmuka cepat, jelas, dan siap produksi.",
        availability: "Ketersediaan",
        availabilityValue: "Terbuka untuk peran Application Support & Web Development",
        response: "Gaya respons",
        responseValue: "Asinkron, praktis, tanpa basa-basi berlebihan",
        primary: "Kirim Email",
        github: "Buka profil GitHub",
        linkedin: "Buka profil LinkedIn",
        direct: "Kanal langsung",
        directValue: "Email, GitHub, dan LinkedIn bisa dibuka dalam satu klik.",
    },
};

export function ContactSection({ language }: { language: "en" | "id" }) {
    const content = copy[language];

    return (
        <section className="w-full h-full shrink-0 flex justify-center items-start lg:items-center p-4 pb-36 pt-4 md:p-8 md:pb-36 lg:p-8 lg:pb-0 overflow-y-auto lg:overflow-hidden">
            <div className="max-w-5xl w-full grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.88fr] lg:items-center">
                <div className="space-y-5">
                    <div className="rounded-[8px] border border-border/70 bg-card/82 p-5 md:p-7 shadow-xl shadow-black/5 backdrop-blur">
                        <div className="mb-5 flex items-center gap-2 font-mono text-xs text-primary">
                            <Terminal className="h-4 w-4" />
                            {content.command}
                        </div>
                        <h2 className="font-display text-3xl font-black tracking-normal md:text-5xl">{content.title}</h2>
                        <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                            {content.description}
                        </p>
                    </div>
                </div>

                <div className="rounded-[8px] border border-border/70 bg-card/82 p-5 md:p-6 shadow-2xl shadow-black/10 backdrop-blur">
                    <div className="flex items-center gap-3 border-b border-border/60 pb-5">
                        <div className="rounded-[8px] border border-border/70 bg-background/70 p-3 text-primary">
                            <UserRoundCheck className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-display text-2xl font-bold">{content.availability}</p>
                            <p className="text-sm text-muted-foreground">{content.availabilityValue}</p>
                        </div>
                    </div>

                    <div className="my-5 rounded-[8px] border border-accent/40 bg-accent/10 p-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{content.response}</p>
                        <p className="mt-1 text-sm font-semibold">{content.responseValue}</p>
                    </div>

                    <div className="mb-5 rounded-[8px] border border-border/70 bg-background/55 p-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{content.direct}</p>
                        <p className="mt-1 text-sm font-semibold">{content.directValue}</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 sm:grid sm:grid-cols-[1fr_auto_auto] sm:justify-normal sm:gap-3">
                        <Button asChild className="w-full rounded-[8px] gap-2 px-5 text-sm sm:w-auto">
                            <Link href="mailto:dimasfadly01@gmail.com">
                                {content.primary} <Mail size={16} />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="icon" className="rounded-[8px] hover:bg-primary hover:text-primary-foreground">
                            <Link href="https://github.com/dmfdzr" target="_blank" rel="noopener noreferrer" aria-label={content.github}>
                                <Github size={20} />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="icon" className="rounded-[8px] hover:bg-primary hover:text-primary-foreground">
                            <Link href="https://linkedin.com/in/dimasabidzarfadly" target="_blank" rel="noopener noreferrer" aria-label={content.linkedin}>
                                <Linkedin size={20} />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
