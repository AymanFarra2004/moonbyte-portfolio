"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft } from "@/lib/animations";

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-[80px] lg:py-[100px] xl:py-[120px] relative overflow-hidden bg-[#060714]">
      {/* 
        Full Section Background Image:
        "moonbyte - MANIFESTO section.webp" showcasing the cosmic dusk landscape,
        the glowing crescent moon, and the 4 crew members standing on the mountain ridge.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/moonbyte - MANIFESTO section.webp"
          alt="The Moonbyte Manifesto - Crew Under Crescent Moon"
          fill
          priority
          className="object-cover object-right md:object-center lg:object-[80%_center]"
        />
        {/* Soft edge blending with bottom section */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060714] to-transparent" />
      </div>

      {/* 
        Main Frame matching previous sections' responsive width and 80px margin buffer:
        - Baseline: max-w-[1280px]
        - Wide Screen (xl): max-w-[1440px]
        - Ultra-Wide / 2K (2xl): max-w-[1600px]
        - 80px horizontal margin buffer on desktop (lg:px-[80px])
      */}
      <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-[80px] relative z-10">
        <div className="w-full max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
          {/* 
            Left-Side Manifesto Glass Card:
            Occupies ~54-58% of the container width on desktop, leaving the
            crescent moon and the crew figures on the right clearly visible.
          */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full lg:max-w-[58%] xl:max-w-[55%] 2xl:max-w-[52%] bg-[#0c1022]/35 hover:bg-[#0f1428]/45 backdrop-blur-[2px] rounded-[28px] sm:rounded-[32px] my-[42px] p-7 sm:p-10 md:p-12 xl:p-14 border border-white/[0.08] shadow-[0_22px_60px_rgba(0,0,0,0.7),0_8px_24px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-300"
          >
            {/* Subtle ambient light on hover */}
            <div className="absolute -top-24 -right-24 w-52 h-52 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Label */}
            <h3 className="font-main text-lg sm:text-xl xl:text-2xl text-white tracking-wide uppercase mb-5 sm:mb-6">
              THE MOONBYTE MANIFESTO
            </h3>

            {/* Main Headline Quote */}
            <h2 className="font-main text-2xl sm:text-3xl md:text-4xl xl:text-[40px] 2xl:text-[44px] text-white tracking-wide uppercase leading-[1.18] mb-5 sm:mb-6">
              “EVERY ARTIFACT BEGINS AS AN IMPOSSIBLE SIGNAL IN THE VOID.”
            </h2>

            {/* Philosophy text */}
            <p className="text-xs sm:text-sm md:text-[14.5px] xl:text-[15px] font-secondary text-slate-300/90 leading-relaxed max-w-lg mb-7 sm:mb-9">
              We don&apos;t just design interfaces or build websites.
              <br className="hidden sm:inline" /> We turn ideas into thoughtful digital experiences — combining design, technology, and imagination to create products people remember.
            </p>

            {/* Sign-off Tagline in font-main */}
            <div className="flex flex-col gap-1.5 font-main text-white uppercase tracking-wider text-sm sm:text-base md:text-lg xl:text-xl">
              <span>DESIGN • TECHNOLOGY • IMAGINATION</span>
              <span>MOONBYTE — WHERE IDEAS COME TO LIFE.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
