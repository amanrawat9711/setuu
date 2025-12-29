import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, features, delay = 0 }) => {
  return (
    <div 
      className="group relative bg-black rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-white/10 transition-all duration-700 p-8 border border-gray-800 hover:border-white/30 overflow-hidden fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black group-hover:via-gray-800 transition-all duration-700"></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-1000" style={{ transitionDelay: '300ms' }}></div>
      
      {/* Glow border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="relative inline-flex items-center justify-center p-5 bg-gradient-to-br from-gray-900 to-black rounded-2xl mb-8 group-hover:from-white/10 group-hover:to-gray-900 transition-all duration-500 border border-gray-800 group-hover:border-white/20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-500" />
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300 tracking-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
        
        {/* Features List */}
        <ul className="space-y-4 mb-10">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-start text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
            >
              <div className="flex-shrink-0 mt-1 mr-3">
                <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <span className="flex-1">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Learn More Link */}
        <Link
          to="/consultancy"
          className="group/link relative inline-flex items-center text-white font-medium overflow-hidden rounded-lg"
        >
          <span className="relative z-10 px-4 py-2 bg-transparent border border-white/30 rounded-lg group-hover:border-white/50 transition-all duration-300">
            Learn More
          </span>
          <div className="absolute inset-0 bg-white transform -translate-x-full group-hover/link:translate-x-0 transition-transform duration-500"></div>
          <ArrowRight className="ml-3 h-5 w-5 text-white transform group-hover/link:translate-x-2 transition-transform duration-300 relative z-10" />
        </Link>
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 transform rotate-45 -translate-y-16 translate-x-8 group-hover:bg-white/10 transition-colors duration-500 rounded-lg"></div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white via-white/50 to-transparent group-hover:w-full transition-all duration-1000"></div>
    </div>
  );
};

export default ServiceCard;