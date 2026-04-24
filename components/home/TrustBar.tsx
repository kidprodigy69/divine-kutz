'use client'

import { motion } from 'framer-motion'
import { Award, Scissors, Crown, Star } from 'lucide-react'

const stats = [
  { icon: Crown, value: '30+', label: 'Years Mastery', sub: 'Master Barber' },
  { icon: Star, value: '5.0', label: 'Google Rating', sub: 'Perfect Score' },
  { icon: Award, value: '100%', label: 'Licensed & Certified', sub: 'Barber' },
  { icon: Scissors, value: 'Black-Owned', label: 'Business', sub: 'Charlotte, NC' },
]

export default function TrustBar() {
  return (
    <section className="bg-charcoal border-y border-gold/10 relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 10px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-gold/10">
          {stats.map(({ icon: Icon, value, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center py-6 px-4"
            >
              <Icon size={20} className="text-gold mb-3" strokeWidth={1.5} />
              <p className="font-display text-2xl md:text-3xl font-bold text-cream leading-none mb-1">
                {value}
              </p>
              <p className="font-body text-[10px] text-gold tracking-luxury uppercase mt-1">{label}</p>
              <p className="font-body text-[10px] text-cream-muted tracking-wide mt-0.5">{sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
