import { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, Heart, Shield, Award, Sparkles } from 'lucide-react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'insurance' | 'cosmetic' | 'emergency'>('all');

  const faqItems: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Do you offer pain-free treatments? I have intense dental anxiety.',
      answer: 'Yes, absolutely! We specialize in dental anxiety management. Our office provides a luxury wellness retreat setup with customized noise-canceling headphones, warm blankets, and streaming entertainment on ceiling-mounted displays. For clinical procedures, we utilize state-of-the-art water-cooled dental lasers that replace noisy drills for tissue adjustments. If requested, we offer comfortable local anesthetics applied with a computer-regulated wand that eliminates needle pressure completely.',
      category: 'general'
    },
    {
      id: 'faq-2',
      question: 'Will my dental insurance cover Invisalign clear aligners or cosmetic procedures?',
      answer: 'General rule: Routine examinations, diagnostics scans, teeth cleanings, and structural repairs like root canals or zirconia crowns are covered at 50% to 80% under standard PPO insurance plans. Orthodontic treatments like Invisalign clear aligners typically have a lifetime flat coverage allowance (often around $1,500 to $2,500) which our office files directly. However, purely cosmetic procedures like laser teeth whitening and custom porcelain veneers are generally not covered by insurance. To assist with this, we offer interest-free 12-to-24-month CareCredit and Cherry financing installment structures.',
      category: 'insurance'
    },
    {
      id: 'faq-3',
      question: 'What constitutes a dental emergency, and how soon can I be seen?',
      answer: 'A dental emergency involves conditions that require immediate clinical intervention to control severe pain, arrest continuous bleeding, or preserve a knocked-out permanent tooth. This includes: throbbing severe toothaches, facial or gingival swelling, a fractured tooth exposing raw dental pulp, or a dislodged crown causing heavy pain. We guarantee same-day walk-in priority sessions for emergencies. If an injury occurs after-hours, call our emergency hotline at (800) 555-0199 immediately; our board-certified surgeons are on-call 24/7.',
      category: 'emergency'
    },
    {
      id: 'faq-4',
      question: 'How long do porcelain veneers last, and do they stain over time?',
      answer: 'Our dental porcelain veneers are fabricated from high-grade Feldspathic porcelain or lithium disilicate (E-Max), which possess the exact light-refraction coefficient of natural tooth enamel. Because dental porcelain is non-porous, it is 100% resistant to surface discoloration from coffee, red wine, or tobacco. With standard home flossing and professional clinical hygiene checkups every 6 months, your custom veneers will comfortably last between 15 to 20 years before requiring structural review.',
      category: 'cosmetic'
    },
    {
      id: 'faq-5',
      question: 'How often should my family get professional cleanings and examinations?',
      answer: 'To prevent microscopic decay from entering dental dentin, the American Dental Association (ADA) recommends professional clinical examinations and preventative cleanings every 6 months. For patients with a historical risk of aggressive periodontal disease or bone-density recessions, we may recommend a customized hygiene interval of every 3 to 4 months. These cleanings remove hardened calculus scale that standard home toothbrushes cannot displace.',
      category: 'general'
    }
  ];

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'general', label: 'Anxiety & General' },
    { id: 'insurance', label: 'Cost & Insurance' },
    { id: 'cosmetic', label: 'Cosmetic Veneers' },
    { id: 'emergency', label: 'Emergencies' }
  ];

  const filteredItems = faqItems.filter(item => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center mb-14 space-y-4">
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">Help Center</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 tracking-tight">Patient Frequently Asked Questions</h2>
          <p className="text-sm sm:text-base text-slate-500 font-sans">
            Find immediate answers regarding clinical comfort, billing protocols, procedure timelines, and overnight emergency dentist appointments.
          </p>
        </div>

        {/* Filter categories tabs */}
        <div className="flex flex-wrap gap-1.5 justify-center mb-10 pb-4 border-b border-slate-200/50">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id as any);
                setOpenId(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-teal-600 hover:border-teal-100'
              }`}
              id={`btn-faq-cat-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions Container */}
        <div className="space-y-4">
          {filteredItems.map(item => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-teal-500 shadow-lg shadow-teal-500/5' 
                    : 'border-slate-100 shadow-sm hover:border-slate-200'
                }`}
                id={`faq-accordion-item-${item.id}`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-5 py-4.5 flex justify-between items-center gap-4 text-left transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                  id={`btn-faq-toggle-${item.id}`}
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {item.question}
                  </span>
                  
                  {/* Arrow Indicator */}
                  <ChevronDown 
                    size={18} 
                    className={`text-teal-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {/* Animated Drawer Body */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans text-left bg-teal-50/10">
                    {item.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic support footer */}
        <div className="mt-14 p-6 sm:p-8 bg-white border border-slate-100 rounded-3xl text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-500 flex items-center justify-center shrink-0 shadow-inner">
              <MessageSquare size={22} />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">Still have questions regarding treatments?</h4>
              <p className="text-xs text-slate-500 leading-normal mt-0.5">Contact our concierge patient care representatives for direct clinical answers.</p>
            </div>
          </div>
          <a
            href="mailto:care@brightsmiledental.com"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-sm transition-colors cursor-pointer shrink-0"
          >
            Email Patient Coordinator
          </a>
        </div>

      </div>
    </section>
  );
}
