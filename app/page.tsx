"use client";

import Image from "next/image";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { IntroSection } from "@/components/sections/intro";
import { SkillsSection } from "@/components/sections/skills";
import { WorksSection } from "@/components/sections/works";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Circle, FileDown } from "lucide-react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [language, setLanguage] = useState<"en" | "id">("en");

  const copy = {
    en: {
      shellTitle: "interactive frontend console",
      next: ["Run Skills Scan", "Open Work Log", "Sync Projects", "Start Conversation", "Reboot Intro"],
      sections: ["Intro", "Skills", "Works", "Projects", "Contact"],
      commands: ["whoami", "capabilities", "case-studies", "projects-api", "connect"],
      languageLabel: "Switch to Indonesian",
      cvLabel: "Download ATS CV",
    },
    id: {
      shellTitle: "konsol frontend interaktif",
      next: ["Pindai Skill", "Buka Riwayat Kerja", "Sinkron Proyek", "Mulai Percakapan", "Ulangi Intro"],
      sections: ["Intro", "Skill", "Karya", "Proyek", "Kontak"],
      commands: ["profil", "kapabilitas", "studi-kasus", "projects-api", "kontak"],
      languageLabel: "Ganti ke English",
      cvLabel: "Unduh CV ATS",
    },
  }[language];

  const handleNext = () => {
    setStep((prev) => (prev < 4 ? prev + 1 : 0));
  };

  const buttonContent = () => {
    switch (step) {
      case 0: return <>{copy.next[0]} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" /></>;
      case 1: return <>{copy.next[1]} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" /></>;
      case 2: return <>{copy.next[2]} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" /></>;
      case 3: return <>{copy.next[3]} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" /></>;
      case 4: return <><ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" /> {copy.next[4]}</>;
      default: return "Next";
    }
  };

  return (
    <div className="console-grid h-dvh w-full flex flex-col overflow-hidden bg-background text-foreground font-sans relative">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background)/0.55),hsl(var(--background)/0.9))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background to-transparent z-10" />

      <div className="w-full px-4 pt-4 md:pt-6 z-50 shrink-0 pointer-events-none">
        <header className="max-w-5xl mx-auto flex items-center justify-between gap-3 px-3 py-2 md:px-4 md:py-3 bg-card/78 backdrop-blur-2xl border border-border/70 rounded-[8px] shadow-2xl shadow-black/10 pointer-events-auto transition-all">
          <div className="flex items-center gap-3 min-w-0">
            <div className="hover:scale-105 transition-transform duration-300 flex items-center justify-center">
             <Image
               src="/favicon.ico" 
               alt="Dimas Logo" 
               width={40}
               height={40}
               className="w-9 h-9 md:w-10 md:h-10 rounded-[6px] shadow-sm object-contain bg-background border border-border/50"
             />
            </div>
            <div className="hidden sm:block min-w-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">bzar.profile</p>
              <p className="truncate font-display text-sm font-semibold">{copy.shellTitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-muted/55 px-3 md:px-4 py-2 rounded-[8px] border border-border/60 backdrop-blur-md">
            <div className="hidden md:flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="text-primary">$</span>
              <span>{copy.commands[step]}</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2" aria-label={`Current section: ${copy.sections[step]}`}>
              {[0, 1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setStep(i)}
                  aria-label={`Go to ${copy.sections[i]}`}
                  className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ease-out ${
                    step === i
                      ? "w-5 md:w-8 bg-primary shadow-sm shadow-primary/50"
                      : step > i
                      ? "w-1.5 md:w-2 bg-primary/40"
                      : "w-1.5 md:w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs md:text-sm font-semibold text-foreground/80 hidden sm:block min-w-12 transition-all duration-300">
              {copy.sections[step]}
            </span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-9 rounded-[8px] px-2.5 font-mono text-xs sm:px-3"
            >
              <a href="/dimas-abidzar-fadly-ats-cv.pdf" download aria-label={copy.cvLabel}>
                <FileDown className="h-4 w-4 sm:mr-1.5" />
                <span className="hidden sm:inline">CV</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage((current) => (current === "en" ? "id" : "en"))}
              aria-label={copy.languageLabel}
              className="h-9 rounded-[8px] px-3 font-mono text-xs"
            >
              {language === "en" ? "ID" : "EN"}
            </Button>
            <ModeToggle />
          </div>

        </header>
      </div>

      <main className="min-h-0 flex-1 relative overflow-hidden w-full">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-linear-to-b from-background to-transparent z-10" />

        <div
          className="flex h-full min-h-0 w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${step * 100}%)` }}
        >
          <IntroSection language={language} />
          <SkillsSection language={language} />
          <WorksSection language={language} />
          <ProjectsSection language={language} />
          <ContactSection language={language} />
        </div>
      </main>

      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-50">
        <Button
          size="lg" 
          onClick={handleNext}
          className="group rounded-[8px] px-5 md:px-7 py-6 md:py-7 shadow-2xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 text-sm md:text-base font-bold"
        >
          <Circle className="mr-2 h-2.5 w-2.5 fill-current text-accent" />
          {buttonContent()}
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 md:h-1.5 bg-muted z-50">
        <div
          className="h-full bg-linear-to-r from-primary via-accent to-primary transition-all duration-700 ease-in-out"
          style={{ width: `${((step + 1) / 5) * 100}%` }}
        />
      </div>

    </div>
  );
}
