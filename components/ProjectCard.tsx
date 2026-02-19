import { ExternalLink, Github, Download } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  github?: string;
  playStore?: string;
  apk?: string;
  color?: "founder" | "developer" | "researcher";
}

export default function ProjectCard({
  name,
  description,
  technologies,
  highlights,
  link,
  github,
  playStore,
  apk,
  color = "developer",
}: ProjectCardProps) {
  const colorClasses = {
    founder: "border-founder/30 hover:border-founder bg-founder/5",
    developer: "border-developer/30 hover:border-developer bg-developer/5",
    researcher: "border-researcher/30 hover:border-researcher bg-researcher/5",
  };

  return (
    <div className={`p-6 border-2 rounded-xl transition-all ${colorClasses[color]} hover:shadow-lg`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <div className="flex gap-2 items-center">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="View project"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {playStore && (
            <a
              href={playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 bg-green-50 border border-green-200 rounded-full text-xs font-medium text-green-700 hover:bg-green-100 transition-colors"
              aria-label="Get on Google Play"
            >
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                <path d="M3.18 23.76c.33.19.7.24 1.06.15L14.84 12 4.24.09a1.55 1.55 0 0 0-1.06.15C2.6.61 2.25 1.22 2.25 2v19.5c0 .79.35 1.4.93 1.26zM16.54 13.7l-2.7 2.7L5.17 23.8 19.8 15.7c.6-.34.95-.84.95-1.4 0-.12-.02-.24-.05-.35l-4.16-2.4 4.16-2.4c.03-.11.05-.23.05-.35 0-.56-.35-1.06-.95-1.4L5.17.2l8.67 7.4 2.7 2.7c.26.26.4.6.4.95s-.14.7-.4.95z"/>
              </svg>
              Google Play
            </a>
          )}
          {apk && (
            <a
              href={apk}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-medium text-blue-700 hover:bg-blue-100 transition-colors"
              aria-label="Download APK"
            >
              <Download size={12} />
              APK
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Highlights */}
      <ul className="space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-gray-400 mt-1">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
