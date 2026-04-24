import type { Metadata } from 'next'
import ReviewsPageClient from './ReviewsPageClient'

export const metadata: Metadata = {
  title: 'Reviews | Divine Kutz Grooming Lounge — 5 Star Charlotte NC Barbershop',
  description:
    'See what Charlotte customers are saying about Divine Kutz Grooming Lounge. 5.0 Google rating. The best barber in Charlotte, NC.',
}

export default function ReviewsPage() {
  return <ReviewsPageClient />
}
