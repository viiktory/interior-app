import { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight, FiBookmark } from 'react-icons/fi'
import { getBlogs, BlogsCardsProps } from '@/api/getBlogs'
import useSaveStore from '@/store/useSaveStore'
import { Field, PostCard, FadeIn, Modal, Gallery } from '@/components'

const BlogsCards = () => {
  const [blog, setBlogs] = useState<BlogsCardsProps[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPost, setSelectedPost] = useState<BlogsCardsProps | null>(null)
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

  const totalPages = Math.ceil(blog.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = blog.slice(startIndex, startIndex + postsPerPage)

  const handlePageChange = (direction: 'next' | 'prev') => {
    setCurrentPage((prev) => (direction === 'next' ? prev + 1 : prev - 1))
  }

  const { savePosts, toggleSave } = useSaveStore()

  return (
    <section className="bg-background pb-8 pt-4">
      <FadeIn viewport={{ once: true, amount: 0.4 }}>
        <div className="container flex-col">
          <Field
            title="Recent Blogs"
            description="Get updates about our latest trends and techniques used in interior design project works"
            className="text-center"
          />
          <div className="grid grid-cols-1 gap-6 py-8 lg:grid-cols-3">
            {currentPosts.map((post) => (
              <PostCard
                key={post.id}
                image={post.image}
                title={post.title}
                dataPost={post.text}
                button="Read more"
                isSaved={savePosts[post.id]}
                onToggleSave={() => toggleSave(post.id)}
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => handlePageChange('prev')}
              disabled={currentPage === 1}
              className="rounded-full bg-secondary p-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50"
            >
              <FiChevronLeft size={20} />
            </button>

            <span className="font-medium">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => handlePageChange('next')}
              disabled={currentPage === totalPages}
              className="rounded-full bg-secondary p-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </FadeIn>

      {selectedPost && (
        <Modal onClose={() => setSelectedPost(null)}>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex flex-1 flex-col justify-between">
              <h2 className="hero-title-h2 mb-4">{selectedPost.title}</h2>
              <p className="mb-8 text-sm text-description">{selectedPost.text}</p>
              <p className="hero-subtitle-p mb-12">{selectedPost.description}</p>

              <button
                onClick={() => toggleSave(selectedPost.id)}
                className={`flex items-center self-start rounded-xl bg-secondary px-4 py-2 transition-all ${
                  savePosts[selectedPost.id]
                    ? 'bg-description text-white hover:bg-description/80'
                    : 'bg-secondary text-white hover:bg-secondary/80'
                }`}
              >
                <FiBookmark className="mr-2" />
                {savePosts[selectedPost.id] ? 'Saved' : 'Save'}
              </button>
            </div>

            <Gallery images={[selectedPost.image, selectedPost.image2, selectedPost.image3]} />
          </div>
        </Modal>
      )}
    </section>
  )
}

export default BlogsCards
