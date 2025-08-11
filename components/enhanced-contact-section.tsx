"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ThemeBadge } from "@/components/ui/badge-theme"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Phone, Mail, MessageCircle, CheckCircle } from "lucide-react"

export function EnhancedContactSection() {
  const [selectedThemes, setSelectedThemes] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isExhibitorSubmitting, setIsExhibitorSubmitting] = useState(false)
  const [isExhibitorSubmitted, setIsExhibitorSubmitted] = useState(false)

  const themes = [
    { value: "entrepreneuriat", label: "Entrepreneuriat", variant: "entrepreneuriat" as const },
    { value: "agriculture", label: "Agriculture", variant: "agriculture" as const },
    { value: "culture", label: "Culture", variant: "culture" as const },
    { value: "climat", label: "Climat", variant: "climat" as const },
    { value: "migration", label: "Migration", variant: "migration" as const },
  ]

  const toggleTheme = (theme: string) => {
    setSelectedThemes((prev) => (prev.includes(theme) ? prev.filter((t) => t !== theme) : [...prev, theme]))
  }

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleExhibitorSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsExhibitorSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsExhibitorSubmitting(false)
    setIsExhibitorSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => setIsExhibitorSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 bg-sand/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-deep-gray mb-4">Inscriptions & Contact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rejoignez-nous pour cette journée exceptionnelle. L'inscription est gratuite !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Registration Form */}
          <Card id="inscription" className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-ocean flex items-center gap-2">
                {isSubmitted && <CheckCircle className="text-green-600" size={24} />}
                Je m'inscris
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="mx-auto mb-4 text-green-600" size={48} />
                  <h3 className="font-heading font-semibold text-lg text-green-600 mb-2">Inscription confirmée !</h3>
                  <p className="text-gray-600">Vous recevrez un email de confirmation sous peu.</p>
                </div>
              ) : (
                <form onSubmit={handleRegistrationSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input id="prenom" placeholder="Votre prénom" required />
                    </div>
                    <div>
                      <Label htmlFor="nom">Nom *</Label>
                      <Input id="nom" placeholder="Votre nom" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" required />
                  </div>
                  <div>
                    <Label htmlFor="telephone">Téléphone *</Label>
                    <Input id="telephone" type="tel" placeholder="+221 XX XXX XX XX" required />
                  </div>
                  <div>
                    <Label htmlFor="statut">Statut *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre statut" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jeune-porteur">Jeune porteur de projet</SelectItem>
                        <SelectItem value="etudiant">Étudiant</SelectItem>
                        <SelectItem value="investisseur">Investisseur</SelectItem>
                        <SelectItem value="ong">ONG</SelectItem>
                        <SelectItem value="entreprise">Entreprise</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-base font-medium">Thèmes d'intérêt</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {themes.map((theme) => (
                        <button
                          key={theme.value}
                          type="button"
                          onClick={() => toggleTheme(theme.value)}
                          className={`transition-all ${
                            selectedThemes.includes(theme.value) ? "scale-105" : "opacity-70 hover:opacity-100"
                          }`}
                        >
                          <ThemeBadge variant={theme.variant}>{theme.label}</ThemeBadge>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="rgpd" required />
                    <Label htmlFor="rgpd" className="text-sm">
                      J'accepte que mes données soient utilisées pour l'organisation de l'événement (RGPD) *
                    </Label>
                  </div>
                  <Button type="submit" className="w-full bg-ocean hover:bg-ocean/90" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" />
                        <span className="ml-2">Inscription en cours...</span>
                      </>
                    ) : (
                      "Confirmer mon inscription"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Exhibitor Form */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-palm flex items-center gap-2">
                {isExhibitorSubmitted && <CheckCircle className="text-green-600" size={24} />}
                Candidature Exposant
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isExhibitorSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="mx-auto mb-4 text-green-600" size={48} />
                  <h3 className="font-heading font-semibold text-lg text-green-600 mb-2">Candidature envoyée !</h3>
                  <p className="text-gray-600">Notre équipe vous contactera sous 48h.</p>
                </div>
              ) : (
                <form onSubmit={handleExhibitorSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="organisation">Organisation *</Label>
                    <Input id="organisation" placeholder="Nom de votre organisation" required />
                  </div>
                  <div>
                    <Label htmlFor="contact-nom">Nom du contact *</Label>
                    <Input id="contact-nom" placeholder="Nom du responsable" required />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email de contact *</Label>
                    <Input id="contact-email" type="email" placeholder="contact@organisation.com" required />
                  </div>
                  <div>
                    <Label htmlFor="contact-tel">Téléphone *</Label>
                    <Input id="contact-tel" type="tel" placeholder="+221 XX XXX XX XX" required />
                  </div>
                  <div>
                    <Label htmlFor="type-stand">Type de stand souhaité</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez votre stand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Stand Standard (3m x 3m)</SelectItem>
                        <SelectItem value="premium">Stand Premium (3m x 6m)</SelectItem>
                        <SelectItem value="demonstration">Espace Démonstration (6m x 6m)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="description">Description de votre activité *</Label>
                    <Textarea
                      id="description"
                      placeholder="Décrivez brièvement votre organisation et ce que vous souhaitez présenter"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="besoins">Besoins logistiques</Label>
                    <Textarea id="besoins" placeholder="Électricité, mobilier spécifique, etc." />
                  </div>
                  <Button type="submit" className="w-full bg-palm hover:bg-palm/90" disabled={isExhibitorSubmitting}>
                    {isExhibitorSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" />
                        <span className="ml-2">Envoi en cours...</span>
                      </>
                    ) : (
                      "Envoyer ma candidature"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-center text-deep-gray">Nous Contacter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center group">
                  <Phone className="text-ocean mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="font-semibold mb-2">Téléphone</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <a href="tel:+221784350433" className="block hover:text-ocean transition-colors">
                      78 435 04 33
                    </a>
                    <a href="tel:+221781203477" className="block hover:text-ocean transition-colors">
                      78 120 34 77
                    </a>
                    <a href="tel:+221782952065" className="block hover:text-ocean transition-colors">
                      78 295 20 65
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center group">
                  <Mail className="text-palm mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="font-semibold mb-2">Email</h4>
                  <a href="mailto:Mbourup2025@gmail.com" className="text-palm hover:underline transition-all">
                    Mbourup2025@gmail.com
                  </a>
                </div>
                <div className="flex flex-col items-center group">
                  <MessageCircle className="text-gold mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="font-semibold mb-2">WhatsApp</h4>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gold text-gold hover:bg-gold hover:text-white bg-transparent transition-all"
                      onClick={() => window.open("https://wa.me/221784350433", "_blank")}
                    >
                      Nous écrire
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
