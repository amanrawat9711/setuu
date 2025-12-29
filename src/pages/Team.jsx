// pages/Team.jsx
import React from "react";
import TeamMember from "../components/TeamMember";
import { Users, Target, Globe, HomeIcon, Building2 } from "lucide-react";
import Footer from "../components/Footer";

const Team = () => {
  const advisors = [
    {
      name: "Amit Chturvedi",
      role: "Real Estate",
      experience: "25+ years experience",
      description:
        "Amit Chturvedi is the Founder and Chairperson of Setuu, a name inspired by the idea of a bridge—bringing people, opportunities, and relationships together with trust at the core. With over 25 years of professional experience, Amit is a seasoned expert in real estate and investments, with a strong hold in the UAE and across global markets. He is widely respected for his deep understanding of the real estate industry, market cycles, and investment opportunities, both in India and internationally. A natural networker and relationship builder, Amit is well-connected with corporates, investors, developers, and professionals worldwide. He has a unique ability to connect people across geographies and create meaningful, long-term relationships—true to Setuu’s philosophy of building bridges, not just transactions. Amit brings extensive industry knowledge, strategic insight, and hands-on expertise in real estate investing, helping clients identify the right opportunities, manage risks, and build sustainable wealth. His leadership style is grounded, people-centric, and driven by long-term value creation. Known as a strong leader and trusted advisor, Amit Chaturvedi leads Setuu with a clear vision—to connect people globally, enable smart investments, and create relationships that stand the test of time.",
      imageIndex: 2,
    },
    {
      name: "Bharat Ratna Upmanyu",
      role: "Chief Consulting Officer",
      experience: "25+ years experience",
      description:
        "Bharat Ratna Upmanyu is the Chief Consulting Officer at Setuu, with deep expertise in financial advisory, risk management, and corporate restructuring. He brings a structured, analytical, and solution-driven approach to addressing complex financial and strategic challenges for both individuals and corporates. With extensive experience across diverse industries and organizational scales, Bharat specializes in financial reconstruction, joint ventures, equity structuring, mergers and acquisitions, audits, and loan advisory. His work involves closely supporting clients through critical decision-making processes, ensuring financial stability, regulatory alignment, and long-term value creation. Bharat has worked with organizations across different stages of growth, including financially stressed entities, where he plays a key role in consulting, onboarding, and providing technical and strategic support. His ability to assess risk, restructure financial frameworks, and guide organizations toward sustainable recovery makes him a trusted advisor within the Setuu ecosystem. At Setuu, Bharat Ratna Upmanyu is known for his professionalism, clarity of thought, and commitment to delivering reliable, well-governed financial solutions aligned with clients’ long-term objectives.",
      imageIndex: 1,
    },
    {
      name: "Shalendra",
      role: "Legal Advisor",
      experience: "29+ years experience",
      description:
        "Shalendra is the Legal Advisor at Setuu and a highly respected legal professional with over 29 years of experience across India, European, and Asian jurisdictions. He previously served as the Vice President of the New Delhi Bar Association (2015–16) and is widely known for his strong legal acumen and practical advisory approach.\n\nWith extensive expertise in corporate law, real estate advisory, criminal law, and transaction advisory, Shalendra plays a critical role in guiding clients through complex legal and regulatory frameworks. He also brings deep knowledge of FEMA / FERA regulations, cybercrime matters, and corporate compliance, ensuring well-governed and risk-mitigated solutions. Shalendra has advised a wide range of individuals, corporates, and institutions, offering clear, strategic, and legally sound counsel across diverse matters. His vast cross-border exposure and understanding of multiple legal systems make him a trusted advisor within the Setuu ecosystem. At Setuu, Shalendra is valued for his integrity, experience, and ability to provide reliable legal guidance that supports secure transactions, compliant structures, and long-term business confidence.",
      imageIndex: 0,
    },
  ];

  const specialties = [
    { icon: HomeIcon, title: "Residential Properties", count: "300+ projects" },
    { icon: Building2, title: "Commercial Real Estate", count: "150+ projects" },
    { icon: Target, title: "Investment Properties", count: "200+ clients" },
    { icon: Globe, title: "International Markets", count: "15+ countries" },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 border border-gray-800 rounded-full mb-4 md:mb-6">
            <span className="text-white text-sm md:text-base">Our Experts</span>
          </div>

          <h5 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Meet Our <span className="text-gray-300">Real Estate</span> Team
          </h5>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16 md:pb-20">
        {/* Team Specialties */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
            Team Expertise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <div
                  key={index}
                  className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 hover:bg-gray-900/20 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center p-3 border border-gray-800 rounded-lg mb-4 group-hover:border-gray-700 transition-colors">
                    <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    {specialty.title}
                  </h3>
                  <div className="text-gray-300 text-base">{specialty.count}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Advisors */}
        <div className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {advisors.map((advisor, index) => (
              <TeamMember key={index} {...advisor} />
            ))}
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="border border-gray-800 rounded-xl p-8 md:p-12 text-center bg-gradient-to-br from-gray-900/30 to-black">
          <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border border-gray-800 rounded-xl mb-6">
            <Users className="h-7 w-7 md:h-8 md:w-8 text-white" />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Join Our Real Estate Team
          </h3>

          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented real estate professionals passionate about property advisory.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 text-base md:text-lg font-medium">
              View Career Opportunities
            </button>
            <button className="border border-gray-700 hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 text-base md:text-lg font-medium">
              Submit Your Resume
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
