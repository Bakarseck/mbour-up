"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AlertBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gold text-deep-gray py-2 px-4 text-center text-sm font-medium relative">
      <span>🚨 Clôture des candidatures exposants le 20 août 2025</span>
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 hover:bg-gold/20"
        onClick={() => setIsVisible(false)}
        aria-label="Fermer l'alerte"
      >
        <X size={14} />
      </Button>
    </div>
  )
}
