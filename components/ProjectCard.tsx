import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  github?: string;
  color?: "founder" | "developer" | "researcher";
}

export default function ProjectCard({
  name,
  description,
  technologies,
  highlights,
  link,
  github,
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
        <div className="flex gap-2">
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
