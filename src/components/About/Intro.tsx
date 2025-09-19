import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { getIntro, IntroItem } from '@/api/getIntro.ts'
import { ItemCard, FadeIn } from '../../components'

const Intro = () => {
  const [data, setData] = useState<IntroItem[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const introData = await getIntro()
        setData(introData)
      } catch (error) {
        console.error('Error fetching about data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="container my-16 gap-4 pt-6 lg:my-24">
      {data.length > 0 && (
        <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map(({ id, title, text }, index) => (
          <SwiperSlide key={id}>
            <FadeIn viewport={{ once: true }} delay={index * 0.3} y={50}>
              <ItemCard
                title={title}
                description={text}
                button="View More"
                className="bg-sectionBg"
              />
            </FadeIn>
          </SwiperSlide>
        ))}
      </Swiper>
        )}
    </section>
  )
}

export default Intro
