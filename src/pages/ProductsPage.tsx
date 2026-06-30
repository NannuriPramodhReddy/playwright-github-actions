import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import type { Product } from '../data/products';

type ProductsPageProps = {
  onAddToCart: (product: Product) => void;
  onViewDetails: (productId: string) => void;
};

export function ProductsPage({ onAddToCart, onViewDetails }: ProductsPageProps) {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Catalog</p>
        <h1>Products</h1>
        <p>Browse all modern essentials available in the Pramodh Personal store.</p>
      </div>

      <div className="product-grid" aria-label="Product list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            onAddToCart={onAddToCart}
            onViewDetails={onViewDetails}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
