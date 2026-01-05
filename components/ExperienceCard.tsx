'use client'

import { motion } from 'framer-motion'
import { Building2, Calendar, DollarSign, Users } from 'lucide-react'

interface ExperienceCardProps {
  role: string
  company: string
  timeline: string
  revenueImpact?: string
  description: string[]
  teamSize?: string
  index?: number
}

export default function ExperienceCard({
  role,
  company,
  timeline,
  revenueImpact,
  description,
  teamSize,
  index = 0,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{role}</h3>
          <div className="flex items-center text-primary-400 text-lg mb-2">
            <Building2 className="h-5 w-5 mr-2" />
            {company}
          </div>
        </div>
        <div className="flex items-center text-slate-400 mt-2 md:mt-0">
          <Calendar className="h-4 w-4 mr-2" />
          {timeline}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        {revenueImpact && (
          <div className="flex items-center text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
            <DollarSign className="h-4 w-4 mr-1" />
            <span className="text-sm font-semibold">{revenueImpact}</span>
          </div>
        )}
        {teamSize && (
          <div className="flex items-center text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
            <Users className="h-4 w-4 mr-1" />
            <span className="text-sm font-semibold">{teamSize}</span>
          </div>
        )}
      </div>

      <ul className="space-y-2">
        {description.map((item, idx) => (
          <li key={idx} className="text-slate-300 flex items-start">
            <span className="text-primary-400 mr-2 mt-1">▹</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
