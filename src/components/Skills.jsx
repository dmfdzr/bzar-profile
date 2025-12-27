import React from 'react';

const Skills = () => {
    const skills = [
        "HTML5", "CSS3", "JavaScript", "React.js", 
        "Tailwind CSS", "Vite", "Git", "Responsive Design", "API Integration"
    ];
    return (
        <section id="skills" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tech Stack</h2>
            <p className="text-gray-400">Teknologi yang saya gunakan dalam pengembangan</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
                <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 px-8 py-4 rounded-2xl text-gray-300 font-bold text-lg hover:bg-slate-800 hover:border-blue-500 hover:text-blue-400 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 cursor-default relative overflow-hidden">
                {/* Efek kilatan cahaya halus saat hover */}
                <div className="absolute inset-0 from-transparent via-blue-400/10 to-transparent transition-transform duration-1000"></div>
                <span className="relative z-10">{skill}</span>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Skills;