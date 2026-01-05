'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/20" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="text-gradient">Ankit Chakraborty</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-xl md:text-2xl text-slate-300 mb-6 font-semibold">
                  Engineering Leader • Billing Platform Architect • AI & SaaS Builder
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                  I architect large-scale billing & subscription systems with AI-driven modernization, 
                  delivering revenue-critical platforms that handle millions of dollars in transactions. 
                  With 14+ years of experience spanning Fortune 500 companies and innovative startups, 
                  I build systems that scale, evolve, and drive business impact.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <Link href="/projects" className="btn-primary inline-flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="btn-secondary inline-flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </button>
                <Link href="/contact" className="btn-secondary inline-flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Link>
              </motion.div>
            </div>

            {/* Right side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl blur-2xl opacity-20"></div>
                <div className="relative rounded-2xl shadow-2xl shadow-primary-900/50 w-80 h-80 md:w-96 md:h-96 overflow-hidden border-4 border-slate-800/50">
                  <Image
                    src="/profile.jpg"
                    alt="Ankit Chakraborty"
                    width={384}
                    height={384}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          <div className="card text-center">
            <div className="text-4xl font-bold text-gradient mb-2">14+</div>
            <div className="text-slate-400">Years Experience</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold text-gradient mb-2">$5M+</div>
            <div className="text-slate-400">Monthly Impact</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold text-gradient mb-2">AI First</div>
            <div className="text-slate-400">Modernization Specialist</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold text-gradient mb-2">Global</div>
            <div className="text-slate-400">USA • Qatar • NZ • India</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
