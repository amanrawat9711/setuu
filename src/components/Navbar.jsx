import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Building2, Phone } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import setulogo from "../assets/setuu.webp"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = navbarRef.current;
    if (!el) return;

    // Kill ONLY navbar-related trigger/animations (don’t kill all triggers)
    ScrollTrigger.getById("navbar-trigger")?.kill();
    gsap.killTweensOf(el);

    // Reset navbar visible whenever we change page
    gsap.set(el, { yPercent: 0 });

    // Wait 1 frame so the new route DOM exists (important when switching to Home where smoother is created)
    const raf = requestAnimationFrame(() => {
      const smootherWrapper = document.querySelector("#smooth-wrapper");
      const scrollerEl = smootherWrapper || window;

      let lastY = 0;

      ScrollTrigger.create({
        id: "navbar-trigger",
        scroller: scrollerEl, // ✅ switches automatically between smoother + window
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const y = self.scroll();

          // ignore jitter
          if (Math.abs(y - lastY) < 5) return;

          if (y > lastY) {
            // scrolling down -> hide
            gsap.to(el, {
              yPercent: -110,
              duration: 0.25,
              ease: "power2.out",
              overwrite: "auto",
            });
          } else {
            // scrolling up -> show
            gsap.to(el, {
              yPercent: 0,
              duration: 0.25,
              ease: "power2.out",
              overwrite: "auto",
            });
          }

          lastY = y;
        },
      });

      // ✅ Make ScrollTrigger recalc after route change
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(raf);
      ScrollTrigger.getById("navbar-trigger")?.kill();
      gsap.killTweensOf(el);
    };
  }, [location.pathname]); // ✅ KEY FIX: rerun when route changes

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Consultancy", path: "/consultancy" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const isHomePage = location.pathname === "/";

  return (
    <div className="main-tool-bar fixed top-0 left-0 w-full z-50" ref={navbarRef}>
      <div className={`w-full transition-all duration-300 ${isHomePage ? "bg-transparent" : "bg-black"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <Building2 className="h-10 w-10 transform group-hover:scale-110 transition-transform duration-300 text-white" />
                  <div className="absolute -inset-1 bg-gray-800 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <div>
                  <img className="w-30" src={setulogo}/>
                  <div className={`text-xs font-medium tracking-wider ${isHomePage ? "text-gray-300" : "text-gray-400"}`}>
                    REAL ESTATE CONSULTANTS
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-white font-semibold"
                      : isHomePage
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <Phone className={`h-5 w-5 ${isHomePage ? "text-gray-300" : "text-gray-400"}`} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg ${
                  isHomePage ? "text-gray-300 hover:bg-white/10 hover:text-white" : "text-gray-400 hover:bg-gray-900 hover:text-white"
                }`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black shadow-xl animate-slideDown border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? "bg-gray-900 text-white"
                        : "text-gray-400 hover:bg-gray-900 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
