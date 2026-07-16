import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send, Clock, ShieldCheck, Car } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitted(true);
    setTimeout(() => {
      // reset form
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section className="py-20 lg:py-28 bg-white" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">Contact Details</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            We Are Here to <span className="italic font-medium text-teal-600">Perfect</span> Your Smile
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-sans">
            Have questions regarding treatment plans, appointments, or billing? Reach out to our expert patient relations team. We respond within 1 business hour.
          </p>
        </div>

        {/* Form and info split layouts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Info blocks (Col 5) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">Bright Smile Headquarters</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                Our clinic is centrally located in the iconic medical building at 450 Sutter St in San Francisco, CA. The facility is fully ADA-accessible with modern elevator grids.
              </p>
            </div>

            {/* Quick Contact Lists */}
            <div className="space-y-4 pt-2">
              <div className="flex gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <MapPin className="text-teal-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-sm font-bold text-slate-800 font-sans">Physical Location</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-sans">450 Sutter St, Suite 1200, San Francisco, CA 94108</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <Phone className="text-teal-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-sm font-bold text-slate-800 font-sans">Patient Care Helpline</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-sans">Phone: (800) 555-0199</p>
                  <p className="text-[10px] text-red-600 font-semibold mt-1 font-sans">On-Call Emergencies: Open 24/7</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <Mail className="text-teal-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-sm font-bold text-slate-800 font-sans">Digital Correspondence</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-sans">care@brightsmiledental.com</p>
                </div>
              </div>
            </div>

            {/* Parking details */}
            <div className="p-5.5 bg-teal-50 border border-teal-100 rounded-2xl flex gap-3.5">
              <Car className="text-teal-600 shrink-0 mt-0.5" size={20} />
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-teal-900 uppercase tracking-wide">Complimentary Parking Valet</h4>
                <p className="text-xs text-teal-800 leading-normal font-sans">Visiting us? We provide 2 hours of complimentary validated parking in the Sutter Street Garage located directly adjacent to our clinical building lobby.</p>
              </div>
            </div>
          </div>

          {/* Column 2: Form submission card (Col 7) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-3xl p-6.5 sm:p-8 shadow-sm text-left">
            {isSubmitted ? (
              <div className="text-center py-20 space-y-4">
                <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">Message Dispatched Successfully!</h3>
                <p className="text-sm sm:text-base text-slate-500 max-w-sm mx-auto leading-normal">Thank you for contacting Bright Smile. A dedicated patient care coordinator has received your inquiry and will email you shortly.</p>
                <p className="text-xs text-slate-400 font-mono mt-2">Correlation reference: SF-{(Math.floor(Math.random() * 900000) + 100000)}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900">Write to Our Patient Care Desk</h3>
                  <p className="text-xs text-slate-500 leading-normal mt-1">Please populate the contact form fields below. Your HIPAA data privacy is guarded at all times.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g., Alexandra Pierce"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="e.g., alex@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="e.g., (415) 555-0182"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Subject</label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                    >
                      <option>General Inquiry</option>
                      <option>Insurance & Billing Question</option>
                      <option>Cosmetic Treatment Consultation</option>
                      <option>Invisalign Smart Pricing</option>
                      <option>Other Concern</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Detailed Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Describe your dental goals or details regarding billing schedules..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 resize-none"
                  ></textarea>
                </div>

                {/* Submit actions */}
                <div className="pt-3 border-t border-slate-200/50 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-400 font-sans">
                    <ShieldCheck size={14} className="text-teal-500 shrink-0" />
                    <span>Secure HIPAA Compliant Network</span>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2 cursor-pointer"
                    id="btn-submit-contact"
                  >
                    <Send size={14} />
                    <span>Send Message</span>
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
