import { Reveal, Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const INFO_CARDS = [
  { label: "Location", value: "Ahmedabad, Gujarat" },
  { label: "Education", value: "Computer Engineering" },
  { label: "University", value: "SAL College of Engineering" },
  { label: "Expected Graduation", value: "2027" },
  { label: "Languages", value: "English · Hindi · Gujarati" },
];

const STATS = [
  { value: "2027", label: "Expected Graduation" },
  { value: "300+", label: "Hours Data Analysis with Python" },
];

const ACHIEVEMENTS = [
  "Selected as contributor for GirlScript Summer of Code 2026",
  "Reimagine Strategy Challenge 2026 participant — HDFC Bank & IIM Kozhikode Horizon",
  "Microsoft Artificial Intelligence / Generative AI certification",
  "freeCodeCamp Data Analysis with Python — 300+ hours",
];

export function About() {
  return (
    <Section id="about" className="bg-[#050505] relative overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-5 lg:gap-6 items-stretch relative z-10">
        {/* Left Column - Bio & Personal Details Bento (7 Cols) */}
        <div className="lg:col-span-7 flex">
          <Reveal className="w-full">
            <div className="h-full bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="font-mono text-brand text-xs tracking-wider uppercase">
                    01. About Me
                  </span>
                  <span className="font-mono text-xs text-gray-500">
                    Profile & Background
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 leading-[1.15]">
                  Turning ideas into modern web experiences.
                </h2>

                <p className="text-gray-400 text-sm sm:text-[15px] leading-[1.65] mb-6">
                  I am a Computer Engineering student deeply passionate about Web Development and building AI-powered products. Rather than just learning technologies, I focus on crafting modern, intuitive UIs and continuously expanding my technical foundation to build solutions that solve real problems.
                </p>
              </div>

              <div>
                {/* Compact 3-Column Architectural Info Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-5 border-t border-white/[0.08] mb-5">
                  {INFO_CARDS.map((card, idx) => (
                    <div
                      key={card.label}
                      className={`bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 ${
                        idx === INFO_CARDS.length - 1 ? "col-span-2 sm:col-span-1" : ""
                      }`}
                    >
                      <div className="text-[11px] font-mono text-gray-500 uppercase tracking-wide mb-1">
                        {card.label}
                      </div>
                      <div className="text-gray-200 text-xs sm:text-sm font-medium leading-snug">
                        {card.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand hover:text-white transition-colors"
                  >
                    Let's Connect <ArrowUpRight size={14} />
                  </a>
                  <span className="text-xs font-mono text-gray-500">
                    Open for Internships & Freelance
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column - Key Stats & Proof of Work Bento (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Stats Sub-Card */}
          <div id="stats">
            <Reveal delay={0.05}>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 flex flex-col justify-between"
                  >
                    <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono tabular-nums mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono text-brand leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Proof of Work / Achievements Sub-Card */}
          <div id="achievements" className="flex-1 flex">
            <Reveal delay={0.1} className="w-full">
              <div className="h-full bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.07]">
                  <h3 className="font-display text-lg font-bold text-white tracking-tight">
                    Proof of Work & Certifications
                  </h3>
                  <span className="font-mono text-xs text-brand">04 Milestones</span>
                </div>

                <div className="flex flex-col divide-y divide-white/[0.06]">
                  {ACHIEVEMENTS.map((item, i) => (
                    <div
                      key={i}
                      className="py-2.5 first:pt-0 last:pb-0 flex items-baseline gap-3"
                    >
                      <span className="font-mono text-xs text-brand shrink-0 tabular-nums">
                        0{i + 1}.
                      </span>
                      <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
