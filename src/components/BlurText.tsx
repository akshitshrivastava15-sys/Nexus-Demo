import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface BlurTextProps {
  text: string
  delay?: number
  className?: string
  direction?: 'top' | 'bottom'
}

export const BlurText = ({ text, delay = 0, className = "", direction = 'bottom' }: BlurTextProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" })
  const words = text.split(" ")

  const yOffset = direction === 'bottom' ? 50 : -50

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(10px)', opacity: 0, y: yOffset }}
          animate={isInView ? {
            filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
            opacity: [0, 0.5, 1],
            y: [yOffset, -5, 0]
          } : {}}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.1,
            times: [0, 0.5, 1],
            ease: "easeOut"
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
