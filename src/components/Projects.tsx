import { useState } from "react";
import { Reveal, Section } from "./Section";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github, X } from "lucide-react";

const PROJECTS = [
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
    title: "Jay Computer",
    subtitle: "Service Website",
    description: "A business website built for a local digital service business, helping users access government scheme info, documents, and online services.",
    tech: ["Web Dev", "Vercel", "Responsive"],
    role: "Developer / Builder",
    badge: "Client Utility",
    category: "Web",
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
    category: "Web",
    featured: false,
    githubLink: "https://github.com/harshhhparmar/A2-Thai",
    liveLink: "https://a2-thai.vercel.app/",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <Section id="projects" className="bg-[#050505] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-brand/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="text-center mb-12 relative z-10">
        <Reveal>
          <div className="inline-block font-mono text-brand text-sm tracking-[0.2em] uppercase mb-4">
            Selected Work
          </div>
          <h2 className="font-display text-4xl md:text-[48px] leading-[1.1] font-bold text-white mb-8">
            Projects I've Built.
          </h2>
        </Reveal>
      </div>
      
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        <AnimatePresence mode="popLayout">
          {PROJECTS.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:bg-white/[0.04] hover:border-brand/40 shadow-lg hover:shadow-2xl hover:shadow-brand/10"
            >
              <div className="p-5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2.5 py-1 bg-brand/10 text-brand text-[10px] font-mono font-semibold uppercase tracking-wider rounded border border-brand/20">
                    {project.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] sm:text-xs font-mono text-gray-400 px-2 py-1 bg-black/40 rounded border border-white/5">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] sm:text-xs font-mono text-gray-500 px-2 py-1">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between gap-3 mt-auto pt-5 border-t border-white/10">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium rounded-lg transition-all flex-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={14} /> GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-brand text-black text-xs font-semibold rounded-lg hover:bg-brand-light transition-all shadow-[0_0_15px_rgba(252,110,96,0.2)] hover:shadow-[0_0_20px_rgba(252,110,96,0.4)] flex-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

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
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-10 backdrop-blur-md"
              >
                <X size={20} />
              </button>

              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-brand/10 text-brand text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-brand/20">
                    {selectedProject.badge}
                  </span>
                  <span className="text-gray-500 text-sm font-mono">{selectedProject.role}</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-lg text-brand font-light mb-8">
                  {selectedProject.subtitle}
                </p>

                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="text-white font-medium mb-2">Overview</h4>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                  {/* @ts-ignore */}
                  {selectedProject.problemSolved && (
                    <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                      <h4 className="text-brand text-sm font-mono uppercase tracking-wider mb-2">Problem Solved</h4>
                      {/* @ts-ignore */}
                      <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.problemSolved}</p>
                    </div>
                  )}
                </div>

                <div className="mb-10">
                  <h4 className="text-white font-medium mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-gray-400 px-3 py-1.5 bg-black rounded-lg border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                  {selectedProject.liveLink && (
                    <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-brand text-black font-semibold text-sm rounded-full hover:bg-brand-light transition-colors flex-1 sm:flex-none">
                      Live Project <ArrowUpRight size={16} />
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-white font-medium text-sm rounded-full hover:bg-white/5 transition-colors flex-1 sm:flex-none">
                      <Github size={16} /> View Code
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
