import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import { researcherData } from "@/lib/data/researcher";
import { ArrowRight, BookOpen, GraduationCap, Lightbulb, Database } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Researcher & Technologist | Benard Gomashie",
  description: "MSc researcher exploring secure edge computing using blockchain. Passionate about distributed systems and IoT security.",
};

export default function ResearcherPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <Hero title={researcherData.title} subtitle={researcherData.subtitle} color="researcher" />

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Research Focus</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {researcherData.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-16 px-4 bg-researcher/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Research Interests
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-researcher/20 text-center">
              <div className="w-16 h-16 bg-researcher/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-researcher" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Edge Computing Security</h3>
              <p className="text-gray-600 text-sm">
                Securing distributed systems in resource-constrained environments
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-researcher/20 text-center">
              <div className="w-16 h-16 bg-researcher/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-researcher" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Blockchain & Smart Contracts</h3>
              <p className="text-gray-600 text-sm">
                Ethereum-based decentralized security frameworks
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-researcher/20 text-center">
              <div className="w-16 h-16 bg-researcher/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-researcher" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Internet of Things (IoT)</h3>
              <p className="text-gray-600 text-sm">
                Security architectures for IoT ecosystems
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-researcher/20 text-center">
              <div className="w-16 h-16 bg-researcher/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-researcher" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Decentralized Identity</h3>
              <p className="text-gray-600 text-sm">
                Access control and trust models for distributed systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Research Projects
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Practical implementations of theoretical research
          </p>

          <div className="grid md:grid-cols-1 gap-8">
            {researcherData.projects?.map((project, index) => (
              <ProjectCard key={index} {...project} color="researcher" />
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-4 bg-researcher/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Academic Background
          </h2>

          {researcherData.education?.map((edu, index) => (
            <div key={index} className="mb-12 bg-white p-8 rounded-xl shadow-md border border-researcher/20">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                <p className="text-lg text-researcher font-semibold">{edu.institution}</p>
                <p className="text-gray-600">{edu.period}</p>
              </div>

              {edu.focus && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {edu.degree.includes("Master") ? "Relevant Coursework:" : "Focus Areas:"}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {edu.focus.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-researcher mt-1">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {edu.achievements && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <span className="text-researcher mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Technical Expertise
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {researcherData.skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} color="researcher" />
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Thesis */}
      <section className="py-16 px-4 bg-researcher/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Publications & Academic Work
          </h2>

          <div className="bg-white p-8 rounded-xl shadow-md border border-researcher/20">
            <div className="flex items-start gap-4 mb-4">
              <BookOpen className="w-8 h-8 text-researcher flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Master&apos;s Thesis</h3>
                <p className="text-lg text-gray-800 mb-2 font-semibold">
                  Secure Edge Computing Using Blockchain: An Ethereum-Based Model for Decentralized Data Security
                </p>
                <p className="text-gray-600 mb-4">
                  Unpublished MSc Thesis, BlueCrest University College (2025)
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This research designed and implemented a comprehensive Ethereum-based security framework 
                  for edge computing environments. The work addresses critical challenges in data integrity, 
                  access control, and decentralized trust in resource-constrained IoT ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Open to Research Collaboration
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Interested in PhD opportunities, research partnerships, and collaborations 
            in blockchain, edge computing, and distributed systems.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-researcher text-white px-8 py-4 rounded-lg font-semibold hover:bg-researcher-dark transition-colors text-lg group"
          >
            Let&apos;s Collaborate
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
