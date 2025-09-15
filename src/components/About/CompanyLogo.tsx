import { motion } from 'framer-motion'
import Company1 from '../../assets/images/company1.svg?react'
import Company2 from '../../assets/images/company2.svg?react'
import Company3 from '../../assets/images/company3.svg?react'
import Company4 from '../../assets/images/company4.svg?react'
import Company5 from '../../assets/images/company5.svg?react'

const companyLogos = [
  { Component: Company1, alt: 'Company 1' },
  { Component: Company2, alt: 'Company 2' },
  { Component: Company3, alt: 'Company 3' },
  { Component: Company4, alt: 'Company 4' },
  { Component: Company5, alt: 'Company 5' },
]

const CompanyLogo = () => {
  const repeatedLogos = [...companyLogos, ...companyLogos, ...companyLogos]

  return (
    <section className="overflow-hidden lg:mb-12">
      <motion.div
        className="flex gap-16 py-4"
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {repeatedLogos.map(({ Component, alt }, index) => (
          <Component
            key={index}
            className="h-10 md:h-[70px] lg:h-[90px] flex-shrink-0"
            aria-label={alt}
          />
        ))}
      </motion.div>
    </section>
  )
}

export default CompanyLogo
