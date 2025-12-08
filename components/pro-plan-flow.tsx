"use client"

import { useState } from "react"
import { useLanguage } from "@/app/page"
import { ArrowLeft, Upload, Lock, Check, Zap } from "lucide-react"

interface ProPlanFlowProps {
  onComplete: () => void
  onBack: () => void
}

type ProStep = "plans" | "info" | "payment" | "welcome" | "confirmation"

export default function ProPlanFlow({ onComplete, onBack }: ProPlanFlowProps) {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState<ProStep>("plans")
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual" | null>(null)
  const [loading, setLoading] = useState(false)

  // Form states
  const [formData, setFormData] = useState({
    cpf: "",
    phone: "",
    street: "",
    number: "",
    apartment: "",
    district: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    gender: "",
    dateOfBirth: "",
  })

  const [paymentData, setPaymentData] = useState({
    paymentMethod: "visa",
    cardNumber: "",
    cardholderName: "",
    expiry: "",
    cvv: "",
    cardholderId: "",
  })

  const handlePlanSelect = (plan: "monthly" | "annual") => {
    setSelectedPlan(plan)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setCurrentStep("info")
    }, 1000)
  }

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePaymentChange = (field: string, value: string) => {
    setPaymentData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNextStep = (step: ProStep) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setCurrentStep(step)
    }, 800)
  }

  const getProgressPercentage = () => {
    const steps: ProStep[] = ["plans", "info", "payment", "welcome", "confirmation"]
    const stepIndex = steps.indexOf(currentStep)
    return ((stepIndex + 1) / steps.length) * 100
  }

  // Common header for all steps
  const renderHeader = () => (
    <div className="sticky top-0 z-40 bg-white border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">SOMMIE</h1>
            <p className="text-xs text-muted-foreground tracking-widest">Sommelier Virtual</p>
          </div>

          <div className="text-sm font-semibold text-muted-foreground">
            0{["plans", "info", "payment", "welcome", "confirmation"].indexOf(currentStep) + 1}/06
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>
      </div>
    </div>
  )

  // Step 1: Choose Plan
  if (currentStep === "plans") {
    return (
      <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
        {renderHeader()}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Choose Your Plan</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Monthly Plan */}
            <div
              onClick={() => handlePlanSelect("monthly")}
              className={`rounded-2xl p-8 border-2 cursor-pointer transition-all ${
                selectedPlan === "monthly"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50 bg-card"
              }`}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Monthly Plan</h3>

              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">$29.90</span>
                <span className="text-muted-foreground">/month</span>
              </div>

              <div className="space-y-4 mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Automatic renewal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Monthly plan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Cancel any time</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">No hidden fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Best Value</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Save $188.80</span>
                </div>
              </div>

              <button
                onClick={() => handlePlanSelect("monthly")}
                disabled={loading && selectedPlan === "monthly"}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all disabled:opacity-50"
              >
                {loading && selectedPlan === "monthly" ? "Loading..." : "Continue With Plan"}
              </button>
            </div>

            {/* Annual Plan */}
            <div
              onClick={() => handlePlanSelect("annual")}
              className={`rounded-2xl p-8 border-2 cursor-pointer transition-all relative ${
                selectedPlan === "annual"
                  ? "border-accent bg-accent/5 shadow-lg"
                  : "border-accent/30 hover:border-accent/50 bg-gradient-to-br from-accent/5 to-transparent"
              }`}
            >
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-accent to-primary text-white px-4 py-1 rounded-full text-xs font-bold">
                ⭐ RECOMMENDED
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">Annual Plan</h3>

              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">$239.90</span>
                <span className="text-muted-foreground">/year</span>
              </div>

              <div className="space-y-4 mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Automatic renewal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Monthly plan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Cancel any time</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-foreground">No hidden fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Best Value</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Save $188.80</span>
                </div>
              </div>

              <button
                onClick={() => handlePlanSelect("annual")}
                disabled={loading && selectedPlan === "annual"}
                className="w-full bg-gradient-to-r from-accent to-primary hover:shadow-lg text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50"
              >
                {loading && selectedPlan === "annual" ? "Loading..." : "Continue With Plan"}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Step 2: Complete Information
  if (currentStep === "info") {
    return (
      <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
        {renderHeader()}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8">Complete Your Information</h2>

            <div className="space-y-6">
              {/* CPF/ID */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">CPF/ID</label>
                <input
                  type="text"
                  value={formData.cpf}
                  onChange={(e) => handleFormChange("cpf", e.target.value)}
                  placeholder="Enter CPF/ID..."
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleFormChange("phone", e.target.value)}
                  placeholder="123,456,789..."
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Street & Number */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Street</label>
                  <input
                    type="text"
                    value={formData.street}
                    onChange={(e) => handleFormChange("street", e.target.value)}
                    placeholder="Street name..."
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Number</label>
                  <input
                    type="text"
                    value={formData.number}
                    onChange={(e) => handleFormChange("number", e.target.value)}
                    placeholder="Number..."
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Apartment & District */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Apartment</label>
                  <input
                    type="text"
                    value={formData.apartment}
                    onChange={(e) => handleFormChange("apartment", e.target.value)}
                    placeholder="Apartment name..."
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Neighborhood/District</label>
                  <input
                    type="text"
                    value={formData.district}
                    onChange={(e) => handleFormChange("district", e.target.value)}
                    placeholder="District name..."
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Country & City */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Country</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => handleFormChange("country", e.target.value)}
                    placeholder="Country..."
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleFormChange("city", e.target.value)}
                    placeholder="Enter City name..."
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* State & Zip Code */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">State</label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => handleFormChange("state", e.target.value)}
                    placeholder="Enter state name..."
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Zip Code</label>
                  <input
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => handleFormChange("zipCode", e.target.value)}
                    placeholder="Zip code..."
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Gender & Date of Birth */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleFormChange("gender", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Gender...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Date of Birth</label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleFormChange("dateOfBirth", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-4">Upload your photo</label>
                <div className="border-2 border-dashed border-primary/50 rounded-lg p-8 text-center cursor-pointer hover:bg-primary/5 transition-colors">
                  <Upload className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-muted-foreground">Upload photo</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setCurrentStep("plans")}
                className="flex-1 px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors text-foreground font-semibold"
              >
                Back
              </button>
              <button
                onClick={() => handleNextStep("payment")}
                disabled={loading}
                className="flex-1 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all disabled:opacity-50"
              >
                {loading ? "Loading..." : "Continue"}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Step 3: Payment
  if (currentStep === "payment") {
    return (
      <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
        {renderHeader()}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8">Payment</h2>

            {/* Payment Methods */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-foreground mb-4">Select Payment Method</label>
              <div className="grid grid-cols-3 gap-4">
                {["paypal", "visa", "mastercard"].map((method) => (
                  <button
                    key={method}
                    onClick={() => handlePaymentChange("paymentMethod", method)}
                    className={`p-6 border-2 rounded-lg transition-all text-center ${
                      paymentData.paymentMethod === method
                        ? method === "visa"
                          ? "border-primary bg-primary/5"
                          : "border-border"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-2xl font-bold text-foreground">
                      {method === "paypal" && "PayPal"}
                      {method === "visa" && "💳 VISA"}
                      {method === "mastercard" && "💳 MC"}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Card Number */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Number</label>
                <input
                  type="text"
                  value={paymentData.cardNumber}
                  onChange={(e) => handlePaymentChange("cardNumber", e.target.value)}
                  placeholder="Number..."
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Cardholder Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Cardholder Name</label>
                <input
                  type="text"
                  value={paymentData.cardholderName}
                  onChange={(e) => handlePaymentChange("cardholderName", e.target.value)}
                  placeholder="Cardholder name..."
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Expiry & CVV */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Expiry</label>
                  <input
                    type="text"
                    value={paymentData.expiry}
                    onChange={(e) => handlePaymentChange("expiry", e.target.value)}
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">CVV</label>
                  <input
                    type="text"
                    value={paymentData.cvv}
                    onChange={(e) => handlePaymentChange("cvv", e.target.value)}
                    placeholder="••••"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Cardholder ID */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Card Holder ID</label>
                <input
                  type="text"
                  value={paymentData.cardholderId}
                  onChange={(e) => handlePaymentChange("cardholderId", e.target.value)}
                  placeholder="Cardholderid..."
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Security */}
              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                <Lock className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">100% secure</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setCurrentStep("info")}
                className="flex-1 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-foreground font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => handleNextStep("welcome")}
                disabled={loading}
                className="flex-1 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all disabled:opacity-50"
              >
                {loading ? "Processing..." : "Confirm Payment"}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Step 4: Welcome
  if (currentStep === "welcome") {
    return (
      <div className="fixed inset-0 bg-background z-50 overflow-y-auto flex flex-col">
        {renderHeader()}

        <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 flex flex-col justify-center">
          <div className="text-center">
            {/* Illustration placeholder */}
            <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
              <Zap className="w-24 h-24 text-primary/50" />
            </div>

            <h2 className="text-4xl font-bold text-foreground mb-4">Well come 😊</h2>
            <p className="text-lg text-muted-foreground mb-12">Unlock exclusive features to explore the wine world</p>

            {/* Progress indicators */}
            <div className="flex gap-2 justify-center mb-12">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div className="w-3 h-3 rounded-full bg-border" />
              <div className="w-3 h-3 rounded-full bg-border" />
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => handleNextStep("confirmation")}
                className="flex-1 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-foreground font-semibold"
              >
                Skip
              </button>
              <button
                onClick={() => handleNextStep("confirmation")}
                disabled={loading}
                className="flex-1 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all disabled:opacity-50"
              >
                {loading ? "Loading..." : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Step 5: Confirmation
  if (currentStep === "confirmation") {
    return (
      <div className="fixed inset-0 bg-background z-50 overflow-y-auto flex flex-col">
        {renderHeader()}

        <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 flex flex-col justify-center">
          <div className="text-center">
            {/* Success illustration */}
            <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
              <Check className="w-24 h-24 text-primary" />
            </div>

            <h2 className="text-4xl font-bold text-foreground mb-2">Payment Confirmed!</h2>
            <p className="text-lg text-muted-foreground mb-8">Your subscription is now active.</p>

            {/* Transaction Details */}
            <div className="bg-secondary/30 rounded-xl p-8 mb-8 text-left space-y-4">
              <h3 className="font-semibold text-foreground mb-6">Transaction Details:</h3>

              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Receipt number</span>
                <span className="text-foreground font-semibold">#6508935-A</span>
              </div>

              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Date and time</span>
                <span className="text-foreground font-semibold">Nov 21, 2025 at 1:00 PM</span>
              </div>

              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Plan purchased</span>
                <span className="text-foreground font-semibold">
                  {selectedPlan === "monthly" ? "Pro Tier (Monthly)" : "Pro Tier (Annual)"}
                </span>
              </div>

              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Amount paid</span>
                <span className="text-foreground font-semibold">
                  {selectedPlan === "monthly" ? "$29.90" : "$239.90"}
                </span>
              </div>

              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Payment method</span>
                <span className="text-foreground font-semibold">Visa ending in 4242</span>
              </div>

              <div className="flex justify-between py-3">
                <span className="text-muted-foreground">Validity period</span>
                <span className="text-foreground font-semibold">Nov 21, 2025 - Dec 21, 2025</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
              A copy of your receipt has been emailed to your registered address. You can now proceed to manage your
              account settings and explore all the Pro features.
            </p>

            <button
              onClick={onComplete}
              className="w-full px-6 py-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all"
            >
              Go to PRO Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
