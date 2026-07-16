import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Calendar, Lock, Sparkles, ChevronDown, Award } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  currentTab: ActiveTab;
  setCurrentTab: (tab: ActiveTab) => void;
}

export default function Navbar({ currentTab, setCurrentTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; tab: ActiveTab }[] = [
    { label: 'Home', tab: 'home' },
    { label: 'About Us', tab: 'about' },
    { label: 'Services', tab: 'services' },
    { label: 'Our Dentists', tab: 'dentists' },
    { label: 'Before & After', tab: 'gallery' },
    { label: 'Financing', tab: 'financing' },
    { label: 'Testimonials', tab: 'testimonials' },
    { label: 'Blog', tab: 'blog' },
    { label: 'FAQ', tab: 'faq' },
    { label: 'Contact', tab: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top emergency & announcements banner */}
      <div className="bg-red-600 text-white text-xs sm:text-sm py-2 px-4 flex justify-between items-center font-sans tracking-wide">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
          <span className="font-semibold">24/7 Dental Emergency Care:</span>
          <span className="hidden md:inline">Severe pain or broken tooth? We are open!</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+18005550199" className="flex items-center gap-1 font-bold hover:underline">
            <PhoneCall size={14} />
            <span>(800) 555-0199</span>
          </a>
          <button 
            onClick={() => setCurrentTab('admin')} 
            className="flex items-center gap-1.5 text-red-100 hover:text-white transition-colors bg-red-700 hover:bg-red-800 px-2 py-0.5 rounded text-xs border border-red-500 font-mono"
            title="Clinician Portal"
            id="btn-admin-portal-shortcut"
          >
            <Lock size={12} />
            <span>Staff Portal</span>
          </button>
        </div>
      </div>

      {/* Main glassmorphism navbar */}
      <div 
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-white/85 backdrop-blur-md shadow-lg border-slate-200/50 py-3' 
            : 'bg-white/40 backdrop-blur-sm border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo brand */}
          <div 
            onClick={() => { setCurrentTab('home'); setIsOpen(false); }} 
            className="flex items-center gap-2 cursor-pointer group"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300">
              <Sparkles size={20} className="animate-pulse" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="font-sans font-bold text-lg sm:text-xl text-slate-900 tracking-tight">Bright Smile</span>
                <span className="text-teal-500 font-bold text-lg sm:text-xl ml-1">Dental</span>
              </div>
              <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest leading-none">Luxury Care</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => setCurrentTab(item.tab)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentTab === item.tab
                    ? 'text-teal-600 bg-teal-50/80 font-semibold'
                    : 'text-slate-600 hover:text-teal-600 hover:bg-slate-100/50'
                }`}
                id={`nav-item-${item.tab}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setCurrentTab('book')}
              className={`flex items-center gap-2 bg-slate-900 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm active:scale-95 transition-all duration-200 cursor-pointer ${
                currentTab === 'book' ? 'ring-2 ring-teal-400 ring-offset-2' : ''
              }`}
              id="nav-cta-book"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setCurrentTab('book')}
              className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-lg"
              title="Book Appointment"
              id="nav-mobile-book-icon"
            >
              <Calendar size={18} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-teal-500 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
              id="btn-mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Responsive slide out) */}
      <div 
        className={`fixed inset-0 top-[88px] z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 w-80 max-w-full h-screen bg-white shadow-2xl p-6 transition-transform duration-300 ease-out flex flex-col justify-between pb-28 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Clinic Sections</h3>
            {navItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => {
                  setCurrentTab(item.tab);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  currentTab === item.tab
                    ? 'text-teal-600 bg-teal-50 font-bold border-l-4 border-teal-500 pl-3'
                    : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
                }`}
                id={`mobile-nav-${item.tab}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-6 flex flex-col gap-4">
            <div className="flex items-center gap-3 p-3 bg-teal-50/50 rounded-xl">
              <Award className="text-teal-500 shrink-0" size={20} />
              <div>
                <p className="text-xs font-semibold text-slate-800">5-Star Dental Practice</p>
                <p className="text-[11px] text-slate-500">Rated 4.9/5 by 1,200+ patients</p>
              </div>
            </div>
            
            <a
              href="tel:+18005550199"
              className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 rounded-xl text-sm transition-colors"
            >
              <PhoneCall size={16} />
              <span>Call Us: (800) 555-0199</span>
            </a>
            
            <button
              onClick={() => {
                setCurrentTab('book');
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold py-3 rounded-xl text-sm shadow-sm hover:bg-teal-700"
              id="mobile-nav-cta-book"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
