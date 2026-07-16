import { useState } from 'react';
import { Heart, Sparkles, Layers, Smile, Zap, ShieldCheck, Award, ShieldAlert, Baby, Search, Check, ChevronRight, HelpCircle } from 'lucide-react';
import { Service, ActiveTab } from '../types';

interface ServicesProps {
  setSelectedServiceId: (id: string) => void;
  setCurrentTab: (tab: ActiveTab) => void;
}

export default function Services({ setSelectedServiceId, setCurrentTab }: ServicesProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'cosmetic' | 'specialty' | 'pediatric'>('all');

  const servicesData: Service[] = [
    {
      id: 'gen-dent',
      name: 'General Dentistry',
      category: 'general',
      description: 'Comprehensive preventative care including routine exams, luxury high-frequency cleanings, advanced diagnostics, and decay protection.',
      benefits: ['Stops decay early', 'Removes deep plaque', 'Comprehensive cancer screenings', 'Strengthens tooth enamel'],
      duration: '45 - 60 mins',
      priceEstimate: 'From $150',
      iconName: 'heart'
    },
    {
      id: 'cos-dent',
      name: 'Cosmetic Dentistry',
      category: 'cosmetic',
      description: 'Artistic enhancement of your smile using high-grade composite bonding, aesthetic contours, and custom design mapping.',
      benefits: ['Fixes chips & gaps', 'Improves smile alignment', 'Boosts social confidence', 'Surgical precision design'],
      duration: '60 - 90 mins',
      priceEstimate: 'From $299',
      iconName: 'sparkles'
    },
    {
      id: 'implants',
      name: 'Dental Implants',
      category: 'specialty',
      description: 'State-of-the-art permanent tooth replacement with board-certified surgical precision, restoring 100% bite strength and natural aesthetics.',
      benefits: ['Feels & functions like real teeth', 'Prevents bone structure loss', 'Lasts a lifetime', 'No damage to surrounding teeth'],
      duration: '90 - 120 mins',
      priceEstimate: 'Consultation Required',
      iconName: 'layers'
    },
    {
      id: 'invisalign',
      name: 'Invisalign® Clear Aligners',
      category: 'cosmetic',
      description: 'Virtually invisible clear aligner therapy custom-molded to straighten your teeth comfortably without the clutter of metal brackets.',
      benefits: ['Removable for easy cleaning', 'No food restrictions', 'Shorter treatment duration', 'Subtle, clear design'],
      duration: '30 min checkups',
      priceEstimate: 'Payment plans from $99/mo',
      iconName: 'smile'
    },
    {
      id: 'whitening',
      name: 'Teeth Whitening',
      category: 'cosmetic',
      description: 'Professional in-office laser whitening. Safe, custom-shielded, and clinically proven to brighten enamel by up to 8 full shades.',
      benefits: ['Immediate, stunning results', 'Removes years of deep stains', 'Desensitizing seal applied', 'Safe for sensitive teeth'],
      duration: '60 mins',
      priceEstimate: 'From $399',
      iconName: 'zap'
    },
    {
      id: 'veneers',
      name: 'Porcelain Veneers',
      category: 'cosmetic',
      description: 'Wafer-thin, custom-fabricated dental porcelain shells bonded to the front of teeth for an instant Hollywood-standard transformation.',
      benefits: ['Stain-resistant porcelain', 'Perfect shape & color matching', 'Extremely durable', 'Minimal enamel prep required'],
      duration: 'Requires 2 visits',
      priceEstimate: 'Financing Available',
      iconName: 'sparkles'
    },
    {
      id: 'root-canal',
      name: 'Root Canal Therapy',
      category: 'specialty',
      description: 'Gentle, modern endodontic therapy using micro-rotary instruments to eliminate infection and preserve your natural tooth.',
      benefits: ['Relieves severe pain instantly', 'Saves natural tooth structure', 'Prevents spread of infection', 'Extremely high success rate'],
      duration: '60 - 90 mins',
      priceEstimate: 'From $800',
      iconName: 'shield-check'
    },
    {
      id: 'crowns',
      name: 'Crowns & Bridges',
      category: 'general',
      description: 'Premium metal-free porcelain crowns and bridges to restore integrity, color, and function to severely compromised teeth.',
      benefits: ['100% metal-free Zirconia', 'Blends with natural teeth', 'Restores proper chewing pressure', 'Reinforces weak structures'],
      duration: 'Requires 2 visits',
      priceEstimate: 'From $950',
      iconName: 'award'
    },
    {
      id: 'emergency',
      name: 'Emergency Dentistry',
      category: 'specialty',
      description: 'Immediate clinical response for severe pain, tooth extractions, facial swelling, trauma, or broken dental work.',
      benefits: ['24/7 Priority Helpline', 'Same-day walk-in guarantee', 'Immediate pain management', 'Board-certified surgeons on-call'],
      duration: 'Urgent response',
      priceEstimate: 'Varies with treatment',
      iconName: 'shield-alert'
    },
    {
      id: 'pediatric',
      name: 'Pediatric Dentistry',
      category: 'pediatric',
      description: 'Gentle, warm, and highly engaging dental care for children of all ages. Building beautiful hygiene habits with zero fear.',
      benefits: ['Fun, anxiety-free approach', 'Cavity-risk monitoring', 'Protective dental sealants', 'Habit counseling & advice'],
      duration: '30 - 45 mins',
      priceEstimate: 'From $120',
      iconName: 'baby'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart': return <Heart size={20} />;
      case 'sparkles': return <Sparkles size={20} />;
      case 'layers': return <Layers size={20} />;
      case 'smile': return <Smile size={20} />;
      case 'zap': return <Zap size={20} />;
      case 'shield-check': return <ShieldCheck size={20} />;
      case 'award': return <Award size={20} />;
      case 'shield-alert': return <ShieldAlert size={20} />;
      case 'baby': return <Baby size={20} />;
      default: return <HelpCircle size={20} />;
    }
  };

  const filteredServices = servicesData.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBookService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentTab('book');
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">Treatment Menu</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            Elite Dental Treatments <span className="italic font-medium text-teal-600">Tailored</span> for You
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-sans">
            Explore our state-of-the-art diagnostic and cosmetic procedures. We accept most dental insurance policies and offer flexible in-house payment solutions.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 pb-6 border-b border-slate-200/60">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
            {(['all', 'general', 'cosmetic', 'specialty', 'pediatric'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-teal-600 hover:border-teal-200'
                }`}
                id={`btn-filter-${cat}`}
              >
                {cat === 'all' ? 'All Treatments' : `${cat} Care`}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-sm font-sans text-slate-800"
              id="input-services-search"
            />
          </div>

        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className={`bg-white border p-6.5 rounded-3xl text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${
                  service.category === 'specialty' && service.id === 'emergency' 
                    ? 'border-red-100 hover:border-red-200' 
                    : 'border-slate-100 hover:border-teal-100'
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Visual Category Pill on card */}
                <div className="absolute top-6 right-6 text-[10px] font-mono uppercase tracking-wider font-semibold text-slate-400 bg-slate-50 px-2.5 py-0.5 rounded-full">
                  {service.category}
                </div>

                <div>
                  {/* Service Icon Container */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 shadow-inner ${
                    service.id === 'emergency'
                      ? 'bg-red-50 text-red-600'
                      : 'bg-teal-50 text-teal-600'
                  }`}>
                    {getIcon(service.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2.5">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans mb-5">
                    {service.description}
                  </p>

                  {/* Benefits checklist */}
                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex gap-2 items-start text-xs sm:text-sm text-slate-600 font-sans">
                        <Check className="text-teal-500 shrink-0 mt-0.5" size={14} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer and Call to Action */}
                <div className="pt-5 border-t border-slate-100/80 flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono uppercase leading-none">Est. Price</p>
                    <p className="text-sm font-bold text-slate-800 mt-1">{service.priceEstimate}</p>
                  </div>

                  <button
                    onClick={() => handleBookService(service.id)}
                    className="flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 hover:underline transition-colors cursor-pointer"
                    id={`btn-book-service-${service.id}`}
                  >
                    <span>Request Booking</span>
                    <ChevronRight size={14} />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 max-w-md mx-auto">
            <p className="text-slate-500 font-medium">No dental treatments matches your concern.</p>
            <button 
              onClick={() => { setSearchTerm(''); setActiveCategory('all'); }} 
              className="text-teal-500 font-bold hover:underline text-sm mt-2"
              id="btn-reset-services"
            >
              Show all services
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
