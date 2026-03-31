import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeroSection() {
    return (
        <section className="w-full h-full shrink-0 flex justify-center items-start p-4 md:p-8 pt-4 md:pt-8 pb-36 overflow-y-auto animate-in fade-in duration-1000">
            <div className="max-w-4xl w-full flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5 md:gap-6 flex-1 mt-2 md:mt-0">
                    <Badge variant="outline" className="px-3 py-1 border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        Frontend Engineer
                    </Badge>
                    {/* PERBAIKAN: Ukuran teks disesuaikan untuk mobile (text-3xl sm:text-4xl) */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                        Hi, I'm <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-500">
                            Dimas Abidzar Fadly
                        </span>
                    </h1>
                    {/* PERBAIKAN: Teks deskripsi dibuat lebih responsif (text-sm sm:text-base) */}
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
                        A <strong className="text-foreground font-semibold">Frontend Engineer</strong> passionate about translating UI/UX designs into seamless, interactive web applications. Experienced in building <em className="italic">enterprise-scale</em> systems, I ensure that websites are not only visually appealing but also highly performant and user-friendly.
                    </p>
                </div>
                {/* PERBAIKAN: Ukuran avatar dibuat w-32 h-32 di mobile, dan ditambah mb-4 */}
                <div className="shrink-0 relative group md:mt-4 mb-4 md:mb-0">
                    <div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <Avatar className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 border-4 border-background shadow-2xl ring-1 ring-border">
                        <AvatarImage src="/profile.jpg" alt="bzar" className="object-cover" />
                        <AvatarFallback className="text-2xl md:text-4xl bg-primary text-primary-foreground font-bold">DA</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </section>
    );
}