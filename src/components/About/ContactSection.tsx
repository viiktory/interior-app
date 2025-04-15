import { FC } from 'react'
import phoneImage from '@/assets/phone.svg'
import contactImage from '@/assets/kitchen.jpg'
import Btn from '@/components/Btn/Btn'
import { motion } from 'framer-motion'

const ContactSection: FC = () => {
  return (
    <section className="relative pb-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${contactImage})` }}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-container flex flex-col-reverse md:flex-row justify-center items-center mx-auto px-safe gap-12 min-h-[600px] md:min-h-0"
      >
        <div className="max-w-[600px] w-full flex flex-col gap-6 justify-center items-start h-full px-6  bg-white/80 md:bg-transparent py-10 md:py-0">
          <h1 className="text-title text-primary font-serif leading-[1.1] capitalize second-title">
            We Tackle The Most Challenging Designs
          </h1>
          <p className="text-base text-secondary font-sans hero-subtitle">
            The world needs innovators and problem solvers who turn challenges into greater
            opportunities. We have an insatiable curiosity about transformative trends challenging
            the status.
          </p>
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
              <img src={phoneImage} alt="phone" className="w-18 h-18" />
            </a>
            <div>
              <a
                className="text-base text-secondary font-sans block"
                href="tel:+1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                +1 (234) 567-890
              </a>
              <p className="text-base text-secondary font-sans">Call Us Anytime</p>
            </div>
          </div>
          <Btn label={'Get Free Estimate'} />
        </div>
        <div className="max-w-[600px] w-full hidden md:block">
          <img
            src={contactImage}
            alt="kitchen"
            className="w-full h-auto rounded-tr-[326px] rounded-bl-[123px] object-cover"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default ContactSection
