import type { Product } from '../data/products';

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (productId: string) => void;
};

export function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-image" aria-hidden="true">
        {product.image}
      </div>
      <div className="product-card-body">
        <p className="eyebrow">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.tagline}</p>
        <div className="product-meta">
          <strong>${product.price}</strong>
          <span>{product.rating} rating</span>
        </div>
      </div>
      <div className="card-actions">
        <button onClick={() => onViewDetails(product.id)} type="button">
          View details
        </button>
        <button className="primary" onClick={() => onAddToCart(product)} type="button">
          Add to cart
        </button>
      </div>
    </article>
  );
}
