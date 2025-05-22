"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Navbar from "../components/navbar"

// Video component for easier editing
interface VideoItemProps {
  embedUrl: string;
  delay?: number;
}

const VideoItem = ({ embedUrl, delay = 0 }: VideoItemProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Mobile-optimized video container with max-height */}
      <div className="aspect-[9/16] max-h-[400px] w-full">
        <iframe
          className="h-full w-full"
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  )
}

export default function CategoriesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Category data - Update image URLs and descriptions as needed
  const categories = [
    {
      title: "Real Estate",
      description: "Stunning property showcases and virtual tours",
      image:
        "https://images.unsplash.com/photo-1582647509711-c8aa8a8bda71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
      slug: "real-estate",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Events",
      description: "Weddings, corporate events, and special occasions",
      image:
        "https://images.unsplash.com/photo-1670028514318-0ac718c0590d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
      slug: "events",
      color: "from-purple-500 to-pink-400",
    },
    {
      title: "Restaurants",
      description: "Brand stories and product showcases",
      image:
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fE1FRVRJTkd8ZW58MHx8MHx8fDA%3D",
      slug: "commercial",
      color: "from-amber-500 to-yellow-400",
    },
    
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-8 flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
          <motion.h1
            className="mb-4 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Categories
          </motion.h1>
          <motion.p
            className="max-w-2xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore my work across different categories. Each category showcases my unique approach to visual
            storytelling.
          </motion.p>
        </div>

        <div ref={ref} className="grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={`/categories/${category.slug}`}>
                {/* Reverted back to aspect-video (16:9) for category boxes */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h2
                    className={`mb-2 bg-gradient-to-r ${category.color} bg-clip-text text-3xl font-bold text-transparent`}
                  >
                    {category.title}
                  </h2>
                  <p className="mb-6 text-gray-300">{category.description}</p>
                  <Button className={`bg-gradient-to-r ${category.color}`}>View Projects</Button>
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h2 className={`bg-gradient-to-r ${category.color} bg-clip-text text-2xl font-bold text-transparent`}>
                    {category.title}
                  </h2>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
{/* Other Work Section */}
<div className="mt-20">
  <motion.h2
    className="mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-3xl font-bold tracking-tighter text-center text-transparent"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Other Work
  </motion.h2>

  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {/* Video 1 */}
    <div className="relative w-full pt-[179.63%] rounded-xl overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1085953881?badge=0&autopause=0&player_id=0&app_id=58479"
        className="absolute top-0 left-0 w-full h-full rounded-xl"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
        title="HKP- Feel The Fun1"
      ></iframe>
    </div>

    {/* Video 2 */}
    <div className="relative w-full pt-[177.78%] rounded-xl overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1085953962?badge=0&autopause=0&player_id=0&app_id=58479"
        className="absolute top-0 left-0 w-full h-full rounded-xl"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
        title="CulturalEvent BowValleyCollege2"
      ></iframe>
    </div>

    {/* Video 3 */}
    <div className="relative w-full pt-[179.63%] rounded-xl overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1085953989?badge=0&autopause=0&player_id=0&app_id=58479"
        className="absolute top-0 left-0 w-full h-full rounded-xl"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
        title="Hermi's Hair Spa3"
      ></iframe>
    </div>

    {/* Video 4 */}
    <div className="relative w-full pt-[177.78%] rounded-xl overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1085954665?badge=0&autopause=0&player_id=0&app_id=58479"
        className="absolute top-0 left-0 w-full h-full rounded-xl"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
        title="NewBorn4"
      ></iframe>
    </div>

    {/* Video 5 */}
    <div className="relative w-full pt-[177.78%] rounded-xl overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1085953913?badge=0&autopause=0&player_id=0&app_id=58479"
        className="absolute top-0 left-0 w-full h-full rounded-xl"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
        title="Nagar Kirtan 2025 5"
      ></iframe>
    </div>

    {/* Video 6 */}
    <div className="relative w-full pt-[179.63%] rounded-xl overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1085953809?badge=0&autopause=0&player_id=0&app_id=58479"
        className="absolute top-0 left-0 w-full h-full rounded-xl"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
        title="HKP Feel The Fun6"
      ></iframe>
    </div>
    {/* Video 7 */}
<div className="relative w-full pt-[177.78%] rounded-xl overflow-hidden">
  <iframe
    src="https://player.vimeo.com/video/1085954063?badge=0&autopause=0&player_id=0&app_id=58479"
    className="absolute top-0 left-0 w-full h-full rounded-xl"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
    allowFullScreen
    title="Vaisakhi2024 7"
  ></iframe>
</div>

  </div>
</div>

        
          </div>
        
    </main>
  )
}
