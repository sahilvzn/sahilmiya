import { supabase } from '@/lib/supabase'

export async function GET() {
    const { data: posts } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(50)

    const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sahil Miya - AI Engineering & Agentic Systems</title>
    <link>https://sahilmiya.in</link>
    <description>Insights on AI systems, agentic workflows, and building intelligence layers for modern businesses by India's leading AI engineer.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://sahilmiya.in/rss.xml" rel="self" type="application/rss+xml" />
    ${posts?.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>https://sahilmiya.in/blog/${post.slug}</link>
      <guid>https://sahilmiya.in/blog/${post.slug}</guid>
      <pubDate>${new Date(post.created_at).toUTCString()}</pubDate>
      <description><![CDATA[${post.description || ''}]]></description>
      <author>sahil@qwikbrand.com (Sahil Miya)</author>
      ${post.tags?.map((tag: string) => `<category>${tag}</category>`).join('') || ''}
    </item>
    `).join('') || ''}
  </channel>
</rss>`

    return new Response(feed, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    })
}