'use client'

import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import { useState } from 'react'

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<'enterprise' | 'ai' | 'saas'>('enterprise')

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

  const tabs = [
    { id: 'enterprise', label: 'Enterprise Projects', count: enterpriseProjects.length },
    { id: 'ai', label: 'AI Products', count: aiProjects.length },
    { id: 'saas', label: 'SaaS Products', count: saasProjects.length },
  ] as const

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

  return (
    <div className="section-container">
      <SectionHeader 
        title="Projects" 
        subtitle="From enterprise billing systems to AI-powered SaaS products"
      />

      {/* Tabs */}
      <div className="max-w-4xl mx-auto mb-12">
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

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  )
}
