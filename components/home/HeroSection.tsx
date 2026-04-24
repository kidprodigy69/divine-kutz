'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { Star } from 'lucide-react'

const WORD_1 = 'DIVINE'
const WORD_2 = 'KUTZ'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
}

const containerDelayed: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.75 },
  },
}

const letterVariant: Variants = {
  hidden: { opacity: 0, y: 80, rotateX: -60 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] as readonly [number, number, number, number] },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
}

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.85])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden flex flex-col items-center justify-center">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src="/hero/hero-main.jpg"
          alt="Divine Kutz Grooming Lounge Interior — Charlotte NC"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-onyx"
        style={{ opacity: overlayOpacity }}
      />

      {/* Diagonal gold accent line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent origin-left"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Pre-title label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          animate={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-body text-xs text-gold tracking-widest-xl uppercase mb-6 md:mb-8"
        >
          Charlotte&apos;s Premier Grooming Lounge
        </motion.p>

        {/* Kinetic headline — DIVINE */}
        <motion.div
          className="overflow-hidden flex perspective-[800px]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {WORD_1.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariant}
              className="font-display font-black text-[18vw] md:text-[14vw] lg:text-[12vw] leading-none text-gold inline-block"
              style={{ textShadow: '0 0 40px rgba(201,162,39,0.35)' }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Kinetic headline — KUTZ */}
        <motion.div
          className="overflow-hidden flex"
          variants={containerDelayed}
          initial="hidden"
          animate="visible"
        >
          {WORD_2.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariant}
              className="font-display font-black text-[18vw] md:text-[14vw] lg:text-[12vw] leading-none text-cream inline-block"
              style={{ WebkitTextStroke: '1px rgba(201,162,39,0.3)' }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Grooming Lounge — luxury subtitle */}
        <div className="flex items-center gap-4 mt-3 mb-1">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.05, ease: 'easeOut' as const }}
            className="h-px w-10 md:w-16 bg-gold origin-right"
          />
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.45em' }}
            transition={{ duration: 1.2, delay: 1.05, ease: 'easeOut' as const }}
            className="font-body font-light text-[3vw] md:text-[1.4vw] lg:text-[1.1vw] text-gold uppercase"
            style={{ fontStyle: 'italic' }}
          >
            Grooming Lounge
          </motion.p>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.05, ease: 'easeOut' as const }}
            className="h-px w-10 md:w-16 bg-gold origin-left"
          />
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="w-24 h-px bg-gold my-6 md:my-8 origin-center"
        />

        {/* Trust row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
          className="flex items-center gap-3 md:gap-6 flex-wrap justify-center mb-8"
        >
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} className="fill-gold text-gold" />
            ))}
            <span className="font-body text-xs text-cream ml-1 font-semibold">5.0</span>
            <span className="font-body text-xs text-cream-muted">Google</span>
          </div>
          <span className="text-gold/30 hidden md:inline">|</span>
          <span className="font-body text-xs text-cream-muted tracking-wide">30+ Years Experience</span>
          <span className="text-gold/30 hidden md:inline">|</span>
          <span className="font-body text-xs text-cream-muted tracking-wide">Licensed Master Barber</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.4 }}
        >
          <a
            href="https://booksy.com/en-us/534283_divine-kutz-grooming-lounge_barber-shop_26844_charlotte#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-onyx font-body font-bold text-xs tracking-luxury uppercase px-8 py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,162,39,0.5)]"
          >
            Book Your Appointment
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] text-cream-muted tracking-luxury uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  )
}
