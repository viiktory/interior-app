import bgImage from '../../assets/images/bg.jpg'
import { Button, FadeIn } from '../../components'
import { About, Services, Blogs } from '@/pages'

const Home = () => {
  return (
    <>
      <section
        className="relative h-screen w-full overflow-hidden rounded-none bg-cover bg-center bg-no-repeat lg:rounded-bl-[300px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container h-full w-[600px] flex-col justify-center gap-4">
          <FadeIn className="inline-block">
            <h1 className="hero-title-h1 leading-[1.3]">Let&apos;s Create Your Dream Interior</h1>
          </FadeIn>
          <FadeIn delay={0.3} className="inline-block">
            <p className="hero-subtitle-p leading-[1.3]">
              The world needs innovators and problem solvers who turn challenges into greater
              opportunities.
            </p>
          </FadeIn>
          <div>
            <FadeIn delay={0.6} className="inline-block">
              <Button text="Get Started" className="button" />
            </FadeIn>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Blogs />
    </>
  )
}

export default Home
