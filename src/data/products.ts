export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  tagline: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 'aurora-watch',
    name: 'Aurora Smart Watch',
    category: 'Wearables',
    price: 149,
    rating: 4.8,
    image: 'Watch',
    tagline: 'Track workouts, calls, and focus time in one polished device.',
    description:
      'A lightweight smart watch with a crisp display, week-long battery life, guided workouts, and durable water resistance for daily use.'
  },
  {
    id: 'terra-backpack',
    name: 'Terra Travel Backpack',
    category: 'Travel',
    price: 89,
    rating: 4.7,
    image: 'Bag',
    tagline: 'A compact carry-all built for commutes and weekend escapes.',
    description:
      'Designed with a protected laptop sleeve, smart cable routing, expandable storage, and breathable padding for long days on the move.'
  },
  {
    id: 'pulse-headphones',
    name: 'Pulse Noise-Canceling Headphones',
    category: 'Audio',
    price: 199,
    rating: 4.9,
    image: 'Audio',
    tagline: 'Immersive sound with adaptive cancellation and all-day comfort.',
    description:
      'Premium wireless headphones with spatial audio, transparent listening mode, fast charging, and plush memory-foam earcups.'
  },
  {
    id: 'luma-desk-lamp',
    name: 'Luma Desk Lamp',
    category: 'Home Office',
    price: 64,
    rating: 4.6,
    image: 'Lamp',
    tagline: 'Warm, adjustable lighting for focused work and late-night reads.',
    description:
      'A minimal LED lamp with touch controls, adjustable color temperature, USB-C charging, and a sturdy matte aluminum frame.'
  }
];

export const findProduct = (productId: string) =>
  products.find((product) => product.id === productId);
