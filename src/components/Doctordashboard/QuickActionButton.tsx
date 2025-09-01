"use client"

import type { LucideIcon } from "lucide-react"

interface QuickActionButtonProps {
  title: string
  description: string
  icon: LucideIcon
  onClick?: () => void
  variant?: "primary" | "secondary"
}

const QuickActionButton = ({
  title,
  description,
  icon: Icon,
  onClick,
  variant = "secondary",
}: QuickActionButtonProps) => {
  const variants = {
    primary: "bg-blue-50 hover:bg-blue-100",
    secondary: "bg-gray-50 hover:bg-gray-100",
  }

  const iconVariants = {
    primary: "bg-blue-100 text-blue-600",
    secondary: "bg-gray-100 text-gray-600",
  }

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 p-4 ${variants[variant]} rounded-lg transition-colors`}
    >
      <div className={`w-10 h-10 ${iconVariants[variant]} rounded-lg flex items-center justify-center`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-left">
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </button>
  )
}

export default QuickActionButton
