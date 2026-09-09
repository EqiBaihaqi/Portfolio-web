"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  CheckCircle2,
  Cpu,
  Smartphone,
  ShieldCheck,
  Zap,
  Sparkles,
  GraduationCap,
  Award,
  BookOpen,
  MapPin
} from "lucide-react";
import { profileData, educationData } from "@/data/portfolioData";

export default function About() {
  const pillars = [
    {
      title: "Clean Architecture & Freezed",
      description:
        "Navigating and scaling large-scale Flutter applications with strict layer decoupling, Freezed immutable data classes, and robust domain modeling.",
      icon: Layers,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: "Patrol Integration Testing",
      description:
        "Executing automated cross-platform E2E test suites across Android and iOS platforms using Patrol to guarantee release stability on critical features.",
      icon: ShieldCheck,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "GetX Pattern & MVVM",
      description:
        "Implementing responsive state management, clean dependency injection, and centralized routing with both GetX Pattern and MVVM architectures.",
      icon: Zap,
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "IoT Telemetry & AI Systems",
      description:
        "Engineering intelligent mobile systems with Fuzzy Tsukamoto algorithmic control, Google Gemini AI, on-device OCR, and native Face Detection.",
      icon: Cpu,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Engineering Precision & Academic Rigor
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A Mobile Engineer combining foundational computer science education with production experience in scalable architecture.
          </p>
        </div>

        {/* Narrative & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 relative">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
                Mobile Engineer with Production Experience
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                {profileData.bio}
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Currently contributing as an Application Developer at <strong className="text-white">Bionic Technology Indonesia</strong>, navigating large-scale enterprise Flutter codebases, executing Patrol integration testing on Android & iOS, optimizing WebView flows, and implementing Freezed immutability.
              </p>

              {/* Core Attributes from CV */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>
                    <strong className="text-white">Architecture Setup to Deployment:</strong> Clean Architecture, MVVM, and GetX.
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>
                    <strong className="text-white">Native Integration Testing:</strong> Automated Patrol suites eliminating platform regressions.
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>
                    <strong className="text-white">Hardware & AI Integrations:</strong> IoT telemetry, Fuzzy Tsukamoto algorithms, Face Detection, Maps.
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Profile Meta */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-2xl">
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Base Location</div>
                <div className="text-sm font-semibold text-white">{profileData.location} {profileData.postalCode}</div>
              </div>
              <div className="glass-panel p-4 rounded-2xl">
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Current Status</div>
                <div className="text-sm font-semibold text-emerald-400">Bionic Technology Indonesia</div>
              </div>
            </div>
          </motion.div>

          {/* Pillars Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${pillar.bg}`}
                    >
                      <Icon className={`w-5 h-5 ${pillar.color}`} />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Education & Certifications Accordion / Cards from CV */}
        <div className="pt-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Education & Formal Certifications
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Academic foundation in Informatics Engineering and certified industry specialization.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      {edu.period}
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      {edu.gpa}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1">
                    {edu.institution}
                  </h4>
                  <p className="text-xs font-semibold text-indigo-400 mb-4">
                    {edu.degree}
                  </p>

                  {edu.toeic && (
                    <div className="mb-4 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-semibold text-amber-300 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{edu.toeic}</span>
                    </div>
                  )}

                  <div className="space-y-2">
                    {edu.details.map((detail, dIdx) => (
                      <div key={dIdx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
