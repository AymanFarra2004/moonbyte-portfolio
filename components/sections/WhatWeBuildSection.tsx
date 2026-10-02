"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceCard from "@/components/sections/_cards/ServiceCard";
import { SERVICES } from "@/data/site-data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function WhatWeBuildSection() {
  return (
    <section id="services" className="py-[80px] lg:py-[100px] xl:py-[120px] relative overflow-hidden bg-[#060714]">
      {/* 
        Full Section Background Image:
        "moonbyte - what we built section.png" showcasing the cosmic landscape,
        moon, and high-fidelity laptop & phone device mockups on the right.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/moonbyte - what we built section.png"
          alt="Moonbyte What We Build Background"
          fill
          priority
          className="object-cover object-right lg:object-[82%_center]"
        />
        {/* Subtle left-side overlay for enhanced mobile/tablet legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060714]/90 via-[#060714]/60 to-transparent lg:from-[#060714]/30 lg:via-transparent" />
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
            Left-Side Content Container:
            Covers ~56-58% of the container width on desktop, perfectly framing
            the 2x2 cards over the mountains while leaving the device mockups on the right visible.
          */}
          <div className="w-full lg:max-w-[58%] xl:max-w-[56%] 2xl:max-w-[54%] flex flex-col gap-8 md:gap-10">
            {/* Header Block (Left-aligned as in Figma, scaling smoothly) */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-start text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-[42px] xl:text-[48px] 2xl:text-[52px] font-main text-white tracking-wide uppercase leading-tight text-glow-sm">
                WHAT WE BUILD
              </h2>
              <p className="mt-2.5 xl:mt-3 text-sm sm:text-base xl:text-lg font-secondary text-slate-300 leading-relaxed max-w-2xl">
                Engineered for international brands and boundary-pushing founders demanding unforgettable digital authority.
              </p>
            </motion.div>

            {/* 2x2 Services Bento Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
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
