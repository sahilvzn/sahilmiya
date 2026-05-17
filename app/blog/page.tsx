import { type Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { FooterSection } from "@/components/footer-section"
import { getAllPosts } from "@/lib/blog"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - AI Systems, Automation & Commerce Insights",
  description: "Deep dives into AI automation, LLM integration, workflow engineering, commerce systems, and the future of AI-powered business operations by Sahil Miya.",
  alternates: {
    canonical: "https://sahilmiya.in/blog",
  },
  openGraph: {
    title: "Blog - AI Systems, Automation & Commerce Insights | Sahil Miya",
    description: "Deep dives into AI automation, LLM integration, workflow engineering, and commerce systems.",
    url: "https://sahilmiya.in/blog",
    type: "website",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  // JSON-LD for Blog page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Sahil Miya's Blog",
    description: "AI automation, workflow engineering, and commerce systems insights",
    url: "https://sahilmiya.in/blog",
    author: {
      "@type": "Person",
      name: "Sahil Miya",
      url: "https://sahilmiya.in",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Systems & Automation Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Deep dives into AI workflow engineering, LLM integration, commerce automation, and building AI-first systems that actually ship.
            </p>
          </div>

          {/* Blog Posts Grid */}
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No blog posts yet. Check back soon for content on AI automation, workflow engineering, and commerce systems.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    {post.image && (
                      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <CalendarDays className="w-4 h-4" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span>•</span>
                        <Clock className="w-4 h-4" />
                        <span>{post.readingTime}</span>
                      </div>
                      <CardTitle className="text-2xl">{post.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <FooterSection />
    </>
  )
}
