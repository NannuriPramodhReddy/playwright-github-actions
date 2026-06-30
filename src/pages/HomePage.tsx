import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import type { Product } from '../data/products';

type HomePageProps = {
  onAddToCart: (product: Product) => void;
  onViewDetails: (productId: string) => void;
  onViewProducts: () => void;
};

export function HomePage({ onAddToCart, onViewDetails, onViewProducts }: HomePageProps) {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">Curated lifestyle store</p>
          <h1>Modern essentials for work, travel, and home.</h1>
          <p>
            Discover thoughtfully designed products from Pramodh Personal with a fast,
            mobile-friendly shopping experience.
          </p>
          <div className="hero-actions">
            <button className="primary" onClick={onViewProducts} type="button">
              Shop products
            </button>
            <a href="#featured-products">Explore featured picks</a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Store highlights">
          <span>Free shipping over $75</span>
          <span>Secure checkout</span>
          <span>30-day returns</span>
        </div>
      </section>

      <section className="section" id="featured-products">
        <div className="section-heading">
          <p className="eyebrow">Featured</p>
          <h2>Best sellers</h2>
        </div>
        <div className="product-grid">
          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
              product={product}
            />
          ))}
        </div>
      </section>
    </>
  );
}
