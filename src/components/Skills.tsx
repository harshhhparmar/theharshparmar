import { Reveal, Section } from "./Section";
import { Monitor, Server, Terminal, Database, Sparkles, Wrench, Cloud, Layers } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["React", "Next.js", "TypeScript", "HTML/CSS", "JavaScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Firebase"],
  },
  {
    title: "Programming",
    icon: Terminal,
    skills: ["Java", "Python", "C", "C++", "TypeScript"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase", "Redis"],
  },
  {
    title: "AI & Data",
    icon: Sparkles,
    skills: ["Generative AI", "Prompt Engineering", "Data Analytics", "Pandas", "NumPy"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git/GitHub", "VS Code", "Vercel", "Figma", "Postman", "Docker"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS (Basic)", "Google Cloud", "Firebase", "Vercel"],
  },
  {
    title: "Others",
    icon: Layers,
    skills: ["Agile/Scrum", "UI/UX Principles", "Open Source", "Technical Writing"],
  }
];

export function Skills() {
  return (
    <Section id="skills" className="bg-[#0a0a0a] relative overflow-hidden">
      {/* Ambient background glow for glassmorphism */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="text-center mb-12 relative z-10">
        <Reveal>
          <div className="inline-block font-mono text-brand text-sm tracking-[0.2em] uppercase mb-4">
            My Skills
          </div>
          <h2 className="font-display text-4xl md:text-[48px] leading-[1.1] font-bold text-white mb-6">
            Technologies I work with.
          </h2>
          <p className="text-gray-400 text-[18px] max-w-2xl mx-auto font-light leading-[1.7]">
            A consolidated view of the tools, languages, and frameworks I use to build scalable modern applications.
          </p>
        </Reveal>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
        {SKILL_CATEGORIES.map((category, idx) => {
          const Icon = category.icon;
          return (
            <Reveal key={category.title} delay={idx * 0.05}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:bg-white/[0.04] hover:border-brand/30 overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand group-hover:text-black group-hover:border-brand transition-colors duration-500">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-[13px] font-medium text-gray-300 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
