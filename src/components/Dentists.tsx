import React, { useState } from 'react';
import { Calendar, GraduationCap, Sparkles, Award, Clock, Heart, Send, CheckCircle2 } from 'lucide-react';
import { Dentist, ActiveTab } from '../types';

interface DentistsProps {
  setSelectedDentistId: (id: string) => void;
  setCurrentTab: (tab: ActiveTab) => void;
}

export default function Dentists({ setSelectedDentistId, setCurrentTab }: DentistsProps) {
  const [askDoctor, setAskDoctor] = useState<{ isOpen: boolean; doctorName: string; question: string; email: string; submitted: boolean }>({
    isOpen: false,
    doctorName: '',
    question: '',
    email: '',
    submitted: false,
  });

  const dentistsData: Dentist[] = [
    {
      id: 'dr-sarah',
      name: 'Dr. Sarah Mercer, D.D.S.',
      title: 'Clinic Director & Lead Cosmetic Specialist',
      specialty: ['Cosmetic Smile Reconstruction', 'Invisalign® Preferred Orthodontics', 'Veneers & Aesthetic Bonding'],
      education: [
        'UCSF School of Dentistry — Doctor of Dental Surgery (Honors)',
        'Residency in Advanced Aesthetic Dentistry (New York University)',
        'Accredited Member of American Academy of Cosmetic Dentistry (AACD)'
      ],
      bio: 'Dr. Sarah Mercer has been designing elite smiles in the Bay Area for over 13 years. Renowned for her gentle touch and artistic precision, she believes in combining facial symmetry calculations with patient desires for a completely custom smile.',
      avatar: '/src/assets/images/dentist_dr_sarah_1784189741738.jpg',
      availability: ['Monday', 'Tuesday', 'Wednesday']
    },
    {
      id: 'dr-marcus',
      name: 'Dr. Marcus Vance, D.M.D.',
      title: 'Chief of Oral Surgery & Implantology',
      specialty: ['3D Implant Surgery & Placement', 'Advanced Root Canal Therapy', 'Emergency Wisdom Teeth Extraction'],
      education: [
        'Harvard School of Dental Medicine — Doctor of Medicine in Dentistry',
        'Maxillofacial Surgery Residency (Boston Medical Center)',
        'Fellow of the International Congress of Oral Implantologists (FICOI)'
      ],
      bio: 'Dr. Marcus Vance is a board-certified oral surgeon dedicated to pain-free reconstructive dentistry. Utilizing state-of-the-art CBCT 3D guided surgery, he reduces implant recovery times by up to 50% while guaranteeing perfect structural alignment.',
      avatar: '/src/assets/images/dentist_dr_marcus_1784189758046.jpg',
      availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
  ];

  const handleSelectDoctor = (dentistId: string) => {
    setSelectedDentistId(dentistId);
    setCurrentTab('book');
  };

  const handleOpenAskDoctor = (name: string) => {
    setAskDoctor({
      isOpen: true,
      doctorName: name,
      question: '',
      email: '',
      submitted: false,
    });
  };

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!askDoctor.email || !askDoctor.question) return;
    setAskDoctor(prev => ({ ...prev, submitted: true }));
    setTimeout(() => {
      // Close after delay
      setAskDoctor({ isOpen: false, doctorName: '', question: '', email: '', submitted: false });
    }, 2500);
  };

  return (
    <section className="py-20 lg:py-28 bg-white" id="dentists-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">Clinical Leadership</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            Meet Our Award-Winning <span className="italic font-medium text-teal-600">Specialists</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-sans">
            Our clinicians are board-certified alumni of Harvard and UCSF. With over 25 combined years of practice, they publish dental studies and teach advanced aesthetic procedures across the United States.
          </p>
        </div>

        {/* Dentists Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {dentistsData.map((dentist) => (
            <div 
              key={dentist.id} 
              className="bg-slate-50 border border-slate-100 rounded-3xl p-6.5 sm:p-8 flex flex-col md:flex-row gap-8 items-start hover:shadow-xl hover:border-teal-100 transition-all duration-300 relative group text-left"
              id={`dentist-card-${dentist.id}`}
            >
              
              {/* Doctor Avatar Portrait container */}
              <div className="w-full md:w-56 shrink-0 relative aspect-[3/4] md:aspect-auto md:h-72 rounded-2xl overflow-hidden bg-slate-200 border border-white shadow-md">
                <img
                  src={dentist.avatar}
                  alt={dentist.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Floating Award pill */}
                <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md text-[10px] text-white px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <Award size={10} className="text-teal-400" />
                  <span className="font-mono">Board Certified</span>
                </div>
              </div>

              {/* Doctor details */}
              <div className="flex flex-col justify-between h-full space-y-5">
                <div>
                  {/* Doctor Title */}
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-wide bg-teal-50 px-2 py-0.5 rounded">
                    {dentist.id === 'dr-sarah' ? 'Orthodontist' : 'Oral Surgeon'}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-2">
                    {dentist.name}
                  </h3>
                  
                  <p className="text-xs font-semibold text-slate-500 mt-1 leading-snug">
                    {dentist.title}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mt-3.5">
                    {dentist.bio}
                  </p>

                  {/* Specialties tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3.5">
                    {dentist.specialty.map((spec, index) => (
                      <span key={index} className="text-[10px] sm:text-xs font-medium text-slate-600 bg-white border border-slate-200/80 px-2.5 py-1 rounded-lg">
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Education details */}
                  <div className="pt-4 space-y-2">
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <GraduationCap size={12} />
                      <span>Education & Accreditations</span>
                    </p>
                    <ul className="space-y-1">
                      {dentist.education.map((edu, idx) => (
                        <li key={idx} className="text-xs text-slate-500 font-sans list-disc list-inside">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Grid controls */}
                <div className="pt-5 border-t border-slate-200/50 flex flex-wrap gap-3 items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-sans">
                    <Clock size={14} className="text-teal-500" />
                    <span>Next available: <span className="font-bold text-slate-700">{dentist.availability[0]}</span></span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenAskDoctor(dentist.name)}
                      className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-teal-600 border border-slate-200 hover:border-teal-200 bg-white rounded-xl transition-colors cursor-pointer"
                      id={`btn-ask-${dentist.id}`}
                    >
                      Ask Question
                    </button>
                    
                    <button
                      onClick={() => handleSelectDoctor(dentist.id)}
                      className="px-4.5 py-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-sm transition-all active:scale-95 cursor-pointer"
                      id={`btn-book-dentist-${dentist.id}`}
                    >
                      Book Session
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Ask a Doctor Modal Overlay */}
        {askDoctor.isOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6.5 sm:p-8 max-w-md w-full border border-slate-100 shadow-2xl relative text-left">
              <button 
                onClick={() => setAskDoctor(prev => ({ ...prev, isOpen: false }))}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl"
                id="btn-close-ask-doctor"
              >
                ✕
              </button>

              {askDoctor.submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-500 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800">Question Received!</h4>
                  <p className="text-sm text-slate-500">Dr. {askDoctor.doctorName.split(' ')[1]} is reviewing your question. We will respond to your email at <span className="font-bold">{askDoctor.email}</span> within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitQuestion} className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded">Digital Consult</span>
                    <h4 className="text-lg font-serif font-bold text-slate-900 mt-2">Ask {askDoctor.doctorName}</h4>
                    <p className="text-xs text-slate-500 leading-normal mt-1">Have a quick dental concern before booking? Drop your inquiry below and our doctors will answer directly.</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Your Email Address</label>
                      <input
                        type="email"
                        required
                        value={askDoctor.email}
                        onChange={(e) => setAskDoctor(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Your Medical/Dental Question</label>
                      <textarea
                        required
                        rows={4}
                        value={askDoctor.question}
                        onChange={(e) => setAskDoctor(prev => ({ ...prev, question: e.target.value }))}
                        placeholder="e.g., I have a slight sensitivity to cold drinks on my left upper molar, is this a cavity sign?"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    id="btn-submit-ask-doctor"
                  >
                    <Send size={14} />
                    <span>Send Message to Clinician</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
