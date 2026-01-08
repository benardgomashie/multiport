import Link from "next/link";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Benard Gomashie</h3>
            <p className="text-gray-400 leading-relaxed">
              Founder, Developer, and Researcher passionate about building 
              technology solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/founder" className="text-gray-400 hover:text-founder transition-colors">
                  Founder Profile
                </Link>
              </li>
              <li>
                <Link href="/developer" className="text-gray-400 hover:text-developer transition-colors">
                  Developer Profile
                </Link>
              </li>
              <li>
                <Link href="/researcher" className="text-gray-400 hover:text-researcher transition-colors">
                  Researcher Profile
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/benardgomashie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/benardgomashie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:benardgomashie@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://yomhealth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Website"
              >
                <Globe size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              📍 Accra, Ghana
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Benard Yao Gomashie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
