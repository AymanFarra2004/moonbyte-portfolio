"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import ContactInfoItem from "@/components/sections/_cards/ContactInfoItem";
import Button from "@/components/ui/Button";
import GlowOrb from "@/components/ui/GlowOrb";
import { CONTACT_INFO_LIST } from "@/data/site-data";
import { fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Business Website",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulated form submission
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#060714]">
      {/* Decorative ambient orbs */}
      <GlowOrb color="purple" size="xl" className="bottom-0 left-1/4 opacity-25" />
      <GlowOrb color="cyan" size="lg" className="top-10 -right-20 opacity-20" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading and Contact Information (5 cols) */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-secondary font-bold tracking-widest text-purple-400 uppercase px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 mb-4 inline-block">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-main tracking-normal text-white uppercase text-glow-sm leading-tight mb-4">
              HAVE AN IDEA? LET&apos;S BRING IT TO LIFE.
            </h2>
            <p className="text-sm sm:text-base font-secondary text-slate-300 mb-8 leading-relaxed">
              Tell us what you&apos;re imagining. Whether it&apos;s a brand-new platform, an immersive portfolio, or an enterprise portal, our crew is ready to assemble.
            </p>

            {/* Contact Details List */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {CONTACT_INFO_LIST.map((info, idx) => (
                <ContactInfoItem key={idx} info={info} />
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-purple-500/25 relative overflow-hidden shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-cyan-300 mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">
                    Transmission Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                    Our team will decode your mission parameters and reach out within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    size="sm"
                  >
                    SEND ANOTHER SIGNAL
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-mono tracking-wider text-slate-300 uppercase mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Commander Shepherd"
                        className="w-full bg-[#0a0c20]/80 border border-purple-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-mono tracking-wider text-slate-300 uppercase mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@organization.com"
                        className="w-full bg-[#0a0c20]/80 border border-purple-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-mono tracking-wider text-slate-300 uppercase mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+970 ..."
                        className="w-full bg-[#0a0c20]/80 border border-purple-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-mono tracking-wider text-slate-300 uppercase mb-2">
                        Project Type *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            projectType: e.target.value,
                          })
                        }
                        className="w-full bg-[#0a0c20]/80 border border-purple-500/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                      >
                        <option value="Business Website">Business Website</option>
                        <option value="Portfolio Website">Portfolio & Studio</option>
                        <option value="Landing Page">High-Velocity Landing Page</option>
                        <option value="Custom Experience">Custom Spatial Experience</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-slate-300 uppercase mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share your goals, target audience, timeline, or design inspiration..."
                      className="w-full bg-[#0a0c20]/80 border border-purple-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full py-4 text-sm"
                    icon={<Send className="w-4 h-4 text-cyan-300" />}
                  >
                    TRANSMIT PROJECT BRIEF
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
