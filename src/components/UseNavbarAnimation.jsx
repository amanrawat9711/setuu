// useNavbarAnimation.js
import { useEffect } from 'react';
import gsap from 'gsap';

export const useNavbarAnimation = () => {
  useEffect(() => {
    let ctx;
    let animation;
    let scrollListener;
    let ticking = false;
    let lastScrollY = window.scrollY;
    
    const initAnimation = () => {
      ctx = gsap.context(() => {
        const navbar = document.querySelector('.main-tool-bar');
        if (!navbar) return;
        
        // Kill any existing animations on navbar
        gsap.killTweensOf(navbar);
        
        animation = gsap.to(navbar, {
          yPercent: -100,
          duration: 0.3,
          ease: 'power2.out',
          paused: true,
          immediateRender: false
        });
        
        // Start hidden
        animation.progress(1);
      });
    };
    
    const handleScroll = () => {
      if (!animation) return;
      
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      if (direction === 'down' && currentScrollY > 100) {
        animation.play();
      } else if (direction === 'up' || currentScrollY < 50) {
        animation.reverse();
      }
      
      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
      ticking = false;
    };
    
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };
    
    // Initialize
    const timeoutId = setTimeout(initAnimation, 100);
    
    // Add scroll listener
    scrollListener = onScroll;
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', scrollListener);
      
      if (animation) {
        animation.kill();
      }
      
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);
};