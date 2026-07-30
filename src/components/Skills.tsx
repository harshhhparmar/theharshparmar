import { Reveal, Section } from "./Section";
import { Monitor, Server, Terminal, Database, Sparkles, Wrench } from "lucide-react";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind", level: 90 }
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "Firebase", level: 85 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Programming",
    icon: Terminal,
    skills: [
      { name: "Java", level: 70 },
      { name: "Python", level: 65 },
      { name: "C", level: 80 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    title: "AI & Data",
    icon: Sparkles,
    skills: [
      { name: "Generative AI", level: 80 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Data Analytics", level: 70 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 90 },
      { name: "Figma", level: 75 },
    ],
  },
];

const SkillBar: React.FC<{ skill: { name: string; level: number } }> = ({ skill }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
        <span className="text-xs text-brand font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-gradient-to-r from-brand-dark to-brand rounded-full relative"
        >
          <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-white/20 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills" className="bg-[#0a0a0a]">
      <div className="text-center mb-16 md:mb-24">
        <Reveal>
          <div className="inline-block font-mono text-brand text-sm tracking-[0.2em] uppercase mb-4">
            My Skills
          </div>
          <h2 className="font-display text-4xl md:text-[48px] leading-[1.1] font-bold text-white mb-6">
            Technologies I work with.
          </h2>
          <p className="text-gray-400 text-[18px] max-w-2xl mx-auto font-light leading-[1.7]">
            I enjoy building modern applications using scalable technologies and continuously learning emerging tools.
          </p>
        </Reveal>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {SKILL_CATEGORIES.map((category, idx) => {
          const Icon = category.icon;
          return (
            <Reveal key={category.title} delay={idx * 0.1}>
              <motion.div
                whileHover="hover"
                initial="initial"
                className="group relative bg-[#111] border border-white/5 rounded-[20px] p-8 h-full flex flex-col transition-colors duration-300 hover:border-brand/30 overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <motion.div 
                    variants={{
                      initial: { rotate: 0 },
                      hover: { rotate: 5, scale: 1.1 }
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-brand group-hover:text-black group-hover:border-brand transition-colors duration-500"
                  >
                    <Icon size={24} />
                  </motion.div>
                  
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="h-px w-full bg-white/10 mb-6 group-hover:bg-brand/20 transition-colors duration-500" />
                  
                  <div className="flex flex-col gap-1 w-full">
                    {category.skills.map((skill) => (
                      <SkillBar key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
