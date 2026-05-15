'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const galleryImages = [
  { src: '/gallery/gallery-1.jpg', alt: 'Creative color design cut — Divine Kutz Charlotte', size: 'tall' },
  { src: '/gallery/gallery-2.jpg', alt: 'Fresh precision fade — Divine Kutz Charlotte', size: 'normal' },
  { src: '/gallery/gallery-3.jpg', alt: 'Clean taper fade with lineup — Divine Kutz Charlotte', size: 'normal' },
  { src: '/gallery/gallery-4.jpg', alt: 'Detailed hair design — Divine Kutz Charlotte', size: 'tall' },
  { src: '/gallery/gallery-5.jpg', alt: "Men's cut and beard maintenance — Divine Kutz Charlotte", size: 'normal' },
  { src: '/gallery/gallery-6.jpg', alt: 'Expert barbering technique — Divine Kutz Charlotte', size: 'normal' },
  { src: '/gallery/gallery-7.jpg', alt: 'Signature cut — Divine Kutz Charlotte', size: 'normal' },
  { src: '/gallery/IMG_7054.JPG', alt: 'Fresh cut — Divine Kutz Charlotte', size: 'normal' },
  { src: '/gallery/IMG_7069.JPG', alt: 'Precision fade — Divine Kutz Charlotte', size: 'tall' },
  { src: '/gallery/IMG_7071.JPG', alt: 'Sharp lineup — Divine Kutz Charlotte', size: 'normal' },
  { src: '/gallery/IMG_8456.JPG', alt: 'Barbershop artistry — Divine Kutz Charlotte', size: 'normal' },
  { src: '/gallery/IMG_8458.JPG', alt: 'Clean cut result — Divine Kutz Charlotte', size: 'tall' },
  { src: '/gallery/IMG_8459.JPG', alt: 'Master barber work — Divine Kutz Charlotte', size: 'normal' },
  { src: '/gallery/3B07E16F-B7AB-4E7F-AA64-C9B9C35ACD20.JPG', alt: 'Premium grooming — Divine Kutz Charlotte', size: 'normal' },
  { src: '/gallery/3B664463-A6B9-473B-9BDB-13236129CFC5-COLLAGE.JPEG', alt: 'Signature cuts collage — Divine Kutz Charlotte', size: 'tall' },
  { src: '/gallery/photo-1.jpg', alt: 'Fresh cut — Divine Kutz Charlotte', size: 'normal' },
]

const portfolioImages = [
  { src: '/portfolio/work-sample-1.jpg', alt: 'Precision afro taper — Divine Kutz', size: 'normal' },
  { src: '/portfolio/work-sample-2.jpg', alt: 'Skin fade with waves — Divine Kutz', size: 'normal' },
  { src: '/portfolio/work-sample-3.jpg', alt: "Women's precision cut — Divine Kutz", size: 'normal' },
  { src: '/portfolio/work-sample-4.jpg', alt: 'Classic barbershop cut — Divine Kutz', size: 'normal' },
]

const interiorImages = [
  { src: '/hero/hero-main.jpg', alt: 'Divine Kutz lounge interior — Charlotte NC' },
  { src: '/hero/hero-secondary.jpg', alt: 'Divine Kutz premium barber chairs — Charlotte NC' },
]

export default function GalleryPageClient() {
  return (
    <div className="bg-onyx min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 md:py-28 text-center relative">
        <div className="absolute inset-0 opacity-[0.025]" style={{ background: 'radial-gradient(ellipse at center, #C9A227, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs text-gold tracking-luxury uppercase mb-4"
          >
            The Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl md:text-8xl font-black text-cream leading-none mb-6"
          >
            The Work.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-sm text-cream-muted max-w-md mx-auto"
          >
            30+ years of mastery. Every cut a signature. Browse our portfolio of precision, artistry, and excellence.
          </motion.p>
        </div>
      </section>

      {/* Main gallery — masonry */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs text-gold tracking-luxury uppercase mb-8"
          >
            Fresh Cuts
          </motion.p>

          {/* Masonry-style grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {galleryImages.map(({ src, alt }, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="relative overflow-hidden group break-inside-avoid"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/30 transition-colors duration-400" />
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio section */}
      <section className="bg-charcoal py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-body text-xs text-gold tracking-luxury uppercase mb-3"
              >
                Portfolio
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl font-black text-cream"
              >
                Signature Work
              </motion.h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {portfolioImages.map(({ src, alt }, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative h-64 md:h-80 overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/30 transition-colors duration-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior photos */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-body text-xs text-gold tracking-luxury uppercase mb-3"
            >
              The Space
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-black text-cream"
            >
              The Lounge
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {interiorImages.map(({ src, alt }, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative h-56 md:h-72 overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/25 transition-colors duration-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="bg-charcoal border-y border-gold/10 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs text-gold tracking-luxury uppercase mb-4">See More</p>
          <h2 className="font-display text-4xl font-black text-cream mb-6">Follow on Instagram</h2>
          <a
            href="https://www.instagram.com/divine_kutz_grooming_lounge/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-gold/30 hover:bg-gold hover:text-onyx text-gold font-body font-bold text-xs tracking-luxury uppercase px-8 py-4 transition-all duration-300"
          >
            @divine_kutz_grooming_lounge
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </section>
    </div>
  )
}
