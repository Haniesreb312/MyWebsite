import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SkillsChart from './components/SkillsChart';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cyber-black text-cyber-text selection:bg-cyber-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <SkillsChart />
      </main>
      <Footer />
    </div>
  );
};

export default App;