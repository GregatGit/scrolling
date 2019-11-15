import { useState, useEffect } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export function calculateDiv(style) {
  let { padding, border, height } = style
  let borderPx = 0
  if (/px/.test(border)){
    const result = border.match(/px/)
    borderPx = Number(border.slice(0, result.index))
  }  
  return height + (padding * 2) + (borderPx * 2)
}
