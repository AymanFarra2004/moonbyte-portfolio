"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/sections/_cards/ServiceCard";
import GlowOrb from "@/components/ui/GlowOrb";
import { SERVICES } from "@/data/site-data";
import { fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

export default function WhatWeBuildSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#060714]">
      {/* Decorative ambient orbs */}
      <GlowOrb color="cyan" size="lg" className="top-1/4 -right-32 opacity-20" />
      <GlowOrb color="purple" size="xl" className="bottom-10 -left-40 opacity-20" />

      <Container className="relative z-10">
        <SectionHeading
          tag="SERVICES & CAPABILITIES"
          title="WHAT WE BUILD"
          subtitle="Purpose-built digital artifacts engineered to accelerate brands, captivate audiences, and redefine modern web design."
        />

        {/* 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 2x2 Services Grid (7 cols) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>

          {/* Right Column: Device Showcase Mockup (5 cols) */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden glass-card p-2 border border-purple-500/25 shadow-2xl shadow-purple-950/40 group">
              <Image
                src="/images/moonbyte - what we built section.png"
                alt="Moonbyte Showcase Mockup - Laptop and Mobile UI"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-contain p-2 group-hover:scale-102 transition-transform duration-500 ease-out"
              />
              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060714]/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2.5 rounded-xl border border-purple-500/30 backdrop-blur-xl shadow-xl flex items-center gap-3 hidden sm:flex">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                RESPONSIVE ACROSS ALL DEVICES
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
