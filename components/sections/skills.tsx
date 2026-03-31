import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
    return (
        <section className="w-full h-full shrink-0 flex justify-center items-start p-4 md:p-8 pt-4 md:pt-8 pb-36 overflow-y-auto">
            <div className="max-w-5xl w-full space-y-10 flex flex-col">
                <div className="space-y-3 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical & Interpersonal Skills</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        A strong combination of technical foundation and team collaboration skills to deliver high-quality digital solutions.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-border/50">
                        <CardHeader><CardTitle className="text-xl text-primary">Frontend & UI</CardTitle></CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {["JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "ShadcnUI", "Figma"].map((skill) => (
                                <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">{skill}</Badge>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="bg-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-border/50">
                        <CardHeader><CardTitle className="text-xl text-primary">Backend & Database</CardTitle></CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {["MySQL", "Microsoft SQL Server", "SQL Queries", "RESTful APIs"].map((skill) => (
                                <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">{skill}</Badge>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="bg-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-border/50">
                        <CardHeader><CardTitle className="text-xl text-primary">Soft Skills</CardTitle></CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {["Problem Solving", "Time Management", "Fast Learner", "Team Collaboration", "Attention to Detail", "Multitasking"].map((skill) => (
                                <Badge key={skill} variant="outline" className="border-primary/20">{skill}</Badge>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}