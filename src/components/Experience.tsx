import { Reveal, Section } from "./Section";

const ACTIVITIES = [
  {
    title: "Open Source Contributor",
    desc: "GirlScript Summer of Code 2026 contributor, exploring real-world collaboration and open-source contribution."
  },
  {
    title: "Product Builder",
    desc: "Building gush.sh, an AI image generation SaaS, from frontend design to product positioning and storage architecture planning."
  },
  {
    title: "Business Website Builder",
    desc: "Built and improved a local business website for Jay Computer to help users access online service information easily."
  },
  {
    title: "Academic Project Lead",
    desc: "Led and contributed to practical engineering projects such as FindIT/Back2U and AI-based platform concepts."
  }
];

export function Experience() {
  return (
    <Section className="bg-[#0a0a0a]">
      <Reveal>
        <div className="mb-8 md:mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">Beyond Coursework</h2>
        </div>
      </Reveal>
      
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {ACTIVITIES.map((act, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111] border border-white/5 pb-8 sm:pb-12 h-full">
              <div className="font-mono text-brand text-xs mb-3 md:mb-4">0{i + 1}</div>
              <h3 className="text-lg sm:text-xl font-display font-medium text-white mb-2 md:mb-3">{act.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{act.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
