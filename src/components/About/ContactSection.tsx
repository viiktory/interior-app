import { FC } from 'react'
import phoneImage from '../../assets/phone.svg'
import contactImage from '../../assets/kitchen.jpg'
import Btn from '../../components/Btn/Btn'
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
        className="relative z-10 mx-auto flex min-h-[600px] max-w-container flex-col-reverse items-center justify-center gap-12 px-safe md:min-h-0 md:flex-row"
      >
        <div className="flex h-full w-full max-w-[600px] flex-col items-start justify-center gap-6 bg-white/80 px-6 py-10 md:bg-transparent md:py-0">
          <h1 className="second-title font-serif text-title capitalize leading-[1.1] text-primary">
            We Tackle The Most Challenging Designs
          </h1>
          <p className="hero-subtitle font-sans text-base text-secondary">
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
                className="block font-sans text-base text-secondary"
                href="tel:+1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                +1 (234) 567-890
              </a>
              <p className="font-sans text-base text-secondary">Call Us Anytime</p>
            </div>
          </div>
          <Btn label={'Get Free Estimate'} />
        </div>
        <div className="hidden w-full max-w-[600px] md:block">
          <img
            src={contactImage}
            alt="kitchen"
            className="h-auto w-full rounded-bl-[123px] rounded-tr-[326px] object-cover"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default ContactSection
