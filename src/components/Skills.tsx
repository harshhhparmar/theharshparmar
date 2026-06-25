import { Section, SectionHeading } from "./Section";
import { motion } from "motion/react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend / Platforms",
    skills: ["Node.js", "Express.js", "Firebase Auth", "MongoDB", "Vercel", "GitHub"],
  },
  {
    title: "Core CS",
    skills: ["DSA", "DBMS", "OOPs", "Computer Engineering Fundamentals"],
  },
  {
    title: "AI / Data",
    skills: ["Generative AI", "AI Prompting", "Data Analysis with Python", "Tableau / Power BI (Learning)", "AI Tools"],
  },
  {
    title: "Tools & Design",
    skills: ["VS Code", "GitHub", "Vercel", "Google AI Studio", "Canva / Figma Design Thinking"],
  },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-[#050505]">
      <SectionHeading number="04" title="Technical Arsenal" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#111] border border-white/5 p-6 sm:p-7 md:p-8 rounded-2xl hover:border-white/10 transition-colors"
          >
            <h3 className="text-brand font-mono text-xs sm:text-sm uppercase tracking-wide mb-4 md:mb-6">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300 pointer-events-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
