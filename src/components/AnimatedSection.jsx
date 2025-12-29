import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/all';
import SplitType from 'split-type';

// Register GSAP plugin
gsap.registerPlugin(Observer);

const AnimatedSections = () => {
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);
  const headingsRef = useRef([]);
  const outerWrappersRef = useRef([]);
  const innerWrappersRef = useRef([]);
  const splitHeadingsRef = useRef([]);
  const currentIndexRef = useRef(-1);
  const animatingRef = useRef(false);

  const sectionCount = 5;

  // Function to wrap index around sections
  const wrapIndex = (index) => {
    return ((index % sectionCount) + sectionCount) % sectionCount;
  };

  const gotoSection = (index, direction) => {
    if (animatingRef.current) return;
    
    index = wrapIndex(index);
    animatingRef.current = true;
    
    const fromTop = direction === -1;
    const dFactor = fromTop ? -1 : 1;
    
    const tl = gsap.timeline({
      defaults: { duration: 1.25, ease: "power1.inOut" },
      onComplete: () => animatingRef.current = false
    });

    // If not first time running
    if (currentIndexRef.current >= 0) {
      const currentIndex = currentIndexRef.current;
      gsap.set(sectionsRef.current[currentIndex], { zIndex: 0 });
      tl.to(imagesRef.current[currentIndex], { yPercent: -15 * dFactor })
        .set(sectionsRef.current[currentIndex], { autoAlpha: 0 });
    }

    // Setup new section
    gsap.set(sectionsRef.current[index], { autoAlpha: 1, zIndex: 1 });
    
    // Animate wrappers
    tl.fromTo(
      [outerWrappersRef.current[index], innerWrappersRef.current[index]], 
      { 
        yPercent: (i) => i ? -100 * dFactor : 100 * dFactor
      }, 
      { 
        yPercent: 0 
      }, 
      0
    )
    // Animate background image
    .fromTo(
      imagesRef.current[index], 
      { yPercent: 15 * dFactor }, 
      { yPercent: 0 }, 
      0
    )
    // Animate text characters
    .fromTo(
      splitHeadingsRef.current[index]?.chars, 
      { 
        autoAlpha: 0, 
        yPercent: 150 * dFactor
      }, 
      {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1,
        ease: "power2",
        stagger: {
          each: 0.02,
          from: "random"
        }
      }, 
      0.2
    );

    currentIndexRef.current = index;
  };

  useEffect(() => {
    // Initialize arrays
    sectionsRef.current = sectionsRef.current.slice(0, sectionCount);
    imagesRef.current = imagesRef.current.slice(0, sectionCount);
    headingsRef.current = headingsRef.current.slice(0, sectionCount);
    outerWrappersRef.current = outerWrappersRef.current.slice(0, sectionCount);
    innerWrappersRef.current = innerWrappersRef.current.slice(0, sectionCount);
    splitHeadingsRef.current = splitHeadingsRef.current.slice(0, sectionCount);

    // Initialize SplitText for each heading
    headingsRef.current.forEach((heading, index) => {
      if (heading) {
        splitHeadingsRef.current[index] = new SplitType(heading, {
          types: 'chars,words,lines',
          lineClass: 'clip-text'
        });
      }
    });

    // Set initial animation states
    gsap.set(outerWrappersRef.current, { yPercent: 100 });
    gsap.set(innerWrappersRef.current, { yPercent: -100 });

    // Initialize first section
    gotoSection(0, 1);

    // Setup observer for wheel/touch events
    const observer = Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animatingRef.current && gotoSection(currentIndexRef.current - 1, -1),
      onUp: () => !animatingRef.current && gotoSection(currentIndexRef.current + 1, 1),
      tolerance: 10,
      preventDefault: true
    });

    // Cleanup
    return () => {
      observer.kill();
      splitHeadingsRef.current.forEach(split => split?.revert());
    };
  }, []);

  // Section data
  const sections = [
    { 
      className: "first", 
      heading: "Scroll down", 
      bgImage: "https://assets.codepen.io/16327/site-landscape-1.jpg" 
    },
    { 
      className: "second", 
      heading: "Animated with GSAP", 
      bgImage: "https://assets.codepen.io/16327/site-landscape-2.jpg" 
    },
    { 
      className: "third", 
      heading: "GreenSock", 
      bgImage: "https://assets.codepen.io/16327/site-landscape-3.jpg" 
    },
    { 
      className: "fourth", 
      heading: "Animation platform", 
      bgImage: "https://assets.codepen.io/16327/site-landscape-4.jpg" 
    },
    { 
      className: "fifth", 
      heading: "Keep scrolling", 
      bgImage: "https://assets.codepen.io/16327/site-landscape-5.jpg" 
    },
  ];

  return (
    <div className="relative h-screen overflow-hidden select-none">
      {/* Header */}
      <header className="fixed flex items-center justify-between px-[5%] w-full z-30 h-28 text-[clamp(0.66rem,2vw,1rem)] tracking-[0.5em]">
        <div>Animated Sections</div>
        <div>
          <a 
            href="https://codepen.io/BrianCross/pen/PoWapLP" 
            className="text-white no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Original Inspiration
          </a>
        </div>
      </header>

      {/* Sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`${section.className} fixed top-0 left-0 w-full h-full invisible`}
          ref={el => sectionsRef.current[index] = el}
          style={{ willChange: 'transform' }}
        >
          <div 
            className="outer w-full h-full overflow-hidden"
            ref={el => outerWrappersRef.current[index] = el}
          >
            <div 
              className="inner w-full h-full overflow-hidden"
              ref={el => innerWrappersRef.current[index] = el}
            >
              <div
                className="bg absolute top-0 left-0 w-full h-full flex items-center justify-center bg-cover bg-center"
                ref={el => imagesRef.current[index] = el}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.1) 100%), url(${section.bgImage})`,
                  ...(section.className === 'fifth' && { backgroundPosition: '50% 45%' })
                }}
              >
                <h2
                  className="section-heading text-[clamp(1rem,6vw,10rem)] font-semibold leading-[1.2] text-center -mr-[0.5em] w-[90vw] max-w-[1200px] normal-case"
                  ref={el => headingsRef.current[index] = el}
                >
                  {section.heading}
                </h2>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AnimatedSections;