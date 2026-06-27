import { Reveal, Section } from "./Section";
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
    githubLink: "https://github.com/harshhhparmar/Back2U"
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
    <Section id="projects" className="bg-[#050505]">
      <div className="text-center mb-16 md:mb-24">
        <Reveal>
          <div className="inline-block font-mono text-brand text-sm tracking-[0.2em] uppercase mb-4">
            Selected Work
          </div>
          <h2 className="font-display text-4xl md:text-[48px] leading-[1.1] font-bold text-white">
            Projects I've Built.
          </h2>
        </Reveal>
      </div>
      
      <div className="grid gap-8 md:gap-12">
        {PROJECTS.map((project, idx) => (
          <Reveal key={project.title} delay={idx * 0.15}>
            <motion.div
              whileHover="hover"
              initial="initial"
              className={`interactive-hover group relative bg-[#111] border border-white/5 rounded-[32px] overflow-hidden flex flex-col ${project.featured ? 'lg:flex-row' : ''} transition-colors duration-500 hover:border-white/10`}
            >
              {/* Image Section (for featured projects) */}
              {project.featured && project.image && (
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
                      src={project.image} 
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
                  <div className="mb-8 p-5 bg-white/5 rounded-2xl border border-white/5 max-w-2xl backdrop-blur-sm">
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

                <motion.div 
                  variants={{
                    initial: { y: 0 },
                    hover: { y: -5 }
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-4 mt-auto"
                >
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
                </motion.div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
