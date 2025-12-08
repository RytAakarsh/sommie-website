"use client"

import { useLanguage } from "@/app/page"
import { Check } from "lucide-react"

export default function WhatsSommie() {
  const { t } = useLanguage()

  const features = ["sommie.feature1", "sommie.feature2", "sommie.feature3", "sommie.feature4"]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t("sommie.title")}</h2>
              <p className="text-xl text-primary font-semibold mb-4">{t("sommie.subtitle")}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("sommie.desc")}</p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">{t(feature)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary/10 rounded-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden h-96 flex items-center justify-center">
              <img src="/elegant-wine-bottles-sommelier-tasting.jpg" alt="Sommie Features" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
