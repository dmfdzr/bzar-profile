import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navbar - Sticky & Glassmorphism */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto max-w-5xl flex h-16 items-center justify-between px-4 md:px-8">
          <div className="font-bold text-xl tracking-tight">
            Dev<span className="text-primary">Portofolio</span>.
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#about" className="hover:text-foreground transition-colors">Tentang</Link>
            <Link href="#skills" className="hover:text-foreground transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-foreground transition-colors">Proyek</Link>
            <Link href="#contact" className="hover:text-foreground transition-colors">Kontak</Link>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button size="sm" asChild className="hidden sm:flex">
              <Link href="#contact">Hire Me</Link>
            </Button>
          </div>
          <Button size="sm" asChild>
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-4 md:px-8 py-12 space-y-32">
        
        {/* Hero Section */}
        <section id="about" className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 pt-10">
          <div className="flex flex-col items-start gap-6 flex-1">
            <Badge variant="outline" className="px-3 py-1 border-primary/30 bg-primary/10 text-primary">
              Frontend Software Engineer
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Membangun Web <br className="hidden md:block" />
              <span className="text-muted-foreground">Pixel-Perfect.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-150 leading-relaxed">
              Halo! Saya seorang engineer yang antusias dalam menerjemahkan desain UI/UX menjadi aplikasi web interaktif, performant, dan *accessible*. Saya sangat menikmati bekerja dengan ekosistem React dan arsitektur modern.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Button size="lg" asChild>
                <Link href="#projects">Lihat Karya Saya</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="https://github.com/username-anda" target="_blank">
                  GitHub Profile
                </Link>
              </Button>
            </div>
          </div>
          <div className="shrink-0">
            <Avatar className="w-40 h-40 md:w-64 md:h-64 border-4 border-background shadow-xl">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback className="text-4xl bg-primary text-primary-foreground">FE</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Senjata Utama</h2>
            <p className="text-muted-foreground">Teknologi dan alat yang saya gunakan sehari-hari.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-muted/40 border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-lg">Core & Frameworks</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {["React.js", "Next.js 16", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </CardContent>
            </Card>
            <Card className="bg-muted/40 border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-lg">Styling & UI</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {["Tailwind CSS", "shadcn/ui", "Radix UI", "Framer Motion", "Sass", "Responsive Design"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </CardContent>
            </Card>
            <Card className="bg-muted/40 border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-lg">Tools & State</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {["Zustand", "Redux Toolkit", "React Query", "Git", "Webpack", "Vite"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section (Using Tabs) */}
        <section id="projects" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Karya Pilihan</h2>
            <p className="text-muted-foreground">Beberapa proyek komersial dan eksperimen personal saya.</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="all">Semua Proyek</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="landing">Landing Page</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <Card className="flex flex-col justify-between overflow-hidden group">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">Sistem Manajemen Cabang (Dashboard)</CardTitle>
                  <CardDescription>Aplikasi internal pemantauan data interaktif.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Membangun antarmuka kompleks yang mencakup filter data multi-level, pemilahan status operasional, serta visualisasi chart responsif menggunakan Recharts.
                  </p>
                </CardContent>
                <CardFooter className="flex gap-2 flex-wrap">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Tailwind</Badge>
                  <Badge variant="outline">Zustand</Badge>
                </CardFooter>
              </Card>

              {/* Project 2 */}
              <Card className="flex flex-col justify-between overflow-hidden group">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">Generator PDF Spesifikasi</CardTitle>
                  <CardDescription>Otomatisasi dokumen dan rendering tabel kompleks.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Fokus pada performa *client-side* untuk mengonversi data JSON bervolume tinggi menjadi UI tabel yang interaktif, yang dapat di-ekspor dengan sempurna ke format PDF.
                  </p>
                </CardContent>
                <CardFooter className="flex gap-2 flex-wrap">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">shadcn/ui</Badge>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="dashboard">
               <Card className="flex flex-col justify-between overflow-hidden group max-w-md">
                <CardHeader>
                  <CardTitle>Sistem Manajemen Cabang (Dashboard)</CardTitle>
                  <CardDescription>Aplikasi internal pemantauan data interaktif.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Hanya menampilkan proyek terkait Dashboard Admin / CMS.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="landing">
               <p className="text-muted-foreground py-8 text-center border-2 border-dashed rounded-lg">Proyek Landing Page sedang dalam tahap penyelesaian. Segera hadir!</p>
            </TabsContent>
          </Tabs>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8 pb-20">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Mari Berkolaborasi!</h2>
              <p className="text-muted-foreground">
                Tertarik untuk bekerja sama, atau sekadar ingin menyapa? Jangan ragu untuk mengisi form di samping atau mengirimkan pesan langsung ke email saya.
              </p>
              <div className="pt-4 space-y-2">
                <p className="font-medium">Email: <span className="text-muted-foreground font-normal">hello@portofolio.com</span></p>
                <p className="font-medium">Lokasi: <span className="text-muted-foreground font-normal">Indonesia</span></p>
              </div>
            </div>

            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>Saya akan membalas secepatnya.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea id="message" placeholder="Tuliskan pesan Anda di sini..." className="min-h-30" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Kirim Pesan</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

      </main>

      {/* Simple Footer */}
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Portofolio. Dibangun dengan Next.js & shadcn/ui.</p>
      </footer>
    </div>
  );
}