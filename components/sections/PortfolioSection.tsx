"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioCard from "@/components/sections/_cards/PortfolioCard";
import GlowOrb from "@/components/ui/GlowOrb";
import { PORTFOLIO_PROJECTS } from "@/data/site-data";
import { staggerContainer } from "@/lib/animations";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-[#07091a]">
      {/* Decorative ambient orbs */}
      <GlowOrb color="blue" size="xl" className="top-1/2 -left-48 opacity-20" />
      <GlowOrb color="purple" size="lg" className="bottom-10 -right-24 opacity-25" />

      <Container className="relative z-10">
        <SectionHeading
          tag="CASE STUDIES"
          title="THINGS WE'VE BROUGHT TO LIFE"
          subtitle="Selected works that demonstrate the intersection of craft, speed, and precision. Built for real users and measured outcomes."
        />

        {/* 3-Column Portfolio Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PORTFOLIO_PROJECTS.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
