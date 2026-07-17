import { Star, Mail, MapPin, Phone, Clock, Facebook, Instagram, Twitter, ExternalLink, Sparkles } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setCurrentTab: (tab: ActiveTab) => void;
}

export default function Footer({ setCurrentTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-8" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Ratings */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentTab('home')}>
              <div className="w-9 h-9 rounded-lg bg-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
                <Sparkles size={18} />
              </div>
              <div className="flex items-center">
                <span className="font-sans font-bold text-lg text-white tracking-tight">Bright Smile</span>
                <span className="text-teal-400 font-bold text-lg ml-1">Dental</span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Experience the highest standard of luxury healthcare in the heart of San Francisco. Creating beautiful smiles with compassionate, elite-tier dentistry since 2012.
            </p>

            {/* Ratings */}
            <div className="pt-2">
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <span className="text-sm font-semibold text-white ml-2">4.9/5 Rating</span>
              </div>
              <p className="text-xs text-slate-500">Based on 1,248+ verified Google Reviews</p>
            </div>

            {/* Social media links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-teal-500 hover:text-white transition-all text-slate-400" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-teal-500 hover:text-white transition-all text-slate-400" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-teal-500 hover:text-white transition-all text-slate-400" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Hours & Emergencies */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
              <Clock size={16} className="text-teal-400" />
              <span>Office Hours</span>
            </h3>
            
            <div className="space-y-2.5 text-sm text-slate-400 font-sans">
              <div className="flex justify-between border-b border-slate-800/60 pb-1.5">
                <span>Monday - Thursday</span>
                <span className="text-slate-200">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/60 pb-1.5">
                <span>Friday</span>
                <span className="text-slate-200">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/60 pb-1.5">
                <span>Saturday</span>
                <span className="text-teal-400 font-medium">9:00 AM - 3:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-red-400 font-bold">24/7 Emergencies Only</span>
              </div>
            </div>

            <div className="p-3 bg-red-950/40 border border-red-900/40 rounded-xl">
              <p className="text-xs text-red-300 font-semibold mb-1">Emergency Service Line</p>
              <a href="tel:+18005550199" className="text-sm font-bold text-white hover:underline flex items-center gap-1.5">
                <Phone size={14} className="animate-bounce" />
                <span>(800) 555-0199</span>
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Useful Resources</h3>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <button onClick={() => setCurrentTab('services')} className="hover:text-teal-400 transition-colors text-slate-400 text-left">
                  Our Treatments & Pricing
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('financing')} className="hover:text-teal-400 transition-colors text-slate-400 text-left">
                  Insurance & Smart Financing
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('gallery')} className="hover:text-teal-400 transition-colors text-slate-400 text-left">
                  Smile Before & After Showcase
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('blog')} className="hover:text-teal-400 transition-colors text-slate-400 text-left">
                  Dental Health Blog & Articles
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('faq')} className="hover:text-teal-400 transition-colors text-slate-400 text-left">
                  Patient Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('contact')} className="hover:text-teal-400 transition-colors text-slate-400 text-left">
                  Clinic Location & Parking Info
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Digital Map Vector */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
              <MapPin size={16} className="text-teal-400" />
              <span>San Francisco Clinic</span>
            </h3>
            
            <div className="space-y-2 text-sm text-slate-400 font-sans">
              <p className="flex gap-2 items-start">
                <MapPin size={16} className="text-teal-500 shrink-0 mt-0.5" />
                <span>450 Sutter St, Suite 1200<br />San Francisco, CA 94108</span>
              </p>
              <p className="flex gap-2 items-center">
                <Mail size={16} className="text-teal-500 shrink-0" />
                <a href="mailto:care@brightsmiledental.com" className="hover:underline">care@brightsmiledental.com</a>
              </p>
            </div>

            {/* High-end Styled Interactive Digital Map Mock */}
            <div className="relative h-28 w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950/80 flex flex-col justify-between p-3 select-none group">
              {/* Decorative cyber grid mapping representation */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:12px_12px] opacity-60"></div>
              {/* Dynamic stylized custom coordinate overlay */}
              <div className="absolute top-2 right-2 text-[9px] font-mono text-slate-500">37.7892° N, 122.4081° W</div>
              
              {/* Custom Dental Icon Pin in center */}
              <div className="relative flex items-center justify-center h-full">
                <div className="absolute w-8 h-8 rounded-full bg-teal-500/20 animate-ping"></div>
                <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center text-white border border-teal-400 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                </div>
                <span className="absolute mt-7 text-[10px] font-sans font-semibold text-slate-300">Bright Smile Clinic</span>
              </div>

              {/* Action buttons overlaying map */}
              <div className="relative flex justify-between items-center bg-slate-900/90 rounded-lg px-2 py-1 border border-slate-800/80">
                <span className="text-[10px] text-slate-400">450 Sutter St, SF</span>
                <a 
                  href="https://maps.google.com/?q=450+Sutter+St+San+Francisco+CA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] text-teal-400 font-medium hover:underline flex items-center gap-1"
                >
                  <span>Directions</span>
                  <ExternalLink size={8} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1.5">
            <p className="text-sm font-semibold text-slate-200 tracking-wide">
              © 2026 Bright Smile Dental Care. All Rights Reserved.
            </p>
            <p className="text-xs text-slate-500 font-medium font-mono">
              Copyright © 2026 Azeem Ali.
            </p>
          </div>

          {/* Premium Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-sans font-medium">
            <button onClick={() => setCurrentTab('contact')} className="hover:text-teal-400 transition-colors duration-200 cursor-pointer">Privacy Policy</button>
            <button onClick={() => setCurrentTab('contact')} className="hover:text-teal-400 transition-colors duration-200 cursor-pointer">Terms of Service</button>
            <button onClick={() => setCurrentTab('contact')} className="hover:text-teal-400 transition-colors duration-200 cursor-pointer">Patient HIPAA Notice</button>
            <button onClick={() => setCurrentTab('faq')} className="hover:text-teal-400 transition-colors duration-200 cursor-pointer">Accessibility Statement</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
