interface SkillBadgeProps {
  skill: string;
  color?: "founder" | "developer" | "researcher" | "neutral";
}

export default function SkillBadge({ skill, color = "neutral" }: SkillBadgeProps) {
  const colorClasses = {
    founder: "bg-founder/10 text-founder-dark border-founder/20",
    developer: "bg-developer/10 text-developer-dark border-developer/20",
    researcher: "bg-researcher/10 text-researcher-dark border-researcher/20",
    neutral: "bg-gray-100 text-gray-700 border-gray-200",
  };

  return (
    <span
      className={`inline-block px-4 py-2 rounded-full text-sm font-medium border ${colorClasses[color]} transition-colors hover:shadow-md`}
    >
      {skill}
    </span>
  );
}
