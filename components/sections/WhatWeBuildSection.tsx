"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceCard from "@/components/sections/_cards/ServiceCard";
import { SERVICES } from "@/data/site-data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function WhatWeBuildSection() {
  return (
    <section id="services" className="py-14 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden bg-[#060714] min-h-[720px] lg:min-h-[800px] xl:min-h-[850px] flex flex-col justify-center">
      {/* 
        Full Section Background Image:
        - Tablet & Mobile (< 1024px): Uses what we built section.jpg with vertical atmosphere,
          filling the full section with soft edge gradient blends.
        - Desktop (>= 1024px): Uses moonbyte - what we built section.webp landscape view.
      */}
      {/* Tablet & Mobile version (< 1024px) */}
      <div className="block lg:hidden absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/what we built section.jpg"
          alt="Moonbyte What We Build - Tablet & Mobile"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle text-contrast scrim for card clarity */}
        <div className="absolute inset-0 bg-[#060714]/40 sm:bg-[#060714]/25" />
        {/* Top and bottom gradient fades for seamless transitions */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#060714] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060714] to-transparent" />
      </div>

      {/* Desktop version (>= 1024px) */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/moonbyte - what we built section.webp"
          alt="Moonbyte What We Build Background"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Desktop subtle left overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060714]/90 via-[#060714]/50 to-transparent lg:from-[#060714]/25 lg:via-transparent" />
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
            Left-Side Content Container:
            Framed at 48-50% width on desktop to cleanly sit over the mountains and sky,
            leaving the entire right half fully open for the laptop and phone device mockups.
          */}
          <div className="w-full lg:max-w-[50%] xl:max-w-[48%] 2xl:max-w-[46%] flex flex-col gap-6 md:gap-7">
            {/* Header Block (Left-aligned as in Figma, scaling smoothly) */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-start text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-[38px] xl:text-[44px] 2xl:text-[48px] font-main text-white tracking-wide uppercase leading-tight text-glow-sm">
                WHAT WE BUILD
              </h2>
              <p className="mt-2 xl:mt-2.5 text-xs sm:text-sm xl:text-base font-secondary text-slate-300 leading-relaxed max-w-xl">
                Engineered for international brands and boundary-pushing founders demanding unforgettable digital authority.
              </p>
            </motion.div>

            {/* 2x2 Services Bento Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5 lg:gap-5"
            >
              {SERVICES.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
