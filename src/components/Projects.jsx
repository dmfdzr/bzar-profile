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
            <div key={index} className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50">
              <div className="relative overflow-hidden h-56"> {/* Tinggi sedikit ditambah */}
                {/* Overlay gradient saat hover agar teks lebih terbaca */}
                <div className="absolute inset-0 from-slate-950 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"/>
              </div>
              <div className="p-8 relative z-20">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-3">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 items-center">
                  <a href={project.demo} className="flex items-center gap-2 font-medium text-white hover:text-blue-400 transition-colors group/link">
                    Live Demo <ExternalLink size={16} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform"/>
                  </a>
                  <a href={project.repo} className="flex items-center gap-2 font-medium text-white hover:text-blue-400 transition-colors group/link">
                    Source <Github size={16} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform"/>
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