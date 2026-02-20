"use client";

import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => (prev < 3 ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-background text-foreground font-sans">
      
      {/* Navbar Tetap Di Sini */}
      <header className="h-16 shrink-0 w-full border-b border-border/40 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto max-w-5xl flex h-full items-center justify-between px-4 md:px-8">
          <div className="font-bold text-xl tracking-tight cursor-pointer" onClick={() => setStep(0)}>
            Dev<span className="text-primary">Portofolio</span>.
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {["Tentang", "Skills", "Proyek", "Kontak"].map((item, index) => (
              <button
                key={item}
                onClick={() => setStep(index)}
                className={`transition-colors ${
                  step === index ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <div className="text-sm font-medium text-muted-foreground md:hidden">{step + 1} / 4</div>
          </div>
        </div>
      </header>

      {/* Main Content - Slider Container */}
      <main className="flex-1 relative overflow-hidden w-full bg-grid-white/[0.02]">
        <div 
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${step * 100}%)` }}
        >
          {/* Komponen dipanggil di sini, jauh lebih rapi! */}
          <HeroSection nextStep={nextStep} />
          <SkillsSection nextStep={nextStep} prevStep={prevStep} />
          <ProjectsSection nextStep={nextStep} prevStep={prevStep} />
          <ContactSection prevStep={prevStep} />
        </div>
      </main>

    </div>
  );
}