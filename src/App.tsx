import { useState, useEffect } from 'react';
import { ActiveTab, Appointment } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Dentists from './components/Dentists';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Financing from './components/Financing';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import BookAppointment from './components/BookAppointment';
import AdminPortal from './components/AdminPortal';
import LiveChat from './components/LiveChat';
import { Calendar, PhoneCall, ArrowUp, ChevronRight, Award, Clock } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<ActiveTab>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('gen-dent');
  const [selectedDentistId, setSelectedDentistId] = useState<string>('any');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Centralized state of booked appointments (hydrated from localStorage or default list)
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Monitor scroll for Back-to-Top & mobile floating CTAs
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pre-load default mock records on mount so the Staff Portal doesn't look barren
  useEffect(() => {
    const stored = localStorage.getItem('bright_smile_appointments');
    if (stored) {
      setAppointments(JSON.parse(stored));
    } else {
      const defaults: Appointment[] = [
        {
          id: 'APP-10482',
          fullName: 'Clarissa Montgomery',
          email: 'clarissa.m@example.com',
          phone: '(415) 555-0145',
          preferredDate: '2026-07-20',
          preferredTime: '10:00 AM',
          serviceId: 'invisalign',
          dentistId: 'dr-sarah',
          message: 'Excited to begin my clear aligners checkup! Let me know if you received my Delta Dental insurance pre-approval.',
          status: 'confirmed',
          createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
          isUrgent: false
        },
        {
          id: 'APP-30491',
          fullName: 'Richard Henderson',
          email: 'rich.h@example.com',
          phone: '(510) 555-0199',
          preferredDate: '2026-07-22',
          preferredTime: '02:00 PM',
          serviceId: 'implants',
          dentistId: 'dr-marcus',
          message: 'Scheduled my first dental titanium implant post placement procedure. Preparing bone metrics.',
          status: 'pending',
          createdAt: new Date(Date.now() - 36000000).toISOString(),
          isUrgent: false
        },
        {
          id: 'APP-50921',
          fullName: 'Sophia Lin',
          email: 'sophia.lin@example.com',
          phone: '(650) 555-0182',
          preferredDate: '2026-07-17',
          preferredTime: '08:00 AM',
          serviceId: 'emergency',
          dentistId: 'dr-marcus',
          message: 'URGENT: Broke upper molar while eating, experiencing sharp throbbing pain. Need immediate help.',
          status: 'pending',
          createdAt: new Date().toISOString(),
          isUrgent: true
        }
      ];
      setAppointments(defaults);
      localStorage.setItem('bright_smile_appointments', JSON.stringify(defaults));
    }
  }, []);

  const handleAddAppointment = (app: Appointment) => {
    const updated = [app, ...appointments];
    setAppointments(updated);
    localStorage.setItem('bright_smile_appointments', JSON.stringify(updated));
  };

  const handleUpdateStatus = (id: string, status: Appointment['status']) => {
    const updated = appointments.map(app => 
      app.id === id ? { ...app, status } : app
    );
    setAppointments(updated);
    localStorage.setItem('bright_smile_appointments', JSON.stringify(updated));
  };

  const handleClearAll = () => {
    setAppointments([]);
    localStorage.removeItem('bright_smile_appointments');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dedicated Tab Renders
  const renderTabContent = () => {
    switch (currentTab) {
      case 'about':
        return <About setCurrentTab={setCurrentTab} />;
      case 'services':
        return <Services setSelectedServiceId={setSelectedServiceId} setCurrentTab={setCurrentTab} />;
      case 'dentists':
        return <Dentists setSelectedDentistId={setSelectedDentistId} setCurrentTab={setCurrentTab} />;
      case 'testimonials':
        return <Testimonials />;
      case 'gallery':
        return <Gallery />;
      case 'financing':
        return <Financing setCurrentTab={setCurrentTab} />;
      case 'blog':
        return <Blog />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      case 'book':
        return (
          <BookAppointment
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
            selectedDentistId={selectedDentistId}
            setSelectedDentistId={setSelectedDentistId}
            onAddAppointment={handleAddAppointment}
            setCurrentTab={setCurrentTab}
          />
        );
      case 'admin':
        return (
          <AdminPortal
            appointments={appointments}
            onUpdateStatus={handleUpdateStatus}
            onClearAll={handleClearAll}
          />
        );
      case 'home':
      default:
        return (
          <>
            {/* Hero Main */}
            <Hero setCurrentTab={setCurrentTab} />

            {/* Quick value proposition teaser */}
            <div className="bg-slate-900 text-white py-12 border-y border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="text-left space-y-1">
                  <span className="text-teal-400 font-bold uppercase tracking-wider text-xs">Healthcare Transparency</span>
                  <h3 className="text-xl sm:text-2xl font-serif text-white">We accept 95% of major PPO insurances</h3>
                  <p className="text-xs sm:text-sm text-slate-400">Our administrative billing team files all claims directly to minimize co-pay balances.</p>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  <button 
                    onClick={() => setCurrentTab('financing')} 
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-xs sm:text-sm border border-slate-700 transition-colors cursor-pointer"
                  >
                    Check Insurance Carriers
                  </button>
                  <button 
                    onClick={() => setCurrentTab('book')} 
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Reserve Slot Now</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* General Highlights Preview Blocks */}
            <About setCurrentTab={setCurrentTab} />
            <Services setSelectedServiceId={setSelectedServiceId} setCurrentTab={setCurrentTab} />
            <Gallery />
            <Dentists setSelectedDentistId={setSelectedDentistId} setCurrentTab={setCurrentTab} />
            <Testimonials />
            <FAQ />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between" id="applet-viewport">
      
      {/* Sticky Navigation bar */}
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Dynamic Main view body */}
      <main className="flex-grow">
        {renderTabContent()}
      </main>

      {/* Footer block */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* Simulated Live Chat assistant */}
      <LiveChat setCurrentTab={setCurrentTab} />

      {/* FLOATING ACTION CTAS & BACK TO TOP BUTTONS */}
      
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-24 right-6 p-3 bg-white hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-700 rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer z-40 animate-fade-in"
          title="Back to Top"
          id="btn-back-to-top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Mobile Sticky Footer CTAs bar (Floating call/book shortcuts) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200/80 px-4 py-3 z-30 sm:hidden flex gap-3 shadow-2xl justify-between">
        <a
          href="tel:+18005550199"
          className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 rounded-xl text-xs transition-colors"
          id="mobile-sticky-call"
        >
          <PhoneCall size={14} className="text-teal-500 shrink-0" />
          <span>Call: (800) 555-0199</span>
        </a>
        <button
          onClick={() => setCurrentTab('book')}
          className="flex-1 flex items-center justify-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 rounded-xl text-xs shadow-sm"
          id="mobile-sticky-book"
        >
          <Calendar size={14} className="shrink-0" />
          <span>Book Appointment</span>
        </button>
      </div>

    </div>
  );
}
