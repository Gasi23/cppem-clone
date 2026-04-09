// components/FadeInSection.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
}

export default function FadeInSection({
  children,
  className = '',
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before fully in view
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
