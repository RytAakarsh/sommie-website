"use client"

import { useLanguage } from "@/app/page"
import { Star } from "lucide-react"

export default function Recommendations() {
  const { t } = useLanguage()

  const wines = [
    {
      name: "Château Margaux",
      region: "Bordeaux, France",
      year: "2018",
      rating: 4.8,
      image: "/premium-red-wine-bottle-bordeaux.jpg",
    },
    {
      name: "Brunello di Montalcino",
      region: "Tuscany, Italy",
      year: "2016",
      rating: 4.7,
      image: "/italian-brunello-wine-bottle.jpg",
    },
    {
      name: "Cloudy Bay Sauvignon Blanc",
      region: "Marlborough, New Zealand",
      year: "2022",
      rating: 4.6,
      image: "/white-wine-bottle-new-zealand.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("rec.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("rec.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {wines.map((wine, i) => (
            <div key={i} className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="relative mb-6 rounded-2xl overflow-hidden h-80 bg-secondary border border-border shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={wine.image || "/placeholder.svg"}
                  alt={wine.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{wine.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {wine.region} • {wine.year}
              </p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.round(wine.rating) ? "fill-accent text-accent" : "text-border"}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-muted-foreground">{wine.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
