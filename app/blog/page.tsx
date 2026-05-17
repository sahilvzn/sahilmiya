import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { BlogPostStructuredData } from '@/components/structured-data'

export const revalidate = 60

export async function generateStaticParams() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('published', true)

  return posts?.map((post) => ({ slug: post.slug })) || []
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('published', true)
    .single()

  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} - Sahil Miya | AI Engineer`,
    description: post.description || post.title,
    keywords: post.tags?.join(', '),
    authors: [{ name: 'Sahil Miya', url: 'https://sahilmiya.in' }],
    creator: 'Sahil Miya',
    publisher: 'Sahil Miya',
    openGraph: {
      title: post.title,
      description: post.description || post.title,
      type: 'article',
      publishedTime: new Date(post.created_at).toISOString(),
      modifiedTime: new Date(post.updated_at).toISOString(),
      authors: ['Sahil Miya'],
      tags: post.tags,
      url: `https://sahilmiya.in/blog/${post.slug}`,
      siteName: 'Sahil Miya - AI Engineer',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || post.title,
      creator: '@sahilmiya',
    },
    alternates: {
      canonical: `https://sahilmiya.in/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('published', true)
    .single()

  if (!post) notFound()

  return (
    <>
      <BlogPostStructuredData post={post} />

      <div className="min-h-screen bg-[#FEF7E7]">
        <header className="border-b border-[#D4A574] bg-[#FFF8E7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#4A2511] hover:text-[#FFD700] transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#4A2511] mb-4">{post.title}</h1>

          {post.description && (
            <p className="text-xl text-[#4A2511]/70 mb-6">{post.description}</p>
          )}

          <div className="flex items-center gap-4 text-sm text-[#4A2511]/60 mb-8 pb-8 border-b border-[#D4A574]">
            <time dateTime={post.created_at}>
              {new Date(post.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{post.author}</span>
            <span>•</span>
            <span>{Math.ceil(post.content.split(' ').length / 200)} min read</span>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-[#FFD700]/20 text-[#4A2511] rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="prose prose-lg prose-headings:text-[#4A2511] prose-p:text-[#4A2511] prose-a:text-[#FFD700] prose-strong:text-[#4A2511] prose-code:text-[#4A2511] prose-pre:bg-[#4A2511] prose-pre:text-[#FFF8E7] max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-12 pt-8 border-t border-[#D4A574]">
            <div className="flex items-center justify-between">
              <Link href="/blog" className="text-[#FFD700] hover:underline font-medium">
                ← Back to all posts
              </Link>
              <div className="text-sm text-[#4A2511]/60">
                Last updated: {new Date(post.updated_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}