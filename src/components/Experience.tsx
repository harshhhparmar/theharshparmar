import { useState } from "react";
import { Reveal, Section } from "./Section";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Code2, Globe, GraduationCap, ChevronDown } from "lucide-react";

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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <Section id="experience" className="bg-[#0a0a0a] relative overflow-hidden">
      {/* Ambient background glow for glassmorphism */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-brand/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="text-center mb-12 relative z-10">
        <Reveal>
          <div className="inline-block font-mono text-brand text-sm tracking-[0.2em] uppercase mb-4">
            Journey
          </div>
          <h2 className="font-display text-4xl md:text-[48px] leading-[1.1] font-bold text-white mb-6">
            Experience & Activities.
          </h2>
        </Reveal>
      </div>
      
      <div className="max-w-3xl mx-auto relative z-10 flex flex-col gap-4">
        {EXPERIENCES.map((exp, i) => {
          const Icon = exp.icon;
          const isExpanded = expandedIndex === i;
          
          return (
            <Reveal key={i} delay={i * 0.1}>
              <div 
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className={`group cursor-pointer bg-white/[0.02] backdrop-blur-xl border transition-all duration-300 rounded-2xl overflow-hidden ${isExpanded ? 'border-brand/40 bg-white/[0.04]' : 'border-white/10 hover:border-white/20 hover:bg-white/[0.03]'}`}
              >
                <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-6 flex-1">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0 ${isExpanded ? 'bg-brand/20 text-brand' : 'bg-white/5 text-gray-400 group-hover:text-brand'}`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between flex-1 gap-1 sm:gap-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-brand transition-colors">
                          {exp.role}
                        </h3>
                        <h4 className="text-sm font-mono text-gray-400">{exp.company}</h4>
                      </div>
                      <span className="text-xs font-mono text-brand px-3 py-1 bg-brand/10 rounded-full w-fit whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>
                  </div>
                  <motion.div 
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-gray-500 group-hover:text-white"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/5">
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light pl-16 sm:pl-[72px]">
                          {exp.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
