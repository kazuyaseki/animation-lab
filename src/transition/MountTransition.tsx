import { FC } from 'react'
import { motion } from 'framer-motion'

type Props = {
  slide?: number
  slideUp?: number
}

export const MountTransition: FC<Props> = ({ children, slide = 0, slideUp = 0 }) => (
  <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0, x: slide, y: slideUp }} animate={{ opacity: 1, x: 0, y: 0 }} style={{ boxShadow: '-4px 4px 4px rgba(0, 0, 0, 0.25)' }}>
    {children}
  </motion.div>
)
