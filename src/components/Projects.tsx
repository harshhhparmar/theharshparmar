import { useState } from "react";
import { Reveal, Section } from "./Section";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github, X } from "lucide-react";

const PROJECTS = [
  {
    title: "Jay Computer",
    subtitle: "Service Website",
    description: "A business website built for a local digital service business, helping users access government scheme info, documents, and online services.",
    tech: ["Web Dev", "Vercel", "Responsive"],
    role: "Developer / Builder",
    badge: "Featured · Client Utility",
    category: "Web",
    featured: true,
    highlighted: true,
    githubLink: "https://github.com/harshhhparmar/Jay-Computer-",
    liveLink: "https://jaycomputer.vercel.app/",
  },
  {
    title: "DoraPocket",
    subtitle: "Birthday Website Generator",
    description: "A Doraemon-inspired customizable birthday website builder to create a personalized digital world full of memories, smiles, and interactive birthday wishes.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    role: "Creator & Developer",
    badge: "Web App",
    category: "Web",
    featured: true,
    githubLink: "https://github.com/harshhhparmar/DoraPocket",
    liveLink: "https://dora-pocket-birthday-site-generator.vercel.app/"
  },
  {
    title: "Solenta Tiles",
    subtitle: "Premium Tile Showcase Platform",
    description: "A modern web application showcasing premium tile collections with an elegant user interface, responsive design, and smooth visual experience.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    role: "Frontend Developer",
    badge: "Client Business",
    category: "Web",
    featured: true,
    githubLink: "https://github.com/harshhhparmar/solenta.tiles",
    liveLink: "https://solentatiles.vercel.app/"
  },
  {
    title: "Back2U",
    subtitle: "Lost & Found Campus Portal",
    description: "A web-based lost and found platform for college campuses where students and staff can report lost items, upload found items, search listings, and connect with item owners.",
    problemSolved: "Reduces confusion and improves recovery of lost items inside college campuses.",
    tech: ["MERN", "React", "Firebase", "Responsive UI"],
    role: "Project Team Lead",
    badge: "Academic",
    category: "Web",
    featured: true,
    githubLink: "https://github.com/pratixa0310/Back2uwebapp",
    liveLink: "https://back2uwebapp.vercel.app/auth"
  },
  {
    title: "A2 Thai Spa",
    subtitle: "Service Website",
    description: "A business website built for a local spa, showcasing their services, pricing, and providing a clean online presence for customers to find them.",
    tech: ["React", "Tailwind CSS", "Vercel", "Responsive"],
    role: "Developer / Builder",
    badge: "Client Business",
    category: "Web",
    featured: false,
    githubLink: "https://github.com/harshhhparmar/A2-Thai",
    liveLink: "https://a2-thai.vercel.app/",
  },
  {
    title: "NorthPeak",
    subtitle: "AI SaaS & Productivity Tool",
    description: "An AI-powered platform for streamlining workflows, boosting productivity, and automating tasks. Features advanced insights, file management, and smart dashboards.",
    tech: ["Next.js", "React", "Tailwind CSS", "AI Integration"],
    role: "Full Stack Developer",
    badge: "SaaS Product",
    category: "AI",
    featured: true,
    githubLink: "https://github.com/harshhhparmar/NorthPeak",
    liveLink: "https://north-peak-ecru.vercel.app/"
  },
  {
    title: "LeadDesk Mini",
    subtitle: "Lead Management Mini-CRM",
    description: "A full-stack lead management mini-CRM allowing businesses to capture incoming leads from a conversion-optimized landing page and manage them within a secure, authenticated admin dashboard.",
    problemSolved: "Streamlines lead capture, real-time status tracking (New, Contacted, Closed), and live search with role-protected Firestore security.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Vercel"],
    role: "Full Stack Developer",
    badge: "SaaS / CRM",
    category: "Web",
    featured: true,
    githubLink: "https://github.com/harshhhparmar/LeadDesk-Mini-",
    liveLink: "https://lead-desk-mini-dh.vercel.app/"
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <Section id="projects" className="bg-[#050505] relative overflow-hidden">
      {/* Compact Horizontal Section Header */}
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-brand text-xs tracking-wider uppercase mb-1">
              02. Selected Work
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Projects I've Built.
            </h2>
          </div>
          <div className="font-mono text-xs text-gray-500">
            0{PROJECTS.length} Shipped Projects · Click any project for full case overview
          </div>
        </div>
      </Reveal>

      {/* High-Density Bento Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
        {PROJECTS.map((project) => {
          const isHighlighted = Boolean((project as any).highlighted);
          return (
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className={`group cursor-pointer rounded-2xl overflow-hidden flex flex-col justify-between p-5 transition-colors duration-200 relative ${
                isHighlighted
                  ? "sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-brand/[0.09] via-white/[0.03] to-white/[0.02] border border-brand/50 hover:border-brand shadow-[0_0_30px_rgba(252,110,96,0.1)]"
                  : "bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-brand/40"
              }`}
            >
              <div>
                {/* Unboxed Metadata Kicker */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 truncate">
                    <span className="text-brand font-semibold">{project.badge}</span>
                    <span aria-hidden="true" className="text-white/20">·</span>
                    <span className="truncate">{project.role}</span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                      isHighlighted
                        ? "bg-brand text-black"
                        : "bg-white/5 text-gray-400 group-hover:bg-brand group-hover:text-black"
                    }`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              <div className="mb-2">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-brand transition-colors inline">
                  {project.title}
                </h3>
                <span className="text-gray-500 text-xs sm:text-sm font-normal ml-2">
                  — {project.subtitle}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              {/* Clean Unboxed Tech Stack */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-gray-500 mb-4 pt-3 border-t border-white/[0.06]">
                {project.tech.map((tech, tIdx) => (
                  <span key={tech} className="inline-flex items-center gap-2">
                    <span className="text-gray-300 group-hover:text-brand-light transition-colors">
                      {tech}
                    </span>
                    {tIdx < project.tech.length - 1 && (
                      <span aria-hidden="true" className="text-white/20">·</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3.5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium rounded-lg transition-colors flex-1 whitespace-nowrap shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={13} /> GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3.5 py-2 bg-brand text-black text-xs font-semibold rounded-lg hover:bg-brand-light transition-colors flex-1 whitespace-nowrap shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#0a0a0a] border border-white/15 rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors z-10"
              >
                <X size={18} />
              </button>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-3">
                  <span className="text-brand font-semibold">{selectedProject.badge}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.role}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-base text-brand mb-6">
                  {selectedProject.subtitle}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1.5">Overview</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                  {selectedProject.problemSolved && (
                    <div className="p-4 bg-white/[0.03] rounded-xl border border-white/10">
                      <h4 className="text-brand text-xs font-mono uppercase tracking-wider mb-1">
                        Problem Solved
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {selectedProject.problemSolved}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-white text-sm font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-gray-300">
                    {selectedProject.tech.map((tech, i) => (
                      <span key={tech} className="inline-flex items-center gap-2">
                        <span>{tech}</span>
                        {i < selectedProject.tech.length - 1 && (
                          <span aria-hidden="true" className="text-white/20">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-5 border-t border-white/10">
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 bg-brand text-black font-semibold text-xs sm:text-sm rounded-lg hover:bg-brand-light transition-colors flex-1 sm:flex-none whitespace-nowrap"
                    >
                      Live Project <ArrowUpRight size={15} />
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 border border-white/15 text-white font-medium text-xs sm:text-sm rounded-lg hover:bg-white/10 transition-colors flex-1 sm:flex-none whitespace-nowrap"
                    >
                      <Github size={15} /> View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
