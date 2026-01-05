'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Database, 
  Cloud, 
  GitBranch, 
  Brain, 
  Code2,
  Sparkles,
  Shield
} from 'lucide-react'

const iconMap = {
  Users,
  Database,
  Cloud,
  GitBranch,
  Brain,
  Code2,
  Sparkles,
  Shield,
}

interface SkillCardProps {
  icon: keyof typeof iconMap
  title: string
  skills: string[]
  index?: number
}

export default function SkillCard({ icon, title, skills, index = 0 }: SkillCardProps) {
  const Icon = iconMap[icon]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-primary-500/10 rounded-lg mr-4">
          <Icon className="h-8 w-8 text-primary-400" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, idx) => (
          <li key={idx} className="text-slate-300 flex items-start">
            <span className="text-primary-400 mr-2">•</span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
