import { FC } from 'react'
import bgImage from '@/assets/bg.jpg'

const HomePage: FC = () => {
  return (
    <section
      className="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-full max-w-[1200px] mx-auto px-[20px]">
          <div className="max-w-[600px] flex flex-col items-start justify-center gap-6">
            <h1 className="text-title font-serif leading-[1.1]">
              Let&apos;s Create Your Dream Interior
            </h1>
            <p className="font-sans text-primary">
              The world needs innovators and problem solvers who turn challenges into greater
              opportunities.
            </p>
            <button className="w-[207px] h-[71px] bg-btn hover:bg-btn-hover text-white text-btn font-sans rounded-btn flex items-center justify-center transition-colors">
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
