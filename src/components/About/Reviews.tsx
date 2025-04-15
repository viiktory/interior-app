import { FC, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/config'

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

  if (loading) return <p className="text-center py-10">Loading...</p>

  return (
    <section className="max-w-container mx-auto pb-24 bg-btn-hover rounded-[70px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-container mx-auto px-safe"
      >
        <h1 className="text-title text-primary font-serif leading-[1.1] capitalize py-12 text-center second-title">
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
              <div
                className="min-h-[350px] h-full bg-white  rounded-xl p-8 flex flex-col justify-center items-center gap-6
              text-center transition-all duration-300 ease-in-out transform hover:shadow-xl cart-h"
              >
                <h3 className="text-cartTitle text-primary font-serif">{item.name}</h3>
                <span className="text-link text-secondary font-sans">{item.city}</span>
                <p className="text-base text-secondary font-sans">{item.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}
export default Reviews
