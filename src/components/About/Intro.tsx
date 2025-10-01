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
    <FadeIn viewport={{ once: true, amount: 0.4 }}>
      <section className="lg:mb-22 container mb-12 mt-8 gap-4 pt-4">
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
            {data.map(({ id, title, text }) => (
              <SwiperSlide key={id}>
                <ItemCard
                  title={title}
                  description={text}
                  button="View More"
                  className="bg-sectionBg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
    </FadeIn>
  )
}

export default Intro
