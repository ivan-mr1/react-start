import { useState, useEffect } from 'react';

export const useScrollProgress = (offset, maxWidth, pathLength) => {
  const [scrollData, setScrollData] = useState({
    isActive: false,
    dashOffset: pathLength,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const width = window.innerWidth;

      setScrollData({
        dashOffset: pathLength - (scrolled * pathLength) / (height || 1),
        isActive: scrolled > offset && width <= maxWidth,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [offset, maxWidth, pathLength]);

  return scrollData;
};
