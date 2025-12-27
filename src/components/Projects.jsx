import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      desc: "Dashboard admin responsif dengan analitik data real-time dan manajemen produk.",
      tech: ["React", "Tailwind", "Chart.js"],
      // Ganti dengan link gambar asli Anda nanti
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", 
      demo: "#",
      repo: "#"
    },
    {
      title: "Movie Database App",
      desc: "Aplikasi pencarian film menggunakan TMDB API dengan fitur wishlist.",
      tech: ["React", "Axios", "Context API"],
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
      demo: "#",
      repo: "#"
    },
    {
      title: "Personal Portfolio v1",
      desc: "Versi pertama portofolio personal dengan desain minimalis.",
      tech: ["HTML", "SASS", "JS"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      demo: "#",
      repo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400">Beberapa hasil karya terbaik saya</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.demo} className="flex items-center gap-1 text-sm text-white hover:text-blue-400 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.repo} className="flex items-center gap-1 text-sm text-white hover:text-blue-400 transition-colors">
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;