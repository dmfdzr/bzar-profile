import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection({ nextStep, prevStep }: { nextStep: () => void, prevStep: () => void }) {
    return (
        <section className="w-full h-full shrink-0 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        <div className="max-w-4xl w-full space-y-8 flex flex-col h-full justify-center">
            <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Senjata Utama</h2>
            <p className="text-muted-foreground">Teknologi yang saya gunakan untuk menciptakan solusi.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-muted/40">
                <CardHeader><CardTitle className="text-lg">Core & Frameworks</CardTitle></CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                {["React.js", "Next.js 16", "TypeScript", "JavaScript", "HTML5", "CSS3"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
                </CardContent>
            </Card>
            {/* ... Card lainnya (Styling & Tools) bisa Anda paste dari kode sebelumnya ... */}
            </div>

            <div className="flex justify-between w-full pt-8">
            <Button variant="ghost" onClick={prevStep}>&larr; Kembali</Button>
            <Button onClick={nextStep}>Selanjutnya: Proyek &rarr;</Button>
            </div>
        </div>
        </section>
    );
}