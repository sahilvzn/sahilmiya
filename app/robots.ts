import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/api/'],
            },
            // Optimize for AI crawlers
            {
                userAgent: 'GPTBot', // OpenAI
                allow: '/',
                disallow: ['/admin/', '/api/'],
            },
            {
                userAgent: 'ChatGPT-User', // ChatGPT
                allow: '/',
                disallow: ['/admin/', '/api/'],
            },
            {
                userAgent: 'Claude-Web', // Anthropic Claude
                allow: '/',
                disallow: ['/admin/', '/api/'],
            },
            {
                userAgent: 'PerplexityBot', // Perplexity
                allow: '/',
                disallow: ['/admin/', '/api/'],
            },
            {
                userAgent: 'Applebot-Extended', // Apple Intelligence
                allow: '/',
                disallow: ['/admin/', '/api/'],
            },
        ],
        sitemap: 'https://sahilmiya.in/sitemap.xml',
    }
}