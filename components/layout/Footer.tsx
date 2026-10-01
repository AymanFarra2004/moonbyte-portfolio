import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { NAV_ITEMS } from "@/data/site-data";

export default function Footer() {
  return (
    <footer className="relative bg-[#04050d] border-t border-purple-500/15 pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-purple-900/30">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#060714] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🌙</span>
                </div>
              </div>
              <span className="font-main tracking-widest text-xl text-white uppercase">
                MOON<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">BYTE</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Where ideas come to life. We turn raw observations into living websites, immersive spatial experiences, and durable digital artifacts engineered for the next era.
            </p>
            <div className="text-xs text-purple-400/80 font-mono tracking-wider">
              LATENCY: 12ms · STATUS: ALL SYSTEMS NOMINAL
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-purple-300 transition-colors uppercase tracking-wider"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-4">
              Transmissions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors uppercase tracking-wider"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors uppercase tracking-wider"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors uppercase tracking-wider"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors uppercase tracking-wider"
                >
                  Dribbble
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Moonbyte Studio. Engineered with Next.js & Framer Motion.</p>
          <div className="flex gap-6">
            <Link href="#privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-slate-400 transition-colors">
              Terms of Mission
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
