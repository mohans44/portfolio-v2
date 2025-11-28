import { useState } from 'react';
import Header from './components/Header';
import BentoIntro from './components/BentoIntro';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import './App.css';

function App() {
  const [showResume, setShowResume] = useState(false);

  const openResume = () => setShowResume(true);
  const closeResume = () => setShowResume(false);

  return (
    <div className="app">
      <Header openResume={openResume} />
      <main>
        <BentoIntro openResume={openResume} />
        <Skills />
        <Projects />
        <Experience />
        <Blogs />
        <Contact />
      </main>
      <ResumeModal isOpen={showResume} onClose={closeResume} />
    </div>
  );
}

export default App;
