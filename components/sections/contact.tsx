import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// 1. Tambahkan import Linkedin di sini
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
    return (
        <section className="w-full h-full shrink-0 flex justify-center items-start p-4 md:p-8 pt-4 md:pt-8 pb-36 overflow-y-auto">
            <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 md:gap-10 items-start justify-center">
                
                <div className="flex-1 w-full space-y-6 md:space-y-8 md:pr-8 text-center md:text-left">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">Let's Collaborate!</h2>
                        <p className="text-muted-foreground text-base md:text-lg">
                            Interested in working together, discussing career opportunities, or building something amazing? Feel free to reach out.
                        </p>
                    </div>
                    
                    <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                            <div className="bg-primary/10 p-2.5 md:p-3 rounded-full text-primary"><Phone size={18} className="md:w-5 md:h-5" /></div>
                            <span className="text-sm md:text-base">+62 857-2791-4053</span>
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                            <div className="bg-primary/10 p-2.5 md:p-3 rounded-full text-primary"><Mail size={18} className="md:w-5 md:h-5" /></div>
                            <span className="text-sm md:text-base">dimasfadly01@gmail.com</span>
                        </div>
                    </div>

                    {/* 2. Tambahkan tombol LinkedIn di sebelah GitHub */}
                    <div className="flex gap-4 justify-center md:justify-start pt-2 md:pt-4">
                        <Link href="https://github.com/dmfdzr" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Github size={20} />
                            </Button>
                        </Link>
                        
                        <Link href="https://linkedin.com/in/dimasabidzarfadly" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Linkedin size={20} />
                            </Button>
                        </Link>
                    </div>
                </div>

                <Card className="flex-1 w-full max-w-md border-border/50 shadow-lg">
                    <CardHeader className="pb-4">
                        <CardTitle className="text-xl md:text-2xl">Send a Message</CardTitle>
                        <CardDescription className="text-xs md:text-sm">Your message will go directly to my inbox.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-1.5">
                            <Label htmlFor="name" className="text-xs md:text-sm">Full Name</Label>
                            <Input id="name" placeholder="John Doe" className="bg-muted/50 focus:bg-background transition-colors text-sm" />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="email" className="text-xs md:text-sm">Email Address</Label>
                            <Input id="email" type="email" placeholder="john@example.com" className="bg-muted/50 focus:bg-background transition-colors text-sm" />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="message" className="text-xs md:text-sm">Message</Label>
                            <Textarea id="message" placeholder="Write your message regarding job offers or project discussions..." className="resize-none min-h-25 md:min-h-30 bg-muted/50 focus:bg-background transition-colors text-sm" />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end items-center bg-muted/20 py-3 md:py-4 border-t border-border/50">
                        <Button className="rounded-full gap-2 px-5 md:px-6 text-sm">Send Message <Send size={16} /></Button>
                    </CardFooter>
                </Card>

            </div>
        </section>
    );
}