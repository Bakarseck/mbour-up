"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Handshake, Lightbulb, TrendingUp, Sprout, Music, Network, Newspaper, Target } from "lucide-react"

export function ImpactSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("impact-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: Users,
      value: 200,
      suffix: "+",
      label: "Jeunes formés",
      description: "Participants bénéficiant des formations et ateliers",
      color: "text-ocean",
      bgColor: "bg-ocean/10",
    },
    {
      icon: Handshake,
      value: 20,
      suffix: "",
      label: "Partenariats actés",
      description: "Collaborations concrètes établies pendant l'événement",
      color: "text-palm",
      bgColor: "bg-palm/10",
    },
    {
      icon: Lightbulb,
      value: 20,
      suffix: "",
      label: "Projets valorisés",
      description: "Initiatives entrepreneuriales mises en avant",
      color: "text-gold",
      bgColor: "bg-gold/10",
    },
    {
      icon: TrendingUp,
      value: 70,
      suffix: "%",
      label: "Mieux informés sur les alternatives",
      description: "Participants sensibilisés aux opportunités locales",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Sprout,
      value: 10,
      suffix: "",
      label: "Initiatives agricoles",
      description: "Projets agricoles innovants présentés",
      color: "text-palm",
      bgColor: "bg-palm/10",
    },
    {
      icon: Music,
      value: 5,
      suffix: "+",
      label: "Groupes culturels soutenus",
      description: "Associations culturelles obtenant des opportunités",
      color: "text-gold",
      bgColor: "bg-gold/10",
    },
    {
      icon: Network,
      value: 100,
      suffix: "+",
      label: "Membres du réseau",
      description: "Professionnels rejoignant le réseau Mbour Up",
      color: "text-ocean",
      bgColor: "bg-ocean/10",
    },
    {
      icon: Newspaper,
      value: 5,
      suffix: "+",
      label: "Médias partenaires",
      description: "Couverture médiatique de l'événement",
      color: "text-deep-gray",
      bgColor: "bg-gray-100",
    },
    {
      icon: Target,
      value: 15,
      suffix: "",
      label: "Projets financés",
      description: "Initiatives bénéficiant de financement ou mentorat",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ]

  const AnimatedCounter = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [isVisible, value])

    return (
      <span className="font-heading font-bold text-3xl md:text-4xl">
        {count}
        {suffix}
      </span>
    )
  }

  return (
    <section id="impact-section" className="py-20 bg-deep-gray text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Objectifs & Impact</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Des résultats concrets pour transformer l'écosystème entrepreneurial de Mbour
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={stat.color} size={32} />
                  </div>
                  <div className={`${stat.color} mb-2`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-white mb-2">{stat.label}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-2xl text-gold mb-4">Notre Vision</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Faire de Mbour Up ! un catalyseur de transformation économique et sociale, où chaque jeune trouve sa voie
              pour contribuer au développement durable de sa région, créant ainsi un écosystème entrepreneurial
              dynamique et inclusif.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
