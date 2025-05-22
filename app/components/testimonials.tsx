"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="bg-black py-20" id="testimonials">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Hear what my clients have to say about their experience working with me.
          </p>
        </motion.div>

        <div className="grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-2">
          {/* Video Testimonial - Mobile optimized with max-height */}
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-xl flex justify-center items-center mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[9/16] max-w-[140px] w-full">
              <iframe
                className="h-full w-full rounded-xl"
                src="https://player.vimeo.com/video/1085947636"
                title="Client Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Text Testimonials */}
          
        </div>
      </div>
    </section>
  )
}
