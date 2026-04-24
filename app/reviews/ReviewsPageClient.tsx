'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Miles Dailey',
    rating: 5,
    text: 'Great communication and overall service. Always walk out feeling fresh.',
    date: '1 review · 1 photo',
    price: null,
  },
  {
    name: 'Richard Tillman',
    rating: 5,
    text: 'The best barber in Charlotte NC.',
    date: 'Local Guide · 29 reviews',
    price: null,
  },
  {
    name: 'Davon Kelley',
    rating: 5,
    text: 'Finally found a barber in the Charlotte area. Great skills and really comes through. Highly recommend.',
    date: '5 reviews · 1 year ago',
    price: '$30–40',
  },
  {
    name: 'Tenee Learson',
    rating: 5,
    text: 'I highly recommend this great barber. Five stars — absolutely worth every dollar.',
    date: '1 review · 1 year ago',
    price: '$40–50',
  },
  {
    name: 'gilbert dow',
    rating: 5,
    text: 'Always keep me and my lil guy with a fresh cut. Big 5 stars from both of us.',
    date: '3 reviews · 1 year ago',
    price: null,
  },
  {
    name: 't scott',
    rating: 5,
    text: 'Very professional. Clean environment, great skills, and a barber who genuinely cares.',
    date: '9 reviews · 2 years ago',
    price: null,
  },
  {
    name: 'Reginald Davis',
    rating: 5,
    text: 'Great experience every single time. Keeps me looking sharp — what more can you ask for?',
    date: '2 reviews · 1 year ago',
    price: '$40–50',
  },
  {
    name: 'Tabe David',
    rating: 5,
    text: 'Great service! Clean cuts, professional atmosphere. Divine Kutz is the real deal.',
    date: '1 review · 6 months ago',
    price: null,
  },
]

export default function ReviewsPageClient() {
  const avgRating = 5.0
  const totalReviews = reviews.length

  return (
    <div className="bg-onyx min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'radial-gradient(ellipse at center top, #C9A227, transparent 70%)' }} />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs text-gold tracking-luxury uppercase mb-4"
          >
            Client Reviews
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl md:text-8xl font-black text-cream leading-none mb-8"
          >
            What Charlotte
            <br />
            <span className="text-gold">Is Saying.</span>
          </motion.h1>

          {/* Rating display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex flex-col items-center glass-card px-12 py-8 mt-4"
          >
            <p className="font-display text-7xl font-black text-gold leading-none mb-3">
              {avgRating.toFixed(1)}
            </p>
            <div className="flex items-center gap-1.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="font-body text-xs text-cream-muted tracking-luxury uppercase">
              {totalReviews}+ Verified Google Reviews
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map(({ name, rating, text, date, price }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass-card p-7 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <Quote size={22} className="text-gold/35" />

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rating)].map((_, j) => (
                    <Star key={j} size={13} className="fill-gold text-gold" />
                  ))}
                </div>

                {/* Review text */}
                <p className="font-body text-sm text-cream-muted leading-relaxed flex-1">
                  &ldquo;{text}&rdquo;
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-gold/10 flex items-start justify-between">
                  <div>
                    <p className="font-body text-sm font-semibold text-cream">{name}</p>
                    <p className="font-body text-[11px] text-cream-muted/60 mt-0.5">{date}</p>
                    <p className="font-body text-[11px] text-gold mt-1">Google Review</p>
                  </div>
                  {price && (
                    <span className="font-body text-[11px] text-cream-muted border border-gold/20 px-2 py-1 mt-1">
                      {price}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="bg-gold py-20 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #0A0A0A 0px, #0A0A0A 1px, transparent 1px, transparent 8px)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-6xl font-black text-onyx mb-6"
          >
            Share Your
            <br />
            Experience.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm text-onyx/70 mb-8"
          >
            Had a great experience at Divine Kutz? Leave us a review and help others find the best barber in Charlotte.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://www.google.com/search?sca_esv=17de63e8a22fe1ba&sxsrf=ANbL-n6i0M2SXrZ0w4PCzzio8nHflIREHA:1776822053718&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOXb-oCLNhgqjtSip4zLbTKtfPYajDwnWL2bu1lRTAOH19ayhWLI7AX761PL1KY8kQgazXIHIrEzadKR-BNLcULEcOvPCnUTXXIUs5pgkwtKv0Wjvog%3D%3D&q=Divine+Kutz+Grooming+Lounge+Reviews&sa=X&ved=2ahUKEwjx0tz6qYCUAxWXTDABHb8MIJ4Q0bkNegQILBAH&biw=1920&bih=958&dpr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-onyx hover:bg-charcoal text-cream font-body font-bold text-xs tracking-luxury uppercase px-8 py-4 transition-all duration-300"
            >
              Leave a Google Review
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://booksy.com/en-us/534283_divine-kutz-grooming-lounge_barber-shop_26844_charlotte#ba_s=seo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-transparent border border-onyx/30 hover:border-onyx text-onyx font-body font-bold text-xs tracking-luxury uppercase px-8 py-4 transition-all duration-300"
            >
              Book Your Next Appointment →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
