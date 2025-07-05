
import React from 'react';
import LoveBackground from '@/components/LoveBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import MusicPlayer from '@/components/MusicPlayer';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <LoveBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <MusicPlayer />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
