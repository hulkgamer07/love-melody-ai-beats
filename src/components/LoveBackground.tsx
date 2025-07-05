
import React from 'react';

const LoveBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Hearts */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute text-pink-400 opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            fontSize: `${Math.random() * 20 + 15}px`,
          }}
        >
          <div className="animate-float-hearts">❤️</div>
        </div>
      ))}
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-rose-400/10 to-pink-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
    </div>
  );
};

export default LoveBackground;
