import type { Metadata } from "next";
import Link from "next/link";
import { founderData } from "@/lib/data/founder";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  HeartPulse,
  LineChart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { DM_Serif_Display, Manrope } from "next/font/google";

const headingFont = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const bodyFont = Manrope({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Founder & Product Leader | Benard Gomashie",
  description:
    "Building Yom Health to improve access to home-based healthcare services in Ghana. Leading product strategy and team coordination.",
};

const impactStats = [
  { label: "Products Launched", value: "5+" },
  { label: "Primary Focus", value: "HealthTech" },
  { label: "Current Stage", value: "MVP + Growth" },
  { label: "Base", value: "Accra" },
];

export default function FounderPage() {
  return (
    <div className={`${bodyFont.className} bg-[#f7f5ef] text-[#1f2a24]`}>
      <section className="relative overflow-hidden border-b border-[#d6d2c8] bg-gradient-to-br from-[#f7f5ef] via-[#f0ece2] to-[#e6f6ed] px-4 py-20 md:py-28">
        <div className="absolute -right-20 top-6 h-64 w-64 rounded-full bg-founder/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-founder/30 bg-founder/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-founder">
            <Sparkles className="h-3.5 w-3.5" />
            Founder Profile
          </p>

          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <h1 className={`${headingFont.className} text-5xl leading-[0.95] text-[#15241d] md:text-7xl`}>
                Building healthcare products people can trust.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2f3d36]">
                {founderData.about[0]}
              </p>
            </div>

            <div className="rounded-2xl border border-founder/20 bg-white/75 p-6 shadow-lg shadow-founder/10 backdrop-blur">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-founder">
                Strategic Lens
              </h2>
              <div className="space-y-4 text-sm text-[#2a372f]">
                <p className="flex items-start gap-2">
                  <HeartPulse className="mt-0.5 h-4 w-4 text-founder" />
                  Patient-first healthcare experience design.
                </p>
                <p className="flex items-start gap-2">
                  <LineChart className="mt-0.5 h-4 w-4 text-founder" />
                  Practical growth loops from research to rollout.
                </p>
                <p className="flex items-start gap-2">
                  <Users className="mt-0.5 h-4 w-4 text-founder" />
                  Cross-functional execution across product and engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d6d2c8] bg-[#f2efe6] px-4 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-[#d8d2c4] bg-white/70 p-4 text-center">
              <p className="text-2xl font-extrabold text-founder">{stat.value}</p>
              <p className="text-xs uppercase tracking-wide text-[#55625c]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${headingFont.className} mb-10 text-4xl text-[#15241d] md:text-5xl`}>
            Founder Story
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {founderData.about.map((paragraph, index) => (
              <article key={index} className="rounded-2xl border border-[#ddd8ca] bg-white p-6 shadow-sm">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-founder">
                  Chapter {String(index + 1).padStart(2, "0")}
                </p>
                <p className="leading-relaxed text-[#2f3d36]">{paragraph}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef5ef] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center justify-between gap-4">
            <h2 className={`${headingFont.className} text-4xl text-[#15241d] md:text-5xl`}>
              Portfolio of Initiatives
            </h2>
            <Building2 className="h-8 w-8 text-founder" />
          </div>

          <div className="space-y-6">
            {founderData.projects?.map((project, index) => (
              <article key={index} className="rounded-2xl border border-founder/20 bg-white p-6 shadow-sm">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold text-[#15241d]">{project.name}</h3>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-founder px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-founder-dark"
                    >
                      Visit Project
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>

                <p className="mb-4 text-[#314038]">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-founder/20 bg-founder/10 px-3 py-1 text-xs font-semibold text-founder">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="grid gap-2 md:grid-cols-2">
                  {project.highlights.slice(0, 6).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-[#2f3d36]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-founder" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-founder/20 bg-white p-8 text-center shadow-lg">
          <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-founder" />
          <h2 className={`${headingFont.className} text-4xl text-[#15241d] md:text-5xl`}>
            Open to Strategic Partnerships
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#33413a]">
            If you are building in healthcare, digital infrastructure, or mission-driven African markets, I am open to collaboration.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-founder px-7 py-3.5 font-semibold text-white transition hover:bg-founder-dark"
          >
            Contact Me
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
