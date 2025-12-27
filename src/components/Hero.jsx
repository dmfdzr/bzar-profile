import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-slate-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-blue-500 font-semibold text-lg mb-2">Halo, saya</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Frontend <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Developer</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Saya membangun website yang modern, responsif, dan user-friendly menggunakan teknologi web terbaru. Fokus pada performa dan pengalaman pengguna.
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all">
              Lihat Projek <ArrowRight size={20} />
            </a>
            <a href="#" className="border border-slate-700 hover:border-slate-500 text-white p-3 rounded-full transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="border border-slate-700 hover:border-slate-500 text-white p-3 rounded-full transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        {/* Placeholder untuk Foto/Ilustrasi */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 absolute animate-pulse"></div>
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="Profile" 
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-slate-800 shadow-2xl z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;