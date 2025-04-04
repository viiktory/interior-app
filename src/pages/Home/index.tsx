import { FC } from 'react'
import bgImage from '@/assets/bg.jpg'

const HomePage: FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat rounded-bl-[300px] overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-container w-full h-full mx-auto px-safe">
        <div className="max-w-[600px] w-full flex flex-col gap-4 justify-center items-start h-full ">
          <h1 className="text-title text-primary font-serif">Let&apos;s Create Your Dream Interior</h1>
          <p className="text-base text-secondary  font-sans">
            The world needs innovators and problem solvers who turn challenges into greater
            opportunities.
          </p>
          <button className="w-[207px] h-[71px] bg-btn hover:bg-btn-hover text-white font-sans rounded-btn flex items-center justify-center transition-colors">
            Get Started →
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomePage
