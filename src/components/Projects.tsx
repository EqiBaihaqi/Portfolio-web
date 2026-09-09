"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  Sprout,
  Building2,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  BarChart3,
  Globe,
  Camera,
  Utensils
} from "lucide-react";
import { featuredProjects } from "@/data/portfolioData";
import { Project } from "@/data/types";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case "Wallet":
        return Wallet;
      case "Sprout":
        return Sprout;
      case "Building2":
        return Building2;
      case "Globe":
        return Globe;
      case "Sparkles":
        return Utensils;
      case "Cpu":
        return Camera;
      default:
        return Cpu;
    }
  };

  const topProjects = featuredProjects.filter((p) => p.featured);
  const secondaryProjects = featuredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio & Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects & Case Studies
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Engineered systems highlighting Clean Architecture, automated testing, IoT Fuzzy algorithms, enterprise platforms, and AI integrations.
          </p>
        </div>

        {/* Bento Grid Top Section */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          {topProjects.map((project) => {
            const Icon = getProjectIcon(project.iconName);

            // Card 1: Dompet Kering
            if (project.id === "dompet-kering") {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="col-span-12 lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-xl"
                >
                  <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-cyan-500/20 transition-all" />

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-300">
                          {project.period}
                        </span>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400/90 mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all focus:outline-none"
                    >
                      <span>Explore Clean Architecture Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-slate-500 font-mono">
                      Clean Architecture
                    </span>
                  </div>
                </motion.div>
              );
            }

            // Card 2: Smart Irrigation System (Thesis Project)
            if (project.id === "smart-irrigation") {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="col-span-12 lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-xl"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-emerald-500/20 transition-all" />

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-300">
                          {project.period}
                        </span>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-emerald-300 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-emerald-400/90 mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1 transition-all focus:outline-none"
                    >
                      <span>View Thesis & Sensor Schematics</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-slate-500 font-mono">Polinema Thesis</span>
                  </div>
                </motion.div>
              );
            }

            // Card 3: SiMBA Academy (BAZNAS)
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="col-span-12 glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 group relative overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-indigo-500/20 transition-all" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-300">
                        {project.period}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-indigo-400/90">
                      {project.subtitle}
                    </p>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-l lg:border-slate-800 lg:pl-8">
                    <div className="grid grid-cols-3 gap-3">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center">
                          <div className="text-base sm:text-lg font-bold text-indigo-400">
                            {m.value}
                          </div>
                          <div className="text-xs text-slate-400 font-medium mt-1">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                      <div className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-indigo-400" />
                        Cross-Functional Agile Collaboration
                      </div>
                      <p className="text-xs text-slate-400">
                        Custom Google Apps Script dynamic content pipeline, Postman API verification, and Business Requirement Document (BRD) alignment.
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Open BAZNAS Platform Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary Projects Row (Tourease, Your Comfort Recipe, Camps Scanner) */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
            Additional Production & Community Applications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => {
              const Icon = getProjectIcon(project.iconName);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel glass-panel-hover p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                        {project.period}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h4>
                    <p className="text-xs font-semibold text-cyan-400 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dynamic Modal View */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
