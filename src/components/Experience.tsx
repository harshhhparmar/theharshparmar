import { Reveal, Section } from "./Section";
import { Briefcase, Code2, Globe, GraduationCap } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    date: "2026 - Present",
    icon: Code2,
    description:
      "Active contributor in GSSoC '26, exploring real-world collaboration, improving technical skills, and making impactful open-source contributions.",
  },
  {
    role: "Product Builder & Founder",
    company: "NorthPeak Digital - SaaS Agency",
    date: "2025 - Present",
    icon: Globe,
    description:
      "Building an AI image generation SaaS platform. Architecting the frontend design, product positioning, and scalable storage solutions.",
  },
  {
    role: "Freelance Web Developer",
    company: "Local Businesses",
    date: "2024 - 2025",
    icon: Briefcase,
    description:
      "Designed and developed business websites (e.g., Jay Computer, A2 Thai Spa) to help clients establish a professional online presence.",
  },
  {
    role: "Academic Project Lead",
    company: "SAL College of Engineering",
    date: "2023 - Present",
    icon: GraduationCap,
    description:
      "Led and contributed to practical engineering projects such as FindIT/Back2U and various AI-based platform concepts.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Understand the Problem",
    desc: "I start by understanding the real user problem, not just the technology. Function before form.",
  },
  {
    num: "02",
    title: "Design the Flow",
    desc: "I plan the user journey, screens, and core features before jumping into code to ensure clarity.",
  },
  {
    num: "03",
    title: "Build Fast",
    desc: "I create responsive, practical web interfaces using modern tools like React, Next.js, Firebase, and Vercel.",
  },
  {
    num: "04",
    title: "Improve with Feedback",
    desc: "I refine UI, performance, content, and usability until the project feels complete and truly useful.",
  },
];

export function Experience() {
  return (
    <Section id="experience" className="bg-[#050505] relative overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-5 lg:gap-6 items-stretch relative z-10">
        {/* Left 7 Columns: Experience & Activities */}
        <div className="lg:col-span-7 flex flex-col">
          <Reveal className="h-full">
            <div className="h-full bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5 pb-3 border-b border-white/[0.08]">
                <div>
                  <div className="font-mono text-brand text-xs tracking-wider uppercase mb-1">
                    03. Journey
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Experience & Activities.
                  </h2>
                </div>
                <span className="font-mono text-xs text-gray-500">
                  2023 — Present
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 flex-1">
                {EXPERIENCES.map((exp, i) => {
                  const Icon = exp.icon;
                  return (
                    <div
                      key={i}
                      className="bg-white/[0.02] border border-white/[0.07] hover:border-brand/30 rounded-xl p-4 flex flex-col justify-between transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span className="text-[11px] font-mono text-brand">
                            {exp.date}
                          </span>
                          <Icon size={15} className="text-gray-500 shrink-0" />
                        </div>
                        <h3 className="font-display text-base font-bold text-white leading-snug mb-0.5">
                          {exp.role}
                        </h3>
                        <div className="text-xs font-mono text-gray-400 mb-2.5">
                          {exp.company}
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right 5 Columns: How I Build (Process) */}
        <div className="lg:col-span-5 flex flex-col">
          <Reveal delay={0.08} className="h-full">
            <div className="h-full bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5 pb-3 border-b border-white/[0.08]">
                <div>
                  <div className="font-mono text-brand text-xs tracking-wider uppercase mb-1">
                    Workflow
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    How I Build.
                  </h2>
                </div>
                <span className="font-mono text-xs text-gray-500">
                  Concept → Strategy → Execution
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 flex-1">
                {STEPS.map((step) => (
                  <div
                    key={step.num}
                    className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3.5 flex items-start gap-3.5"
                  >
                    <span className="font-mono text-xs font-bold text-brand pt-0.5 shrink-0 tabular-nums">
                      {step.num}.
                    </span>
                    <div>
                      <h3 className="font-display text-sm font-semibold text-white mb-0.5">
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
