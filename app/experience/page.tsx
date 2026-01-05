import SectionHeader from '@/components/SectionHeader'
import ExperienceCard from '@/components/ExperienceCard'

export default function ExperiencePage() {
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

  return (
    <div className="section-container">
      <SectionHeader 
        title="Experience" 
        subtitle="14+ years building revenue-critical systems at scale"
      />

      <div className="max-w-5xl mx-auto space-y-8">
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
  )
}
