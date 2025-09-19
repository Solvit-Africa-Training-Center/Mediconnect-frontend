import { Link } from "react-router-dom";

type PortalCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  link: string;
  onClick?: () => void;
};

const PortalCard = ({ icon: Icon, title, description, link, onClick }: PortalCardProps) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-6 cursor-pointer"
      onClick={onClick}
    >
      <div className="grid place-items-center items-center mb-6">
        <div className="flex items-center bg-gradient-medical p-3 mb-4 rounded">
        <Icon className="w-10 h-10 text-white" />
        </div>
        <h3 className="ml-4 text-xl font-medium">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 text-center">{description}</p>
      <Link
        to={link}
      >
      </Link>
    </div>
  );
};

export default PortalCard;
