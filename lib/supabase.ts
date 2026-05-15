import { createClient } from '@supabase/supabase-js'

export const _sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const _sbKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = _sbUrl && _sbKey ? createClient(_sbUrl, _sbKey) : null

export const getSupabase = () => supabase
