'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, UserPlus, Search, Globe, Bell } from 'lucide-react';

const profiles = [
  { name: 'Dr. Sarah Chen', spec: 'Pediatric Optometry', loc: 'Singapore', online: true },
  { name: 'Dr. Raj Patel', spec: 'Cornea & Refractive', loc: 'India', online: true },
  { name: 'Dr. Emily Brooks', spec: 'Low Vision', loc: 'London', online: false },
  { name: 'Dr. Kenji Tanaka', spec: 'Glaucoma', loc: 'Tokyo', online: true },
  { name: 'Dr. Amira Hassan', spec: 'Contact Lens', loc: 'Dubai', online: false },
  { name: 'Dr. Carlos Rivera', spec: 'Binocular Vision', loc: 'Mexico City', online: true },
];

const feedMessages = [
  'Has anyone used the new OCT-A for retinal screening?',
  'Looking for collaborators on a myopia study',
  'Great session at the WCO conference today!',
  'New guidelines for pediatric eye exams published',
  'Sharing an interesting keratoconus case',
];

export default function FocuslinksDemo() {
  const [visibleProfiles, setVisibleProfiles] = useState(0);
  const [activeMsg, setActiveMsg] = useState(0);
  const [searchText, setSearchText] = useState('');
  const searchWords = ['pediatric', 'glaucoma', 'cornea', 'contact lens', 'refractive'];

  useEffect(() => {
    const t1 = setInterval(() => setVisibleProfiles((v) => (v < profiles.length ? v + 1 : v)), 600);
    const t2 = setInterval(() => setActiveMsg((v) => (v + 1) % feedMessages.length), 3000);
    const t3 = setInterval(() => {
      setSearchText((prev) => {
        const idx = searchWords.indexOf(prev);
        return searchWords[(idx + 1) % searchWords.length];
      });
    }, 2500);
    return () => { clearInterval(t1); clearInterval(t2); clearInterval(t3); };
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-neutral-900/80 overflow-hidden w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-neutral-900">
        <div className="flex items-center gap-3">
          <Globe className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-semibold text-white">Focuslinks</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Live</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Bell className="h-4 w-4 text-neutral-400" />
            <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          </div>
          <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white">Y</div>
        </div>
      </div>
      <div className="flex min-h-[220px]">
        <div className="w-52 border-r border-white/10 p-3 space-y-2 hidden sm:block">
          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/5">
            <Search className="h-3.5 w-3.5 text-neutral-500 shrink-0" />
            <span className="text-xs text-neutral-500 truncate transition-all duration-300">{searchText || 'Search optometrists...'}</span>
          </div>
          <div className="space-y-1.5 mt-2">
            {profiles.slice(0, visibleProfiles).map((p, i) => (
              <div key={i} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-300" style={{ opacity: Math.min(1, (visibleProfiles - i) * 0.5) }}>
                <div className="relative shrink-0">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-[9px] font-bold text-white">{p.name.split(' ').map(n => n[0]).join('')}</div>
                  {p.online && <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-neutral-900" />}
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-white truncate">{p.name}</div>
                  <div className="text-[9px] text-neutral-500 truncate">{p.spec}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 p-3">
          <div className="flex items-center gap-4 mb-3 px-2">
            <div className="flex items-center gap-1.5">
              <UserPlus className="h-3 w-3 text-emerald-400" />
              <span className="text-[10px] text-neutral-400">12.4K members</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-neutral-400">3,240 online</span>
            </div>
          </div>
          <div className="space-y-2">
            {feedMessages.map((msg, i) => (
              <div key={i} className={`flex items-start gap-2.5 p-2.5 rounded-lg border transition-all duration-500 ${i === activeMsg ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-transparent bg-white/[0.02]'}`}>
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-[8px] font-bold text-white shrink-0 mt-0.5">{profiles[i % profiles.length].name.split(' ').map(n => n[0]).join('')}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium text-white">{profiles[i % profiles.length].name}</span>
                    <span className="text-[9px] text-neutral-600">{i + 1}h ago</span>
                  </div>
                  <p className="text-[11px] text-neutral-300 mt-0.5 leading-relaxed">{msg}</p>
                  <button className="flex items-center gap-1 text-[9px] text-neutral-500 hover:text-emerald-400 transition-colors mt-1.5">
                    <MessageSquare className="h-2.5 w-2.5" /> Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5">
            <input type="text" placeholder="Share an update..." className="flex-1 bg-transparent text-xs text-neutral-300 placeholder:text-neutral-600 outline-none" readOnly />
            <button className="px-3 py-1 rounded-md bg-emerald-500 text-[10px] font-medium text-black">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
