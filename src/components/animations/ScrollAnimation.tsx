'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeUp' | 'fadeIn' | 'scale' | 'slideLeft' | 'slideRight';
  delay?: number;
  duration?: number;
  className?: string;
  trigger?: boolean;
}

const ScrollAnimation = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 1,
  className = '',
  trigger = true,
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current || !trigger) return;

    const element = elementRef.current;
    
    // Set initial state based on animation type
    switch (animation) {
      case 'fadeUp':
        gsap.set(element, { opacity: 0, y: 50 });
        break;
      case 'fadeIn':
        gsap.set(element, { opacity: 0 });
        break;
      case 'scale':
        gsap.set(element, { opacity: 0, scale: 0.8 });
        break;
      case 'slideLeft':
        gsap.set(element, { opacity: 0, x: -100 });
        break;
      case 'slideRight':
        gsap.set(element, { opacity: 0, x: 100 });
        break;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    switch (animation) {
      case 'fadeUp':
        tl.to(element, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out'
        });
        break;
      case 'fadeIn':
        tl.to(element, {
          opacity: 1,
          duration,
          delay,
          ease: 'power2.out'
        });
        break;
      case 'scale':
        tl.to(element, {
          opacity: 1,
          scale: 1,
          duration,
          delay,
          ease: 'back.out(1.7)'
        });
        break;
      case 'slideLeft':
        tl.to(element, {
          opacity: 1,
          x: 0,
          duration,
          delay,
          ease: 'power3.out'
        });
        break;
      case 'slideRight':
        tl.to(element, {
          opacity: 1,
          x: 0,
          duration,
          delay,
          ease: 'power3.out'
        });
        break;
    }

    return () => {
      tl.kill();
      ScrollTrigger.killAll();
    };
  }, [animation, delay, duration, trigger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollAnimation;