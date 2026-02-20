import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProjectsSection({ nextStep, prevStep }: { nextStep: () => void, prevStep: () => void }) {
    return (
        <section className="w-full h-full shrink-0 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        <div className="max-w-4xl w-full flex flex-col h-full justify-center space-y-6">
            <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Karya Pilihan</h2>
            <p className="text-muted-foreground">Beberapa proyek yang membuktikan keahlian saya.</p>
            </div>

            <Tabs defaultValue="all" className="w-full">
            {/* ... Isi TabsList dan TabsContent dari kode proyek sebelumnya ... */}
            </Tabs>

            <div className="flex justify-between w-full pt-4">
            <Button variant="ghost" onClick={prevStep}>&larr; Kembali</Button>
            <Button onClick={nextStep}>Selanjutnya: Kontak &rarr;</Button>
            </div>
        </div>
        </section>
    );
}