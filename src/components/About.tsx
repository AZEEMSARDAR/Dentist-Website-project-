import { Sparkles, Trophy, Award, CheckCircle2, Shield, HeartHandshake, Eye } from 'lucide-react';
import { ActiveTab } from '../types';

interface AboutProps {
  setCurrentTab: (tab: ActiveTab) => void;
}

export default function About({ setCurrentTab }: AboutProps) {
  const coreValues = [
    {
      icon: <HeartHandshake className="text-teal-500" size={24} />,
      title: "Patient-First Compassion",
      description: "We design everything around your absolute physical comfort and mental peace. Say goodbye to dental anxiety in our high-end, relaxing environment."
    },
    {
      icon: <Sparkles className="text-teal-500" size={24} />,
      title: "Next-Gen Innovation",
      description: "We invest heavily in the world's most advanced equipment, from low-radiation digital imaging to 3D scanner mapping, for flawless precision."
    },
    {
      icon: <Trophy className="text-teal-500" size={24} />,
      title: "Clinical Excellence",
      description: "Our doctors are board-certified leaders in general, cosmetic, and implant surgery, continuously advancing their methods with ADA-standard education."
    },
    {
      icon: <Shield className="text-teal-500" size={24} />,
      title: "Integrity & Ethics",
      description: "We believe in honest, transparent treatment planning. We only recommend procedures that actively serve your long-term wellness and vitality."
    }
  ];

  const techStack = [
    { name: "Itero® Element 5D Scanner", desc: "No more messy goop molds. We take instant, highly accurate 3D impressions." },
    { name: "3D CBCT Cone Beam Imaging", desc: "Provides safe, ultra-sharp 3D scans of jaws and nerves for high-precision implants." },
    { name: "Laser Dental Technology", desc: "Enables virtually painless tissue procedures with accelerated healing and zero drills." },
    { name: "Ultra-Low Radiation Digital X-Rays", desc: "Reduces radiation exposure by up to 90% while providing instant, high-contrast diagnostics." }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* About Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
              <Award size={14} />
              <span>Learn About Bright Smile Dental</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
              A New Standard of Luxury <span className="italic font-medium text-teal-600">Patient-Centered</span> Care
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              Founded in 2012 by Dr. Sarah Mercer, Bright Smile Dental Care was created with a clear, singular vision: to liberate patients from dental stress and deliver dental care of unmatched sophistication. 
            </p>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-sans">
              We understand that visiting the dentist is rarely an anticipated event. That is why we built a luxury retreat that feels more like an elite wellness spa than a clinical space. With warm ambient lighting, soundproof treatment suites, noise-canceling headphones, and customizable streaming services, you are completely in control.
            </p>

            {/* Certifications Row */}
            <div className="pt-4 border-t border-slate-100 space-y-4">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">Proud Active Members Of</p>
              <div className="flex flex-wrap items-center gap-6 text-slate-400">
                <div className="flex items-center gap-1.5 hover:text-teal-600 transition-colors">
                  <span className="font-serif font-bold text-sm tracking-tight">ADA</span>
                  <span className="text-[10px] uppercase font-sans">American Dental Association</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-teal-600 transition-colors">
                  <span className="font-serif font-bold text-sm tracking-tight">AACD</span>
                  <span className="text-[10px] uppercase font-sans">Cosmetic Dentistry Academy</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-teal-600 transition-colors">
                  <span className="font-serif font-bold text-sm tracking-tight">AGD</span>
                  <span className="text-[10px] uppercase font-sans">General Dentistry Academy</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setCurrentTab('book')}
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                id="about-cta-book"
              >
                Schedule Your Visit
              </button>
            </div>
          </div>

          {/* About Right visual box */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-teal-500/5 rounded-3xl blur-2xl -rotate-3"></div>
            
            <div className="relative border border-slate-100 bg-slate-50 rounded-3xl p-6 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600">
                  <Eye size={20} />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-slate-800">Advanced 3D Technology</h4>
                  <p className="text-xs text-slate-500">Every treatment is fully customized.</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-4 text-left">
                {techStack.map((tech, idx) => (
                  <div key={idx} className="flex gap-3 bg-white p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="text-teal-500 shrink-0 mt-0.5">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-800">{tech.name}</h5>
                      <p className="text-xs text-slate-500 mt-1">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Our Values section */}
        <div className="pt-16 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">Core Principles</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-slate-900">The Values That Shape Our Care</h3>
            <p className="text-sm sm:text-base text-slate-500">We hold ourselves to an absolute standard of honesty, care, and quality for every patient.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-left hover:bg-white hover:shadow-xl hover:border-teal-100 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-500 group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-300">
                  {value.icon}
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2">{value.title}</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
