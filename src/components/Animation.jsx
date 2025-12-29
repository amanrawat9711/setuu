// components/Animation.jsx
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import SplitText from "gsap/SplitText";
import realestate1 from "../assets/realestate1.jpeg";
import realestate2 from "../assets/realestate2.jpeg";
import realestate5 from "../assets/realestate5.jpeg";
import realestate7 from "../assets/realestate7.jpg";
import realestate8 from "../assets/realestate8.jpeg";
import realestate20 from "../assets/realestate20.jpeg";
import realestate14 from "../assets/realestate14.jpeg";
import Footer from "./Footer";

export default function SmoothScroller() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: true,
      preventDefault: true,
    });

    gsap.set(".heading", {
      yPercent: -150,
      opacity: 1,
    });

    const mySplitText = new SplitText("#split-stagger", {
      type: "words,chars",
    });
    const chars = mySplitText.chars;

    chars.forEach((char, i) => {
      smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
    });

    return () => {
      try {
        mySplitText?.revert?.();
      } catch {}
      try {
        smoother?.kill?.();
      } catch {}
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="w-full">
      <section id="smooth-content" className="w-full">
        {/* Your content */}
        <div className="heading" aria-hidden="true">
          <p>WHY</p>
          <div className="text-container">
            <p data-speed="0.95">SETUU </p>
            <p data-speed="0.9">SETUU </p>
            <p data-speed="0.85">SETUU </p>
            <p data-speed="0.8">SETUU </p>
            <p data-speed="0.75">SETUU </p>
            <p data-speed="0.7">SETUU </p>
          </div>
        </div>

        <section className="image-grid container">
  <div className="image_cont h-48 md:h-64 lg:h-80 xl:h-126" data-speed="1">
    <img 
      data-speed="auto" 
      src={realestate1} 
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
  <div className="image_cont h-48 md:h-64 lg:h-80 xl:h-106" data-speed="1.7">
    <img 
      data-speed="auto" 
      src={realestate20} 
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
  <div className="image_cont h-48 md:h-64 lg:h-80 xl:h-96" data-speed="1.5">
    <img 
      data-speed="auto" 
      src={realestate5} 
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
</section>

<section className="v-center">
  <div className="parallax-slab h-64 md:h-80 lg:h-96 xl:h-[28rem]">
    <img 
      data-speed="auto" 
      src={realestate14} 
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
</section>

        <section className="title container flow--lg">
          <h1>
            <span className="eyebrow" aria-hidden="true"></span>
            Welcome to House of Setuu
          </h1>
          <p>
            Setuu means "Bridge." A bridge that connects people, opportunities,
            and hearts. At Setuu, we believe that the strongest foundations are
            built not just on numbers or transactions, but on trust,
            understanding, and heart-to-heart connections.
          </p>
        </section>

        <section className="v-center">
          <div className="parallax-slab">
            <img data-speed="auto" src={realestate7} alt="" />
          </div>
        </section>

        <section className="staggered container">
          <div className="staggered_demo">
            <h3 id="split-stagger" className="text-sm md:text-3xl lg:text-4xl xl:text-5xl">
              SETUU acts as a bridge
            </h3>
          </div>
          <div className="staggered_text hidden md:block">
            <div className="flow content">
              <p className="md:text-base lg:text-lg">
                between investors, corporates, landowners, and opportunities,
                connecting them with clarity and confidence.
              </p>
            </div>
          </div>
        </section>

        <section className="parallax-images container">
          <div className="parallax-text">
            <div className="flow content">
              <h2>With deep industry knowledge</h2>
              <p>
                Global relationships, and a people-first mindset to deliver
                exceptional results.
              </p>
            </div>
          </div>
          <div className="image_cont">
            <img data-speed="auto" src={realestate5} alt="" />
          </div>
        </section>

        {/* REMOVE THE SPACER AND ADD FOOTER DIRECTLY */}
        <div className="relative z-10"> {/* Add z-index to ensure footer is on top */}
          <Footer />
        </div>

      </section>
    </div>
  );
}