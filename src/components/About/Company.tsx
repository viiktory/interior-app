import { FC } from 'react'
import Company1 from '../../assets/company1.svg'
import Company2 from '../../assets/company2.svg'
import Company3 from '../../assets/company3.svg'
import Company4 from '../../assets/company4.svg'
import Company5 from '../../assets/company5.svg'
import { motion } from 'framer-motion'

interface CompanyLogo {
  src: string
  alt: string
}

const companyLogos: CompanyLogo[] = [
  { src: Company1, alt: 'Company 1' },
  { src: Company2, alt: 'Company 2' },
  { src: Company3, alt: 'Company 3' },
  { src: Company4, alt: 'Company 4' },
  { src: Company5, alt: 'Company 5' },
]

const Company: FC = () => {
  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto flex max-w-container flex-wrap justify-center gap-x-10 gap-y-8 px-safe"
      >
        {companyLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-10 transition-transform duration-300 hover:scale-105 hover:opacity-90 md:h-[70px] lg:h-[90px]"
          />
        ))}
      </motion.div>
    </section>
  )
}

export default Company
