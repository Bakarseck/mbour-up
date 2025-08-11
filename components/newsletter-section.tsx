"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="py-16 bg-palm text-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-8 text-center">
            <Mail className="mx-auto mb-4 text-gold" size={48} />
            <h3 className="font-heading font-bold text-2xl mb-4">Restez informé(e)</h3>
            <p className="text-white/90 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités du forum et les opportunités pour
              les jeunes entrepreneurs de Mbour.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button type="submit" className="bg-gold hover:bg-gold/90 text-deep-gray font-semibold">
                S'abonner
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
