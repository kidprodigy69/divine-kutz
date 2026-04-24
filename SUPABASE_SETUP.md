# Supabase Setup — Divine Kutz

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Click **New Project** and fill in the details
3. Choose a region close to Charlotte, NC (US East)

## 2. Create the Contact Submissions Table

Run the following SQL in the **SQL Editor** tab in Supabase:

```sql
CREATE TABLE contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the contact form)
CREATE POLICY "Allow anonymous inserts"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated reads (for the admin to view submissions)
CREATE POLICY "Allow authenticated reads"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
```

## 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

Find these values in your Supabase project under:
**Settings → API → Project URL** and **anon public key**

## 4. Verify the Form Works

1. Start the dev server: `npm run dev`
2. Go to `/contact`
3. Fill in the form and submit
4. Check the **Table Editor** in Supabase to see the submission

## 5. View Submissions (Optional Admin Setup)

Log into Supabase → Table Editor → `contact_submissions` to view all form submissions.

For email notifications, use **Supabase Database Webhooks** or set up a **Resend** integration.
