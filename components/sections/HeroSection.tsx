"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import GlowOrb from "@/components/ui/GlowOrb";
import { fadeInUp, fadeInDown, scaleIn } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative h-[1024px] min-h-[1024px] flex flex-col justify-between overflow-hidden">
      {/* Hero Background Image - Natural with NO bottom shadow */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/moonbyte - hero image.png"
          alt="Moonbyte Cosmic Landscape"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle top header gradient for navbar readability only - NO bottom shadow */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#060714]/75 to-transparent pointer-events-none" />
      </div>

      {/* Ambient Lighting Orbs */}
      <GlowOrb color="purple" size="xl" className="top-1/4 -left-32 opacity-35" />
      <GlowOrb color="blue" size="lg" className="bottom-1/3 -right-24 opacity-25" delay={2} />

      <Container className="relative z-10 h-full flex flex-col justify-between pt-28 pb-8 sm:pb-12">
        {/* Upper Hero Content: Positioned in top area like attached layout */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto pt-4 sm:pt-6">
          {/* Top Tag */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInDown}
            className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3.5 py-1 rounded-full bg-black/40 border border-purple-500/20 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono tracking-widest text-cyan-300 uppercase font-semibold">
              DIGITAL ARCHITECTURE & IMMERSIVE WORLDS
            </span>
          </motion.div>

          {/* Main Hero Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.12 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-main text-white uppercase text-glow-lg leading-tight mb-5 tracking-wide"
          >
            IDEAS START{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-cyan-300">
              HERE.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.22 }}
            className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-6 font-normal drop-shadow-md"
          >
            We turn raw abstractions into living websites, immersive spatial
            experiences, and durable digital worlds engineered for the next era.
          </motion.p>

          {/* Primary Action Button */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ delay: 0.35 }}
          >
            <Button
              href="#about"
              variant="white-pill"
              size="md"
              className="px-8 py-3 text-xs sm:text-sm font-bold tracking-wider shadow-2xl"
            >
              EXPLORE THE WORLD
            </Button>
          </motion.div>
        </div>

        {/* Lower Right Card: The Crew Behind The World */}
        <div className="w-full flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="w-full max-w-xs text-left glass-card p-5 rounded-2xl border border-purple-500/25 backdrop-blur-xl shadow-2xl hidden sm:block bg-[#0c0e24]/85"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase font-bold">
                THE CREW BEHIND THE WORLD
              </span>
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5 tracking-tight">
              Four minds. One universe.
            </h3>
            <p className="text-xs text-slate-300 leading-snug mb-3.5">
              We combine UX/UI, frontend, backend, and security to turn ideas into digital experiences.
            </p>
            <Button
              href="#crew"
              variant="cyan"
              size="sm"
              className="text-[11px] py-2 px-4 w-full font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
            >
              MEET THE CREW
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
