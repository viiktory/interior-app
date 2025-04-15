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

interface AboutItem {
  id: string
  title: string
  text: string
}

const AboutSection: FC = () => {
  const [items, setItems] = useState<AboutItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'about'))
        const data = querySnapshot.docs.map((doc) => {
          const docData = doc.data()
          return {
            id: doc.id,
            title: docData.title?.trim() || 'No Title',
            text: docData.text || 'No description available',
          } as AboutItem
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
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-container mx-auto px-safe"
      >
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
                className="min-h-[400px] h-full bg-white rounded-xl p-8 flex flex-col justify-between items-center gap-6
            text-center border-2 border-btn-hover my-8
            transition-all duration-300 ease-in-out transform hover:shadow-xl cart-h"
              >
                <div className="flex-1 flex flex-col justify-center items-center gap-6">
                  <h3 className="text-cartTitle text-primary font-serif">{item.title}</h3>
                  <p className="text-base text-secondary font-sans">{item.text}</p>
                </div>
                <button className="text-link text-secondary font-sans p-2 my-2 rounded-full border-2 border-transparent hover:text-btn-hover hover:border-2 hover:border-btn-hover hover:shadow-md">
                  View More ➞
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}

export default AboutSection
