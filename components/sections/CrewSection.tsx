"use client";

import React from "react";
import { motion } from "framer-motion";
import CrewMemberCard from "@/components/sections/_cards/CrewMemberCard";
import { CREW_MEMBERS } from "@/data/site-data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function CrewSection() {
  return (
    <section id="crew" className="pt-0 pb-[80px] relative overflow-hidden bg-[#060714]">
      {/* 
        Background Luster / Ambient Spotlight as in the screenshot:
        Rich cosmic royal blue radial glow centered behind the crew cards.
        Masked at the top to prevent any hard-edge clipping or visible line between sections.
      */}
      <div
        className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] lg:w-[1300px] h-[500px] lg:h-[600px] pointer-events-none rounded-full blur-[110px] opacity-75"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(35, 75, 215, 0.45) 0%, rgba(20, 45, 140, 0.3) 45%, rgba(10, 20, 60, 0.1) 75%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 100%)",
        }}
      />
      {/* Secondary Wide Cosmic Indigo Halo */}
      <div
        className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] lg:w-[1700px] h-[650px] pointer-events-none rounded-full blur-[150px] opacity-45"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 50%, rgba(30, 55, 170, 0.35) 0%, rgba(60, 25, 120, 0.2) 50%, transparent 85%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 100%)",
        }}
      />

      {/* 
        Main Frame matching Universe Section's responsive width:
        - Baseline: max-w-[1280px]
        - Wide Screen (xl): max-w-[1440px]
        - Ultra-Wide / 2K (2xl): max-w-[1600px]
        - 80px horizontal margin buffer on desktop (lg:px-[80px])
      */}
      <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-[80px] relative z-10">
        <div className="w-full max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto flex flex-col gap-6 md:gap-8 xl:gap-10">
          {/* Header Block (Left-aligned as in Figma, scaling smoothly) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-start text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[42px] xl:text-[48px] 2xl:text-[52px] font-main text-white tracking-wide uppercase leading-tight">
              MEET THE CREW
            </h2>
            <p className="mt-2.5 xl:mt-3 text-sm sm:text-base xl:text-lg font-secondary text-slate-300 leading-relaxed max-w-3xl xl:max-w-4xl">
              The minds navigating the threshold between raw concept and hyperspace fidelity.
            </p>
          </motion.div>

          {/* 
            Crew 4-Column Grid:
            With pt-6 to pt-8 to accommodate avatars when they scale up and break out of the top on hover
          */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 xl:gap-8 items-start pt-6 sm:pt-8"
          >
            {CREW_MEMBERS.map((member) => (
              <CrewMemberCard key={member.id} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
