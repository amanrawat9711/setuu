// components/Footer.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { Building2, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);
  const pathRef = useRef(null);
  const currentYear = new Date().getFullYear();

  const services = [
    'Residential Advisory',
    'Commercial Advisory',
    'Investment Strategy',
    'Property Valuation',
    'Portfolio Management',
    'Development Advisory'
  ];

  useEffect(() => {
    // Only run if we're on the home page
    if (window.location.pathname === '/') {
      gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

      const down = 'M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z';
      const center = 'M0-0.3C0-0.3,464,0,1139,0s1139-0.3,1139-0.3V683H0V-0.3z';

      ScrollTrigger.create({
        trigger: footerRef.current,
        start: 'top bottom',
        onEnter: self => {
          const velocity = self.getVelocity();
          const variation = velocity / 10000;

          gsap.fromTo(pathRef.current, {
            morphSVG: down
          }, {
            duration: 2,
            morphSVG: center,
            ease: `elastic.out(${1 + variation}, ${1 - variation})`,
            overwrite: 'true'
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, []);

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      {/* Animated Wave - Only for homepage */}
      {window.location.pathname === '/' && (
        <div
          ref={footerRef}
          className="w-full -mt-[1px] after:content-[''] after:absolute after:top-0 after:w-full after:h-full after:bg-blend-color-dodge after:bg-[url('https://assets.codepen.io/16327/noise.png')] after:opacity-5"
        >
          <svg
            preserveAspectRatio="none"
            id="footer-img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2278 683"
            className="h-[80px] md:h-[100px] lg:h-[150px] w-full block overflow-visible"
          >
            <defs>
              <linearGradient
                id="grad-footer"
                x1="0"
                y1="0"
                x2="2278"
                y2="683"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#000000" />
                <stop offset="0.5" stopColor="#000000" />
                <stop offset="1" stopColor="#000000" />
              </linearGradient>
            </defs>
            <path
              ref={pathRef}
              id="bouncy-path"
              fill="url(#grad-footer)"
              d="M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z"
            />
          </svg>
        </div>
      )}

      {/* Footer Content */}
      <div className="w-full bg-black pt-6 pb-20 md:pt-12 md:pb-8 lg:pt-16 lg:pb-12 safe-area-bottom">
        {/* Main Footer Content */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-6 md:mb-8 lg:mb-12">
            {/* Company Info */}
            <div className="w-full">
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <Building2 className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-white" />
                <div>
                  <span className="font-display text-lg md:text-2xl font-bold text-white">Setuu</span>
                  <div className="text-xs text-gray-300 font-medium tracking-wider">REAL ESTATE CONSULTANTS</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                Transforming real estate investments through strategic advisory and data-driven insights since 2005.
                Your trusted partner in property excellence.
              </p>
              <div className="flex space-x-2 md:space-x-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-2 md:p-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-all duration-300 group transform hover:-translate-y-1"
                  >
                    <Icon className="h-4 w-4 md:h-5 md:w-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="w-full">
              <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-6 pb-2 md:pb-3 border-b border-gray-800">Quick Links</h3>
              <ul className="space-y-2 md:space-y-3">
                {['Home', 'About', 'Services', 'Consultancy', 'Team', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group text-sm md:text-base"
                    >
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4 mr-2 md:mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 text-white" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="w-full">
              <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-6 pb-2 md:pb-3 border-b border-gray-800">Our Services</h3>
              <ul className="space-y-2 md:space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group text-sm md:text-base"
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 md:mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="w-full">
              <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-6 pb-2 md:pb-3 border-b border-gray-800">Contact Info</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-2 md:space-x-3 group">
                  <div className="flex-shrink-0 p-2 md:p-3 bg-gray-900 rounded-lg group-hover:bg-gray-800 transition-colors duration-300">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-gray-300 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm md:text-base">Office Address</div>
                    <div className="text-gray-300 text-xs md:text-sm">123 Business Avenue</div>
                    <div className="text-gray-300 text-xs md:text-sm">Financial District, FD 10001</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 md:space-x-3 group">
                  <div className="flex-shrink-0 p-2 md:p-3 bg-gray-900 rounded-lg group-hover:bg-gray-800 transition-colors duration-300">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-gray-300 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm md:text-base">Phone Number</div>
                    <div className="text-gray-300 text-xs md:text-sm">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 md:space-x-3 group">
                  <div className="flex-shrink-0 p-2 md:p-3 bg-gray-900 rounded-lg group-hover:bg-gray-800 transition-colors duration-300">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-gray-300 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm md:text-base">Email Address</div>
                    <div className="text-gray-300 text-xs md:text-sm">info@setuuconsultants.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Bottom Bar */}
          <div className="w-full pt-4 md:pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Setuu Real Estate Consultants. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;