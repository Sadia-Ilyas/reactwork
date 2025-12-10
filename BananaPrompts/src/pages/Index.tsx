import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Image, Video, Palette, Zap, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/common/FeatureCard';
import MediaCard from '@/components/common/MediaCard';
import { useLikes } from '@/hooks/useLikes';
import { imageGallery } from '@/data/mockData';

const features = [
  {
    icon: Image,
    title: 'Image Generation',
    description: 'Create stunning images from text descriptions using state-of-the-art AI models.',
  },
  {
    icon: Video,
    title: 'Video Creation',
    description: 'Transform ideas into captivating videos with our advanced video generation technology.',
  },
  {
    icon: Palette,
    title: 'Style Transfer',
    description: 'Apply artistic styles to your content with powerful style transfer algorithms.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate high-quality content in seconds with our optimized infrastructure.',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Your creations are protected with enterprise-grade security measures.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join thousands of creators sharing and discovering amazing AI-generated content.',
  },
];

const Index: React.FC = () => {
  const { toggleLike, isLiked } = useLikes();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
        
        <div className="layout-container relative">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Next-Gen AI Creation Platform
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Create <span className="gradient-text">Stunning</span> AI
              <br />
              Images & Videos
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Transform your imagination into reality. Generate breathtaking visuals 
              and videos with our cutting-edge AI technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/studio">
                <Button variant="gradient" size="xl">
                  Start Creating
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/image">
                <Button variant="outline" size="xl">
                  Explore Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="layout-container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Powerful <span className="gradient-text">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to create stunning AI-generated content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24">
        <div className="layout-container">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Latest <span className="gradient-text">Creations</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Discover what our community has been creating
              </p>
            </div>
            <Link to="/image">
              <Button variant="outline" size="lg" className="mt-4 md:mt-0">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {imageGallery.slice(0, 4).map((item) => (
              <MediaCard
                key={item.id}
                {...item}
                isLiked={isLiked(item.id)}
                onLike={toggleLike}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
        <div className="layout-container relative">
          <div className="glass-card rounded-3xl p-12 md:p-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Create</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join thousands of creators and start generating amazing AI content today.
            </p>
            <Link to="/studio">
              <Button variant="gradient" size="xl">
                Get Started Free
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
