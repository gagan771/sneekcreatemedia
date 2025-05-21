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

        <div className="grid gap-12 md:grid-cols-2">
          {/* Video Testimonial - Mobile optimized with max-height */}
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[9/16] max-h-[450px] w-full">
              <iframe
                className="h-full w-full"
                src="https://player.vimeo.com/video/1085947636"
                title="Client Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Text Testimonials */}
          <div className="flex flex-col justify-center space-y-8">
            <motion.div
              className="relative rounded-lg bg-zinc-800/50 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Quote className="absolute -left-3 -top-3 h-8 w-8 text-orange-500 opacity-50" />
              <p className="mb-4 text-lg italic text-gray-300">
                "Harshaan captured our property in a way that truly showcased its best features. The video quality was
                exceptional, and he was professional throughout the entire process. Our listing received significantly
                more interest thanks to his work!"
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-amber-600">
                  <div className="flex h-full w-full items-center justify-center text-white">JD</div>
                </div>
                <div>
                  <h4 className="font-semibold text-white">John Doe</h4>
                  <p className="text-sm text-gray-400">Real Estate Agent</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-lg bg-zinc-800/50 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Quote className="absolute -left-3 -top-3 h-8 w-8 text-orange-500 opacity-50" />
              <p className="mb-4 text-lg italic text-gray-300">
                "Working with Harshaan was a game-changer for our social media content. His creativity and attention to
                detail resulted in videos that perfectly captured our brand's essence. The engagement on our posts has
                increased dramatically!"
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                  <div className="flex h-full w-full items-center justify-center text-white">JS</div>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Jane Smith</h4>
                  <p className="text-sm text-gray-400">Marketing Director</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
