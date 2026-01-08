import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface PersonaCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  color: "founder" | "developer" | "researcher";
  highlights: string[];
}

export default function PersonaCard({
  title,
  description,
  icon,
  href,
  color,
  highlights,
}: PersonaCardProps) {
  const colorClasses = {
    founder: {
      bg: "group-hover:bg-founder/5",
      border: "border-founder/20 group-hover:border-founder",
      icon: "text-founder",
      button: "bg-founder hover:bg-founder-dark",
    },
    developer: {
      bg: "group-hover:bg-developer/5",
      border: "border-developer/20 group-hover:border-developer",
      icon: "text-developer",
      button: "bg-developer hover:bg-developer-dark",
    },
    researcher: {
      bg: "group-hover:bg-researcher/5",
      border: "border-researcher/20 group-hover:border-researcher",
      icon: "text-researcher",
      button: "bg-researcher hover:bg-researcher-dark",
    },
  };

  const colors = colorClasses[color];

  return (
    <Link href={href} className="group block">
      <div
        className={`h-full p-8 border-2 rounded-2xl transition-all duration-300 ${colors.border} ${colors.bg} hover:shadow-xl`}
      >
        {/* Icon */}
        <div className={`mb-6 ${colors.icon}`}>{icon}</div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:translate-x-1 transition-transform">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        {/* Highlights */}
        <div className="mb-6 space-y-2">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <div className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace("text-", "bg-")}`} />
              {highlight}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all ${colors.button}`}
        >
          Explore
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
