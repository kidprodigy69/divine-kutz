# Deployment Guide — Divine Kutz

## Prerequisites

- Node.js 20.9+ installed
- Vercel account (recommended) or other Next.js-compatible hosting
- Supabase project configured (see `SUPABASE_SETUP.md`)
- Domain: `divinekutz.com` (or configure in Vercel)

## Environment Variables Required

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

## Deploy to Vercel (Recommended)

### Option 1: CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

When prompted, add your environment variables.

### Option 2: GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Add environment variables in the Vercel dashboard
5. Deploy

### Custom Domain

In Vercel Dashboard → **Settings → Domains**:
- Add `divinekutz.com`
- Add `www.divinekutz.com`
- Follow DNS instructions to point your domain

## Local Development

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Start dev server
npm run dev
# Open http://localhost:3000
```

## Production Build Check

```bash
npm run build
npm run start
```

## Post-Deploy Checklist

- [ ] All pages load without errors
- [ ] Hero images display correctly
- [ ] Contact form submits to Supabase
- [ ] Google Maps iframe loads
- [ ] Booking links open Booksy correctly
- [ ] Social links open in new tabs
- [ ] Mobile view looks correct at 375px
- [ ] Sticky booking bar appears on mobile
- [ ] All gallery images load
- [ ] Navigation hamburger works on mobile

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion v12
- **Icons**: Lucide React v1.8
- **Database/Forms**: Supabase
- **Fonts**: Playfair Display + Montserrat (Google Fonts)
- **Deployment**: Vercel (recommended)
