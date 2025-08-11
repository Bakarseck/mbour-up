import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Clock, Car, Bus, Plane } from "lucide-react"

export function PracticalInfoSection() {
  return (
    <section id="infos" className="py-20 bg-sand/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-deep-gray mb-4">Infos Pratiques</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Toutes les informations pour bien préparer votre venue au forum
          </p>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/palm-beach-aerial.jpeg"
                alt="Vue aérienne du Palm Beach Hôtel Saly"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Vue aérienne du complexe</p>
                <p className="text-sm opacity-90">Palm Beach Hôtel, Saly</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/palm-beach-sunset.jpeg"
                alt="Coucher de soleil à Palm Beach Hôtel"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Plage privée au coucher du soleil</p>
                <p className="text-sm opacity-90">Cadre idéal pour le networking</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Event Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <MapPin className="text-ocean" size={24} />
                  Lieu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold text-lg">Palm Beach Hôtel</p>
                  <p className="text-gray-600">Saly, Mbour, Sénégal</p>
                  <p className="text-sm text-gray-500">
                    Un cadre exceptionnel en bord de mer, parfaitement équipé pour accueillir notre forum
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Calendar className="text-ocean" size={24} />
                  Date & Horaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-gray-500" />
                    <span className="font-semibold">Samedi 6 septembre 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-gray-500" />
                    <span>9h00 – 19h00</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-3">
                    <p>• 8h30 : Accueil et petit-déjeuner</p>
                    <p>• 9h00 : Ouverture officielle</p>
                    <p>• 12h30 : Pause déjeuner</p>
                    <p>• 18h00 : Cocktail de clôture</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and Access */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Plan d'accès</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8!2d-17.1!3d14.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI0JzAwLjAiTiAxN8KwMDYnMDAuMCJX!5e0!3m2!1sfr!2ssn!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Le Palm Beach Hôtel est situé à Saly, à 5 minutes de Mbour centre-ville
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Comment venir</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Car className="text-ocean mt-1" size={20} />
                    <div>
                      <p className="font-semibold">En voiture</p>
                      <p className="text-sm text-gray-600">
                        Parking gratuit disponible sur place. Depuis Dakar : autoroute à péage (1h30)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bus className="text-palm mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Transport en commun</p>
                      <p className="text-sm text-gray-600">
                        Cars rapides et bus depuis Dakar. Arrêt Saly Portudal puis taxi (5 min)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Plane className="text-gold mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Depuis l'aéroport</p>
                      <p className="text-sm text-gray-600">
                        Aéroport Blaise Diagne (1h15 en taxi). Navettes organisées sur demande
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
