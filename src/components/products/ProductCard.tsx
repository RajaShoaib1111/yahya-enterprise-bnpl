'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        boxShadow: '0 25px 50px -12px rgba(45, 106, 79, 0.25)'
      }}
    >
      {/* Product Image */}
      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {product.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-gradient-to-r from-[var(--gold)] to-[#b8930f] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              Featured
            </span>
          </div>
        )}

        {/* Placeholder image with product initial */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--green-light)]/20 to-[var(--green-dark)]/20">
          <div className="text-8xl font-bold text-[var(--green-dark)]/30">
            {product.name.charAt(0)}
          </div>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[var(--green-light)]/90 to-[var(--green-dark)]/90 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={`/products/${product.id}`}
            className="px-6 py-3 bg-white text-[var(--green-dark)] font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
          >
            View Details
          </Link>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-[var(--green-light)]/10 text-[var(--green-dark)] text-xs font-semibold rounded-full border border-[var(--green-light)]">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-xl font-bold text-[var(--navy)] mb-2 group-hover:text-[var(--green-dark)] transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-[var(--charcoal)] text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 mb-1">Starting from</p>
            <p className="text-2xl font-bold text-[var(--green-dark)]">
              ${product.price.toLocaleString()}
            </p>
          </div>

          <Link
            href={`/products/${product.id}`}
            className="px-4 py-2 bg-gradient-to-r from-[var(--green-light)] to-[var(--green-dark)] text-white font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            Buy Now
          </Link>
        </div>

        {/* Installment Info */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-600 flex items-center">
            <svg className="w-4 h-4 mr-1 text-[var(--green-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Or pay in installments starting from ${Math.round((product.price * 0.8) / 12).toLocaleString()}/month
          </p>
        </div>
      </div>
    </motion.div>
  );
}
