import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-[#050505] py-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <div className="font-display text-xl font-bold text-white mb-1">Harsh Parmar</div>
          <div className="text-gray-400 text-sm mb-4">Web Developer | AI Tools Enthusiast | Computer Engineering Student</div>
          <div className="text-brand font-mono text-xs uppercase tracking-widest">
            "Built with curiosity, code, and consistency."
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0"
        >
          {['Projects', 'Skills', 'Contact'].map((item) => (
            <motion.a 
              key={item}
              whileHover={{ y: -2 }}
              href={`#${item.toLowerCase()}`} 
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.a 
            whileHover={{ y: -2 }}
            href="https://www.linkedin.com/in/harshparmar007" 
            target="_blank" 
            rel="noreferrer" 
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            LinkedIn
          </motion.a>
          <motion.a 
            whileHover={{ y: -2 }}
            href="https://github.com/harshhhparmar" 
            target="_blank" 
            rel="noreferrer" 
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
