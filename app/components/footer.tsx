"use client"

import { Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-xl font-bold text-transparent">
              Harshaan Singh
            </h3>
            <p className="mb-4 text-gray-400">
              I'm Harshaan Singh, a passionate videographer who moved to Canada in 2024 and turned my creative vision
              into a business. From day one, I've been committed to delivering exceptional service and capturing moments
              that truly matter. Whether it's for brands, events, or stories, quality and client satisfaction are always
              my TOP PRIORITIES.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-400">
              <li>
                <a href="/" className="inline-block transition-colors hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/categories" className="inline-block transition-colors hover:text-white">
                  Categories
                </a>
              </li>
              <li>
                <a href="#portfolio" className="inline-block transition-colors hover:text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pricing" className="inline-block transition-colors hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="inline-block transition-colors hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#testimonials" className="inline-block transition-colors hover:text-white">
                  Testimonials
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-xl font-bold text-transparent">
              Connect With Me
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="https://www.instagram.com/harshaan___"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors hover:text-white"
                >
                  <Instagram className="mr-2 h-5 w-5 text-pink-500" />
                  <span>@harshaan___</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sneekcreate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors hover:text-white"
                >
                  <Instagram className="mr-2 h-5 w-5 text-pink-500" />
                  <span>@sneekcreate</span>
                </a>
              </li>
              <li>
                <a
                  href="http://www.linkedin.com/in/singhharshaan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors hover:text-white"
                >
                  <Linkedin className="mr-2 h-5 w-5 text-blue-500" />
                  <span>singhharshaan</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:harshaan@sneekcreatemedia.com"
                  className="flex items-center transition-colors hover:text-white"
                >
                  <Mail className="mr-2 h-5 w-5 text-red-500" />
                  <span>harshaan@sneekcreatemedia.com</span>
                </a>
              </li>
              <li>
                <a href="tel:3683994500" className="flex items-center transition-colors hover:text-white">
                  <Phone className="mr-2 h-5 w-5 text-green-500" />
                  <span>368-399-4500</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 border-t border-zinc-800 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 bg-clip-text text-transparent">
              Sneek Create Media
            </span>
            . All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
