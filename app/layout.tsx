import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Divine Kutz Grooming Lounge | Charlotte's Premier Barbershop",
  description:
    "Charlotte's premier luxury grooming lounge. 30+ years of master barbering excellence. Men's cuts, women's cuts, color, hot towel shaves & more. Black-owned. Book online with Booksy.",
  keywords: [
    'barbershop charlotte nc',
    'divine kutz',
    'grooming lounge charlotte',
    'master barber charlotte',
    'luxury barbershop',
    'black owned barbershop charlotte',
    'mens haircut charlotte',
    '5513 monroe rd charlotte',
  ],
  openGraph: {
    title: "Divine Kutz Grooming Lounge | Charlotte's Premier Barbershop",
    description:
      "30+ years of master barbering. Luxury grooming experience in Charlotte, NC. Book your appointment today.",
    url: 'https://divinekutz.com',
    siteName: 'Divine Kutz Grooming Lounge',
    images: [{ url: '/hero/hero-main.jpg', width: 1200, height: 630, alt: 'Divine Kutz Grooming Lounge Interior' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Divine Kutz Grooming Lounge | Charlotte's Premier Barbershop",
    description: "30+ years of master barbering in Charlotte, NC.",
    images: ['/hero/hero-main.jpg'],
  },
  metadataBase: new URL('https://divinekutz.com'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BarberShop',
  name: 'Divine Kutz Grooming Lounge',
  description: "Charlotte's premier luxury grooming lounge with 30+ years of master barbering.",
  url: 'https://divinekutz.com',
  telephone: '+19805987975',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5513 Monroe Rd',
    addressLocality: 'Charlotte',
    addressRegion: 'NC',
    postalCode: '28212',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.1893,
    longitude: -80.7598,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '18:00' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    bestRating: '5',
    reviewCount: '20',
  },
  priceRange: '$$',
  image: 'https://divinekutz.com/logo/logo.png',
  sameAs: [
    'https://www.instagram.com/divine_kutz_grooming_lounge/',
    'https://www.facebook.com/profile.php?id=61552968092078',
    'https://booksy.com/en-us/534283_divine-kutz-grooming-lounge_barber-shop_26844_charlotte',
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-onyx text-cream antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        {/* Mobile sticky booking bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
          <a
            href="https://booksy.com/en-us/534283_divine-kutz-grooming-lounge_barber-shop_26844_charlotte#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-gold text-onyx font-body font-bold text-sm tracking-luxury uppercase py-4"
          >
            Book Your Appointment
          </a>
        </div>
      </body>
    </html>
  )
}
