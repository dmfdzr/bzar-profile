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
            <div 
              key={index}
              className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-xl text-gray-300 font-medium hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;