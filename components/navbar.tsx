"use client"

import { useState } from "react"
import { useLanguage } from "@/app/providers/LanguageProvider";
import Image from "next/image";

import { Menu, X, Globe } from "lucide-react"

interface NavbarProps {
  onGetStarted: () => void
}

export default function Navbar({ onGetStarted }: NavbarProps) {
  const { t, language, setLanguage } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 animate-fade-in-down shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-2xl">
          {/* <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground text-lg font-bold">S</span>
          </div>
          <span className="gradient-text">Sommie</span> */}
          <Image
                        src="/sommie-logo.png"
                        alt="Sommie"
                        width={190}
                        height={40}
                        className="object-contain"
                      />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            {t("nav.home")}
          </a>
          <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
            {t("nav.features")}
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
            {t("nav.about")}
          </a>
        </div>

        {/* Right Side Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "en" ? "pt" : "en")}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-secondary hover:border-primary transition-all duration-300"
            title="Toggle language"
          >
            <Globe className="w-4 h-4" />
            <span className="font-semibold text-sm">{language.toUpperCase()}</span>
          </button>

          {/* Get Started Button */}
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-primary to-accent hover:shadow-lg text-primary-foreground px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            {t("nav.getStarted")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === "en" ? "pt" : "en")}
            className="flex items-center gap-1 px-3 py-2 rounded-full border border-border hover:bg-secondary transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-semibold">{language.toUpperCase()}</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm animate-fade-in-up">
          <div className="px-4 py-4 space-y-4">
            <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">
              {t("nav.home")}
            </a>
            <a href="#features" className="block text-foreground hover:text-primary transition-colors font-medium">
              {t("nav.features")}
            </a>
            <a href="#about" className="block text-foreground hover:text-primary transition-colors font-medium">
              {t("nav.about")}
            </a>
            <button
              onClick={onGetStarted}
              className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-full font-semibold transition-all hover:shadow-lg"
            >
              {t("nav.getStarted")}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
