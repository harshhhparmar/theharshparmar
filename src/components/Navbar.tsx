import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { num: "01", name: "Home", href: "#home" },
  { num: "02", name: "About", href: "#about" },
  { num: "03", name: "Projects", href: "#projects" },
  { num: "04", name: "Skills", href: "#skills" },
  { num: "05", name: "Achievements", href: "#achievements" },
  { num: "06", name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-[#050505]/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
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
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex flex-col text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                <span className="font-mono text-xs text-brand/70 mb-0.5 transition-colors group-hover:text-brand">
                  {link.num}
                </span>
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 rounded-full border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-32 px-6 flex flex-col gap-6"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-display font-medium text-gray-300 flex items-end gap-4"
              >
                <span className="font-mono text-brand text-lg">{link.num}</span>
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
