import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Sprout, Leaf, Users, Palette } from "lucide-react"

export function ObjectifsSection() {
  const objectifs = [
    {
      icon: Lightbulb,
      title: "Entreprendre ici et croire en son potentiel",
      description: "Développer l'esprit entrepreneurial local et valoriser les opportunités sur place",
    },
    {
      icon: Sprout,
      title: "Valoriser l'agriculture locale",
      description: "Promouvoir les techniques agricoles durables et la transformation locale",
    },
    {
      icon: Leaf,
      title: "Innover pour le climat et la culture",
      description: "Créer des solutions écologiques tout en préservant notre patrimoine culturel",
    },
    {
      icon: Users,
      title: "Débattre des alternatives à l'émigration",
      description: "Explorer les possibilités de développement local comme alternative viable",
    },
    {
      icon: Palette,
      title: "Célébrer la culture mbouroise",
      description: "Mettre en valeur la richesse culturelle et artistique de notre région",
    },
  ]

  return (
    <section className="py-20 bg-sand/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-deep-gray mb-4">Nos Objectifs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cinq piliers pour construire ensemble un avenir prometteur à Mbour
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {objectifs.map((objectif, index) => {
            const Icon = objectif.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-ocean/20 transition-colors">
                    <Icon className="text-ocean" size={32} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-deep-gray mb-3">{objectif.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{objectif.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
