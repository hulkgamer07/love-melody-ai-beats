
import React from 'react';
import { Music, Download, Share } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black/40 backdrop-blur-lg border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Love Music
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI-powered music streaming designed for music lovers. Experience love through every beat.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>AI Music Recommendations</li>
              <li>Unlimited Downloads</li>
              <li>Multi-language Support</li>
              <li>Ad-Free Experience</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Languages</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Telugu Music</li>
              <li>Hindi Bollywood</li>
              <li>Tamil Songs</li>
              <li>English Hits</li>
            </ul>
          </div>

          {/* Download */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get the App</h4>
            <div className="space-y-3">
              <button className="flex items-center space-x-2 w-full px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <Download className="w-4 h-4 text-pink-400" />
                <span className="text-sm">Download APK</span>
              </button>
              <button className="flex items-center space-x-2 w-full px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <Share className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Install PWA</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Love Music. Made with ❤️ for music lovers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
