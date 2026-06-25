import { Section, SectionHeading } from "./Section";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Github, Linkedin, FileText, Check } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleEmailClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <Section id="contact" className="bg-[#fc6e60] relative overflow-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#111] border border-white/10 text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl"
          >
            <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
              <Check size={14} strokeWidth={3} />
            </div>
            <span className="font-medium text-sm">Opening your mail client...</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Texture mask */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-black/60 font-bold mb-6 tracking-widest text-sm uppercase">
            06 • Start a conversation
          </div>
          <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tight text-black mb-6 md:mb-8">
            Let's build something useful.
          </h2>
          <p className="text-lg md:text-2xl text-black/80 mb-8 md:mb-12 font-medium max-w-2xl mx-auto">
            Open to internships, freelance websites, AI product ideas, and collaboration opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:harshhhparmar007@gmail.com"
              onClick={handleEmailClick}
              className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors shadow-xl"
            >
              <Mail size={18} /> Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/harshparmar007"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-black text-black rounded-full font-medium hover:bg-black/5 transition-colors"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://github.com/harshhhparmar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-black text-black rounded-full font-medium hover:bg-black/5 transition-colors"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
