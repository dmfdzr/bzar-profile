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
import { FileDown } from "lucide-react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [language, setLanguage] = useState<"en" | "id">("en");
  const mainRef = useRef<HTMLElement | null>(null);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const touchSwipeStart = useRef<{ x: number; y: number } | null>(null);

  const copy = {
    en: {
      shellTitle: "interactive frontend console",
      sections: ["Intro", "Skills", "Works", "Projects", "Contact"],
      commands: ["whoami", "capabilities", "case-studies", "projects-api", "connect"],
      languageLabel: "Switch to Indonesian",
      cvLabel: "Download ATS CV",
    },
    id: {
      shellTitle: "konsol frontend interaktif",
      sections: ["Intro", "Skill", "Karya", "Proyek", "Kontak"],
      commands: ["profil", "kapabilitas", "studi-kasus", "projects-api", "kontak"],
      languageLabel: "Ganti ke English",
      cvLabel: "Unduh CV ATS",
    },
  }[language];

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

  useEffect(() => {
    const main = mainRef.current;

    if (!main) return;

    const handleNativeTouchStart = (event: globalThis.TouchEvent) => {
      if (shouldSkipSectionSwipe(event.target)) return;

      const touch = event.touches[0];

      if (!touch) return;

      touchSwipeStart.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleNativeTouchEnd = (event: globalThis.TouchEvent) => {
      const touch = event.changedTouches[0];
      const start = touchSwipeStart.current;
      touchSwipeStart.current = null;

      if (!touch) return;

      finishSwipe(start, touch.clientX, touch.clientY);
    };

    main.addEventListener("touchstart", handleNativeTouchStart, { capture: true, passive: true });
    main.addEventListener("touchend", handleNativeTouchEnd, { capture: true, passive: true });

    return () => {
      main.removeEventListener("touchstart", handleNativeTouchStart, { capture: true });
      main.removeEventListener("touchend", handleNativeTouchEnd, { capture: true });
    };
  }, []);

  const shouldSkipSectionSwipe = (target: EventTarget | null) =>
    target instanceof Element && Boolean(target.closest("[data-section-swipe-skip='true']"));

  const handleSwipeStart = (event: PointerEvent<HTMLElement>) => {
    if (shouldSkipSectionSwipe(event.target)) return;

    swipeStart.current = { x: event.clientX, y: event.clientY };
  };

  const handleSwipeEnd = (event: PointerEvent<HTMLElement>) => {
    const start = swipeStart.current;
    swipeStart.current = null;

    finishSwipe(start, event.clientX, event.clientY);
  };

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    if (shouldSkipSectionSwipe(event.target)) return;

    const touch = event.touches[0];

    if (!touch) return;

    touchSwipeStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    const touch = event.changedTouches[0];
    const start = touchSwipeStart.current;
    touchSwipeStart.current = null;

    if (!touch) return;

    finishSwipe(start, touch.clientX, touch.clientY);
  };

  return (
    <div className="console-grid h-dvh w-full flex flex-col overflow-hidden bg-background text-foreground font-sans relative">
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

      <main
        ref={mainRef}
        className="min-h-0 flex-1 relative overflow-hidden w-full touch-pan-y"
        onPointerDown={handleSwipeStart}
        onPointerUp={handleSwipeEnd}
        onPointerCancel={() => {
          swipeStart.current = null;
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
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
  );
}
