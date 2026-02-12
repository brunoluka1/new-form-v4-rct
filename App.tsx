import React from 'react';
import Hero from './components/Hero';
import DidYouKnow from './components/Calculator';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Hero />
      <DidYouKnow />
      <Features />
      <Testimonials />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;