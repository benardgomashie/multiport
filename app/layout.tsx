import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Benard Gomashie | Founder • Developer • Researcher",
  description: "Innovative IT professional, startup founder, and full-stack developer with expertise in healthcare technology, blockchain research, and digital product development.",
  keywords: ["full-stack developer", "healthcare technology", "blockchain research", "Yom Health", "React", "Django", "Next.js", "Ethereum", "Ghana"],
  authors: [{ name: "Benard Yao Gomashie" }],
  openGraph: {
    title: "Benard Gomashie | Founder • Developer • Researcher",
    description: "Innovative IT professional, startup founder, and full-stack developer",
    url: "https://yomhealth.com",
    siteName: "Benard Gomashie Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
