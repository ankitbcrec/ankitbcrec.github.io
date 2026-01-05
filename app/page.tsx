'use client'

import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import ExperienceCard from '@/components/ExperienceCard'
import SkillCard from '@/components/SkillCard'
import ProjectCard from '@/components/ProjectCard'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Target, Lightbulb, Rocket, Users } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'enterprise' | 'ai' | 'saas'>('enterprise')

  // About section data
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

  // Experience data
  const experiences = [
    {
      role: 'Senior Technical Lead',
      company: 'Verizon',
      timeline: '2023 - Present',
      revenueImpact: '$5M+/month uplift',
      teamSize: 'Leading 8+ engineers',
      description: [
        'Architected and delivered Multiline Discount Engine processing $5M+ monthly revenue impact',
        'Led AI-driven modernization of legacy billing systems, reducing technical debt by 40%',
        'Designed scalable microservices architecture handling millions of customer transactions',
        'Implemented advanced pricing algorithms for complex multi-product discounting scenarios',
        'Mentored team of 8+ engineers across USA and offshore locations',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Intuit',
      timeline: '2021 - 2023',
      revenueImpact: '$18M revenue impact',
      teamSize: 'Team of 12',
      description: [
        'Delivered Cross-SKU Migration Engine enabling seamless product transitions for 100K+ users',
        'Built automation framework reducing migration time from weeks to hours',
        'Architected billing integration layer connecting multiple payment gateways',
        'Implemented real-time analytics dashboard for subscription health monitoring',
        'Achieved 99.9% uptime for revenue-critical billing services',
      ],
    },
    {
      role: 'Principal Software Engineer',
      company: 'Dell Technologies',
      timeline: '2019 - 2021',
      revenueImpact: '$120M+ annual revenue',
      teamSize: 'Cross-functional team',
      description: [
        'Designed and deployed Monetization Engine powering $120M+ annual billing operations',
        'Led technical architecture for multi-tenant SaaS billing platform',
        'Implemented usage-based billing system supporting complex pricing models',
        'Built integration layer connecting CRM, ERP, and billing systems',
        'Reduced billing errors by 85% through automated validation and reconciliation',
      ],
    },
    {
      role: 'OBRM Subject Matter Expert',
      company: 'Reliance Jio',
      timeline: '2018 - 2019',
      revenueImpact: 'Serving 400M+ subscribers',
      teamSize: 'Large scale team',
      description: [
        'Led Oracle BRM 12 upgrade project for largest telecom network in India',
        'Architected billing solution handling 400M+ subscribers',
        'Designed high-availability disaster recovery system with <5 min RTO',
        'Optimized database performance improving billing cycle time by 60%',
        'Established DevOps practices reducing deployment time from days to hours',
      ],
    },
    {
      role: 'Technical Lead',
      company: '2Degrees (New Zealand)',
      timeline: '2016 - 2018',
      revenueImpact: 'National operator',
      description: [
        'Built Injection Engine for real-time plan and balance modifications',
        'Designed automated testing framework reducing QA time by 70%',
        'Led migration from legacy systems to modern microservices architecture',
        'Implemented monitoring and alerting system achieving 99.95% uptime',
      ],
    },
    {
      role: 'Senior Consultant',
      company: 'Equifax',
      timeline: '2015 - 2016',
      description: [
        'Developed Usage Billing system processing millions of credit report transactions',
        'Designed and implemented Disaster Recovery solution for mission-critical billing',
        'Built real-time reporting dashboards for revenue analytics',
        'Optimized billing algorithms reducing processing time by 50%',
      ],
    },
    {
      role: 'Consultant',
      company: 'Rogers Communications (EY)',
      timeline: '2014 - 2015',
      revenueImpact: 'Major Canadian operator',
      description: [
        'Architected Migration Engine for transitioning 1M+ subscribers between billing platforms',
        'Built automated validation framework ensuring data integrity during migrations',
        'Designed rollback mechanisms for zero-downtime migrations',
        'Reduced migration errors by 90% through comprehensive testing automation',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Vodafone Qatar',
      timeline: '2012 - 2014',
      description: [
        'Developed billing and mediation systems for national telecom operator',
        'Built integration layer connecting network elements to billing platform',
        'Implemented real-time charging system for prepaid subscribers',
        'Optimized mediation workflows processing millions of CDRs daily',
      ],
    },
  ]

  // Skills data
  const skillCategories = [
    {
      icon: 'Users' as const,
      title: 'Leadership & Delivery',
      skills: [
        'Engineering Leadership & Team Management',
        'Agile/Scrum Methodologies',
        'Technical Architecture & Design',
        'Stakeholder Management',
        'Cross-functional Team Collaboration',
        'Global Team Coordination (USA, Qatar, NZ, India)',
      ],
    },
    {
      icon: 'Database' as const,
      title: 'Enterprise Billing Expertise',
      skills: [
        'Oracle BRM (Billing & Revenue Management)',
        'Subscription & Usage-Based Billing',
        'Complex Pricing & Discounting Engines',
        'Payment Gateway Integration',
        'Revenue Assurance & Reconciliation',
        'Multi-tenant SaaS Billing Platforms',
      ],
    },
    {
      icon: 'Cloud' as const,
      title: 'Cloud, DevOps & Reliability',
      skills: [
        'AWS (EC2, Lambda, S3, RDS, CloudWatch)',
        'Docker & Kubernetes',
        'CI/CD Pipelines (Jenkins, GitHub Actions)',
        'Infrastructure as Code (Terraform)',
        'Monitoring & Observability',
        'High Availability & Disaster Recovery',
      ],
    },
    {
      icon: 'GitBranch' as const,
      title: 'Architecture & System Design',
      skills: [
        'Microservices Architecture',
        'Event-Driven Systems',
        'API Design (REST, GraphQL)',
        'Database Design & Optimization',
        'Scalability & Performance Tuning',
        'Legacy System Modernization',
      ],
    },
    {
      icon: 'Brain' as const,
      title: 'AI-Driven Engineering',
      skills: [
        'LLM Integration (GPT-4, Claude, Gemini)',
        'RAG (Retrieval-Augmented Generation)',
        'AI Code Analysis & Modernization',
        'Multi-step AI Agents',
        'Browser Automation with AI',
        'Prompt Engineering & Fine-tuning',
      ],
    },
    {
      icon: 'Code2' as const,
      title: 'Programming & Frameworks',
      skills: [
        'Python (FastAPI, Django, Flask)',
        'TypeScript / JavaScript (Node.js)',
        'React / Next.js',
        'SQL (PostgreSQL, Oracle, MySQL)',
        'NoSQL (Redis, MongoDB)',
        'C/C++ (Legacy Systems)',
      ],
    },
    {
      icon: 'Sparkles' as const,
      title: 'Modern Tech Stack',
      skills: [
        'Next.js 14 (App Router)',
        'TailwindCSS & Modern UI',
        'Supabase (Backend-as-a-Service)',
        'Vercel Deployment',
        'Prisma ORM',
        'Framer Motion (Animations)',
      ],
    },
    {
      icon: 'Shield' as const,
      title: 'Enterprise Integration',
      skills: [
        'Oracle Suite (DB, Weblogic, BRM)',
        'Message Queues (Kafka, RabbitMQ)',
        'ETL & Data Pipelines',
        'CRM/ERP Integration',
        'Network Protocol (SOAP, REST, gRPC)',
        'Security & Compliance',
      ],
    },
  ]

  // Projects data
  const enterpriseProjects = [
    {
      title: 'Multiline Discount Engine',
      description: 'Verizon - Revenue-critical discount engine processing $5M+/month. Built scalable pricing algorithm handling complex multi-product scenarios with real-time calculations.',
      tags: ['Oracle BRM', 'Java', 'Microservices', 'AWS'],
    },
    {
      title: 'Cross-SKU Migration Engine',
      description: 'Intuit - Automated migration system enabling seamless product transitions for 100K+ users. Reduced migration time from weeks to hours with zero revenue loss.',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    },
    {
      title: 'Monetization Engine',
      description: 'Dell - Enterprise billing platform powering $120M+ annual revenue. Multi-tenant SaaS architecture with usage-based billing and complex pricing models.',
      tags: ['Node.js', 'React', 'MongoDB', 'Kubernetes'],
    },
    {
      title: 'BRM 12 Upgrade',
      description: 'Reliance Jio - Led Oracle BRM upgrade for largest telecom network in India serving 400M+ subscribers. Achieved <5 min RTO with high-availability DR system.',
      tags: ['Oracle BRM', 'Linux', 'Shell Scripting', 'DevOps'],
    },
    {
      title: 'Injection Engine',
      description: '2Degrees NZ - Real-time plan and balance modification engine for national telecom operator. Reduced processing time by 70% with automated workflows.',
      tags: ['Java', 'Oracle DB', 'REST API', 'Jenkins'],
    },
    {
      title: 'Usage Billing & DR',
      description: 'Equifax - Mission-critical usage billing system with disaster recovery. Processes millions of credit report transactions with 99.95% uptime.',
      tags: ['C++', 'Oracle', 'Shell', 'High Availability'],
    },
    {
      title: 'Migration Engine',
      description: 'Rogers (EY) - Architected migration engine transitioning 1M+ subscribers between billing platforms. Achieved 90% error reduction through automated validation.',
      tags: ['Python', 'Oracle BRM', 'ETL', 'Data Migration'],
    },
    {
      title: 'Billing & Mediation',
      description: 'Vodafone Qatar - Built billing and mediation systems for national telecom operator. Real-time charging for prepaid subscribers processing millions of CDRs daily.',
      tags: ['Java', 'Oracle', 'Network Integration', 'Telecom'],
    },
  ]

  const aiProjects = [
    {
      title: 'AI Static Code Analyzer',
      description: 'LLM-powered code analysis tool that identifies bugs, security vulnerabilities, and suggests optimizations. Supports 15+ programming languages with context-aware suggestions.',
      tags: ['GPT-4', 'Python', 'AST Parsing', 'FastAPI'],
    },
    {
      title: 'Browser Automation AI Layer',
      description: 'Intelligent browser automation using AI to understand web interfaces and perform complex tasks. Converts natural language to browser actions.',
      tags: ['Playwright', 'GPT-4', 'Python', 'Computer Vision'],
    },
    {
      title: 'Multi-step AI Agents',
      description: 'Framework for building autonomous AI agents that can plan, execute, and adapt. Used for complex workflows like code refactoring and system migrations.',
      tags: ['LangChain', 'OpenAI', 'Python', 'Agent Framework'],
    },
    {
      title: 'RAG Systems',
      description: 'Production-grade RAG implementation for enterprise knowledge bases. Vector search with semantic caching and hybrid retrieval strategies.',
      tags: ['Pinecone', 'OpenAI Embeddings', 'FastAPI', 'PostgreSQL'],
    },
    {
      title: 'AI-led Modernization for Billing',
      description: 'AI tool that analyzes legacy billing code and generates modernization recommendations. Automates refactoring of Oracle BRM customizations to cloud-native solutions.',
      tags: ['Claude', 'Code Analysis', 'Refactoring', 'Python'],
    },
  ]

  const saasProjects = [
    {
      title: 'TheTradeFormula Ecosystem',
      description: 'Complete trading education platform with course management, analytics, and community features. Serving 10K+ active users.',
      tags: ['Next.js', 'Supabase', 'Stripe', 'TailwindCSS'],
    },
    {
      title: 'Billing Engine SaaS',
      description: 'Modern alternative to Oracle BRM - cloud-native billing platform for SaaS companies. Usage-based billing, subscriptions, and revenue analytics.',
      tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Webhooks'],
    },
    {
      title: 'AI Chrome Extension',
      description: 'Productivity extension that brings AI assistance directly into browser. Context-aware suggestions for writing, coding, and research.',
      tags: ['TypeScript', 'Chrome API', 'OpenAI', 'React'],
    },
    {
      title: 'Project O (Wealth Vault)',
      description: 'Personal finance management platform with AI-powered insights. Portfolio tracking, expense analysis, and investment recommendations.',
      tags: ['Next.js', 'Python', 'FastAPI', 'Financial APIs'],
    },
    {
      title: 'ParentIQ',
      description: 'EdTech platform helping parents track and support children\'s learning. AI-driven personalized recommendations and progress analytics.',
      tags: ['React', 'Node.js', 'MongoDB', 'OpenAI'],
    },
    {
      title: 'Nextech Innovate IT',
      description: 'IT consulting services platform with project management, client portal, and automated billing. Serves 50+ enterprise clients.',
      tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Auth0'],
    },
    {
      title: 'Ritika Arts Store',
      description: 'E-commerce platform for handmade art and crafts. Integrated payment processing, inventory management, and artist dashboard.',
      tags: ['Next.js', 'Shopify API', 'Stripe', 'TailwindCSS'],
    },
    {
      title: 'MGA Towing App',
      description: 'Mobile app for towing service management. Real-time driver tracking, automated dispatch, and customer notifications.',
      tags: ['React Native', 'Firebase', 'Google Maps', 'Push Notifications'],
    },
    {
      title: 'OpsMind',
      description: 'Operations intelligence platform for manufacturing. IoT sensor integration, predictive maintenance, and real-time dashboards.',
      tags: ['Python', 'TimescaleDB', 'React', 'IoT'],
    },
    {
      title: 'BytePrep',
      description: 'Technical interview preparation platform with AI mock interviews. Code execution, real-time feedback, and personalized learning paths.',
      tags: ['Next.js', 'Python', 'Code Execution', 'GPT-4'],
    },
  ]

  const getProjects = () => {
    switch (activeTab) {
      case 'enterprise':
        return enterpriseProjects
      case 'ai':
        return aiProjects
      case 'saas':
        return saasProjects
    }
  }

  const tabs = [
    { id: 'enterprise', label: 'Enterprise Projects', count: enterpriseProjects.length },
    { id: 'ai', label: 'AI Products', count: aiProjects.length },
    { id: 'saas', label: 'SaaS Products', count: saasProjects.length },
  ] as const

  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="About Me" 
            subtitle="A Builder. An Architect. A Leader."
          />

          <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              and telecom giants (Reliance Jio, Vodafone Qatar, 2Degrees NZ), I've delivered projects with 
              measurable impact: $5M+/month revenue uplifts, $120M+ annual billing systems, and enterprise 
              migrations serving millions of users.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Beyond enterprise work, I build SaaS products and AI tools—from billing engines to browser 
              automation layers—always pushing the boundary between what's reliable and what's cutting-edge. 
              I thrive in the intersection of architecture, AI, and execution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-container bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Experience" 
            subtitle="14+ years building revenue-critical systems at scale"
          />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <ExperienceCard
              key={idx}
              role={exp.role}
              company={exp.company}
              timeline={exp.timeline}
              revenueImpact={exp.revenueImpact}
              description={exp.description}
              teamSize={exp.teamSize}
              index={idx}
            />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Skills & Expertise" 
            subtitle="Full-stack mastery from architecture to AI"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <SkillCard
              key={idx}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              index={idx}
            />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Projects" 
            subtitle="From enterprise billing systems to AI-powered SaaS products"
          />

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/50'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getProjects().map((project, idx) => (
              <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              tags={project.tags}
              index={idx}
            />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Get In Touch" 
            subtitle="Let's build something amazing together"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                <a 
                  href="mailto:ankit.bcrec.23@gmail.com"
                  className="card flex items-center hover:scale-105 transition-transform"
                >
                  <div className="p-3 bg-primary-500/10 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Email</div>
                    <div className="text-white font-semibold">ankit.bcrec.23@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+919674711110"
                  className="card flex items-center hover:scale-105 transition-transform"
                >
                  <div className="p-3 bg-primary-500/10 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Phone</div>
                    <div className="text-white font-semibold">+91 9674711110</div>
                  </div>
                </a>

                <div className="card flex items-center">
                  <div className="p-3 bg-primary-500/10 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Location</div>
                    <div className="text-white font-semibold">Bengaluru, India</div>
                  </div>
                </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ankitbcrec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center justify-center w-16 h-16 hover:scale-110 transition-transform"
                >
                  <Github className="h-8 w-8 text-primary-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ankit-chakraborty-obrm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center justify-center w-16 h-16 hover:scale-110 transition-transform"
                >
                  <Linkedin className="h-8 w-8 text-primary-400" />
                </a>
                </div>
              </div>
            </div>

            <div className="card h-fit">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>

          <div className="card mt-6">
            <h3 className="text-2xl font-bold text-white mb-6">Availability</h3>
            <p className="text-slate-300 mb-2">
              Open to exciting opportunities in:
            </p>
            <ul className="space-y-2">
              <li className="text-slate-300 flex items-start">
                <span className="text-primary-400 mr-2">▹</span>
                Engineering Leadership Roles
              </li>
              <li className="text-slate-300 flex items-start">
                <span className="text-primary-400 mr-2">▹</span>
                Billing Platform Architecture
              </li>
              <li className="text-slate-300 flex items-start">
                <span className="text-primary-400 mr-2">▹</span>
                AI/ML Engineering
              </li>
              <li className="text-slate-300 flex items-start">
                <span className="text-primary-400 mr-2">▹</span>
                SaaS Product Development
              </li>
              <li className="text-slate-300 flex items-start">
                <span className="text-primary-400 mr-2">▹</span>
                Consulting & Advisory
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
