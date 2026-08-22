'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Loader2 } from 'lucide-react';
import { Reveal } from './motion/Reveal';

const DEFAULT_SERVICE_OPTIONS = [
  'Generative AI & Agentic Automation',
  'Full-Stack Custom Web Architecture',
  'Financial ERP-Level Architecture',
  'GEO & Performance Growth Marketing',
  'Marketing',
];

type ContactSectionProps = {
  serviceOptions?: string[];
  defaultService?: string;
  heading?: string;
};

export const ContactSection = ({
  serviceOptions = DEFAULT_SERVICE_OPTIONS,
  defaultService,
  heading = 'Request Architecture Consultation',
}: ContactSectionProps) => {
  const initialService = defaultService ?? serviceOptions[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    message: '',
    website: '', // honeypot — real users never see or fill this field
  });

  const renderedAt = useRef(0);
  useEffect(() => {
    renderedAt.current = Math.floor(Date.now() / 1000);
  }, []);

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
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, renderedAt: renderedAt.current }),
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
          phone: '',
          service: initialService,
          message: '',
          website: '',
        });
      } else {
        throw new Error(data.error || 'Failed to submit form.');
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-obsidian/80 backdrop-blur-sm text-white px-6 sm:px-8 lg:px-14 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Direct Contact Info */}
        <Reveal className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-steelBright uppercase tracking-widest">Schedule Strategy Call</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold">Let&apos;s Build Your Enterprise Platform</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Connect directly with our Lead UX Architects and CTO to review system specifications and technical feasibility.
            </p>
          </div>

          <div className="space-y-4 text-sm font-mono">
            <div className="flex items-center gap-3 p-4 bg-slateGraphite/40 border border-slate-800 rounded-xl">
              <Mail className="w-5 h-5 text-steelBright shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Direct Email</p>
                <p className="text-white font-bold">info@webersol.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-slateGraphite/40 border border-slate-800 rounded-xl">
              <Phone className="w-5 h-5 text-steel shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Direct Line / WhatsApp</p>
                <p className="text-white font-bold">+1 872 284 3026</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-slateGraphite/40 border border-slate-800 rounded-xl">
              <MapPin className="w-5 h-5 text-steel shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Headquarters</p>
                <p className="text-white font-bold">105 West 28th Street, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Lead Form */}
        <Reveal delay={0.1} className="lg:col-span-7 bg-slateGraphite/25 backdrop-blur-md border border-slate-800 p-8 rounded-2xl space-y-6">
          <h4 className="font-display text-xl font-bold">{heading}</h4>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Honeypot — hidden from real visitors, bots tend to fill every field */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input
                type="text"
                id="contact-website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1.5">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full bg-obsidian border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-steel"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1.5">Work Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full bg-obsidian border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-steel"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-service" className="block text-xs font-mono text-slate-400 mb-1.5">Primary Focus Area</label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-obsidian border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-steel"
                >
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-xs font-mono text-slate-400 mb-1.5">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full bg-obsidian border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-steel"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1.5">Project Scope / Requirements</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your objectives, target timelines, and current tech stack..."
                className="w-full bg-obsidian border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-steel"
              />
            </div>

            {status.message && (
              <div
                className={`p-4 rounded-xl text-xs font-mono ${
                  status.success
                    ? 'bg-success/10 border border-success/30 text-success'
                    : 'bg-danger/10 border border-danger/30 text-danger'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-4 bg-amber hover:bg-amberBright disabled:opacity-50 text-onAccent font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber/25"
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
        </Reveal>

      </div>
    </section>
  );
};