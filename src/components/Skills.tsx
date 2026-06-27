import { Reveal, Section } from "./Section";
import { Monitor, Server, Terminal, Database, Sparkles, Wrench } from "lucide-react";
import { motion } from "motion/react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["React", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Firebase", "MongoDB", "REST APIs"],
  },
  {
    title: "Programming",
    icon: Terminal,
    skills: ["Java", "Python", "C", "JavaScript"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "Firebase", "MySQL"],
  },
  {
    title: "AI & Data",
    icon: Sparkles,
    skills: ["Generative AI", "Prompt Engineering", "Google AI Studio", "Data Analytics"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Figma"],
  },
];

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
                className="group relative bg-[#111] border border-white/5 rounded-[20px] p-8 h-full flex flex-col transition-all duration-500 hover:border-brand/30 hover:shadow-[0_0_30px_rgba(252,110,96,0.1)] overflow-hidden"
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
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skill}
                        variants={{
                          initial: { y: 0, opacity: 1 },
                          hover: { y: -2, opacity: 1 }
                        }}
                        transition={{ duration: 0.2, delay: skillIdx * 0.05 }}
                        className="px-3 py-1.5 bg-[#050505] border border-white/5 rounded-md text-sm text-gray-400 group-hover:border-white/20 group-hover:text-gray-200 transition-colors pointer-events-none"
                      >
                        {skill}
                      </motion.span>
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
