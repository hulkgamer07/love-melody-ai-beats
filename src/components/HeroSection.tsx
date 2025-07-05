
import React from 'react';
import { Button } from '@/components/ui/button';
import { Headphones, Download, Music } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-love-pulse">
            Feel the Love in Every Beat
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover AI-powered music recommendations tailored for your heart. 
            <span className="text-pink-400 font-medium"> Telugu, Hindi, Tamil</span> and more languages supported.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { icon: Music, text: "AI Suggestions" },
            { icon: Download, text: "Unlimited Downloads" },
            { icon: Headphones, text: "Ad-Free Forever" }
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
              <feature.icon className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-2xl love-glow transform hover:scale-105 transition-all duration-300"
          >
            <Music className="w-5 h-5 mr-2" />
            Start Listening Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-pink-400/50 hover:bg-pink-400/10 text-pink-400 font-semibold px-8 py-3 rounded-full backdrop-blur-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download App
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400">1M+</div>
            <div className="text-sm text-muted-foreground">Songs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Lovers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">24/7</div>
            <div className="text-sm text-muted-foreground">Music Streaming</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
