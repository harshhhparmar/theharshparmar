import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Camera, Mail } from "lucide-react";
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
    }, 35);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-20 sm:pt-24 pb-0 overflow-hidden w-full border-b border-white/[0.08] bg-[#050505]"
    >
      {/* Subtle ambient radial gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/10 via-[#050505] to-[#050505] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Main Hero Split */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pb-8">
          {/* Left Column - Architectural Typographic Card (8 Cols) */}
          <div className="lg:col-span-8 bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-gray-400 mb-4 pb-3 border-b border-white/[0.06]">
                <span className="text-brand font-medium">Available for internships & collaborations</span>
                <span>Ahmedabad, Gujarat · Computer Engineering</span>
              </div>

              <div className="mb-2">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.05]">
                  HARSH PARMAR
                </h2>
              </div>

              <h1 className="font-display text-xl sm:text-2xl lg:text-[30px] font-bold tracking-tight text-gray-200 mb-4 leading-[1.25] max-w-2xl min-h-[56px] sm:min-h-[68px]">
                {typedText}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.4 }}
                >
                  <span className="text-brand">AI</span>, and clean design.
                </motion.span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-5 sm:h-6 bg-brand ml-1 align-middle"
                />
              </h1>

              <p className="text-sm sm:text-[15px] text-gray-400 mb-6 max-w-2xl leading-[1.65]">
                I am a Computer Engineering student focused on web development, AI-powered tools, and practical digital products. I build projects that solve real problems — from campus platforms to AI SaaS ideas.
              </p>
            </div>

            {/* Action Bar + Inline Quick Metrics */}
            <div className="pt-5 border-t border-white/[0.07] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center gap-2 bg-brand text-black px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-light transition-colors whitespace-nowrap shrink-0"
                >
                  View Projects
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap shrink-0"
                >
                  <Mail size={15} className="text-brand" />
                  Let's Connect
                </a>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/harshhhparmar"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:border-brand/40 transition-colors"
                >
                  <Github size={17} />
                </a>
                <a
                  href="https://linkedin.com/in/harshparmar007"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 hover:text-white hover:border-brand/40 transition-colors"
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Single Studio Portrait Card (4 Cols) */}
          <div className="lg:col-span-4 flex">
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
              className="relative w-full group flex flex-col"
            >
              <div
                className={`relative flex-1 min-h-[300px] sm:min-h-[340px] lg:min-h-full rounded-2xl overflow-hidden border transition-all duration-200 bg-[#111111] ${
                  isDragging ? "border-brand ring-2 ring-brand/40" : "border-white/15 group-hover:border-brand/40"
                }`}
              >
                <img
                  src={portraitSrc}
                  alt="Harsh Parmar — Professional Portrait"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Measured Bottom Scrim */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />

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
                  className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/70 hover:bg-black/90 text-white/90 text-[11px] font-mono border border-white/15 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 backdrop-blur-md cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Camera size={12} className="text-brand" />
                  Change Photo
                </button>

                {/* Caption inside Frame */}
                <div className="absolute bottom-3.5 inset-x-4 flex items-end justify-between z-10 pointer-events-none">
                  <div>
                    <div className="font-display text-sm font-semibold text-white tracking-tight">
                      Harsh Parmar
                    </div>
                    <div className="font-mono text-[11px] text-gray-300">
                      SAL College of Engineering · Batch of 2027
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Currently Learning Strip */}
      <div className="border-t border-white/[0.06] bg-[#080808] py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-xs font-mono text-gray-400 gap-3 overflow-x-auto no-scrollbar whitespace-nowrap">
          <span className="text-brand font-semibold shrink-0">CURRENTLY LEARNING:</span>
          <span>PYTHON</span>
          <span className="text-white/20">·</span>
          <span>AI & ML BASICS</span>
          <span className="text-white/20">·</span>
          <span>KAGGLE</span>
          <span className="text-white/20">·</span>
          <span>JAVA & SPRING BOOT</span>
          <span className="text-white/20">·</span>
          <span>MICROSERVICES</span>
          <span className="text-white/20">·</span>
          <span>DATA ANALYTICS</span>
        </div>
      </div>
    </section>
  );
}
