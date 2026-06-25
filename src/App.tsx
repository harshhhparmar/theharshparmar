/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Experience } from './components/Experience';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-brand selection:text-white">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Process />
      <Contact />
      <Footer />
      <Analytics />
    </main>
  );
}
