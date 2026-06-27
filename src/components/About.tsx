import { Reveal, Section, SectionHeading } from "./Section";

export function About() {
  return (
    <Section id="about" className="bg-[#0a0a0a]">
      <SectionHeading number="02" title="About Me" />
      
      <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-start">
        <Reveal delay={0.1}>
          <div className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed space-y-6 md:space-y-8 font-light">
            <p>
              Harsh Parmar is a Computer Engineering student at SAL College of Engineering, GTU, with a strong interest in web development, AI tools, Generative AI, data analytics, and product building.
            </p>
            <p>
              He enjoys learning by building real projects and is currently focused on becoming job-ready through strong fundamentals, modern web technologies, and practical portfolio work.
            </p>
          </div>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="bg-[#111] border border-white/5 p-6 sm:p-8 md:p-12 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl rounded-full transition-opacity opacity-0 group-hover:opacity-100 duration-700" />
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-white font-medium leading-tight mb-2 relative z-10">
              "I don't just want to learn technologies — I want to <span className="text-brand">build useful things</span> with them."
            </p>
            <p className="text-gray-500 font-mono text-sm mt-8 relative z-10">
              // Personal Positioning
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
