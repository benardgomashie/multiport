import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import { founderData } from "@/lib/data/founder";
import { ArrowRight, Target, Users, Rocket, Heart } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Founder & Product Leader | Benard Gomashie",
  description: "Building Yom Health to improve access to home-based healthcare services in Ghana. Leading product strategy and team coordination.",
};

export default function FounderPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <Hero title={founderData.title} subtitle={founderData.subtitle} color="founder" />

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">My Journey</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {founderData.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Yom Health Project */}
      <section className="py-16 px-4 bg-founder/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Yom Health Platform
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Connecting patients with verified healthcare professionals for accessible, on-demand care
          </p>

          {founderData.projects && founderData.projects.length > 0 && (
            <div className="grid md:grid-cols-1 gap-8">
              {founderData.projects.map((project, index) => (
                <ProjectCard key={index} {...project} color="founder" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Leadership Experience */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Leadership & Experience
          </h2>

          {founderData.experience?.map((exp, index) => (
            <div key={index} className="mb-12 border-l-4 border-founder pl-6">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                <p className="text-lg text-founder font-semibold">{exp.organization}</p>
                <p className="text-gray-600">
                  {exp.location} • {exp.period}
                </p>
              </div>

              {exp.description.map((desc, idx) => (
                <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                  {desc}
                </p>
              ))}

              {exp.achievements && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <span className="text-founder mt-1">✓</span>
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

      {/* Impact Areas */}
      <section className="py-16 px-4 bg-founder/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Impact & Vision
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-founder/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-founder" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Healthcare Access</h3>
              <p className="text-gray-600 text-sm">
                Improving access to quality healthcare for underserved communities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-founder/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-founder" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Product Strategy</h3>
              <p className="text-gray-600 text-sm">
                Building solutions that solve real problems with measurable impact
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-founder/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-founder" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Team Leadership</h3>
              <p className="text-gray-600 text-sm">
                Coordinating cross-functional teams to deliver excellence
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-founder/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-founder" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Startup Growth</h3>
              <p className="text-gray-600 text-sm">
                From concept to production, navigating the entire journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Leadership Skills
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {founderData.skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} color="founder" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-founder/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Open to partnerships, investment opportunities, and collaborations 
            in healthcare technology and social impact ventures.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-founder text-white px-8 py-4 rounded-lg font-semibold hover:bg-founder-dark transition-colors text-lg group"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
