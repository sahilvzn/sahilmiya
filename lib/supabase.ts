import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseAnonKey = process.env.SUPABASE_PUBLISHABLE_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Public client (for reading blog posts)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Admin client (for admin operations - bypasses RLS)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
})

export interface BlogPost {
    id: number
    slug: string
    title: string
    description: string | null
    content: string
    author: string
    tags: string[]
    featured_image: string | null
    published: boolean
    created_at: string
    updated_at: string
}