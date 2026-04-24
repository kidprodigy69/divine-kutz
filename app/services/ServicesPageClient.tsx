'use client'

import { motion } from 'framer-motion'
import { Scissors, Crown, Clock, ChevronRight } from 'lucide-react'

const serviceCategories = [
  {
    id: 'cuts',
    category: 'Cuts',
    icon: Scissors,
    desc: "Premium cuts for the whole family — men's, women's, teens, and kids.",
    services: [
      { name: "Men's Kut / Beard Maintenance", price: '$50+', time: '35 min', desc: 'Full cut with complete beard shaping and maintenance.' },
      { name: "Men's Kutz — No Beard", price: '$45+', time: '30 min', desc: 'Precision men\'s haircut without beard work.' },
      { name: "Women's Kut", price: '$45+', time: '30 min', desc: "Women's haircut — contemporary and classic styles." },
      { name: 'Teen Kut (Ages 13–16)', price: '$40+', time: '30 min', desc: 'For teens without facial hair. Latest styles.' },
      { name: "Kid's Kutz (Ages 12 & under)", price: '$30+', time: '20 min', desc: 'Kid-friendly cuts. Designs add $5+.' },
    ],
  },
  {
    id: 'shapeups',
    category: 'Shape Ups',
    icon: Crown,
    desc: 'Sharp edges and clean lines for a crisp, finished look.',
    services: [
      { name: 'Shape Up with Beard', price: '$25+', time: '15 min', desc: 'Full edge-up including beard shaping.' },
      { name: 'Shape Up / Hairline & Neck Only', price: '$20+', time: '15 min', desc: 'Clean hairline and neck trim.' },
    ],
  },
  {
    id: 'color',
    category: 'Color & Specialty',
    icon: Crown,
    desc: 'Professional color services for a bold, elevated look.',
    services: [
      { name: "Men's Permanent Kut & Color", price: '$100+', time: '1h 30min', desc: 'Full cut with permanent color application.' },
      { name: "Women's Kut & Color", price: '$125+', time: '1h 30min', desc: "Women's cut with full color treatment." },
    ],
  },
  {
    id: 'addons',
    category: 'Premium Add-Ons',
    icon: Scissors,
    desc: 'Elevate your experience with our premium grooming enhancements.',
    services: [
      { name: 'Designs', price: '$5+', time: '5 min', desc: 'Custom hair art and design work.' },
      { name: 'Temporary Enhancements / Fibers', price: '$5+', time: '5 min', desc: 'Hair fiber and touch-up products.' },
      { name: 'Eyebrow Arching', price: '$10+', time: '20 min', desc: 'Defined, sculpted brows.' },
      { name: 'Shampoo, Condition & Blow Dry', price: '$15+', time: '10 min', desc: 'Full shampoo treatment with blow dry.' },
      { name: 'Hot Towel Shave', price: '$25+', time: '30 min', desc: 'Classic straight razor face shave starts at $10.' },
      { name: 'Exfoliating Facial', price: '$60+', time: '30 min', desc: 'Deep cleanse and exfoliation treatment.' },
    ],
  },
  {
    id: 'afterhours',
    category: 'After Hours',
    icon: Clock,
    desc: 'Need a fresh look outside regular hours? We accommodate.',
    services: [
      { name: 'Evening Appointment (8:30pm–10pm)', price: '$100+', time: '45 min', desc: 'After-hours evening booking.' },
      { name: 'Late Night Appointment (10pm–Midnight)', price: '$150+', time: '45 min', desc: 'Late-night emergency appointments.' },
    ],
  },
]

export default function ServicesPageClient() {
  return (
    <div className="bg-onyx min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ background: 'radial-gradient(ellipse at center, #C9A227, transparent 70%)' }} />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs text-gold tracking-luxury uppercase mb-4"
          >
            Full Service Menu
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl md:text-8xl font-black text-cream leading-none mb-6"
          >
            Our Services
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-20 h-px bg-gold mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-sm text-cream-muted max-w-lg mx-auto"
          >
            All prices are starting rates. Final cost varies by hair type, length, and complexity. Premium quality — always.
          </motion.p>
        </div>
      </section>

      {/* Service categories */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          {serviceCategories.map(({ id, category, icon: Icon, desc, services }, catIdx) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: catIdx * 0.05 }}
            >
              {/* Category header */}
              <div className="flex items-start gap-4 mb-8 pb-5 border-b border-gold/15">
                <div className="flex items-center justify-center w-10 h-10 border border-gold/30 shrink-0 mt-1">
                  <Icon size={16} className="text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold text-cream">{category}</h2>
                  <p className="font-body text-sm text-cream-muted mt-1">{desc}</p>
                </div>
              </div>

              {/* Service items */}
              <div className="space-y-0 divide-y divide-cream-muted/8">
                {services.map(({ name, price, time, desc: sDesc }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="group flex items-start justify-between gap-6 py-5 hover:bg-charcoal/30 -mx-4 px-4 transition-colors cursor-default"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-body text-base text-cream font-medium group-hover:text-gold transition-colors">{name}</p>
                      </div>
                      <p className="font-body text-xs text-cream-muted mt-1">{sDesc}</p>
                    </div>
                    <div className="flex flex-col items-end shrink-0 gap-1">
                      <p className="font-display text-xl font-bold text-gold">{price}</p>
                      <div className="flex items-center gap-1 text-cream-muted">
                        <Clock size={11} />
                        <span className="font-body text-[11px]">{time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking policy */}
      <section className="bg-charcoal border-y border-gold/10 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="font-body text-xs text-gold tracking-luxury uppercase mb-4">Booking Policy</p>
            <h2 className="font-display text-3xl font-bold text-cream mb-6">Please Read Before Booking</h2>
            <div className="space-y-3 text-left glass-card p-8">
              {[
                'Cancel via Booksy app or call at least 3 hours before your appointment to avoid a $30 cancellation fee.',
                'Arriving 10+ minutes late will incur a $30 late fee.',
                'To avoid fees, contact us directly at least 3 hours before your appointment time.',
              ].map((policy, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ChevronRight size={14} className="text-gold mt-0.5 shrink-0" />
                  <p className="font-body text-sm text-cream-muted">{policy}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs text-gold tracking-luxury uppercase mb-4">Ready?</p>
          <h2 className="font-display text-5xl font-black text-cream mb-8">Book Your Session</h2>
          <a
            href="https://booksy.com/en-us/534283_divine-kutz-grooming-lounge_barber-shop_26844_charlotte#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-onyx font-body font-bold text-xs tracking-luxury uppercase px-10 py-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,162,39,0.4)]"
          >
            Book on Booksy
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </section>
    </div>
  )
}
