import KitchenImage from '../../assets/images/kitchen.jpg'
import PhoneIcon from '../../assets/icons/phone.svg?react'
import { Field, Button, ItemLink } from '../../components'

const FeaturesIntro = () => {
  return (
    <section className="mb-16 bg-background lg:mb-24 px-safe">
      <div className="container flex flex-col justify-between gap-8 px-4 py-12 md:flex-row lg:px-0">
        <div className="flex-1 self-center">
          <Field
            title="We Tackle The Most Challenging Designs"
            description="The world needs innovators and problem solvers who 
        turn challenges into greater opportunities. 
        We have an insatiable curiosity about transformative trends challenging the status"
          />

          <ItemLink
            to="tel:+380123456789"
            className="lg:mt-12 mt-6 flex items-center gap-4 font-sans text-base text-description"
          >
            <PhoneIcon alt="Phone" className="w-30 h-30" />
            <div className="flex flex-col gap-2">
              <span>Call Us Anytime</span>
              <span>+380123456789</span>
            </div>
          </ItemLink>

          <Button text="Get Free Estimate" className="button mt-12" />
        </div>

        <div className="mt-8 flex-1 lg:mt-0 self-center">
          <img
            src={KitchenImage}
            alt="kitchen"
            className="lg:rounded-bl-[123px] lg:rounded-tr-[326px] rounded-[20px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturesIntro
