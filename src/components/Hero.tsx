import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Camera } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePortraitImage } from "../lib/portrait";

const TYPING_TEXT = "Building useful web products with code, ";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const { portraitSrc, updatePortraitFile } = usePortraitImage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < TYPING_TEXT.length) {
        setTypedText(TYPING_TEXT.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden w-full"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/10 via-[#050505] to-[#050505]" />

      {/* Floating decorative blobs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] -ml-[250px] -mt-[250px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand/10 to-transparent rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[650px] h-[650px] -mr-[325px] -mb-[325px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand/10 to-transparent rounded-full pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 w-full z-10 grid md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
        {/* Left Column - Compact Text Content */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs font-mono text-brand mb-4 tracking-wide"
          >
            <span>Available for internships & collaborations</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-3"
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tighter text-white leading-[1.05]">
              HARSH
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-gray-300 mb-4 sm:mb-5 leading-[1.25] max-w-xl min-h-[68px] sm:min-h-[82px]"
          >
            {typedText}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              <span className="text-brand">AI</span>, and clean design.
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2.5 h-6 sm:h-7 bg-brand ml-1 align-middle"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-[15px] text-gray-400 mb-6 sm:mb-7 max-w-lg leading-[1.7] font-light"
          >
            I am a Computer Engineering student focused on web development, AI-powered tools, and practical digital products. I build projects that solve real problems — from campus platforms to AI SaaS ideas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3.5"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-2 bg-brand text-black px-6 py-3 rounded-full text-sm font-semibold transition-shadow duration-200 shadow-[0_0_20px_rgba(252,110,96,0.3)] hover:shadow-[0_0_30px_rgba(252,110,96,0.5)] whitespace-nowrap shrink-0"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <div className="flex items-center gap-2.5 ml-1">
              <a
                href="https://github.com/harshhhparmar"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/harshparmar007"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Professional Studio Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="md:col-span-5 flex justify-center md:justify-end"
        >
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              const file = e.dataTransfer.files?.[0];
              if (file && file.type.startsWith("image/")) {
                updatePortraitFile(file);
              }
            }}
            className="relative w-full max-w-[290px] sm:max-w-[320px] lg:max-w-[350px] group"
          >
            {/* Ambient Frame Glow */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-brand/20 via-brand/5 to-transparent rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Portrait Container */}
            <div
              className={`relative aspect-[3/4] rounded-2xl overflow-hidden border transition-all duration-300 bg-[#141414] shadow-2xl ${
                isDragging ? "border-brand ring-2 ring-brand/40" : "border-white/15 group-hover:border-brand/40"
              }`}
            >
              <img
                src={portraitSrc}
                alt="Harsh Parmar — Professional Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Subtle Bottom Gradient Scrim for Editorial Caption */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

              {/* Upload / Replace Portrait Action */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) updatePortraitFile(file);
                }}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                title="Click or drag & drop your portrait photo to update"
                className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/65 hover:bg-black/85 text-white/90 text-[11px] font-mono border border-white/15 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 backdrop-blur-md cursor-pointer whitespace-nowrap shrink-0"
              >
                <Camera size={12} className="text-brand" />
                Change Photo
              </button>

              {/* Editorial Caption inside Frame */}
              <div className="absolute bottom-3.5 inset-x-4 flex items-end justify-between z-10 pointer-events-none">
                <div>
                  <div className="font-display text-sm font-semibold text-white tracking-tight">
                    Harsh Parmar
                  </div>
                  <div className="font-mono text-[11px] text-gray-300">
                    Computer Engineering · AI & Web
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Currently Learning Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-[#0a0a0a]/50 backdrop-blur-sm overflow-hidden py-3">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center text-xs font-mono text-gray-500 gap-4 overflow-x-auto no-scrollbar whitespace-nowrap">
          <span className="text-brand font-semibold">CURRENTLY LEARNING:</span>
          <span>PYTHON</span>
          <span className="opacity-40">·</span>
          <span>AI & ML BASICS</span>
          <span className="opacity-40">·</span>
          <span>KAGGLE</span>
          <span className="opacity-40">·</span>
          <span>JAVA & SPRING BOOT</span>
          <span className="opacity-40">·</span>
          <span>MICROSERVICES</span>
          <span className="opacity-40">·</span>
          <span>DATA ANALYTICS</span>
        </div>
      </div>
    </section>
  );
}
