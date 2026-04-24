'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Scissors, Crown, ChevronRight } from 'lucide-react'

const services = [
  {
    category: 'Signature Cuts',
    icon: Crown,
    items: [
      { name: "Men's Kut / Beard Maintenance", price: '$50+', time: '35 min' },
      { name: "Men's Kutz — No Beard", price: '$45+', time: '30 min' },
      { name: "Women's Kut", price: '$45+', time: '30 min' },
      { name: "Teen Kut (13–16)", price: '$40+', time: '30 min' },
      { name: "Kid's Kutz (12 & under)", price: '$30+', time: '20 min' },
    ],
  },
  {
    category: 'Shape Ups',
    icon: Scissors,
    items: [
      { name: 'Shape Up with Beard', price: '$25+', time: '15 min' },
      { name: 'Shape Up / Hairline & Neck', price: '$20+', time: '15 min' },
    ],
  },
  {
    category: 'Color & Specialty',
    icon: Crown,
    items: [
      { name: "Men's Permanent Kut & Color", price: '$100+', time: '1h 30min' },
      { name: "Women's Kut & Color", price: '$125+', time: '1h 30min' },
    ],
  },
  {
    category: 'Premium Add-Ons',
    icon: Scissors,
    items: [
      { name: 'Hot Towel Shave', price: '$25+', time: '30 min' },
      { name: 'Exfoliating Facial', price: '$60+', time: '30 min' },
      { name: 'Eyebrow Arching', price: '$10+', time: '20 min' },
      { name: 'Shampoo, Condition & Blow Dry', price: '$15+', time: '10 min' },
    ],
  },
  {
    category: 'After Hours',
    icon: Crown,
    items: [
      { name: 'Evening (8:30pm–10pm)', price: '$100+', time: '45 min' },
      { name: 'Late Night (10pm–Midnight)', price: '$150+', time: '45 min' },
    ],
  },
]

export default function ServicesPreview() {
  return (
    <section className="bg-dark-warm py-24 md:py-36 relative overflow-hidden clip-diagonal-top">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-body text-xs text-gold tracking-luxury uppercase mb-3"
            >
              Our Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-black text-cream leading-tight"
            >
              Crafted for
              <br />
              <span className="text-gold">Perfection.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 font-body text-xs text-gold tracking-luxury uppercase border-b border-gold/40 hover:border-gold pb-1 transition-colors"
            >
              View Full Menu
              <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Horizontal scroll cards */}
        <div className="overflow-x-auto scrollbar-hide -mx-6">
          <div className="flex gap-5 px-6 pb-4" style={{ width: 'max-content' }}>
            {services.map(({ category, icon: Icon, items }, i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card p-6 w-72 shrink-0 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gold/15">
                  <Icon size={16} className="text-gold" strokeWidth={1.5} />
                  <p className="font-body text-xs text-gold tracking-luxury uppercase">{category}</p>
                </div>
                <div className="space-y-4">
                  {items.map(({ name, price, time }) => (
                    <div key={name} className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <p className="font-body text-sm text-cream leading-snug">{name}</p>
                        <p className="font-body text-[11px] text-cream-muted mt-0.5">{time}</p>
                      </div>
                      <p className="font-display text-base font-bold text-gold shrink-0">{price}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-[11px] text-cream-muted/60 mt-6 pl-1"
        >
          * All prices are starting rates. Final cost varies by hair type, length, and complexity.
        </motion.p>
      </div>
    </section>
  )
}
