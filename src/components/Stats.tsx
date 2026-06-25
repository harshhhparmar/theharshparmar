import { Section } from "./Section";
import { motion } from "motion/react";

const STATS = [
  { value: "2027", label: "Expected Graduation" },
  { value: "300+", label: "Hours Data Analysis with Python" },
];

export function Stats() {
  return (
    <Section id="stats" className="border-t border-b border-white/5 bg-[#050505]">
      <div className="flex flex-wrap justify-center sm:justify-start gap-12 md:gap-32">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col gap-1 sm:gap-2"
          >
            <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm font-mono text-brand uppercase tracking-wider max-w-[120px] md:max-w-[150px]">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
