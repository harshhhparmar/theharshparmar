import { Reveal, Section } from "./Section";
import { Monitor, Server, Terminal, Database, Sparkles, Wrench, Cloud, Layers } from "lucide-react";

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
  },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-[#050505] relative overflow-hidden">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-brand text-xs tracking-wider uppercase mb-1">
              04. My Skills
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Technologies I work with.
            </h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md md:text-right">
            A consolidated view of the tools, languages, and frameworks I use to build scalable modern applications.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 relative z-10">
        {SKILL_CATEGORIES.map((category, idx) => {
          const Icon = category.icon;
          return (
            <Reveal key={category.title} delay={idx * 0.03}>
              <div className="group bg-white/[0.02] border border-white/10 rounded-xl p-4 sm:p-5 h-full flex flex-col justify-between transition-colors duration-200 hover:bg-white/[0.04] hover:border-brand/30">
                <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-white/[0.06]">
                  <h3 className="font-display text-sm sm:text-base font-semibold text-white group-hover:text-brand transition-colors">
                    {category.title}
                  </h3>
                  <Icon size={15} className="text-gray-500 group-hover:text-brand transition-colors shrink-0" />
                </div>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-gray-300 leading-relaxed">
                  {category.skills.map((skill, sIdx) => (
                    <span key={skill} className="inline-flex items-center gap-2">
                      <span>{skill}</span>
                      {sIdx < category.skills.length - 1 && (
                        <span aria-hidden="true" className="text-white/20">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
