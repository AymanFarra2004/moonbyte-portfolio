"use client";

import React from "react";
import { motion } from "framer-motion";
import { ServiceItem } from "@/types";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
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
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative bg-[#12162a]/35 hover:bg-[#151a33]/85 backdrop-blur-[2px] rounded-[24px] sm:rounded-[28px] xl:rounded-[32px] p-6 sm:p-7 xl:p-8 border border-white/[0.08] hover:border-blue-400/30 shadow-[0_22px_50px_rgba(0,0,0,0.7),0_8px_20px_rgba(0,0,0,0.45)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle ambient light on hover */}
      <div className="absolute -top-16 -right-16 w-36 h-36 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-500" />

      <div>
        {/* Top Header: Title & Number */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-secondary font-medium font-[500] text-lg sm:text-xl xl:text-[22px] text-white tracking-wide uppercase leading-tight group-hover:text-blue-200 transition-colors max-w-[200px] sm:max-w-none">
            {service.title}
          </h3>
          <span className="font-main text-2xl sm:text-3xl xl:text-[34px] font-bold text-[#6581eb] tracking-normal shrink-0">
            {service.number}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-[13px] xl:text-[13.5px] font-secondary text-slate-300/90 leading-relaxed mb-5">
          {service.description}
        </p>
      </div>

      {/* Feature Bullet List */}
      {service.features && (
        <ul className="space-y-1.5 sm:space-y-2 mt-auto">
          {service.features.map((feat, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-[11px] sm:text-xs font-secondary text-slate-400"
            >
              <span className="text-slate-500 text-sm leading-none">•</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
