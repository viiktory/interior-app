import { FC } from 'react'
import phoneImage from '@/assets/phone.svg'
import contactImage from '@/assets/kitchen.jpg'

const ContactSection: FC = () => {
  return (
    <section className="pb-24">
      <div className="max-w-container flex justify-between items-center mx-auto px-safe">
        <div className="max-w-[600px] flex flex-col gap-6 me-8">
          <h2 className="text-title text-primary font-serif">
            We Tackle The Most Challenging Designs
          </h2>
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
          <button className="w-[207px] h-[71px] bg-btn hover:bg-btn-hover text-white font-sans rounded-btn flex items-center justify-center transition-colors">
            Get Free Estimate →
          </button>
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
