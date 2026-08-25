import { useEffect, useRef, useState } from 'react'

export default function StatCounter({ value, suffix = '', label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const duration = 1400
            const start = performance.now()
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.round(eased * value))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-extrabold text-white sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary-200">{label}</p>
    </div>
  )
}
