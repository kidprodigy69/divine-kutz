'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutTeaser() {
  return (
    <section className="relative overflow-hidden bg-onyx py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-[580px]">

          {/* Left — text */}
          <div className="flex flex-col justify-center pr-0 md:pr-16 relative z-10 order-2 md:order-1 pt-12 md:pt-0">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-body text-xs text-gold tracking-luxury uppercase mb-4"
            >
              Meet The Owner
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-cream leading-[0.95] mb-8"
            >
              30 Years
              <br />
              <span className="text-gold">of Pure</span>
              <br />
              Craft.
            </motion.h2>

            <div className="gold-rule w-16 mb-8" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-body text-sm text-cream-muted leading-relaxed mb-4 max-w-md"
            >
              John Simpson, Owner of Divine Kutz, has dedicated over 30 years to mastering
              today&apos;s men&apos;s, women&apos;s, and kids&apos; latest hairstyles. As a licensed
              Master Barber, his passion for the art drives every cut.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-body text-sm text-cream-muted leading-relaxed mb-10 max-w-md"
            >
              &ldquo;My goal is always customer satisfaction, and keeping you looking your best.&rdquo;
              Complimentary beverages, snacks, and free parking make every visit a luxury experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-body text-xs text-gold tracking-luxury uppercase border-b border-gold/40 hover:border-gold pb-1 transition-colors"
              >
                Our Story
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Right — image with gold frame effect */}
          <div className="relative order-1 md:order-2 h-[360px] md:h-auto">
            {/* Offset gold border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-4 right-0 left-8 bottom-0 border border-gold/30 z-0"
            />
            {/* Image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative z-10 h-full"
            >
              <Image
                src="/team/owner.jpg"
                alt="John Simpson — Owner & Master Barber at Divine Kutz"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 via-transparent to-transparent" />
              {/* Name badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-xl font-bold text-cream">John Simpson</p>
                <p className="font-body text-xs text-gold tracking-luxury uppercase mt-1">Owner · Master Barber · 30+ Years</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background accent element */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-[0.02] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at right, #C9A227, transparent 70%)',
        }}
      />
    </section>
  )
}
