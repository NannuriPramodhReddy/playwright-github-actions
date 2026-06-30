import type { Page } from '../App';

type HeaderProps = {
  cartCount: number;
  currentPage: Page;
  onNavigate: (page: Page) => void;
};

const navigation: Array<{ page: Page; label: string }> = [
  { page: 'home', label: 'Home' },
  { page: 'products', label: 'Products' },
  { page: 'contact', label: 'Contact' },
  { page: 'login', label: 'Login' }
];

export function Header({ cartCount, currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="site-header">
      <button className="brand" onClick={() => onNavigate('home')} type="button">
        <span className="brand-mark">P</span>
        <span>Pramodh Personal</span>
      </button>

      <nav className="nav-links" aria-label="Primary navigation">
        {navigation.map((item) => (
          <button
            aria-current={currentPage === item.page ? 'page' : undefined}
            className={currentPage === item.page ? 'active' : ''}
            key={item.page}
            onClick={() => onNavigate(item.page)}
            type="button"
          >
            {item.label}
          </button>
        ))}
        <button
          aria-current={currentPage === 'cart' ? 'page' : undefined}
          className="cart-link"
          onClick={() => onNavigate('cart')}
          type="button"
        >
          Cart
          <span aria-label={`${cartCount} items in cart`} className="cart-count">
            {cartCount}
          </span>
        </button>
      </nav>
    </header>
  );
}
