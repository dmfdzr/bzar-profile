import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8 md:p-24 max-w-5xl mx-auto space-y-20">
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Halo, Saya <span className="text-primary">Nama Anda</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Saya seorang Software Developer yang berfokus pada pembuatan antarmuka web yang responsif, fungsional, dan memberikan pengalaman pengguna yang optimal.
        </p>
        <div className="flex gap-4 mt-4">
          <Button asChild>
            <Link href="#kontak">Hubungi Saya</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://github.com/username-anda" target="_blank">
              Lihat GitHub
            </Link>
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {["Next.js", "React", "Tailwind CSS", "TypeScript", "PostgreSQL"].map(
            (skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                {skill}
              </Badge>
            )
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Proyek Terbaru</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Project Card 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Sistem Manajemen Dashboard</CardTitle>
              <CardDescription>Aplikasi internal untuk pemantauan data interaktif.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Membangun fitur dashboard yang mencakup filter data berdasarkan cabang dan tahun, pemilahan status operasional (done/progress), serta visualisasi chart untuk kategori properti seperti ruko dan non-ruko.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Badge>Next.js</Badge>
              <Badge>Tailwind</Badge>
              <Badge>Data Viz</Badge>
            </CardFooter>
          </Card>

          {/* Project Card 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Generator Laporan PDF Spesifikasi</CardTitle>
              <CardDescription>Otomatisasi dokumen dan manajemen akses.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Mengembangkan sistem pembuatan laporan PDF dinamis dari tabel data (desain & kualitas spesifikasi) dengan implementasi role-based access control untuk user seperti PIC dan Kontraktor.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Badge>React</Badge>
              <Badge>PDF Gen</Badge>
              <Badge>RBAC</Badge>
            </CardFooter>
          </Card>

        </div>
      </section>
    </main>
  );
}