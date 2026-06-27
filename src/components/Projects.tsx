import { Reveal, Section, SectionHeading } from "./Section";
import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "Back2U",
    subtitle: "Lost & Found Campus Portal",
    description: "A web-based lost and found platform for college campuses where students and staff can report lost items, upload found items, search listings, and connect with item owners.",
    problemSolved: "Reduces confusion and improves recovery of lost items inside college campuses.",
    tech: ["MERN", "React", "Firebase Auth", "Responsive UI"],
    role: "Project Team Lead / Developer",
    badge: "Academic + Real-world",
    featured: true,
    githubLink: "https://github.com/harshhhparmar/Back2U",
  },
  {
    title: "Jay Computer Business",
    subtitle: "Service Website",
    description: "A business website built for a local digital service business, helping users access government scheme info, documents, and online services.",
    tech: ["Web Dev", "Vercel", "Responsive"],
    role: "Developer / Builder",
    badge: "Client Utility",
    featured: false,
    githubLink: "https://github.com/harshhhparmar/Jay-Computer-",
    liveLink: "https://jaycomputer.vercel.app/",
  },
  {
    title: "A2 Thai Spa",
    subtitle: "Service Website",
    description: "A business website built for a local spa, showcasing their services, pricing, and providing a clean online presence for customers to find them.",
    tech: ["React", "Tailwind CSS", "Vercel", "Responsive"],
    role: "Developer / Builder",
    badge: "Client Business",
    featured: false,
    githubLink: "https://github.com/harshhhparmar/A2-Thai",
    liveLink: "https://a2-thai.vercel.app/",
  },
];

export function Projects() {
  return (
    <Section id="projects" className="bg-[#0a0a0a]">
      <SectionHeading number="03" title="Selected Work" />
      
      <div className="grid gap-8 sm:gap-10 md:gap-12">
        {PROJECTS.map((project, idx) => (
          <Reveal key={project.title} delay={idx * 0.15}>
            <motion.div
              whileHover={{ 
                scale: 1.02,
                borderColor: "rgba(252, 110, 96, 0.5)",
                boxShadow: "0 0 30px rgba(252, 110, 96, 0.15)"
              }}
              className={`interactive-hover group relative bg-[#111] border border-white/5 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col ${project.featured ? 'md:flex-row gap-8 md:gap-10 items-center' : ''}`}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/5 blur-2xl transition-colors duration-500 rounded-3xl pointer-events-none" />

              <div className={`relative z-10 w-full`}>
                <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
                  <span className="px-3 py-1 bg-brand/10 text-brand text-[10px] sm:text-xs font-mono font-medium rounded-full border border-brand/20">
                    {project.badge}
                  </span>
                  <span className="text-gray-500 text-xs sm:text-sm font-mono">{project.role}</span>
                </div>
                
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-6 font-light">{project.subtitle}</p>
                
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                 {project.problemSolved && (
                  <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/5 max-w-3xl">
                    <span className="block text-brand text-xs font-mono uppercase mb-1">Problem Solved</span>
                    <span className="text-sm text-gray-300">{project.problemSolved}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-gray-400 px-2 py-1 bg-[#050505] rounded border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-brand text-white font-medium text-sm rounded-full hover:bg-brand-dark transition-colors">
                      Live <ArrowUpRight size={16} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/20 text-white font-medium text-sm rounded-full hover:bg-white/10 transition-colors">
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
