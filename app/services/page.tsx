import type { Metadata } from 'next'
import ServicesPageClient from './ServicesPageClient'

export const metadata: Metadata = {
  title: 'Services & Pricing | Divine Kutz Grooming Lounge Charlotte NC',
  description:
    "Full service menu for Divine Kutz Grooming Lounge. Men's cuts from $45, kids' cuts from $30, color services, hot towel shave, eyebrow arching & more. Book on Booksy.",
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
