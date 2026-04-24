'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gold">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #0A0A0A 0px, #0A0A0A 1px, transparent 1px, transparent 8px)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-luxury uppercase text-onyx/60 mb-4"
        >
          Ready to Look Your Best?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-onyx leading-[0.95] mb-10"
        >
          Book Your
          <br />
          Throne.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://booksy.com/en-us/534283_divine-kutz-grooming-lounge_barber-shop_26844_charlotte#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-onyx hover:bg-charcoal text-cream font-body font-bold text-xs tracking-luxury uppercase px-8 py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(10,10,10,0.5)]"
          >
            Book on Booksy
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>

          <a
            href="tel:+19805987975"
            className="inline-flex items-center gap-2 bg-transparent border border-onyx/30 hover:border-onyx text-onyx font-body font-bold text-xs tracking-luxury uppercase px-8 py-4 transition-all duration-300"
          >
            <Phone size={14} />
            (980) 598-7975
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-[11px] text-onyx/50 mt-8"
        >
          Walk-ins welcome · After-hours appointments available · Free parking
        </motion.p>
      </div>
    </section>
  )
}
