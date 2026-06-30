import type { Product } from '../data/products';

type ProductDetailsPageProps = {
  product?: Product;
  onAddToCart: (product: Product) => void;
  onBackToProducts: () => void;
};

export function ProductDetailsPage({
  product,
  onAddToCart,
  onBackToProducts
}: ProductDetailsPageProps) {
  if (!product) {
    return (
      <section className="section empty-state">
        <h1>Product not found</h1>
        <p>The selected item is no longer available.</p>
        <button className="primary" onClick={onBackToProducts} type="button">
          Back to products
        </button>
      </section>
    );
  }

  return (
    <section className="details-layout">
      <div className="details-image" aria-hidden="true">
        {product.image}
      </div>
      <div className="details-copy">
        <p className="eyebrow">{product.category}</p>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="details-meta">
          <span>${product.price}</span>
          <span>{product.rating} customer rating</span>
        </div>
        <div className="hero-actions">
          <button className="primary" onClick={() => onAddToCart(product)} type="button">
            Add to cart
          </button>
          <button onClick={onBackToProducts} type="button">
            Back to products
          </button>
        </div>
      </div>
    </section>
  );
}
