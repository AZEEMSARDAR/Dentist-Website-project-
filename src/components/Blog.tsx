import { useState } from 'react';
import { BookOpen, Calendar, User, Clock, ArrowRight, Search, FileText, ChevronLeft, Sparkles } from 'lucide-react';
import { BlogPost } from '../types';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'whitening' | 'orthodontics' | 'implants' | 'pediatric'>('all');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 'blog-1',
      title: 'The Science of Teeth Whitening: In-Office Laser vs. Over-the-Counter Trays',
      slug: 'science-of-teeth-whitening',
      excerpt: 'Understand how peroxide concentrations and laser wavelengths interact with dental enamel to lift deep coffee and tetracycline staining safely.',
      content: `### The Mechanisms of Tooth Discoloration

To understand teeth whitening, we must first examine the anatomical structure of the tooth. The outer layer, the enamel, is made of highly dense hydroxyapatite crystals. Underneath the enamel lies dentin, which is naturally a darker, yellowish color. Tooth stains are categorized into two types:
1. **Extrinsic Stains**: Surface discoloration caused by dark pigments in coffee, red wine, tea, and tobacco. These pigments bind directly to the enamel pellicle.
2. **Intrinsic Stains**: Discoloration settled deep within the microscopic crystalline matrix of the dentin, often caused by aging, dental trauma, or childhood exposure to certain antibiotics like tetracycline.

### Over-the-Counter Trays vs. Professional Laser Systems

Most consumer retail teeth-whitening products utilize low concentrations of hydrogen peroxide or carbamide peroxide (typically between 3% to 10%). While these can lift some extrinsic stains over several weeks of continuous contact, they are largely ineffective against intrinsic dentin staining. Additionally, ill-fitting consumer trays run a high risk of leaking active bleaching gel onto delicate gingival tissues, causing painful chemical burns and tissue recession.

At **Bright Smile Dental Care**, our professional in-office system uses a premium **35% hydrogen peroxide gel** formulated with built-in desensitizing barriers. To activate the bleaching agents, we utilize a narrow-wavelength laser light. This laser acts as a catalyst, accelerates the chemical decomposition of peroxide into reactive oxygen molecules, and allows them to instantly penetrate deep into the dentin tubules. 

### Why Oxygen Molecules Are Key to Brightening

As the peroxide breaks down, the oxygen free radicals enter the microscopic organic pores of the enamel and dentin. They collide with large, complex carbon-based stain molecules, fracturing their double chemical bonds. This chemical process transforms the light-absorbing pigments into smaller, light-reflecting compounds. 

The clinical result? Your teeth reflect more light across the entire spectrum, appearing up to **8 shades brighter in a single, comfortable 45-minute treatment session**. Following the procedure, our clinicians apply a neutral-pH calcium phosphate paste to instantly reseal the dental tubules, eliminating the cold sensitivity commonly associated with discount bleaching systems.`,
      category: 'whitening',
      author: 'Dr. Sarah Mercer, D.D.S.',
      date: 'June 18, 2026',
      readTime: '4 min read',
      imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      tags: ['Teeth Whitening', 'Cosmetic Secrets', 'Dental Science']
    },
    {
      id: 'blog-2',
      title: 'Achieving Perfect Alignment: 5 Essential Tips for Invisalign® Success',
      slug: 'invisalign-success-tips',
      excerpt: 'Maximize the efficiency of your clear orthodontic aligners. Expert recommendations on seating, wear-time compliance, and active plaque mitigation.',
      content: `### Orthodontic Alignment Redefined

Invisalign has revolutionized orthodontic care by replacing metal brackets and wires with removable, medical-grade polyurethane clear aligner trays. Through precise computerized tooth-movement mapping, each consecutive aligner set exerts constant, calibrated bio-mechanical forces on specific teeth, prompting the underlying alveolar bone to reshape itself. 

However, unlike permanent metal brackets, the efficacy of clear aligner therapy relies heavily on clinical compliance and patient habits. To guarantee your treatment concludes on schedule, follow these five essential tips from our lead orthodontist, Dr. Sarah Mercer.

### 1. Maintain the Golden 22-Hour Wear Rule
For your bone structures to remodel, the teeth must be subjected to constant, uninterrupted orthodontic pressure. Removing your aligners for extended periods allows the periodontal ligaments to contract, resetting the biological tooth movement timers. You should only remove your aligners during eating, drinking hot liquids, and brushing.

### 2. Master the Aligner Seating with "Chewies"
For aligners to work, they must fit tightly over the micro-attachments bonded to your teeth. If there is even a 0.5mm gap between your tooth crown and the tray, the aligner will fail to direct forces accurately. Using "chewies" (soft, cylindrical plastic rollers) and biting on them for 2-3 minutes twice daily forces the aligner to fully seat, eliminating gaps and accelerating structural rotation.

### 3. Maintain Absolute Oral Hygiene 
When you wear aligners, you trap a thin layer of saliva against your teeth. If you do not brush and floss after meals before inserting the tray, you are sealing active plaque, sucrose, and bacteria directly against your enamel. This lack of oxygen and wash-away saliva creates a perfect breeding ground for aggressive tooth decay and acid-driven decalcification.

### 4. Protect Trays from Warm Water Deformity
Invisalign aligners are fabricated from a thermoplastic material that is highly sensitive to temperature variations. Never rinse or soak your trays in hot water, as it can cause the polyurethane matrix to warp instantly. A warped tray is useless and can introduce unwanted twisting forces, delaying your alignment timeline by weeks.

### 5. Never Skip Your Scheduled Aligner Tracking Checks
While you receive several aligner stages in advance, visiting our office every 6-8 weeks is critical. Our diagnostic 3D scans verify that teeth are "tracking" precisely as simulated. If a tooth falls behind its scheduled pathway, we must capture a new scan and request a refinement set to keep your smile alignment perfect.`,
      category: 'orthodontics',
      author: 'Dr. Sarah Mercer, D.D.S.',
      date: 'May 28, 2026',
      readTime: '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      tags: ['Invisalign', 'Orthodontics', 'Plaque Control']
    },
    {
      id: 'blog-3',
      title: 'The Patient Journey to Dental Implants: 3D Guided Guided Surgery',
      slug: 'patient-dental-implants-guide',
      excerpt: 'Demystifying the advanced surgical protocols of dental implant placements, from initial CBCT radiography to osseointegration and crown restoration.',
      content: `### The Evolution of Tooth Replacement

A missing tooth is more than an aesthetic concern; it presents a biological challenge. When a tooth is lost, the surrounding alveolar bone lacks physical stimulation from chewing forces. As a result, the body begins reabsorbing the minerals in the jawbone, leading to up to a 25% decrease in bone width within the first year alone. This can destabilize adjacent teeth and alter facial symmetry.

Dental implants represent the pinnacle of modern tooth replacement because they replicate the entire biological tooth structure—including the root. 

### Step 1: CBCT 3D Radiographic Planning
The foundation of a successful dental implant is high-resolution planning. At **Bright Smile Dental Care**, Dr. Marcus Vance utilizes **3D CBCT (Cone Beam Computed Tomography)** scans to compile a comprehensive, micrometer-accurate digital map of your jawbone, nerve endings, and sinuses. This allows us to digitally simulate the implant insertion before ever touching a physical tool, ensuring a safer and highly predictable outcome.

### Step 2: The Surgical Guide & Micro-Insertion
Using the CBCT digital map, we print a custom **3D surgical guide** that snaps onto your adjacent teeth. This medical guide features a cylinder pathway that locks the surgical drill to the exact depth, angle, and position mapped during planning. 

The titanium implant post is then gently threaded into the bone. Titanium is used because of its unique **biocompatible properties**. The surrounding bone tissue views the titanium as a natural material, prompting bone cells to migrate and bind directly to the implant surface. This magical biological fusion is known as **osseointegration**.

### Step 3: Healing and Osseointegration (3 to 6 Months)
Over the next few months, your bone heals snugly around the titanium thread. During this temporary healing phase, we provide a beautiful aesthetic tooth replacement so you can smile and eat with complete confidence. 

### Step 4: The Abutment & Custom Porcelain Restoration
Once osseointegration is fully verified, we place a small medical collar, called an **abutment**, onto the implant. Finally, we take an optical 3D scan and fabricate a beautiful, metal-free **Zirconia Crown** that is permanently secured to the abutment. 

The completed restoration matches your adjacent teeth in color, luster, and translucency, while restoring **100% of your bite force**. With standard oral hygiene and regular clinical checkups, a dental implant will last a lifetime.`,
      category: 'implants',
      author: 'Dr. Marcus Vance, D.M.D.',
      date: 'April 14, 2026',
      readTime: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      tags: ['Dental Implants', 'Oral Surgery', 'Biocompatibility']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'whitening', label: 'Cosmetic & Whitening' },
    { id: 'orthodontics', label: 'Orthodontics & Invisalign' },
    { id: 'implants', label: 'Implants & Surgery' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 lg:py-28 bg-white" id="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {readingPost ? (
          /* Reader View Layout */
          <div className="max-w-3xl mx-auto text-left space-y-6">
            <button 
              onClick={() => setReadingPost(null)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors mb-4 cursor-pointer"
              id="btn-blog-back"
            >
              <ChevronLeft size={16} />
              <span>Back to Articles</span>
            </button>

            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-2.5 py-1 rounded">
                {readingPost.category} Care
              </span>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight">
                {readingPost.title}
              </h1>

              {/* Author Metadata */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 font-sans border-b border-slate-100 pb-5">
                <div className="flex items-center gap-1.5">
                  <User size={14} className="text-teal-500" />
                  <span className="font-semibold text-slate-700">{readingPost.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>{readingPost.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>{readingPost.readTime}</span>
                </div>
              </div>
            </div>

            {/* Immersive Markdown-style HTML reader block with Playfair and Inter */}
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-sans text-sm sm:text-base space-y-5 pt-4">
              {readingPost.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-lg sm:text-xl font-serif font-bold text-slate-900 pt-4 pb-1">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ') || paragraph.startsWith('5. ')) {
                  const parts = paragraph.split('\n');
                  return (
                    <div key={index} className="space-y-2.5 pl-2 border-l-2 border-teal-500/40 my-4">
                      {parts.map((p, idx) => (
                        <p key={idx} className="font-sans text-slate-600 leading-normal">
                          {p}
                        </p>
                      ))}
                    </div>
                  );
                }
                return (
                  <p key={index} className="font-sans leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Bottom Back Button */}
            <div className="pt-10 border-t border-slate-100 flex justify-between items-center">
              <button 
                onClick={() => setReadingPost(null)}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition-all"
              >
                Return to Blog Listing
              </button>
              
              <span className="text-xs text-slate-400 font-mono">Published by Bright Smile Clinical Team</span>
            </div>
          </div>
        ) : (
          /* Blog Grid Directory */
          <div className="space-y-12">
            
            {/* Directory Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200/60">
              <div className="text-left space-y-2">
                <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">Educational Center</span>
                <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 tracking-tight">Clinical Articles & Hygiene Insights</h2>
                <p className="text-sm sm:text-base text-slate-500 max-w-2xl">
                  Deepen your understanding of modern dentistry. We share evidence-based guides, anatomical reviews, and clear answers to advanced treatment inquiries.
                </p>
              </div>

              {/* Filters & Search */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="text"
                    placeholder="Search dental topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-xs sm:text-sm font-sans"
                    id="input-blog-search"
                  />
                </div>
              </div>
            </div>

            {/* Category selection */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-50 border border-slate-100 text-slate-600 hover:text-teal-600 hover:bg-white'
                  }`}
                  id={`btn-blog-filter-${cat.id}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Articles Grid list */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="bg-white border border-slate-100 rounded-3xl p-5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
                    onClick={() => setReadingPost(post)}
                    id={`blog-card-${post.id}`}
                  >
                    <div>
                      {/* Decorative placeholder header with color matching */}
                      <div className="w-full h-44 rounded-2xl bg-teal-50 border border-teal-100/30 flex items-center justify-center mb-5 relative overflow-hidden group-hover:scale-101 transition-transform">
                        <FileText size={40} className="text-teal-400 opacity-60 animate-pulse" />
                        <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-[10px] font-mono text-white px-2.5 py-1 rounded-lg">
                          {post.category.toUpperCase()} CARE
                        </span>
                      </div>

                      {/* Header metadata */}
                      <div className="flex items-center gap-3 text-xs text-slate-400 font-sans mb-3">
                        <span className="font-semibold text-slate-600">{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed mt-2.5 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer link */}
                    <div className="pt-5 border-t border-slate-100/80 flex items-center justify-between mt-6">
                      <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">{post.date}</span>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setReadingPost(post);
                        }}
                        className="flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors cursor-pointer"
                        id={`btn-read-post-${post.id}`}
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-100 max-w-md mx-auto">
                <BookOpen className="text-slate-300 mx-auto mb-4" size={32} />
                <p className="text-slate-500 font-medium">No dental health guides found matching your terms.</p>
                <button 
                  onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }} 
                  className="text-teal-500 font-bold hover:underline text-sm mt-1"
                >
                  Clear search filters
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
