
"use client";
import React, { useState, useEffect } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

type Src = string | string[] | undefined

export function ImageWithFallback(props: Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> & { src?: Src }) {
  const { src, alt, style, className, ...rest } = props
  const sources = Array.isArray(src) ? src : src ? [src] : []
  const [index, setIndex] = useState(0)
  const [didFailAll, setDidFailAll] = useState(false)

  useEffect(() => {
    // reset when src prop changes
    setIndex(0)
    setDidFailAll(false)
  }, [src])

  const handleError = () => {
    if (index < sources.length - 1) {
      setIndex((i) => i + 1)
    } else {
      setDidFailAll(true)
    }
  }

  const currentSrc = sources[index]

  if (didFailAll || !currentSrc) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={Array.isArray(src) ? src[0] : src} />
        </div>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={currentSrc} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
