import { LucideIcon } from 'lucide-react';
import PortalCard from "./PortalCard"

interface PortalCardsProps {
  icon: LucideIcon
  title: string
  description: string
  link: string
}

const PortalCards = ({ icon, title, description, link }: PortalCardsProps) => {
  return (
    <PortalCard
      icon={icon}
      title={title}
      description={description}
      link={link}
    />
  )
}

export default PortalCards