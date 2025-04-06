import { FC } from 'react'
import AboutSection from '@/components/About/AboutSection'
import ContactSection from '@/components/About/ContactSection'
import Reviews from '@/components/About/Reviews'

const AboutPage: FC = () => {
  return (
    <>
      <AboutSection />
      <ContactSection />
      <Reviews></Reviews>
    </>
  )
}

export default AboutPage
