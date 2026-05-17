import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { verifyToken, getTokenFromRequest } from '@/lib/auth'
import { existsSync } from 'fs'

export async function POST(request: Request) {
  try {
    // Verify authentication
    const token = getTokenFromRequest(request)
    if (!token || !verifyToken(token)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { title, description, content, tags, image, slug } = await request.json()

    // Validate required fields
    if (!title || !description || !content || !slug) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create content/blog directory if it doesn't exist
    const contentDir = join(process.cwd(), 'content', 'blog')
    if (!existsSync(contentDir)) {
      await mkdir(contentDir, { recursive: true })
    }

    // Generate MDX frontmatter
    const frontmatter = `---
title: "${title}"
description: "${description}"
date: "${new Date().toISOString().split('T')[0]}"
author: "Sahil Miya"
tags: [${tags?.map((tag: string) => `"${tag}"`).join(', ') || '"AI", "Automation"'}]
${image ? `image: "${image}"` : ''}
---

`

    const fullContent = frontmatter + content

    // Write file
    const filePath = join(contentDir, `${slug}.mdx`)
    await writeFile(filePath, fullContent, 'utf-8')

    return NextResponse.json({
      success: true,
      message: 'Blog post published successfully',
      slug,
      url: `/blog/${slug}`
    })
  } catch (error) {
    console.error('Blog post creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    )
  }
}

// Get all blog posts (for admin dashboard)
export async function GET(request: Request) {
  try {
    const token = getTokenFromRequest(request)
    if (!token || !verifyToken(token)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Import getAllPosts dynamically to avoid build-time issues
    const { getAllPosts } = await import('@/lib/blog')
    const posts = getAllPosts()

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}
