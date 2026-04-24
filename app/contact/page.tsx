import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact | Divine Kutz Grooming Lounge — Charlotte NC Barbershop',
  description:
    'Contact Divine Kutz Grooming Lounge at 5513 Monroe Rd, Charlotte NC 28212. Call (980) 598-7975 or book online via Booksy.',
}

export default function ContactPage() {
  return <ContactPageClient />
}
