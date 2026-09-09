"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Layers,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Cpu
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/data/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-slate-900/95 border border-slate-700/80 rounded-3xl shadow-2xl shadow-cyan-950/40 z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="p-6 sm:p-8 border-b border-slate-800 bg-slate-950/50 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  {project.badge}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-1">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 divide-y divide-slate-800/60">
            {/* Overview & Key Metrics */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Project Overview
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.modalDetails.overview}
              </p>

              {/* Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {project.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-center"
                  >
                    <div className="text-lg sm:text-xl font-bold text-cyan-400 mb-0.5">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Details */}
            <div className="pt-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-400" />
                {project.modalDetails.architectureTitle}
              </h3>
              <div className="space-y-2.5">
                {project.modalDetails.architectureDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="pt-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                Key Technical Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.modalDetails.technicalHighlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-800/30 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="pt-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                Engineering Challenges & Solutions
              </h3>
              <div className="space-y-3">
                {project.modalDetails.challengesAndSolutions.map((cs, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2"
                  >
                    <div className="text-xs sm:text-sm font-semibold text-amber-300 flex items-start gap-2">
                      <span className="text-amber-400">Challenge:</span>
                      <span>{cs.challenge}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 pl-3 border-l-2 border-emerald-500/40">
                      <span className="text-emerald-400 font-semibold">Solution:</span>
                      <span>{cs.solution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="pt-6 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Technologies & Tools Deployed
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800/80 border border-slate-700 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-5 sm:p-6 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
            <div>
              {project.modalDetails.githubUrl && (
                <a
                  href={project.modalDetails.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
