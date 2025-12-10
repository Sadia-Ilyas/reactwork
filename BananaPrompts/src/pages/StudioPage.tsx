import React, { useState } from 'react';
import { Sparkles, Image, Video, Wand2, Settings2, Download, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

type GenerationType = 'image' | 'video';

const stylePresets = [
  { id: 'realistic', name: 'Realistic', color: 'from-blue-500 to-cyan-500' },
  { id: 'anime', name: 'Anime', color: 'from-pink-500 to-purple-500' },
  { id: 'abstract', name: 'Abstract', color: 'from-orange-500 to-red-500' },
  { id: 'cyberpunk', name: 'Cyberpunk', color: 'from-cyan-500 to-violet-500' },
  { id: 'fantasy', name: 'Fantasy', color: 'from-green-500 to-emerald-500' },
  { id: 'minimal', name: 'Minimal', color: 'from-gray-400 to-gray-600' },
];

const StudioPage: React.FC = () => {
  const [generationType, setGenerationType] = useState<GenerationType>('image');
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('realistic');
  const [creativity, setCreativity] = useState([50]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="layout-container">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Creation <span className="gradient-text">Studio</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transform your ideas into stunning visuals with AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Generation Type */}
            <Card variant="glass">
              <CardContent className="p-4">
                <label className="text-sm font-medium text-muted-foreground mb-3 block">
                  Generation Type
                </label>
                <div className="flex gap-2">
                  <Button
                    variant={generationType === 'image' ? 'default' : 'outline'}
                    className="flex-1"
                    onClick={() => setGenerationType('image')}
                  >
                    <Image className="w-4 h-4 mr-2" />
                    Image
                  </Button>
                  <Button
                    variant={generationType === 'video' ? 'default' : 'outline'}
                    className="flex-1"
                    onClick={() => setGenerationType('video')}
                  >
                    <Video className="w-4 h-4 mr-2" />
                    Video
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Prompt Input */}
            <Card variant="glass">
              <CardContent className="p-4">
                <label className="text-sm font-medium text-muted-foreground mb-3 block">
                  Describe Your Vision
                </label>
                <Textarea
                  placeholder="A majestic dragon flying over a cyberpunk city at sunset, neon lights reflecting off metallic scales..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[120px] resize-none"
                />
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-muted-foreground">
                    {prompt.length}/500 characters
                  </span>
                  <Button variant="ghost" size="sm">
                    <Wand2 className="w-4 h-4 mr-1" />
                    Enhance
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Style Presets */}
            <Card variant="glass">
              <CardContent className="p-4">
                <label className="text-sm font-medium text-muted-foreground mb-3 block">
                  Style Preset
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {stylePresets.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={cn(
                        "p-3 rounded-lg text-center transition-all duration-300",
                        selectedStyle === style.id
                          ? "ring-2 ring-primary bg-primary/10"
                          : "bg-secondary hover:bg-secondary/80"
                      )}
                    >
                      <div className={cn(
                        "w-8 h-8 rounded-full mx-auto mb-2 bg-gradient-to-br",
                        style.color
                      )} />
                      <span className="text-xs font-medium">{style.name}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Creativity Slider */}
            <Card variant="glass">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-muted-foreground">
                    Creativity Level
                  </label>
                  <span className="text-sm text-primary font-medium">{creativity[0]}%</span>
                </div>
                <Slider
                  value={creativity}
                  onValueChange={setCreativity}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Conservative</span>
                  <span>Creative</span>
                </div>
              </CardContent>
            </Card>

            {/* Generate Button */}
            <Button
              variant="gradient"
              size="xl"
              className="w-full"
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate {generationType === 'image' ? 'Image' : 'Video'}
                </>
              )}
            </Button>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-2">
            <Card variant="glass" className="h-full min-h-[600px]">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-semibold text-lg">Preview</h3>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Settings2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex-1 rounded-xl bg-secondary/50 flex items-center justify-center border-2 border-dashed border-border">
                  {isGenerating ? (
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                      </div>
                      <p className="text-muted-foreground font-medium">Creating your masterpiece...</p>
                      <p className="text-sm text-muted-foreground mt-1">This may take a few moments</p>
                    </div>
                  ) : (
                    <div className="text-center px-8">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                        {generationType === 'image' ? (
                          <Image className="w-8 h-8 text-muted-foreground" />
                        ) : (
                          <Video className="w-8 h-8 text-muted-foreground" />
                        )}
                      </div>
                      <p className="text-muted-foreground font-medium">
                        Your {generationType} will appear here
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Enter a prompt and click generate to create
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioPage;
