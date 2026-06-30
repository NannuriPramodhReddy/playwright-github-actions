import type { FormEvent } from 'react';

export function LoginPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="section auth-layout">
      <div>
        <p className="eyebrow">Account</p>
        <h1>Login</h1>
        <p>Sign in to review orders, save addresses, and speed up checkout.</p>
      </div>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" placeholder="pramodh@example.com" required type="email" />
        </label>
        <label>
          Password
          <input name="password" placeholder="Enter your password" required type="password" />
        </label>
        <button className="primary full-width" type="submit">
          Sign in
        </button>
      </form>
    </section>
  );
}
