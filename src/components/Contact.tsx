import { Reveal, Section } from "./Section";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Github, Linkedin, Check, MapPin, Clock, Loader2, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "harshhhparmar007@gmail.com",
      link: "mailto:harshhhparmar007@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Ahmedabad, Gujarat, India",
      link: null
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/harshparmar007",
      link: "https://www.linkedin.com/in/harshparmar007"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/harshhhparmar",
      link: "https://github.com/harshhhparmar"
    },
    {
      icon: Clock,
      title: "Availability",
      value: "Open for Internships & Freelance",
      link: null
    }
  ];

  return (
    <Section id="contact" className="bg-[#050505] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <Reveal>
            <div className="inline-block font-mono text-brand text-sm tracking-[0.2em] uppercase mb-4">
              Contact
            </div>
            <h2 className="font-display text-4xl md:text-[48px] leading-[1.1] font-bold text-white mb-6">
              Let's Build Something Amazing Together.
            </h2>
            <p className="text-gray-400 text-[18px] max-w-2xl mx-auto font-light leading-[1.7]">
              I'm always open to internships, freelance opportunities, collaborations, and exciting product ideas. Whether you have a project or simply want to connect, I'd love to hear from you.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side - Glassmorphism Card */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.1}>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[24px] p-6 sm:p-8 md:p-10 overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />
                
                <h3 className="font-display text-2xl font-bold text-white mb-8 relative z-10">Contact Information</h3>
                
                <div className="flex flex-col gap-6 sm:gap-8 relative z-10">
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon;
                    const Content = (
                      <div className="flex items-center gap-4 sm:gap-5 group/item cursor-pointer">
                        <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover/item:text-brand group-hover/item:bg-white/10 transition-all duration-300">
                          <Icon size={20} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-mono text-gray-500 mb-1">{info.title}</div>
                          <div className="text-white text-sm sm:text-base group-hover/item:text-brand transition-colors duration-300 truncate">{info.value}</div>
                        </div>
                      </div>
                    );

                    return info.link ? (
                      <a key={idx} href={info.link} target="_blank" rel="noreferrer" className="block">
                        {Content}
                      </a>
                    ) : (
                      <div key={idx}>{Content}</div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side - Premium Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <form onSubmit={handleSubmit} className="bg-[#111] border border-white/10 rounded-[24px] p-6 sm:p-8 md:p-10 relative overflow-hidden">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-mono text-gray-400">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all placeholder:text-gray-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-mono text-gray-400">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all placeholder:text-gray-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-6">
                  <label htmlFor="subject" className="text-sm font-mono text-gray-400">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    className="bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all placeholder:text-gray-600"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="flex flex-col gap-2 mb-8">
                  <label htmlFor="message" className="text-sm font-mono text-gray-400">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={5}
                    className="bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all placeholder:text-gray-600 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting || isSuccess}
                    className="relative w-full sm:w-auto overflow-hidden group bg-brand text-black font-semibold rounded-xl px-8 py-4 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(252,110,96,0.2)] hover:shadow-[0_0_30px_rgba(252,110,96,0.4)] transition-shadow shrink-0"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <Loader2 size={18} className="animate-spin" />
                        </motion.div>
                      ) : isSuccess ? (
                        <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                          <Check size={18} /> Sent Successfully
                        </motion.div>
                      ) : (
                        <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 relative z-10">
                          Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                  
                  <div className="text-xs font-mono text-gray-500 flex items-center gap-2 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Response time: Usually within 24 hours.
                  </div>
                </div>
              </form>
            </Reveal>
          </div>

        </div>
      </div>
    </Section>
  );
}
