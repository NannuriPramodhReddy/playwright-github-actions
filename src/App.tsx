import { useState } from 'react';
import { Header } from './components/Header';
import { findProduct } from './data/products';
import type { Product } from './data/products';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { ProductsPage } from './pages/ProductsPage';

export type Page = 'home' | 'products' | 'productDetails' | 'cart' | 'checkout' | 'login' | 'contact';

export type CartItem = {
  product: Product;
  quantity: number;
};

function App() {
  const [page, setPage] = usePageState();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  function navigate(nextPage: Page) {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function addToCart(product: Product) {
    setCartItems((currentItems) => {
      const existing = currentItems.find((item) => item.product.id === product.id);

      if (!existing) {
        return [...currentItems, { product, quantity: 1 }];
      }

      return currentItems.map((item) =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
    navigate('cart');
  }

  function removeFromCart(productId: string) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId)
    );
  }

  function viewDetails(productId: string) {
    setSelectedProductId(productId);
    navigate('productDetails');
  }

  const selectedProduct = selectedProductId ? findProduct(selectedProductId) : undefined;

  return (
    <div className="app-shell">
      <Header cartCount={cartCount} currentPage={page} onNavigate={navigate} />
      <main>
        {page === 'home' && (
          <HomePage
            onAddToCart={addToCart}
            onViewDetails={viewDetails}
            onViewProducts={() => navigate('products')}
          />
        )}
        {page === 'products' && (
          <ProductsPage onAddToCart={addToCart} onViewDetails={viewDetails} />
        )}
        {page === 'productDetails' && (
          <ProductDetailsPage
            onAddToCart={addToCart}
            onBackToProducts={() => navigate('products')}
            product={selectedProduct}
          />
        )}
        {page === 'cart' && (
          <CartPage
            items={cartItems}
            onCheckout={() => navigate('checkout')}
            onContinueShopping={() => navigate('products')}
            onRemove={removeFromCart}
            subtotal={subtotal}
          />
        )}
        {page === 'checkout' && (
          <CheckoutPage
            hasItems={cartItems.length > 0}
            onOrderComplete={() => setCartItems([])}
            onShopProducts={() => navigate('products')}
            subtotal={subtotal}
          />
        )}
        {page === 'login' && <LoginPage />}
        {page === 'contact' && <ContactPage />}
      </main>
      <footer className="footer">
        <span>Pramodh Personal Store</span>
        <span>Demo e-commerce website with Playwright automation.</span>
      </footer>
    </div>
  );
}

function usePageState(): [Page, (page: Page) => void] {
  const [page, setPage] = useState<Page>('home');
  return [page, setPage];
}

export default App;
