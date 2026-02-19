import type { Metadata } from "next";
import { researcherData } from "@/lib/data/researcher";
import { BookOpen, GraduationCap, Award, FileText, Users, Brain, Network, Lock, Globe, Zap, Database, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Researcher & Technologist | Benard Gomashie",
  description: "MSc researcher exploring secure edge computing using blockchain. Passionate about distributed systems and IoT security.",
};

export default function ResearcherPage() {
  return (
    <div className="relative bg-gradient-to-b from-purple-50 via-white to-purple-50/30">
      {/* Academic Hero */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-12 h-12" />
            <span className="text-purple-200 text-lg font-semibold">Academic Researcher</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {researcherData.title}
          </h1>
          
          <p className="text-2xl text-purple-100 mb-12 max-w-3xl leading-relaxed">
            {researcherData.subtitle}
          </p>

          {/* Academic Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <FileText className="w-8 h-8 mb-3 text-purple-200" />
              <div className="text-3xl font-bold mb-1">8+</div>
              <div className="text-purple-200 text-sm">Publications</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <BookOpen className="w-8 h-8 mb-3 text-purple-200" />
              <div className="text-3xl font-bold mb-1">MSc</div>
              <div className="text-purple-200 text-sm">Degree</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <Award className="w-8 h-8 mb-3 text-purple-200" />
              <div className="text-3xl font-bold mb-1">3+</div>
              <div className="text-purple-200 text-sm">Research Areas</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <Users className="w-8 h-8 mb-3 text-purple-200" />
              <div className="text-3xl font-bold mb-1">5+</div>
              <div className="text-purple-200 text-sm">Collaborations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Brain className="w-10 h-10 text-researcher" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Research Focus</h2>
          </div>
          
          <div className="bg-white border-l-4 border-researcher rounded-r-xl shadow-lg p-8">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              {researcherData.about.map((paragraph, index) => (
                <p key={index} className="first:text-xl first:text-gray-900 first:font-semibold">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Timeline */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-10 h-10 text-researcher" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Academic Journey</h2>
          </div>

          <div className="space-y-8">
            {/* MSc */}
            <div className="relative pl-8 border-l-2 border-researcher">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-researcher rounded-full border-4 border-purple-50"></div>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Master of Science (MSc)</h3>
                    <p className="text-researcher font-semibold text-lg">Computer Science</p>
                  </div>
                  <span className="text-gray-500 text-sm">2020 - 2022</span>
                </div>
                <p className="text-gray-700 mb-4">
                  University of Ghana • Focus on Distributed Systems & Security
                </p>
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-researcher">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Thesis:</p>
                  <p className="text-gray-700 italic">
                    "Secure Edge Computing Using Blockchain Technology and Smart Contracts"
                  </p>
                </div>
              </div>
            </div>

            {/* BSc */}
            <div className="relative pl-8 border-l-2 border-purple-300">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-300 rounded-full border-4 border-purple-50"></div>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Bachelor of Science (BSc)</h3>
                    <p className="text-purple-600 font-semibold text-lg">Computer Science</p>
                  </div>
                  <span className="text-gray-500 text-sm">2015 - 2019</span>
                </div>
                <p className="text-gray-700">
                  University of Ghana • First Class Honours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Network className="w-10 h-10 text-researcher" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Research Interests</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-8 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-researcher rounded-lg">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Edge Computing Security</h3>
                  <p className="text-gray-600">
                    Securing distributed systems in resource-constrained environments using novel cryptographic approaches and decentralized architectures.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-8 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-researcher rounded-lg">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Blockchain & Smart Contracts</h3>
                  <p className="text-gray-600">
                    Ethereum-based decentralized security frameworks, consensus algorithms, and distributed ledger applications for secure systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-8 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-researcher rounded-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Internet of Things (IoT)</h3>
                  <p className="text-gray-600">
                    Security architectures for IoT ecosystems, focusing on authentication, data integrity, and privacy in connected devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-8 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-researcher rounded-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Decentralized Identity</h3>
                  <p className="text-gray-600">
                    Access control and trust models for distributed systems, self-sovereign identity, and privacy-preserving authentication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <FileText className="w-10 h-10 text-researcher" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Publications & Research</h2>
          </div>

          <div className="space-y-6">
            {researcherData.projects?.map((project, index) => (
              <div key={index} className="bg-white border border-purple-200 rounded-xl p-8 hover:shadow-xl transition-all">
                {/* Citation style header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-researcher rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 bg-researcher text-white rounded-full text-xs font-medium hover:bg-researcher/80 transition-colors flex-shrink-0 ml-4"
                          aria-label="View project">
                          <ExternalLink className="w-3 h-3" />
                          Live
                        </a>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-purple-100 text-researcher text-sm rounded-full font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        Research Article
                      </span>
                      <span>•</span>
                      <span>2022-2023</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Database className="w-10 h-10 text-researcher" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Technical Expertise</h2>
          </div>
          
          <div className="bg-white border border-purple-200 rounded-xl p-8">
            <div className="flex flex-wrap gap-3">
              {researcherData.skills.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-researcher font-semibold rounded-lg border border-purple-200 hover:shadow-md transition-all">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Thesis Showcase */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Award className="w-10 h-10 text-researcher" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Master's Thesis</h2>
          </div>

          <div className="bg-white border-l-4 border-researcher rounded-r-xl shadow-xl p-10">
            <div className="flex items-start gap-4 mb-6">
              <BookOpen className="w-10 h-10 text-researcher flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Secure Edge Computing Using Blockchain: An Ethereum-Based Model for Decentralized Data Security
                </h3>
                <p className="text-gray-600 mb-6 italic">
                  Unpublished MSc Thesis, BlueCrest University College (2025)
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                This research designed and implemented a comprehensive Ethereum-based security framework 
                for edge computing environments. The work addresses critical challenges in data integrity, 
                access control, and decentralized trust in resource-constrained IoT ecosystems.
              </p>
              
              <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-researcher mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Key Contributions:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-researcher mt-1">→</span>
                    <span>Novel blockchain-based security architecture for edge devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-researcher mt-1">→</span>
                    <span>Smart contract framework for decentralized access control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-researcher mt-1">→</span>
                    <span>Performance evaluation in resource-constrained environments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-researcher via-purple-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <GraduationCap className="w-6 h-6" />
              <span className="font-semibold">Academic Researcher</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Open to Research Collaboration
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Interested in PhD opportunities, research partnerships, and collaborations 
            in blockchain, edge computing, and distributed systems security.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-researcher rounded-lg font-semibold hover:bg-purple-50 transition-all hover:scale-105 shadow-lg"
            >
              Let's Collaborate
            </Link>
            <Link
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              View Publications
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="font-bold mb-2">Research Areas</h3>
              <p className="text-purple-100 text-sm">Blockchain, IoT Security, Edge Computing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="font-bold mb-2">Looking For</h3>
              <p className="text-purple-100 text-sm">PhD Programs, Research Positions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-purple-100 text-sm">Open to Global Opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
