import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function ContactSection({ prevStep }: { prevStep: () => void }) {
    return (
        <section className="w-full h-full shrink-0 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        <div className="max-w-4xl w-full flex flex-col md:flex-row gap-10 items-center justify-center h-full">
            {/* ... Info Kontak Kiri ... */}
            <Card className="flex-1 w-full max-w-md">
            <CardHeader>
                <CardTitle>Kirim Pesan Langsung</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2"><Label>Nama</Label><Input placeholder="John Doe" /></div>
                <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="john@example.com" /></div>
                <div className="space-y-2"><Label>Pesan</Label><Textarea placeholder="Tulis pesan..." className="resize-none" /></div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={prevStep}>&larr; Kembali</Button>
                <Button>Kirim Pesan</Button>
            </CardFooter>
            </Card>
        </div>
        </section>
    );
}