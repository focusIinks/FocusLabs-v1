'use client';

import { useState, useEffect } from 'react';
import { Flashlight, RotateCcw } from 'lucide-react';

export default function RapdDemo() {
  const [step, setStep] = useState(0);
  const [leftPupil, setLeftPupil] = useState(8);
  const [rightPupil, setRightPupil] = useState(8);
  const [flashLeft, setFlashLeft] = useState(false);
  const [flashRight, setFlashRight] = useState(false);
  const [lightPos, setLightPos] = useState<'left' | 'center' | 'right'>('center');

  const steps = [
    { instruction: 'Shine light in LEFT eye', light: 'left' as const, left: 3, right: 8 },
    { instruction: 'Swing to RIGHT eye', light: 'right' as const, left: 8, right: 4 },
    { instruction: 'Swing back to LEFT eye', light: 'left' as const, left: 3, right: 8 },
    { instruction: 'Observe: Right pupil DILATES when light swings away — RAPD detected!', light: 'center' as const, left: 8, right: 8 },
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setStep((v) => (v + 1) % steps.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const s = steps[step];
    setLightPos(s.light);
    setFlashLeft(s.light === 'left');
    setFlashRight(s.light === 'right');
    const t1 = setTimeout(() => setLeftPupil(s.left), 400);
    const t2 = setTimeout(() => setRightPupil(s.right), 400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [step]);

  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Flashlight className="h-4 w-4 text-cyan-400" />
          <span className="text-sm font-semibold text-gray-900">RAPD Simulator</span>
        </div>
        <button className="flex items-center gap-1 text-[10px] text-cyan-400 hover:text-cyan-300"><RotateCcw className="h-3 w-3" /> Reset</button>
      </div>
      <div className="p-6">
        {/* Instruction */}
        <div className="text-center mb-6">
          <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Step {step + 1} of {steps.length}</span>
          <p className="text-sm font-medium text-gray-900 mt-2">{steps[step].instruction}</p>
        </div>

        {/* Eye Diagram */}
        <div className="relative flex items-center justify-center gap-8 sm:gap-16 mb-6">
          {/* Flashlight beam */}
          <div className={`absolute transition-all duration-500 ${lightPos === 'left' ? 'left-[22%] sm:left-[28%]' : lightPos === 'right' ? 'right-[22%] sm:right-[28%]' : 'left-1/2 -translate-x-1/2'}`}>
            <div className={`h-3 w-3 rounded-full ${flashLeft || flashRight ? 'bg-yellow-300 shadow-lg shadow-yellow-300/50' : 'bg-gray-400'} transition-all duration-300`} />
          </div>

          {/* Left Eye */}
          <div className="text-center">
            <div className={`w-24 h-20 sm:w-32 sm:h-24 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${flashLeft ? 'border-yellow-300/50 bg-yellow-300/5' : 'border-gray-300 bg-gray-50'}`}>
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border border-gray-200 flex items-center justify-center">
                <div
                  className="rounded-full bg-cyan-400/30 border border-cyan-400/50 transition-all duration-500"
                  style={{ width: `${leftPupil * 3}px`, height: `${leftPupil * 3}px` }}
                />
              </div>
            </div>
            <span className="text-xs font-medium text-gray-900 mt-2 block">Left Eye (Normal)</span>
            <span className="text-[10px] text-gray-400">Constricts normally</span>
          </div>

          {/* Right Eye */}
          <div className="text-center">
            <div className={`w-24 h-20 sm:w-32 sm:h-24 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${flashRight ? 'border-yellow-300/50 bg-yellow-300/5' : 'border-gray-300 bg-gray-50'}`}>
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border border-gray-200 flex items-center justify-center">
                <div
                  className={`rounded-full border transition-all duration-500 ${step === 3 ? 'bg-red-400/30 border-red-400/50' : 'bg-cyan-400/30 border-cyan-400/50'}`}
                  style={{ width: `${rightPupil * 3}px`, height: `${rightPupil * 3}px` }}
                />
              </div>
            </div>
            <span className="text-xs font-medium text-gray-900 mt-2 block">Right Eye (Affected)</span>
            <span className={`text-[10px] ${step === 3 ? 'text-red-400' : 'text-gray-400'}`}>{step === 3 ? 'RAPD Detected!' : 'Abnormal response'}</span>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2">
          {steps.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-cyan-400' : i < step ? 'w-4 bg-cyan-400/30' : 'w-4 bg-gray-200'}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
