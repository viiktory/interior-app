import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { getReviews, ReviewsProps } from '@/api/getReviews.ts'
import { ItemCard, Field, FadeIn } from '../../components'

const Reviews = () => {
  const [items, setItems] = useState<ReviewsProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewData = await getReviews()
        setItems(reviewData)
      } catch (error) {
        console.error('Error fetching about data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="mx-0 mb-16 rounded-none bg-sectionBg py-12 lg:mx-12 lg:mb-24 lg:rounded-[70px] lg:py-16">
      <FadeIn viewport={{ once: true, amount: 0.3 }}>
        <div className="container relative flex-col gap-6">
          <Field title="What the People Thinks About Interno" />
          <div className="relative overflow-visible px-4">
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={20}
              navigation={{
                prevEl: '.prevBtn',
                nextEl: '.nextBtn',
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {items.map(({ id, image, name, city, review }) => (
                <SwiperSlide key={id}>
                  <ItemCard
                    image={image}
                    title={name}
                    location={city}
                    description={review}
                    className="h-[300px] bg-cardBg lg:h-[350px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="prevBtn swiper-button-prev absolute left-[-1rem] top-1/2 h-[1.75rem] w-[1.75rem] md:left-[-2.5rem] md:h-[2.5rem] md:w-[2.5rem]"></button>
            <button className="nextBtn swiper-button-next absolute right-[-1rem] top-1/2 h-[1.75rem] w-[1.75rem] md:right-[-2.5rem] md:h-[2.5rem] md:w-[2.5rem]"></button>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

export default Reviews
