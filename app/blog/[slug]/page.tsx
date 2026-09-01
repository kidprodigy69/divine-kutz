import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost, getPosts, formatPostDate } from '@/lib/blog'

export const revalidate = 3600
export const dynamicParams = true

const BOOKSY =
  'https://booksy.com/en-us/534283_divine-kutz-grooming-lounge_barber-shop_26844_charlotte#ba_s=seo'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: 'Entry not found | Divine Kutz Grooming Lounge' }
  return {
    title: `${post.title} | Divine Kutz Grooming Journal`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  }
}

/** Minimal renderer for the journal's markdown subset: ## headings, - lists, paragraphs. */
function renderContent(content: string) {
  return content.split(/\n\n+/).map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="font-display mt-12 mb-4 text-2xl text-cream sm:text-3xl">
          {block.slice(3)}
        </h2>
      )
    }
    const lines = block.split('\n')
    if (lines.every((l) => l.startsWith('- '))) {
      return (
        <ul key={i} className="my-5 space-y-3">
          {lines.map((l, j) => (
            <li key={j} className="flex gap-3 leading-relaxed text-cream-muted">
              <span aria-hidden="true" className="mt-[11px] h-[5px] w-[5px] shrink-0 bg-gold" />
              <span>{l.slice(2)}</span>
            </li>
          ))}
        </ul>
      )
    }
    // A heading followed by list lines in the same block
    if (lines.some((l) => l.startsWith('- '))) {
      return (
        <div key={i}>
          {lines.map((l, j) =>
            l.startsWith('- ') ? (
              <p key={j} className="my-3 flex gap-3 leading-relaxed text-cream-muted">
                <span aria-hidden="true" className="mt-[11px] h-[5px] w-[5px] shrink-0 bg-gold" />
                <span>{l.slice(2)}</span>
              </p>
            ) : (
              <p key={j} className="my-5 leading-relaxed text-cream-muted">{l}</p>
            )
          )}
        </div>
      )
    }
    return (
      <p key={i} className="my-5 leading-relaxed text-cream-muted">
        {block}
      </p>
    )
  })
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publish_date,
    author: { '@type': 'Organization', name: 'Divine Kutz Grooming Lounge' },
    publisher: { '@type': 'Organization', name: 'Divine Kutz Grooming Lounge' },
    mainEntityOfPage: `https://divinekutz.com/blog/${post.slug}`,
  }

  return (
    <main className="min-h-screen bg-onyx pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-3xl px-6">
        <Link
          href="/blog"
          className="text-xs font-semibold uppercase tracking-[0.25em] text-gold transition-colors hover:text-gold-light"
        >
          ← The Grooming Journal
        </Link>

        <header className="mt-8 border-b border-gold/25 pb-8">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold uppercase tracking-[0.25em] text-cream-muted">
            <span>{formatPostDate(post.publish_date)}</span>
            {post.topic && <span className="text-gold">{post.topic}</span>}
            {post.read_minutes && <span>{post.read_minutes} min read</span>}
          </div>
          <h1 className="font-display text-3xl leading-tight text-cream sm:text-5xl">{post.title}</h1>
        </header>

        <div className="pt-4 text-[17px]">{renderContent(post.content)}</div>

        {/* CTA — every entry ends in the chair. */}
        <aside className="mt-14 border border-gold/30 bg-charcoal p-8 text-center sm:p-10">
          <p className="font-display text-2xl text-cream sm:text-3xl">Questions about your hair? Ask them in the chair.</p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream-muted">
            Thirty-plus years of master barbering in Charlotte. Book your appointment and get advice made for your head, not the internet&apos;s.
          </p>
          <a
            href={BOOKSY}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block border border-gold bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-onyx transition-colors duration-300 hover:bg-transparent hover:text-gold"
          >
            Book an Appointment
          </a>
        </aside>
      </article>
    </main>
  )
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((p) => ({ slug: p.slug }))
}
