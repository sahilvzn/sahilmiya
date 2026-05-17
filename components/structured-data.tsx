import { BlogPost } from '@/lib/supabase'

interface StructuredDataProps {
    post: BlogPost
}

export function BlogPostStructuredData({ post }: StructuredDataProps) {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description || post.title,
        author: {
            '@type': 'Person',
            name: 'Sahil Miya',
            url: 'https://sahilmiya.in',
            jobTitle: 'AI Engineer & Agentic Systems Architect',
            worksFor: {
                '@type': 'Organization',
                name: 'Qwikbrand',
                url: 'https://qwikbrand.com',
            },
            sameAs: [
                'https://linkedin.com/in/sahil-miya',
                'https://twitter.com/sahilmiya',
                'https://github.com/sahilvzn',
            ],
        },
        publisher: {
            '@type': 'Organization',
            name: 'Qwikbrand',
            logo: {
                '@type': 'ImageObject',
                url: 'https://sahilmiya.in/logo.png',
            },
        },
        datePublished: post.created_at,
        dateModified: post.updated_at,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://sahilmiya.in/blog/${post.slug}`,
        },
        keywords: post.tags?.join(', '),
        articleSection: 'AI Engineering',
        inLanguage: 'en-US',
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}

export function PersonStructuredData() {
    const personData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Sahil Miya',
        url: 'https://sahilmiya.in',
        image: 'https://sahilmiya.in/sahil-photo.png',
        jobTitle: 'AI Engineer & Agentic Systems Architect',
        description: 'India\'s leading AI engineer specializing in agentic systems, multi-LLM architectures, and AI automation. Founder of Qwikbrand.',
        knowsAbout: [
            'Artificial Intelligence',
            'Agentic AI Systems',
            'Multi-LLM Architecture',
            'Claude AI',
            'GPT-4',
            'AI Automation',
            'n8n Workflows',
            'AI Engineering',
            'Machine Learning',
            'Python',
            'TypeScript',
        ],
        worksFor: {
            '@type': 'Organization',
            name: 'Qwikbrand',
            url: 'https://qwikbrand.com',
        },
        sameAs: [
            'https://linkedin.com/in/sahil-miya',
            'https://twitter.com/sahilmiya',
            'https://github.com/sahilvzn',
        ],
        alumniOf: 'Your University', // Update this
        email: 'sahil@qwikbrand.com',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jaipur',
            addressRegion: 'Rajasthan',
            addressCountry: 'IN',
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
        />
    )
}

export function OrganizationStructuredData() {
    const orgData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Qwikbrand',
        alternateName: 'Qwik Brand',
        url: 'https://qwikbrand.com',
        logo: 'https://sahilmiya.in/logo.png',
        description: 'AI-first operations platform helping businesses replace manual workflows with agentic AI systems.',
        founder: {
            '@type': 'Person',
            name: 'Sahil Miya',
            url: 'https://sahilmiya.in',
        },
        sameAs: [
            'https://linkedin.com/company/qwikbrand',
            'https://twitter.com/qwikbrand',
        ],
        knowsAbout: [
            'AI Automation',
            'Agentic Systems',
            'Business Intelligence',
            'Workflow Automation',
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
        />
    )
}