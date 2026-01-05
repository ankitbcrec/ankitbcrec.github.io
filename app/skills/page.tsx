import SectionHeader from '@/components/SectionHeader'
import SkillCard from '@/components/SkillCard'

export default function SkillsPage() {
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

  return (
    <div className="section-container">
      <SectionHeader 
        title="Skills & Expertise" 
        subtitle="Full-stack mastery from architecture to AI"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
  )
}
