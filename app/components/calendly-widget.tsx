
"use client"
import { useEffect, useRef } from "react"

export default function CalendlyWidget() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="calendly-inline-widget"
      data-url="https://calendly.com/gaganbhardwaj514/30min"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  )
} 