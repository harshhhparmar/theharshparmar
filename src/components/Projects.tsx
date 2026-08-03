import { useState, useMemo } from "react";
import { Reveal, Section } from "./Section";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "Solenta Tiles",
    subtitle: "Premium Tile Showcase Platform",
    description: "A modern web application showcasing premium tile collections with an elegant user interface, responsive design, and smooth visual experience.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    role: "Frontend Developer",
    badge: "Client Business",
    category: "Frontend",
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
    category: "Full Stack",
    featured: true,
    githubLink: "https://github.com/harshhhparmar/NorthPeak",
    liveLink: "https://north-peak-ecru.vercel.app/"
  },
  {
    title: "Back2U",
    subtitle: "Lost & Found Campus Portal",
    description: "A web-based lost and found platform for college campuses where students and staff can report lost items, upload found items, search listings, and connect with item owners.",
    problemSolved: "Reduces confusion and improves recovery of lost items inside college campuses.",
    tech: ["MERN", "React", "Firebase Auth", "Responsive UI"],
    role: "Project Team Lead / Developer",
    badge: "Academic + Real-world",
    category: "Full Stack",
    featured: true,
    githubLink: "https://github.com/pratixa0310/Back2uwebapp",
    liveLink: "https://back2uwebapp.vercel.app/auth"
  },
  {
    title: "Jay Computer Business",
    subtitle: "Service Website",
    description: "A business website built for a local digital service business, helping users access government scheme info, documents, and online services.",
    tech: ["Web Dev", "Vercel", "Responsive"],
    role: "Developer / Builder",
    badge: "Client Utility",
    category: "Frontend",
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
    category: "Frontend",
    featured: false,
    githubLink: "https://github.com/harshhhparmar/A2-Thai",
    liveLink: "https://a2-thai.vercel.app/",
  },
];

const CATEGORIES = ["All", "Full Stack", "Frontend"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <Section id="projects" className="bg-[#050505] relative overflow-hidden">
      {/* Ambient background glows for glassmorphism */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-brand/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="text-center mb-12 md:mb-20 relative z-10">
        <Reveal>
          <div className="inline-block font-mono text-brand text-sm tracking-[0.2em] uppercase mb-4">
            Selected Work
          </div>
          <h2 className="font-display text-4xl md:text-[48px] leading-[1.1] font-bold text-white mb-10">
            Projects I've Built.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-brand text-black shadow-[0_0_15px_rgba(252,110,96,0.3)]" 
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200 border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
      
      <motion.div layout className="grid gap-8 md:gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              key={project.title}
              className={`interactive-hover group relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden flex flex-col ${project.featured ? 'lg:flex-row' : ''} transition-all duration-500 hover:bg-white/[0.04] hover:border-white/20`}
            >
              {/* Image Section (for featured projects) */}
              {project.featured && 'image' in project && project.image && (
                <div className="lg:w-5/12 relative overflow-hidden bg-[#0a0a0a]">
                  <motion.div
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={project.image as string} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent lg:bg-gradient-to-r" />
                  </motion.div>
                </div>
              )}

              {/* Content Section */}
              <div className={`p-8 md:p-12 relative z-10 flex-1 flex flex-col justify-center`}>
                <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6">
                  <span className="px-3 py-1 bg-brand/10 text-brand text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-brand/20">
                    {project.badge}
                  </span>
                  <span className="text-gray-500 text-xs sm:text-sm font-mono">{project.role}</span>
                </div>
                
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:text-brand transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-400 mb-6 font-light">{project.subtitle}</p>
                
                <p className="text-base text-gray-300 leading-[1.7] mb-8 max-w-2xl font-light">
                  {project.description}
                </p>

                {project.problemSolved && (
                  <div className="mb-8 p-5 bg-black/40 rounded-2xl border border-white/5 max-w-2xl backdrop-blur-md">
                    <span className="block text-brand text-xs font-mono uppercase tracking-wider mb-2">Problem Solved</span>
                    <span className="text-sm text-gray-300 leading-relaxed font-light">{project.problemSolved}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-gray-400 px-3 py-1.5 bg-[#050505] rounded-md border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-brand text-black font-semibold text-sm rounded-full hover:bg-brand-light transition-colors shadow-lg hover:shadow-brand/25">
                      Live Project <ArrowUpRight size={16} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-white font-medium text-sm rounded-full hover:bg-white/5 transition-colors">
                      <Github size={16} /> View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
