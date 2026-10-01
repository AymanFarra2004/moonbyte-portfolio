"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PortfolioProject } from "@/types";
import Button from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 35 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="glass-card group rounded-2xl overflow-hidden border border-purple-500/15 hover:border-purple-500/40 flex flex-col justify-between transition-all duration-300"
    >
      <div>
        {/* Project Thumbnail Image */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0a0c20]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e24] via-transparent to-transparent opacity-60" />

          {/* Badge */}
          {project.badge && (
            <div className="absolute top-3 right-3">
              <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-300 uppercase px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-cyan-500/30">
                {project.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6">
          <span className="text-[11px] font-secondary font-medium tracking-wider text-purple-400 uppercase block mb-1">
            {project.category}
          </span>
          <h3 className="text-xl font-main tracking-normal text-white mb-2 uppercase group-hover:text-purple-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-secondary text-slate-300 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 pb-6 pt-0">
        <Button
          href={project.ctaLink}
          variant="outline"
          size="sm"
          className="w-full justify-between group/btn"
          icon={<ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />}
        >
          {project.ctaText}
        </Button>
      </div>
    </motion.div>
  );
}
