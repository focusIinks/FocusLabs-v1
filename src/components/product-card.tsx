'use client';

import Link from 'next/link';
import { Star, ArrowRight, Users, CheckCircle, Clock, Wrench, FlaskConical } from 'lucide-react';
import { type Product } from '@/lib/products';

const statusCfg = {
  available: { icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100', dot: 'bg-emerald-500' },
  upcoming: { icon: Clock, color: 'text-violet-600', bg: 'bg-violet-50 border-violet-100', dot: 'bg-violet-500' },
  maintenance: { icon: Wrench, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-100', dot: 'bg-amber-500' },
  beta: { icon: FlaskConical, color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100', dot: 'bg-blue-500' },
};

export default function ProductCard({ product }: { product: Product }) {
  const s = statusCfg[product.status];
  const SIcon = s.icon;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block rounded-3xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Gradient top accent */}
      <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />

      <div className="p-6 sm:p-7">
        {/* Status + Icon row */}
        <div className="flex items-start justify-between mb-5">
          <div className={`h-13 w-13 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-xl font-extrabold text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            {product.name.charAt(0)}
          </div>
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border ${s.bg} ${s.color}`}>
            <div className={`h-1.5 w-1.5 rounded-full ${s.dot} ${product.status === 'available' ? 'animate-pulse' : ''}`} />
            {product.statusLabel}
          </div>
        </div>

        {/* Text */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 group-hover:text-blue-700 transition-colors mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4 leading-relaxed">{product.tagline}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-5">
          <div className="flex items-center gap-0.5">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className={`h-3.5 w-3.5 ${i <= Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
            ))}
          </div>
          <span className="text-sm font-bold text-gray-900">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviewCount.toLocaleString()})</span>
        </div>

        {/* Features */}
        <div className="space-y-2.5 mb-6">
          {product.features.slice(0, 3).map((f, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
              <span className="text-sm text-gray-600 leading-relaxed">{f}</span>
            </div>
          ))}
          {product.features.length > 3 && (
            <span className="text-xs text-blue-600 font-semibold">+{product.features.length - 3} more features</span>
          )}
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-5 border-t border-gray-50">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
            <Users className="h-3.5 w-3.5" /> {product.reviewCount.toLocaleString()} users
          </div>
          <div className="flex items-center gap-1 text-sm font-bold text-blue-600">
            Explore
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
