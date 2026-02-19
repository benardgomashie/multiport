import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  FlaskConical,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { DM_Sans, Space_Grotesk } from "next/font/google";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const personas = [
  {
    title: "Founder & Product Lead",
    description:
      "Building Yom Health to improve access to home-based healthcare services in Ghana through focused product execution.",
    href: "/founder",
    icon: BriefcaseBusiness,
    chip: "Healthcare + Product",
    color: "from-founder to-emerald-600",
    ring: "ring-founder/30",
  },
  {
    title: "Full-Stack Developer",
    description:
      "Shipping scalable applications with React, Next.js, Django, and clear engineering practices from idea to production.",
    href: "/developer",
    icon: Code2,
    chip: "Web + Platform",
    color: "from-developer to-sky-600",
    ring: "ring-developer/30",
  },
  {
    title: "Researcher in Security",
    description:
      "Exploring blockchain-enabled edge systems with practical security models for distributed and IoT environments.",
    href: "/researcher",
    icon: FlaskConical,
    chip: "Blockchain + Edge",
    color: "from-researcher to-fuchsia-600",
    ring: "ring-researcher/30",
  },
];

export default function Home() {
  return (
    <div
      className={`${bodyFont.className} relative overflow-hidden bg-slate-950 text-slate-100`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-drift-slow absolute -left-40 top-10 h-80 w-80 rounded-full bg-founder/30 blur-3xl" />
        <div className="animate-drift-medium absolute right-0 top-40 h-96 w-96 rounded-full bg-developer/25 blur-3xl" />
        <div className="animate-drift-fast absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-researcher/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_55%)]" />
      </div>

      <section className="relative px-4 pb-20 pt-16 md:pt-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div className="fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-slate-100/90 backdrop-blur">
              <Sparkles className="h-4 w-4 text-amber-300" />
              Founder. Developer. Researcher.
            </div>

            <h1
              className={`${displayFont.className} max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl`}
            >
              Benard Yao Gomashie builds products where{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-sky-300 to-pink-300 bg-clip-text text-transparent">
                mission, engineering, and research
              </span>{" "}
              meet.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200/90">
              From healthcare innovation at Yom Health to scalable software
              systems and blockchain security research, I design and ship work
              that solves real problems.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-200/85">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                <MapPin className="h-4 w-4" />
                Accra, Ghana
              </span>
              <a
                href="mailto:benardgomashie@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 transition hover:bg-white/20"
              >
                <Mail className="h-4 w-4" />
                benardgomashie@gmail.com
              </a>
              <a
                href="tel:+233558149177"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 transition hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                +233 55 814 9177
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#work"
                className="inline-flex items-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                Explore My Work
              </a>
            </div>
          </div>

          <div className="fade-in-up animation-delay-200">
            <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/35 backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/profilepic.jpg"
                  alt="Benard Gomashie"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                    Current Focus
                  </p>
                  <p className="mt-1 text-xl font-semibold text-white">
                    Digital health products and trustworthy systems
                  </p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <p className="text-xs uppercase tracking-wider text-white/65">
                    Roles
                  </p>
                  <p className="text-lg font-bold text-white">3</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <p className="text-xs uppercase tracking-wider text-white/65">
                    Domain
                  </p>
                  <p className="text-lg font-bold text-white">HealthTech</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <p className="text-xs uppercase tracking-wider text-white/65">
                    Stack
                  </p>
                  <p className="text-lg font-bold text-white">Full-Stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="relative px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.2em] text-slate-300/80">
                Work Lanes
              </p>
              <h2
                className={`${displayFont.className} text-3xl font-bold tracking-tight text-white sm:text-4xl`}
              >
                Explore My Work
              </h2>
            </div>
            <p className="max-w-xl text-slate-300/85">
              Each lane reflects a distinct capability, but they all connect:
              product thinking, technical execution, and research rigor.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {personas.map((persona, index) => {
              const Icon = persona.icon;
              return (
                <Link
                  key={persona.title}
                  href={persona.href}
                  className={`fade-in-up group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 transition duration-300 hover:-translate-y-1 hover:bg-white/10 ${persona.ring}`}
                  style={{ animationDelay: `${200 + index * 120}ms` }}
                >
                  <div
                    className={`absolute -right-14 -top-14 h-36 w-36 rounded-full bg-gradient-to-br ${persona.color} opacity-25 blur-2xl transition group-hover:opacity-40`}
                  />
                  <div className="relative">
                    <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-black/25">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                      {persona.chip}
                    </p>
                    <h3
                      className={`${displayFont.className} mb-3 text-2xl font-semibold text-white`}
                    >
                      {persona.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-slate-200/85">
                      {persona.description}
                    </p>
                    <span className="inline-flex items-center gap-2 font-semibold text-white">
                      Open profile
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/15 bg-gradient-to-r from-white/15 via-white/10 to-white/5 p-8 text-center backdrop-blur-xl md:p-12">
          <h2 className={`${displayFont.className} text-3xl font-bold text-white md:text-4xl`}>
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200/90">
            Available for product partnerships, engineering projects, and
            applied research collaborations.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/founder"
              className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white transition hover:bg-white/20"
            >
              View Founder Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
