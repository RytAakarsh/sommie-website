"use client"
import { useLanguage } from "@/app/providers/LanguageProvider";

import { Sparkles, Wine, MapPin, TrendingUp } from "lucide-react"

export default function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Sparkles,
      title: t("features.f1.title"),
      desc: t("features.f1.desc"),
    },
    {
      icon: Wine,
      title: t("features.f2.title"),
      desc: t("features.f2.desc"),
    },
    {
      icon: MapPin,
      title: t("features.f3.title"),
      desc: t("features.f3.desc"),
    },
    {
      icon: TrendingUp,
      title: t("features.f4.title"),
      desc: t("features.f4.desc"),
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("features.title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up backdrop-blur-sm"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/40 group-hover:to-accent/40 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
