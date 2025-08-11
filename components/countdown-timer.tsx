"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-09-06T09:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-ocean text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Plus que quelques jours !</h2>
          <p className="text-xl opacity-90">Rendez-vous le 6 septembre 2025 à Saly</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { label: "Jours", value: timeLeft.days },
            { label: "Heures", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Secondes", value: timeLeft.seconds },
          ].map((item) => (
            <Card key={item.label} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold font-heading text-gold mb-2">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm uppercase tracking-wide opacity-80">{item.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
