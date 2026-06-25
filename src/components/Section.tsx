import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  delay?: number;
}

export function Section({ id, className, children, delay = 0.1 }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 1.02, 0.73, 1] }}
      className={cn("py-12 sm:py-16 md:py-24 lg:py-32 w-full", className)}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 xl:px-8">
        {children}
      </div>
    </motion.section>
  );
}

export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
      <span className="font-mono text-brand text-xl md:text-2xl">{number}</span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">{title}</h2>
      <div className="h-px bg-white/10 flex-grow ml-4 md:ml-8" />
    </div>
  );
}
