import { FC } from 'react'
import phoneImage from '@/assets/phone.svg'
import contactImage from '@/assets/kitchen.jpg'

const ContactSection: FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="">
          <h2 className="text-3xl font-semibold mb-4 text-[#292F36]">
            We Tackle The Most Challenging Designs
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            The world needs innovators and problem solvers who turn challenges into greater
            opportunities. We have an insatiable curiosity about transformative trends challenging
            the status.
          </p>
        </div>
        <div className="mb-6">
          <img src={phoneImage} alt="phone" className="w-10 h-10" />
          <span className="text-xl text-primary block">012345678</span>
          <p className="text-lg text-secondary">Call Us Anytime</p>
        </div>

        <button className="px-6 py-3 bg-primary text-white text-lg font-semibold rounded-md hover:bg-secondary transition-all duration-300">
          Get Free Estimate →
        </button>

        <div className="">
          <img src={contactImage} alt="kitchen" className="w-full h-auto rounded-lg object-cover" />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
