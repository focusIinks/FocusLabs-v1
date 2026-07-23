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
  available: { icon: CheckCircle, color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200', label: 'Available Now' },
  upcoming: { icon: Clock, color: 'text-violet-700', bg: 'bg-violet-50 border-violet-200', label: 'Coming Soon' },
  maintenance: { icon: Wrench, color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200', label: 'Under Maintenance' },
  beta: { icon: FlaskConical, color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200', label: 'Beta' },
};

export default function ProductPageContent() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
          <p className="text-gray-500 mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"><ArrowLeft className="h-4 w-4" /> Back to Home</Link>
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
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-gray-900 transition-colors font-medium">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-300" />
            <span className="text-gray-400 font-medium">Products</span>
            <ChevronRight className="h-3.5 w-3.5 text-gray-300" />
            <span className="text-gray-900 font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient.replace('from-', 'from-').replace('to-', 'to-')}/5`} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-14">
          <div className="max-w-3xl">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 font-medium transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" /> All Products
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${status.bg} ${status.color}`}>
                <StatusIcon className="h-3.5 w-3.5" /> {status.label}
              </div>
              <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className={`h-4 w-4 ${s <= Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                ))}
                <span className="text-sm font-bold text-gray-900 ml-1">{product.rating}</span>
                <span className="text-sm text-gray-400">({product.reviewCount.toLocaleString()} reviews)</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-3">{product.name}</h1>
            <p className="text-lg sm:text-xl text-gray-500 mb-6">{product.tagline}</p>
            <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-2xl">{product.description}</p>

            <div className="flex flex-wrap items-center gap-3">
              <a href={product.ctaHref} className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-bold bg-gradient-to-r ${product.gradient} text-white rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95`}>
                <Zap className="h-4 w-4" /> {product.ctaText}
              </a>
              {product.secondaryCtaText && (
                <a href={product.secondaryCtaHref} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full border border-gray-200 transition-all">
                  {product.secondaryCtaText}
                </a>
              )}
              <div className="flex items-center gap-2 ml-2">
                {[Heart, Share2, Bookmark].map((Icon, i) => (
                  <button key={i} className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      {DemoComponent && (
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Interactive Preview</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 mt-2">See It in Action</h2>
              <p className="text-sm text-gray-500 mt-2">Animated UI demo — the real product has even more.</p>
            </div>
            <DemoComponent />
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Features</span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 mt-2">What&apos;s Inside</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3.5 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-0.5 transition-all duration-300">
                <div className={`h-7 w-7 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center shrink-0 mt-0.5`}>
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm text-gray-700 leading-relaxed font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Technology</span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 mt-2">Built With</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {product.techStack.map((tech, i) => (
              <div key={i} className="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-sm font-semibold text-gray-700 shadow-sm">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Ratings */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6">User Ratings</h3>
              <div className="flex items-center gap-6 mb-6">
                <div className="text-5xl font-black text-gray-900">{product.rating}</div>
                <div>
                  <div className="flex items-center gap-0.5 mb-1">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className={`h-5 w-5 ${s <= Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 font-medium">{product.reviewCount.toLocaleString()} reviews</p>
                </div>
              </div>
              {[5,4,3,2,1].map((stars) => {
                const pct = stars === 5 ? 72 : stars === 4 ? 18 : stars === 3 ? 6 : stars === 2 ? 3 : 1;
                return (
                  <div key={stars} className="flex items-center gap-3 mb-2.5">
                    <span className="text-xs font-bold text-gray-500 w-3">{stars}</span>
                    <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                    <div className="flex-1 h-2.5 rounded-full bg-gray-200">
                      <div className="h-full rounded-full bg-amber-400 transition-all" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-xs text-gray-400 font-medium w-8 text-right">{pct}%</span>
                  </div>
                );
              })}
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Product Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {[{ icon: Users, val: (product.reviewCount * 1.5).toLocaleString(), label: 'Active Users' }, { icon: Globe, val: Math.floor(product.reviewCount / 100).toString(), label: 'Countries' }, { icon: Shield, val: '99.9%', label: 'Uptime' }, { icon: Zap, val: 'v2.' + Math.floor(product.rating), label: 'Latest Version' }].map((s, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white border border-gray-100">
                    <s.icon className="h-5 w-5 text-blue-600 mb-2" />
                    <div className="text-2xl font-black text-gray-900">{s.val}</div>
                    <div className="text-xs text-gray-500 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Explore More</span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 mt-2">You Might Also Like</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rp) => (
              <Link key={rp.slug} href={`/products/${rp.slug}`} className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300">
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${rp.gradient} flex items-center justify-center text-base font-extrabold text-white shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>{rp.name.charAt(0)}</div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{rp.name}</h3>
                  <p className="text-xs text-gray-500">{rp.tagline}</p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-bold text-gray-900">{rp.rating}</span>
                    <span className="text-xs text-gray-400">({rp.reviewCount.toLocaleString()})</span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all ml-auto shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nav */}
      <div className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          {prevProduct ? (
            <Link href={`/products/${prevProduct.slug}`} className="group flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <div><div className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Previous</div><div className="font-bold">{prevProduct.name}</div></div>
            </Link>
          ) : <div />}
          {nextProduct ? (
            <Link href={`/products/${nextProduct.slug}`} className="group flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors text-right">
              <div><div className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Next</div><div className="font-bold">{nextProduct.name}</div></div>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}