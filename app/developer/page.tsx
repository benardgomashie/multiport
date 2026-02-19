import type { Metadata } from "next";
import { developerData } from "@/lib/data/developer";
import { Github, Terminal, Code2, Zap, Layers, Database, Server, Cpu, ExternalLink, Download } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Engineer | Benard Gomashie",
  description: "Full-stack developer specializing in React, Django, and Next.js. Building scalable web applications and digital platforms.",
};

export default function DeveloperPage() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Terminal-Style Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59,130,246,0.1) 2px, rgba(59,130,246,0.1) 4px)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 py-32 relative z-10">
          {/* Terminal Window */}
          <div className="bg-gray-800 rounded-lg shadow-2xl border border-gray-700 overflow-hidden max-w-4xl mx-auto">
            {/* Terminal Header */}
            <div className="bg-gray-700 px-4 py-2 flex items-center gap-2 border-b border-gray-600">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm ml-4 font-mono">benard@portfolio:~$</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-8 font-mono text-sm">
              <div className="space-y-2">
                <p className="text-green-400">$ whoami</p>
                <p className="text-gray-300 ml-4">Benard Yao Gomashie</p>
                
                <p className="text-green-400 mt-6">$ cat role.txt</p>
                <p className="text-developer ml-4 text-2xl font-bold">Full-Stack Software Engineer</p>
                
                <p className="text-green-400 mt-6">$ ls -la skills/</p>
                <div className="ml-4 text-gray-300 space-y-1">
                  <p><span className="text-blue-400">drwxr-xr-x</span> frontend/  <span className="text-gray-500"># React, Next.js, TypeScript</span></p>
                  <p><span className="text-blue-400">drwxr-xr-x</span> backend/   <span className="text-gray-500"># Django, Python, Node.js</span></p>
                  <p><span className="text-blue-400">drwxr-xr-x</span> database/  <span className="text-gray-500"># PostgreSQL, MongoDB</span></p>
                  <p><span className="text-blue-400">drwxr-xr-x</span> tools/     <span className="text-gray-500"># Git, Docker, AWS</span></p>
                </div>
                
                <p className="text-green-400 mt-6">$ cat location.txt</p>
                <p className="text-gray-300 ml-4">📍 Accra, Ghana</p>
                
                <p className="text-green-400 mt-6">$ echo $STATUS</p>
                <p className="text-emerald-400 ml-4">✓ Available for freelance projects and full-time opportunities</p>
                
                <p className="text-gray-500 mt-6">$ <span className="animate-pulse">█</span></p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-developer mb-1">5+</div>
              <div className="text-gray-400 text-sm">Years Coding</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-developer mb-1">10+</div>
              <div className="text-gray-400 text-sm">Projects Built</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-developer mb-1">3+</div>
              <div className="text-gray-400 text-sm">Tech Stacks</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-developer mb-1">∞</div>
              <div className="text-gray-400 text-sm">Coffee Consumed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Terminal className="w-8 h-8 text-developer" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              &lt; Tech Stack /&gt;
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-developer transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-developer/20 rounded-lg flex items-center justify-center group-hover:bg-developer/30 transition-colors">
                  <Code2 className="w-5 h-5 text-developer" />
                </div>
                <h3 className="text-xl font-bold text-white">Frontend</h3>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-developer">→</span> React.js & Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-developer">→</span> TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-developer">→</span> Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-developer">→</span> HTML5 & CSS3
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-developer transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-developer/20 rounded-lg flex items-center justify-center group-hover:bg-developer/30 transition-colors">
                  <Server className="w-5 h-5 text-developer" />
                </div>
                <h3 className="text-xl font-bold text-white">Backend</h3>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-developer">→</span> Django & Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-developer">→</span> Node.js & Express
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-developer">→</span> REST APIs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-developer">→</span> Authentication
                </li>
              </ul>
            </div>

            {/* Database */}
            <div className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-developer transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-developer/20 rounded-lg flex items-center justify-center group-hover:bg-developer/30 transition-colors">
                  <Database className="w-5 h-5 text-developer" />
                </div>
                <h3 className="text-xl font-bold text-white">Database</h3>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-developer">→</span> PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-developer">→</span> MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-developer">→</span> MySQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-developer">→</span> Firebase
                </li>
              </ul>
            </div>

            {/* Tools */}
            <div className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-developer transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-developer/20 rounded-lg flex items-center justify-center group-hover:bg-developer/30 transition-colors">
                  <Cpu className="w-5 h-5 text-developer" />
                </div>
                <h3 className="text-xl font-bold text-white">Tools</h3>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-developer">→</span> Git & GitHub
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-developer">→</span> Docker
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-developer">→</span> AWS & Vercel
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-developer">→</span> CI/CD
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase - Code Card Style */}
      <section className="py-24 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-8 h-8 text-developer" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured Projects
            </h2>
          </div>
          <p className="text-gray-400 text-lg mb-4">Building scalable solutions, one commit at a time.</p>
          <p className="text-gray-400 text-sm mb-12">
            Thesis deep-dive on secure edge computing is covered on the{" "}
            <Link href="/researcher" className="text-developer hover:text-blue-400 underline underline-offset-4">
              Research profile
            </Link>
            .
          </p>

          <div className="space-y-8">
            {developerData.projects && developerData.projects.map((project, index) => (
              <div key={index} className="group bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-developer transition-all">
                <div className="bg-gray-700 px-6 py-3 border-b border-gray-600 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-developer" />
                    <h3 className="text-xl font-bold text-white font-mono">{project.name}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.playStore && (
                      <a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2 py-1 bg-green-900/50 border border-green-700 rounded text-xs font-medium text-green-400 hover:bg-green-800/50 transition-colors"
                        aria-label="Get on Google Play"
                      >
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M3.18 23.76c.33.19.7.24 1.06.15L14.84 12 4.24.09a1.55 1.55 0 0 0-1.06.15C2.6.61 2.25 1.22 2.25 2v19.5c0 .79.35 1.4.93 1.26zM16.54 13.7l-2.7 2.7L5.17 23.8 19.8 15.7c.6-.34.95-.84.95-1.4 0-.12-.02-.24-.05-.35l-4.16-2.4 4.16-2.4c.03-.11.05-.23.05-.35 0-.56-.35-1.06-.95-1.4L5.17.2l8.67 7.4 2.7 2.7c.26.26.4.6.4.95s-.14.7-.4.95z"/></svg>
                        Google Play
                      </a>
                    )}
                    {project.apk && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-blue-900/50 border border-blue-700 rounded text-xs font-medium text-blue-400">
                        <Download className="w-3 h-3" />
                        APK
                      </span>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2 py-1 bg-gray-600 border border-gray-500 rounded text-xs font-medium text-gray-200 hover:bg-gray-500 transition-colors"
                        aria-label="View project">
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </a>
                    )}
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-developer font-mono text-sm mb-3">// Key Features:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-gray-400 text-sm">
                          <Zap className="w-4 h-4 text-developer mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-developer font-mono text-sm mb-3">// Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIndex) => (
                        <span key={tIndex} className="px-3 py-1.5 bg-gray-900 border border-gray-600 text-gray-300 rounded font-mono text-xs hover:border-developer hover:text-developer transition-all">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub-style Stats + Experience */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Github className="w-8 h-8 text-developer" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Development Activity
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400">Total Commits</h3>
                <Code2 className="w-5 h-5 text-developer" />
              </div>
              <p className="text-4xl font-bold text-white">1,200+</p>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400">Pull Requests</h3>
                <Layers className="w-5 h-5 text-developer" />
              </div>
              <p className="text-4xl font-bold text-white">150+</p>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400">Code Reviews</h3>
                <Zap className="w-5 h-5 text-developer" />
              </div>
              <p className="text-4xl font-bold text-white">80+</p>
            </div>
          </div>

          {/* Experience */}
          {developerData.experience && (
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Professional Experience</h3>
              <div className="space-y-6">
                {developerData.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-developer pl-6">
                    <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                    <p className="text-developer font-semibold mb-2">{exp.organization}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.location} • {exp.period}</p>
                    <ul className="space-y-2">
                      {exp.achievements?.map((achievement, aIndex) => (
                        <li key={aIndex} className="flex items-start gap-2 text-gray-300">
                          <span className="text-developer mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Terminal CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-developer/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-950 border border-gray-700 rounded-xl overflow-hidden mb-8">
            {/* Terminal Header */}
            <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-sm text-gray-400 font-mono">collaborate.sh</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-8 font-mono text-sm">
              <div className="text-gray-300 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-developer">$</span>
                  <span>git clone https://github.com/yourproject.git</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-developer">$</span>
                  <span>npm install @benard/collaboration</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-developer">$</span>
                  <span>npm run start-working-together</span>
                </div>
                <div className="text-green-400 mt-4">
                  <span>✓ Ready to build amazing things together!</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in new projects and collaboration opportunities. 
            Whether you need a technical co-founder, lead developer, or consultant—let's talk.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-developer text-white rounded-lg font-semibold hover:bg-blue-600 transition-all hover:scale-105 shadow-lg shadow-developer/25"
            >
              Start a Conversation
            </Link>
            <a
              href="https://github.com/benardgomashie"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 border border-gray-700 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
