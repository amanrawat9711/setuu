import React, { useState, useEffect, useRef } from 'react';
import { Send, Phone, Mail, User, Building2, Shield, Sparkles } from 'lucide-react';
import gsap from 'gsap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);
  const successRef = useRef(null);
  const inputRefs = useRef([]);

  useEffect(() => {
    // Animate form entrance
    gsap.fromTo(formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animate form elements sequentially
    gsap.fromTo('.form-element',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "back.out(1.7)" }
    );

    // Floating animation for decorative elements
    gsap.to('.floating-element', {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  useEffect(() => {
    if (isSubmitted && successRef.current) {
      gsap.fromTo(successRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
      );
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (index) => {
    gsap.to(inputRefs.current[index], {
      scale: 1.02,
      boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
      duration: 0.3
    });
  };

  const handleBlur = (index) => {
    gsap.to(inputRefs.current[index], {
      scale: 1,
      boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
      duration: 0.3
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Animate button loading state
    gsap.to('.submit-btn', {
      scale: 0.98,
      duration: 0.2
    });

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Animate success message
      gsap.fromTo('.success-icon',
        { scale: 0, rotate: -180 },
        { scale: 1, rotate: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" }
      );

      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        budget: '',
        timeline: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        gsap.to(successRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          onComplete: () => setIsSubmitted(false)
        });
      }, 5000);
    }, 2000);
  };

  const propertyTypes = [
    'Residential',
    'Commercial',
    'Industrial',
    'Land',
    'Mixed-Use',
    'Investment Property'
  ];

  const budgetRanges = [
    'Under $500,000',
    '$500,000 - $1M',
    '$1M - $5M',
    '$5M - $10M',
    '$10M+'
  ];

  const timelines = [
    'Immediately',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'Planning phase'
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-blue-900/20 to-purple-900/10 rounded-full blur-3xl" />
        <div className="floating-element absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-r from-purple-900/20 to-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-600/10 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Success Message */}
      {isSubmitted && (
        <div ref={successRef} className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-lg flex items-center justify-center rounded-2xl z-50">
          <div className="relative text-center p-8">
            {/* Animated particles */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-green-400 rounded-full floating-element"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
            
            <div className="relative">
              <div className="success-icon w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">Message Sent Successfully!</h3>
              <p className="text-gray-300 text-lg">Our real estate expert will contact you within 24 hours.</p>
              <div className="mt-6">
                <Sparkles className="h-8 w-8 text-yellow-400 mx-auto animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div ref={formRef} className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-700/50">
        {/* Header */}
        <div className="text-center mb-10 form-element">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-50" />
            <div className="relative p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl">
              <Building2 className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
            Get Expert Real Estate Advice
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you promptly
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                label: "Full Name *",
                icon: User,
                name: "name",
                type: "text",
                placeholder: "John Smith"
              },
              {
                label: "Email Address *",
                icon: Mail,
                name: "email",
                type: "email",
                placeholder: "john@example.com"
              }
            ].map((field, index) => (
              <div key={field.name} className="space-y-2 form-element">
                <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <field.icon className="h-4 w-4 mr-2 text-blue-400" />
                  {field.label}
                </label>
                <input
                  ref={el => inputRefs.current[index] = el}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  onFocus={() => handleFocus(index)}
                  onBlur={() => handleBlur(index)}
                  required
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-500 hover:bg-gray-800/70"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>
          
          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                label: "Phone Number",
                icon: Phone,
                name: "phone",
                type: "tel",
                placeholder: "+1 (555) 000-0000"
              },
              {
                label: "Property Type *",
                name: "propertyType",
                type: "select",
                options: propertyTypes
              },
              {
                label: "Budget Range *",
                name: "budget",
                type: "select",
                options: budgetRanges
              }
            ].map((field, index) => (
              <div key={field.name} className="space-y-2 form-element">
                <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  {field.icon && <field.icon className="h-4 w-4 mr-2 text-blue-400" />}
                  {field.label}
                </label>
                {field.type === 'select' ? (
                  <div className="relative">
                    <select
                      ref={el => inputRefs.current[index + 2] = el}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(index + 2)}
                      onBlur={() => handleBlur(index + 2)}
                      required
                      className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-white appearance-none cursor-pointer hover:bg-gray-800/70"
                    >
                      <option value="" className="bg-gray-900">Select {field.name === 'propertyType' ? 'property type' : 'budget range'}</option>
                      {field.options.map((option) => (
                        <option key={option} value={option} className="bg-gray-900">{option}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <input
                    ref={el => inputRefs.current[index + 2] = el}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={() => handleFocus(index + 2)}
                    onBlur={() => handleBlur(index + 2)}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-500 hover:bg-gray-800/70"
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}
          </div>
          
          {/* Timeline */}
          <div className="space-y-2 form-element">
            <label className="text-sm font-medium text-gray-300 mb-2 block">
              Investment Timeline *
            </label>
            <div className="relative">
              <select
                ref={el => inputRefs.current[5] = el}
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                onFocus={() => handleFocus(5)}
                onBlur={() => handleBlur(5)}
                required
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-white appearance-none cursor-pointer hover:bg-gray-800/70"
              >
                <option value="" className="bg-gray-900">Select timeline</option>
                {timelines.map((timeline) => (
                  <option key={timeline} value={timeline} className="bg-gray-900">{timeline}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Message */}
          <div className="space-y-2 form-element">
            <label className="text-sm font-medium text-gray-300 mb-2 block">
              Project Details / Message *
            </label>
            <textarea
              ref={el => inputRefs.current[6] = el}
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus(6)}
              onBlur={() => handleBlur(6)}
              required
              rows="6"
              className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-500 resize-none hover:bg-gray-800/70"
              placeholder="Tell us about your real estate project, requirements, and any specific needs..."
            />
          </div>
          
          {/* Security Info */}
          <div className="form-element">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="font-medium text-white mb-1">Your information is secure</div>
                  <div className="text-sm text-gray-400">We never share your details with third parties</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-green-400 font-medium">256-bit encrypted</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`submit-btn w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white py-5 px-8 rounded-xl transition-all duration-300 font-medium text-lg flex items-center justify-center group shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:-translate-y-1'
            }`}
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;