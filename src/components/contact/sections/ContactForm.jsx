import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MagneticButton } from '../../UIComponents';

const CONTACT_FORM_DATA = {
  label: '[ INPUT_ ]',
  headingPrimary: 'SUBMIT YOUR',
  headingAccent: 'REQUEST',
  // headingSuffix: 'REQUEST',
  body: 'Our team closely monitors all incoming messages. Expect a response shortly',
  statusLines: ['SECURE CHANNEL ACTIVE', 'ENCRYPTION ENABLED'],
  fields: {
    name: { label: 'Full_Name', placeholder: 'ENTER NAME' },
    email: { label: 'Email_Address', placeholder: 'EMAIL@SYSTEM.COM' },
    subject: { label: 'Subject_', placeholder: 'NATURE OF INQUIRY' },
    message: { label: 'Message_', placeholder: 'TYPE YOUR MESSAGE HERE...' }
  },
  submitText: 'SEND'
};

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic here
    alert('Operational request received. Initializing contact protocol.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4FF00]/[0.01] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form Info */}
            <div className="lg:col-span-4">
              <span className="font-mono text-[#D4FF00] text-[10px] tracking-[0.5em] uppercase mb-6 block">
                {CONTACT_FORM_DATA.label}
              </span>
              <h2 className="font-oswald text-4xl font-bold text-white mb-8 leading-tight">
                {CONTACT_FORM_DATA.headingPrimary} <br />
                <span className="text-transparent stroke-text">{CONTACT_FORM_DATA.headingAccent}</span> {CONTACT_FORM_DATA.headingSuffix}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-12">
                {CONTACT_FORM_DATA.body}
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                  <div className="w-2 h-2 bg-[#D4FF00] rounded-full animate-pulse" />
                  <span>{CONTACT_FORM_DATA.statusLines[0]}</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                  <div className="w-2 h-2 bg-[#D4FF00] rounded-full" />
                  <span>{CONTACT_FORM_DATA.statusLines[1]}</span>
                </div>
              </div>
            </div>

            {/* Actual Form */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-mono text-[9px] text-gray-500 uppercase tracking-widest ml-1">{CONTACT_FORM_DATA.fields.name.label}</label>
                    <input
                      type="text"
                      name="name"
                      required
                      onChange={handleChange}
                      placeholder={CONTACT_FORM_DATA.fields.name.placeholder}
                      className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-white font-mono text-xs focus:border-[#D4FF00] outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[9px] text-gray-500 uppercase tracking-widest ml-1">{CONTACT_FORM_DATA.fields.email.label}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      onChange={handleChange}
                      placeholder={CONTACT_FORM_DATA.fields.email.placeholder}
                      className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-white font-mono text-xs focus:border-[#D4FF00] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[9px] text-gray-500 uppercase tracking-widest ml-1">{CONTACT_FORM_DATA.fields.subject.label}</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    onChange={handleChange}
                    placeholder={CONTACT_FORM_DATA.fields.subject.placeholder}
                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-white font-mono text-xs focus:border-[#D4FF00] outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[9px] text-gray-500 uppercase tracking-widest ml-1">{CONTACT_FORM_DATA.fields.message.label}</label>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    onChange={handleChange}
                    placeholder={CONTACT_FORM_DATA.fields.message.placeholder}
                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 text-white font-mono text-xs focus:border-[#D4FF00] outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-4">
                  <MagneticButton type="submit" className="btn-primary px-12 py-5 text-sm tracking-[0.3em] flex items-center justify-center gap-6 group">
                    <span>{CONTACT_FORM_DATA.submitText}</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7M3 12h18" />
                    </svg>
                  </MagneticButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
