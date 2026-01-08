import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Code, FlaskConical } from "lucide-react";
import PersonaCard from "@/components/PersonaCard";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-gray-200 shadow-xl">
              <Image
                src="/profilepic.jpg"
                alt="Benard Gomashie"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
            Benard Yao Gomashie
          </h1>
          
          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-gray-600 mb-6 flex-wrap">
            <span className="font-semibold text-founder">Founder</span>
            <span>•</span>
            <span className="font-semibold text-developer">Developer</span>
            <span>•</span>
            <span className="font-semibold text-researcher">Researcher</span>
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            📍 Accra, Ghana
          </p>

          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Innovative IT professional building healthcare technology, 
            developing scalable web applications, and researching blockchain 
            security systems. Passionate about using technology to solve 
            real-world problems.
          </p>

          {/* Quick Contact */}
          <div className="flex items-center justify-center gap-6 text-gray-600 mb-16 flex-wrap">
            <a href="mailto:benardgomashie@gmail.com" className="hover:text-gray-900 transition-colors">
              📧 benardgomashie@gmail.com
            </a>
            <a href="tel:+233558149177" className="hover:text-gray-900 transition-colors">
              📞 +233 55 814 9177
            </a>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Explore My Work
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            I wear multiple hats. Choose a path to learn more about my expertise.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <PersonaCard
              title="Founder & Product Leader"
              description="Building Yom Health to improve access to home-based healthcare services in Ghana. Leading product strategy and team coordination."
              icon={<Briefcase className="w-8 h-8" />}
              href="/founder"
              color="founder"
              highlights={["Healthcare Innovation", "Product Strategy", "Team Leadership"]}
            />

            <PersonaCard
              title="Software Engineer"
              description="Full-stack developer specializing in React, Django, and Next.js. Building scalable web applications and digital platforms."
              icon={<Code className="w-8 h-8" />}
              href="/developer"
              color="developer"
              highlights={["React & Next.js", "Django & Python", "Full-Stack Development"]}
            />

            <PersonaCard
              title="Researcher & Technologist"
              description="MSc researcher exploring secure edge computing using blockchain. Passionate about distributed systems and IoT security."
              icon={<FlaskConical className="w-8 h-8" />}
              href="/researcher"
              color="researcher"
              highlights={["Blockchain & Ethereum", "Edge Computing", "Academic Research"]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Available for freelance projects, full-time opportunities, 
            research collaborations, and startup partnerships.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg group"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
