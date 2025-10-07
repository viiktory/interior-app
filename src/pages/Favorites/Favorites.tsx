import { useEffect, useState } from 'react'
import useSaveStore from '@/store/useSaveStore'
import { getBlogs, BlogsCardsProps } from '@/api/getBlogs'
import HeartsIcon from '@/assets/icons/hearts.svg?react'
import HeartsIconLeft from '@/assets/icons/hearts-left.svg?react'
import HeartsIconRight from '@/assets/icons/hearts-right.svg?react'
import { PostCard } from '@/components'

const Favorites = () => {
  const { savePosts, toggleSave } = useSaveStore()
  const savedIds = Object.keys(savePosts).filter((id) => savePosts[id])

  const [blogs, setBlogs] = useState<BlogsCardsProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs()
        setBlogs(data)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  if (loading) return <p>Loading...</p>

  const favoriteBlogs = blogs.filter((post) => savedIds.includes(post.id))

  if (favoriteBlogs.length === 0) {
    return (
      <section className="container mt-[200px] flex-col items-center gap-8">
        <h2 className="hero-title-h2 text-center">Your saved blogs will be displayed here</h2>
        <HeartsIcon className="mb-[220px] h-[80px] w-[400px] md:h-[100px] md:w-[600px] lg:h-[140px] lg:w-[800px]" />
      </section>
    )
  }

  return (
    <section className="container mt-[150px] flex-col items-center  gap-12">
      <div className="flex items-center gap-2">
        <HeartsIconLeft />
        <h2 className="hero-title-h2 text-center">Articles you&apos;ve saved</h2>
        <HeartsIconRight />
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-5 mb-[100px]">
        {favoriteBlogs.map((post) => (
          <PostCard
            key={post.id}
            image={post.image}
            title={post.title}
            description={post.description}
            className="bg-sectionBg"
            isSaved={savePosts[post.id]}
            onToggleSave={() => toggleSave(post.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default Favorites
