import { Button } from "@/components/ui/button"
import { ThemeBadge } from "@/components/ui/badge-theme"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const themes = [
    { label: "Entrepreneuriat", variant: "entrepreneuriat" as const },
    { label: "Culture", variant: "culture" as const },
    { label: "Migration", variant: "migration" as const },
    { label: "Agriculture", variant: "agriculture" as const },
    { label: "Climat", variant: "climat" as const },
  ]

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sand/30 to-white pt-16"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-11%20at%2015.58.56%20%281%29-bFkUQN5uHWHIjv5yI9uJXKiaFcr6Kv.jpeg"
          alt="Palm Beach Hôtel Saly - Coucher de soleil sur la plage"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sand/60 to-white/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="font-heading font-bold text-5xl md:text-7xl text-ocean mb-4">Mbour Up !</h1>

          {/* Subtitle */}
          <p className="font-heading text-xl md:text-2xl text-deep-gray mb-6">
            Forum jeunesse, entrepreneuriat & avenir durable
          </p>

          {/* Event Details */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-deep-gray">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="text-ocean" size={20} />
                <span className="font-medium">Samedi 6 septembre 2025</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="text-ocean" size={20} />
                <span className="font-medium">9h00–19h00</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="text-ocean" size={20} />
                <span className="font-medium">Palm Beach Hôtel, Saly (Mbour)</span>
              </div>
            </div>
          </div>

          {/* Theme Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {themes.map((theme) => (
              <ThemeBadge key={theme.label} variant={theme.variant}>
                {theme.label}
              </ThemeBadge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-ocean hover:bg-ocean/90 text-white px-8 py-3 text-lg animate-gentle-bounce"
            >
              <Link href="#inscription">Je m'inscris</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-palm text-palm hover:bg-palm hover:text-white px-8 py-3 text-lg bg-transparent"
            >
              <Link href="#exposants">Devenir exposant</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
