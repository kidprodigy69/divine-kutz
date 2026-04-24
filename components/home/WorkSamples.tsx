'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const works = [
  { src: '/portfolio/work-sample-1.jpg', alt: 'Precision fade cut — Divine Kutz Charlotte', span: 'row-span-2' },
  { src: '/portfolio/work-sample-2.jpg', alt: 'Taper fade with lineup — Divine Kutz Charlotte', span: '' },
  { src: '/gallery/gallery-1.jpg', alt: 'Creative color design cut — Divine Kutz Charlotte', span: '' },
  { src: '/portfolio/work-sample-3.jpg', alt: "Clean fade and beard maintenance — Divine Kutz Charlotte", span: '' },
  { src: '/portfolio/work-sample-4.jpg', alt: 'Classic barber cut — Divine Kutz Charlotte', span: 'row-span-2' },
  { src: '/gallery/gallery-2.jpg', alt: 'Fresh cut with detailed design — Divine Kutz Charlotte', span: '' },
]

export default function WorkSamples() {
  return (
    <section className="bg-onyx py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
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
              className="font-display text-5xl md:text-6xl font-black text-cream leading-tight"
            >
              The Work
              <br />
              <span className="text-gold">Speaks.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 font-body text-xs text-gold tracking-luxury uppercase border-b border-gold/40 hover:border-gold pb-1 transition-colors"
            >
              Full Gallery →
            </Link>
          </motion.div>
        </div>

        {/* Portrait grid — natural image height, no cropping */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {works.map(({ src, alt }, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative overflow-hidden group"
            >
              <Image
                src={src}
                alt={alt}
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/40 transition-colors duration-400" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-all duration-400" />
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-gold/0 group-hover:border-gold/60 transition-all duration-400" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-gold/0 group-hover:border-gold/60 transition-all duration-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
