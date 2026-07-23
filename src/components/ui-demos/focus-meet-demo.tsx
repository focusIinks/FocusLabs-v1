'use client';

import { useState, useEffect } from 'react';
import { Mic, MicOff, Video, MonitorUp, MessageSquare, PhoneOff, MoreHorizontal } from 'lucide-react';

const participants = [
  { name: 'Dr. You', initials: 'DY', color: 'from-emerald-400 to-teal-600', speaking: false },
  { name: 'Dr. Sarah Chen', initials: 'SC', color: 'from-violet-400 to-purple-600', speaking: true },
  { name: 'Dr. Raj Patel', initials: 'RP', color: 'from-orange-400 to-red-500', speaking: false },
  { name: 'Dr. Emily Brooks', initials: 'EB', color: 'from-cyan-400 to-blue-500', speaking: false },
];

const chatMsgs = [
  { user: 'Dr. Chen', msg: 'Can you share the OCT scan?' },
  { user: 'Dr. Patel', msg: 'Looking at the retinal layer now' },
  { user: 'You', msg: 'Sharing my screen with the scan' },
];

export default function FocusMeetDemo() {
  const [activeSpeaker, setActiveSpeaker] = useState(1);
  const [visibleChats, setVisibleChats] = useState(0);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const t1 = setInterval(() => setActiveSpeaker((v) => (v + 1) % participants.length), 2500);
    const t2 = setInterval(() => {
      setVisibleChats((v) => (v < chatMsgs.length ? v + 1 : 0));
      setShowChat(true);
    }, 2000);
    return () => { clearInterval(t1); clearInterval(t2); };
  }, []);

  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-sm font-semibold text-gray-900">Case Review: Retinal OCT</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-gray-500">
          <span>01:24:35</span>
          <span>4 participants</span>
        </div>
      </div>

      {/* Video Grid */}
      <div className={`grid gap-2 p-2 transition-all duration-300 ${showChat ? 'grid-cols-2 sm:grid-cols-2' : 'grid-cols-2 sm:grid-cols-4'}`}>
        {participants.map((p, i) => (
          <div
            key={i}
            className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-500 ${
              i === activeSpeaker ? 'ring-2 ring-emerald-500 scale-[1.02]' : ''
            } ${showChat && i >= 2 ? 'hidden sm:block' : ''}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-20`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center text-sm font-bold text-white ${i === activeSpeaker ? 'scale-110' : ''} transition-transform duration-300`}>
                {p.initials}
              </div>
              <span className="text-[11px] text-gray-900 mt-2 font-medium">{p.name}</span>
            </div>
            {i === activeSpeaker && (
              <div className="absolute bottom-2 left-2 flex items-center gap-1">
                <div className="flex items-center gap-0.5">
                  {[0, 1, 2].map((bar) => (
                    <div key={bar} className="w-0.5 bg-emerald-400 rounded-full animate-pulse" style={{ height: `${6 + Math.random() * 8}px`, animationDelay: `${bar * 0.15}s` }} />
                  ))}
                </div>
              </div>
            )}
            <div className="absolute top-2 right-2 flex items-center gap-1">
              {i === 2 && <MicOff className="h-3 w-3 text-red-400" />}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Panel (animated) */}
      {showChat && (
        <div className="border-t border-gray-200 p-3 max-h-28 overflow-hidden animate-in">
          <div className="space-y-2">
            {chatMsgs.slice(0, visibleChats).map((c, i) => (
              <div key={i} className="text-[11px]">
                <span className="font-medium text-emerald-400">{c.user}:</span>
                <span className="text-gray-600 ml-1">{c.msg}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center justify-center gap-2 px-4 py-3 border-t border-gray-200">
        {[
          { icon: Mic, active: true, color: 'text-emerald-400' },
          { icon: Video, active: true, color: 'text-emerald-400' },
          { icon: MonitorUp, active: false, color: 'text-gray-500' },
          { icon: MessageSquare, active: false, color: 'text-gray-500' },
          { icon: MoreHorizontal, active: false, color: 'text-gray-500' },
        ].map((ctrl, i) => (
          <button key={i} className={`p-2.5 rounded-xl transition-colors ${ctrl.active ? 'bg-gray-100 ' + ctrl.color : 'text-gray-500 hover:bg-gray-50'}`}>
            <ctrl.icon className="h-4 w-4" />
          </button>
        ))}
        <div className="w-px h-6 bg-gray-200 mx-1" />
        <button className="p-2.5 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">
          <PhoneOff className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
