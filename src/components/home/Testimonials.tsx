export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmed M.',
      role: 'Customer',
      content: 'Amazing service! Got exactly what I wanted without breaking the bank. The payment plan was so flexible and easy to manage.',
      rating: 5,
    },
    {
      name: 'Fatima K.',
      role: 'Customer',
      content: 'The flexible payment plans made it so easy for me to purchase the laptop I needed for work. Highly recommend Yahya Enterprise!',
      rating: 5,
    },
    {
      name: 'Hassan A.',
      role: 'Customer',
      content: 'Best BNPL service I have used. The process was transparent, quick, and the customer service was excellent.',
      rating: 5,
    },
    {
      name: 'Zainab S.',
      role: 'Customer',
      content: 'Quick approval and even faster delivery. Very impressed with the professionalism and reliability of this service!',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[var(--charcoal)] max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[var(--gold)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <div className="flex-grow mb-4">
                <svg className="w-8 h-8 text-[var(--green-light)] mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[var(--charcoal)] italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--green-light)] to-[var(--green-dark)] flex items-center justify-center text-white font-bold mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[var(--navy)]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[var(--charcoal)]">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--green-light)]/20 to-[var(--green-dark)]/20 rounded-full border border-[var(--green-light)]">
            <svg className="w-6 h-6 text-[var(--gold)] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-[var(--navy)] font-semibold">
              Trusted by 100,000+ customers since 2015
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
