/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import { AdminPanel } from './components/AdminPanel';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'sonner';
import { BackToTop } from './components/BackToTop';
import { ScrollProgress } from './components/ScrollProgress';

function Portfolio() {
  return (
    <>
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
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-brand selection:text-white">
        <ScrollProgress />
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
        <Analytics />
        <Toaster theme="dark" position="bottom-right" />
      </main>
    </BrowserRouter>
  );
}
