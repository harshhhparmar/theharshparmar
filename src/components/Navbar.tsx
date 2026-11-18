import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    let ticking = false;
    let sectionsCache: { id: string; top: number }[] = [];

    const updateCache = () => {
      const allTargets = [{ name: "Home", href: "#home" }, ...NAV_LINKS];
      sectionsCache = allTargets.map((link) => {
        const el = document.querySelector(link.href) as HTMLElement;
        return { id: link.href, top: el ? el.offsetTop : 0 };
      });
    };

    updateCache();
    window.addEventListener("resize", updateCache);

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);

          let currentSection = "#home";
          sectionsCache.forEach((section) => {
            if (window.scrollY >= section.top - 180) {
              currentSection = section.id;
            }
          });

          setActiveSection(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateCache);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b",
          isScrolled
            ? "bg-[#050505]/90 backdrop-blur-xl border-white/10 py-3"
            : "bg-[#050505]/60 backdrop-blur-md border-white/[0.06] py-3.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-display text-lg font-bold tracking-tight text-white hover:text-brand transition-colors whitespace-nowrap shrink-0"
          >
            HARSH PARMAR
          </a>

          {/* Zone 2: 5 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-400">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={cn(
                    "relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-white",
                    isActive ? "text-white" : "text-gray-400"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-brand transition-all duration-200",
                      isActive ? "w-full" : "w-0"
                    )}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-brand text-black text-xs font-semibold hover:bg-brand-light transition-colors whitespace-nowrap shrink-0"
            >
              Hire Me
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation"
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors z-50 relative"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl pt-24 px-6 flex flex-col gap-5 md:hidden"
          >
            {NAV_LINKS.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="text-2xl font-display font-semibold text-white hover:text-brand transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-brand text-black font-semibold text-sm text-center"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
