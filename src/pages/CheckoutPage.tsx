import { FormEvent, useState } from 'react';

type CheckoutPageProps = {
  subtotal: number;
  hasItems: boolean;
  onOrderComplete: () => void;
  onShopProducts: () => void;
};

export function CheckoutPage({
  subtotal,
  hasItems,
  onOrderComplete,
  onShopProducts
}: CheckoutPageProps) {
  const [isComplete, setIsComplete] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsComplete(true);
    onOrderComplete();
  }

  if (isComplete) {
    return (
      <section className="section empty-state" aria-live="polite">
        <p className="eyebrow">Order placed</p>
        <h1>Thank you for your order</h1>
        <p>Your Pramodh Personal order has been confirmed.</p>
        <button className="primary" onClick={onShopProducts} type="button">
          Continue shopping
        </button>
      </section>
    );
  }

  if (!hasItems) {
    return (
      <section className="section empty-state">
        <h1>Checkout is waiting for your cart</h1>
        <p>Add a product before completing checkout.</p>
        <button className="primary" onClick={onShopProducts} type="button">
          Shop products
        </button>
      </section>
    );
  }

  return (
    <section className="section checkout-layout">
      <div>
        <p className="eyebrow">Secure checkout</p>
        <h1>Checkout</h1>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input name="fullName" placeholder="Pramodh Kumar" required />
          </label>
          <label>
            Email
            <input name="email" placeholder="pramodh@example.com" required type="email" />
          </label>
          <label>
            Shipping address
            <input name="address" placeholder="123 Market Street" required />
          </label>
          <label>
            City
            <input name="city" placeholder="Hyderabad" required />
          </label>
          <label>
            Card number
            <input
              inputMode="numeric"
              maxLength={19}
              name="cardNumber"
              placeholder="4242 4242 4242 4242"
              required
            />
          </label>
          <button className="primary full-width" type="submit">
            Place order
          </button>
        </form>
      </div>

      <aside className="summary-card" aria-label="Checkout summary">
        <h2>Checkout summary</h2>
        <div className="summary-line total">
          <span>Total due</span>
          <strong>${subtotal}</strong>
        </div>
        <p>Payments are mocked for this demo automation project.</p>
      </aside>
    </section>
  );
}
