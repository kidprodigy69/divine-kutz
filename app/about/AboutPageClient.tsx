'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Crown, Award, Scissors, Star } from 'lucide-react'



const achievements = [
  { icon: Crown, title: 'Master Barber', desc: 'Licensed & certified professional with decades of hands-on craft' },
  { icon: Award, title: '30+ Years', desc: 'Three decades of barbering excellence in the Charlotte community' },
  { icon: Scissors, title: 'All Styles', desc: "Men's, women's, and kids' cuts — contemporary and classic" },
  { icon: Star, title: '5.0 Rating', desc: 'Perfect Google score built on consistent quality and care' },
]

export default function AboutPageClient() {
  return (
    <div className="bg-onyx min-h-screen pt-24">
      {/* Hero banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden flex items-end">
        <Image
          src="/hero/hero-main.jpg"
          alt="Divine Kutz Grooming Lounge Interior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/60 to-transparent" />
        <div className="relative z-10 px-6 md:px-12 pb-12 max-w-7xl w-full mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs text-gold tracking-luxury uppercase mb-2"
          >
            About Divine Kutz
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-black text-cream"
          >
            The Story
            <br />
            <span className="text-gold">Behind the Chair.</span>
          </motion.h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

            {/* Owner photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Offset border */}
              <div className="absolute top-6 left-6 right-0 bottom-0 border border-gold/25" />
              <div className="relative z-10 overflow-hidden" style={{ height: '600px' }}>
                <Image
                  src="/team/owner.jpg"
                  alt="John Simpson — Owner and Master Barber at Divine Kutz Charlotte NC"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-display text-3xl font-black text-cream">John Simpson</p>
                  <p className="font-body text-xs text-gold tracking-luxury uppercase mt-2">
                    Owner · Licensed Master Barber · 30+ Years Experience
                  </p>
                </div>
              </div>
              {/* Gold corner accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold z-20" />
            </motion.div>

            {/* Text content */}
            <div className="flex flex-col gap-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-body text-xs text-gold tracking-luxury uppercase"
              >
                The Craft
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl font-black text-cream leading-tight"
              >
                Passion Meets
                <br />
                <span className="text-gold">Precision.</span>
              </motion.h2>

              <div className="gold-rule w-12" />

              {[
                "Divine Kutz Grooming Lounge is not your average barbershop — it is a private, luxury suite owned and operated exclusively by John Simpson himself. Every appointment is a 1-on-1 experience curated solely for you, from the moment you walk in to the moment you leave.",
                "With over 30 years of mastery behind the chair, John brings an unmatched level of precision and intentionality to every single cut. No distractions. No crowds. Just you, your barber, and an environment built around your comfort, your style, and your standards.",
                '"My goal has always been your complete satisfaction — and keeping you looking your absolute best." That personal commitment is why clients across the Greater Charlotte Area return again and again.',
                'As a proud Black-owned business, Divine Kutz is a reflection of community, craft, and culture. When you book with John, you are not just getting a haircut — you are investing in an experience that honors your time and your image.',
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                  className="font-body text-sm text-cream-muted leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}

              {/* Perks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-3 mt-2"
              >
                {['Free Parking', 'Complimentary Beverages', 'Snacks Provided', 'By Appointment Only', 'After-Hours Sessions'].map((perk) => (
                  <span
                    key={perk}
                    className="font-body text-xs text-gold border border-gold/30 px-3 py-1.5 tracking-wide"
                  >
                    {perk}
                  </span>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-4"
              >
                <a
                  href="https://booksy.com/en-us/534283_divine-kutz-grooming-lounge_barber-shop_26844_charlotte#ba_s=seo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-onyx font-body font-bold text-xs tracking-luxury uppercase px-8 py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,162,39,0.4)]"
                >
                  Book with John
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-charcoal py-20 border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-gold/10">
            {achievements.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center text-center py-8 px-6"
              >
                <Icon size={24} className="text-gold mb-4" strokeWidth={1.5} />
                <p className="font-display text-xl font-bold text-cream mb-2">{title}</p>
                <p className="font-body text-xs text-cream-muted leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
