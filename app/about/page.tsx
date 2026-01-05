'use client'

import SectionHeader from '@/components/SectionHeader'
import { motion } from 'framer-motion'
import { Target, Lightbulb, Rocket, Users } from 'lucide-react'

export default function AboutPage() {
  const highlights = [
    {
      icon: Target,
      title: 'Mission-Critical Systems',
      description: 'Building billing platforms that process millions in revenue',
    },
    {
      icon: Lightbulb,
      title: 'AI-First Approach',
      description: 'Modernizing legacy systems with intelligent automation',
    },
    {
      icon: Rocket,
      title: 'Innovation Driver',
      description: 'Creating SaaS products that solve real problems',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Leading global teams across multiple time zones',
    },
  ]

  const philosophy = [
    'Build systems that scale from day one',
    'Automate relentlessly, optimize continuously',
    'Make complexity invisible to users',
    'Ship fast, iterate faster',
    'Lead with empathy, drive with data',
  ]

  return (
    <div className="section-container">
      <SectionHeader 
        title="About Me" 
        subtitle="A Builder. An Architect. A Leader."
      />

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card"
        >
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            I architect large-scale billing & subscription systems with AI-driven modernization, 
            delivering revenue-critical platforms that handle millions of dollars in transactions monthly. 
            My expertise spans the complete lifecycle—from designing complex monetization engines to 
            building AI-powered automation that transforms legacy systems into modern, intelligent platforms.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            With 14+ years of experience across Fortune 500 companies (Verizon, Intuit, Dell, Rogers) 
            and telecom giants (Reliance Jio, Vodafone Qatar, 2Degrees NZ), I&apos;ve delivered projects with 
            measurable impact: $5M+/month revenue uplifts, $120M+ annual billing systems, and enterprise 
            migrations serving millions of users.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Beyond enterprise work, I build SaaS products and AI tools—from billing engines to browser 
            automation layers—always pushing the boundary between what&apos;s reliable and what&apos;s cutting-edge. 
            I thrive in the intersection of architecture, AI, and execution.
          </p>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card"
        >
          <h3 className="text-2xl font-bold text-gradient mb-6">My Philosophy</h3>
          <ul className="space-y-3">
            {philosophy.map((item, idx) => (
              <li key={idx} className="text-slate-300 flex items-start text-lg">
                <span className="text-primary-400 mr-3 mt-1">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="card"
            >
              <div className="p-3 bg-primary-500/10 rounded-lg w-fit mb-4">
                <item.icon className="h-8 w-8 text-primary-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
