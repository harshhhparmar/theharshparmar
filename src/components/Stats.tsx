import { Reveal, Section } from "./Section";

const STATS = [
  { value: "2027", label: "Expected Graduation" },
  { value: "300+", label: "Hours Data Analysis with Python" },
];

export function Stats() {
  return (
    <Section id="stats" className="border-t border-b border-white/5 bg-[#050505]">
      <div className="flex flex-wrap justify-center sm:justify-start gap-16 md:gap-32 lg:gap-64 w-full">
        {STATS.map((stat, i) => (
          <Reveal key={i} delay={i * 0.1} width="fit-content">
            <div className="flex flex-col gap-1 sm:gap-2">
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-mono text-brand uppercase tracking-wider max-w-[120px] md:max-w-[150px]">
                {stat.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
