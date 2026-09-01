import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-onyx border-t border-gold/10 pb-20 md:pb-0">
      {/* Large editorial wordmark */}
      <div className="overflow-hidden border-b border-gold/10">
        <p className="font-display text-[18vw] md:text-[12vw] font-black leading-none text-gold/8 text-center select-none py-2 tracking-tight whitespace-nowrap">
          DIVINE KUTZ
        </p>
      </div>

      {/* Content row */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 md:gap-0">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Image src="/logo/logo.png" alt="Divine Kutz" width={80} height={80} className="w-16 h-16 object-contain" />
          <p className="font-body text-xs tracking-luxury uppercase text-gold">
            Charlotte&apos;s Premier Grooming Lounge
          </p>
          <p className="font-body text-xs text-cream-muted leading-relaxed max-w-[220px] text-center md:text-left">
            Black-owned. Master Barber. 30+ Years of Excellence.
          </p>
          {/* Social */}
          <div className="flex items-center gap-4 mt-1">
            <a
              href="https://www.instagram.com/divine_kutz_grooming_lounge/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-muted hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61552968092078&sk=photos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-muted hover:text-gold transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon size={18} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="flex flex-col items-center gap-3">
          <p className="font-body text-xs tracking-luxury uppercase text-gold mb-2">Quick Links</p>
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/services', label: 'Services' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/reviews', label: 'Reviews' },
  { href: '/blog', label: 'Journal' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-body text-xs text-cream-muted hover:text-gold transition-colors tracking-wide uppercase"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://booksy.com/en-us/534283_divine-kutz-grooming-lounge_barber-shop_26844_charlotte#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-gold border border-gold/40 hover:bg-gold hover:text-onyx transition-all px-4 py-2 tracking-luxury uppercase mt-2"
          >
            Book on Booksy
          </a>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="font-body text-xs tracking-luxury uppercase text-gold mb-2">Contact</p>
          <a
            href="tel:+19805987975"
            className="flex items-center gap-2 font-body text-xs text-cream-muted hover:text-gold transition-colors"
          >
            <Phone size={14} />
            (980) 598-7975
          </a>
          <a
            href="https://maps.google.com/?q=5513+Monroe+Rd+Charlotte+NC+28212"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-xs text-cream-muted hover:text-gold transition-colors text-right"
          >
            <MapPin size={14} className="shrink-0" />
            5513 Monroe Rd, Charlotte, NC 28212
          </a>
          <div className="mt-3 text-right">
            <p className="font-body text-xs tracking-luxury uppercase text-gold mb-2">Hours</p>
            <p className="font-body text-xs text-cream-muted">Mon: Closed</p>
            <p className="font-body text-xs text-cream-muted">Tue: 11am – 5pm</p>
            <p className="font-body text-xs text-cream-muted">Wed: 9:30am – 7:30pm</p>
            <p className="font-body text-xs text-cream-muted">Thu: 9:30am – 7:30pm</p>
            <p className="font-body text-xs text-cream-muted">Fri: 9am – 8pm</p>
            <p className="font-body text-xs text-cream-muted">Sat: 9am – 6pm</p>
            <p className="font-body text-xs text-cream-muted">Sun: 10am – 3pm</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10 py-5 px-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="font-body text-xs text-cream-muted/60 text-center">
          © {new Date().getFullYear()} Divine Kutz Grooming Lounge. All rights reserved.
        </p>
        <p className="font-body text-xs text-cream-muted/40 text-center">
          5513 Monroe Rd · Charlotte, NC 28212
        </p>
      </div>
    </footer>
  )
}
