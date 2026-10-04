import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'heading' | 'card';
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'blockquote';
  id?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'heading',
  delay = 0,
  className = '',
  as: Component = 'div',
  id,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion or SSR, reveal immediately without animation
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      setIsRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(element); // Animate once only!
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const variantClass = variant === 'heading' ? 'nori-reveal-heading' : 'nori-reveal-card';
  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Component
      id={id}
      ref={ref as any}
      style={delayStyle}
      className={`nori-reveal ${variantClass} ${isRevealed ? 'nori-revealed' : ''} ${className}`}
    >
      {children}
    </Component>
  );
};
