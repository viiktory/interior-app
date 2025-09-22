import KitchenImage from '../../assets/images/kitchen.jpg'
import PhoneIcon from '../../assets/icons/phone.svg?react'
import { Field, Button, ItemLink } from '../../components'

const FeaturesIntro = () => {
  return (
    <section className="mb-16 bg-background px-safe lg:mb-24">
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
            <PhoneIcon alt="Phone" className="w-30 h-30" />
            <div className="flex flex-col gap-2">
              <span className="small-description">Call Us Anytime</span>
              <span className="small-description">+380123456789</span>
            </div>
          </ItemLink>

          <Button text="Get Free Estimate" className="button mt-6 lg:mt-12" />
        </div>

        <div className="mt-8 flex-1 self-center lg:mt-0">
          <img
            src={KitchenImage}
            alt="kitchen"
            className="rounded-[20px] object-cover lg:rounded-bl-[123px] lg:rounded-tr-[326px]"
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturesIntro
