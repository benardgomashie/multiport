import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { DM_Sans, Space_Grotesk } from "next/font/google";

const headingFont = Space_Grotesk({ subsets: ["latin"], weight: ["600", "700"] });
const bodyFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Contact | Benard Gomashie",
  description:
    "Get in touch with Benard Gomashie for opportunities, collaborations, and projects.",
};

const channels = [
  {
    title: "Email",
    value: "benardgomashie@gmail.com",
    href: "mailto:benardgomashie@gmail.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+233 55 814 9177",
    href: "tel:+233558149177",
    icon: Phone,
  },
  {
    title: "Location",
    value: "Accra, Ghana",
    href: "#",
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <div className={`${bodyFont.className} bg-slate-950 text-slate-100`}>
      <section className="relative overflow-hidden border-b border-white/10 px-4 py-20 md:py-24">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-founder/25 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-developer/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-researcher/25 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
            <Sparkles className="h-3.5 w-3.5" />
            Collaboration Hub
          </p>
          <h1 className={`${headingFont.className} text-4xl font-bold tracking-tight text-white md:text-6xl`}>
            Let&apos;s Build Something Meaningful
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-200/90">
            Open to product partnerships, engineering projects, healthcare innovation, and research collaboration.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {channels.map((channel) => {
            const Icon = channel.icon;
            const card = (
              <article className="h-full rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
                <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-sm uppercase tracking-[0.14em] text-slate-300">{channel.title}</h2>
                <p className="mt-2 text-lg font-semibold text-white">{channel.value}</p>
              </article>
            );

            if (channel.href === "#") {
              return <div key={channel.title}>{card}</div>;
            }

            return (
              <a key={channel.title} href={channel.href} className="block">
                {card}
              </a>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${headingFont.className} mb-8 text-center text-3xl font-bold text-white md:text-4xl`}>
            Choose a Collaboration Path
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/founder"
              className="group rounded-2xl border border-founder/35 bg-founder/10 p-6 transition hover:-translate-y-1 hover:bg-founder/20"
            >
              <BriefcaseBusiness className="mb-4 h-6 w-6 text-founder-light" />
              <h3 className="text-xl font-bold text-white">Founder Track</h3>
              <p className="mt-2 text-sm text-slate-200/85">Product strategy, healthcare platform direction, and strategic partnerships.</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-founder-light">
                Open Founder Profile
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/developer"
              className="group rounded-2xl border border-developer/35 bg-developer/10 p-6 transition hover:-translate-y-1 hover:bg-developer/20"
            >
              <Send className="mb-4 h-6 w-6 text-developer-light" />
              <h3 className="text-xl font-bold text-white">Developer Track</h3>
              <p className="mt-2 text-sm text-slate-200/85">Full-stack execution, technical architecture, and shipping production-ready systems.</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-developer-light">
                Open Developer Profile
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/researcher"
              className="group rounded-2xl border border-researcher/35 bg-researcher/10 p-6 transition hover:-translate-y-1 hover:bg-researcher/20"
            >
              <Sparkles className="mb-4 h-6 w-6 text-violet-200" />
              <h3 className="text-xl font-bold text-white">Research Track</h3>
              <p className="mt-2 text-sm text-slate-200/85">Academic work, secure systems, and technical research collaboration opportunities.</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-200">
                Open Researcher Profile
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-gradient-to-r from-white/10 to-white/5 p-8 text-center backdrop-blur md:p-12">
          <h2 className={`${headingFont.className} text-3xl font-bold text-white md:text-4xl`}>
            Fastest Way to Reach Me
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200/90">
            Email is best for project context. I typically reply within 24 to 48 hours.
          </p>
          <a
            href="mailto:benardgomashie@gmail.com?subject=Let's%20Connect"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            <Mail className="h-4 w-4" />
            Send an Email
          </a>
        </div>
      </section>
    </div>
  );
}
