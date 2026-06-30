import type { FormEvent } from 'react';

export function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="section contact-layout">
      <div>
        <p className="eyebrow">Support</p>
        <h1>Contact</h1>
        <p>
          Questions about products, shipping, or orders? Send a note and the store team
          will reply within one business day.
        </p>
        <div className="contact-card">
          <strong>Email</strong>
          <span>support@pramodhpersonal.example</span>
        </div>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input name="email" placeholder="you@example.com" required type="email" />
        </label>
        <label>
          Message
          <textarea name="message" placeholder="How can we help?" required rows={5} />
        </label>
        <button className="primary full-width" type="submit">
          Send message
        </button>
      </form>
    </section>
  );
}
