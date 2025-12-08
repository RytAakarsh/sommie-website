"use client"

import { useState } from "react"
import { useLanguage } from "@/app/page"
import { Check, X, ArrowUpRight, Zap, Crown, Layers } from "lucide-react"
import Image from "next/image"

interface PlanSelectionProps {
  onPlanSelected: (planType?: "freemium" | "pro") => void
  onBack: () => void
}

export default function PlanSelection({ onPlanSelected, onBack }: PlanSelectionProps) {
  const { t } = useLanguage()
  const [selectedPlan, setSelectedPlan] = useState<"freemium" | "pro" | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSelectPlan = (plan: "freemium" | "pro") => {
    console.log("[v0] Plan selected:", plan)
    setSelectedPlan(plan)
    setLoading(true)
    setTimeout(() => {
      console.log("[v0] Plan loading complete, calling onPlanSelected")
      setLoading(false)
      onPlanSelected(plan)
    }, 1200)
  }

  const freemiumFeatures = [
    { key: "plan.feature1", included: true },
    { key: "plan.feature3", included: true },
    { key: "plan.feature5", included: true },
    { key: "plan.feature6", included: false },
    { key: "plan.feature7", included: false },
    { key: "plan.feature8", included: false },
  ]

  const proFeatures = [
    { key: "plan.feature2", included: true },
    { key: "plan.feature4", included: true },
    { key: "plan.feature5", included: true },
    { key: "plan.feature6", included: true },
    { key: "plan.feature7", included: true },
    { key: "plan.feature8", included: true },
  ]

  return (
    <div className="fixed inset-0 bg-background z-50 overflow-y-auto animate-fade-in-up">
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-white border-b border-border backdrop-blur-sm bg-background/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <Image src="/sommie-text-logo.png" alt="Sommie" width={100} height={24} className="h-6 w-auto" />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="px-6 py-2 rounded-full border border-border hover:bg-secondary transition-colors text-foreground font-medium"
              >
                {t("auth.cancel")}
              </button>
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4" />
                Upgrade
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">{t("plan.title")}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("cta.desc")}</p>
            </div>

            {/* Plans Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              <div
                onClick={() => handleSelectPlan("freemium")}
                className={`group relative rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                  selectedPlan === "freemium"
                    ? "border-primary bg-primary/5 shadow-xl scale-100"
                    : "border-border bg-card hover:border-primary/50 hover:shadow-lg hover:scale-[1.02]"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-8 md:p-10">
                  {/* Plan Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0">
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{t("plan.freemium")}</h3>
                      <p className="text-sm text-muted-foreground">Best to start</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-8 leading-relaxed">{t("plan.freemiumDesc")}</p>

                  {/* Features List */}
                  <div className="space-y-4 mb-10 pb-8 border-b border-border">
                    {freemiumFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5 opacity-30" />
                        )}
                        <span
                          className={
                            feature.included
                              ? "text-foreground font-medium"
                              : "text-muted-foreground line-through opacity-50"
                          }
                        >
                          {t(feature.key)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleSelectPlan("freemium")}
                    disabled={loading && selectedPlan === "freemium"}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      selectedPlan === "freemium"
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-md"
                    } disabled:opacity-75`}
                  >
                    {loading && selectedPlan === "freemium" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Loading...
                      </>
                    ) : (
                      <>
                        {t("plan.selectPlan")}
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div
                onClick={() => handleSelectPlan("pro")}
                className={`group relative rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg ${
                  selectedPlan === "pro"
                    ? "border-accent bg-accent/5 shadow-2xl scale-100"
                    : "border-accent/30 bg-gradient-to-br from-accent/5 to-transparent hover:border-accent/50 hover:shadow-xl hover:scale-[1.02]"
                }`}
              >
                <div className="absolute -top-1 right-6 bg-gradient-to-r from-accent to-primary text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                  ⭐ PREMIUM
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-8 md:p-10 pt-12">
                  {/* Plan Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center flex-shrink-0">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{t("plan.pro")}</h3>
                      <p className="text-sm text-muted-foreground">Most popular</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-8 leading-relaxed">{t("plan.proDesc")}</p>

                  {/* Features List */}
                  <div className="space-y-4 mb-10 pb-8 border-b border-border">
                    {proFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <Zap className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-foreground font-medium">{t(feature.key)}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleSelectPlan("pro")}
                    disabled={loading && selectedPlan === "pro"}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-white ${
                      selectedPlan === "pro"
                        ? "bg-gradient-to-r from-accent to-primary shadow-lg"
                        : "bg-gradient-to-r from-accent/60 to-primary/60 hover:from-accent to-primary hover:shadow-lg"
                    } disabled:opacity-75`}
                  >
                    {loading && selectedPlan === "pro" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Loading...
                      </>
                    ) : (
                      <>
                        {t("plan.upgradeLater")}
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Footer note */}
            <div className="text-center mt-12 text-muted-foreground text-sm">
              <p>You can upgrade your plan at any time. Start with Freemium and upgrade whenever you're ready.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
