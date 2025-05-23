"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Sparkles, Video, Camera, Sun } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const pricingPlans = [
    {
      name: "Narrated Full Tour",
      price: "$400",
      description: "Full interior & exterior walkthrough",
      features: [
        "Agent On Camera with narration of the property",
        "45-90 seconds",
        "Background music & agent branding",
        "Drone Clips",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-400",
      shadowColor: "shadow-blue-500/20",
      icon: Video,
    },
    {
      name: "Signature Reel",
      price: "$600",
      description: "Short-form vertical video (Instagram/TikTok style)",
      features: [
        "30–60 seconds runtime",
        "Fast-paced edits with music",
        "Key highlights of the property",
        "Drone Clips",
      ],
      popular: true,
      color: "from-orange-500 to-amber-600",
      shadowColor: "shadow-orange-500/20",
      icon: Video,
    },
    {
      name: "Cinematic Video",
      price: "$800",
      description: "Wide-screen cinematic quality (16:9)",
      features: [
        "45–90 seconds with music",
        "Smooth gimbal movements & transitions",
        "Perfect for websites & YouTube",
        "Drone Clips",
      ],
      popular: false,
      color: "from-red-500 to-pink-600",
      shadowColor: "shadow-red-500/20",
      icon: Video,
    },
    {
      name: "HDR Photos",
      price: "$300",
      description: "20–30 professionally edited photos",
      features: ["High Dynamic Range (HDR) technique", "Bright, crisp interiors & exteriors", "Drone Photos"],
      popular: false,
      color: "from-purple-500 to-indigo-600",
      shadowColor: "shadow-purple-500/20",
      icon: Camera,
    },
    {
      name: "Day & Night Package",
      price: "$900",
      description: "Full day and twilight photo/video coverage",
      features: [
        "Showcases home in both lighting conditions",
        "Golden hour visuals & twilight shots",
        "Complete photo and video package",
        "Premium editing and color grading",
      ],
      popular: false,
      color: "from-amber-500 to-yellow-400",
      shadowColor: "shadow-amber-500/20",
      icon: Sun,
    },
  ]

  return (
    <section className="bg-zinc-900 py-20" id="pricing">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl">
            Plans & Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Choose the perfect package for your project. Custom packages are also available upon request.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card
                className={`relative overflow-hidden border-0 bg-zinc-800/50 backdrop-blur-sm ${plan.shadowColor} ${
                  plan.popular ? `shadow-lg` : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -right-12 top-7 z-10 rotate-45 bg-gradient-to-r from-orange-500 to-amber-600 px-12 py-1 text-xs font-semibold text-white">
                    POPULAR
                  </div>
                )}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${plan.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="mb-2 flex items-center">
                    <div
                      className={`mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${plan.color}`}
                    >
                      <plan.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className={`bg-gradient-to-r ${plan.color} bg-clip-text text-2xl text-transparent`}>
                      {plan.name}
                    </CardTitle>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className={`bg-gradient-to-r ${plan.color} bg-clip-text text-4xl font-bold text-transparent`}>
                      {plan.price}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div
                          className={`mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r ${plan.color}`}
                        >
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}