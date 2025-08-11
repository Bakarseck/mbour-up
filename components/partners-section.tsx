import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function PartnersSection() {
  const partnerCategories = [
    {
      title: "Partenaires Institutionnels",
      partners: [
        { name: "Ministère de la Jeunesse", logo: "/placeholder.svg?height=80&width=120" },
        { name: "Région de Thiès", logo: "/placeholder.svg?height=80&width=120" },
        { name: "Commune de Mbour", logo: "/placeholder.svg?height=80&width=120" },
        { name: "ANPEJ", logo: "/placeholder.svg?height=80&width=120" },
      ],
    },
    {
      title: "Partenaires Financiers",
      partners: [
        { name: "Banque Agricole", logo: "/placeholder.svg?height=80&width=120" },
        { name: "BNDE", logo: "/placeholder.svg?height=80&width=120" },
        { name: "Microcred", logo: "/placeholder.svg?height=80&width=120" },
        { name: "Fonds de Garantie", logo: "/placeholder.svg?height=80&width=120" },
      ],
    },
    {
      title: "Partenaires Techniques",
      partners: [
        { name: "ISRA", logo: "/placeholder.svg?height=80&width=120" },
        { name: "CNCAS", logo: "/placeholder.svg?height=80&width=120" },
        { name: "SAED", logo: "/placeholder.svg?height=80&width=120" },
        { name: "ANCAR", logo: "/placeholder.svg?height=80&width=120" },
      ],
    },
    {
      title: "Partenaires Médias",
      partners: [
        { name: "RTS", logo: "/placeholder.svg?height=80&width=120" },
        { name: "Sud FM", logo: "/placeholder.svg?height=80&width=120" },
        { name: "L'Observateur", logo: "/placeholder.svg?height=80&width=120" },
        { name: "Dakaractu", logo: "/placeholder.svg?height=80&width=120" },
      ],
    },
  ]

  return (
    <section id="partenaires" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-deep-gray mb-4">Partenaires & Sponsors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ils nous accompagnent dans cette aventure pour le développement de Mbour
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {partnerCategories.map((category, index) => (
            <div key={index}>
              <h3 className="font-heading font-semibold text-xl text-center text-deep-gray mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <Card key={partnerIndex} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex items-center justify-center">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        className="max-w-full max-h-16 object-contain grayscale hover:grayscale-0 transition-all"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sponsor Kit */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-sand/30">
            <CardContent className="p-8">
              <h3 className="font-heading font-bold text-2xl text-deep-gray mb-4">Devenez Partenaire</h3>
              <p className="text-gray-600 mb-6">
                Rejoignez-nous et bénéficiez d'une visibilité exceptionnelle auprès de plus de 200 jeunes entrepreneurs
                et décideurs locaux.
              </p>
              <Button className="bg-ocean hover:bg-ocean/90">
                <Download className="mr-2" size={18} />
                Télécharger le kit sponsor
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
