import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Clock, Users, CheckCircle, 
  Video, MessageSquare, Award, Zap,
  Building2, Home, Target, Shield,
  DollarSign, TrendingUp, MapPin, Phone,
  Sparkles, ArrowRight, Star, ChevronRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Consultancy = () => {
  const [selectedPackage, setSelectedPackage] = useState('premium');
  const heroRef = useRef(null);
  const consultationRef = useRef(null);
  const expertiseRef = useRef(null);
  const packagesRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);
  const containerRef = useRef(null);

  // Initialize GSAP animations
  useEffect(() => {
    // Hero section animation
    gsap.fromTo(heroRef.current.querySelectorAll('.hero-item'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      }
    );

    // Consultation types animation
    gsap.fromTo(consultationRef.current.querySelectorAll('.consultation-card'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: consultationRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Expertise areas animation
    gsap.fromTo(expertiseRef.current.querySelectorAll('.expertise-card'),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: expertiseRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Packages animation
    gsap.fromTo(packagesRef.current.querySelectorAll('.package-card'),
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: packagesRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Benefits animation
    gsap.fromTo(benefitsRef.current.querySelectorAll('.benefit-item'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // CTA animation
    gsap.fromTo(ctaRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Floating animation for elements
    gsap.to('.float-element', {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Glow effect for selected package
    gsap.to('.selected-glow', {
      boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Package selection handler with animation
  const handlePackageSelect = (id) => {
    const previousSelected = document.querySelector('.selected-glow');
    if (previousSelected) {
      gsap.to(previousSelected, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    setSelectedPackage(id);
    
    const newSelected = document.querySelector(`[data-package="${id}"]`);
    if (newSelected) {
      gsap.fromTo(newSelected,
        { scale: 1 },
        {
          scale: 1.05,
          duration: 0.3,
          ease: 'back.out(1.7)'
        }
      );
    }
  };

  const packages = [
    {
      id: 'basic',
      name: 'Basic Real Estate Consultation',
      price: '$499',
      duration: '90 minutes',
      features: [
        'Initial Real Estate Strategy Session',
        'Property Market Overview',
        'Basic Investment Risk Assessment',
        'Personalized Property Recommendations',
        'Follow-up Email Summary',
        'Market Report (PDF)'
      ],
      icon: Star
    },
    {
      id: 'premium',
      name: 'Premium Real Estate Advisory',
      price: '$899',
      duration: '3 hours',
      features: [
        'Comprehensive Property Strategy Session',
        'Detailed Market Analysis Report',
        'Risk Assessment & Mitigation Plan',
        'Custom Real Estate Investment Plan',
        'Portfolio Review & Optimization',
        '3-Month Email Support',
        'Two Follow-up Sessions',
        'Property Search Assistance'
      ],
      popular: true,
      icon: Award
    },
    {
      id: 'enterprise',
      name: 'Enterprise Real Estate Solution',
      price: 'Custom',
      duration: 'Ongoing Partnership',
      features: [
        'Dedicated Real Estate Consultant',
        'Full Portfolio Management',
        'Weekly Strategy Sessions',
        'Real-time Market Alerts',
        'Risk Monitoring System',
        'Priority 24/7 Support',
        'Quarterly Performance Reviews',
        'Custom Reporting Dashboard'
      ],
      icon: Building2
    }
  ];

  const consultationTypes = [
    {
      icon: Video,
      title: 'Virtual Property Tour Consultation',
      description: 'Interactive virtual meeting with property walkthroughs and market analysis',
      duration: '2-3 hours',
      bestFor: 'Remote investors & international clients'
    },
    {
      icon: MessageSquare,
      title: 'Phone Strategy Session',
      description: 'Focused phone consultation for quick decisions and strategy discussions',
      duration: '60 minutes',
      bestFor: 'Busy professionals & quick queries'
    },
    {
      icon: Users,
      title: 'In-Person Property Advisory',
      description: 'Physical meeting including property visits and market tours',
      duration: 'Half day',
      bestFor: 'Local investors & hands-on clients'
    }
  ];

  const expertiseAreas = [
    {
      icon: Home,
      title: 'Residential Properties',
      description: 'Single-family homes, condos, apartments, luxury estates'
    },
    {
      icon: Building2,
      title: 'Commercial Real Estate',
      description: 'Office buildings, retail spaces, warehouses, industrial properties'
    },
    {
      icon: Target,
      title: 'Investment Properties',
      description: 'Rental properties, fix-and-flip, long-term investments'
    },
    {
      icon: MapPin,
      title: 'Development Projects',
      description: 'Land acquisition, construction projects, property development'
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-16 pb-24 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-900/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <div ref={heroRef} className="relative py-20 md:py-28 mb-20 md:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-900/30 to-blue-800/20 backdrop-blur-sm rounded-full mb-6 hero-item border border-blue-700/30">
              <Sparkles className="h-4 w-4 text-blue-400 mr-2 float-element" />
              <span className="text-blue-300 font-medium">Expert Consultation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 hero-item leading-tight">
              Real Estate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Consultation</span> Services
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 hero-item">
              Get personalized real estate advisory from industry experts. We provide actionable insights 
              to maximize your property investments and minimize risks.
            </p>
            <div className="hero-item">
              <Link
                to="/contact"
                className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                Book Your Consultation
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Consultation Types */}
        <div ref={consultationRef} className="mb-20 md:mb-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Consultation</span> Style
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Select the consultation format that best fits your needs and schedule
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {consultationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div 
                  key={index}
                  className="consultation-card group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-2"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-xl group-hover:from-blue-800/40 group-hover:to-blue-700/20 transition-all duration-500">
                      <Icon className="h-7 w-7 text-blue-400" />
                    </div>
                    <span className="text-sm font-medium px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full">
                      {type.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {type.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <div className="pt-6 border-t border-gray-700">
                    <div className="text-sm">
                      <span className="font-medium text-gray-300">Best for:</span>{' '}
                      <span className="text-blue-300">{type.bestFor}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expertise Areas */}
        <div ref={expertiseRef} className="mb-20 md:mb-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Real Estate</span> Expertise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized knowledge across all major real estate sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div 
                  key={index}
                  className="expertise-card group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all duration-500 hover:bg-gray-800/50"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-6 bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-xl group-hover:from-blue-800/40 group-hover:to-blue-700/20">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Packages */}
        <div ref={packagesRef} className="mb-20 md:mb-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Real Estate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Packages</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect package for your real estate needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <div 
                  key={pkg.id}
                  data-package={pkg.id}
                  className={`package-card relative rounded-2xl p-6 md:p-8 border-2 transition-all duration-500 cursor-pointer ${
                    selectedPackage === pkg.id 
                      ? 'selected-glow border-blue-500 bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl' 
                      : 'border-gray-700 bg-gray-800/30 hover:border-blue-400/50 hover:bg-gray-800/50'
                  }`}
                  onClick={() => handlePackageSelect(pkg.id)}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-1.5 rounded-full text-sm font-medium shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl ${
                      selectedPackage === pkg.id 
                        ? 'bg-gradient-to-br from-blue-600/20 to-cyan-500/20' 
                        : 'bg-gray-700/50'
                    }`}>
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold ml-4">{pkg.name}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-3xl md:text-4xl font-bold">{pkg.price}</span>
                    {pkg.id !== 'enterprise' && (
                      <span className="text-gray-400 ml-2">/ session</span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-blue-400 font-medium mb-8">
                    <Clock className="h-5 w-5 mr-2" />
                    {pkg.duration}
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`block text-center py-3 md:py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
                      selectedPackage === pkg.id
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-xl'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                  >
                    Select Package
                    <ChevronRight className="inline-block ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits */}
        <div ref={benefitsRef} className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-3xl p-8 md:p-12 mb-20 md:mb-24 backdrop-blur-sm">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Consultation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Benefits</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              What you gain from our expert real estate consultation
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Award,
                title: 'Industry Expertise',
                description: 'Access to real estate professionals with 15+ years experience'
              },
              {
                icon: Zap,
                title: 'Actionable Insights',
                description: 'Receive clear, implementable property strategies'
              },
              {
                icon: Shield,
                title: 'Risk Mitigation',
                description: 'Identify and avoid potential real estate pitfalls'
              },
              {
                icon: TrendingUp,
                title: 'Maximize Returns',
                description: 'Optimize your property investment returns'
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="benefit-item group text-center">
                  <div className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-2xl mb-6 group-hover:from-blue-800/40 group-hover:to-blue-700/20 transition-all duration-500 mx-auto float-element">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base px-4">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div 
          ref={ctaRef}
          className="text-center bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-gray-700"
        >
          <div className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-blue-900/40 to-cyan-900/30 backdrop-blur-sm rounded-3xl mb-6 md:mb-8">
            <Calendar className="h-10 w-10 text-blue-400" />
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Schedule Your Real Estate Consultation Today
          </h3>
          <p className="text-gray-300 text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards smarter real estate investments. Our experts are ready to help you achieve your property goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center transform hover:-translate-y-0.5"
            >
              Book Your Session Now
              <Calendar className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </Link>
            <div className="flex items-center justify-center">
              <div className="p-2 bg-gray-800/50 rounded-lg mr-3">
                <Phone className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-400">Call us anytime</div>
                <div className="text-white font-medium">+1 (555) 123-4567</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Design Adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .text-7xl { font-size: 3.5rem; }
          .text-6xl { font-size: 3rem; }
          .text-5xl { font-size: 2.5rem; }
          .text-4xl { font-size: 2rem; }
          .text-3xl { font-size: 1.75rem; }
        }
        
        @media (max-width: 768px) {
          .grid-cols-4 { grid-template-columns: repeat(2, 1fr); }
          .grid-cols-3 { grid-template-columns: 1fr; }
        }
        
        @media (max-width: 1024px) {
          .grid-cols-4 { grid-template-columns: repeat(2, 1fr); }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
      <Footer/>
    </div>
  );
};

export default Consultancy;