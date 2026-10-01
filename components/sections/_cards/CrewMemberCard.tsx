"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CrewMember } from "@/types";

interface CrewMemberCardProps {
  member: CrewMember;
}

export default function CrewMemberCard({ member }: CrewMemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      onClick={() => setIsExpanded(!isExpanded)}
      className="group relative w-full h-[460px] sm:h-[480px] xl:h-[510px] 2xl:h-[530px] cursor-pointer select-none"
    >
      {/* 
        Fixed-height Card Background Surface (Luster & Sheen)
        Does NOT expand on hover
      */}
      <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] md:rounded-[30px] bg-gradient-to-b from-[#141b38]/95 via-[#0e1329]/95 to-[#080b18] border border-[#23335d]/70 group-hover:border-[#4d74f9]/80 shadow-[0_12px_36px_rgba(0,0,0,0.5)] group-hover:shadow-[0_16px_45px_-8px_rgba(59,105,255,0.28)] transition-all duration-500 overflow-hidden">
        {/* Top edge luster / sheen highlight */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
        
        {/* Inner subtle ambient luster */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 
        Avatar Image:
        On hover, scales up AND transitions upwards (popping over the top edge of the card)
        to make space for the description below, without expanding card height!
      */}
      <div className="absolute top-3 sm:top-4 inset-x-2 sm:inset-x-3 h-[270px] sm:h-[290px] xl:h-[310px] 2xl:h-[325px] z-10 flex items-end justify-center pointer-events-none">
        <div
          className={`relative w-full h-full transform transition-all duration-500 ease-out origin-bottom ${
            isExpanded
              ? "scale-[1.12] -translate-y-12 sm:-translate-y-14 xl:-translate-y-16"
              : "group-hover:scale-[1.12] group-hover:-translate-y-12 sm:group-hover:-translate-y-14 xl:group-hover:-translate-y-16"
          }`}
        >
          <Image
            src={member.image}
            alt={member.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
            priority={false}
          />
        </div>
      </div>

      {/* 
        Member Text Block at the bottom:
        Name & Role visible by default; Description smoothly reveals on hover into the space
        cleared by the avatar moving up!
      */}
      <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 md:p-7 xl:p-8 z-20 flex flex-col justify-end text-left pointer-events-none">
        <h3 className="font-main text-2xl sm:text-[25px] xl:text-[28px] 2xl:text-[30px] text-white tracking-wide uppercase group-hover:text-blue-200 transition-colors leading-tight">
          {member.name}
        </h3>
        <div className="text-[11px] sm:text-xs xl:text-sm font-mono font-bold tracking-wider text-slate-400 uppercase mt-1 mb-0.5">
          {member.role}
        </div>

        {/* Description: smoothly unfolds into the space vacated by the lifted avatar */}
        {member.description && (
          <div
            className={`grid transition-all duration-500 ease-out ${
              isExpanded
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pt-2 sm:pt-2.5 text-xs sm:text-[12px] xl:text-[13px] 2xl:text-[13.5px] font-secondary text-slate-300 leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
