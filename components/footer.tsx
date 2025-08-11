import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-deep-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Event Info */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4 text-gold">Mbour Up !</h3>
            <p className="text-gray-300 mb-4">Forum jeunesse, entrepreneuriat & avenir durable</p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Palm Beach Hôtel, Saly (Mbour)</span>
              </div>
              <div>Samedi 6 septembre 2025</div>
              <div>9h00 – 19h00</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <div>
                  <div>78 435 04 33</div>
                  <div>78 120 34 77</div>
                  <div>78 295 20 65</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:Mbourup2025@gmail.com" className="hover:text-gold transition-colors">
                  Mbourup2025@gmail.com
                </a>
              </div>
              <div>
                <a href="https://Mbourup.com" className="hover:text-gold transition-colors">
                  https://Mbourup.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="#programme" className="text-gray-300 hover:text-gold transition-colors">
                Programme
              </Link>
              <Link href="#intervenants" className="text-gray-300 hover:text-gold transition-colors">
                Intervenants
              </Link>
              <Link href="#exposants" className="text-gray-300 hover:text-gold transition-colors">
                Exposants
              </Link>
              <Link href="#infos" className="text-gray-300 hover:text-gold transition-colors">
                Infos pratiques
              </Link>
              <Link href="#partenaires" className="text-gray-300 hover:text-gold transition-colors">
                Partenaires
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-gold transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Mbour Up ! Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <Link href="#mentions" className="hover:text-gold transition-colors">
              Mentions légales
            </Link>
            <Link href="#credits" className="hover:text-gold transition-colors">
              Crédits
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
