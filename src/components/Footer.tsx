export function Footer() {
  return (
    <footer className="bg-[#050505] py-6 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-center sm:text-left">
          <span className="font-display text-base font-bold text-white">Harsh Parmar</span>
          <span className="hidden sm:inline text-white/20">·</span>
          <span className="text-gray-400 text-xs">
            Web Developer | AI Tools Enthusiast | Computer Engineering Student
          </span>
          <span className="hidden lg:inline text-white/20">·</span>
          <span className="text-brand font-mono text-[11px]">
            "Built with curiosity, code, and consistency."
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {["Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs text-gray-400 hover:text-white transition-colors whitespace-nowrap"
            >
              {item}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/harshparmar007"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-gray-400 hover:text-white transition-colors whitespace-nowrap"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/harshhhparmar"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-gray-400 hover:text-white transition-colors whitespace-nowrap"
          >
            GitHub
          </a>
          <a
            href="/admin"
            className="text-xs text-gray-500 hover:text-white transition-colors whitespace-nowrap"
          >
            Admin Panel
          </a>
        </div>
      </div>
    </footer>
  );
}
