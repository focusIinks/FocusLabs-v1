'use client';

import { useState, useEffect } from 'react';
import { RotateCcw, RotateCw, ArrowLeft, ArrowRight } from 'lucide-react';

const letters = ['H', 'O', 'V', 'T', 'C', 'D', 'E', 'F'];

export default function JccDemo() {
  const [axis, setAxis] = useState(90);
  const [power, setPower] = useState(-0.25);
  const [flipped, setFlipped] = useState(false);
  const [currentLetter, setCurrentLetter] = useState(0);
  const question = 'Which is better, 1 or 2?';
  const [phase, setPhase] = useState<'axis' | 'power'>('axis');

  useEffect(() => {
    const t1 = setInterval(() => setFlipped((v) => !v), 2000);
    const t2 = setInterval(() => {
      if (flipped) {
        setAxis((v) => v + 5);
        setPower((v) => v - 0.25);
      }
    }, 2000);
    const t3 = setInterval(() => setCurrentLetter((v) => (v + 1) % letters.length), 4000);
    const t4 = setInterval(() => setPhase((v) => (v === 'axis' ? 'power' : 'axis')), 6000);
    return () => { clearInterval(t1); clearInterval(t2); clearInterval(t3); clearInterval(t4); };
  }, [flipped]);

  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <RotateCcw className="h-4 w-4 text-pink-400" />
          <span className="text-sm font-semibold text-gray-900">JCC Simulator</span>
        </div>
        <span className="text-xs px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">{phase === 'axis' ? 'Axis Refinement' : 'Power Refinement'}</span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <span className="text-[10px] text-gray-400 block">Lens 1</span>
            <div className="flex items-center gap-1 mt-1">
              <RotateCcw className="h-3 w-3 text-pink-400" />
              <span className="text-xs text-gray-900 font-mono">{axis}° / {power}D</span>
            </div>
          </div>
          <div className={`text-xs px-2 py-1 rounded font-medium transition-all duration-300 ${flipped ? 'bg-pink-500/20 text-pink-400' : 'bg-gray-100 text-gray-500'}`}>
            {flipped ? 'LENS 2' : 'LENS 1'}
          </div>
          <div className="text-center">
            <span className="text-[10px] text-gray-400 block">Lens 2</span>
            <div className="flex items-center gap-1 mt-1">
              <RotateCw className="h-3 w-3 text-pink-400" />
              <span className="text-xs text-gray-900 font-mono">{axis + 5}° / {power - 0.25}D</span>
            </div>
          </div>
        </div>

        {/* JCC Lens Visualization */}
        <div className={`relative w-40 h-40 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center transition-all duration-500 ${flipped ? 'bg-pink-500/5 border-pink-500/20' : 'bg-gray-50'}`}>
          {/* Cross cylinder lines */}
          <div className={`absolute w-full h-[1px] bg-gradient-to-r from-transparent via-pink-400 to-transparent transition-all duration-500 ${flipped ? 'rotate-45 opacity-60' : 'opacity-30'}`} />
          <div className={`absolute w-full h-[1px] bg-gradient-to-r from-transparent via-pink-400 to-transparent transition-all duration-500 ${flipped ? '-rotate-45 opacity-30' : 'opacity-60'}`} />
          {/* Plus/minus markers */}
          <div className={`absolute text-[10px] font-bold text-pink-400 transition-all duration-500 ${flipped ? '-top-3' : 'top-2'}`}>+</div>
          <div className={`absolute text-[10px] font-bold text-pink-400 transition-all duration-500 ${flipped ? 'bottom-1' : '-bottom-3'}`}>-</div>
          {/* Optotype */}
          <span className={`text-4xl font-bold transition-all duration-300 ${flipped ? 'text-pink-400' : 'text-gray-900'}`} style={{ filter: flipped ? 'blur(0.3px)' : 'none' }}>
            {letters[currentLetter]}
          </span>
        </div>

        <p className="text-center text-sm font-medium text-gray-900 mb-4">{question}</p>

        {/* Choice Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button className={`flex items-center gap-2 px-6 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 ${!flipped ? 'border-pink-500/30 bg-pink-500/10 text-pink-400' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
            <span>1</span>
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-400 hover:bg-gray-50 transition-colors">Same</button>
          <button className={`flex items-center gap-2 px-6 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 ${flipped ? 'border-pink-500/30 bg-pink-500/10 text-pink-400' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
            <ArrowRight className="h-4 w-4" />
            <span>2</span>
          </button>
        </div>
      </div>
    </div>
  );
}
