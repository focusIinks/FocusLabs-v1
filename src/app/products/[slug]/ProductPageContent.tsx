'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  Star, ArrowLeft, ArrowRight, CheckCircle, Clock,
  Wrench, FlaskConical, Users, Shield,
  Globe, Zap, ChevronRight, Heart, Share2, Bookmark
} from 'lucide-react';
import { products, getProductBySlug } from '@/lib/products';
import { getDemo } from '@/components/ui-demos';

const statusConfig = {
  available: { icon: CheckCircle, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20', label: 'Available Now' },
  upcoming: { icon: Clock, color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20', label: 'Coming Soon' },
  maintenance: { icon: Wrench, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20', label: 'Under Maintenance' },
  beta: { icon: FlaskConical, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20', label: 'Beta' },
};

export default function ProductPageContent() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Product Not Found</h1>
          <p className="text-neutral-400 mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const status = statusConfig[product.status];
  const StatusIcon = status.icon;
  const DemoComponent = getDemo(product.slug);

  const currentIndex = products.findIndex((p) => p.slug === slug);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  const relatedProducts = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-neutral-500 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-neutral-600" />
            <span className="text-neutral-400">Products</span>
            <ChevronRight className="h-3.5 w-3.5 text-neutral-600" />
            <span className="text-white">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${product.gradient.replace('from-', 'from-').replace('to-', 'to-')}/5 via-transparent to-transparent opacity-50`} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 pb-12">
          <div className="max-w-3xl">
            {/* Back button */}
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" /> All Products
            </Link>

            {/* Status + Rating */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${status.bg} ${status.color}`}>
                <StatusIcon className="h-3.5 w-3.5" />
                {status.label}
              </div>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className={`h-4 w-4 ${s <= Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : s - 0.5 <= product.rating ? 'text-amber-400 fill-amber-400/50' : 'text-neutral-700'}`} />
                ))}
                <span className="text-sm font-medium text-white ml-1">{product.rating}</span>
                <span className="text-sm text-neutral-500">({product.reviewCount.toLocaleString()} reviews)</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-3">
              {product.name}
            </h1>
            <p className="text-xl text-neutral-400 mb-6">{product.tagline}</p>
            <p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-2xl">{product.description}</p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={product.ctaHref}
                className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-gradient-to-r ${product.gradient} text-white rounded-xl transition-all hover:shadow-lg hover:opacity-90`}
              >
                <Zap className="h-4 w-4" />
                {product.ctaText}
              </a>
              {product.secondaryCtaText && (
                <a
                  href={product.secondaryCtaHref}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-white/10 text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {product.secondaryCtaText}
                </a>
              )}
              <button className="p-3 rounded-xl border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-all">
                <Heart className="h-4 w-4" />
              </button>
              <button className="p-3 rounded-xl border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-all">
                <Share2 className="h-4 w-4" />
              </button>
              <button className="p-3 rounded-xl border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-all">
                <Bookmark className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-12 sm:py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Interactive Preview</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">See It in Action</h2>
            <p className="text-sm text-neutral-400 mt-2">This is an animated UI demo — the real product has even more features.</p>
          </div>
          {DemoComponent && <DemoComponent />}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Features</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">What&apos;s Inside</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
                <div className={`h-6 w-6 rounded-md bg-gradient-to-br ${product.gradient} flex items-center justify-center shrink-0 mt-0.5`}>
                  <CheckCircle className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-sm text-neutral-300 leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 sm:py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Technology</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">Built With</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {product.techStack.map((tech, i) => (
              <div key={i} className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-neutral-300">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ratings & Reviews Summary */}
      <section className="py-12 sm:py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Rating Overview */}
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <h3 className="text-lg font-semibold text-white mb-6">User Ratings</h3>
              <div className="flex items-center gap-6 mb-6">
                <div className="text-5xl font-black text-white">{product.rating}</div>
                <div>
                  <div className="flex items-center gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className={`h-5 w-5 ${s <= Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-neutral-700'}`} />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-400">{product.reviewCount.toLocaleString()} reviews</p>
                </div>
              </div>
              {/* Rating bars */}
              {[5, 4, 3, 2, 1].map((stars) => {
                const pct = stars === 5 ? 72 : stars === 4 ? 18 : stars === 3 ? 6 : stars === 2 ? 3 : 1;
                return (
                  <div key={stars} className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-neutral-400 w-3">{stars}</span>
                    <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                    <div className="flex-1 h-2 rounded-full bg-neutral-800">
                      <div className="h-full rounded-full bg-amber-400" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-xs text-neutral-500 w-8 text-right">{pct}%</span>
                  </div>
                );
              })}
            </div>

            {/* Quick Stats */}
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <h3 className="text-lg font-semibold text-white mb-6">Product Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5">
                  <Users className="h-5 w-5 text-emerald-400 mb-2" />
                  <div className="text-2xl font-bold text-white">{(product.reviewCount * 1.5).toLocaleString()}</div>
                  <div className="text-xs text-neutral-500">Active Users</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <Globe className="h-5 w-5 text-emerald-400 mb-2" />
                  <div className="text-2xl font-bold text-white">{Math.floor(product.reviewCount / 100)}</div>
                  <div className="text-xs text-neutral-500">Countries</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <Shield className="h-5 w-5 text-emerald-400 mb-2" />
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-xs text-neutral-500">Uptime</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <Zap className="h-5 w-5 text-emerald-400 mb-2" />
                  <div className="text-2xl font-bold text-white">v2.{Math.floor(product.rating)}</div>
                  <div className="text-xs text-neutral-500">Latest Version</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 sm:py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Explore More</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">You Might Also Like</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedProducts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/products/${rp.slug}`}
                className="group p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${rp.gradient} flex items-center justify-center text-sm font-bold text-white`}>{rp.name.charAt(0)}</div>
                  <div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">{rp.name}</h3>
                    <p className="text-xs text-neutral-500">{rp.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-sm font-medium text-white">{rp.rating}</span>
                  <span className="text-xs text-neutral-500">({rp.reviewCount.toLocaleString()})</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex items-center justify-between">
          {prevProduct ? (
            <Link href={`/products/${prevProduct.slug}`} className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <div>
                <div className="text-[10px] text-neutral-600 uppercase">Previous</div>
                <div>{prevProduct.name}</div>
              </div>
            </Link>
          ) : <div />}
          {nextProduct ? (
            <Link href={`/products/${nextProduct.slug}`} className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors text-right">
              <div>
                <div className="text-[10px] text-neutral-600 uppercase">Next</div>
                <div>{nextProduct.name}</div>
              </div>
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
