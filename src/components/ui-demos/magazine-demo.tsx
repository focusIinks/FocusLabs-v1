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
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <BookOpen className="h-4 w-4 text-red-400" />
          <span className="text-sm font-semibold text-gray-900">Focus Magazine</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">Daily</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
          <Clock className="h-3 w-3" />
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 px-4 pt-3 overflow-x-auto">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => { setActiveTab(i); setVisibleArticles(0); }} className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all duration-300 ${i === activeTab ? 'bg-red-500 text-white font-medium' : 'text-gray-500 hover:bg-gray-50'}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="p-4 space-y-3">
        {/* Reading progress bar */}
        <div className="h-0.5 rounded-full bg-gray-100 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-100" style={{ width: `${readProgress}%` }} />
        </div>

        {articles.map((a, i) => (
          <div
            key={i}
            className={`group p-3 rounded-xl border transition-all duration-500 cursor-pointer ${
              i < visibleArticles
                ? 'border-gray-100 bg-gray-50/50 hover:border-gray-200 hover:bg-gray-50'
                : 'border-transparent opacity-0'
            }`}
            style={{ transition: 'all 0.5s ease' }}
          >
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 font-medium">{a.category}</span>
                  {a.hot && (
                    <span className="flex items-center gap-0.5 text-[10px] text-orange-400">
                      <TrendingUp className="h-3 w-3" /> Trending
                    </span>
                  )}
                  <span className="text-[9px] text-gray-300">{a.time}</span>
                </div>
                <h3 className="text-[13px] font-medium text-gray-700 group-hover:text-gray-900 transition-colors leading-relaxed line-clamp-2">{a.title}</h3>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-gray-500 transition-colors shrink-0 mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
