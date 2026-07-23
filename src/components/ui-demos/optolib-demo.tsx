'use client';

import { useState, useEffect } from 'react';
import { Search, BookOpen, Download, Star, Eye, FileText } from 'lucide-react';

const books = [
  { title: 'Clinical Optometry', author: 'Dr. Theodore Grosvenor', category: 'Clinical', pages: 482, rating: 4.9, readers: '12.4K' },
  { title: 'Binocular Vision & Orthoptics', author: 'Dr. Sandip Doshi', category: 'Binocular', pages: 320, rating: 4.7, readers: '8.2K' },
  { title: 'Ocular Anatomy & Physiology', author: 'Dr. Bruce Silver', category: 'Anatomy', pages: 556, rating: 4.8, readers: '15.1K' },
  { title: 'Contact Lens Practice', author: 'Dr. Anthony Phillips', category: 'Contact Lens', pages: 390, rating: 4.6, readers: '6.8K' },
  { title: 'Pediatric Optometry', author: 'Dr. Robert Duckman', category: 'Pediatric', pages: 275, rating: 4.5, readers: '4.3K' },
];

const categories = ['All', 'Clinical', 'Anatomy', 'Binocular', 'Contact Lens', 'Pediatric', 'Pharmacology'];

export default function OptoLibDemo() {
  const [activeCat, setActiveCat] = useState(0);
  const [searchActive, setSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);
  const searchTerms = ['retinal', 'glaucoma', 'refraction', 'cornea', 'myopia'];

  useEffect(() => {
    const t1 = setInterval(() => {
      setActiveCat((v) => (v + 1) % categories.length);
    }, 2500);
    const t2 = setInterval(() => {
      setSearchActive(true);
      setSearchTerm((prev) => {
        const idx = searchTerms.indexOf(prev);
        return searchTerms[(idx + 1) % searchTerms.length];
      });
      setTimeout(() => setSearchActive(false), 1500);
    }, 4000);
    return () => { clearInterval(t1); clearInterval(t2); };
  }, []);

  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <BookOpen className="h-4 w-4 text-teal-400" />
          <span className="text-sm font-semibold text-gray-900">OptoLib</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">500+ Resources</span>
        </div>
      </div>
      <div className="p-4">
        {/* Search Bar */}
        <div className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border mb-4 transition-all duration-300 ${searchActive ? 'border-teal-500/30 bg-teal-500/5' : 'border-gray-200 bg-gray-50'}`}>
          <Search className="h-4 w-4 text-gray-400" />
          <span className={`text-sm transition-all duration-300 ${searchTerm ? 'text-gray-900' : 'text-gray-400'}`}>{searchTerm || 'Search textbooks, papers, guidelines...'}</span>
          <kbd className="hidden sm:inline ml-auto text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-400 border border-gray-100">Ctrl+K</kbd>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
          {categories.map((c, i) => (
            <button key={i} onClick={() => setActiveCat(i)} className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all duration-300 ${i === activeCat ? 'bg-teal-500 text-black font-medium' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}>
              {c}
            </button>
          ))}
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {books.map((b, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredBook(i)}
              onMouseLeave={() => setHoveredBook(null)}
              className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${hoveredBook === i ? 'border-teal-500/20 bg-teal-500/5' : 'border-gray-100 bg-gray-50/50 hover:border-gray-200'}`}
            >
              <div className="flex items-start gap-3">
                <div className="h-12 w-9 rounded-md bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shrink-0">
                  <FileText className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-medium text-gray-900 truncate">{b.title}</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">{b.author}</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <div className="flex items-center gap-1 text-[9px] text-gray-500"><Star className="h-2.5 w-2.5 text-amber-400 fill-amber-400" /> {b.rating}</div>
                    <div className="flex items-center gap-1 text-[9px] text-gray-500"><Eye className="h-2.5 w-2.5" /> {b.readers}</div>
                    <div className="flex items-center gap-1 text-[9px] text-gray-500"><Download className="h-2.5 w-2.5" /> {b.pages}p</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
