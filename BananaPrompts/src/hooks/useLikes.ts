import { useState, useCallback } from 'react';

export const useLikes = (initialLikes: Set<string> = new Set()) => {
  const [likedItems, setLikedItems] = useState<Set<string>>(initialLikes);

  const toggleLike = useCallback((id: string) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  const isLiked = useCallback((id: string) => {
    return likedItems.has(id);
  }, [likedItems]);

  return { likedItems, toggleLike, isLiked };
};
