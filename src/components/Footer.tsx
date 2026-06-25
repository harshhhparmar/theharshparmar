export function Footer() {
  return (
    <footer className="bg-[#050505] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="font-display text-xl font-bold text-white mb-1">Harsh Parmar</div>
          <div className="text-gray-400 text-sm mb-4">Web Developer | AI Tools Enthusiast | Computer Engineering Student</div>
          <div className="text-brand font-mono text-xs uppercase tracking-widest">
            "Built with curiosity, code, and consistency."
          </div>
        </div>
        
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#projects" className="text-sm text-gray-500 hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="text-sm text-gray-500 hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</a>
          <a href="https://www.linkedin.com/in/harshparmar007" target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/harshhhparmar" target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
