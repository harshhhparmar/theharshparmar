import { motion } from "motion/react";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden w-full">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/10 via-[#050505] to-[#050505]" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 xl:px-8 w-full z-10 grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left Column - Text */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand mb-6 md:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            Available for internships & collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 md:mb-6 leading-[1.1]"
          >
            Building useful web products with code, <span className="text-brand">AI</span>, and clean design.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl leading-relaxed"
          >
            I'm <span className="text-white font-medium">Harsh Parmar</span>, a Computer Engineering student focused on web development, AI-powered tools, and practical digital products. I build projects that solve real problems — from campus platforms to AI SaaS ideas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-brand text-black px-8 py-4 rounded-full font-medium hover:bg-brand-light transition-all duration-300 shadow-[0_0_20px_rgba(252,110,96,0.3)] hover:shadow-[0_0_30px_rgba(252,110,96,0.5)]"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Column - Visual Abstract */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:block h-[500px]"
        >
          {/* Abstract Composition */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Main Window */}
            <div className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-20">
              {/* Window Header */}
              <div className="h-10 bg-white/5 flex items-center px-4 gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 text-xs font-mono text-gray-500 flex items-center gap-2">
                  <Terminal size={12} /> dev ~ /projects/gush-saas
                </div>
              </div>
              {/* Code Snippet */}
              <div className="p-6 font-mono text-sm leading-relaxed text-gray-300">
                <div className="text-brand opacity-60">// initialize AI stream</div>
                <div><span className="text-blue-400">const</span> <span className="text-yellow-200">generateLayout</span> = <span className="text-blue-400">async</span> ( <span className="text-orange-300">prompt</span> ) {`=>`} {`{`}</div>
                <div className="ml-4">
                  <span className="text-blue-400">const</span> response = <span className="text-blue-400">await</span> ai.<span className="text-yellow-200">generate</span>({`{`} 
                </div>
                <div className="ml-8 text-green-300">model: <span className="text-orange-300">"gemini-pro"</span>,</div>
                <div className="ml-8 text-green-300">prompt: <span className="text-orange-300">prompt</span></div>
                <div className="ml-4">{`}`});</div>
                <div className="ml-4"><span className="text-blue-400">return</span> response.<span className="text-yellow-200">build</span>();</div>
                <div>{`}`};</div>
                <div className="mt-4 animate-pulse text-brand font-bold">_</div>
              </div>
            </div>

            {/* Floating Tags & Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white border border-white/10 text-black px-4 py-2 rounded-lg font-mono text-xs font-bold shadow-xl rotate-6 z-30"
            >
              React.js
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -left-12 top-24 bg-brand text-black px-4 py-2 rounded-lg font-mono text-xs font-bold shadow-xl -rotate-6 z-10"
            >
              Next.js
            </motion.div>

            <motion.div
              animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-8 left-10 bg-[#111] border border-white/10 px-5 py-3 rounded-lg shadow-xl z-30"
            >
              <div className="text-xs text-gray-400 font-mono mb-1">AI Prompt</div>
              <div className="text-sm text-white">Generate premium SaaS UI...</div>
            </motion.div>
            
            <div className="absolute right-4 bottom-12 w-24 h-24 rounded-full border border-white/5 opacity-50 z-0 bg-brand/5 blur-xl" />
          </div>
        </motion.div>
      </div>

      {/* Currently Learning Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-[#0a0a0a]/50 backdrop-blur-sm overflow-hidden py-3">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center text-xs font-mono text-gray-500 gap-4">
          <span className="text-brand">●</span>
          <span>CURRENTLY LEARNING:</span>
          <span>PYTHON</span>
          <span className="opacity-40">/</span>
          <span>AI & ML BASICS</span>
          <span className="opacity-40">/</span>
          <span>KAGGLE</span>
          <span className="opacity-40">/</span>
          <span>JAVA & SPRING BOOT</span>
          <span className="opacity-40">/</span>
          <span>MICROSERVICES</span>
          <span className="opacity-40">/</span>
          <span>DATA ANALYTICS</span>
        </div>
      </div>
    </section>
  );
}
