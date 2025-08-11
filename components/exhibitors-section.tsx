import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Store, Users, Handshake, Trophy, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ExhibitorsSection() {
  const benefits = [
    {
      icon: Users,
      title: "Visibilité maximale",
      description: "Rencontrez plus de 200 jeunes entrepreneurs et décideurs locaux",
    },
    {
      icon: Handshake,
      title: "Networking qualifié",
      description: "Créez des partenariats durables avec des acteurs clés de votre secteur",
    },
    {
      icon: Trophy,
      title: "Reconnaissance",
      description: "Valorisez votre expertise et votre contribution au développement local",
    },
    {
      icon: Store,
      title: "Opportunités commerciales",
      description: "Présentez vos produits et services à un public ciblé et engagé",
    },
  ]

  const standTypes = [
    {
      type: "Stand Standard",
      size: "3m x 3m",
      includes: ["Table", "2 chaises", "Électricité", "Badge exposant"],
      price: "Gratuit",
    },
    {
      type: "Stand Premium",
      size: "3m x 6m",
      includes: ["Mobilier complet", "Éclairage", "Électricité", "Espace stockage", "2 badges exposant"],
      price: "Sur demande",
    },
    {
      type: "Espace Démonstration",
      size: "6m x 6m",
      includes: ["Espace ouvert", "Équipement AV", "Électricité", "Zone démonstration", "3 badges exposant"],
      price: "Sur demande",
    },
  ]

  return (
    <section id="exposants" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-deep-gray mb-4">Stands & Exposants</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rejoignez les 30 à 40 exposants qui présenteront leurs innovations lors du forum
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-ocean" size={32} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-deep-gray mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stand Types */}
        <div className="mb-12">
          <h3 className="font-heading font-bold text-2xl text-center text-deep-gray mb-8">Types de Stands</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {standTypes.map((stand, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-ocean">{stand.type}</CardTitle>
                  <p className="text-gray-600">{stand.size}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {stand.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-palm rounded-full" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-lg font-bold text-gold mb-4">{stand.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="bg-sand/30 rounded-2xl p-8 mb-12">
          <h3 className="font-heading font-bold text-2xl text-center text-deep-gray mb-6">Secteurs Représentés</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-ocean/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Store className="text-ocean" size={24} />
              </div>
              <h4 className="font-semibold text-deep-gray mb-2">Startups & PME</h4>
              <p className="text-sm text-gray-600">Innovation technologique et services</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-palm/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="text-palm" size={24} />
              </div>
              <h4 className="font-semibold text-deep-gray mb-2">Coopératives</h4>
              <p className="text-sm text-gray-600">Agriculture et transformation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-6 h-6 bg-green-600 rounded-full" />
              </div>
              <h4 className="font-semibold text-deep-gray mb-2">Énergies Vertes</h4>
              <p className="text-sm text-gray-600">Solutions énergétiques durables</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="text-gold" size={24} />
              </div>
              <h4 className="font-semibold text-deep-gray mb-2">Culture & Arts</h4>
              <p className="text-sm text-gray-600">Patrimoine et créations artistiques</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="font-heading font-bold text-2xl text-deep-gray mb-4">Rejoignez-nous !</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ne manquez pas cette opportunité unique de présenter votre projet, vos produits ou vos services à un public
            engagé et qualifié.
          </p>
          <Button asChild size="lg" className="bg-palm hover:bg-palm/90 text-white px-8 py-3">
            <Link href="#contact">
              Demander un stand
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
