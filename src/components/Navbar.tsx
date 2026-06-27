import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { num: "01", name: "Home", href: "#home" },
  { num: "02", name: "About", href: "#about" },
  { num: "03", name: "Projects", href: "#projects" },
  { num: "04", name: "Skills", href: "#skills" },
  { num: "05", name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = NAV_LINKS.map(link => document.querySelector(link.href));
      let currentSection = "#home";
      sections.forEach(section => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          if (window.scrollY >= sectionTop - 200) {
            currentSection = `#${section.id}`;
          }
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-[#050505]/80 backdrop-blur-xl border-white/10 py-4" : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#home" className="group flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-brand flex items-center justify-center font-display font-bold text-black text-sm transition-transform group-hover:scale-110">
              HP
            </span>
            <span className="font-display font-medium text-white tracking-wide">
              HARSH
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative flex flex-col text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  <span className={cn("font-mono text-[10px] uppercase mb-0.5 transition-colors", isActive ? "text-brand" : "text-brand/50 group-hover:text-brand")}>
                    {link.num}
                  </span>
                  <span className={cn("transition-colors", isActive ? "text-white" : "")}>
                    {link.name}
                  </span>
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-px bg-brand transition-all duration-300", 
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </a>
              )
            })}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto shadow-lg"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors z-50 relative"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-[#050505]/95 pt-32 px-6 flex flex-col gap-8"
          >
            {NAV_LINKS.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-display font-medium text-white flex items-center gap-6 group"
              >
                <span className="font-mono text-brand text-sm group-hover:translate-x-2 transition-transform">{link.num}</span>
                <span className="group-hover:translate-x-2 transition-transform">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
