import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Projects   from './components/Projects';
// import Blog     from './components/Blog';
import Contact    from './components/Contact';
import Footer     from './components/Footer';
import Cursor     from './components/Cursor';

// Detail Pages
import CVInsightsDetail from './pages/CVInsightsDetail';
import CJAssistDetail from './pages/CJAssistDetail';
import CAGDetail from './pages/CAGDetail';

let lastScrollY = 0;

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf;
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 z-[9997] pointer-events-none"
      style={{
        height: '1px',
        width: `${progress * 100}%`,
        backgroundColor: 'var(--ink)',
        opacity: 0.18,
        transition: 'width 80ms linear',
        willChange: 'width',
      }}
    />
  );
};

// Track scroll direction globally and set data attr on <html>
const ScrollDirectionTracker = () => {
  useEffect(() => {
    const handleScroll = () => {
      const dir = window.scrollY >= lastScrollY ? 'down' : 'up';
      document.documentElement.setAttribute('data-scroll-dir', dir);
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return null;
};

function PortfolioMain() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <ScrollDirectionTracker />
      <Navbar />
      <Routes>
        <Route path="/" element={<PortfolioMain />} />
        <Route path="/projects/cvinsights" element={<CVInsightsDetail />} />
        <Route path="/projects/cj-assist" element={<CJAssistDetail />} />
        <Route path="/projects/cag" element={<CAGDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
