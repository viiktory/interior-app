import { FC, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { motion } from 'framer-motion'

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

  if (loading) return <p className="py-10 text-center">Loading...</p>

  return (
    <section className="mx-auto max-w-container rounded-[70px] bg-btn-hover pb-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto max-w-container px-safe"
      >
        <h1 className="second-title py-12 text-center font-serif text-title capitalize leading-[1.1] text-primary">
          What the People Thinks About Interno
        </h1>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="h-full px-3">
              <div className="flex h-full min-h-[350px] transform flex-col items-center justify-center gap-4 rounded-xl bg-white p-8 text-center transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-card-hover hover:shadow-lg">
                <h3 className="font-serif text-cartTitle text-primary">{item.name}</h3>
                <span className="font-sans text-link text-secondary">{item.city}</span>
                <p className="max-w-[280px] font-sans text-base text-secondary">{item.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}

export default Reviews
