'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-onyx/95 backdrop-blur-md border-b border-gold/10 py-3'
            : 'bg-gradient-to-b from-black/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 shrink-0">
            <Image
              src="/logo/logo.png"
              alt="Divine Kutz"
              width={64}
              height={64}
              className="h-12 w-12 md:h-16 md:w-16 object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-body text-xs tracking-luxury uppercase transition-colors duration-200 relative group ${
                  pathname === href ? 'text-gold' : 'text-cream-muted hover:text-cream'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://booksy.com/en-us/534283_divine-kutz-grooming-lounge_barber-shop_26844_charlotte#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-onyx font-body font-bold text-xs tracking-luxury uppercase px-5 py-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,162,39,0.4)]"
          >
            Book Now
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-cream p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            className="fixed inset-0 z-40 bg-onyx flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gold/10">
              <Image src="/logo/logo.png" alt="Divine Kutz" width={52} height={52} className="h-12 w-12 object-contain" />
              <button onClick={() => setOpen(false)} className="text-cream p-1">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <Link
                    href={href}
                    className={`font-display text-3xl font-bold tracking-wide ${
                      pathname === href ? 'text-gold' : 'text-cream hover:text-gold'
                    } transition-colors`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.07 + 0.05, duration: 0.4 }}
                className="mt-4"
              >
                <a
                  href="https://booksy.com/en-us/534283_divine-kutz-grooming-lounge_barber-shop_26844_charlotte#ba_s=seo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gold text-onyx font-body font-bold text-sm tracking-luxury uppercase px-8 py-4"
                >
                  Book Your Appointment
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
