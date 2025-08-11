"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThemeBadge } from "@/components/ui/badge-theme"
import { Linkedin, Twitter, Globe } from "lucide-react"

export function SpeakersSection() {
  const [selectedTheme, setSelectedTheme] = useState<string>("tous")

  const speakers = [
    {
      name: "Aminata Diallo",
      role: "Fondatrice",
      organization: "AgriTech Sénégal",
      theme: "agriculture" as const,
      image: "/placeholder.svg?height=300&width=300",
      bio: "Pionnière de l'agriculture intelligente au Sénégal, spécialisée en irrigation goutte-à-goutte",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      name: "Moussa Sarr",
      role: "CEO",
      organization: "Mbour Innovation Hub",
      theme: "entrepreneuriat" as const,
      image: "/placeholder.svg?height=300&width=300",
      bio: "Entrepreneur tech passionné par l'écosystème startup sénégalais et l'innovation locale",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Fatou Ndiaye",
      role: "Directrice",
      organization: "Centre Culturel de Mbour",
      theme: "culture" as const,
      image: "/placeholder.svg?height=300&width=300",
      bio: "Experte en valorisation du patrimoine culturel et développement de l'économie créative",
      social: {
        linkedin: "#",
        website: "#",
      },
    },
    {
      name: "Ibrahima Fall",
      role: "Consultant",
      organization: "Climate Solutions Africa",
      theme: "climat" as const,
      image: "/placeholder.svg?height=300&width=300",
      bio: "Spécialiste des solutions climatiques adaptées au contexte africain et des emplois verts",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      name: "Aïssatou Ba",
      role: "Coordinatrice",
      organization: "Réseau Jeunesse Migration",
      theme: "migration" as const,
      image: "/placeholder.svg?height=300&width=300",
      bio: "Militante pour les alternatives à la migration irrégulière et le développement local",
      social: {
        linkedin: "#",
      },
    },
    {
      name: "Cheikh Diop",
      role: "Président",
      organization: "Coopérative Agricole de Saly",
      theme: "agriculture" as const,
      image: "/placeholder.svg?height=300&width=300",
      bio: "Leader coopératif avec 15 ans d'expérience dans l'organisation agricole communautaire",
      social: {
        website: "#",
      },
    },
  ]

  const themes = [
    { value: "tous", label: "Tous les thèmes" },
    { value: "entrepreneuriat", label: "Entrepreneuriat" },
    { value: "agriculture", label: "Agriculture" },
    { value: "culture", label: "Culture" },
    { value: "climat", label: "Climat" },
    { value: "migration", label: "Migration" },
  ]

  const filteredSpeakers =
    selectedTheme === "tous" ? speakers : speakers.filter((speaker) => speaker.theme === selectedTheme)

  return (
    <section id="intervenants" className="py-20 bg-sand/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-deep-gray mb-4">Nos Intervenants</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des experts passionnés et des leaders inspirants pour partager leur expérience
          </p>
        </div>

        {/* Theme Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {themes.map((theme) => (
            <Button
              key={theme.value}
              variant={selectedTheme === theme.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTheme(theme.value)}
              className={
                selectedTheme === theme.value
                  ? "bg-ocean hover:bg-ocean/90"
                  : "border-ocean text-ocean hover:bg-ocean hover:text-white"
              }
            >
              {theme.label}
            </Button>
          ))}
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredSpeakers.map((speaker, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-deep-gray">{speaker.name}</h3>
                    <p className="text-ocean font-medium">{speaker.role}</p>
                    <p className="text-sm text-gray-600">{speaker.organization}</p>
                  </div>
                  <ThemeBadge variant={speaker.theme}>{speaker.theme}</ThemeBadge>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{speaker.bio}</p>
                <div className="flex gap-3">
                  {speaker.social.linkedin && (
                    <a
                      href={speaker.social.linkedin}
                      className="text-gray-400 hover:text-ocean transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {speaker.social.twitter && (
                    <a
                      href={speaker.social.twitter}
                      className="text-gray-400 hover:text-ocean transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                  )}
                  {speaker.social.website && (
                    <a
                      href={speaker.social.website}
                      className="text-gray-400 hover:text-ocean transition-colors"
                      aria-label="Site web"
                    >
                      <Globe size={18} />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
