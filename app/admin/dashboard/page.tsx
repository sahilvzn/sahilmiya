"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { PenTool, Eye, Send, LogOut, FileText } from "lucide-react"

export default function AdminDashboard() {
  const [token, setToken] = useState("")
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [activeTab, setActiveTab] = useState("editor")
  
  // Blog post form state
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")
  const [image, setImage] = useState("")
  const [slug, setSlug] = useState("")
  
  const router = useRouter()

  useEffect(() => {
    const storedToken = localStorage.getItem("admin_token")
    if (!storedToken) {
      router.push("/admin")
      return
    }
    setToken(storedToken)
    fetchPosts(storedToken)
  }, [router])

  const fetchPosts = async (authToken: string) => {
    try {
      const response = await fetch("/api/admin/posts", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      if (response.ok) {
        const data = await response.json()
        setPosts(data.posts || [])
      }
    } catch (error) {
      console.error("Failed to fetch posts:", error)
    }
  }

  const generateSlug = (titleText: string) => {
    return titleText
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  const handleTitleChange = (value: string) => {
    setTitle(value)
    if (!slug || slug === generateSlug(title)) {
      setSlug(generateSlug(value))
    }
  }

  const handlePublish = async () => {
    if (!title || !description || !content) {
      alert("Please fill in all required fields")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/admin/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          content,
          tags: tags.split(",").map((tag) => tag.trim()).filter(Boolean),
          image,
          slug: slug || generateSlug(title),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        alert(data.error || "Failed to publish")
        setLoading(false)
        return
      }

      alert("Blog post published successfully!")
      
      // Reset form
      setTitle("")
      setDescription("")
      setContent("")
      setTags("")
      setImage("")
      setSlug("")
      
      // Refresh posts list
      fetchPosts(token)
      
      // Switch to posts tab
      setActiveTab("posts")
    } catch (error) {
      alert("Failed to publish. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("admin_token")
    router.push("/admin")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <PenTool className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Blog CMS</h1>
              <p className="text-sm text-muted-foreground">sahilmiya.in</p>
            </div>
          </div>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="editor">
              <PenTool className="w-4 h-4 mr-2" />
              New Post
            </TabsTrigger>
            <TabsTrigger value="posts">
              <FileText className="w-4 h-4 mr-2" />
              All Posts ({posts.length})
            </TabsTrigger>
          </TabsList>

          {/* Editor Tab */}
          <TabsContent value="editor" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Blog Post</CardTitle>
                <CardDescription>
                  Write your content in Markdown or HTML. It will be automatically formatted.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Title */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Title *
                  </label>
                  <Input
                    placeholder="Enter blog post title..."
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                  />
                </div>

                {/* Slug */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    URL Slug *
                  </label>
                  <Input
                    placeholder="url-friendly-slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Will be: /blog/{slug || "your-slug"}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Meta Description * (150-160 chars for SEO)
                  </label>
                  <Textarea
                    placeholder="A compelling description for search engines..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={2}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {description.length} / 160 characters
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Tags (comma-separated)
                  </label>
                  <Input
                    placeholder="AI, Automation, n8n, Claude AI"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>

                {/* Featured Image */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Featured Image URL
                  </label>
                  <Input
                    placeholder="/blog/my-image.png"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Upload image to /public/blog/ and reference it here
                  </p>
                </div>

                {/* Content Editor */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Content * (Markdown or HTML)
                  </label>
                  <Textarea
                    placeholder={`Write your blog post here...

You can use Markdown:
## Heading 2
### Heading 3

**Bold text** and *italic text*

\`\`\`python
def hello():
    return "Hello World"
\`\`\`

Or HTML:
<div class="custom-class">
  <h2>HTML Content</h2>
  <p>Direct HTML works too!</p>
</div>`}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={20}
                    className="font-mono text-sm"
                  />
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    onClick={handlePublish}
                    disabled={loading}
                    className="flex-1"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {loading ? "Publishing..." : "Publish Post"}
                  </Button>
                  <Button variant="outline" disabled>
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Posts List Tab */}
          <TabsContent value="posts" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Published Posts</CardTitle>
                <CardDescription>
                  All your published blog posts
                </CardDescription>
              </CardHeader>
              <CardContent>
                {posts.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    No posts yet. Create your first post!
                  </p>
                ) : (
                  <div className="space-y-4">
                    {posts.map((post: any) => (
                      <div
                        key={post.slug}
                        className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors"
                      >
                        <h3 className="font-semibold text-lg mb-1">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            {post.tags?.map((tag: string) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                window.open(`/blog/${post.slug}`, "_blank")
                              }
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          {post.date} • {post.readingTime}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
