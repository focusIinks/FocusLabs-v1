'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Zap, ArrowRight, Users, Globe, BookOpen, Eye,
  CheckCircle, Clock, Wrench,
  TrendingUp, Shield, Sparkles
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
  { title: 'AI-Powered', desc: 'Smart learning paths, automated diagnostics, and insights.', icon: Sparkles },
  { title: 'Mobile First', desc: 'Access everything from any device, anywhere in the world.', icon: Globe },
  { title: 'Free Forever', desc: 'Core features always free for students and practitioners.', icon: CheckCircle },
  { title: 'Privacy First', desc: 'Your patient data and personal info are always protected.', icon: Shield },
  { title: 'Global Community', desc: 'Connect with optometrists across 85+ countries.', icon: Users },
  { title: 'Clinical Focus', desc: 'Every tool built with clinical workflows in mind.', icon: Eye },
  { title: 'Rapid Updates', desc: 'New features and improvements shipped every week.', icon: TrendingUp },
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

  useEffect(() => {
    const t = setInterval(() => setVisibleCards((v) => (v < products.length ? v + 1 : v)), 150);
    return () => clearInterval(t);
  }, []);

  const availableCount = products.filter((p) => p.status === 'available').length;
  const upcomingCount = products.filter((p) => p.status === 'upcoming' || p.status === 'beta').length;
  const maintenanceCount = products.filter((p) => p.status === 'maintenance').length;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-24 pb-16">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">8 Products &middot; 1 Ecosystem &middot; 100% Free Core</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
              The Future of{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Optometry</span>
              <br />
              Starts Here
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              FocusLabs builds free, powerful tools for optometrists worldwide. Connect, learn, diagnose, and stay updated — all in one ecosystem built by eye care professionals, for eye care professionals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                href="/products/focuslinks"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <Zap className="h-5 w-5" />
                Explore All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products/optolib"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium border border-white/10 text-white hover:bg-white/5 rounded-xl transition-all"
              >
                Browse Resources
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 sm:mt-20">
            {stats.map((s, i) => (
              <div key={i} className="text-center p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                <s.icon className="h-5 w-5 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  <AnimatedCounter target={parseInt(s.value.replace(/[^0-9]/g, ''))} suffix={s.value.includes('+') ? '+' : ''} />
                </div>
                <div className="text-sm text-neutral-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Our Products</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Everything You Need,{' '}
              <span className="text-neutral-500">In One Place</span>
            </h2>
            <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
              From professional networking to clinical simulators, from AI-powered learning to daily news — FocusLabs covers every aspect of modern optometry.
            </p>
          </div>

          {/* Status Summary */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <div className="flex items-center gap-1.5 text-sm text-emerald-400">
              <CheckCircle className="h-4 w-4" /> {availableCount} Available
            </div>
            <div className="flex items-center gap-1.5 text-sm text-violet-400">
              <Clock className="h-4 w-4" /> {upcomingCount} Coming Soon
            </div>
            <div className="flex items-center gap-1.5 text-sm text-amber-400">
              <Wrench className="h-4 w-4" /> {maintenanceCount} In Maintenance
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((p, i) => (
              <div
                key={p.slug}
                className={`transition-all duration-500 ${i < visibleCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <ProductCard product={p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Features */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Why FocusLabs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Built Different,{' '}
              <span className="text-neutral-500">Built for You</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {extraFeatures.map((f, i) => (
              <div key={i} className="group p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3 group-hover:bg-emerald-500/20 transition-colors">
                  <f.icon className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{f.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/5 p-8 sm:p-16 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Practice?
              </h2>
              <p className="text-neutral-400 max-w-lg mx-auto mb-8">
                Join 24,000+ optometrists already using FocusLabs. Start with Focuslinks — it&apos;s completely free.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/products/focuslinks"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  Join Focuslinks Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products/optoscholar"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium border border-white/10 text-white hover:bg-white/5 rounded-xl transition-all"
                >
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
