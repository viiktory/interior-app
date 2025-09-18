import { useState } from 'react'
import LogoIcon from '../../assets/images/logo.svg?react'
import { PATHS } from '@/paths.ts'
import { FaFacebook, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa'
import { ItemLink, NavItemExternal, AccordionItem } from '@/components'

const Footer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <footer className="bg-background">
      <div className="container flex-col py-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="flex flex-col justify-between gap-4">
            <ItemLink to={PATHS.HOME}>
              <LogoIcon className="h-10 w-auto" />
            </ItemLink>
            <p className="text-link leading-[1.3] text-description">
              We are the leading architect and interior design firm in the world
            </p>
            <div className="flex gap-8">
              <NavItemExternal to="https://www.facebook.com/" icon={<FaFacebook />} />
              <NavItemExternal to="https://www.linkedin.com/" icon={<FaLinkedin />} />
              <NavItemExternal to="https://www.instagram.com/" icon={<FaInstagram />} />
              <NavItemExternal to="https://web.telegram.org" icon={<FaTelegram />} />
            </div>
          </div>

          <AccordionItem title="Pages" isOpen={openIndex === 0} onToggle={() => handleToggle(0)}>
            <ItemLink to={PATHS.HOME} label="Style Guide" />
            <ItemLink to={PATHS.HOME} label="Protected" />
            <ItemLink to={PATHS.HOME} label="404" />
          </AccordionItem>

          <AccordionItem title="Explore" isOpen={openIndex === 1} onToggle={() => handleToggle(1)}>
            <ItemLink to={PATHS.ABOUT} label="About Us" />
            <ItemLink to={PATHS.PAGES.page} label="Recent Blog" />
            <ItemLink to={PATHS.HOME} label="Our Projects" />
          </AccordionItem>
          <AccordionItem title="Contact" isOpen={openIndex === 2} onToggle={() => handleToggle(2)}>
            <NavItemExternal
              to="https://www.google.com/maps"
              label="53, East Birchwood Ave. Brooklyn, New York 11201, USA"
            />
            <NavItemExternal to="mailto:contact@interno.com" label="contact@interno.com" />
            <NavItemExternal to="tel:+1234567890" label="(123) 456 - 7890" />
          </AccordionItem>
        </div>

        <div className="pt-8 text-center text-[14px]">
          © {new Date().getFullYear()} Interno. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
