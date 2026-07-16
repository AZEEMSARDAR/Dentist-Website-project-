import React, { useState } from 'react';
import { Sparkles, Trophy, Check, ArrowRight, Star, HelpCircle, Activity } from 'lucide-react';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCaseId, setActiveCaseId] = useState('case-1');

  const galleryCases: GalleryItem[] = [
    {
      id: 'case-1',
      title: 'Premium Laser Teeth Whitening',
      treatment: 'Teeth Whitening & Cleanings',
      description: 'A 45-minute in-office treatment completed in a single session. Removed severe coffee, tea, and tobacco discoloration, bringing the enamel up by 6 full shades.',
      beforeUrl: 'bg-amber-100/60 saturate-150 brightness-95', // simulated styles
      afterUrl: 'bg-white brightness-110 saturate-50',
      tags: ['Laser Whitening', 'Instant Results', 'Single Visit']
    },
    {
      id: 'case-2',
      title: 'Full Porcelain Veneer Makeover',
      treatment: 'Porcelain Veneers',
      description: 'Patient presented with heavy tooth chipping, minor structural gaps, and permanent internal discoloration. Six hand-crafted porcelain veneers were placed for a beautiful, symmetrical smile contour.',
      beforeUrl: 'scale-95 grayscale saturate-50 opacity-80',
      afterUrl: 'scale-100 font-bold saturate-100 border-teal-500',
      tags: ['Veneers', 'Symmetry Mapping', 'Aesthetic Contour']
    },
    {
      id: 'case-3',
      title: 'Invisalign® Clear Aligner Correction',
      treatment: 'Invisalign Aligners',
      description: 'Orthodontic correction of moderate crowding on the lower jaw and prominent diastema on upper incisors. Completed in 9 months with zero discomfort or metal brackets.',
      beforeUrl: 'skew-x-2 blur-[0.5px]',
      afterUrl: 'skew-x-0 font-bold',
      tags: ['Invisalign', 'Crowding Correction', '9-Month Duration']
    }
  ];

  const activeCase = galleryCases.find(c => c.id === activeCaseId) || galleryCases[0];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="py-20 lg:py-28 bg-white" id="gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">Smile Gallery</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            Our Before & After <span className="italic font-medium text-teal-600">Smile Makeovers</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-sans">
            Slide the divider to see the life-changing results of our state-of-the-art procedures. These are authentic case studies of Bright Smile patients.
          </p>
        </div>

        {/* Gallery Interactive Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Interactive Slide Viewer (Col 7) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* The Before/After Slider Container */}
            <div className="relative w-full max-w-xl aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 select-none bg-slate-50">
              
              {/* BEFORE LAYER (Underneath or left-sided) */}
              <div className="absolute inset-0 w-full h-full">
                {/* Visual representation of tooth smile cropped */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-tr from-amber-50 to-amber-100/50">
                  <div className="text-center space-y-4 max-w-xs">
                    <span className="text-[11px] font-mono font-bold text-amber-700 bg-amber-200/50 px-3 py-1 rounded-full uppercase tracking-wider">Before Treatment</span>
                    <div className="relative w-36 h-20 mx-auto bg-amber-100 rounded-2xl border-4 border-amber-200/60 flex items-center justify-center text-amber-500/80">
                      {/* Grid representation of stained teeth */}
                      <div className="grid grid-cols-8 gap-1 w-full h-10 px-2">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div key={i} className="h-full bg-amber-200/50 rounded-b-lg border border-amber-300/40"></div>
                        ))}
                      </div>
                    </div>
                    <h4 className="text-lg font-serif font-bold text-amber-950">Discolored & Misaligned</h4>
                    <p className="text-xs text-amber-800">Severe external coffee staining, minor chips, and tooth crowding present.</p>
                  </div>
                </div>
              </div>

              {/* AFTER LAYER (On top, width cropped by sliderPosition) */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                {/* Matches the container size exactly to keep background layout stable */}
                <div className="absolute inset-0 w-[576px] h-full flex flex-col items-center justify-center p-8 bg-teal-50/60 backdrop-blur-[0.5px]">
                  
                  {/* White glowing teeth mask representation */}
                  <div className="text-center space-y-4 max-w-xs">
                    <span className="text-[11px] font-mono font-bold text-teal-800 bg-teal-100 px-3 py-1 rounded-full uppercase tracking-wider">After Treatment</span>
                    <div className="relative w-36 h-20 mx-auto bg-white rounded-2xl border-4 border-teal-200/60 flex items-center justify-center text-teal-600 shadow-md">
                      {/* Grid representation of pristine white teeth */}
                      <div className="grid grid-cols-8 gap-1 w-full h-10 px-2">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div key={i} className="h-full bg-white rounded-b-lg border border-teal-100 shadow-inner shadow-teal-500/5"></div>
                        ))}
                      </div>
                      {/* Aesthetic sparkles */}
                      <Sparkles className="absolute top-1 right-1 text-teal-400 animate-pulse" size={12} />
                    </div>
                    <h4 className="text-lg font-serif font-bold text-teal-950">Bright & Restored</h4>
                    <p className="text-xs text-teal-800">Symmetrical porcelain bonding, structural alignment, and brightened enamel.</p>
                  </div>

                </div>
              </div>

              {/* SLIDER CONTROLLER HANDLE BAR */}
              <div 
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20 shadow-md flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg select-none">
                  ↔
                </div>
              </div>

              {/* Standard HTML Range slider laying on top to control */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Before and after slider"
              />

            </div>

            {/* Slide prompt */}
            <p className="text-xs text-slate-400 font-sans mt-4">
              ← Drag the slider back and forth to see the transformation →
            </p>
          </div>

          {/* Details card & Case studies index (Col 5) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">
              <Trophy size={14} />
              <span>Patient Case Studies</span>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight leading-none">
                Interactive Treatment Explorer
              </h3>
              <p className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
                Click on the cases below to view the specifics of each clinical makeover. Our team designs smile architectures based on individual bone metrics.
              </p>
            </div>

            {/* Cases Index Selector buttons */}
            <div className="space-y-3.5 pt-2">
              {galleryCases.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCaseId(c.id);
                    // Reset slider near middle to show both states
                    setSliderPosition(50);
                  }}
                  className={`w-full p-4 rounded-2xl border text-left flex items-start justify-between gap-4 transition-all duration-200 cursor-pointer ${
                    activeCaseId === c.id
                      ? 'border-teal-500 bg-teal-50/50 shadow-sm'
                      : 'border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-white'
                  }`}
                  id={`btn-case-select-${c.id}`}
                >
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider">{c.treatment}</h4>
                    <h5 className="text-sm sm:text-base font-bold text-slate-800 mt-1 leading-tight">{c.title}</h5>
                  </div>
                  <Check className={`shrink-0 mt-1 transition-all ${
                    activeCaseId === c.id ? 'text-teal-500 opacity-100' : 'text-slate-300 opacity-0'
                  }`} size={16} />
                </button>
              ))}
            </div>

            {/* Current active case details cards */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100/80">
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                <span className="font-bold text-slate-800">Case Assessment: </span>
                {activeCase.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mt-4">
                {activeCase.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-mono uppercase font-semibold text-teal-700 bg-teal-100/50 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
