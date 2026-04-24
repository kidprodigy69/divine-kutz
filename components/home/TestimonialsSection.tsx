'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Miles Dailey',
    rating: 5,
    text: 'Great communication and overall service. Always walk out feeling fresh.',
    price: null,
  },
  {
    name: 'Richard Tillman',
    rating: 5,
    text: 'The best barber in Charlotte NC. No questions asked.',
    price: null,
  },
  {
    name: 'Davon Kelley',
    rating: 5,
    text: 'Finally found a barber in the Charlotte area. Great skills and really comes through.',
    price: '$30–40',
  },
  {
    name: 'Tenee Learson',
    rating: 5,
    text: 'I highly recommend this great barber. Five stars across the board — worth every penny.',
    price: '$40–50',
  },
  {
    name: 'gilbert dow',
    rating: 5,
    text: 'Always keep me and my lil guy with a fresh cut. Big 5 stars from us.',
    price: null,
  },
  {
    name: 't scott',
    rating: 5,
    text: 'Very professional. Clean shop, great energy, perfect cut every time.',
    price: null,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-charcoal py-24 md:py-36 relative overflow-hidden">
      {/* Background gold radial */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #C9A227, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs text-gold tracking-luxury uppercase mb-3"
          >
            Client Love
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-black text-cream"
          >
            What Charlotte
            <br />
            <span className="text-gold">Is Saying.</span>
          </motion.h2>
        </div>

        {/* Review grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map(({ name, rating, text, price }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Quote icon */}
              <Quote size={20} className="text-gold/40" />

              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(rating)].map((_, j) => (
                  <Star key={j} size={12} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-sm text-cream-muted leading-relaxed flex-1">
                &ldquo;{text}&rdquo;
              </p>

              {/* Footer */}
              <div className="pt-3 border-t border-gold/10 flex items-center justify-between">
                <div>
                  <p className="font-body text-xs font-semibold text-cream">{name}</p>
                  <p className="font-body text-[10px] text-gold tracking-wide mt-0.5">Google Review</p>
                </div>
                {price && (
                  <span className="font-body text-[10px] text-cream-muted border border-gold/20 px-2 py-1">
                    {price}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?q=Divine+Kutz+Grooming+Lounge+Charlotte+NC"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-body text-xs text-gold tracking-luxury uppercase border-b border-gold/40 hover:border-gold pb-1 transition-colors"
          >
            Read All Reviews on Google →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
