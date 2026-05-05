import { Routes, Route } from 'react-router-dom';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import Projects from './components/Projects';
import About    from './components/About';
import Skills   from './components/Skills';
import Blog     from './components/Blog';
import Contact  from './components/Contact';
import Footer   from './components/Footer';

// Detail Pages
import CVInsightsDetail from './pages/CVInsightsDetail';
import CJAssistDetail from './pages/CJAssistDetail';

function PortfolioMain() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Blog />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PortfolioMain />} />
        <Route path="/projects/cvinsights" element={<CVInsightsDetail />} />
        <Route path="/projects/cj-assist" element={<CJAssistDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
