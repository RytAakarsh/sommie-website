"use client"

import type React from "react"
import { useState } from "react"
import { useLanguage } from "@/app/page"
import { X, ArrowRight } from "lucide-react"

interface SignupFormProps {
  onComplete: () => void
  onCancel: () => void
}

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "France",
  "Spain",
  "Italy",
  "Germany",
  "Portugal",
  "Brazil",
  "Argentina",
  "Mexico",
  "Japan",
  "China",
  "Other",
]

export default function SignupForm({ onComplete, onCancel }: SignupFormProps) {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const validatePassword = (password: string): boolean => {
    const hasUpperCase = /[A-Z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    return hasUpperCase && hasNumber && hasSpecialChar && password.length >= 8
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    // Validation
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.age) newErrors.age = "Age is required"
    else if (Number.parseInt(formData.age) < 18) newErrors.age = t("signup.ageError")
    if (!formData.email) newErrors.email = "Email is required"
    if (!validatePassword(formData.password)) newErrors.password = t("signup.passwordError")
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = t("signup.passwordMismatch")
    if (!formData.country) newErrors.country = "Country is required"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        console.log("Signup data:", formData)
        onComplete()
      }, 1500)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up">
      <div className="bg-card rounded-3xl border border-border max-w-md w-full max-h-[90vh] shadow-2xl animate-fade-in-up overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent p-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-primary-foreground">{t("auth.signup")}</h2>
          <button onClick={onCancel} className="p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors">
            <X className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-4 overflow-y-auto flex-1">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">{t("signup.name")}</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">{t("signup.age")} (18+)</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              placeholder="21"
              className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">{t("auth.email")}</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">{t("signup.password")}</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            <p className="text-xs text-muted-foreground mt-1">{t("signup.passwordError")}</p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">{t("signup.confirmPassword")}</label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">{t("signup.country")}</label>
            <select
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <option value="">{t("signup.selectCountry")}</option>
              {COUNTRIES.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6 flex items-center justify-center gap-2 group"
          >
            {loading ? "Creating..." : t("signup.nextStep")}
            {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>
      </div>
    </div>
  )
}
