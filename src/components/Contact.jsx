import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Sedang mencari Frontend Developer untuk project Anda atau ingin berdiskusi? Jangan ragu untuk menghubungi saya.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="bg-slate-800 p-3 rounded-full text-blue-500">
                  <Mail size={20} />
                </div>
                <span>email@anda.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="bg-slate-800 p-3 rounded-full text-blue-500">
                  <Phone size={20} />
                </div>
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="bg-slate-800 p-3 rounded-full text-blue-500">
                  <MapPin size={20} />
                </div>
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Simple Form */}
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Nama Anda" 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <textarea 
                rows="4"
                placeholder="Pesan..." 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all">
              Kirim Pesan
            </button>
          </form>

        </div>
        
        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} YourName. Built with React & Tailwind.
        </div>
      </div>
    </section>
  );
};

export default Contact;