import { useEffect, useState } from "react"

export function useDesktop() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 766)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return !isMobile
}
export function useMobile() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 920)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return !isMobile
}
