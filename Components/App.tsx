import React from 'react';
import Hero from './components/Hero';
import Awards from './components/Awards';
import BentoGrid from './components/BentoGrid';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import StatusBadge from './components/ui/StatusBadge';

const App: React.FC = () => {
  return (
    <main className="bg-[#050505] min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-100">
      <StatusBadge />
      <Hero />
      <Awards />
      <BentoGrid />
      <TechStack />
      <Footer />
    </main>
  );
};

export default App;