import type { Metadata } from "next";
import Link from "next/link";
import { researcherData } from "@/lib/data/researcher";
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  GraduationCap,
  Microscope,
  Orbit,
  ScrollText,
  Shapes,
} from "lucide-react";
import { Crimson_Text, Manrope } from "next/font/google";

const headingFont = Crimson_Text({ subsets: ["latin"], weight: ["600", "700"] });
const bodyFont = Manrope({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Researcher & Technologist | Benard Gomashie",
  description:
    "MSc researcher exploring secure edge computing using blockchain. Passionate about distributed systems and IoT security.",
};

const focusAreas = [
  "Edge system security",
  "Blockchain-based trust frameworks",
  "Decentralized identity and access models",
  "Applied AI for information extraction",
];

export default function ResearcherPage() {
  return (
    <div className={`${bodyFont.className} bg-[#f8fafc] text-slate-900`}>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-100 via-white to-indigo-50 px-4 py-20 md:py-24">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-300 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
            <Microscope className="h-3.5 w-3.5" />
            Research Portfolio
          </p>

          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-start">
            <div>
              <h1 className={`${headingFont.className} text-5xl leading-tight text-slate-900 md:text-7xl`}>
                {researcherData.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">{researcherData.subtitle}</p>
            </div>

            <div className="rounded-2xl border border-indigo-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">Primary Focus</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2">
                    <Shapes className="mt-0.5 h-4 w-4 text-indigo-600" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-3">
            <ScrollText className="h-6 w-6 text-indigo-700" />
            <h2 className={`${headingFont.className} text-4xl text-slate-900 md:text-5xl`}>Research Abstract</h2>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            {researcherData.about.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100/70 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-indigo-700" />
            <h2 className={`${headingFont.className} text-4xl text-slate-900 md:text-5xl`}>Academic Formation</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {researcherData.education?.map((edu) => (
              <article key={edu.degree} className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-700">{edu.period}</p>
                <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                <p className="mt-1 text-sm font-medium text-slate-600">{edu.institution}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {(edu.achievements ?? []).slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <BookMarked className="mt-0.5 h-4 w-4 text-indigo-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-3">
            <Orbit className="h-6 w-6 text-indigo-700" />
            <h2 className={`${headingFont.className} text-4xl text-slate-900 md:text-5xl`}>Selected Work</h2>
          </div>

          <div className="space-y-5">
            {researcherData.projects?.map((project, index) => (
              <article key={project.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold text-slate-900">
                    <span className="mr-2 text-indigo-600">[{String(index + 1).padStart(2, "0")}]</span>
                    {project.name}
                  </h3>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-100"
                    >
                      Reference
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                </div>

                <p className="mb-4 text-slate-700">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="grid gap-2 md:grid-cols-2">
                  {project.highlights.slice(0, 4).map((highlight) => (
                    <li key={highlight} className="text-sm text-slate-700">
                      <span className="mr-2 text-indigo-700">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-gradient-to-r from-indigo-700 to-cyan-700 px-4 py-16 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <BookOpen className="mx-auto mb-4 h-9 w-9" />
          <h2 className={`${headingFont.className} text-4xl md:text-5xl`}>Open to Research Collaboration</h2>
          <p className="mx-auto mt-4 max-w-2xl text-indigo-100">
            Interested in PhD pathways, co-authored projects, and security-focused applied research collaborations.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-indigo-800 transition hover:bg-indigo-50"
          >
            Collaborate with Me
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
