"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  MapPin,
  Copy,
  Check,
  Sparkles,
  AlertCircle,
  MessageSquare,
  Phone
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./Icons";
import { profileData } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject or project brief.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please include a message.";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Message should be at least 15 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profileData.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Contact] ${formData.subject}`,
          message: formData.message,
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Form delivery network issue");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      // Automatic fallback to mailto so user can immediately send via their email client
      const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Al Akbar,\n\n${formData.message}\n\nFrom:\n${formData.name} (${formData.email})`
      )}`;
      window.location.href = mailtoUrl;
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-gradient-to-br from-cyan-600/10 via-indigo-600/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Available for Mobile Engineering positions, technical collaborations, and architecture consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800/90 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Contact Information
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Feel free to connect directly via email, phone/WhatsApp, or via professional developer networks.
              </p>

              {/* Email Box with One-Click Copy */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-slate-400 font-medium">Direct Email</div>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-white transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  title="Copy email to clipboard"
                  aria-label="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* WhatsApp Box */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-slate-400 font-medium">WhatsApp Direct Chat</div>
                    <a
                      href={profileData.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors truncate block"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <a
                    href={profileData.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs font-semibold transition-all shrink-0"
                    title="Open WhatsApp chat"
                  >
                    Chat
                  </a>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-white transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    title="Copy number to clipboard"
                    aria-label="Copy phone to clipboard"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Postal Code */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Location</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {profileData.location}
                  </div>
                  <div className="text-[11px] text-slate-400">Postal: {profileData.postalCode}</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Response Time</span>
                  </div>
                  <div className="text-sm font-semibold text-emerald-400">
                    Prompt Reply
                  </div>
                  <div className="text-[11px] text-slate-400">WIB (UTC+7)</div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Online Profiles
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-sm font-medium transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800/90 relative">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-sm text-slate-400 mb-8">
                Send a project inquiry or scheduling note.
              </p>

              {/* Success Notification */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white">Message Dispatched!</div>
                        <div className="text-xs text-emerald-300/90 mt-0.5">
                          Your message has been routed to {profileData.email}. I will review and reply as soon as possible.
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-semibold text-emerald-400 underline hover:text-emerald-300 shrink-0"
                    >
                      Send Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? "border-rose-500/80 focus:ring-rose-500"
                          : "border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="jane@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? "border-rose-500/80 focus:ring-rose-500"
                          : "border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Subject / Project Context *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="Flutter Mobile Architecture / Mobile Engineering Role"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? "border-rose-500/80 focus:ring-rose-500"
                        : "border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Provide details on the scope, stack requirements, or timelines..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? "border-rose-500/80 focus:ring-rose-500"
                        : "border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="text-center pt-2">
                  <p className="text-xs text-slate-400">
                    Prefer your default email app?{" "}
                    <a
                      href={`mailto:${profileData.email}?subject=${encodeURIComponent(
                        formData.subject || "Project Inquiry / Mobile Engineering"
                      )}&body=${encodeURIComponent(formData.message || "Hello Al Akbar,")}`}
                      className="text-cyan-400 hover:text-cyan-300 underline font-medium transition-colors"
                    >
                      Open in Mail Client
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
