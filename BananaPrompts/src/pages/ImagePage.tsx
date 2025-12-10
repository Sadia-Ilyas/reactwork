import React, { useState } from 'react';
import { Search, Filter, Grid3X3, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MediaCard from '@/components/common/MediaCard';
import { useLikes } from '@/hooks/useLikes';
import { imageGallery } from '@/data/mockData';
import { cn } from '@/lib/utils';

const categories = ['All', 'Abstract', 'Cyberpunk', 'Nature', 'Fantasy', 'Landscape'];

const ImagePage: React.FC = () => {
  const { toggleLike, isLiked } = useLikes();
  const [activeCategory, setActiveCategory] = useState('All');
  const [gridSize, setGridSize] = useState<'small' | 'large'>('large');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredImages = imageGallery.filter((item) => {
    const matchesCategory = activeCategory === 'All' || 
      item.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="layout-container">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            AI <span className="gradient-text">Image</span> Gallery
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore stunning AI-generated images from our creative community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search images..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 p-1 bg-secondary rounded-lg">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-sm font-medium transition-all",
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 p-1 bg-secondary rounded-lg">
              <Button
                variant={gridSize === 'large' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setGridSize('large')}
                className="h-8 w-8"
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
              <Button
                variant={gridSize === 'small' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setGridSize('small')}
                className="h-8 w-8"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={cn(
          "grid gap-6",
          gridSize === 'large' 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        )}>
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MediaCard
                {...item}
                isLiked={isLiked(item.id)}
                onLike={toggleLike}
              />
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No images found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePage;
