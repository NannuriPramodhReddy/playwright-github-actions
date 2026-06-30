import type { CartItem } from '../App';

type CartPageProps = {
  items: CartItem[];
  subtotal: number;
  onCheckout: () => void;
  onContinueShopping: () => void;
  onRemove: (productId: string) => void;
};

export function CartPage({
  items,
  subtotal,
  onCheckout,
  onContinueShopping,
  onRemove
}: CartPageProps) {
  if (items.length === 0) {
    return (
      <section className="section empty-state">
        <h1>Your cart is empty</h1>
        <p>Add a product to start your order.</p>
        <button className="primary" onClick={onContinueShopping} type="button">
          Continue shopping
        </button>
      </section>
    );
  }

  return (
    <section className="section cart-layout">
      <div>
        <p className="eyebrow">Shopping bag</p>
        <h1>Cart</h1>
        <div className="cart-list">
          {items.map((item) => (
            <article className="cart-item" key={item.product.id}>
              <div>
                <h3>{item.product.name}</h3>
                <p>
                  Qty {item.quantity} x ${item.product.price}
                </p>
              </div>
              <div>
                <strong>${item.product.price * item.quantity}</strong>
                <button onClick={() => onRemove(item.product.id)} type="button">
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <aside className="summary-card" aria-label="Order summary">
        <h2>Order summary</h2>
        <div className="summary-line">
          <span>Subtotal</span>
          <strong>${subtotal}</strong>
        </div>
        <div className="summary-line">
          <span>Shipping</span>
          <strong>Free</strong>
        </div>
        <div className="summary-line total">
          <span>Total</span>
          <strong>${subtotal}</strong>
        </div>
        <button className="primary full-width" onClick={onCheckout} type="button">
          Checkout
        </button>
      </aside>
    </section>
  );
}
