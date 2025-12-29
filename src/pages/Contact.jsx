import React from 'react';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageSquare, Shield, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567"],
      description: "Mon-Fri, 9am-6pm EST"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@setuuconsultants.com", "support@setuuconsultants.com"],
      description: "Response within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Business Avenue", "Suite 450", "New York, NY 10001"],
      description: "By appointment only"
    }
  ];

  const faqs = [
    {
      question: "What real estate services do you offer?",
      answer: "We specialize in residential, commercial, and investment properties."
    },
    {
      question: "How quickly will you respond?",
      answer: "We respond to all inquiries within 24 hours."
    },
    {
      question: "Do you handle international properties?",
      answer: "Yes, we provide services across multiple countries."
    },
    {
      question: "What are your consultation fees?",
      answer: "Initial consultations are complimentary."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <div className="border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
    
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Connect with our expert team for personalized real estate solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Contact Info & Details */}
          <div className="space-y-8">
            {/* Contact Methods Card */}
            <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-gray-900/50 to-black">
              <h2 className="text-white text-xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={index}
                      className="group p-4 border border-gray-800 rounded-lg hover:border-gray-700 hover:bg-gray-900/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-black border border-gray-800 rounded-lg group-hover:border-gray-700 transition-colors">
                          <Icon className="h-5 w-5 text-gray-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white text-sm font-medium mb-1">{method.title}</h3>
                          <div className="space-y-0.5">
                            {method.details.map((detail, i) => (
                              <p key={i} className="text-gray-300 text-sm">{detail}</p>
                            ))}
                          </div>
                          <p className="text-gray-500 text-xs mt-2">{method.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Business Hours Card */}
            <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-gray-900/50 to-black">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-black border border-gray-800 rounded-lg">
                  <Clock className="h-5 w-5 text-gray-300" />
                </div>
                <h3 className="text-white text-lg font-semibold">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", time: "10:00 AM - 2:00 PM" },
                  { day: "Sunday", time: "Appointment Only" }
                ].map((schedule, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-3 border-b border-gray-800 last:border-0 hover:bg-gray-900/30 px-2 rounded transition-colors"
                  >
                    <span className="text-gray-300 text-sm">{schedule.day}</span>
                    <span className="text-white text-sm font-medium bg-gray-900 px-3 py-1 rounded">
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick Support Card */}
            <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-gray-900/50 to-black">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-black border border-gray-800 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-gray-300" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold">Urgent Assistance?</h3>
                  <p className="text-gray-400 text-sm">For immediate real estate consultation needs</p>
                </div>
              </div>
              <button className="w-full group bg-white hover:bg-gray-100 text-black font-medium py-3 rounded-lg text-sm transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Emergency Support</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Right Column - Form & FAQ */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Contact Form Card */}
            <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-gray-900/50 to-black">
              <div className="mb-8">
                <h2 className="text-white text-2xl font-semibold mb-2">Send us a Message</h2>
                <p className="text-gray-400">Fill out the form below and our team will get back to you shortly</p>
              </div>
              <ContactForm />
            </div>
            
            {/* FAQ Section */}
            <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-gray-900/50 to-black">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white text-xl font-semibold">Frequently Asked Questions</h3>
                  <p className="text-gray-400 text-sm mt-1">Common questions about our services</p>
                </div>
                <button className="text-gray-300 hover:text-white text-sm font-medium flex items-center space-x-1 transition-colors">
                  <span>View All</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="group p-4 border border-gray-800 rounded-lg hover:border-gray-700 hover:bg-gray-900/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-1.5 bg-black border border-gray-800 rounded mt-0.5">
                        <div className="h-1.5 w-1.5 bg-gray-300 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-medium mb-2 group-hover:text-gray-300 transition-colors">
                          {faq.question}
                        </h4>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Privacy & Security Footer */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-black border border-gray-800 rounded-lg">
                    <Shield className="h-5 w-5 text-gray-300" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Secure & Confidential</p>
                    <p className="text-gray-400 text-xs mt-0.5">
                      Your privacy is our priority. All data is encrypted and secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Chat Button */}
      <div className="fixed bottom-6 right-6">
        <button className="group p-4 bg-white hover:bg-gray-100 text-black rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95">
          <MessageSquare className="h-6 w-6" />
          <div className="absolute -top-2 -right-2">
            <div className="relative">
              <div className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></div>
              <div className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></div>
            </div>
          </div>
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;