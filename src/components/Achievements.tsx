import { Section, SectionHeading } from "./Section";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const ACHIEVEMENTS = [
  "Selected as contributor for GirlScript Summer of Code 2026",
  "Reimagine Strategy Challenge 2026 participant — HDFC Bank & IIM Kozhikode Horizon",
  "Microsoft Artificial Intelligence / Generative AI certification",
  "freeCodeCamp Data Analysis with Python — 300+ hours",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function Achievements() {
  return (
    <Section id="achievements" className="bg-[#050505]">
      <SectionHeading number="05" title="Proof of Work" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 gap-3 md:gap-4"
      >
        {ACHIEVEMENTS.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
          >
            <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
            <span className="text-gray-300 text-sm md:text-base leading-relaxed">{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
