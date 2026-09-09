"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from "lucide-react";
import { experienceData } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Dynamic background accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Work Experience & Track Record
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Chronological engineering roles spanning enterprise codebases, production apps, location-based services, and Agile environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical center line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-8 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center node badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/40 hidden sm:flex">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Content card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border border-slate-800/90 relative overflow-hidden">
                      {/* Top meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            item.type === "Current Role"
                              ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400"
                              : "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                          }`}
                        >
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-indigo-400 mb-4 flex flex-wrap items-center justify-between gap-2">
                        <span>{item.organization}</span>
                        <span className="text-xs text-slate-400 font-normal flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key achievements from CV */}
                      <div className="space-y-2 mb-5">
                        {item.achievements.map((ach, aIdx) => (
                          <div
                            key={aIdx}
                            className="flex items-start gap-2.5 text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="leading-normal">{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                        {item.technologies.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-medium text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded-md border border-slate-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
