import { FC } from 'react'
import phoneImage from '@/assets/phone.svg'
import contactImage from '@/assets/kitchen.jpg'
import Btn from '@/components/Btn/Btn'

const ContactSection: FC = () => {
  return (
    <section className="pb-24">
      <div className="max-w-container flex justify-between items-center mx-auto px-safe">
        <div className="max-w-[600px] w-full flex flex-col gap-6 justify-center items-start h-full pl-6">
          <h1 className="text-title text-primary font-serif ">
            We Tackle The Most Challenging Designs
          </h1>
          <p className="text-base text-secondary font-sans">
            The world needs innovators and problem solvers who turn challenges into greater
            opportunities. We have an insatiable curiosity about transformative trends challenging
            the status.
          </p>
          <div className="flex items-center gap-6">
            <img src={phoneImage} alt="phone" className="w-18 h-18" />
            <div>
              <span className="text-base text-secondary font-sans block">012345678</span>
              <p className="text-base text-secondary font-sans">Call Us Anytime</p>
            </div>
          </div>
          <Btn label={'Get Free Estimate'} />
        </div>
        <div className="max-w-[600px]">
          <img
            src={contactImage}
            alt="kitchen"
            className="w-full h-auto rounded-tr-[326px] rounded-bl-[123px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
