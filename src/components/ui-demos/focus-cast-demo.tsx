'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Heart, Share2, Headphones } from 'lucide-react';

const episodes = [
  { title: 'Myopia Management in 2025', host: 'Dr. Sarah Chen', duration: '42:18', listeners: '2.4K' },
  { title: 'Advances in OCT Interpretation', host: 'Dr. Raj Patel', duration: '38:05', listeners: '1.8K' },
  { title: 'Pediatric Eye Care Best Practices', host: 'Dr. Emily Brooks', duration: '45:30', listeners: '3.1K' },
];

export default function FocusCastDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeEp, setActiveEp] = useState(0);
  const [barHeights, setBarHeights] = useState<number[]>(Array(40).fill(4));

  useEffect(() => {
    if (!isPlaying) return;
    const t = setInterval(() => setProgress((v) => (v >= 100 ? 0 : v + 0.5)), 100);
    return () => clearInterval(t);
  }, [isPlaying]);

  useEffect(() => {
    const t = setInterval(() => {
      setBarHeights((prev) => prev.map((h) => (isPlaying ? Math.max(2, Math.min(20, h + (Math.random() - 0.5) * 8)) : Math.max(2, h * 0.9))));
    }, 150);
    return () => clearInterval(t);
  }, [isPlaying]);

  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Headphones className="h-4 w-4 text-orange-400" />
          <span className="text-sm font-semibold text-gray-900">Focus Cast</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">Coming Soon</span>
        </div>
      </div>

      <div className="flex min-h-[220px]">
        {/* Now Playing */}
        <div className="flex-1 p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] text-red-400 font-medium">LIVE NOW</span>
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-0.5">{episodes[activeEp].title}</h3>
          <p className="text-xs text-gray-500 mb-4">with {episodes[activeEp].host} &middot; {episodes[activeEp].listeners} listening</p>

          {/* Waveform */}
          <div className="flex items-end gap-[2px] h-12 mb-4 px-1">
            {barHeights.map((h, i) => {
              const pct = (i / barHeights.length) * 100;
              const played = pct < progress;
              return (
                <div
                  key={i}
                  className={`flex-1 rounded-sm transition-all duration-150 ${played ? 'bg-orange-500' : 'bg-gray-200'}`}
                  style={{ height: `${h}px` }}
                />
              );
            })}
          </div>

          {/* Progress */}
          <div className="w-full h-1 rounded-full bg-gray-100 mb-2">
            <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-100" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex items-center justify-between text-[10px] text-gray-400 mb-4">
            <span>{Math.floor(progress * 0.42)}:{String(Math.floor((progress * 25.2) % 60)).padStart(2, '0')}</span>
            <span>{episodes[activeEp].duration}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button onClick={() => setActiveEp((v) => (v - 1 + episodes.length) % episodes.length)} className="text-gray-500 hover:text-gray-900 transition-colors"><SkipBack className="h-4 w-4" /></button>
            <button onClick={() => setIsPlaying(!isPlaying)} className="p-3 rounded-full bg-orange-500 text-white hover:bg-orange-400 transition-colors">
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
            <button onClick={() => setActiveEp((v) => (v + 1) % episodes.length)} className="text-gray-500 hover:text-gray-900 transition-colors"><SkipForward className="h-4 w-4" /></button>
          </div>
        </div>

        {/* Episode List */}
        <div className="w-56 border-l border-gray-200 p-3 space-y-2 hidden sm:block">
          <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Up Next</span>
          {episodes.map((ep, i) => (
            <button key={i} onClick={() => { setActiveEp(i); setProgress(0); }} className={`w-full text-left p-2.5 rounded-lg border transition-all duration-300 ${i === activeEp ? 'border-orange-500/20 bg-orange-500/5' : 'border-transparent hover:bg-gray-50'}`}>
              <div className={`text-[11px] font-medium truncate ${i === activeEp ? 'text-orange-400' : 'text-gray-900'}`}>{ep.title}</div>
              <div className="text-[9px] text-gray-400 mt-0.5">{ep.host} &middot; {ep.duration}</div>
            </button>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <button className="flex items-center gap-1 text-[9px] text-gray-400 hover:text-red-400 transition-colors"><Heart className="h-3 w-3" /> Like</button>
            <button className="flex items-center gap-1 text-[9px] text-gray-400 hover:text-gray-900 transition-colors"><Share2 className="h-3 w-3" /> Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
