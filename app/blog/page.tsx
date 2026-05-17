import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Blog - Sahil Miya | AI Engineering & Automation',
  description: 'Insights on AI systems, agentic workflows, and building intelligence layers.',
}

export const revalidate = 60

export default async function BlogPage() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-[#FEF7E7]">
      <header className="border-b border-[#D4A574] bg-[#FFF8E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-[#4A2511] hover:text-[#FFD700] transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <h1 className="text-4xl font-bold text-[#4A2511]">Blog</h1>
          <p className="text-[#4A2511]/70 mt-2">
            Thoughts on AI systems, agentic workflows, and building intelligence layers
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!posts || posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#4A2511]/60">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-[#FFF8E7] border border-[#D4A574] rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-[#4A2511] hover:text-[#FFD700] transition-colors mb-2">
                    {post.title}
                  </h2>
                </Link>

                {post.description && (
                  <p className="text-[#4A2511]/70 mb-4">{post.description}</p>
                )}

                <div className="flex items-center gap-4 text-sm text-[#4A2511]/60">
                  <time dateTime={post.created_at}>
                    {new Date(post.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag: string) => (
                      <span key={tag} className="px-3 py-1 bg-[#FFD700]/20 text-[#4A2511] rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <Link href={`/blog/${post.slug}`} className="inline-block mt-4 text-[#FFD700] hover:underline font-medium">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}