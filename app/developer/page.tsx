import type { Metadata } from "next";
import Link from "next/link";
import { developerData } from "@/lib/data/developer";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Download,
  ExternalLink,
  Github,
  Layers,
  Server,
  Terminal,
} from "lucide-react";
import { IBM_Plex_Mono, Sora } from "next/font/google";

const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });
const sans = Sora({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Software Engineer | Benard Gomashie",
  description:
    "Full-stack developer specializing in React, Django, and Next.js. Building scalable web applications and digital platforms.",
};

const stackCards = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Django", "Node.js", "REST APIs", "Auth Systems"],
  },
  {
    title: "System Thinking",
    icon: BrainCircuit,
    items: ["Real-time flows", "Data models", "Scalable APIs", "Feature reliability"],
  },
];

const notableOrganizations = [
  "Guzakuza",
  "GIZ",
  "Africa Women in Agribusiness (AWIA)",
  "YOyo Ride",
  "Pisca Sports",
];

export default function DeveloperPage() {
  return (
    <div className={`${sans.className} min-h-screen bg-[#070b14] text-slate-100`}>
      <section className="relative overflow-hidden border-b border-slate-800 px-4 py-20 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-developer/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <p className={`${mono.className} mb-6 inline-block rounded-full border border-developer/40 bg-developer/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-developer-light`}>
            Developer Console
          </p>

          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                Engineering products that stay useful at scale.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
                {developerData.about[0]}
              </p>
              <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-xl border border-developer/40 bg-developer/10 px-4 py-2 text-sm text-developer-light">
                <span className={`${mono.className} text-xs uppercase tracking-[0.16em] text-blue-300`}>
                  Featured Build
                </span>
                <span>Secure Edge Blockchain System (MSc Implementation)</span>
                <Link href="/researcher" className="underline underline-offset-4 hover:text-blue-300">
                  View details
                </Link>
              </div>

              <div className={`${mono.className} mt-8 rounded-2xl border border-slate-700 bg-[#0f172a] p-5 text-sm text-slate-300`}>
                <p className="text-emerald-400">$ cat availability.txt</p>
                <p className="mt-2">Open to freelance engineering, product builds, and technical partnerships.</p>
                <p className="mt-4 text-developer-light">$ stack --summary</p>
                <p className="mt-2">React / Next.js / Django / Realtime / AI pipelines</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6">
              <h2 className={`${mono.className} mb-4 text-sm uppercase tracking-[0.16em] text-slate-400`}>
                Core Modes
              </h2>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="rounded-lg border border-slate-700 bg-slate-800/60 p-3">Build robust APIs and workflows</li>
                <li className="rounded-lg border border-slate-700 bg-slate-800/60 p-3">Translate product goals into clean architecture</li>
                <li className="rounded-lg border border-slate-700 bg-slate-800/60 p-3">Ship fast with maintainable standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${mono.className} mb-8 text-xl uppercase tracking-[0.16em] text-developer-light`}>
            Tech Stack Modules
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {stackCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-developer/20 p-2">
                      <Icon className="h-5 w-5 text-developer-light" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                  </div>
                  <ul className={`${mono.className} space-y-2 text-sm text-slate-300`}>
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-developer">{'>'}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/60 px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${mono.className} mb-4 text-xl uppercase tracking-[0.16em] text-developer-light`}>
            Notable Organizations
          </h2>
          <p className="mb-6 max-w-3xl text-slate-300">
            Selected organizations I have supported as a freelance developer.
          </p>
          <div className="flex flex-wrap gap-3">
            {notableOrganizations.map((org) => (
              <span
                key={org}
                className="rounded-full border border-developer/40 bg-developer/10 px-4 py-2 text-sm font-semibold text-developer-light"
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-[#050912] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-3">
            <Layers className="h-6 w-6 text-developer" />
            <h2 className="text-3xl font-bold text-white md:text-4xl">Project Repositories</h2>
          </div>
          <p className="mb-8 text-sm text-slate-400">
            Thesis deep-dive on secure edge computing is covered on the{" "}
            <Link href="/researcher" className="text-developer hover:text-blue-400 underline underline-offset-4">
              Research profile
            </Link>
            .
          </p>

          <div className="space-y-5">
            {developerData.projects?.map((project) => (
              <article key={project.name} className="rounded-2xl border border-slate-700 bg-slate-900/75 p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h3 className={`${mono.className} text-xl font-bold text-white`}>{project.name}</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.playStore ? (
                      <a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-green-700 bg-green-900/40 px-3 py-1 text-xs font-semibold text-green-300 transition hover:bg-green-800/50"
                      >
                        Google Play
                      </a>
                    ) : null}
                    {project.apk ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-blue-700 bg-blue-900/40 px-3 py-1 text-xs font-semibold text-blue-300">
                        <Download className="h-3 w-3" />
                        APK
                      </span>
                    ) : null}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-developer"
                      >
                        Live
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>
                </div>

                <p className="mb-4 text-slate-300">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className={`${mono.className} rounded-md border border-slate-600 bg-slate-800 px-2 py-1 text-xs text-slate-300`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="grid gap-2 md:grid-cols-2">
                  {project.highlights.slice(0, 4).map((highlight) => (
                    <li key={highlight} className="text-sm text-slate-300">
                      <span className="mr-2 text-developer">//</span>
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
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-700 bg-slate-900 p-8 text-center">
          <Terminal className="mx-auto mb-4 h-9 w-9 text-developer-light" />
          <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to Ship Together?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            I can support rapid MVP builds, product stabilization, and full-stack delivery for your next release.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-developer px-6 py-3 font-semibold text-white transition hover:bg-developer-dark"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://github.com/benardgomashie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800 px-6 py-3 font-semibold text-slate-100 transition hover:border-developer"
            >
              <Github className="h-4 w-4" />
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
