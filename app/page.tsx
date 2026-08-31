"use client";

import Image from "next/image";
import type { PointerEvent, TouchEvent } from "react";
import { useEffect, useRef, useState } from "react";
import LetterGlitch from "@/components/LetterGlitch";
import { ModeToggle } from "@/components/mode-toggle";
import { IntroSection } from "@/components/sections/intro";
import { SkillsSection } from "@/components/sections/skills";
import { WorksSection } from "@/components/sections/works";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import { Button } from "@/components/ui/button";
import { FileDown, Terminal, ChevronDown } from "lucide-react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [language, setLanguage] = useState<"en" | "id">("en");
  const [isLoading, setIsLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Establishing connection...");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const mainRef = useRef<HTMLElement | null>(null);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const touchSwipeStart = useRef<{ x: number; y: number } | null>(null);

  const copy = {
    en: {
      shellTitle: "interactive operations console",
      sections: ["Intro", "Skills", "Works", "Projects", "Contact"],
      commands: ["whoami", "capabilities", "case-studies", "projects-api", "connect"],
      languageLabel: "Switch to Indonesian",
      cvLabel: "Download ATS CV",
    },
    id: {
      shellTitle: "konsol operasional interaktif",
      sections: ["Intro", "Skill", "Karya", "Proyek", "Kontak"],
      commands: ["profil", "kapabilitas", "studi-kasus", "projects-api", "kontak"],
      languageLabel: "Ganti ke English",
      cvLabel: "Unduh CV ATS",
    },
  }[language];

  const sectionIds = ["intro", "skills", "works", "projects", "contact"];

  const goNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const goPrev = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const finishSwipe = (start: { x: number; y: number } | null, endX: number, endY: number) => {
    if (!start) return;

    const deltaX = endX - start.x;
    const deltaY = endY - start.y;
    const isHorizontalSwipe = Math.abs(deltaX) > 44 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2;

    if (!isHorizontalSwipe) return;

    if (deltaX < 0) {
      goNext();
      return;
    }

    goPrev();
  };

  const shouldSkipSectionSwipe = (target: EventTarget | null) => {
    if (!target) return false;
    let node = target as Node;
    if (node.nodeType === 3) {
      node = node.parentNode as Node;
    }
    return node instanceof Element && Boolean(node.closest("[data-section-swipe-skip='true']"));
  };

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    if (shouldSkipSectionSwipe(event.target)) return;

    const touch = event.touches[0];
    if (!touch) return;

    swipeStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const touch = event.changedTouches[0];
    const start = swipeStart.current;
    swipeStart.current = null;

    if (!touch) return;

    finishSwipe(start, touch.clientX, touch.clientY);
  };

  useEffect(() => {
    const t1 = setTimeout(() => setLoadingText("Authenticating session..."), 600);
    const t2 = setTimeout(() => setLoadingText("Loading capabilities..."), 1200);
    const t3 = setTimeout(() => setLoadingText("System ready."), 1800);
    const t4 = setTimeout(() => setIsLoading(false), 2200);
    const t5 = setTimeout(() => setShowLoading(false), 3000); // 800ms for transition to finish
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (window.innerWidth >= 1024) return;
      
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = sectionIds.indexOf(id);
          if (index !== -1) {
            setStep(index);
          }
        }
      });
    }, { threshold: 0.3 });

    const sections = document.querySelectorAll("main section[id]");
    sections.forEach(s => observer.observe(s));

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 opacity-[0.5] dark:opacity-[1]">
        <LetterGlitch
          glitchColors={["#0f766e", "#22d3ee", "#f59e0b"]}
          glitchSpeed={88}
          centerVignette={false}
          outerVignette
          smooth
          characters="01{}[]()/\\<>_+=NEXTJS_TYPESCRIPT_API"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background)/0.72),hsl(var(--background)/0.94))]" />

      {showLoading && (
        <div className={`absolute inset-0 z-[100] flex flex-col items-center justify-center font-mono transition-all duration-700 ease-in-out ${isLoading ? "opacity-100" : "opacity-0 scale-105 pointer-events-none"}`}>
          <div className="z-10 flex flex-col items-center gap-6">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-[10px] border border-primary/30 bg-primary/5 shadow-[0_0_15px_rgba(var(--primary),0.2)]">
              <Image
                src="/favicon.ico" 
                alt="Dimas Logo" 
                width={40}
                height={40}
                className="w-10 h-10 rounded-[6px] object-contain animate-pulse"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-primary/80">{loadingText}</p>
              <div className="flex gap-1.5">
                <span className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                <span className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                <span className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-primary animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`absolute inset-0 z-10 console-grid flex flex-col overflow-hidden text-foreground font-sans transition-all duration-1000 ease-out ${isLoading ? "scale-[0.98] opacity-0 blur-sm pointer-events-none" : "scale-100 opacity-100 blur-0"}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background to-transparent z-10" />

      <div className="w-full px-4 pt-3 md:pt-5 z-50 shrink-0 pointer-events-none">
        <header className="max-w-5xl mx-auto flex items-center justify-between gap-3 rounded-[28px] border border-border/30 bg-background/58 px-3 py-2 shadow-[0_18px_60px_hsl(var(--foreground)/0.10),inset_0_1px_0_hsl(var(--foreground)/0.08)] backdrop-blur-2xl pointer-events-auto transition-all dark:bg-background/42 dark:border-border/20 md:rounded-4xl md:px-4 md:py-3">
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

          {/* Mobile Dropdown (hidden on desktop) */}
          <div className="relative flex lg:hidden items-center bg-muted/55 rounded-[8px] border border-border/60 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-3 px-3 py-2 hover:bg-background/40 transition-colors rounded-[8px]"
            >
              <div className="hidden md:flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="text-primary">$</span>
                <span>{copy.commands[step]}</span>
              </div>
              
              <div className="flex items-center gap-2">
                 <span className="text-xs font-semibold text-foreground/80">
                   {copy.sections[step]}
                 </span>
                 <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {isMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsMenuOpen(false)} 
                  aria-hidden="true" 
                />
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-card/95 backdrop-blur-xl border border-border/60 rounded-[12px] p-1.5 shadow-2xl flex flex-col gap-1 z-50 animate-in fade-in zoom-in-95 duration-200">
                  {copy.sections.map((sectionName, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        const el = document.getElementById(sectionIds[i]);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                        setStep(i);
                        setIsMenuOpen(false);
                      }}
                      className={`text-left px-3 py-2.5 text-xs rounded-[8px] transition-colors ${
                        step === i 
                          ? 'bg-primary/15 text-primary font-semibold' 
                          : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                      }`}
                    >
                      {sectionName}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Desktop Dots (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-3 bg-muted/55 px-4 py-2 rounded-[8px] border border-border/60 backdrop-blur-md">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="text-primary">$</span>
              <span>{copy.commands[step]}</span>
            </div>
            <div className="flex items-center gap-2" aria-label={`Current section: ${copy.sections[step]}`}>
              {[0, 1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setStep(i)}
                  aria-label={`Go to ${copy.sections[i]}`}
                  className={`h-2 rounded-full transition-all duration-500 ease-out ${
                    step === i
                      ? "w-8 bg-primary shadow-sm shadow-primary/50"
                      : step > i
                      ? "w-2 bg-primary/40"
                      : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground/80 min-w-12 transition-all duration-300">
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

      <main
        ref={mainRef}
        className="min-h-0 flex-1 relative overflow-y-auto overflow-x-hidden lg:overflow-hidden w-full touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex flex-col lg:flex-row h-max lg:h-full min-h-0 w-full transition-transform duration-700 ease-in-out lg:[transform:var(--slide-transform)]"
          style={{ '--slide-transform': `translateX(-${step * 100}%)` } as React.CSSProperties}
        >
          <IntroSection language={language} />
          <SkillsSection language={language} />
          <WorksSection language={language} />
          <ProjectsSection language={language} />
          <ContactSection language={language} />
        </div>
      </main>

      <div className="pointer-events-none absolute inset-y-0 left-4 z-50 hidden items-center lg:flex">
        <Button
          type="button"
          variant="ghost"
          onClick={goPrev}
          disabled={step === 0}
          aria-label="Previous section"
          className="pointer-events-auto h-16 w-12 rounded-[8px] bg-transparent p-0 font-mono text-5xl font-light leading-none text-foreground/38 backdrop-blur-sm transition-all hover:bg-primary/5 hover:text-primary/80 disabled:opacity-0"
        >
          {"<"}
        </Button>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-4 z-50 hidden items-center lg:flex">
        <Button
          type="button"
          variant="ghost"
          onClick={goNext}
          disabled={step === 4}
          aria-label="Next section"
          className="pointer-events-auto h-16 w-12 rounded-[8px] bg-transparent p-0 font-mono text-5xl font-light leading-none text-foreground/38 backdrop-blur-sm transition-all hover:bg-primary/5 hover:text-primary/80 disabled:opacity-0"
        >
          {">"}
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 md:h-1.5 bg-muted z-50">
        <div
          className="h-full bg-linear-to-r from-primary via-accent to-primary transition-all duration-700 ease-in-out"
          style={{ width: `${((step + 1) / 5) * 100}%` }}
        />
      </div>

    </div>
    </div>
  );
}
