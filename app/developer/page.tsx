import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import { developerData } from "@/lib/data/developer";
import { ArrowRight, Code2, Laptop, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Engineer | Benard Gomashie",
  description: "Full-stack developer specializing in React, Django, and Next.js. Building scalable web applications and digital platforms.",
};

export default function DeveloperPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <Hero title={developerData.title} subtitle={developerData.subtitle} color="developer" />

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About My Work</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {developerData.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 px-4 bg-developer/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Technical Skills
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Modern technologies for building scalable, performant applications
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md border border-developer/20">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-developer" />
                <h3 className="font-bold text-gray-900">Frontend</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• React.js & Next.js</li>
                <li>• TypeScript & JavaScript</li>
                <li>• Tailwind CSS</li>
                <li>• Responsive Design</li>
                <li>• Figma Collaboration</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-developer/20">
              <div className="flex items-center gap-3 mb-4">
                <Laptop className="w-6 h-6 text-developer" />
                <h3 className="font-bold text-gray-900">Backend</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Python & Django</li>
                <li>• Django REST Framework</li>
                <li>• RESTful API Design</li>
                <li>• MySQL & PostgreSQL</li>
                <li>• Firebase</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-developer/20">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-developer" />
                <h3 className="font-bold text-gray-900">Tools & More</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Git & GitHub</li>
                <li>• Docker (Basics)</li>
                <li>• AWS Deployment</li>
                <li>• WebSockets</li>
                <li>• WordPress</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {developerData.skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} color="developer" />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Real-world applications built with modern technologies
          </p>

          <div className="grid md:grid-cols-1 gap-8">
            {developerData.projects?.map((project, index) => (
              <ProjectCard key={index} {...project} color="developer" />
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 px-4 bg-developer/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Professional Experience
          </h2>

          {developerData.experience?.map((exp, index) => (
            <div key={index} className="mb-12 border-l-4 border-developer pl-6">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                <p className="text-lg text-developer font-semibold">{exp.organization}</p>
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
                        <span className="text-developer mt-1">✓</span>
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

      {/* CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Available for Opportunities
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Open to freelance projects, full-time positions, and contract work. 
            Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-developer text-white px-8 py-4 rounded-lg font-semibold hover:bg-developer-dark transition-colors text-lg group"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://github.com/benardgomashie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
