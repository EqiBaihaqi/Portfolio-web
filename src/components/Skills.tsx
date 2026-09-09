"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Globe,
  Layers,
  Sparkles,
  Flame,
  Users,
  CheckCircle2
} from "lucide-react";
import { skillCategories, softSkills } from "@/data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filterCategories = [
    { id: "all", label: "All Technical Competencies", icon: Sparkles },
    { id: "Mobile Architecture & Engineering", label: "Mobile Engineering", icon: Smartphone },
    { id: "APIs, Cloud & Device Integrations", label: "APIs & Hardware", icon: Layers },
    { id: "Engineering Tools & Methodologies", label: "Tools & Agile", icon: Globe },
  ];

  const displayedCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.title === activeTab);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Skills & Specialized Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Validated capabilities across cross-platform mobile engineering, architecture patterns, device peripherals, and team workflows.
          </p>
        </div>

        {/* Filter Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20"
                    : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-12 mb-16">
          <AnimatePresence mode="wait">
            {displayedCategories.map((category, catIndex) => {
              const CategoryIcon =
                category.title === "Mobile Architecture & Engineering"
                  ? Smartphone
                  : category.title === "APIs, Cloud & Device Integrations"
                  ? Layers
                  : Globe;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, delay: catIndex * 0.05 }}
                  className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800/80"
                >
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800/60">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center">
                        <CategoryIcon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {category.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className={`group relative p-4 rounded-xl border transition-all duration-300 ${
                          skill.highlight
                            ? "bg-slate-900/90 border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10"
                            : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70"
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </span>
                            {skill.highlight && (
                              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400/30" />
                            )}
                          </div>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                              skill.level === "Expert"
                                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                                : skill.level === "Advanced"
                                ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/30"
                                : "bg-slate-800 text-slate-300 border border-slate-700"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        {/* Tag Pills */}
                        {skill.tags && (
                          <div className="flex flex-wrap gap-1.5 mt-2.5">
                            {skill.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] text-slate-400 bg-slate-950/60 px-2 py-0.5 rounded-md border border-slate-800"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Soft Skills & Collaboration Bar from CV */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800/80">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Soft Skills & Agile Collaboration
              </h3>
              <p className="text-xs text-slate-400">
                Interpersonal, communication, and procedural proficiencies documented on CV.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {softSkills.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm font-medium text-slate-300 hover:border-cyan-500/40 hover:text-white transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
