import { FC } from 'react'
import bgImage from '../../assets/bg.jpg'
import Btn from '../../components/Btn/Btn'
import { motion } from 'framer-motion'

const HomePage: FC = () => {
  return (
    <section
      className="relative h-screen w-full overflow-hidden rounded-bl-[300px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="mx-auto h-full w-full max-w-container px-safe">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex h-full w-full max-w-[600px] flex-col items-start justify-center gap-6 pl-6"
        >
          <h1 className="hero-title font-serif capitalize leading-[1.1] text-primary">
            Let&apos;s Create Your Dream Interior
          </h1>
          <p className="hero-subtitle font-sans text-secondary">
            The world needs innovators and problem solvers who turn challenges into greater
            opportunities.
          </p>
          <Btn label={'Get Started'} />
        </motion.div>
      </div>
    </section>
  )
}

export default HomePage
