import { Product } from '@/components/products/ProductCard';

export const productCategories = [
  'All Products',
  'Electronics',
  'Home Appliances',
  'Furniture',
  'Fashion',
  'Sports & Outdoors',
  'Mobile & Tablets'
];

export const dummyProducts: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'Premium Laptop Pro 15',
    category: 'Electronics',
    price: 1299,
    image: '/products/laptop.jpg',
    description: 'High-performance laptop with latest processor, 16GB RAM, and stunning display perfect for professionals.',
    featured: true
  },
  {
    id: '2',
    name: 'Wireless Noise-Cancelling Headphones',
    category: 'Electronics',
    price: 349,
    image: '/products/headphones.jpg',
    description: 'Premium sound quality with active noise cancellation and 30-hour battery life.',
  },
  {
    id: '3',
    name: '4K Smart TV 55"',
    category: 'Electronics',
    price: 799,
    image: '/products/tv.jpg',
    description: 'Crystal-clear 4K resolution with smart features and built-in streaming apps.',
    featured: true
  },
  {
    id: '4',
    name: 'Professional Camera Kit',
    category: 'Electronics',
    price: 1899,
    image: '/products/camera.jpg',
    description: 'Complete photography kit with DSLR camera, lenses, and accessories for professionals.',
  },

  // Home Appliances
  {
    id: '5',
    name: 'Smart Refrigerator',
    category: 'Home Appliances',
    price: 2499,
    image: '/products/fridge.jpg',
    description: 'Energy-efficient smart refrigerator with touchscreen and Wi-Fi connectivity.',
  },
  {
    id: '6',
    name: 'Front Load Washing Machine',
    category: 'Home Appliances',
    price: 899,
    image: '/products/washer.jpg',
    description: 'High-capacity washing machine with multiple wash programs and energy-saving features.',
  },
  {
    id: '7',
    name: 'Air Purifier Pro',
    category: 'Home Appliances',
    price: 449,
    image: '/products/purifier.jpg',
    description: 'Advanced HEPA filtration system for cleaner, healthier air in your home.',
  },
  {
    id: '8',
    name: 'Robot Vacuum Cleaner',
    category: 'Home Appliances',
    price: 599,
    image: '/products/vacuum.jpg',
    description: 'Smart robot vacuum with mapping technology and automatic charging.',
    featured: true
  },

  // Furniture
  {
    id: '9',
    name: 'Modern Sofa Set',
    category: 'Furniture',
    price: 1599,
    image: '/products/sofa.jpg',
    description: 'Elegant 3-seater sofa with premium upholstery and ergonomic design.',
  },
  {
    id: '10',
    name: 'Executive Office Desk',
    category: 'Furniture',
    price: 749,
    image: '/products/desk.jpg',
    description: 'Spacious office desk with built-in storage and cable management system.',
  },
  {
    id: '11',
    name: 'Queen Size Bed Frame',
    category: 'Furniture',
    price: 899,
    image: '/products/bed.jpg',
    description: 'Sturdy wooden bed frame with elegant headboard and storage drawers.',
  },
  {
    id: '12',
    name: 'Dining Table Set (6 Seater)',
    category: 'Furniture',
    price: 1299,
    image: '/products/dining.jpg',
    description: 'Beautiful dining table with 6 matching chairs, perfect for family gatherings.',
  },

  // Fashion
  {
    id: '13',
    name: 'Premium Leather Jacket',
    category: 'Fashion',
    price: 399,
    image: '/products/jacket.jpg',
    description: 'Genuine leather jacket with classic design and premium finish.',
  },
  {
    id: '14',
    name: 'Designer Watch Collection',
    category: 'Fashion',
    price: 599,
    image: '/products/watch.jpg',
    description: 'Luxury timepiece with Swiss movement and sapphire crystal.',
    featured: true
  },
  {
    id: '15',
    name: 'Running Shoes Pro',
    category: 'Fashion',
    price: 179,
    image: '/products/shoes.jpg',
    description: 'High-performance running shoes with advanced cushioning and support.',
  },

  // Sports & Outdoors
  {
    id: '16',
    name: 'Smart Fitness Tracker',
    category: 'Sports & Outdoors',
    price: 249,
    image: '/products/tracker.jpg',
    description: 'Track your fitness goals with heart rate monitoring and GPS.',
  },
  {
    id: '17',
    name: 'Mountain Bike Pro',
    category: 'Sports & Outdoors',
    price: 1299,
    image: '/products/bike.jpg',
    description: 'Professional mountain bike with carbon frame and hydraulic brakes.',
  },
  {
    id: '18',
    name: 'Camping Tent (4 Person)',
    category: 'Sports & Outdoors',
    price: 349,
    image: '/products/tent.jpg',
    description: 'Waterproof camping tent with easy setup and ventilation system.',
  },

  // Mobile & Tablets
  {
    id: '19',
    name: 'Flagship Smartphone',
    category: 'Mobile & Tablets',
    price: 999,
    image: '/products/phone.jpg',
    description: 'Latest smartphone with 5G, powerful camera system, and all-day battery.',
    featured: true
  },
  {
    id: '20',
    name: 'Pro Tablet 12.9"',
    category: 'Mobile & Tablets',
    price: 1199,
    image: '/products/tablet.jpg',
    description: 'Professional tablet with stylus support and desktop-class performance.',
  },
  {
    id: '21',
    name: 'Wireless Earbuds Pro',
    category: 'Mobile & Tablets',
    price: 199,
    image: '/products/earbuds.jpg',
    description: 'True wireless earbuds with active noise cancellation and premium sound.',
  },
];
