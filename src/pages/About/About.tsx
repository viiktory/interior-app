import { Link } from 'react-router-dom'
import { PATHS } from '@/paths.ts'
import { Intro, FeaturesIntro, Reviews, CompanyLogo } from '@/components'

const About = () => {
  return (
    <section id="about">
      <Intro />
      <FeaturesIntro />
      <div className="container my-12 flex-col items-center md:my-24">
        <h3 className="hero-title-h3 mb-6 text-center">
          Nothing to read? Remember your saved ones
        </h3>
        <Link to={PATHS.SAVE}>
          <button className="button-description">Go to saved</button>
        </Link>
      </div>
      <Reviews />
      <CompanyLogo />
    </section>
  )
}

export default About
