import bgImage from '../../assets/images/bg.jpg'
import { PATHS } from '@/paths.ts'
import { FadeIn, ItemLink } from '../../components'
import { About, Services, Blogs } from '@/pages'

const Home = () => {
  return (
    <>
      <section
        className="relative h-screen w-full overflow-hidden rounded-none bg-cover bg-center bg-no-repeat lg:rounded-bl-[300px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container h-full">
          <div className="flex h-full w-full flex-col items-start justify-center gap-4 pl-4 md:w-[600px]">
            <FadeIn delay={0.2} className="inline-block">
              <h1 className="hero-title-h1 leading-[1.3]">Let&apos;s Create Your Dream Interior</h1>
            </FadeIn>
            <FadeIn delay={0.4} className="inline-block">
              <p className="hero-subtitle-p leading-[1.3]">
                The world needs innovators and problem solvers who turn challenges into greater
                opportunities.
              </p>
            </FadeIn>
            <FadeIn delay={0.8} className="inline-block">
              <ItemLink to={PATHS.ABOUT} label="Get Started" className="button" />
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
