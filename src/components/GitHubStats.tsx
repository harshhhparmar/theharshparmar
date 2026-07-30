import { GitHubCalendar } from 'react-github-calendar';
import { Section, Reveal } from './Section';
import { motion } from 'motion/react';
import { Github, Star, GitFork, Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

const USERNAME = 'harshhhparmar';

export function GitHubStats() {
  const [stats, setStats] = useState({
    repos: 0,
    stars: 0,
    followers: 0
  });

  useEffect(() => {
    fetch(`https://api.github.com/users/${USERNAME}`)
      .then(res => res.json())
      .then(data => {
        setStats(prev => ({ ...prev, repos: data.public_repos, followers: data.followers }));
      })
      .catch(console.error);
      
    // Quick estimation for stars
    fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const stars = data.reduce((acc, repo) => acc + repo.stargazers_count, 0);
          setStats(prev => ({ ...prev, stars }));
        }
      })
      .catch(console.error);
  }, []);

  return (
    <Section id="github" className="bg-[#050505]">
      <div className="text-center mb-16 md:mb-24">
        <Reveal>
          <div className="inline-block font-mono text-brand text-sm tracking-[0.2em] uppercase mb-4">
            Coding Activity
          </div>
          <h2 className="font-display text-4xl md:text-[48px] leading-[1.1] font-bold text-white mb-6">
            My GitHub Journey.
          </h2>
          <p className="text-gray-400 text-[18px] max-w-2xl mx-auto font-light leading-[1.7]">
            I consistently write code and contribute to open source and personal projects.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Github className="text-brand mb-3" size={32} />
            <span className="text-3xl font-display font-bold text-white mb-1">{stats.repos}</span>
            <span className="text-gray-500 text-sm font-mono uppercase tracking-wider">Public Repos</span>
          </div>
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Star className="text-brand mb-3" size={32} />
            <span className="text-3xl font-display font-bold text-white mb-1">{stats.stars}</span>
            <span className="text-gray-500 text-sm font-mono uppercase tracking-wider">Total Stars</span>
          </div>
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Activity className="text-brand mb-3" size={32} />
            <span className="text-3xl font-display font-bold text-white mb-1">{stats.followers}</span>
            <span className="text-gray-500 text-sm font-mono uppercase tracking-wider">Followers</span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="bg-[#111] border border-white/5 rounded-[32px] p-8 md:p-12 overflow-x-auto">
          <div className="min-w-[800px] flex justify-center">
            <GitHubCalendar 
              username={USERNAME} 
              colorScheme="dark"
              theme={{
                light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                dark: ['#161b22', '#ff9c92', '#fc6e60', '#e85547', '#b53d31'],
              }}
              blockSize={14}
              blockMargin={4}
              fontSize={14}
            />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
