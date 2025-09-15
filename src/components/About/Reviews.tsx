import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
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
    <section className=" mb-16  lg:mx-12 mx-0 lg:rounded-[70px] rounded-none bg-sectionBg lg:mb-24 lg:py-16 py-12 ">
      <div className="container flex-col gap-6">
      <Field title="What the People Thinks About Interno" />
      <div>
        <Swiper
          modules={[ Pagination]}
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {items.map(({ id, image, name, city, review }) => (
            <SwiperSlide key={id} >
              <ItemCard
                image={image}
                title={name}
                location={city}
                description={review}
                className="bg-cardBg  lg:h-[350px] h-[300px]"
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
