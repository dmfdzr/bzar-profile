"use client";

import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Home() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prev) => (prev < 3 ? prev + 1 : 0));
  };

  const buttonContent = () => {
    switch (step) {
      case 0: return <>Start Exploring <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" /></>;
      case 1: return <>View Experience <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" /></>;
      case 2: return <>Contact Me <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" /></>;
      case 3: return <><ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" /> Back to Top</>;
      default: return "Next";
    }
  };

  const sectionNames = ["Introduction", "Skills", "Experience", "Contact"];

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-background text-foreground font-sans relative">
      
      <div className="w-full px-4 pt-4 md:pt-6 z-50 shrink-0 pointer-events-none">
        <header className="max-w-4xl mx-auto flex items-center justify-between px-3 py-2 md:px-5 md:py-3 bg-background/60 backdrop-blur-xl border border-border/50 rounded-full shadow-lg shadow-black/5 pointer-events-auto transition-all">
          
          <div className="hover:scale-105 hover:rotate-3 transition-transform duration-300 flex items-center justify-center">
             <img 
               src="/favicon.ico" 
               alt="Dimas Logo" 
               className="w-9 h-9 md:w-10 md:h-10 rounded-md md:rounded-lg shadow-sm object-contain bg-background border border-border/20"
             />
          </div>

          <div className="flex items-center gap-3 bg-muted/40 px-3 md:px-5 py-1.5 md:py-2 rounded-full border border-border/50 backdrop-blur-md">
            <span className="text-xs md:text-sm font-semibold text-foreground/80 hidden md:block w-21.25 text-right mr-1 transition-all duration-300">
              {sectionNames[step]}
            </span>
            <div className="flex items-center gap-1.5 md:gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
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
          </div>

          <div className="flex items-center justify-center">
            <ModeToggle />
          </div>

        </header>
      </div>

      <main className="flex-1 relative overflow-hidden w-full bg-grid-white/[0.02] -mt-20 md:-mt-24">
        <div className="absolute inset-0 pt-20 md:pt-24 pointer-events-none z-10"></div>
        
        <div 
          className="flex h-full w-full transition-transform duration-700 ease-in-out pt-20 md:pt-24"
          style={{ transform: `translateX(-${step * 100}%)` }}
        >
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>

      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-50">
        <Button 
          size="lg" 
          onClick={handleNext}
          className="group rounded-full px-6 md:px-8 py-6 md:py-7 shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 text-sm md:text-base font-bold"
        >
          {buttonContent()}
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 md:h-1.5 bg-muted z-50">
        <div 
          className="h-full bg-linear-to-r from-primary to-blue-500 transition-all duration-700 ease-in-out"
          style={{ width: `${((step + 1) / 4) * 100}%` }}
        />
      </div>

    </div>
  );
}