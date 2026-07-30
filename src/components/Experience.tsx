import { Reveal, Section } from "./Section";
import { motion } from "motion/react";
import { Briefcase, Code2, Globe, GraduationCap } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    date: "2026 - Present",
    icon: Code2,
    description: "Active contributor in GSSoC '26, exploring real-world collaboration, improving technical skills, and making impactful open-source contributions."
  },
  {
    role: "Product Builder & Founder",
    company: "gush.sh (AI SaaS)",
    date: "2025 - Present",
    icon: Globe,
    description: "Building an AI image generation SaaS platform. Architecting the frontend design, product positioning, and scalable storage solutions."
  },
  {
    role: "Freelance Web Developer",
    company: "Local Businesses",
    date: "2024 - 2025",
    icon: Briefcase,
    description: "Designed and developed business websites (e.g., Jay Computer, A2 Thai Spa) to help clients establish a professional online presence."
  },
  {
    role: "Academic Project Lead",
    company: "SAL College of Engineering",
    date: "2023 - Present",
    icon: GraduationCap,
    description: "Led and contributed to practical engineering projects such as FindIT/Back2U and various AI-based platform concepts."
  }
];

export function Experience() {
  return (
    <Section id="experience" className="bg-[#0a0a0a] relative overflow-hidden">
      {/* Ambient background glow for glassmorphism */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-brand/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="text-center mb-16 md:mb-24 relative z-10">
        <Reveal>
          <div className="inline-block font-mono text-brand text-sm tracking-[0.2em] uppercase mb-4">
            Journey
          </div>
          <h2 className="font-display text-4xl md:text-[48px] leading-[1.1] font-bold text-white mb-6">
            Experience & Activities.
          </h2>
        </Reveal>
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {EXPERIENCES.map((exp, i) => {
            const Icon = exp.icon;
            const isEven = i % 2 === 0;

            return (
              <Reveal key={i} delay={i * 0.15}>
                <div className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-[#111] border-4 border-[#0a0a0a] rounded-full flex items-center justify-center text-brand z-10 md:-translate-x-1/2 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[24px] p-6 sm:p-8 hover:bg-white/[0.04] hover:border-brand/30 transition-all duration-300 group"
                    >
                      <span className="inline-block text-xs font-mono text-brand mb-2 px-3 py-1 bg-brand/10 rounded-full">
                        {exp.date}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1 group-hover:text-brand transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-mono text-gray-400 mb-4">{exp.company}</h4>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
