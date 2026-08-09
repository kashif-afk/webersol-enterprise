'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Loader2 } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Generative AI & Agentic Automation',
    message: '',
  });

  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({
    loading: false,
    success: null,
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          message: 'Thank you! Your request has been sent successfully.',
        });
        setFormData({
          name: '',
          email: '',
          service: 'Generative AI & Agentic Automation',
          message: '',
        });
      } else {
        // Display the specific error returned from the backend API
        throw new Error(data.error || 'Failed to submit form.');
      }
    } catch (error: any) {
      setStatus({
        loading: false,
        success: false,
        message: error.message || 'Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-[var(--color-obsidian)] text-white px-6 lg:px-12 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Direct Contact Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Schedule Strategy Call</h2>
            <h3 className="text-3xl sm:text-4xl font-bold">Let's Build Your Enterprise Platform</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Connect directly with our Lead UX Architects and CTO to review system specifications and technical feasibility.
            </p>
          </div>

          <div className="space-y-4 text-sm font-mono">
            <div className="flex items-center gap-3 p-4 bg-[var(--color-slateGraphite)]/40 border border-slate-800 rounded-xl">
              <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Direct Email</p>
                <p className="text-white font-bold">info@webersol.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-[var(--color-slateGraphite)]/40 border border-slate-800 rounded-xl">
              <Phone className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Direct Line / WhatsApp</p>
                <p className="text-white font-bold">+92 335 4654941</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-[var(--color-slateGraphite)]/40 border border-slate-800 rounded-xl">
              <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Headquarters</p>
                <p className="text-white font-bold">Johar Town, Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Form */}
        <div className="lg:col-span-7 bg-[var(--color-slateGraphite)]/30 border border-slate-800 p-8 rounded-2xl space-y-6">
          <h4 className="text-xl font-bold">Request Architecture Consultation</h4>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full bg-[var(--color-obsidian)] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">Work Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full bg-[var(--color-obsidian)] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">Primary Focus Area</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[var(--color-obsidian)] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Generative AI & Agentic Automation">Generative AI & Agentic Automation</option>
                <option value="Full-Stack Custom Web Architecture">Full-Stack Custom Web Architecture</option>
                <option value="GEO & Performance Growth Marketing">GEO & Performance Growth Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">Project Scope / Requirements</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your objectives, target timelines, and current tech stack..."
                className="w-full bg-[var(--color-obsidian)] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {status.message && (
              <div
                className={`p-4 rounded-xl text-xs font-mono ${
                  status.success
                    ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/25"
            >
              {status.loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Request...</span>
                </>
              ) : (
                <>
                  <span>Submit Consultation Request</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};