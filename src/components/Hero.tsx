import { useState, useEffect } from 'react';
import { Calendar, Phone, Star, Sparkles, Shield, Trophy, Activity, CheckCircle2 } from 'lucide-react';
import { ActiveTab } from '../types';

interface HeroProps {
  setCurrentTab: (tab: ActiveTab) => void;
}

export default function Hero({ setCurrentTab }: HeroProps) {
  // Counters states
  const [patientsCount, setPatientsCount] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);

  // Animate counters on load
  useEffect(() => {
    const patientsTarget = 15000;
    const experienceTarget = 15;
    const satisfactionTarget = 99;

    const duration = 1200; // ms
    const stepTime = 15;

    const patientsStep = Math.ceil(patientsTarget / (duration / stepTime));
    const experienceStep = Math.ceil(experienceTarget / (duration / stepTime)) || 1;
    const satisfactionStep = Math.ceil(satisfactionTarget / (duration / stepTime)) || 1;

    let currentPatients = 0;
    let currentExperience = 0;
    let currentSatisfaction = 0;

    const timer = setInterval(() => {
      let isDone = true;

      if (currentPatients < patientsTarget) {
        currentPatients = Math.min(currentPatients + patientsStep, patientsTarget);
        setPatientsCount(currentPatients);
        isDone = false;
      }

      if (currentExperience < experienceTarget) {
        currentExperience = Math.min(currentExperience + experienceStep, experienceTarget);
        setExperienceYears(currentExperience);
        isDone = false;
      }

      if (currentSatisfaction < satisfactionTarget) {
        currentSatisfaction = Math.min(currentSatisfaction + satisfactionStep, satisfactionTarget);
        setSatisfactionRate(currentSatisfaction);
        isDone = false;
      }

      if (isDone) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-slate-50" id="hero-section">
      {/* Visual background decorations omitted for minimalism */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 text-xs sm:text-sm text-teal-800 font-medium animate-fade-in shadow-sm">
              <Star className="text-teal-500 fill-teal-500 animate-pulse" size={14} />
              <span>Ranked #1 Dental Practice in San Francisco</span>
              <span className="hidden sm:inline bg-teal-500 text-white font-mono text-[10px] px-1.5 py-0.5 rounded ml-2 font-bold uppercase">Award Winner</span>
            </div>

            {/* Display Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-slate-900 leading-none">
                Your Trusted <span className="text-teal-600 font-bold">Family Dentist</span> in the USA
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-sans leading-relaxed max-w-2xl">
                Experience world-class, custom-tailored dentistry. Bright Smile Dental Care combines luxurious amenities with board-certified clinical expertise and revolutionary technology for a stress-free dental experience.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="flex items-center gap-2.5 text-slate-700">
                <CheckCircle2 className="text-teal-500 shrink-0" size={18} />
                <span className="text-sm font-medium">Invisalign® Preferred Provider</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <CheckCircle2 className="text-teal-500 shrink-0" size={18} />
                <span className="text-sm font-medium">State-of-the-Art 3D Dental Scanning</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <CheckCircle2 className="text-teal-500 shrink-0" size={18} />
                <span className="text-sm font-medium">Same-Day Emergency Appointments</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <CheckCircle2 className="text-teal-500 shrink-0" size={18} />
                <span className="text-sm font-medium">Most Dental Insurances Accepted</span>
              </div>
            </div>

            {/* Action buttons CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setCurrentTab('book')}
                className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-2xl text-base shadow-sm active:scale-95 transition-all duration-200 cursor-pointer group"
                id="hero-cta-book"
              >
                <Calendar size={20} className="group-hover:rotate-6 transition-transform" />
                <span>Book Appointment Online</span>
              </button>

              <a
                href="tel:+18005550199"
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold px-8 py-4 rounded-2xl text-base hover:border-slate-300 shadow-sm transition-all cursor-pointer"
                id="hero-cta-call"
              >
                <Phone size={18} className="text-teal-500 shrink-0" />
                <span>Call: (800) 555-0199</span>
              </a>
            </div>

            {/* Animated Counters / Live Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-lg">
              <div>
                <p className="text-3xl sm:text-4xl font-serif text-slate-900 font-bold">
                  {patientsCount.toLocaleString()}+
                </p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">
                  Happy Patients
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-serif text-slate-900 font-bold">
                  {experienceYears}+
                </p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">
                  Years of Service
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-serif text-slate-900 font-bold">
                  {satisfactionRate}%
                </p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Visual background highlights behind card */}
            <div className="absolute inset-0 bg-slate-100/50 rounded-3xl transform rotate-2"></div>
            
            {/* Main Visual Image Card */}
            <div className="relative border border-white/60 bg-white/70 backdrop-blur-md rounded-3xl p-4 sm:p-5 shadow-2xl shadow-teal-900/5 overflow-hidden">
              <div className="relative aspect-video sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 shadow-inner group">
                <img
                  src="/src/assets/images/hero_family_smile_1784189723725.jpg"
                  alt="Bright smiling family in a modern dental office"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Accent Badge - 5 Star Clinic */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl flex items-center gap-2 border border-teal-100 shadow-md">
                  <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white font-bold shrink-0">
                    G
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 text-amber-500">
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                    </div>
                    <p className="text-[10px] font-sans font-bold text-slate-800 leading-none mt-0.5">Google Top Clinic</p>
                  </div>
                </div>

                {/* Floating Modern Healthcare Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl text-slate-800 border border-slate-200/60 flex items-center justify-between gap-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                      <Shield size={20} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-slate-900">Advanced Safety Protocols</p>
                      <p className="text-[10px] text-slate-500 font-sans">FDA-Cleared Sterilization & Air Filtration</p>
                    </div>
                  </div>
                  <Trophy className="text-teal-600 shrink-0" size={20} />
                </div>
              </div>
            </div>

            {/* Quick emergency access pill below image */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-red-50 border border-red-100 rounded-2xl p-4 shadow-lg shadow-red-900/5 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-semibold">
                <Activity size={20} className="animate-pulse" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-red-800 uppercase tracking-wide">Emergency Priority</p>
                <p className="text-[11px] text-slate-500">Severe toothache, trauma, or swelling? We accept same-day walk-ins.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
