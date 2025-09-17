import { useState, useEffect } from 'react'
import { getBlogs, BlogsCardsProps } from '../../api/getBlogs'
import { Field, PostCard } from '@/components'

const BlogsCards = () => {
  const [blog, setBlogs] = useState<BlogsCardsProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogData = await getBlogs()
        setBlogs(blogData)
      } catch (error) {
        console.error('Error fetching about data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="container flex-col">
      <Field
        title="Recent Blogs"
        description="Get updates about our latest trends and techniques used in interior design project works"
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {blog.map(({ id, image, title, text }) => (
          <PostCard key={id} image={image} title={title} dataPost={text} button="Read more" />
        ))}
      </div>
    </section>
  )
}

export default BlogsCards
