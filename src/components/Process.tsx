import { Reveal, Section } from "./Section";
import { motion } from "motion/react";

const STEPS = [
  {
    num: "01",
    title: "Understand the Problem",
    desc: "I start by understanding the real user problem, not just the technology. Function before form."
  },
  {
    num: "02",
    title: "Design the Flow",
    desc: "I plan the user journey, screens, and core features before jumping into code to ensure clarity."
  },
  {
    num: "03",
    title: "Build Fast",
    desc: "I create responsive, practical web interfaces using modern tools like React, Next.js, Firebase, and Vercel."
  },
  {
    num: "04",
    title: "Improve with Feedback",
    desc: "I refine UI, performance, content, and usability until the project feels complete and truly useful."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function Process() {
  return (
    <Section className="bg-[#050505]">
      <Reveal>
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">How I Build</h2>
          <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">Concept → Strategy → Execution</p>
        </div>
      </Reveal>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-4 gap-8 md:gap-6 lg:gap-8"
      >
        {STEPS.map((step, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="flex flex-col relative"
          >
            {/* Connecting line for desktop */}
            {i !== STEPS.length - 1 && (
              <div className="hidden md:block absolute top-[24px] lg:top-[28px] left-[50px] lg:left-[60px] right-[-20px] lg:right-[-30px] h-[1px] bg-white/10 z-0" />
            )}
            
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#111] border border-white/10 flex items-center justify-center font-mono text-brand font-bold text-base lg:text-lg mb-4 md:mb-6 relative z-10 mx-auto md:mx-0">
              {step.num}
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="font-display text-base sm:text-lg text-white font-medium mb-2 md:mb-3">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
