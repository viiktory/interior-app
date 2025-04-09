import { FC } from 'react'
import bgImage from '@/assets/bg.jpg'
import Btn from '@/components/Btn/Btn'

const HomePage: FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat rounded-bl-[300px] overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-container w-full h-full mx-auto px-safe">
        <div className="max-w-[600px] w-full flex flex-col gap-6 justify-center items-start h-full pl-6">
          <h1 className="text-primary font-serif leading-[1.1] capitalize hero-title">
            Let&apos;s Create Your Dream Interior
          </h1>
          <p className="text-secondary font-sans hero-subtitle">
            The world needs innovators and problem solvers who turn challenges into greater
            opportunities.
          </p>
          <Btn label={'Get Started'} />
        </div>
      </div>
    </section>
  )
}

export default HomePage
