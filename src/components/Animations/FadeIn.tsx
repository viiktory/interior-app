import { ReactNode } from 'react'
import { motion } from 'framer-motion'

type FadeInProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

const FadeIn = ({ children, delay, y, className }: FadeInProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
