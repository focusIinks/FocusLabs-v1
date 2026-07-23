import { products } from '@/lib/products';
import ProductPageContent from './ProductPageContent';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage() {
  return <ProductPageContent />;
}