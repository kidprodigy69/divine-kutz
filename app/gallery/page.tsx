import type { Metadata } from 'next'
import GalleryPageClient from './GalleryPageClient'

export const metadata: Metadata = {
  title: 'Gallery | Divine Kutz Grooming Lounge — Charlotte NC Barbershop Portfolio',
  description:
    'See the work of Master Barber John Simpson at Divine Kutz Grooming Lounge. Precision fades, color treatments, creative designs, and more.',
}

export default function GalleryPage() {
  return <GalleryPageClient />
}
