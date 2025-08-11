"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function EnhancedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("accueil")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Update active section based on scroll position
      const sections = ["accueil", "programme", "intervenants", "exposants", "infos", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#programme", label: "Programme" },
    { href: "#intervenants", label: "Intervenants" },
    { href: "#exposants", label: "Exposants" },
    { href: "#infos", label: "Infos" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#accueil")}
            className="font-heading font-bold text-xl text-ocean hover:text-ocean/80 transition-colors"
          >
            Mbour Up !
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "font-medium transition-colors relative",
                  activeSection === item.href.slice(1) ? "text-ocean" : "text-deep-gray hover:text-ocean",
                )}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ocean rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => handleNavClick("#inscription")}
              className="bg-ocean hover:bg-ocean/90 animate-gentle-bounce"
            >
              Je m'inscris
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "block w-full text-left px-4 py-2 transition-colors",
                    activeSection === item.href.slice(1)
                      ? "text-ocean bg-ocean/5"
                      : "text-deep-gray hover:text-ocean hover:bg-gray-50",
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button onClick={() => handleNavClick("#inscription")} className="w-full bg-ocean hover:bg-ocean/90">
                  Je m'inscris
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
