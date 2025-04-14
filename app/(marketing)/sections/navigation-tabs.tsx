import { cn } from "@/lib/utils"
import Link from "next/link"

interface NavigationTabsProps {
  activeTab?: string
}

export function NavigationTabs({ activeTab }: NavigationTabsProps) {
  const tabs = [
    { name: "Recommended", href: "#" },
    { name: "Create a website", href: "#" },
    { name: "Hosting", href: "#" },
    { name: "Domains & email", href: "#" },
  ]

  return (
    <nav className="flex gap-2 mb-12">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.href}
          className={cn(
            "px-4 py-2 rounded-full text-sm transition-colors duration-200",
            activeTab === tab.name ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5",
          )}
        >
          {tab.name}
        </Link>
      ))}
    </nav>
  )
}

