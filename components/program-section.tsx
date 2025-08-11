"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeBadge } from "@/components/ui/badge-theme"
import { Clock, Users, Presentation, Handshake, Music, Lightbulb } from "lucide-react"

export function ProgramSection() {
  const conferences = [
    {
      title: "Entrepreneuriat local : créer sa startup à Mbour",
      duration: "30 min + Q/R",
      theme: "entrepreneuriat" as const,
      description: "Comment développer une entreprise innovante en valorisant les ressources locales",
    },
    {
      title: "Agro-transformation : de la ferme au marché",
      duration: "25 min + Q/R",
      theme: "agriculture" as const,
      description: "Techniques modernes de transformation des produits agricoles locaux",
    },
    {
      title: "Financement participatif et microfinance",
      duration: "30 min + Q/R",
      theme: "entrepreneuriat" as const,
      description: "Solutions de financement adaptées aux jeunes entrepreneurs",
    },
    {
      title: "Solutions climatiques et emplois verts",
      duration: "25 min + Q/R",
      theme: "climat" as const,
      description: "Créer des opportunités économiques tout en protégeant l'environnement",
    },
    {
      title: "Économie créative et patrimoine culturel",
      duration: "30 min + Q/R",
      theme: "culture" as const,
      description: "Valoriser la culture mbouroise comme moteur économique",
    },
  ]

  const panels = [
    {
      title: "Réussir ici : alternatives crédibles à l'émigration clandestine",
      participants: "4-6 intervenants + modérateur",
      theme: "migration" as const,
      description: "Témoignages et solutions concrètes pour un développement local attractif",
    },
    {
      title: "Agriculture intelligente : rentabilité & durabilité",
      participants: "5 intervenants + modérateur",
      theme: "agriculture" as const,
      description: "Innovation agricole et techniques durables pour une meilleure productivité",
    },
    {
      title: "Climat : protéger Mbour et créer des emplois verts",
      participants: "4 intervenants + modérateur",
      theme: "climat" as const,
      description: "Adaptation climatique et opportunités économiques vertes",
    },
    {
      title: "Culture & identité : richesse économique",
      participants: "6 intervenants + modérateur",
      theme: "culture" as const,
      description: "Comment transformer notre patrimoine culturel en opportunités économiques",
    },
  ]

  const ateliers = [
    {
      title: "Élaboration de business plan",
      type: "Pratique",
      theme: "entrepreneuriat" as const,
      description: "Méthodologie complète pour structurer son projet d'entreprise",
    },
    {
      title: "Accès aux financements",
      type: "Pratique",
      theme: "entrepreneuriat" as const,
      description: "Banques, investisseurs, crowdfunding : comment convaincre",
    },
    {
      title: "Irrigation et agriculture hors-sol",
      type: "Technique",
      theme: "agriculture" as const,
      description: "Techniques modernes d'irrigation et de culture sans terre",
    },
    {
      title: "Transformation des produits agricoles",
      type: "Technique",
      theme: "agriculture" as const,
      description: "De la récolte au produit fini : techniques de transformation",
    },
    {
      title: "Communication digitale",
      type: "Marketing",
      theme: "entrepreneuriat" as const,
      description: "Réseaux sociaux et marketing digital pour entrepreneurs",
    },
    {
      title: "Gestion coopérative",
      type: "Organisation",
      theme: "agriculture" as const,
      description: "Créer et gérer une coopérative agricole efficace",
    },
  ]

  return (
    <section id="programme" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-deep-gray mb-4">Programme</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une journée riche en contenus : conférences inspirantes, débats constructifs et ateliers pratiques
          </p>
        </div>

        <Tabs defaultValue="conferences" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
            <TabsTrigger value="conferences" className="text-xs md:text-sm">
              <Presentation size={16} className="mr-1" />
              Conférences
            </TabsTrigger>
            <TabsTrigger value="panels" className="text-xs md:text-sm">
              <Users size={16} className="mr-1" />
              Panels
            </TabsTrigger>
            <TabsTrigger value="ateliers" className="text-xs md:text-sm">
              <Lightbulb size={16} className="mr-1" />
              Ateliers
            </TabsTrigger>
            <TabsTrigger value="stands" className="text-xs md:text-sm">
              <Handshake size={16} className="mr-1" />
              Stands
            </TabsTrigger>
            <TabsTrigger value="culture" className="text-xs md:text-sm">
              <Music size={16} className="mr-1" />
              Culture
            </TabsTrigger>
            <TabsTrigger value="networking" className="text-xs md:text-sm">
              <Users size={16} className="mr-1" />
              Networking
            </TabsTrigger>
          </TabsList>

          <TabsContent value="conferences">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {conferences.map((conference, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-lg font-heading">{conference.title}</CardTitle>
                      <ThemeBadge variant={conference.theme}>{conference.theme}</ThemeBadge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={16} />
                      {conference.duration}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{conference.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="panels">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {panels.map((panel, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-lg font-heading">{panel.title}</CardTitle>
                      <ThemeBadge variant={panel.theme}>{panel.theme}</ThemeBadge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users size={16} />
                      {panel.participants}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{panel.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ateliers">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ateliers.map((atelier, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-base font-heading">{atelier.title}</CardTitle>
                      <ThemeBadge variant={atelier.theme}>{atelier.theme}</ThemeBadge>
                    </div>
                    <div className="text-sm text-ocean font-medium">{atelier.type}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{atelier.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stands">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Stands & Expositions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  30 à 40 stands présenteront les innovations locales dans différents secteurs :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-ocean mb-2">Startups & PME locales</h4>
                    <p className="text-sm text-gray-600">Découvrez les entreprises innovantes de la région de Mbour</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-palm mb-2">Coopératives agricoles</h4>
                    <p className="text-sm text-gray-600">Produits locaux et techniques agricoles durables</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Énergies renouvelables</h4>
                    <p className="text-sm text-gray-600">Solutions énergétiques adaptées au contexte local</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold mb-2">Associations culturelles</h4>
                    <p className="text-sm text-gray-600">Patrimoine culturel et créations artistiques</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="culture">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Scène Culturelle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Music className="text-gold" size={32} />
                    </div>
                    <h4 className="font-semibold text-deep-gray mb-2">Concerts</h4>
                    <p className="text-sm text-gray-600">Artistes locaux et musiques traditionnelles</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="text-gold" size={32} />
                    </div>
                    <h4 className="font-semibold text-deep-gray mb-2">Danses</h4>
                    <p className="text-sm text-gray-600">Danses traditionnelles et créations modernes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Presentation className="text-gold" size={32} />
                    </div>
                    <h4 className="font-semibold text-deep-gray mb-2">Théâtre Forum</h4>
                    <p className="text-sm text-gray-600">Débats interactifs sur la migration</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="networking">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Sessions de Networking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Moments d'échanges privilégiés pour créer des synergies et développer votre réseau professionnel.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-ocean mb-2">Sessions B2B/B2C</h4>
                    <p className="text-sm text-gray-600">
                      Rencontres organisées après chaque panel et atelier pour approfondir les échanges
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-palm mb-2">Badges Profil</h4>
                    <p className="text-sm text-gray-600">
                      Identification par profil : porteur de projet, investisseur, partenaire, mentor
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
