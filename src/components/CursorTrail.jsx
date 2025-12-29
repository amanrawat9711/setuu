// components/CursorTrail.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CursorTrail = () => {
  const cursorRefs = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const cachedMousePos = useRef({ x: 0, y: 0 });
  const index = useRef(0);
  const gap = 100; // Controls spacing between cursor effects

  // Create cursor elements
  const cursorElements = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    src: `https://assets.codepen.io/16327/Revised+Flair${i % 9 === 0 ? '' : `-${i % 9}`}.png`,
    className: `flair-${i}`
  }));

  // Animation function for each cursor element
  const playAnimation = (element) => {
    const tl = gsap.timeline();
    
    tl.from(element, {
      opacity: 0,
      scale: 0,
      ease: "elastic.out(1, 0.3)",
      duration: 0.5
    })
    .to(element, {
      rotation: `random([-360, 360])`,
    }, "<")
    .to(element, {
      y: "120vh",
      ease: "back.in(0.4)",
      duration: 1,
    }, 0);
  };

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const wrapper = gsap.utils.wrap(0, cursorElements.length);

    const animateTrail = () => {
      const travelDistance = Math.hypot(
        lastMousePos.current.x - mousePos.current.x,
        lastMousePos.current.y - mousePos.current.y
      );

      // Interpolate mouse position for smooth animation
      cachedMousePos.current.x = gsap.utils.interpolate(
        cachedMousePos.current.x || mousePos.current.x,
        mousePos.current.x,
        0.1
      );
      cachedMousePos.current.y = gsap.utils.interpolate(
        cachedMousePos.current.y || mousePos.current.y,
        mousePos.current.y,
        0.1
      );

      if (travelDistance > gap) {
        const wrappedIndex = wrapper(index.current);
        const cursorElement = cursorRefs.current[wrappedIndex];

        if (cursorElement) {
          gsap.killTweensOf(cursorElement);
          
          gsap.set(cursorElement, {
            clearProps: "all"
          });

          gsap.set(cursorElement, {
            opacity: 1,
            left: mousePos.current.x,
            top: mousePos.current.y,
            xPercent: -50,
            yPercent: -50,
          });

          playAnimation(cursorElement);
        }

        index.current++;
        lastMousePos.current = { ...mousePos.current };
      }
    };

    // Start animation loop
    const animationId = gsap.ticker.add(animateTrail);

    return () => {
      gsap.ticker.remove(animateTrail);
    };
  }, [cursorElements.length]);

  return (
    <div className="cursor-trail-container fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Instruction text */}
      <p className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white/50 text-sm md:text-base font-light tracking-wider">
        wiggle your mouse around
      </p>
      
      {/* Cursor elements */}
      <div className="content">
        {cursorElements.map((cursor, i) => (
          <img
            key={cursor.id}
            ref={el => cursorRefs.current[i] = el}
            src={cursor.src}
            alt="cursor effect"
            className="flair fixed opacity-0 w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 pointer-events-none"
            style={{
              width: '50px',
              height: '50px',
              objectFit: 'contain'
            }}
          />
        ))}
      </div>

      {/* Tailwind styles */}
      <style jsx>{`
        .cursor-trail-container {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
        
        .flair {
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
          transition: opacity 0.1s ease;
        }
        
        /* Optional: Add a subtle glow effect */
        .flair:hover {
          filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.5));
        }
      `}</style>
    </div>
  );
};

export default CursorTrail;