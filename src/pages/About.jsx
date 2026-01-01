import React, { useRef, useEffect, useState } from "react";
import { Target, Eye, Users, TrendingUp, Shield, Building2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import Footer from "../components/Footer";
import realestateimg from "../assets/UAE.jpg";
import realestate15 from "../assets/realestate15.jpeg";
import realestate16 from "../assets/realestate16.jpeg";
import realestate14 from "../assets/realestate14.jpeg";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const About = () => {
  const mainRef = useRef(null);
  const containerRefs = useRef([]);
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState("right");
  const intervalRef = useRef(null);

  const carouselImages = [
    { url: realestateimg, title: "", subtitle: "" },
    { url: realestate14, title: "", subtitle: "" },
    { url: realestate15, title: "", subtitle: "" },
    { url: realestate16, title: "", subtitle: "" },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence in Real Estate",
      description:
        "We strive for excellence in every property transaction and investment strategy we undertake.",
    },
    {
      icon: Shield,
      title: "Integrity & Transparency",
      description:
        "Honest, transparent advice that puts your real estate interests first, always.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description:
        "Working closely with clients to understand their unique property goals and needs.",
    },
    {
      icon: TrendingUp,
      title: "Innovative Solutions",
      description:
        "Leveraging the latest tools and methodologies for optimal real estate outcomes.",
    },
  ];

  const milestones = [
    { year: "2005", event: "Setuu Real Estate Consultants Founded" },
    { year: "2008", event: "Expanded to Commercial Real Estate Advisory" },
    { year: "2012", event: "$1B in Assets Under Management" },
    { year: "2015", event: "International Real Estate Services Launched" },
    { year: "2018", event: "500+ Real Estate Projects Completed" },
    { year: "2023", event: "$2.5B+ Assets Managed Across 15 Countries" },
  ];

  const goToSlide = (index, dir) => {
    setDirection(dir);
    setActiveSlide(index);
  };

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDirection("right");
      setActiveSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [carouselImages.length]);

  useEffect(() => {
    let ctx;
    let resizeTimeout;

    function createTimeline() {
      ctx && ctx.revert();

      ctx = gsap.context(() => {
        const box = document.querySelector(".box");
        if (!box) return;

        const boxStartRect = box.getBoundingClientRect();

        const containers = containerRefs.current.filter(
          (ref) => ref && !ref.classList.contains("initial")
        );

        const points = containers.map((container) => {
          if (!container) return { x: 0, y: 0 };

          const marker = container.querySelector(".marker") || container;
          const r = marker.getBoundingClientRect();

          return {
            x: r.left + r.width / 2 - (boxStartRect.left + boxStartRect.width / 2),
            y: r.top + r.height / 2 - (boxStartRect.top + boxStartRect.height / 2),
          };
        });

        gsap.timeline({
          scrollTrigger: {
            trigger: ".container.initial",
            start: "top center",
            endTrigger: ".spacer.final",
            end: "top center",
            scrub: 1,
            markers: false,
          },
        }).to(".box", {
          duration: 1,
          ease: "none",
          motionPath: {
            path: points,
            curviness: 1.5,
          },
        });
      }, mainRef.current);
    }

    const initTimeout = setTimeout(() => {
      createTimeline();
    }, 100);

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        createTimeline();
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(initTimeout);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      ctx?.revert();
    };
  }, []);

  const addToContainerRefs = (el, index) => {
    if (el) containerRefs.current[index] = el;
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Carousel Section */}
      <div className="relative overflow-hidden mb-20 -mt-16 pt-16">
        {/* Desktop */}
        <div className="hidden md:block h-[80vh]">
          <div ref={carouselRef} className="relative h-full w-full overflow-hidden">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === activeSlide
                    ? "opacity-100 z-10 translate-x-0"
                    : index < activeSlide
                    ? "opacity-0 -translate-x-full z-0"
                    : "opacity-0 translate-x-full z-0"
                }`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image.url})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center pt-20">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl">
                      <div
                        className={`transition-all duration-1000 delay-300 ${
                          index === activeSlide
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-8"
                        }`}
                      >
                        {/* If you later add titles/subtitles, this will show */}
                        {!!image.title && (
                          <>
                            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                                {image.title.split(" ")[0]}
                              </span>{" "}
                              {image.title.split(" ").slice(1).join(" ")}
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                              {image.subtitle}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden h-[80vh]">
          <div ref={carouselRef} className="relative h-full w-full overflow-hidden">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === activeSlide
                    ? "opacity-100 z-10 translate-x-0"
                    : index < activeSlide
                    ? "opacity-0 -translate-x-full z-0"
                    : "opacity-0 translate-x-full z-0"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image.url})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
                </div>

                <div className="relative h-full flex items-center justify-center text-center px-4 pt-20">
                  <div className="max-w-md">
                    <div
                      className={`transition-all duration-700 delay-200 ${
                        index === activeSlide
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {!!image.title && (
                        <>
                          <h1 className="text-3xl font-display font-bold text-white mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                              {image.title.split(" ")[0]}
                            </span>{" "}
                            {image.title.split(" ").slice(1).join(" ")}
                          </h1>
                          <p className="text-base text-gray-300 leading-relaxed">
                            {image.subtitle}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-6">
          <button
            onClick={() =>
              goToSlide((activeSlide - 1 + carouselImages.length) % carouselImages.length, "left")
            }
            className="p-2 rounded-full bg-black/50 hover:bg-black/80 transition-all duration-300 hover:scale-110 group"
          >
            <svg
              className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex space-x-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index, index > activeSlide ? "right" : "left")}
                className={`relative transition-all duration-300 ${
                  activeSlide === index ? "w-10" : "w-3 hover:w-4"
                } h-3 rounded-full overflow-hidden group`}
              >
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    activeSlide === index
                      ? "bg-gradient-to-r from-blue-500 to-blue-400 shadow-lg shadow-blue-500/50"
                      : "bg-gray-600 group-hover:bg-gray-500"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => goToSlide((activeSlide + 1) % carouselImages.length, "right")}
            className="p-2 rounded-full bg-black/50 hover:bg-black/80 transition-all duration-300 hover:scale-110 group"
          >
            <svg
              className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ✅ REMOVED PROGRESS BAR HERE (THIS WAS THE BLUE STRIP) */}
      </div>

      {/* Rest of content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative"> 
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Building <span className="text-blue-400">Real Estate</span> Success Since 2005
            </h2>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Founded in 2005, Setuu began with a simple mission: to provide strategic, data-driven advice
                that helps investors make smarter real estate decisions. What started as a small advisory firm
                has grown into a globally recognized real estate consultancy.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Over the past 15+ years, we've managed over $2.5 billion in real estate assets, completed
                500+ projects across 15 countries, and helped thousands of clients achieve their property goals.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team of certified real estate professionals combines decades of industry experience with
                cutting-edge analytical tools to deliver exceptional results for residential, commercial, and
                investment property clients.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 backdrop-blur-sm rounded-3xl p-10 border border-white/10 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-900/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-800">
                  <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-gray-300 font-medium">Years in Real Estate</div>
                </div>
                <div className="bg-gray-900/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-800">
                  <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-gray-300 font-medium">Property Projects</div>
                </div>
                <div className="bg-gray-900/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-800">
                  <div className="text-3xl font-bold text-blue-400 mb-2">$2.5B+</div>
                  <div className="text-gray-300 font-medium">Assets Managed</div>
                </div>
                <div className="bg-gray-900/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-800">
                  <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                  <div className="text-gray-300 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-blue-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Our Journey */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-16">
            Our <span className="text-blue-400">Journey</span>
          </h2>

          <div className="relative min-h-[400vh]" ref={mainRef}>
            <div className="spacer h-20vh"></div>

            <div className="main relative h-[300vh]">
              <div
                className="container initial absolute w-32 h-32 border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center"
                ref={(el) => addToContainerRefs(el, 0)}
              >
                <div className="box w-20 h-20 z-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30"></div>
              </div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`container absolute w-32 h-32 border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center ${
                    ["second", "third", "fourth", "fifth", "sixth", "seventh"][index]
                  }`}
                  ref={(el) => addToContainerRefs(el, index + 1)}
                  style={{
                    left: `${10 + index * 15}%`,
                    top: `${20 + index * 15}%`,
                  }}
                >
                  <div className="marker w-20 h-20 rounded-xl flex items-center justify-center">
                    <div className="absolute -top-24 w-64 bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 border border-gray-800 shadow-xl">
                      <div className="text-lg font-bold text-blue-400 mb-1">{milestone.year}</div>
                      <div className="text-sm text-gray-300">{milestone.event}</div>
                    </div>

                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg shadow-blue-500/50"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="spacer final h-20vh"></div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-16">
            Our <span className="text-blue-400">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-900/50 rounded-2xl shadow-lg transition-all duration-500 p-8 border border-gray-800"
                >
                  <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-900/30 to-blue-800/30 rounded-2xl mb-6">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <div className="bg-gradient-to-br from-blue-900/80 to-blue-800/80 rounded-3xl p-10 text-white shadow-2xl border border-blue-800/50">
            <Target className="h-12 w-12 mb-6 text-blue-300" />
            <h3 className="text-2xl font-bold mb-6 text-white">Our Mission</h3>
            <p className="text-blue-200 text-lg leading-relaxed">
              To empower clients with strategic real estate insights and innovative solutions that maximize
              property investment returns while minimizing risks. We aim to be the most trusted real estate advisory firm
              globally by delivering exceptional value and building lasting partnerships.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl p-10 text-white shadow-2xl border border-gray-800/50">
            <Eye className="h-12 w-12 mb-6 text-gray-300" />
            <h3 className="text-2xl font-bold mb-6 text-white">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To transform how investors approach real estate markets worldwide by setting new standards in
              property advisory excellence. We envision a future where every real estate decision is informed,
              strategic, and optimized for success through our innovative advisory services.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-3xl p-16 border border-gray-800">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl mb-8">
            <Building2 className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-6">
            Partner With Setuu for Your Real Estate Success
          </h3>
          <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied clients who have transformed their real estate investments with our expert guidance.
          </p>
        </div>
      </div>

      <style jsx>{`
        .spacer { height: 20vh; }
        .main { position: relative; height: 300vh; }

        .container {
          position: absolute;
          width: 140px;
          height: 140px;
          border: 2px dashed #374151;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .initial { left: 60%; top: 5%; }
        .second { left: 10%; top: 20%; }
        .third { right: 10%; top: 35%; }
        .fourth { left: 20%; top: 50%; }
        .fifth { left: 60%; top: 65%; }
        .sixth { left: 15%; top: 80%; }
        .seventh { left: 70%; top: 95%; }

        .marker {
          width: 100px;
          height: 100px;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .box {
          width: 100px;
          height: 100px;
          z-index: 10;
          border-radius: 10px;
        }

        @media (max-width: 768px) {
          .container { width: 100px; height: 100px; }
          .marker { width: 80px; height: 80px; }
          .box { width: 80px; height: 80px; }
          .marker > div { width: 200px; left: -60px; }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default About;
