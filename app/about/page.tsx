import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'About | Divine Kutz Grooming Lounge — Master Barber John Simpson',
  description:
    'Meet John Simpson, owner and Master Barber at Divine Kutz Grooming Lounge in Charlotte, NC. Over 30 years of barbering excellence. Black-owned business.',
}

export default function AboutPage() {
  return <AboutPageClient />
}
