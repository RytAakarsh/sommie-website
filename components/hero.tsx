"use client"

import { useLanguage } from "@/app/page"
import { ArrowRight } from "lucide-react"

interface HeroProps {
  onCTA: () => void
}

export default function Hero({ onCTA }: HeroProps) {
  const { t } = useLanguage()

  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight gradient-text">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">{t("hero.subtitle")}</p>
            <button
              onClick={onCTA}
              className="group flex items-center gap-3 bg-gradient-to-r from-primary to-accent hover:shadow-lg text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 transform"
            >
              {t("hero.cta")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative animate-slide-in-right">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary via-accent to-primary/50 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-primary to-accent p-1 rounded-3xl">
              <img
                src="/wine-glass-sommelier-luxury.jpg"
                alt="Sommie AI Sommelier"
                className="relative rounded-3xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
