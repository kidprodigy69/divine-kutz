'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function InteriorSection() {
  return (
    <section className="bg-dark-warm py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs text-gold tracking-luxury uppercase mb-3"
          >
            The Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-black text-cream leading-tight"
          >
            A Space Built for
            <br />
            <span className="text-gold">Royalty.</span>
          </motion.h2>
        </div>

        {/* Overlapping image layout */}
        <div className="relative">
          {/* Main large image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative h-[400px] md:h-[560px] overflow-hidden"
          >
            <Image
              src="/hero/hero-secondary.jpg"
              alt="Divine Kutz premium barbershop interior — gold barber chairs and lounge area"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-warm/60 via-transparent to-dark-warm/60" />
          </motion.div>

        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-col md:flex-row items-start gap-8 max-w-4xl mx-auto"
        >
          <div className="flex-1">
            <p className="font-body text-sm text-cream-muted leading-relaxed">
              Step into a world-class grooming experience. Our lounge features luxury leather chairs,
              gold-trimmed barber stations, and an atmosphere that makes every visit feel special.
            </p>
          </div>
          <div className="flex-1">
            <p className="font-body text-sm text-cream-muted leading-relaxed">
              Complimentary beverages and snacks are always on hand. Free parking available.
              Every detail has been curated to ensure your comfort and satisfaction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
