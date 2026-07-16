import React, { useState, useEffect } from 'react';
import { Calendar, User, Phone, Mail, Clock, ShieldCheck, CheckCircle2, ChevronRight, ChevronLeft, Stethoscope, AlertTriangle } from 'lucide-react';
import { Appointment, ActiveTab, Service, Dentist } from '../types';

interface BookAppointmentProps {
  selectedServiceId: string;
  setSelectedServiceId: (id: string) => void;
  selectedDentistId: string;
  setSelectedDentistId: (id: string) => void;
  onAddAppointment: (appointment: Appointment) => void;
  setCurrentTab: (tab: ActiveTab) => void;
}

export default function BookAppointment({
  selectedServiceId,
  setSelectedServiceId,
  selectedDentistId,
  setSelectedDentistId,
  onAddAppointment,
  setCurrentTab
}: BookAppointmentProps) {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('09:00 AM');
  const [message, setMessage] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedRef, setGeneratedRef] = useState('');

  const services: { id: string; name: string }[] = [
    { id: 'gen-dent', name: 'General Dentistry' },
    { id: 'cos-dent', name: 'Cosmetic Dentistry' },
    { id: 'implants', name: 'Dental Implants' },
    { id: 'invisalign', name: 'Invisalign® Aligners' },
    { id: 'whitening', name: 'Teeth Whitening' },
    { id: 'veneers', name: 'Porcelain Veneers' },
    { id: 'root-canal', name: 'Root Canal Therapy' },
    { id: 'crowns', name: 'Crowns & Bridges' },
    { id: 'emergency', name: 'Emergency Dentistry' },
    { id: 'pediatric', name: 'Pediatric Dentistry' }
  ];

  const dentists: { id: string; name: string; title: string }[] = [
    { id: 'any', name: 'First Available Professional', title: 'Optimal Scheduling' },
    { id: 'dr-sarah', name: 'Dr. Sarah Mercer, D.D.S.', title: 'Lead Cosmetic & Orthodontist' },
    { id: 'dr-marcus', name: 'Dr. Marcus Vance, D.M.D.', title: 'Lead Oral Surgeon & Implantologist' }
  ];

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleNextStep = () => {
    if (step === 1 && !selectedServiceId) return;
    if (step === 2 && !preferredDate) return;
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !preferredDate) return;

    const refCode = `APP-${(Math.floor(Math.random() * 90000) + 10000)}`;
    setGeneratedRef(refCode);

    const newAppointment: Appointment = {
      id: refCode,
      fullName,
      email,
      phone,
      preferredDate,
      preferredTime,
      serviceId: selectedServiceId,
      dentistId: selectedDentistId || 'any',
      message,
      status: 'pending',
      createdAt: new Date().toISOString(),
      isUrgent
    };

    onAddAppointment(newAppointment);
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setStep(1);
    setFullName('');
    setEmail('');
    setPhone('');
    setPreferredDate('');
    setPreferredTime('09:00 AM');
    setMessage('');
    setIsUrgent(false);
    setIsSubmitted(false);
    setSelectedServiceId('gen-dent');
    setSelectedDentistId('any');
  };

  return (
    <section className="py-20 lg:py-28 bg-white" id="booking-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center mb-10 space-y-3">
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">Secure Scheduling Desk</span>
          <h2 className="text-3xl font-serif text-slate-900 tracking-tight">Schedule Your Dental Reservation</h2>
          <p className="text-sm text-slate-500 font-sans max-w-lg mx-auto">
            Book your slot directly into our clinical calendar. Our administrative team will reach out via call or text to complete pre-registration checklists.
          </p>
        </div>

        {/* Step Indicator Progress bar */}
        {!isSubmitted && (
          <div className="flex justify-between items-center mb-10 max-w-md mx-auto">
            {[1, 2, 3].map(num => (
              <div key={num} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm border transition-all ${
                  step === num
                    ? 'bg-teal-600 text-white border-teal-600 shadow'
                    : step > num
                      ? 'bg-teal-500 text-white border-teal-500'
                      : 'bg-white text-slate-400 border-slate-200'
                }`}>
                  {num}
                </div>
                <span className={`text-xs font-semibold hidden sm:inline ${
                  step === num ? 'text-slate-800' : 'text-slate-400'
                }`}>
                  {num === 1 ? 'Treatment' : num === 2 ? 'Date & Time' : 'Patient Info'}
                </span>
                {num < 3 && <div className="w-10 sm:w-16 h-0.5 bg-slate-200"></div>}
              </div>
            ))}
          </div>
        )}

        {/* Container box */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6.5 sm:p-8 shadow-xl text-left">
          {isSubmitted ? (
            /* Success confirmation card */
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={40} />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-slate-900">Appointment Requested!</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  We have tentatively held your selected slot. Your booking reference code is <span className="font-mono font-bold text-slate-800 bg-slate-200 px-2 py-0.5 rounded">{generatedRef}</span>.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm mx-auto">
                  Our receptionist, Mary, will call or text your phone number <span className="font-semibold text-slate-800">{phone}</span> within 15 minutes to confirm insurance co-pays and finalize the booking.
                </p>
              </div>

              {/* Persist actions */}
              <div className="pt-6 border-t border-slate-200/50 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => setCurrentTab('admin')}
                  className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer"
                  id="btn-view-staff-portal"
                >
                  View in Staff Portal
                </button>
                <button
                  onClick={handleResetForm}
                  className="px-5 py-3 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
                  id="btn-book-another"
                >
                  Request Another Appointment
                </button>
              </div>
            </div>
          ) : (
            /* Forms wizard */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: Treatment and Doctor selection */}
              {step === 1 && (
                <div className="space-y-5">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-lg font-serif font-bold text-slate-900">Step 1: Choose Treatment & Doctor</h3>
                    <p className="text-xs text-slate-500">Pick your medical treatment and practitioner. We match doctor specializations to treatment types automatically.</p>
                  </div>

                  {/* Treatment Select */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                      <Stethoscope size={14} className="text-teal-500" />
                      <span>Select Dental Treatment</span>
                    </label>
                    <select
                      value={selectedServiceId}
                      onChange={(e) => {
                        setSelectedServiceId(e.target.value);
                        // If pediatric is chosen, suggest first available or matching pediatrician
                        if (e.target.value === 'pediatric') {
                          setSelectedDentistId('any');
                        } else if (e.target.value === 'implants' || e.target.value === 'root-canal') {
                          setSelectedDentistId('dr-marcus');
                        } else if (e.target.value === 'veneers' || e.target.value === 'invisalign') {
                          setSelectedDentistId('dr-sarah');
                        }
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                      id="select-book-service"
                    >
                      <option value="">-- Choose Treatment --</option>
                      {services.map(s => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Doctor Select */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Preferred Clinical Practitioner</label>
                    <div className="space-y-2.5">
                      {dentists.map(d => (
                        <div
                          key={d.id}
                          onClick={() => setSelectedDentistId(d.id)}
                          className={`p-3.5 rounded-xl border flex justify-between items-center gap-4 cursor-pointer transition-all ${
                            selectedDentistId === d.id
                              ? 'bg-teal-50/50 border-teal-400 shadow-sm'
                              : 'bg-white border-slate-200/80 hover:border-slate-300'
                          }`}
                          id={`btn-dentist-option-${d.id}`}
                        >
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-800">{d.name}</h4>
                            <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">{d.title}</p>
                          </div>
                          <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center ${
                            selectedDentistId === d.id ? 'bg-teal-500 border-teal-500 text-white' : 'border-slate-300'
                          }`}>
                            {selectedDentistId === d.id && <span className="w-2 h-2 rounded-full bg-white"></span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action row */}
                  <div className="pt-4 border-t border-slate-200/40 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      disabled={!selectedServiceId}
                      className="px-5 py-3 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                      id="btn-step1-next"
                    >
                      <span>Continue to Calendar</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Date & Slot Selection */}
              {step === 2 && (
                <div className="space-y-5">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-lg font-serif font-bold text-slate-900">Step 2: Choose Date & Timeslot</h3>
                    <p className="text-xs text-slate-500">Pick your preferred timing. Saturday has limited availability, and Sunday is emergency-only.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Date Input */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                        id="input-book-date"
                      />
                    </div>

                    {/* Time Slot Select */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Time Block</label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                        id="select-book-time"
                      >
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Urgency checkbox */}
                  <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="input-is-urgent"
                      checked={isUrgent}
                      onChange={(e) => setIsUrgent(e.target.checked)}
                      className="mt-1 accent-teal-500 rounded focus:ring-teal-500"
                    />
                    <label htmlFor="input-is-urgent" className="text-xs text-amber-800 leading-normal font-sans select-none cursor-pointer">
                      <span className="font-bold block flex items-center gap-1">
                        <AlertTriangle size={14} className="text-amber-600 shrink-0" />
                        <span>Is this a severe dental emergency?</span>
                      </span>
                      Check this box if you are experiencing swelling, continuous bleeding, or intense throbbing pain. Emergency cases bypass the standard calendar queue.
                    </label>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 border-t border-slate-200/40 flex justify-between">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-5 py-3 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <ChevronLeft size={14} />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      disabled={!preferredDate}
                      className="px-5 py-3 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                      id="btn-step2-next"
                    >
                      <span>Continue to Patient Details</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Patient Demographic Info */}
              {step === 3 && (
                <div className="space-y-5">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-lg font-serif font-bold text-slate-900">Step 3: Patient Contact Information</h3>
                    <p className="text-xs text-slate-500">Provide demographic and contact records. All clinical data stays protected on our HIPAA-compliant server.</p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Patient Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g., Katherine Pierce"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                      id="input-book-fullname"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g., katherine@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                        id="input-book-email"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g., (415) 555-0192"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                        id="input-book-phone"
                      />
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Medical Notes or Concerns (Optional)</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g., I have severe dental anxiety, or please check if you are in-network with Delta Dental Premier..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 resize-none"
                    ></textarea>
                  </div>

                  {/* Legal notice */}
                  <div className="text-[10px] text-slate-400 font-sans leading-relaxed">
                    By submitting this reservation request, you consent to receive clinical booking notifications, pre-registration link coordinates, and dental reminders via call, text, or email from Bright Smile Dental.
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 border-t border-slate-200/40 flex justify-between">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-5 py-3 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <ChevronLeft size={14} />
                      <span>Back</span>
                    </button>
                    
                    <button
                      type="submit"
                      disabled={!fullName || !email || !phone}
                      className="px-6 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-slate-300 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-colors flex items-center gap-1.5 cursor-pointer"
                      id="btn-submit-booking-form"
                    >
                      <ShieldCheck size={16} />
                      <span>Request Appointment Reservation</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
