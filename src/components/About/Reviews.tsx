import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { getReviews, ReviewsProps } from '@/api/getReviews.ts'
import { ItemCard, Field } from '../../components'

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
      <div className="container flex-col gap-6">
        <Field title="What the People Thinks About Interno" />
        <div>
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={20}
            navigation
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
        </div>
      </div>
    </section>
  )
}

export default Reviews
