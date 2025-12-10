import React from 'react';
import { Heart, Download, Share2, Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MediaCardProps {
  id: string;
  imageUrl: string;
  title: string;
  author: string;
  likes: number;
  isLiked: boolean;
  onLike: (id: string) => void;
  isVideo?: boolean;
}

const MediaCard: React.FC<MediaCardProps> = ({
  id,
  imageUrl,
  title,
  author,
  likes,
  isLiked,
  onLike,
  isVideo = false,
}) => {
  return (
    <Card variant="interactive" className="group overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="p-4 rounded-full bg-primary/90 text-primary-foreground">
              <Play className="w-8 h-8" />
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="glass"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  onLike(id);
                }}
                className={cn(
                  "rounded-full",
                  isLiked && "text-destructive bg-destructive/20"
                )}
              >
                <Heart className={cn("w-4 h-4", isLiked && "fill-current")} />
              </Button>
              <Button variant="glass" size="icon" className="rounded-full">
                <Download className="w-4 h-4" />
              </Button>
              <Button variant="glass" size="icon" className="rounded-full">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium truncate">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-muted-foreground">{author}</span>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Heart className={cn("w-4 h-4", isLiked && "fill-destructive text-destructive")} />
            <span>{isLiked ? likes + 1 : likes}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MediaCard;
