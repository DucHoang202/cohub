import React from 'react';
import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Sports from './components/Sports.tsx';
import Tech from './components/Tech.tsx';
import HR from './components/HR.tsx';
import Language from './components/Language.tsx';
import Experts from './components/Experts.tsx';
import Benefits from './components/Benefits.tsx';
import AIAgent from './components/AIAgent.tsx';
import B2B from './components/B2B.tsx';
import Stats from './components/Stats.tsx';
import Blog from './components/Blog.tsx';
import Newsletter from './components/Newsletter.tsx';
import Footer from './components/Footer.tsx';
import NotFound from './pages/NotFound.tsx';
import Features from './pages/Features.tsx';

function Home() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Sports />
        <Tech />
        <HR />
        <Language />
        <Experts />
        <Benefits />
        <AIAgent />
        <B2B />
        <Stats />
        <Blog />
        <Newsletter />

      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
