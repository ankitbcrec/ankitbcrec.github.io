'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags?: string[]
  link?: string
  github?: string
  index?: number
}

export default function ProjectCard({
  title,
  description,
  tags = [],
  link,
  github,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex gap-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <p className="text-slate-300 mb-4 flex-grow">{description}</p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}
