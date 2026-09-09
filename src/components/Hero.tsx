"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Terminal,
  Cpu,
  ShieldCheck,
  Zap,
  Smartphone,
  Layers,
  GraduationCap,
  Sparkles,
  Phone
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./Icons";
import { profileData } from "@/data/portfolioData";

export default function Hero() {
  const quickPills = [
    { label: "Flutter & Dart", icon: Smartphone },
    { label: "Clean Architecture", icon: ShieldCheck },
    { label: "GetX Pattern", icon: Zap },
    { label: "Patrol E2E Testing", icon: Terminal },
    { label: "Freezed & Dio", icon: Layers },
    { label: "IoT & AI Integration", icon: Cpu },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background dynamic glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md mb-8 shadow-inner"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              {profileData.status}
            </span>
          </motion.div>

          {/* Name & Professional Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">
              {profileData.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400 mb-6 flex items-center justify-center gap-2 flex-wrap"
          >
            <span>{profileData.title}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 text-lg sm:text-xl font-normal">
              {profileData.location}
            </span>
          </motion.div>

          {/* CV Exact Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal"
          >
            Mobile Engineer with a strong background in building cross-platform Flutter applications from{" "}
            <span className="text-white font-medium">architectural setup to deployment</span>. Combines deep technical skills in{" "}
            <span className="text-cyan-400 font-medium">Clean Architecture</span>,{" "}
            <span className="text-indigo-400 font-medium">GetX</span>, and{" "}
            <span className="text-emerald-400 font-medium">Patrol testing</span> with experience handling{" "}
            <span className="text-white font-medium">IoT and AI integrations</span>. Adept at transforming complex UI/UX designs into production-grade mobile applications.
          </motion.p>

          {/* Action CTAs & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-semibold text-sm sm:text-base backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-black/40"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Explore Projects</span>
            </a>

            <div className="flex items-center gap-2 pl-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white transition-all hover:scale-110"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-cyan-400 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={profileData.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-emerald-400 transition-all hover:scale-110"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
              </a>
            </div>
          </motion.div>

          {/* Quick Pillars / Tech Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2.5 mb-16"
          >
            {quickPills.map((pill, idx) => {
              const Icon = pill.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs sm:text-sm font-medium text-slate-300 hover:border-cyan-500/40 hover:text-white transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{pill.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* CV Stat Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <div className="glass-panel p-5 rounded-2xl text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {profileData.gpa}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                Polinema Informatics GPA
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">
                {profileData.toeicScore}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                TOEIC Official Score
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl text-center">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-1">
                {profileData.projectsCompleted}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                Shipped & Featured
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl text-center">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">
                Clean Arch
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                Patrol E2E & Freezed
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
