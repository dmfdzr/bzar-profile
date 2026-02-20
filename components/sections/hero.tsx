import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeroSection({ nextStep }: { nextStep: () => void }) {
    return (
        <section className="w-full h-full shrink-0 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        <div className="max-w-4xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 flex-1">
            <Badge variant="outline" className="px-3 py-1 border-primary/30 bg-primary/10 text-primary">
                Frontend Software Engineer
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Membangun Web <br className="hidden md:block" />
                <span className="text-muted-foreground">Pixel-Perfect.</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-125">
                Halo! Saya seorang engineer yang antusias dalam menerjemahkan UI/UX menjadi aplikasi web interaktif dan performant.
            </p>
            <Button size="lg" onClick={nextStep} className="mt-4 rounded-full px-8 animate-bounce">
                Mulai Jelajahi &rarr;
            </Button>
            </div>
            <div className="shrink-0">
            <Avatar className="w-40 h-40 md:w-64 md:h-64 border-4 border-background shadow-2xl">
                <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
                <AvatarFallback className="text-4xl bg-primary text-primary-foreground">FE</AvatarFallback>
            </Avatar>
            </div>
        </div>
        </section>
    );
}