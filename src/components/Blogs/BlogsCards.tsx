import { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { getBlogs, BlogsCardsProps } from '../../api/getBlogs'
import { Field, PostCard, FadeIn } from '@/components'

const BlogsCards = () => {
  const [blog, setBlogs] = useState<BlogsCardsProps[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 3

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

  const totalPages = Math.ceil(blog.length / postsPerPage) //2
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = blog.slice(startIndex, startIndex + postsPerPage)

  const handlePageChange = (direction: 'next' | 'prev') => {
    setCurrentPage((prev) => (direction === 'next' ? prev + 1 : prev - 1))
  }

  return (
    <section className=" bg-background pb-8 pt-4">
      <FadeIn viewport={{ once: true, amount: 0.4 }}>
        <div className="container flex-col">
          <Field
            title="Recent Blogs"
            description="Get updates about our latest trends and techniques used in interior design project works"
            className="text-center"
          />
          <div className="grid grid-cols-1 gap-6 py-8 lg:grid-cols-3">
            {currentPosts.map(({ id, image, title, text }) => (
              <PostCard key={id} image={image} title={title} dataPost={text} button="Read more" />
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => handlePageChange('prev')}
              disabled={currentPage === 1}
              className="rounded-full bg-secondary p-2 text-white disabled:opacity-50"
            >
              <FiChevronLeft size={20} />
            </button>

            <span className="font-medium">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => handlePageChange('next')}
              disabled={currentPage === totalPages}
              className="rounded-full bg-secondary p-2 text-white disabled:opacity-50"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

export default BlogsCards
