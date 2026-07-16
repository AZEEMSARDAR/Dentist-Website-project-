import { useState } from 'react';
import { BadgePercent, Shield, Star, Check, HelpCircle, Landmark, Sparkles, ChevronRight } from 'lucide-react';
import { ActiveTab } from '../types';

interface FinancingProps {
  setCurrentTab: (tab: ActiveTab) => void;
}

export default function Financing({ setCurrentTab }: FinancingProps) {
  const [selectedTreatment, setSelectedTreatment] = useState('invisalign');
  const [hasInsurance, setHasInsurance] = useState(true);
  const [termMonths, setTermMonths] = useState(12);

  const treatmentFinances: Record<string, { name: string; cost: number; insCoverage: number; cosmetic: boolean }> = {
    'gen-care': { name: 'Routine Care (Exam, X-Ray & Cleaning)', cost: 250, insCoverage: 0.8, cosmetic: false },
    'invisalign': { name: 'Invisalign® Clear Aligners', cost: 4500, insCoverage: 0.3, cosmetic: false },
    'whitening': { name: 'Professional Teeth Whitening', cost: 450, insCoverage: 0.0, cosmetic: true },
    'veneers': { name: 'Porcelain Veneers (per tooth)', cost: 1200, insCoverage: 0.0, cosmetic: true },
    'root-canal': { name: 'Root Canal Therapy', cost: 950, insCoverage: 0.5, cosmetic: false },
    'crowns': { name: 'Porcelain Zirconia Crown', cost: 1100, insCoverage: 0.5, cosmetic: false }
  };

  const selectedData = treatmentFinances[selectedTreatment];
  
  // Calculations
  const totalCost = selectedData.cost;
  const estInsCoverage = hasInsurance ? Math.round(totalCost * selectedData.insCoverage) : 0;
  const remainingCost = totalCost - estInsCoverage;
  const monthlyPayment = Math.round(remainingCost / termMonths);

  const insuranceCompanies = [
    'Delta Dental', 'Aetna Dental', 'Cigna Healthcare', 'MetLife Dental',
    'Guardian Dental', 'Humana Choice', 'BlueCross BlueShield', 'UnitedHealthcare'
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50" id="financing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">Finances & Insurance</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            Transparent Pricing & <span className="italic font-medium text-teal-600">Smart Financing</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-sans">
            We believe that premium dental care should be accessible and financially stress-free. Learn about our accepted insurances, flexible monthly payment options, and our signature in-house clinic plan.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Block: Calculator (Col 7) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6.5 sm:p-8 shadow-xl text-left space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded">Interactive Cost Tool</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-2">Dental Payment Calculator</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-normal mt-1">Estimate your co-pay coverage, total out-of-pocket balance, and evaluate flexible monthly installments with our 0%-interest healthcare plans.</p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Field 1: Treatment Selection */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Select Your Treatment</label>
                <select
                  value={selectedTreatment}
                  onChange={(e) => setSelectedTreatment(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-sm font-medium text-slate-800 bg-white"
                  id="select-calc-treatment"
                >
                  {Object.entries(treatmentFinances).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 2: Insurance Toggle */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">Do you have participating Dental Insurance?</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setHasInsurance(true)}
                    className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                      hasInsurance 
                        ? 'bg-teal-50 border-teal-400 text-teal-700' 
                        : 'border-slate-200 text-slate-600 bg-white hover:border-slate-300'
                    }`}
                  >
                    Yes, I have insurance
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasInsurance(false)}
                    className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                      !hasInsurance 
                        ? 'bg-teal-50 border-teal-400 text-teal-700' 
                        : 'border-slate-200 text-slate-600 bg-white hover:border-slate-300'
                    }`}
                  >
                    No, I am self-pay
                  </button>
                </div>
              </div>

              {/* Field 3: Payment Term slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700">Installment Term (0% APR Plan)</label>
                  <span className="text-xs font-mono text-teal-600 font-bold">{termMonths} Months Interest-Free</span>
                </div>
                <div className="flex gap-2">
                  {[6, 12, 18, 24].map(months => (
                    <button
                      key={months}
                      type="button"
                      onClick={() => setTermMonths(months)}
                      className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                        termMonths === months
                          ? 'bg-slate-900 border-slate-950 text-white shadow-sm'
                          : 'border-slate-200 text-slate-600 bg-white hover:border-slate-300'
                      }`}
                    >
                      {months} Mo
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100/80 space-y-3">
              <div className="flex justify-between text-xs sm:text-sm text-slate-500 border-b border-slate-200/40 pb-2">
                <span>Estimated Procedure Retail Cost:</span>
                <span className="font-bold text-slate-800">${totalCost.toLocaleString()}</span>
              </div>
              
              {hasInsurance && selectedData.insCoverage > 0 ? (
                <div className="flex justify-between text-xs sm:text-sm text-slate-500 border-b border-slate-200/40 pb-2">
                  <span className="flex items-center gap-1">
                    <Shield size={14} className="text-teal-500" />
                    <span>Est. Insurance Co-Pay Coverage (~{(selectedData.insCoverage * 100)}%):</span>
                  </span>
                  <span className="font-bold text-teal-600">-${estInsCoverage.toLocaleString()}</span>
                </div>
              ) : hasInsurance && selectedData.cosmetic ? (
                <div className="flex justify-between text-xs text-red-600 border-b border-slate-200/40 pb-2 leading-relaxed">
                  <span>⚠️ Cosmetic procedures are typically not covered by standard dental insurance policies.</span>
                  <span className="font-bold shrink-0">$0</span>
                </div>
              ) : null}

              <div className="flex justify-between text-sm font-bold text-slate-800 border-b border-slate-200/60 pb-3">
                <span>Estimated Patient Out-of-Pocket Cost:</span>
                <span>${remainingCost.toLocaleString()}</span>
              </div>

              {/* Monthly Cost Large Visual */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="text-[10px] text-slate-400 font-mono uppercase">Financing Option (0% APR)</p>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    ${monthlyPayment}<span className="text-xs sm:text-sm text-slate-500 font-normal"> / mo</span>
                  </p>
                </div>

                <button
                  onClick={() => setCurrentTab('book')}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm px-4.5 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm"
                  id="btn-book-financing"
                >
                  Schedule Treatment
                </button>
              </div>
              <p className="text-[10px] text-slate-400 font-sans leading-none pt-2 text-center">Calculations are educational estimates. Subject to soft credit verification via CareCredit® or Cherry® financing.</p>
            </div>
          </div>

          {/* Right Block: Insurance & membership specs (Col 5) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Accepted carriers */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                <Landmark className="text-teal-500" size={20} />
                <span>Accepted Insurance Plans</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                We are in-network preferred providers with 95% of major PPO dental insurances. Our in-house billing team files all claims on your behalf to minimize out-of-pocket costs.
              </p>
              
              <div className="grid grid-cols-2 gap-2">
                {insuranceCompanies.map((carrier, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white border border-slate-100 p-2.5 rounded-xl">
                    <Check className="text-teal-500 shrink-0" size={14} />
                    <span className="text-xs sm:text-sm font-medium text-slate-700">{carrier}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* In-house membership program */}
            <div className="p-6.5 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden space-y-5">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-center gap-2">
                <BadgePercent className="text-teal-400 animate-pulse" size={24} />
                <h4 className="text-base font-bold text-white uppercase tracking-wider">In-House Wellness Club</h4>
              </div>

              <div>
                <p className="text-2xl font-serif font-bold text-white">$349<span className="text-xs text-slate-400 font-normal font-sans"> / year</span></p>
                <p className="text-xs text-slate-400 mt-1">No insurance? No problem. Our club covers all preventative needs with zero waiting periods, deductibles, or pre-authorizations.</p>
              </div>

              <div className="space-y-2 border-t border-slate-800 pt-4 text-xs font-sans text-slate-300">
                <div className="flex gap-2 items-center">
                  <Check className="text-teal-400 shrink-0" size={14} />
                  <span>2 Professional Cleanings & Calculus Removals</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Check className="text-teal-400 shrink-0" size={14} />
                  <span>Unlimited Diagnostics Exams & 3D Imaging Scans</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Check className="text-teal-400 shrink-0" size={14} />
                  <span>15% Flat Discount on all cosmetic & restorative care</span>
                </div>
              </div>

              <button
                onClick={() => setCurrentTab('book')}
                className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
                id="btn-join-club"
              >
                <span>Join Wellness Club</span>
                <ChevronRight size={14} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
