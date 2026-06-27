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
    <section
      id={id}
      className={cn("py-12 sm:py-16 md:py-24 lg:py-32 w-full", className)}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 xl:px-8">
        {children}
      </div>
    </section>
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
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ width }} className={cn("relative overflow-hidden", className)}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay, ease: [0.17, 0.55, 0.55, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <Reveal>
      <div className="flex items-center gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
        <span className="font-mono text-brand text-xl md:text-2xl">{number}</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">{title}</h2>
        <div className="h-px bg-white/10 flex-grow ml-4 md:ml-8" />
      </div>
    </Reveal>
  );
}
