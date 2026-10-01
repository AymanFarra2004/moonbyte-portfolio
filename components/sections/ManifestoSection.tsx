"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import GlowOrb from "@/components/ui/GlowOrb";
import { fadeInLeft, scaleIn } from "@/lib/animations";
import { Sparkles } from "lucide-react";

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/moonbyte - MANIFESTO section.png"
          alt="Moonbyte Manifesto - Figures under the Crescent Moon"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Deep Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060714]/95 via-[#060714]/75 to-[#060714]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060714] via-transparent to-[#060714]/80" />
      </div>

      {/* Ambient Glow */}
      <GlowOrb color="purple" size="xl" className="top-1/3 left-10 opacity-30" />

      <Container className="relative z-10">
        <div className="max-w-2xl">
          {/* Manifesto Glass Panel */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="glass-card p-8 sm:p-12 rounded-3xl border border-purple-500/25 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400" />

            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 mb-6 font-secondary">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span className="text-[10px] font-secondary tracking-widest text-purple-300 uppercase font-bold">
                THE MOONBYTE MANIFESTO
              </span>
            </div>

            {/* Central Quote */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-main tracking-normal text-white uppercase text-glow-sm leading-tight mb-6">
              “EVERY ARTIFACT BEGINS AS AN IMPOSSIBLE SIGNAL IN THE VOID.”
            </h2>

            {/* Philosophy text */}
            <p className="text-sm sm:text-base font-secondary text-slate-300 leading-relaxed mb-8">
              We believe the modern web is not a static canvas, but an expanding universe. Every pixel is an orbit, every interaction a gravitational pull. We don&apos;t just assemble web pages—we architect living, durable digital worlds engineered to endure.
            </p>

            {/* Sign-off banner */}
            <div className="pt-6 border-t border-purple-500/20">
              <span className="text-[11px] font-mono tracking-widest text-cyan-300 uppercase block font-semibold mb-1">
                DESIGN · TECHNOLOGY · IMAGINATION
              </span>
              <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                MOONBYTE — WHERE IDEAS COME TO LIFE.
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
