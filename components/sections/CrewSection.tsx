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
        Expanded Cosmic Blue Backlight / Radiant Ambient Spotlight:
        Much bigger, encompassing the full width across all 4 cards and radiating 
        from behind the title all the way through the cards as in the screenshot.
      */}
      <div
        className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] md:w-[1900px] lg:w-[2200px] h-[850px] md:h-[1000px] lg:h-[1150px] pointer-events-none rounded-full blur-[130px] md:blur-[160px] opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(45, 95, 255, 0.48) 0%, rgba(30, 65, 195, 0.38) 35%, rgba(18, 40, 140, 0.2) 65%, transparent 88%)",
        }}
      />
      {/* Secondary Ultra-Wide Ambient Dispersion Halo */}
      <div
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2000px] lg:w-[2500px] h-[1000px] lg:h-[1300px] pointer-events-none rounded-full blur-[170px] opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(35, 70, 200, 0.3) 0%, rgba(55, 25, 130, 0.15) 50%, transparent 85%)",
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
