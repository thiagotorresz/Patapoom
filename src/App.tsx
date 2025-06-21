import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EmotionalSection from './components/EmotionalSection';
import PuppyGallery from './components/PuppyGallery';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EmotionalSection />
      <PuppyGallery />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;