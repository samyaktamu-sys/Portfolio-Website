import { useEffect, useState } from 'react'

export default function useScrollProgress(start, end) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      setProgress(Math.min(1, Math.max(0, (y - start) / (end - start))))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [start, end])

  return progress
}
