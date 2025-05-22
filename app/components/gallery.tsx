"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const videos = [
    
    {
      title: "",
      embedUrl: "https://player.vimeo.com/video/1086480161?h=d4e7acd8e2&badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      title: "",
      embedUrl: "https://player.vimeo.com/video/1085954269",
    },
    {
      title: "",
      embedUrl: "https://player.vimeo.com/video/1085955175",
    },
  ]

  return (
    <section className="py-20" id="portfolio">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Work
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="w-full overflow-hidden rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Responsive Video Wrapper */}
              <div className="relative w-full aspect-[9/16] sm:aspect-video lg:h-[450px]">
                <iframe
                  className="absolute top-0 left-0 h-full w-full rounded-xl"
                  src={video.embedUrl}
                  title={video.title}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Optional title overlay */}
              <div className="bg-black/70 p-3 text-white text-sm">
                {video.title || ""}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/categories">
            <Button className="bg-gradient-to-r from-orange-500 to-amber-600 px-8 py-6 text-lg hover:from-orange-600 hover:to-amber-700">
              Explore More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
