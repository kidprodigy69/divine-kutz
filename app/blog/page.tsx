import type { Metadata } from 'next'
import Link from 'next/link'
import { getPosts, formatPostDate } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'The Grooming Journal | Divine Kutz Grooming Lounge — Charlotte NC',
  description:
    'Straight talk from the chair: razor bumps, hair loss, waves, beard care and finding a barber you trust. A new entry on the first of every month from Divine Kutz in Charlotte, NC.',
  alternates: { canonical: '/blog' },
}

// New posts unlock in the database on the 1st of each month; revalidate keeps
// the page fresh within the hour with no redeploy.
export const revalidate = 3600

export default async function BlogIndex() {
  const posts = await getPosts()
  const [latest, ...rest] = posts

  return (
    <main className="min-h-screen bg-onyx pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Masthead */}
        <div className="mb-14 border-b border-gold/25 pb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            From the chair · First of every month
          </p>
          <h1 className="font-display text-4xl text-cream sm:text-6xl">The Grooming Journal</h1>
          <p className="mt-4 max-w-2xl text-cream-muted">
            Honest talk on hair, skin and the barbershop — razor bumps, hairlines, waves,
            beards, and everything we answer in the chair all day.
          </p>
        </div>

        {posts.length === 0 && (
          <p className="text-cream-muted">The first entry is on its way — check back soon.</p>
        )}

        {/* Latest entry — featured */}
        {latest && (
          <Link
            href={`/blog/${latest.slug}`}
            className="group mb-16 block border border-gold/30 bg-charcoal p-8 transition-colors duration-300 hover:border-gold sm:p-12"
          >
            <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <span>Latest entry</span>
              <span aria-hidden="true" className="h-px w-8 bg-gold/50" />
              <span className="text-cream-muted">{formatPostDate(latest.publish_date)}</span>
              {latest.topic && <span className="text-cream-muted">· {latest.topic}</span>}
            </div>
            <h2 className="font-display text-3xl leading-tight text-cream transition-colors duration-300 group-hover:text-gold sm:text-5xl">
              {latest.title}
            </h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-cream-muted">{latest.excerpt}</p>
            <p className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Read the entry
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </p>
          </Link>
        )}

        {/* Archive */}
        {rest.length > 0 && (
          <>
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-cream-muted">
              Earlier entries
            </h2>
            <ul className="divide-y divide-gold/15 border-t border-gold/15">
              {rest.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group grid gap-2 py-7 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-8"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-muted">
                      {formatPostDate(p.publish_date)}
                      {p.topic && <span className="mt-1 block text-gold">{p.topic}</span>}
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-cream transition-colors duration-300 group-hover:text-gold sm:text-2xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-cream-muted">{p.excerpt}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  )
}
