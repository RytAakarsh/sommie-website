"use client"

import { useLanguage } from "@/app/page"

export default function Experiences() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: "Vineyard Tours",
      desc: "Explore world-renowned vineyards",
      image: "/beautiful-vineyard-landscape-rolling-hills-sunset.jpg",
    },
    {
      title: "Wine Tasting Events",
      desc: "Join exclusive tasting sessions",
      image: "/wine-tasting-event-people-enjoying-wine-together.jpg",
    },
    {
      title: "Food Pairing Classes",
      desc: "Master the art of wine pairing",
      image: "/gourmet-food-wine-pairing-fine-dining.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("exp.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("exp.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer animate-fade-in-up shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                src={exp.image || "/placeholder.svg"}
                alt={exp.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-white/90 text-sm md:text-base">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
