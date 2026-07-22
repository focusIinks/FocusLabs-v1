'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, BookOpen, Trophy, Target, Zap, GraduationCap } from 'lucide-react';

const topics = ['Retinal Anatomy', 'Corneal Topography', 'Binocular Vision', 'Ocular Pharmacology', 'Contact Lens Fitting'];
const question = 'Which layer of the retina is responsible for phototransduction?';
const options = ['Retinal Pigment Epithelium', 'Photoreceptor Layer', 'Inner Nuclear Layer', 'Ganglion Cell Layer'];
const correctIdx = 1;

export default function OptoscholarDemo() {
  const [selectedTopic, setSelectedTopic] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const progress = 65;
  const streak = 7;
  const [xp, setXp] = useState(2450);

  useEffect(() => {
    const t1 = setInterval(() => {
      setSelectedOpt((prev) => {
        if (prev === null) return 0;
        if (prev === 3) { setShowResult(true); return prev; }
        return prev + 1;
      });
    }, 1500);
    const t2 = setInterval(() => {
      setSelectedTopic((v) => (v + 1) % topics.length);
      setSelectedOpt(null);
      setShowResult(false);
      setXp((v) => v + 10);
    }, 8000);
    return () => { clearInterval(t1); clearInterval(t2); };
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-neutral-900/80 overflow-hidden w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-4 w-4 text-amber-400" />
          <span className="text-sm font-semibold text-white">Optoscholar</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">Beta</span>
        </div>
        <div className="flex items-center gap-3 text-[10px]">
          <div className="flex items-center gap-1 text-amber-400"><Zap className="h-3 w-3" /> {xp} XP</div>
          <div className="flex items-center gap-1 text-orange-400"><Target className="h-3 w-3" /> {streak} streak</div>
        </div>
      </div>
      <div className="flex min-h-[220px]">
        {/* Sidebar */}
        <div className="w-44 border-r border-white/10 p-3 space-y-3 hidden sm:block">
          <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">Topics</span>
          <div className="space-y-1">
            {topics.map((t, i) => (
              <button key={i} onClick={() => setSelectedTopic(i)} className={`w-full text-left text-[11px] px-2.5 py-2 rounded-lg transition-all ${i === selectedTopic ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'text-neutral-400 hover:bg-white/5'}`}>
                {t}
              </button>
            ))}
          </div>
          {/* Progress */}
          <div className="pt-2 border-t border-white/5">
            <div className="flex items-center justify-between text-[10px] mb-1.5">
              <span className="text-neutral-400">Progress</span>
              <span className="text-amber-400">{progress}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-neutral-800">
              <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
        {/* Quiz Area */}
        <div className="flex-1 p-4">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-3.5 w-3.5 text-neutral-400" />
            <span className="text-[11px] text-neutral-400">{topics[selectedTopic]} &middot; Q{selectedTopic * 5 + 3} of 50</span>
          </div>
          <p className="text-sm font-medium text-white mb-4 leading-relaxed">{question}</p>
          <div className="space-y-2">
            {options.map((opt, i) => {
              let cls = 'border-white/10 text-neutral-300 hover:bg-white/5 hover:border-white/20';
              if (showResult && i === correctIdx) cls = 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400';
              else if (showResult && selectedOpt === i && i !== correctIdx) cls = 'border-red-500/30 bg-red-500/10 text-red-400';
              else if (selectedOpt === i && !showResult) cls = 'border-amber-500/30 bg-amber-500/10 text-amber-400';
              return (
                <button key={i} onClick={() => setSelectedOpt(i)} className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-sm transition-all duration-300 flex items-center gap-3 ${cls}`}>
                  <span className="h-6 w-6 rounded-md border border-current/20 flex items-center justify-center text-xs shrink-0">{String.fromCharCode(65 + i)}</span>
                  {opt}
                  {showResult && i === correctIdx && <CheckCircle className="h-4 w-4 text-emerald-400 ml-auto shrink-0" />}
                  {showResult && selectedOpt === i && i !== correctIdx && <XCircle className="h-4 w-4 text-red-400 ml-auto shrink-0" />}
                </button>
              );
            })}
          </div>
          {showResult && (
            <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10 animate-in">
              <Trophy className="h-4 w-4 text-amber-400" />
              <span className="text-xs text-emerald-400">+10 XP &middot; Correct! The photoreceptor layer contains rods and cones.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}