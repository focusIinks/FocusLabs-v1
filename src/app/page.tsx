'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Zap, ArrowRight, Users, Globe, BookOpen, Eye,
  CheckCircle, Clock, Wrench, Shield,
  TrendingUp, Sparkles, Cpu, Layers
} from 'lucide-react';
import { products } from '@/lib/products';
import ProductCard from '@/components/product-card';

const stats = [
  { label: 'Optometrists', value: '24,000+', icon: Users },
  { label: 'Countries', value: '85+', icon: Globe },
  { label: 'Resources', value: '2,500+', icon: BookOpen },
  { label: 'Daily Readers', value: '8,400+', icon: Eye },
];

const extraFeatures = [
  { title: 'Open Source', desc: 'Community-driven development, transparent and trusted.', icon: Shield },
  { title: 'AI-Powered', desc: 'Smart learning paths, automated diagnostics, and insights.', icon: Cpu },
  { title: 'Mobile First', desc: 'Access everything from any device, anywhere.', icon: Globe },
  { title: 'Free Forever', desc: 'Core features always free for students and practitioners.', icon: CheckCircle },
  { title: 'Privacy First', desc: 'Your data and patient info are always protected.', icon: Shield },
  { title: 'Global Community', desc: 'Connect with optometrists across 85+ countries.', icon: Users },
  { title: 'Clinical Focus', desc: 'Every tool built with clinical workflows in mind.', icon: Eye },
  { title: 'Rapid Updates', desc: 'New features shipped every single week.', icon: TrendingUp },
];

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const duration = 1500;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    animate();
  }, [target]);
  return <div>{count.toLocaleString()}{suffix}</div>;
}

export default function Home() {
  const [visibleCards, setVisibleCards] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const t = setInterval(() => setVisibleCards((v) => (v < products.length ? v + 1 : v)), 120);
    return () => clearInterval(t);
  }, []);

  const availCount = products.filter(p => p.status === 'available').length;
  const upcomingCount = products.filter(p => p.status === 'upcoming' || p.status === 'beta').length;
  const maintCount = products.filter(p => p.status === 'maintenance').length;

  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium">8 Products · 1 Ecosystem · Core features 100% free</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        {/* Gradient Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-indigo-400/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20 sm:pb-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Built for the optometry community</span>
            </div>

            {/* Heading */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-gray-900 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              The Future of{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                Optometry
              </span>
              <br />
              Starts Here
            </h1>

            <p className={`mt-6 text-base sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              FocusLabs builds free, powerful tools for optometrists worldwide. Connect, learn, diagnose, and stay updated — all in one ecosystem.
            </p>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <Link
                href="/products/focuslinks"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-200 transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
              >
                <Zap className="h-5 w-5" />
                Explore All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products/optolib"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-full border border-gray-200 transition-all hover:-translate-y-0.5"
              >
                Browse Resources
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {stats.map((s, i) => (
              <div key={i} className="text-center p-6 rounded-3xl bg-white border border-gray-100 shadow-sm">
                <s.icon className="h-6 w-6 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-black text-gray-900">
                  <AnimatedCounter target={parseInt(s.value.replace(/[^0-9]/g, ''))} suffix={s.value.includes('+') ? '+' : ''} />
                </div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Our Products</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 mt-3">
              Everything You Need,
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-400 mt-1">
              In One Place
            </h2>
            <p className="mt-5 text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
              From professional networking to clinical simulators, from AI-powered learning to daily news — we cover every aspect of modern optometry.
            </p>
          </div>

          {/* Status pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { label: `${availCount} Available`, color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
              { label: `${upcomingCount} Coming Soon`, color: 'bg-violet-50 text-violet-700 border-violet-100' },
              { label: `${maintCount} Maintenance`, color: 'bg-amber-50 text-amber-700 border-amber-100' },
            ].map((pill, i) => (
              <span key={i} className={`px-3.5 py-1.5 rounded-full text-xs font-bold border ${pill.color}`}>{pill.label}</span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {products.map((p, i) => (
              <div key={p.slug} className={`transition-all duration-500 ${i < visibleCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Why FocusLabs</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 mt-3">Built Different</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {extraFeatures.map((f, i) => (
              <div key={i} className="group p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <f.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-slate-900 p-8 sm:p-16 lg:p-20 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                Ready to Transform<br />Your Practice?
              </h2>
              <p className="text-base sm:text-lg text-slate-400 max-w-lg mx-auto mb-10">
                Join 24,000+ optometrists already using FocusLabs. Start with Focuslinks — it&apos;s completely free.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/products/focuslinks" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-bold bg-white text-slate-900 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all hover:scale-105 active:scale-95">
                  Join Focuslinks Free <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/products/optoscholar" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-bold text-white border border-white/20 hover:bg-white/10 rounded-xl transition-all">
                  Join Beta Waitlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
