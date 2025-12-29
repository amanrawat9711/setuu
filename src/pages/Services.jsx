import React, { useEffect, useRef } from "react";
import ServiceCard from "../components/ServiceCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Home,
  Building2,
  TrendingUp,
  Shield,
  Target,
  MapPin,
  PieChart,
  FileText,
  Lightbulb,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import servicesHeroImg from "../assets/realestate16.jpeg";

const Services = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const processCardsRef = useRef([]);
  const ctaRef = useRef(null);
  const serviceCardsRef = useRef([]);

  const allServices = [
    {
      icon: Home,
      title: "Residential Property Advisory",
      description:
        "Comprehensive guidance for residential real estate investments including single-family homes, condos, townhouses, and luxury estates.",
      features: [
        "Property Search & Selection",
        "Market Analysis & Valuation",
        "Purchase Negotiation",
        "Investment Strategy",
        "Property Management Planning",
      ],
      delay: 100,
    },
    {
      icon: Building2,
      title: "Commercial Real Estate Advisory",
      description:
        "Expert consulting for commercial properties including office buildings, retail centers, warehouses, and industrial complexes.",
      features: [
        "Lease Analysis & Negotiation",
        "Tenant Relationship Management",
        "Property Value Enhancement",
        "Market Positioning",
        "Risk Assessment",
      ],
      delay: 200,
    },
    {
      icon: TrendingUp,
      title: "Real Estate Investment Strategy",
      description:
        "Data-driven investment planning to maximize returns and minimize risks in your property portfolio.",
      features: [
        "Portfolio Analysis & Optimization",
        "Market Timing Strategies",
        "Risk Management Framework",
        "Exit Strategy Planning",
        "ROI Optimization",
      ],
      delay: 300,
    },
    {
      icon: Shield,
      title: "Property Valuation Services",
      description:
        "Accurate and reliable property valuation using advanced analytics, market data, and industry expertise.",
      features: [
        "Market Comparative Analysis",
        "Income Approach Valuation",
        "Cost Approach Assessment",
        "Future Value Projections",
        "Risk Factor Analysis",
      ],
      delay: 400,
    },
    {
      icon: Target,
      title: "Real Estate Portfolio Management",
      description:
        "Professional management of your entire real estate investment portfolio for optimal performance.",
      features: [
        "Asset Allocation Strategy",
        "Performance Monitoring",
        "Maintenance Coordination",
        "Tenant Management",
        "Financial Reporting",
      ],
      delay: 500,
    },
    {
      icon: MapPin,
      title: "Development & Construction Advisory",
      description:
        "End-to-end guidance for real estate development projects from conception to completion.",
      features: [
        "Feasibility Studies",
        "Site Selection Analysis",
        "Design Consultation",
        "Construction Management",
        "Project Financing",
      ],
      delay: 600,
    },
    {
      icon: PieChart,
      title: "Real Estate Market Research",
      description:
        "In-depth market analysis and research to identify opportunities and trends in the property market.",
      features: [
        "Market Trend Analysis",
        "Demographic Studies",
        "Competition Analysis",
        "Investment Opportunity Reports",
        "Risk Assessment Studies",
      ],
      delay: 700,
    },
    {
      icon: FileText,
      title: "Real Estate Due Diligence",
      description:
        "Comprehensive due diligence services to ensure safe and secure property transactions.",
      features: [
        "Legal Document Review",
        "Title Search & Verification",
        "Environmental Assessments",
        "Structural Inspections",
        "Zoning Compliance Check",
      ],
      delay: 800,
    },
    {
      icon: Lightbulb,
      title: "Real Estate Financial Advisory",
      description:
        "Financial planning and advisory services specifically tailored for real estate investments.",
      features: [
        "Investment Capital Planning",
        "Tax Optimization Strategies",
        "Financing Solutions",
        "Cash Flow Analysis",
        "Budget Planning",
      ],
      delay: 900,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We analyze your real estate goals and current portfolio to understand your needs",
      icon: Target,
    },
    {
      step: "02",
      title: "Market Research",
      description:
        "Comprehensive property market analysis and opportunity identification",
      icon: BarChart3,
    },
    {
      step: "03",
      title: "Strategy Development",
      description:
        "Customized real estate investment strategy creation tailored for you",
      icon: Lightbulb,
    },
    {
      step: "04",
      title: "Implementation",
      description:
        "Guided execution of your real estate investment plan with ongoing support",
      icon: CheckCircle,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ✅ Scope all triggers to this page only (prevents killing navbar triggers)
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );

      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          delay: 0.3,
          ease: "power3.out",
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.6,
          ease: "power3.out",
        }
      );

      // Services cards animation
      serviceCardsRef.current.forEach((card, index) => {
        if (!card) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              card,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.08,
                ease: "power3.out",
              }
            );
          },
        });
      });

      // Process cards animation
      processCardsRef.current.forEach((card, index) => {
        if (!card) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              card,
              { opacity: 0, y: 60, scale: 0.9 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.1,
                ease: "back.out(1.7)",
              }
            );
          },
        });
      });

      // CTA section animation
      ScrollTrigger.create({
        trigger: ctaRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            ctaRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
          );
        },
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* ✅ FULL-WIDTH TOP IMAGE (YOU WILL IMPORT IT) */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px]">
        {/* Replace servicesHeroImg with your imported image */}
        <img
          src={servicesHeroImg}
          alt="Services"
          className="w-full h-full object-cover"
        />

        {/* Fallback (remove when you add image) */}
        <div className="w-full h-full bg-gradient-to-b from-gray-900 via-black to-black" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Optional bottom fade so it blends into page */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Hero Section */}
      <div ref={heroRef} className="relative -mt-24 sm:-mt-28 md:-mt-32 pt-10 pb-20 md:pt-12 md:pb-24">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black to-black" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <Sparkles className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium text-lg">
                Premium Services
              </span>
            </div>

            {/* Main Title */}
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-white">Real Estate</span>
              <br />
              <span className="text-white/90">Services</span>
            </h1>

      
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">


      
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {allServices.map((service, index) => (
            <div
              key={index}
              ref={(el) => (serviceCardsRef.current[index] = el)}
              className="opacity-0"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-white font-medium text-lg">Our Methodology</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Setuu <span className="text-white">Process</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Our proven 4-step methodology ensures successful real estate outcomes for every client.
            </p>
          </div>

          {/* Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (processCardsRef.current[index] = el)}
                  className="relative opacity-0"
                >
                  <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-white/20 transition-all duration-500 group h-full">
                    <div className="absolute top-4 right-4 text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500">
                      {step.step}
                    </div>

                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 border border-white/10 group-hover:border-white/20 transition-all duration-500">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>

                    <div className="flex items-center justify-center mt-8 lg:hidden">
                      <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="w-16 h-0.5 bg-white/10" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div ref={ctaRef} className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your
            <br />
            <span className="text-white">Real Estate Portfolio?</span>
          </h3>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Contact us today to discuss how our expert services can help you achieve exceptional real estate investment outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="group bg-white text-black px-10 py-5 rounded-xl font-semibold text-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                Start Your Journey
                <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>

            <Link
              to="/consultancy"
              className="group bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-semibold text-lg overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <span>Book Free Consultation</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
