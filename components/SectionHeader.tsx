interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">{title}</h2>
      {subtitle && (
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}
