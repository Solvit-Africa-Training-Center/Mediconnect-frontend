interface StatsCardProps {
  title: string;
  value: number;
  change: string;
  icon?: string;
}

export default function StatsCard({
  title,
  value,
  change,
  icon,
}: StatsCardProps) {
  // Split change for coloring
  const [percent, ...rest] = change.split(" ");
  const restText = rest.join(" ");
  const percentColor = percent.startsWith("+")
    ? "text-green-500"
    : percent.startsWith("-")
    ? "text-red-500"
    : "text-gray-500";

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {/* Title row with icon on the right */}
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        {icon && (
          <img src={icon} alt={title} className="w-5 h-5 object-contain" />
        )}
      </div>

      {/* Value */}
      <p className="text-2xl  text-[#1F262E]">{value}</p>

      {/* Change */}
      <p className="text-sm">
        <span className={`${percentColor} font-semibold`}>{percent}</span>{" "}
        <span className="text-gray-500">{restText}</span>
      </p>
    </div>
  );
}
