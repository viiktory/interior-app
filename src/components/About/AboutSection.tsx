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

  if (loading) return <p className="py-10 text-center">Loading...</p>

  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto max-w-container px-safe"
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
              <div className="cart-h my-8 flex h-full min-h-[400px] transform flex-col items-center justify-between gap-6 rounded-xl border-2 border-btn-hover bg-white p-8 text-center transition-all duration-300 ease-in-out hover:bg-card-hover hover:shadow-xl">
                <div className="flex flex-1 flex-col items-center justify-center gap-6">
                  <h3 className="font-serif text-cartTitle text-primary">{item.title}</h3>
                  <p className="font-sans text-base text-secondary">{item.text}</p>
                </div>
                <button className="my-2 rounded-full border-2 border-transparent p-2 font-sans text-link text-secondary hover:border-2 hover:border-btn-hover hover:text-btn-hover hover:shadow-md">
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
