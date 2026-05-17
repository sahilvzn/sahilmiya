import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

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