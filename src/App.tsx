import React from 'react';
import { CustomCursor } from './components/common/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Toolkit } from './components/sections/Toolkit';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Journey } from './components/sections/Journey';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { CyberMarquee } from './components/common/CyberMarquee';
import { SynthwaveGridFloor } from './components/3d/SynthwaveGridFloor';
import { profileData } from './data/profile';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-cyber-void text-slate-100 selection:bg-cyber-pink selection:text-white font-space">
      {/* Dual Ring Custom Cursor */}
      <CustomCursor />

      {/* Futuristic Navigation Bar */}
      <Navbar />

      {/* Master Main Content */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Cyberpunk Marquee Strip 1 */}
        <CyberMarquee
          items={profileData.marqueeItems}
          speed={30}
          variant="pink"
        />

        {/* 3. Intro / About Section */}
        <About />

        {/* 4. Interactive 3D AI Skills & Core Topology */}
        <Skills />

        {/* 5. My AI/ML Toolkit */}
        <Toolkit />

        {/* Atmospheric Synthwave Horizon Separator */}
        <SynthwaveGridFloor className="-my-6" />

        {/* 6. Experience Timeline (IBM SkillBuild Internship) */}
        <Experience />

        {/* 7. Cyberpunk Marquee Strip 2 */}
        <CyberMarquee
          items={[
            "STUDENT SCORE PREDICTION",
            "LINEAR REGRESSION",
            "STUDENT SUCCESS PREDICTOR",
            "LOGISTIC REGRESSION",
            "DIWALI SALES ANALYSIS",
            "EXPLORATORY DATA ANALYSIS",
            "STREAMLIT DASHBOARD",
            "MODEL EVALUATION"
          ]}
          direction="right"
          speed={35}
          variant="cyan"
        />

        {/* 8. Selected Projects Showcase */}
        <Projects />

        {/* 9. AI/ML Learning Journey Roadmap */}
        <Journey />

        {/* 10. Education & Coursework */}
        <Education />

        {/* 11. Certifications & Job Simulations */}
        <Certifications />

        {/* 12. Beyond Code: Leadership & Community */}
        <Achievements />

        {/* 13. Contact & Transmission Terminal */}
        <Contact />
      </main>

      {/* Futuristic Footer */}
      <Footer />
    </div>
  );
};

export default App;
