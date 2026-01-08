import type { Metadata } from "next";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Benard Gomashie",
  description: "Get in touch with Benard Gomashie for opportunities, collaborations, and projects.",
};

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Available for freelance projects, full-time opportunities, research collaborations, 
            and startup partnerships. I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:benardgomashie@gmail.com"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                benardgomashie@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
              <a
                href="tel:+233558149177"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                +233 55 814 9177
              </a>
            </div>

            {/* Location */}
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700">Accra, Ghana</p>
            </div>
          </div>

          {/* Quick Links to Personas */}
          <div className="bg-gradient-to-r from-founder/10 via-developer/10 to-researcher/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Explore My Work
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/founder"
                className="bg-white p-6 rounded-xl shadow-md border-2 border-founder/20 hover:border-founder transition-all hover:shadow-lg text-center group"
              >
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-founder transition-colors">
                  Founder Profile
                </h3>
                <p className="text-sm text-gray-600">
                  Healthcare innovation & product leadership
                </p>
              </Link>

              <Link
                href="/developer"
                className="bg-white p-6 rounded-xl shadow-md border-2 border-developer/20 hover:border-developer transition-all hover:shadow-lg text-center group"
              >
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-developer transition-colors">
                  Developer Profile
                </h3>
                <p className="text-sm text-gray-600">
                  Full-stack development & technical projects
                </p>
              </Link>

              <Link
                href="/researcher"
                className="bg-white p-6 rounded-xl shadow-md border-2 border-researcher/20 hover:border-researcher transition-all hover:shadow-lg text-center group"
              >
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-researcher transition-colors">
                  Researcher Profile
                </h3>
                <p className="text-sm text-gray-600">
                  Blockchain research & academic work
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start a Conversation?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            I typically respond within 24-48 hours.
          </p>
          <a
            href="mailto:benardgomashie@gmail.com?subject=Let's Connect"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg group"
          >
            <Send className="w-5 h-5" />
            Send Me an Email
          </a>
        </div>
      </section>

      {/* Availability */}
      <section className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Current Availability
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-founder/5 rounded-lg border border-founder/20">
              <p className="font-semibold text-gray-900 mb-1">Founder Opportunities</p>
              <p className="text-sm text-gray-600">Open to partnerships & investment</p>
            </div>
            <div className="p-4 bg-developer/5 rounded-lg border border-developer/20">
              <p className="font-semibold text-gray-900 mb-1">Development Work</p>
              <p className="text-sm text-gray-600">Available for freelance & full-time</p>
            </div>
            <div className="p-4 bg-researcher/5 rounded-lg border border-researcher/20">
              <p className="font-semibold text-gray-900 mb-1">Research Collaboration</p>
              <p className="text-sm text-gray-600">Open to PhD & research projects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
