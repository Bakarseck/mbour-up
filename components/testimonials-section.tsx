import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Khadija Ndiaye",
      role: "Fondatrice, EcoFarm Sénégal",
      image: "/images/mbour-market.jpeg",
      quote:
        "Mbour Up ! m'a permis de rencontrer des investisseurs clés et de développer mon réseau. Aujourd'hui, notre coopérative agricole emploie 15 personnes.",
    },
    {
      name: "Mamadou Diallo",
      role: "CEO, Tech Solutions Mbour",
      image: "/images/cultural-performer.jpeg",
      quote:
        "Grâce aux ateliers sur le financement, j'ai pu structurer mon business plan et obtenir un prêt bancaire pour développer ma startup tech.",
    },
    {
      name: "Awa Sarr",
      role: "Artiste et Entrepreneure Culturelle",
      image: "/images/cultural-performer.jpeg",
      quote:
        "Le forum m'a ouvert les yeux sur les opportunités dans l'économie créative. J'ai depuis créé mon atelier d'artisanat qui exporte en Europe.",
    },
  ]

  return (
    <section className="py-20 bg-ocean text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Témoignages</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ils ont participé et transformé leur vision en réalité
          </p>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/mbour-market.jpeg"
                alt="Marché local de Mbour - Communauté dynamique"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Communauté entrepreneuriale</p>
                <p className="text-sm opacity-90">Le dynamisme local de Mbour</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/cultural-performer.jpeg"
                alt="Artiste traditionnel sénégalais"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Richesse culturelle</p>
                <p className="text-sm opacity-90">Traditions et innovation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <Quote className="text-gold mb-4" size={32} />
                <p className="text-white/90 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-blue-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
