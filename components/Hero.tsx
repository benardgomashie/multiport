import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  color: "founder" | "developer" | "researcher";
  children?: ReactNode;
}

export default function Hero({ title, subtitle, color, children }: HeroProps) {
  const colorClasses = {
    founder: "from-founder/10 to-founder/5",
    developer: "from-developer/10 to-developer/5",
    researcher: "from-researcher/10 to-researcher/5",
  };

  return (
    <section className={`relative py-20 px-4 bg-gradient-to-b ${colorClasses[color]}`}>
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
}
