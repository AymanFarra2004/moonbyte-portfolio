"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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

      <Container className="relative z-10 h-full flex flex-col justify-between pt-28 pb-8 sm:pb-[140px]">
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
            className="w-full max-w-[302px] text-center bg-[#0c1022]/90 backdrop-blur-l p-[20px] sm:p-[20px] rounded-[28px] sm:rounded-[32px] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)] hidden sm:flex flex-col items-center justify-center relative overflow-hidden"
          >
            {/* Top Tag Badge */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#8fa7ff] shadow-[0_0_8px_#8fa7ff]" />
              <span className="text-[12px] font-secondary font-medium tracking-wider text-[#8fa7ff] uppercase">
                THE CREW BEHIND THE WORLD
              </span>
            </div>

            {/* Title */}
            <h3 className="font-secondary font-medium text-[16px] sm:text-[19px] text-white tracking-tight mb-2">
              Four minds. One universe.
            </h3>

            {/* Subtitle / Description */}
            <p className="font-secondary text-xs sm:text-[13px] text-slate-300 leading-relaxed max-w-[260px] mb-6 sm:mb-7">
              We combine UX/UI, frontend, backend, and security to turn
               ideas into digital experiences.
            </p>

            {/* Solid Periwinkle Full-Pill Action Button */}
            <Link
              href="#crew"
              className="w-[75%] py-3 sm:py-3.5 px-6 rounded-full bg-[#8fa7ff] hover:bg-[#9db4ff] text-[#0a1024] font-secondary font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-[0_0_20px_rgba(143,167,255,0.4)] active:scale-[0.98] inline-block text-center"
            >
              MEET THE CREW
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
