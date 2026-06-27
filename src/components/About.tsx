import { Reveal, Section } from "./Section";
import { Download, MapPin, GraduationCap, Building2, Calendar, Languages } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const INFO_CARDS = [
    { icon: MapPin, label: "Location", value: "Ahmedabad, Gujarat" },
    { icon: GraduationCap, label: "Education", value: "Computer Engineering" },
    { icon: Building2, label: "University", value: "SAL College of Engineering" },
    { icon: Calendar, label: "Expected Graduation", value: "2027" },
    { icon: Languages, label: "Languages", value: "English, Hindi, Gujarati", span: true }
  ];

  return (
    <Section id="about" className="bg-[#050505]">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Visual */}
        <div className="lg:col-span-5 relative">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#111] group">
              {/* Decorative Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Photo Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-white/5">
                <span className="font-display font-bold text-6xl rotate-[-10deg]">HP</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=906&auto=format&fit=crop" 
                alt="Harsh Parmar" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 grayscale group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700"
              />

              {/* Badges */}
              <motion.div 
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 -left-6 lg:-left-8 bg-white text-black px-4 py-2 rounded-full shadow-xl flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </span>
                Available for Internship
              </motion.div>
            </div>
          </Reveal>
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <Reveal delay={0.1}>
            <div className="inline-block font-mono text-brand text-sm tracking-[0.2em] uppercase mb-4">
              About Me
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[44px] leading-[1.1] font-bold text-white mb-6">
              Turning ideas into modern web experiences.
            </h2>
            <p className="text-gray-400 text-[18px] leading-[1.7] mb-10 max-w-2xl font-light">
              I am a Computer Engineering student deeply passionate about Web Development and building AI-powered products. Rather than just learning technologies, I focus on crafting modern, intuitive UIs and continuously expanding my technical foundation to build solutions that solve real problems.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-10 border-t border-b border-white/10 py-8 w-full">
            {INFO_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.label} delay={0.2 + idx * 0.1}>
                  <div className={`flex flex-col gap-1 ${card.span ? 'sm:col-span-2' : ''}`}>
                    <span className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-wider font-mono">
                      <Icon size={14} /> {card.label}
                    </span>
                    <span className="text-gray-200 text-sm font-medium">{card.value}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.6}>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 bg-brand text-black font-medium rounded-full hover:bg-brand-light transition-colors shadow-lg hover:shadow-brand/25"
              >
                Let's Connect
              </a>
              <a 
                href="#"
                className="flex items-center gap-2 px-8 py-4 bg-[#111] border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
