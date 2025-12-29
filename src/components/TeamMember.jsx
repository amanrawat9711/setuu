// components/TeamMember.jsx
import React from "react";
import { Award } from "lucide-react";

import member1 from "../assets/shalendra.webp";
import member2 from "../assets/baharatratna.webp";
import member3 from "../assets/amitchaturvedi.webp";

const TeamMember = ({ name, role, experience, description, imageIndex = 0 }) => {
  const memberImages = [member1, member2, member3];
  const memberImage = memberImages[imageIndex] || member1;

  return (
    <div className="group relative bg-black rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-white/10 transition-all duration-500 border border-white/10 hover:border-white/30 overflow-hidden">
      {/* Hover background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black group-hover:from-gray-900 group-hover:via-black group-hover:to-gray-900 transition-all duration-500"></div>

      {/* Animated border effect */}
      <div className="absolute inset-0 border border-white/5 group-hover:border-white/20 rounded-xl sm:rounded-2xl transition-all duration-500"></div>

      <div className="relative z-10 p-6 sm:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
          {/* LEFT: Wider on desktop only */}
          <div className="w-full md:w-[380px] lg:w-[460px] xl:w-[520px] shrink-0 flex">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-all duration-300 shadow-2xl min-h-[280px] md:min-h-0">
              {memberImage ? (
                <img
                  src={memberImage}
                  alt={name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-white/10 via-white/5 to-white/10 flex items-center justify-center">
                        <div class="text-center p-8">
                          <span class="text-6xl font-bold text-white">${name.charAt(0)}</span>
                          <p class="text-white/80 mt-4 text-xl">${name}</p>
                          <p class="text-white/60 mt-2">${role}</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-white/10 via-white/5 to-white/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-6xl font-bold text-white">
                      {name.charAt(0)}
                    </span>
                    <p className="text-white/80 mt-4 text-xl">{name}</p>
                    <p className="text-white/60 mt-2">{role}</p>
                  </div>
                </div>
              )}

              {/* Experience badge */}
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md rounded-lg px-3 py-2 shadow-xl border border-white/20">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-white" />
                  <span className="text-white font-semibold text-sm sm:text-base">
                    {experience}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Text column */}
          <div className="flex-1 min-w-0 flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {name}
            </h3>
            <p className="text-white/80 font-medium mb-4 text-lg sm:text-xl">
              {role}
            </p>

            <div className="h-px bg-white/10 mb-4"></div>

            <p className="text-gray-300 leading-relaxed text-base sm:text-lg whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Hover accent effect */}
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-white/5 to-white/10 rounded-bl-xl sm:rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Gradient overlay on hover (fixed typo) */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/0 to-white/0 group-hover:via-white/5 group-hover:to-white/10 transition-all duration-700 rounded-xl sm:rounded-2xl"></div>
    </div>
  );
};

export default TeamMember;
