import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
    return (
        // Menambahkan pattern background halus (optional)
        <section id="home" className="min-h-screen flex items-center bg-slate-950 pt-16 overflow-hidden relative">
        {/* --- TAMBAHAN: Background Elements Dinamis --- */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-blue-400 font-semibold text-lg mb-2 tracking-wide uppercase">Halo, saya</h2>
            <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-6 leading-tight">
                Frontend <br/>
                <span className="text-transparent bg-clip-text from-blue-400 via-purple-500 to-pink-500">
                Developer.
                </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Menciptakan pengalaman web yang modern, pixel-perfect, dan berfokus pada performa pengguna.
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start">
                <a href="#projects" className="group from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-500/25 scale-100 hover:scale-105 active:scale-95">
                Lihat Projek 
                {/* Icon panah bergerak saat di-hover */}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#" className="group border-2 border-slate-700 hover:border-blue-500 text-white p-4 rounded-full transition-all hover:bg-slate-800">
                <Github size={20} className="group-hover:text-blue-400 transition-colors" />
                </a>
                <a href="#" className="group border-2 border-slate-700 hover:border-blue-500 text-white p-4 rounded-full transition-all hover:bg-slate-800">
                <Linkedin size={20} className="group-hover:text-blue-400 transition-colors" />
                </a>
            </div>
            </div>
            
            <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative">
            {/* Efek Glow di belakang foto */}
            <div className="absolute w-80 h-80 from-blue-500 to-purple-600 rounded-full blur-[100px] opacity-30 z-0"></div>
            
            {/* Foto dengan animasi mengambang (animate-float) */}
            <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                alt="Profile" 
                className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-slate-800/50 shadow-2xl z-10 animate-float object-cover bg-slate-900"
            />
            </div>
        </div>
        </section>
    );
};

export default Hero;