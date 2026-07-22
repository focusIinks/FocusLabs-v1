'use client';

import Link from 'next/link';
import { Star, ArrowRight, Users, CheckCircle, Clock, Wrench, FlaskConical } from 'lucide-react';
import { type Product } from '@/lib/products';

const statusConfig = {
  available: { icon: CheckCircle, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20', label: 'Available' },
  upcoming: { icon: Clock, color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20', label: 'Coming Soon' },
  maintenance: { icon: Wrench, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20', label: 'Maintenance' },
  beta: { icon: FlaskConical, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20', label: 'Beta' },
};

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const status = statusConfig[product.status];
  const StatusIcon = status.icon;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative block rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-emerald-500/5"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Status Badge */}
      <div className={`absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${status.bg} ${status.color}`}>
        <StatusIcon className="h-3 w-3" />
        {product.statusLabel}
      </div>

      {/* Icon */}
      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-xl font-bold text-white mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
        {product.name.charAt(0)}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
        {product.name}
      </h3>
      <p className="text-sm text-neutral-400 mb-4">{product.tagline}</p>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              className={`h-3.5 w-3.5 ${
                s <= Math.floor(product.rating)
                  ? 'text-amber-400 fill-amber-400'
                  : s - 0.5 <= product.rating
                  ? 'text-amber-400 fill-amber-400/50'
                  : 'text-neutral-700'
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-medium text-white">{product.rating}</span>
        <span className="text-xs text-neutral-500">({product.reviewCount.toLocaleString()} reviews)</span>
      </div>

      {/* Features Preview */}
      <div className="space-y-2 mb-5">
        {product.features.slice(0, 3).map((f, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500/60 shrink-0" />
            <span className="text-sm text-neutral-400 line-clamp-1">{f}</span>
          </div>
        ))}
        {product.features.length > 3 && (
          <span className="text-xs text-emerald-500/70">+{product.features.length - 3} more features</span>
        )}
      </div>

      {/* Bottom Row */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div className="flex items-center gap-1.5 text-xs text-neutral-500">
          <Users className="h-3.5 w-3.5" />
          {product.reviewCount.toLocaleString()} users
        </div>
        <div className="flex items-center gap-1 text-sm font-medium text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
          Explore
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
