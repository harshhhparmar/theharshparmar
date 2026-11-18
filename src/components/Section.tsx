import { motion, useInView, useAnimation } from "motion/react";
import { ReactNode, useEffect, useRef, Key } from "react";
import { cn } from "../lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn("py-8 sm:py-10 lg:py-12 w-full border-b border-white/[0.06]", className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  width?: "fit-content" | "100%";
  className?: string;
  key?: Key;
}

export function Reveal({ children, delay = 0, width = "100%", className }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ width }} className={cn("relative", className)}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <Reveal>
      <div className="flex items-center gap-3 md:gap-4 mb-6">
        <span className="font-mono text-brand text-sm md:text-base">{number}.</span>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white">{title}</h2>
        <div className="h-px bg-white/10 flex-grow ml-3" />
      </div>
    </Reveal>
  );
}
