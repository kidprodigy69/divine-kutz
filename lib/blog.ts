import { getSupabase } from './supabase'

// Blog data access. Rows come from divine_kutz_blog_posts in the shared Onyx
// hub Supabase project. Visibility is enforced by RLS: the anon key can only
// SELECT rows where published = true AND publish_date <= today (America/New_York),
// so the monthly post "goes live" on the 1st with no cron, no deploy, no daemon.
// Pages using these helpers set `revalidate`, so the site picks the new post up
// within an hour of midnight on the 1st.

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  topic: string | null
  read_minutes: number | null
  publish_date: string
}

export async function getPosts(): Promise<BlogPost[]> {
  const supabase = getSupabase()
  if (!supabase) return []
  const { data, error } = await supabase
    .from('divine_kutz_blog_posts')
    .select('id,title,slug,excerpt,content,topic,read_minutes,publish_date')
    .order('publish_date', { ascending: false })
  if (error) return []
  return (data as BlogPost[]) ?? []
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const supabase = getSupabase()
  if (!supabase) return null
  const { data, error } = await supabase
    .from('divine_kutz_blog_posts')
    .select('id,title,slug,excerpt,content,topic,read_minutes,publish_date')
    .eq('slug', slug)
    .maybeSingle()
  if (error) return null
  return (data as BlogPost) ?? null
}

export function formatPostDate(iso: string): string {
  // publish_date is a plain date — parse as local, not UTC-midnight-shifted.
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
