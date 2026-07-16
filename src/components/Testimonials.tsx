import { useState } from 'react';
import { Star, MessageSquare, Check, ThumbsUp, Filter, Award, Smile } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'invisalign' | 'cosmetic' | 'implants' | 'general'>('all');

  const testimonialsData: Testimonial[] = [
    {
      id: 'test-1',
      patientName: 'Clarissa Montgomery',
      location: 'San Francisco, CA',
      rating: 5,
      treatment: 'Invisalign & Teeth Whitening',
      comment: 'Absolutely spectacular. Dr. Sarah designed my Invisalign clear aligners and finalized the treatment with the custom teeth whitening laser. I have gone from hides-her-smile to showing it off in every photograph. The clinic is incredibly beautiful and feels like a luxurious spa!',
      date: 'May 14, 2026',
      verified: true
    },
    {
      id: 'test-2',
      patientName: 'Richard Henderson',
      location: 'Oakland, CA',
      rating: 5,
      treatment: 'Dental Implants',
      comment: 'I was extremely terrified of dental procedures after a terrible childhood experience. Dr. Marcus Vance took his time, explained the entire guided surgical implant process, and executed it flawlessly. I felt zero pain. ZERO! If you need implants, do not go anywhere else.',
      date: 'June 2, 2026',
      verified: true
    },
    {
      id: 'test-3',
      patientName: 'Dr. Evelyn Carter',
      location: 'Berkeley, CA',
      rating: 5,
      treatment: 'Porcelain Veneers',
      comment: 'As a medical doctor myself, I maintain exceptionally high standards for clinical cleanliness and patient interactions. Bright Smile Dental exceeds every standard. The laser diagnostics are superb, and the porcelain veneer design is master-class. My colleagues rave about my teeth.',
      date: 'April 20, 2026',
      verified: true
    },
    {
      id: 'test-4',
      patientName: 'Matthew Albright',
      location: 'Marin County, CA',
      rating: 5,
      treatment: 'Pediatric Care & Cleanings',
      comment: 'Bringing my 6-year-old son to the dentist used to be an exhausting battle. The pediatric team at Bright Smile treated him with so much playfulness, let him watch his favorite cartoon on the ceiling, and gave him a beautiful prize kit. He is already asking when we are going back!',
      date: 'July 11, 2026',
      verified: true
    },
    {
      id: 'test-5',
      patientName: 'Sophia Lin',
      location: 'San Mateo, CA',
      rating: 5,
      treatment: 'Emergency Root Canal',
      comment: 'My tooth broke at 10:00 PM on a Friday with throbbing pain. I called their emergency line, and they saw me at 8:00 AM sharp on Saturday morning. Dr. Marcus did a root canal, relieved my intense pain instantly, and followed up with me via text on Sunday. Unparalleled hospitality!',
      date: 'June 28, 2026',
      verified: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Reviews' },
    { id: 'invisalign', label: 'Invisalign®' },
    { id: 'cosmetic', label: 'Cosmetic & Veneers' },
    { id: 'implants', label: 'Dental Implants' },
    { id: 'general', label: 'General & Preventative' }
  ];

  const filteredTestimonials = testimonialsData.filter(item => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'invisalign') return item.treatment.toLowerCase().includes('invisalign');
    if (selectedCategory === 'cosmetic') return item.treatment.toLowerCase().includes('veneer') || item.treatment.toLowerCase().includes('whitening');
    if (selectedCategory === 'implants') return item.treatment.toLowerCase().includes('implant');
    if (selectedCategory === 'general') return item.treatment.toLowerCase().includes('pediatric') || item.treatment.toLowerCase().includes('cleaning') || item.treatment.toLowerCase().includes('root');
    return true;
  });

  return (
    <section className="py-20 lg:py-28 bg-slate-50/50" id="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">Patient Voice</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            What Our Verified Patients <span className="italic font-medium text-teal-600">Are Saying</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-sans">
            Read authentic reviews from families, business executives, and medical professionals who trust Bright Smile Dental Care with their dental wellness.
          </p>
        </div>

        {/* Rating Breakdown & Summary Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Big aggregate stats card */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
            
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-teal-500/20">
                  G
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100">Google Rating Score</h4>
                  <p className="text-[10px] text-slate-400">Verified Clinic Listings</p>
                </div>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-serif font-bold text-white">4.9</span>
                <span className="text-slate-400 font-sans text-sm">/ 5.0 scale</span>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1.5 text-amber-400 mt-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-xs text-slate-400 mt-2 font-medium">Based on 1,248+ Patient Submissions</p>
            </div>

            <div className="pt-6 mt-8 border-t border-slate-800 flex items-center gap-3">
              <Award className="text-teal-400" size={24} />
              <p className="text-xs text-slate-300">
                Awarded <span className="font-semibold text-white">"Patient Choice Excellence"</span> in Northern California for 5 consecutive years.
              </p>
            </div>
          </div>

          {/* Breakdown percentage sliders */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6.5 sm:p-8 flex flex-col justify-center space-y-4 shadow-sm text-left">
            <h4 className="text-base font-bold text-slate-800 mb-2">Detailed Care Assessment</h4>
            
            <div className="space-y-3.5">
              {/* Stat 1 */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-medium text-slate-700 mb-1">
                  <span>Clinical Skill & Treatment Accuracy</span>
                  <span className="text-teal-600 font-bold">99.4%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-600 rounded-full" style={{ width: '99.4%' }}></div>
                </div>
              </div>
              
              {/* Stat 2 */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-medium text-slate-700 mb-1">
                  <span>Patient Safety & Sterilization Rigor</span>
                  <span className="text-teal-600 font-bold">100%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-600 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-medium text-slate-700 mb-1">
                  <span>Painless Treatment Comfort Experience</span>
                  <span className="text-teal-600 font-bold">98.8%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-600 rounded-full" style={{ width: '98.8%' }}></div>
                </div>
              </div>

              {/* Stat 4 */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-medium text-slate-700 mb-1">
                  <span>Transparency in Treatment Cost Planning</span>
                  <span className="text-teal-600 font-bold">97.6%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-600 rounded-full" style={{ width: '97.6%' }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Category selector menu */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-teal-600'
              }`}
              id={`btn-testimonial-filter-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((test) => (
            <div 
              key={test.id}
              className="bg-white border border-slate-100 p-6 sm:p-7 rounded-3xl text-left hover:shadow-xl hover:border-teal-100/50 transition-all duration-300 flex flex-col justify-between group"
              id={`testimonial-card-${test.id}`}
            >
              <div className="space-y-4">
                {/* Score and verification */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  
                  {test.verified && (
                    <div className="flex items-center gap-1 text-[10px] text-teal-600 bg-teal-50 font-mono font-bold px-2 py-0.5 rounded-full">
                      <Check size={10} className="stroke-[3px]" />
                      <span>Verified Patient</span>
                    </div>
                  )}
                </div>

                {/* Patient message */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans italic group-hover:text-slate-800 transition-colors">
                  "{test.comment}"
                </p>
              </div>

              {/* Patient metadata */}
              <div className="pt-5 border-t border-slate-100/80 flex items-center gap-3.5 mt-6">
                {/* Initials avatar circle */}
                <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs sm:text-sm border border-teal-100 shrink-0">
                  {test.patientName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800">{test.patientName}</h4>
                  <p className="text-[10px] text-slate-400 font-sans mt-0.5">
                    {test.treatment} • <span className="font-mono">{test.date}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Real-time patient review feedback prompt */}
        <div className="mt-16 p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-teal-500 shadow-md">
              <Smile size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Are you an active patient with us?</h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-normal mt-0.5">We appreciate you sharing your healing experience to help others choose the right clinical team.</p>
            </div>
          </div>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-sm hover:shadow transition-colors cursor-pointer shrink-0"
          >
            Leave a Google Review
          </a>
        </div>

      </div>
    </section>
  );
}
