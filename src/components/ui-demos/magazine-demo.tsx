'use client';

import { useState, useEffect } from 'react';
import { Clock, TrendingUp, BookOpen, ChevronRight } from 'lucide-react';

const articles = [
  { title: 'Breakthrough: Gene Therapy Restores Vision in Patients with Inherited Retinal Disease', category: 'Research', time: '2h ago', hot: true },
  { title: 'New AI Tool Detects Diabetic Retinopathy with 98.5% Accuracy', category: 'Technology', time: '4h ago', hot: true },
  { title: 'WHO Updates Global Guidelines for Myopia Control in Children', category: 'Guidelines', time: '6h ago', hot: false },
  { title: 'Top 10 Clinical Pearls from AAO 2025 Conference', category: 'Conference', time: '8h ago', hot: false },
  { title: 'Understanding Neuro-Optometric Rehabilitation: A Comprehensive Review', category: 'Review', time: '12h ago', hot: false },
];

const tabs = ['For You', 'Research', 'Clinical', 'Technology', 'Industry'];

export default function MagazineDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleArticles, setVisibleArticles] = useState(0);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const t1 = setInterval(() => setVisibleArticles((v) => (v < articles.length ? v + 1 : 0)), 1200);
    const t2 = setInterval(() => {
      setActiveTab((v) => (v + 1) % tabs.length);
      setVisibleArticles(0);
    }, 8000);
    const t3 = setInterval(() => setReadProgress((v) => (v >= 100 ? 0 : v + 2)), 100);
    return () => { clearInterval(t1); clearInterval(t2); clearInterval(t3); };
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-neutral-900/80 overflow-hidden w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <BookOpen className="h-4 w-4 text-red-400" />
          <span className="text-sm font-semibold text-white">Focus Magazine</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">Daily</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-neutral-500">
          <Clock className="h-3 w-3" />
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 px-4 pt-3 overflow-x-auto">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => { setActiveTab(i); setVisibleArticles(0); }} className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all duration-300 ${i === activeTab ? 'bg-red-500 text-white font-medium' : 'text-neutral-400 hover:bg-white/5'}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="p-4 space-y-3">
        {/* Reading progress bar */}
        <div className="h-0.5 rounded-full bg-neutral-800 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-100" style={{ width: `${readProgress}%` }} />
        </div>

        {articles.map((a, i) => (
          <div
            key={i}
            className={`group p-3 rounded-xl border transition-all duration-500 cursor-pointer ${
              i < visibleArticles
                ? 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
                : 'border-transparent opacity-0'
            }`}
            style={{ transition: 'all 0.5s ease' }}
          >
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 font-medium">{a.category}</span>
                  {a.hot && (
                    <span className="flex items-center gap-0.5 text-[10px] text-orange-400">
                      <TrendingUp className="h-3 w-3" /> Trending
                    </span>
                  )}
                  <span className="text-[9px] text-neutral-600">{a.time}</span>
                </div>
                <h3 className="text-[13px] font-medium text-neutral-200 group-hover:text-white transition-colors leading-relaxed line-clamp-2">{a.title}</h3>
              </div>
              <ChevronRight className="h-4 w-4 text-neutral-600 group-hover:text-neutral-400 transition-colors shrink-0 mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}