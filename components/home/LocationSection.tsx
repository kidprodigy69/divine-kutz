'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/SocialIcons'

const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: '11:00 AM – 5:00 PM' },
  { day: 'Wednesday', time: '9:30 AM – 7:30 PM' },
  { day: 'Thursday', time: '9:30 AM – 7:30 PM' },
  { day: 'Friday', time: '9:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 3:00 PM' },
]

export default function LocationSection() {
  return (
    <section className="bg-onyx py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left — info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-body text-xs text-gold tracking-luxury uppercase mb-4"
            >
              Find Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-black text-cream mb-8 leading-tight"
            >
              Visit the
              <br />
              <span className="text-gold">Lounge.</span>
            </motion.h2>

            <div className="gold-rule w-16 mb-8" />

            {/* Address */}
            <motion.a
              href="https://maps.google.com/?q=5513+Monroe+Rd+Charlotte+NC+28212"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-3 group mb-5"
            >
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-body text-sm text-cream group-hover:text-gold transition-colors">5513 Monroe Rd</p>
                <p className="font-body text-sm text-cream-muted">Charlotte, NC 28212</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+19805987975"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 group mb-8"
            >
              <Phone size={16} className="text-gold shrink-0" />
              <p className="font-body text-sm text-cream group-hover:text-gold transition-colors">(980) 598-7975</p>
            </motion.a>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock size={14} className="text-gold" />
                <p className="font-body text-xs tracking-luxury uppercase text-gold">Hours</p>
              </div>
              <div className="space-y-2">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex items-center justify-between border-b border-cream-muted/10 pb-2">
                    <p className="font-body text-xs text-cream-muted">{day}</p>
                    <p className={`font-body text-xs font-medium ${time === 'Closed' ? 'text-cream-muted/40' : 'text-cream'}`}>
                      {time}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 mt-8"
            >
              <a
                href="https://www.instagram.com/divine_kutz_grooming_lounge/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-xs text-cream-muted hover:text-gold transition-colors"
              >
                <InstagramIcon size={16} />
                @divine_kutz_grooming_lounge
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-4 mt-3"
            >
              <a
                href="https://www.facebook.com/profile.php?id=61552968092078&sk=photos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-xs text-cream-muted hover:text-gold transition-colors"
              >
                <FacebookIcon size={16} />
                Divine Kutz on Facebook
              </a>
            </motion.div>
          </div>

          {/* Right — map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden border border-gold/20" style={{ paddingBottom: '100%' }}>
              <iframe
                src="https://maps.google.com/maps?q=5513+Monroe+Rd+Charlotte+NC+28212&output=embed"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.85)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Divine Kutz Grooming Lounge Location"
              />
            </div>
            {/* Gold corner accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
