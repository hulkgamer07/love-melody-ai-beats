
import React from 'react';
import { Card } from '@/components/ui/card';
import { Music, Download, Video, Mic, Cloud, Share } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Music,
      title: "AI Music Suggestions",
      description: "Smart recommendations based on your mood, time, and listening habits",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Download,
      title: "Unlimited Downloads",
      description: "Download and enjoy your favorite songs offline anytime, anywhere",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Video,
      title: "Audio + Video Playback",
      description: "Switch seamlessly between audio and video where available",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mic,
      title: "Lyrics with Real-time Scrolling",
      description: "Follow along with synchronized lyrics for all your favorite tracks",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Cloud,
      title: "Cloud Backup",
      description: "Save your playlists and preferences securely in the cloud",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: Share,
      title: "Social Sharing",
      description: "Share your favorite songs and playlists with friends and loved ones",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Powerful Features for Music Lovers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of music streaming with our AI-powered features designed for the ultimate listening experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 card-gradient border-none overflow-hidden">
              <div className="p-6 space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:animate-love-pulse`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-pink-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
