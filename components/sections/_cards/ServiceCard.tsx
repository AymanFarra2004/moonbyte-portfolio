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
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="glass-card group rounded-2xl p-6 sm:p-7 relative overflow-hidden border border-purple-500/15 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Number Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl sm:text-3xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            {service.number}
          </span>
          <span className="w-8 h-8 rounded-full bg-purple-950/60 border border-purple-500/20 flex items-center justify-center text-xs text-purple-300 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
            ↗
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-main tracking-normal text-white mb-2 uppercase group-hover:text-purple-200 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm font-secondary text-slate-300 leading-relaxed mb-4">
          {service.description}
        </p>
      </div>

      {/* Feature Tags */}
      {service.features && (
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-purple-900/30">
          {service.features.map((feat, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono tracking-wider text-slate-400 uppercase px-2 py-0.5 rounded bg-black/40 border border-purple-500/10"
            >
              {feat}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
