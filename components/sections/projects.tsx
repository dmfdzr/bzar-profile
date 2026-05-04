import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Briefcase, Database, Search, ExternalLink, Calendar, Code2, Layout, Github, Figma, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

const experiences = [
    {
        id: "sat",
        company: "PT. Sumber Alfaria Trijaya, Tbk.",
        role: "Building Maintenance Digital Store",
        period: "November 2025 - May 2026",
        badge: "Internship",
        icon: <Briefcase className="text-blue-500" size={24} />,
        description: "Actively contributed to the development and maintenance of large-scale digital store platforms.",
        details: [
            "Developing the Sparta Building application using Vanilla JavaScript, focusing on efficient DOM manipulation and lightweight performance.",
            "Migrate the Sparta Building platform using Next.js and TypeScript to ensure type safety and modular component architecture.",
            "Integrating RESTful APIs across both platforms to facilitate real-time data exchange and dynamic content rendering.",
            "Focused on writing clean, maintainable code and optimizing frontend performance to meet specific business requirements for both systems."
        ],
        stack: ["Javascript", "Next.js", "TypeScript", "RESTful API", "Tailwind CSS"],
        links: [
            { label: "Live App", url: "https://sparta-building.vercel.app", icon: <ExternalLink size={16} />, variant: "default" },
            { label: "Landing Page", url: "https://sparta-alfamart.vercel.app", icon: <ExternalLink size={16} />, variant: "default" },
            { label: "Source Code Next.JS", url: "https://github.com/dmfdzr/sparta-fe.git", icon: <Github size={16} />, variant: "outline" },
            { label: "Source Code VanillaJS", url: "https://github.com/dmfdzr/sparta-frontend.git", icon: <Github size={16} />, variant: "outline" }
        ]
    },
    {
        id: "indocyber",
        company: "PT. Indocyber Global Teknologi",
        role: "Microsoft SQL Server",
        period: "September 2025 - October 2025",
        badge: "Work Training",
        icon: <Database className="text-green-500" size={24} />,
        description: "Focused on integrated web development with relational database management.",
        details: [
            "Learned practical skills in database management using Microsoft SQL Server (SSMS)",
            "Designed and optimized relational databases to support real-world applications",
            "Practiced backend database integration using SQL queries and stored procedures",
            "Focused on data handling, query performance, and reporting for work-related scenarios"
        ],
        stack: ["SSMS", "SQL Queries"],
        links: [
            { label: "View Course", url: "https://drive.google.com/drive/folders/1yi5vJ5lA0d8Lzp14RBzpyqeGDpLPdmat?usp=sharing", icon: <ExternalLink size={16} />, variant: "default" }
        ]
    },
    {
        id: "kinema",
        company: "PT. Kinema Systrans",
        role: "Web Development & UI/UX Design",
        period: "February 2024 - June 2024",
        badge: "Independent Study",
        icon: <Search className="text-orange-500" size={24} />,
        description: "In-depth learning of the web product development lifecycle, from design to prototyping.",
        details: [
            "A. Micro Project (Freelance Website)",
            "Product Research",
            "Designed Wireframe Product",
            "Designed High Fidelity Product",
            "Making Prototype Product",
            "B. Massive Project (Mental Health Service Website)",
            "Product Research",
            "Designed Wireframe Product",
            "Designed High Fidelity Product",
            "Making Prototype Product",
            "Developing Frontend Website"
        ],
        stack: ["Figma", "Prototyping", "Product Research", "UI/UX Principles", "Frontend Development"],
        links: [
            { label: "ReLive Project", url: "https://relive-health.vercel.app/", icon: <ExternalLink size={16} />, variant: "outline" },
            { label: "Source Code ReLive", url: "https://github.com/dmfdzr/relive-frontend.git", icon: <Github size={16} />, variant: "outline" },
            { label: "YakinKerja Project", url: "https://freelance-lake.vercel.app/", icon: <ExternalLink size={16} />, variant: "outline" },
            { label: "Source Code YakinKerja", url: "https://github.com/dmfdzr/freelance.git", icon: <Github size={16} />, variant: "outline" }
        ]
    }
];

export function ProjectsSection() {
    return (
        <section className="w-full h-full shrink-0 flex justify-center items-start p-4 md:p-8 pt-4 md:pt-8 pb-36 overflow-y-auto">
            <div className="max-w-5xl w-full flex flex-col space-y-8">
                <div className="space-y-2 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience & Projects</h2>
                <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                    Click on the cards to view details of my contributions and the technologies I used.
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {experiences.map((exp) => (
                    <Dialog key={exp.id}>
                    <DialogTrigger asChild>
                        <Card className="group cursor-pointer border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-4">
                            <div className="mb-4 p-3 w-fit rounded-xl bg-background border border-border group-hover:scale-110 transition-transform duration-300">
                            {exp.icon}
                            </div>
                            <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                            {exp.role}
                            </CardTitle>
                            <CardDescription className="font-medium text-foreground/80 mt-1">
                            {exp.company}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center text-xs text-muted-foreground gap-2">
                            <Calendar size={14} /> {exp.period}
                            </div>
                            <div className="mt-4 flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            View Details <ExternalLink size={14} className="ml-2" />
                            </div>
                        </CardContent>
                        </Card>
                    </DialogTrigger>

                    <DialogContent 
                        onInteractOutside={(e) => e.preventDefault()}
                        onEscapeKeyDown={(e) => e.preventDefault()}
                        /* PERBAIKAN: Menambahkan max-h-[85vh] dan overflow-y-auto di bawah ini */
                        className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background/95 backdrop-blur-2xl sm:rounded-2xl border-border/50 shadow-2xl duration-700! ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-75 data-[state=closed]:zoom-out-75 data-[state=open]:slide-in-from-bottom-12 data-[state=closed]:slide-out-to-bottom-12"
                    >
                        <DialogHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {exp.badge}
                            </Badge>
                        </div>
                        <DialogTitle className="text-2xl font-bold">{exp.role}</DialogTitle>
                        <DialogDescription className="text-lg font-semibold text-foreground/90">
                            {exp.company}
                        </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6 py-4">
                            <div className="flex items-center gap-2 text-muted-foreground text-sm border-b pb-4 border-border/50">
                                <Calendar size={16} /> <span>{exp.period}</span>
                            </div>

                            <div className="space-y-3">
                                <h4 className="font-bold flex items-center gap-2">
                                <Code2 size={18} className="text-primary" /> Key Contributions:
                                </h4>
                                <ul className="grid gap-2">
                                {exp.details.map((detail, index) => (
                                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    <span>{detail}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>

                            <div className="space-y-3 pt-2">
                                <h4 className="font-bold flex items-center gap-2">
                                <Layout size={18} className="text-primary" /> Technologies & Tools:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                {exp.stack.map((tech) => (
                                    <Badge key={tech} variant="outline" className="bg-muted/50">
                                    {tech}
                                    </Badge>
                                ))}
                                </div>
                            </div>

                            {/* Menampilkan Tautan Proyek */}
                            {exp.links && exp.links.length > 0 && (
                                <div className="space-y-3 pt-4 border-t border-border/50">
                                    <h4 className="font-bold flex items-center gap-2">
                                        <LinkIcon size={18} className="text-primary" /> Project Links:
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {exp.links.map((link, idx) => (
                                            <Link key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                                                <Button 
                                                variant={link.variant as "default" | "outline"} 
                                                className={`gap-2 rounded-full shadow-md transition-all duration-300 hover:-translate-y-1 ${
                                                    link.variant === 'default' 
                                                    ? 'hover:shadow-primary/30' 
                                                    : 'hover:bg-primary hover:text-primary-foreground hover:border-primary'
                                                }`}
                                                >
                                                {link.icon} {link.label}
                                                </Button>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </DialogContent>
                    </Dialog>
                ))}
                </div>
            </div>
        </section>
    );
}