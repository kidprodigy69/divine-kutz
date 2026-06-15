'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Check } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/SocialIcons'
import { getSupabase } from '@/lib/supabase'

const services = [
  "Men's Kut / Beard Maintenance",
  "Men's Kutz — No Beard",
  "Women's Kut",
  'Teen Kut',
  "Kid's Kutz",
  'Shape Up',
  'Color Service',
  'Hot Towel Shave',
  'Exfoliating Facial',
  'After Hours',
  'Other',
]

const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: '11:00 AM – 5:00 PM' },
  { day: 'Wednesday', time: '9:30 AM – 7:30 PM' },
  { day: 'Thursday', time: '9:30 AM – 7:30 PM' },
  { day: 'Friday', time: '9:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 3:00 PM' },
]

type FormState = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export default function ContactPageClient() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.')
      return
    }
    setSubmitting(true)
    setError('')
    try {
      const sb = getSupabase()
      if (!sb) throw new Error('Supabase not configured')
      const { error: sbError } = await sb
        .from('divine_kutz_contact_submissions')
        .insert([{ ...form, created_at: new Date().toISOString() }])
      if (sbError) throw sbError
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please call us directly at (980) 598-7975.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full bg-charcoal border border-cream-muted/15 focus:border-gold text-cream font-body text-sm px-4 py-3.5 outline-none transition-colors placeholder:text-cream-muted/40'

  return (
    <div className="bg-onyx min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ background: 'radial-gradient(ellipse at center, #C9A227, transparent 70%)' }} />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs text-gold tracking-luxury uppercase mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl md:text-8xl font-black text-cream leading-none"
          >
            Contact
            <br />
            <span className="text-gold">Us.</span>
          </motion.h1>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">

            {/* Left — contact info */}
            <div className="space-y-10">
              {/* Quick contact */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="font-body text-xs text-gold tracking-luxury uppercase mb-5">Direct Contact</p>
                <div className="space-y-4">
                  <a
                    href="tel:+19805987975"
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 border border-gold/30 group-hover:border-gold group-hover:bg-gold/5 transition-all">
                      <Phone size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-cream group-hover:text-gold transition-colors">(980) 598-7975</p>
                      <p className="font-body text-[11px] text-cream-muted">Call or text anytime</p>
                    </div>
                  </a>
                  <a
                    href="https://maps.google.com/?q=5513+Monroe+Rd+Charlotte+NC+28212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 border border-gold/30 group-hover:border-gold group-hover:bg-gold/5 transition-all shrink-0">
                      <MapPin size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-cream group-hover:text-gold transition-colors">5513 Monroe Rd</p>
                      <p className="font-body text-[11px] text-cream-muted">Charlotte, NC 28212 · Free parking</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <Clock size={14} className="text-gold" />
                  <p className="font-body text-xs text-gold tracking-luxury uppercase">Hours</p>
                </div>
                <div className="space-y-2">
                  {hours.map(({ day, time }) => (
                    <div key={day} className="flex items-center justify-between border-b border-cream-muted/8 pb-2">
                      <p className="font-body text-xs text-cream-muted">{day}</p>
                      <p className={`font-body text-xs font-medium ${time === 'Closed' ? 'text-cream-muted/40' : 'text-cream'}`}>{time}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-3"
              >
                <p className="font-body text-xs text-gold tracking-luxury uppercase mb-4">Follow Us</p>
                <a
                  href="https://www.instagram.com/divine_kutz_grooming_lounge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <InstagramIcon size={16} className="text-cream-muted group-hover:text-gold transition-colors" />
                  <span className="font-body text-sm text-cream-muted group-hover:text-gold transition-colors">
                    @divine_kutz_grooming_lounge
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61552968092078&sk=photos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <FacebookIcon size={16} className="text-cream-muted group-hover:text-gold transition-colors" />
                  <span className="font-body text-sm text-cream-muted group-hover:text-gold transition-colors">
                    Divine Kutz on Facebook
                  </span>
                </a>
              </motion.div>

              {/* Book direct */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <a
                  href="https://booksy.com/en-us/534283_divine-kutz-grooming-lounge_barber-shop_26844_charlotte#ba_s=seo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-onyx font-body font-bold text-xs tracking-luxury uppercase px-8 py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,162,39,0.4)]"
                >
                  Book on Booksy
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </motion.div>
            </div>

            {/* Right — contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-body text-xs text-gold tracking-luxury uppercase mb-6">Send a Message</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-10 flex flex-col items-center text-center gap-4"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gold/10 border border-gold/30">
                    <Check size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-cream">Message Sent!</h3>
                  <p className="font-body text-sm text-cream-muted max-w-xs">
                    Thank you for reaching out. We&apos;ll be in touch soon. For faster response, call us at (980) 598-7975.
                  </p>
                  <a
                    href="https://booksy.com/en-us/534283_divine-kutz-grooming-lounge_barber-shop_26844_charlotte#ba_s=seo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 font-body text-xs text-gold tracking-luxury uppercase border-b border-gold/40 hover:border-gold pb-1 transition-colors"
                  >
                    Book Your Appointment →
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-[11px] text-cream-muted tracking-wide uppercase block mb-2">
                        Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="font-body text-[11px] text-cream-muted tracking-wide uppercase block mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(980) 555-0000"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-[11px] text-cream-muted tracking-wide uppercase block mb-2">
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="font-body text-[11px] text-cream-muted tracking-wide uppercase block mb-2">
                      Service Interest
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-charcoal">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-charcoal">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-[11px] text-cream-muted tracking-wide uppercase block mb-2">
                      Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us what you need…"
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="font-body text-xs text-red-400">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gold hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed text-onyx font-body font-bold text-xs tracking-luxury uppercase py-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,162,39,0.4)]"
                  >
                    {submitting ? 'Sending…' : 'Send Message'}
                  </button>

                  <p className="font-body text-[11px] text-cream-muted/50 text-center">
                    For immediate booking, use{' '}
                    <a
                      href="https://booksy.com/en-us/534283_divine-kutz-grooming-lounge_barber-shop_26844_charlotte#ba_s=seo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:underline"
                    >
                      Booksy
                    </a>
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative border border-gold/15 overflow-hidden" style={{ height: '400px' }}>
            <iframe
              src="https://maps.google.com/maps?q=5513+Monroe+Rd+Charlotte+NC+28212&output=embed"
              className="w-full h-full"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.85)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Divine Kutz Grooming Lounge — 5513 Monroe Rd, Charlotte NC"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
