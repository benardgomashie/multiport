import type { Metadata } from "next";
import { founderData } from "@/lib/data/founder";
import { ArrowRight, Target, Users, Rocket, Heart, Building2, Award, TrendingUp, ExternalLink, Download } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Founder & Product Leader | Benard Gomashie",
  description: "Building Yom Health to improve access to home-based healthcare services in Ghana. Leading product strategy and team coordination.",
};

export default function FounderPage() {
  return (
    <div className="bg-white">
      {/* Magazine-Style Hero with Stats */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-founder via-emerald-500 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                🚀 Founder & CEO
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Building the Future of Healthcare
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Democratizing access to quality home-based healthcare services across Ghana
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  <span>Yom Health</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>2023 - Present</span>
                </div>
              </div>
            </div>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-white/80">Early Adopters</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">2023</div>
                <div className="text-white/80">Founded</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">MVP</div>
                <div className="text-white/80">Launched</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-white/80">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="max-w-5xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-founder/10 text-founder rounded-full text-sm font-semibold mb-4">
            MY JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From Vision to Reality
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The story of how a personal mission became a healthcare revolution
          </p>
        </div>

        <div className="space-y-16">
          {/* Chapter 1 */}
          <div className="relative pl-8 border-l-4 border-founder">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-founder rounded-full border-4 border-white shadow-lg"></div>
            <span className="text-sm font-semibold text-founder mb-2 block">CHAPTER 1 • THE SPARK</span>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Recognizing the Problem</h3>
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {founderData.about[0]}
              </p>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="relative pl-8 border-l-4 border-founder">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-founder rounded-full border-4 border-white shadow-lg"></div>
            <span className="text-sm font-semibold text-founder mb-2 block">CHAPTER 2 • THE MISSION</span>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Founding Yom Health</h3>
            <div className="bg-gradient-to-br from-founder/5 to-emerald-50 rounded-xl p-8 border border-founder/10">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {founderData.about[1]}
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Heart className="w-4 h-4 text-founder" />
                  <span>Patient-First Approach</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Rocket className="w-4 h-4 text-founder" />
                  <span>Rapid MVP Development</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="w-4 h-4 text-founder" />
                  <span>Cross-functional Team</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="relative pl-8 border-l-4 border-founder">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-founder rounded-full border-4 border-white shadow-lg"></div>
            <span className="text-sm font-semibold text-founder mb-2 block">CHAPTER 3 • THE EXECUTION</span>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Building & Launching</h3>
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {founderData.about[2] || "From concept to MVP, leading product strategy and technical execution to deliver transformative healthcare solutions."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Big Visual Project Showcase */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-founder/10 text-founder rounded-full text-sm font-semibold mb-4">
              FLAGSHIP PROJECT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Yom Health Platform
            </h2>
          </div>

          {founderData.projects && founderData.projects.length > 0 && founderData.projects.map((project, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-3xl font-bold text-gray-900">{project.name}</h3>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                      {project.playStore && (
                        <span className="flex items-center gap-1 px-2 py-1.5 bg-green-50 border border-green-200 rounded-full text-xs font-medium text-green-700">
                          <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M3.18 23.76c.33.19.7.24 1.06.15L14.84 12 4.24.09a1.55 1.55 0 0 0-1.06.15C2.6.61 2.25 1.22 2.25 2v19.5c0 .79.35 1.4.93 1.26zM16.54 13.7l-2.7 2.7L5.17 23.8 19.8 15.7c.6-.34.95-.84.95-1.4 0-.12-.02-.24-.05-.35l-4.16-2.4 4.16-2.4c.03-.11.05-.23.05-.35 0-.56-.35-1.06-.95-1.4L5.17.2l8.67 7.4 2.7 2.7c.26.26.4.6.4.95s-.14.7-.4.95z"/></svg>
                          Play Store
                        </span>
                      )}
                      {project.apk && (
                        <span className="flex items-center gap-1 px-2 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-medium text-blue-700">
                          <Download className="w-3 h-3" />
                          APK
                        </span>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 bg-founder text-white rounded-full text-xs font-medium hover:bg-founder/80 transition-colors"
                          aria-label="View project live">
                          <ExternalLink className="w-3 h-3" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-founder rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <span key={tIndex} className="px-4 py-1.5 bg-founder/10 text-founder rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-founder/20 to-emerald-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <Building2 className="w-32 h-32 text-founder/40 mx-auto mb-6" />
                    <p className="text-gray-700 font-medium">Healthcare Platform Architecture</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Grid */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-founder/10 text-founder rounded-full text-sm font-semibold mb-4">
            MAKING AN IMPACT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Measurable Results
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-founder/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-founder group-hover:scale-110 transition-all">
              <Rocket className="w-6 h-6 text-founder group-hover:text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Platform Launch</h3>
            <p className="text-gray-600">MVP successfully deployed, connecting patients with providers across Accra</p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-founder/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-founder group-hover:scale-110 transition-all">
              <Users className="w-6 h-6 text-founder group-hover:text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">User Research</h3>
            <p className="text-gray-600">Insights from 50+ early adopters shaping product roadmap</p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-founder/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-founder group-hover:scale-110 transition-all">
              <Target className="w-6 h-6 text-founder group-hover:text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Building</h3>
            <p className="text-gray-600">Cross-functional team of developers and healthcare experts</p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-founder/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-founder group-hover:scale-110 transition-all">
              <TrendingUp className="w-6 h-6 text-founder group-hover:text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Vision</h3>
            <p className="text-gray-600">Strategic roadmap for scaling across Ghana and beyond</p>
          </div>
        </div>
      </section>

      {/* Skills - Badge Style */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-founder/10 text-founder rounded-full text-sm font-semibold mb-4">
              EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Leadership Toolkit
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {founderData.skills.map((skill, index) => (
              <span key={index} className="px-5 py-2.5 bg-white border-2 border-founder/20 text-gray-800 rounded-full font-medium hover:bg-founder hover:text-white hover:border-founder transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-founder via-emerald-600 to-green-700 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Transform Healthcare Together
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Interested in healthcare innovation, partnerships, or joining our mission? 
            Let's connect and explore how we can make a difference.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-founder px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            Get In Touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
