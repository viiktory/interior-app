import { FC, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/config'

interface ReviewsItem {
  id: string
  name: string
  city: string
  review: string
}

const Reviews: FC = () => {
  const [items, setItems] = useState<ReviewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'reviews'))
        const data = querySnapshot.docs.map((doc) => {
          const docData = doc.data()
          return {
            id: doc.id,
            name: docData.name,
            city: docData.city,
            review: docData.review,
          } as ReviewsItem
        })
        setItems(data)
      } catch (error) {
        console.error('Error fetching about data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p className="text-center py-10">Loading...</p>

  return (
    <section className="max-w-container mx-auto pb-24 bg-bgBeige rounded-[70px]">
      <div className=" px-safe text-center">
        <h1 className="text-title text-primary font-serif py-12">
          What the People Thinks About Interno
        </h1>
        <div className="flex overflow-x-auto gap-8 scroll-smooth scrollbar-hide px-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="min-w-[350px] max-w-[350px] shrink-0 bg-white flex flex-col gap-6 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-cartTitle text-primary font-serif">{item.name}</h3>
              <span className="text-link text-secondary font-sans">{item.city}</span>
              <p className="text-base text-secondary font-sans">{item.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Reviews
