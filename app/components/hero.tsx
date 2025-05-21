"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1

        // Random color from a gradient palette
        const colors = [
          "rgba(255, 105, 180, 0.7)",
          "rgba(147, 112, 219, 0.7)",
          "rgba(64, 224, 208, 0.7)",
          "rgba(255, 215, 0, 0.7)",
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full screen background image - shifted upward */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform -translate-y-12"
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-127.jpg-dOxixK76GjPCgQzZSKmzwxPcd3K1R8.jpeg")',
          zIndex: 0,
        }}
      ></div>

      {/* Gradient overlay for better text visibility */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"
        style={{ zIndex: 1 }}
      ></div>

      {/* Canvas for particles */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-30" style={{ zIndex: 2 }} />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-8 md:px-16 lg:px-24" style={{ zIndex: 3 }}>
        <div className="max-w-xl">
          <motion.h1
            className="mb-2 text-5xl font-bold tracking-tighter text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Harshaan Singh
          </motion.h1>

          <motion.h2
            className="mb-6 text-2xl font-medium text-orange-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Sneek Create Media
          </motion.h2>

          <motion.div
            className="mb-8 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TypeAnimation
              sequence={[
                "Videographer",
                1000,
                "Creative Storyteller",
                1000,
                "Visual Artist",
                1000,
                "Content Creator",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="bg-gradient-to-r from-orange-400 via-amber-500 to-red-500 bg-clip-text text-transparent"
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.div>
          <motion.p
            className="max-w-[600px] text-lg text-gray-200 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-orange-400">Real Estate</span> | <span className="text-amber-400">Events</span> |{" "}
            <span className="text-red-400">Content Creation</span>
          </motion.p>
        </div>
      </div>
    </div>
  )
}
