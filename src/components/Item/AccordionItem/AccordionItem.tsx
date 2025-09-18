import { ReactNode } from 'react'
import { FaChevronDown } from 'react-icons/fa'

type AccordionItemProps = {
  title: string
  children?: ReactNode
  isOpen: boolean
  onToggle?: () => void
}

const AccordionItem = ({ title, children, isOpen, onToggle }: AccordionItemProps) => {
  return (
    <div className="w-100%">
      <button className="flex items-center justify-between" type="button" onClick={onToggle}>
        <span className="hero-title-h3 pb-0 lg:pb-6">{title}</span>
        <FaChevronDown
          className={`transition-transform duration-300 md:hidden ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:max-h-none md:overflow-visible ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-4 py-2 md:py-0">{children}</ul>
      </div>
    </div>
  )
}

export default AccordionItem
