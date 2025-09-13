import { LucideIcon } from "lucide-react"

interface PortalCardProps {
  icon: LucideIcon
  title: string
  description: string
  link: string
}

const PortalCard = ({ icon: Icon, title, description, link }: PortalCardProps) => {
  return (
    <a
      href={link}
      className="bg-card rounded-lg md:rounded-xl p-6 md:p-8 shadow-card hover:shadow-float transition-smooth cursor-pointer block"
    >
      <div className="text-center space-y-3 md:space-y-4">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-medical rounded-lg md:rounded-xl flex items-center justify-center mx-auto">
          <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </a>
  )
}

export default PortalCard