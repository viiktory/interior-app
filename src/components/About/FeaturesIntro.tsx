import KitchenImage from '../../assets/images/kitchen.jpg'
import PhoneIcon from '../../assets/icons/phone.svg?react'
import { Field, ItemLink, FadeIn } from '../../components'
import { PATHS } from '@/paths.ts'

const FeaturesIntro = () => {
  return (
    <section className="mb-16 bg-background px-safe lg:mb-24">
      <FadeIn viewport={{ once: true, amount: 0.3 }}>
        <div className="container flex flex-col justify-between gap-4 px-4 py-8 md:flex-row lg:gap-8 lg:px-0 lg:py-12">
          <div className="flex-1 self-center">
            <Field
              title="We Tackle The Most Challenging Designs"
              description="The world needs innovators and problem solvers who 
        turn challenges into greater opportunities. 
        We have an insatiable curiosity about transformative trends challenging the status"
            />

            <ItemLink
              to="tel:+380123456789"
              className="mt-4 flex items-center gap-4 font-sans text-base text-description lg:mt-12"
            >
              <PhoneIcon
                alt="Phone"
                className="h-12 w-12 rounded-full border border-solid border-secondary px-3 hover:shadow-xl"
              />
              <div className="flex flex-col gap-2">
                <span className="small-description">Call Us Anytime</span>
                <span className="small-description">+380123456789</span>
              </div>
            </ItemLink>

            <ItemLink to={PATHS.SOON} label="Get Free Estimate" className="button mt-6 lg:mt-12" />
          </div>

          <div className="mt-8 flex-1 self-center lg:mt-0">
            <img
              src={KitchenImage}
              alt="kitchen"
              className="rounded-[20px] object-cover transition-transform duration-300 hover:scale-105 lg:rounded-bl-[123px] lg:rounded-tr-[326px]"
            />
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

export default FeaturesIntro
