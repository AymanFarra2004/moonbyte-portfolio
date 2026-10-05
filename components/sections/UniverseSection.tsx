"use client";

import React from "react";
import { motion } from "framer-motion";
import UniverseCard from "@/components/sections/_cards/UniverseCard";
import GlowOrb from "@/components/ui/GlowOrb";
import { UNIVERSE_CARDS } from "@/data/site-data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function UniverseSection() {
  return (
    <section id="about" className="pt-[80px] pb-[40px] relative overflow-hidden bg-[#080B18]">
      {/* Subtle ambient lighting */}
      <GlowOrb color="blue" size="lg" className="top-10 -left-40 opacity-15" />
      <GlowOrb color="purple" size="md" className="bottom-10 -right-20 opacity-20" />

      {/* 
        Main Frame with responsive scaling & 80px margin buffer on desktop:
        - Baseline: max-w-[1280px]
        - Wide Screen (xl): max-w-[1440px]
        - Ultra-Wide / 2K (2xl): max-w-[1600px] (site best-practice upper cap)
        - 80px margin preserved on all 4 directions (py-[80px], lg:px-[80px])
      */}
      <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-[80px] relative z-10">
        <div className="w-full max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-10 xl:gap-12">
          {/* Header Block (Left-aligned as in Figma, scaling smoothly) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-start text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[42px] xl:text-[48px] 2xl:text-[52px] font-main text-white tracking-wide uppercase leading-tight text-glow-sm">
              THE MOONBYTE UNIVERSE
            </h2>
            <p className="mt-2.5 xl:mt-3 text-sm sm:text-base xl:text-lg font-secondary text-slate-300 leading-relaxed max-w-3xl xl:max-w-4xl">
              A deliberate architectural ecosystem where each outpost powers a specialized dimension of modern computation.
            </p>
          </motion.div>

          {/* Main Container Box (Enclosing the 5 Outpost Cards) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full bg-[#0a0d18] border border-[#192238] rounded-2xl sm:rounded-[28px] md:rounded-[32px] 2xl:rounded-[36px] p-5 sm:p-7 md:p-9 xl:p-11 shadow-2xl backdrop-blur-sm"
          >
            {/* 3-Column Bento Grid with responsive gap */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 xl:gap-8"
            >
              {UNIVERSE_CARDS.map((card) => (
                <UniverseCard key={card.id} data={card} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
