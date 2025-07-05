
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Headphones } from 'lucide-react';

const MusicPlayer = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Experience Love Through Music
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our premium music player with love-themed animations and crystal-clear audio quality.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient border-none overflow-hidden">
            <div className="p-8">
              {/* Mock Player Interface */}
              <div className="space-y-6">
                {/* Currently Playing */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center love-glow">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-pink-400">Dil Diyan Gallan</h3>
                    <p className="text-muted-foreground">Atif Aslam • Romantic Bollywood Hits</p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Headphones className="w-4 h-4" />
                    <span>High Quality</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full w-1/3 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1:23</span>
                    <span>4:17</span>
                  </div>
                </div>

                {/* Player Controls */}
                <div className="flex justify-center space-x-6">
                  {['⏮️', '⏯️', '⏭️'].map((icon, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="lg"
                      className={`w-12 h-12 rounded-full ${index === 1 ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 love-glow' : 'hover:bg-white/10'}`}
                    >
                      <span className="text-xl">{icon}</span>
                    </Button>
                  ))}
                </div>

                {/* Additional Controls */}
                <div className="flex justify-center space-x-8 text-muted-foreground">
                  <button className="hover:text-pink-400 transition-colors">🔀</button>
                  <button className="hover:text-pink-400 transition-colors">❤️</button>
                  <button className="hover:text-pink-400 transition-colors">📱</button>
                  <button className="hover:text-pink-400 transition-colors">🔁</button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
