'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { calculateInstallment } from '@/lib/calculatorConfig';

export default function CalculatorPage() {
  const [productPrice, setProductPrice] = useState<number>(10000);
  const [downPaymentPercentage, setDownPaymentPercentage] = useState<number>(20);
  const [durationMonths, setDurationMonths] = useState<number>(6);

  const termsRef = useRef(null);
  const faqRef = useRef(null);
  const termsInView = useInView(termsRef, { once: true, amount: 0.3 });
  const faqInView = useInView(faqRef, { once: true, amount: 0.3 });

  // Calculate results in real-time
  const calculation = calculateInstallment(productPrice, downPaymentPercentage, durationMonths);

  const faqs = [
    {
      question: 'How is the profit calculated?',
      answer: 'For payment plans 6 months or less, we apply a 30% profit ratio. For plans longer than 6 months, we apply a 60% profit ratio to the remaining balance after your down payment.',
    },
    {
      question: 'Can I change my down payment amount?',
      answer: 'Yes! You can adjust your down payment percentage to see how it affects your monthly payments. A higher down payment reduces your monthly installments.',
    },
    {
      question: 'What happens if I miss a payment?',
      answer: 'We understand life happens. Please contact our support team immediately if you anticipate missing a payment. We offer flexible solutions to help you stay on track.',
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'Absolutely not. The calculator shows you the complete breakdown of all costs. What you see is what you pay - no surprises, no hidden fees.',
    },
    {
      question: 'Can I pay off my balance early?',
      answer: 'Yes! You can pay off your remaining balance at any time without any early payment penalties. We encourage financial freedom.',
    },
    {
      question: 'What is the minimum down payment?',
      answer: 'The minimum down payment is typically 10% of the product price, but this may vary by product. Use the slider to see different down payment options.',
    },
  ];

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--green-light)] to-[var(--green-dark)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Payment Calculator
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Calculate your flexible payment plan and see exactly what you'll pay each month
          </motion.p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[var(--navy)] mb-8">Configure Your Plan</h2>

              <div className="space-y-8">
                {/* Product Price */}
                <div>
                  <label className="block text-sm font-medium text-[var(--navy)] mb-3">
                    Product Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--charcoal)] font-bold text-lg">
                      $
                    </span>
                    <input
                      type="number"
                      value={productPrice}
                      onChange={(e) => setProductPrice(Number(e.target.value) || 0)}
                      className="w-full pl-10 pr-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--green-dark)] focus:border-transparent transition-all"
                      placeholder="10000"
                      min="0"
                      step="100"
                    />
                  </div>
                  <input
                    type="range"
                    value={productPrice}
                    onChange={(e) => setProductPrice(Number(e.target.value))}
                    min="1000"
                    max="100000"
                    step="1000"
                    className="w-full mt-3 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--green-dark)]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$1,000</span>
                    <span>$100,000</span>
                  </div>
                </div>

                {/* Down Payment */}
                <div>
                  <label className="block text-sm font-medium text-[var(--navy)] mb-3">
                    Down Payment: {downPaymentPercentage}%
                  </label>
                  <input
                    type="range"
                    value={downPaymentPercentage}
                    onChange={(e) => setDownPaymentPercentage(Number(e.target.value))}
                    min="0"
                    max="50"
                    step="5"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--green-dark)]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>50%</span>
                  </div>
                  <div className="mt-3 p-3 bg-[var(--green-light)]/10 rounded-lg border border-[var(--green-light)]">
                    <p className="text-sm text-[var(--charcoal)]">
                      Down Payment Amount: <span className="font-bold text-[var(--green-dark)]">${calculation.downPaymentAmount.toLocaleString()}</span>
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-sm font-medium text-[var(--navy)] mb-3">
                    Payment Duration: {durationMonths} months
                  </label>
                  <input
                    type="range"
                    value={durationMonths}
                    onChange={(e) => setDurationMonths(Number(e.target.value))}
                    min="1"
                    max="24"
                    step="1"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--green-dark)]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 month</span>
                    <span>24 months</span>
                  </div>
                  <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm text-[var(--charcoal)]">
                      Profit Ratio: <span className="font-bold text-[var(--gold)]">{calculation.profitRatioApplied}%</span>
                      {durationMonths <= 6 ? ' (≤6 months)' : ' (>6 months)'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[var(--navy)] mb-8">Payment Breakdown</h2>

              <div className="bg-gradient-to-br from-[var(--green-light)]/10 to-[var(--green-dark)]/10 rounded-2xl p-8 border-2 border-[var(--green-light)] shadow-xl">
                <div className="space-y-6">
                  {/* Monthly Payment - Highlighted */}
                  <motion.div
                    className="bg-gradient-to-br from-[var(--green-light)] to-[var(--green-dark)] rounded-xl p-6 text-center text-white"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-sm opacity-90 mb-2">Monthly Payment</p>
                    <p className="text-5xl font-bold">${calculation.monthlyPayment.toLocaleString()}</p>
                    <p className="text-sm opacity-90 mt-2">for {durationMonths} months</p>
                  </motion.div>

                  {/* Breakdown Details */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-[var(--charcoal)]">Product Price</span>
                      <span className="font-bold text-[var(--navy)]">${productPrice.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-[var(--charcoal)]">Down Payment ({downPaymentPercentage}%)</span>
                      <span className="font-bold text-[var(--green-dark)]">-${calculation.downPaymentAmount.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-[var(--charcoal)]">Remaining Balance</span>
                      <span className="font-bold text-[var(--navy)]">${calculation.remainingBalance.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-[var(--charcoal)]">Profit ({calculation.profitRatioApplied}%)</span>
                      <span className="font-bold text-[var(--gold)]">+${calculation.profitAmount.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-[var(--charcoal)]">Total with Profit</span>
                      <span className="font-bold text-[var(--navy)]">${calculation.totalWithProfit.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center py-4 bg-[var(--navy)] rounded-lg px-4 mt-4">
                      <span className="text-white font-bold text-lg">Total Payable</span>
                      <span className="font-bold text-[var(--gold)] text-2xl">${calculation.totalPayable.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-[var(--gold)] to-[#b8930f] text-white font-bold rounded-lg shadow-lg"
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply This Plan
                  </motion.button>
                </div>
              </div>

              {/* Info Box */}
              <motion.div
                className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-blue-800">
                    This calculator provides an estimate. Final terms may vary based on product availability and approval.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16 bg-gray-50" ref={termsRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={termsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[var(--navy)] mb-8 text-center">Terms & Conditions</h2>

            <div className="bg-white rounded-xl p-8 shadow-lg space-y-6">
              <div>
                <h3 className="font-bold text-[var(--navy)] mb-2 flex items-center">
                  <span className="w-6 h-6 bg-[var(--green-dark)] text-white rounded-full flex items-center justify-center text-sm mr-2">1</span>
                  Payment Schedule
                </h3>
                <p className="text-[var(--charcoal)] ml-8">
                  Monthly payments are due on the same date each month. Late payments may incur additional fees as specified in your agreement.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[var(--navy)] mb-2 flex items-center">
                  <span className="w-6 h-6 bg-[var(--green-dark)] text-white rounded-full flex items-center justify-center text-sm mr-2">2</span>
                  Profit Calculation
                </h3>
                <p className="text-[var(--charcoal)] ml-8">
                  Profit is calculated on the remaining balance after down payment. Payment plans of 6 months or less have a 30% profit ratio, while plans longer than 6 months have a 60% profit ratio.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[var(--navy)] mb-2 flex items-center">
                  <span className="w-6 h-6 bg-[var(--green-dark)] text-white rounded-full flex items-center justify-center text-sm mr-2">3</span>
                  Early Payment
                </h3>
                <p className="text-[var(--charcoal)] ml-8">
                  You may pay off your remaining balance at any time without penalty. Early payment does not reduce the profit amount already applied to your plan.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[var(--navy)] mb-2 flex items-center">
                  <span className="w-6 h-6 bg-[var(--green-dark)] text-white rounded-full flex items-center justify-center text-sm mr-2">4</span>
                  Product Ownership
                </h3>
                <p className="text-[var(--charcoal)] ml-8">
                  The product remains the property of Yahya Enterprise until full payment is received. You will receive full ownership upon completion of all payments.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[var(--navy)] mb-2 flex items-center">
                  <span className="w-6 h-6 bg-[var(--green-dark)] text-white rounded-full flex items-center justify-center text-sm mr-2">5</span>
                  Cancellation Policy
                </h3>
                <p className="text-[var(--charcoal)] ml-8">
                  You may cancel your payment plan within 14 days of purchase for a full refund of payments made, minus a 10% processing fee. After 14 days, cancellation terms are subject to review.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[var(--navy)] mb-2 flex items-center">
                  <span className="w-6 h-6 bg-[var(--green-dark)] text-white rounded-full flex items-center justify-center text-sm mr-2">6</span>
                  Default Terms
                </h3>
                <p className="text-[var(--charcoal)] ml-8">
                  If you miss 2 consecutive payments, your account may be subject to collection procedures. We encourage you to contact us immediately if you're experiencing payment difficulties.
                </p>
              </div>

              <div className="mt-8 p-4 bg-[var(--gold)]/10 border border-[var(--gold)] rounded-lg">
                <p className="text-sm text-[var(--charcoal)]">
                  <strong>Important:</strong> By proceeding with a payment plan, you agree to these terms and conditions. Please read carefully before committing to a purchase.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white" ref={faqRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--charcoal)]">
              Everything you need to know about our payment calculator
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100 group"
                initial={{ opacity: 0, y: 30 }}
                animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <summary className="cursor-pointer font-bold text-[var(--navy)] flex items-center justify-between">
                  <span className="flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-br from-[var(--green-light)] to-[var(--green-dark)] text-white rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <svg className="w-5 h-5 text-[var(--green-dark)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-[var(--charcoal)] ml-11 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            className="mt-12 text-center p-8 bg-gradient-to-br from-[var(--green-light)]/10 to-[var(--green-dark)]/10 rounded-xl border border-[var(--green-light)]"
            initial={{ opacity: 0 }}
            animate={faqInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-xl font-bold text-[var(--navy)] mb-2">Still have questions?</h3>
            <p className="text-[var(--charcoal)] mb-4">Our team is here to help you understand your payment options</p>
            <motion.a
              href="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[var(--green-light)] to-[var(--green-dark)] text-white font-bold rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(45, 106, 79, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
