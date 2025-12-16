

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, Zap, Upload, Lock } from "lucide-react";
import { useLanguage } from "@/app/providers/LanguageProvider";

import { useRouter } from "next/navigation";




const finish = () => {
  // redirect to pro dashboard
  router.push("/pro-dashboard");
};


const PRO_TEXT = {
  en: {
    choosePlan: "Choose Your Plan",
    continue: "Continue",
    loading: "Loading...",
    recommended: "RECOMMENDED",
    completeInfo: "Complete Your Information",
    payment: "Payment",
    welcomeTitle: "Welcome",
    welcomeDesc: "Unlock exclusive features to explore the wine world",
    confirmedTitle: "Payment Confirmed!",
    confirmedDesc: "Your subscription is now active.",
    receiptNote: "A copy of your receipt has been emailed to your registered address."
  },

  pt: {
    choosePlan: "Escolha seu Plano",
    continue: "Continuar",
    loading: "Carregando...",
    recommended: "RECOMENDADO",
    completeInfo: "Complete suas Informações",
    payment: "Pagamento",
    welcomeTitle: "Bem-vindo",
    welcomeDesc: "Desbloqueie recursos exclusivos para explorar o mundo dos vinhos",
    confirmedTitle: "Pagamento Confirmado!",
    confirmedDesc: "Sua assinatura agora está ativa.",
    receiptNote: "Uma cópia do seu recibo foi enviada por e-mail para o seu endereço cadastrado."
  }
} as const;

// Helper translator (uses language from useLanguage)
const proText = (lang: string | undefined, key: keyof typeof PRO_TEXT["en"]) => {
  const l = lang && (lang in PRO_TEXT) ? lang : "en";
  return PRO_TEXT[l as keyof typeof PRO_TEXT][key];
};

/* ----------------------------
   Types & Framer Motion variants
   ---------------------------- */
interface ProPlanFlowProps {
  onComplete: () => void;
  onBack: () => void;
}

type ProStep = "plans" | "info" | "payment" | "welcome" | "confirmation";
const STEPS: ProStep[] = ["plans", "info", "payment", "welcome", "confirmation"];

const pageVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.995 }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 28, duration: 0.45 },
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 60 : -60,
    opacity: 0,
    scale: 0.995,
    transition: { duration: 0.35, ease: [0.3, 0.7, 0.2, 1] },
  }),
};

/* ----------------------------
   Component
   ---------------------------- */
export default function ProPlanFlow({ onComplete, onBack }: ProPlanFlowProps) {
  // useLanguage must return { t, lang } as you confirmed
  const router = useRouter();
  const finish = () => {
  router.push("/pro-dashboard");};
  const { t, lang } = useLanguage();
  const [currentStep, setCurrentStep] = useState<ProStep>("plans");
  const [direction, setDirection] = useState<number>(1);
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual" | null>(null);
  const [loading, setLoading] = useState(false);

  // Form & payment state
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
  });

  const [paymentData, setPaymentData] = useState({
    paymentMethod: "visa",
    cardNumber: "",
    cardholderName: "",
    expiry: "",
    cvv: "",
    cardholderId: "",
  });

  const stepIndex = (s: ProStep) => STEPS.indexOf(s);
  const progress = Math.round(((stepIndex(currentStep) + 1) / STEPS.length) * 100);

  // navigation helpers
  const goTo = (next: ProStep) => {
    setDirection(stepIndex(next) > stepIndex(currentStep) ? 1 : -1);
    setCurrentStep(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const next = () => {
    const idx = Math.min(STEPS.length - 1, stepIndex(currentStep) + 1);
    setDirection(1);
    setCurrentStep(STEPS[idx]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const prev = () => {
    const idx = Math.max(0, stepIndex(currentStep) - 1);
    setDirection(-1);
    setCurrentStep(STEPS[idx]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // state handlers
  const handlePlanSelect = (plan: "monthly" | "annual") => {
    setSelectedPlan(plan);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      goTo("info");
    }, 700);
  };

  const handleFormChange = (field: keyof typeof formData, value: string) =>
    setFormData((p) => ({ ...p, [field]: value }));

  const handlePaymentChange = (field: keyof typeof paymentData, value: string) =>
    setPaymentData((p) => ({ ...p, [field]: value }));

  const handleConfirmPayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      goTo("welcome");
    }, 1000);
  };

  // const finish = () => {
  //   onComplete();
  // };

  // Header shared across steps
  const Header = () => (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
        <button onClick={onBack} className="p-2 rounded-md hover:bg-gray-100 transition" aria-label="Back">
          <ArrowLeft className="w-5 h-5 text-slate-700" />
        </button>

        <div className="flex flex-col items-center">
          <Image src="/pro-logo.png" alt="Sommie Pro" width={180} height={44} className="object-contain" />
          <span className="text-xs text-gray-500 mt-1 tracking-widest">Sommelier Virtual</span>
        </div>

        <div className="text-sm text-slate-600">{String(stepIndex(currentStep) + 1).padStart(2, "0")}/{String(STEPS.length).padStart(2, "0")}</div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-4">
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            key={progress}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="h-full bg-gradient-to-r from-[#6D3FA6] to-[#A66EE6]"
          />
        </div>
      </div>
    </header>
  );

  // Card wrapper
  const CardWrap: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-50">{children}</div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {/* ---------- PLANS STEP ---------- */}
            {currentStep === "plans" && (
              <motion.section
                key="plans"
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="mb-8"
              >
                <CardWrap>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-[#5F2E7F] text-center mb-8">
                    {proText(lang, "choosePlan")}
                  </h1>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Monthly */}
                    <div className="rounded-xl border border-gray-100 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900">Monthly Plan</h3>
                            <p className="text-sm text-gray-500 mt-1">Automatic renewal · Cancel anytime</p>
                          </div>

                          <div className="text-right">
                            <div className="text-2xl font-extrabold text-[#6D3FA6]">$29.90</div>
                            <div className="text-sm text-gray-400">/month</div>
                          </div>
                        </div>

                        <ul className="mt-6 space-y-3 text-sm text-slate-700">
                          <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#6D3FA6]" /> Automatic renewal</li>
                          <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#6D3FA6]" /> Monthly updates</li>
                          <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#6D3FA6]" /> Cancel any time</li>
                          <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#6D3FA6]" /> No hidden fees</li>
                        </ul>
                      </div>

                      <div className="mt-6">
                        <button
                          onClick={() => handlePlanSelect("monthly")}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6D3FA6] to-[#8F56C8] text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition"
                          aria-label="Select monthly"
                        >
                          {loading && selectedPlan === "monthly"
                            ? proText(lang, "loading")
                            : proText(lang, "continue")}
                        </button>
                      </div>
                    </div>

                    {/* Annual */}
                    <div className="rounded-xl border border-gray-100 p-6 flex flex-col justify-between relative">
                      <div className="absolute -top-3 right-3 bg-gradient-to-r from-[#A66EE6] to-[#6D3FA6] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                        {proText(lang, "recommended")}
                      </div>

                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900">Annual Plan</h3>
                            <p className="text-sm text-gray-500 mt-1">Best value · Save over $188</p>
                          </div>

                          <div className="text-right">
                            <div className="text-2xl font-extrabold text-[#6D3FA6]">$239.90</div>
                            <div className="text-sm text-gray-400">/year</div>
                          </div>
                        </div>

                        <ul className="mt-6 space-y-3 text-sm text-slate-700">
                          <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#6D3FA6]" /> Automatic renewal</li>
                          <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#6D3FA6]" /> Priority features</li>
                          <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#6D3FA6]" /> Cancel any time</li>
                          <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#6D3FA6]" /> Best Value</li>
                        </ul>
                      </div>

                      <div className="mt-6">
                        <button
                          onClick={() => handlePlanSelect("annual")}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#A66EE6] to-[#7E4CBC] text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition"
                        >
                          {loading && selectedPlan === "annual"
                            ? proText(lang, "loading")
                            : proText(lang, "continue")}
                        </button>
                      </div>
                    </div>
                  </div>
                </CardWrap>
              </motion.section>
            )}
            {/* PLANS STEP END */}

            {/* ---------- INFO STEP ---------- */}
            {currentStep === "info" && (
              <motion.section
                key="info"
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="mb-8"
              >
                <CardWrap>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-[#5F2E7F] text-center mb-8">
                    {proText(lang, "completeInfo")}
                  </h1>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">CPF/ID</label>
                      <input value={formData.cpf} onChange={(e) => handleFormChange("cpf", e.target.value)} placeholder="Enter CPF/ID..." className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100 focus:ring-2 focus:ring-[#6D3FA6]/20" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone number</label>
                      <input value={formData.phone} onChange={(e) => handleFormChange("phone", e.target.value)} placeholder="123,456,789..." className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100 focus:ring-2 focus:ring-[#6D3FA6]/20" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Street</label>
                        <input value={formData.street} onChange={(e) => handleFormChange("street", e.target.value)} placeholder="Street name..." className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Number</label>
                        <input value={formData.number} onChange={(e) => handleFormChange("number", e.target.value)} placeholder="Number..." className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Apartment</label>
                        <input value={formData.apartment} onChange={(e) => handleFormChange("apartment", e.target.value)} placeholder="Apartment name..." className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Neighborhood / District</label>
                        <input value={formData.district} onChange={(e) => handleFormChange("district", e.target.value)} placeholder="District name..." className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Country</label>
                        <input value={formData.country} onChange={(e) => handleFormChange("country", e.target.value)} placeholder="Country..." className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
                        <input value={formData.city} onChange={(e) => handleFormChange("city", e.target.value)} placeholder="City..." className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">State</label>
                        <input value={formData.state} onChange={(e) => handleFormChange("state", e.target.value)} placeholder="State..." className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Zip Code</label>
                        <input value={formData.zipCode} onChange={(e) => handleFormChange("zipCode", e.target.value)} placeholder="Zip code..." className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Gender</label>
                        <select value={formData.gender} onChange={(e) => handleFormChange("gender", e.target.value)} className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100">
                          <option value="">Select...</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Date of Birth</label>
                        <input type="date" value={formData.dateOfBirth} onChange={(e) => handleFormChange("dateOfBirth", e.target.value)} className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Upload your photo</label>
                      <div className="mt-2 border-2 border-dashed border-[#E6D9F0] rounded-xl p-6 text-center cursor-pointer bg-white/70 hover:bg-[#FBF7FB] transition">
                        <Upload className="mx-auto text-[#6D3FA6]" />
                        <p className="text-sm text-gray-500 mt-2">Drag & drop or click to upload</p>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                      <button onClick={() => goTo("plans")} className="flex-1 py-3 rounded-xl border border-gray-200">Back</button>
                      <button onClick={() => { setLoading(true); setTimeout(()=> { setLoading(false); goTo("payment"); }, 700); }} className="flex-1 py-3 rounded-xl bg-[#6D3FA6] text-white font-semibold">
                        {loading ? proText(lang, "loading") : proText(lang, "continue")}
                      </button>
                    </div>
                  </div>
                </CardWrap>
              </motion.section>
            )}
            {/* INFO STEP END */}

            {/* ---------- PAYMENT STEP ---------- */}
            {currentStep === "payment" && (
              <motion.section
                key="payment"
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="mb-8"
              >
                <CardWrap>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-[#5F2E7F] text-center mb-8">
                    {proText(lang, "payment")}
                  </h1>

                  <div className="grid gap-6">
                    <div className="flex gap-3">
                      <button onClick={() => handlePaymentChange("paymentMethod", "paypal")} className={`flex-1 py-3 rounded-xl border ${paymentData.paymentMethod === "paypal" ? "ring ring-[#6D3FA6]/30" : "border-gray-100"}`}>PayPal</button>
                      <button onClick={() => handlePaymentChange("paymentMethod", "visa")} className={`flex-1 py-3 rounded-xl border ${paymentData.paymentMethod === "visa" ? "ring ring-[#6D3FA6]/30" : "border-gray-100"}`}>Visa</button>
                      <button onClick={() => handlePaymentChange("paymentMethod", "mastercard")} className={`flex-1 py-3 rounded-xl border ${paymentData.paymentMethod === "mastercard" ? "ring ring-[#6D3FA6]/30" : "border-gray-100"}`}>Mastercard</button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Card Number</label>
                      <input value={paymentData.cardNumber} onChange={(e) => handlePaymentChange("cardNumber", e.target.value)} placeholder="0000 0000 0000 0000" className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Cardholder Name</label>
                      <input value={paymentData.cardholderName} onChange={(e) => handlePaymentChange("cardholderName", e.target.value)} placeholder="Full name" className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Expiry (MM/YY)</label>
                        <input value={paymentData.expiry} onChange={(e) => handlePaymentChange("expiry", e.target.value)} placeholder="MM/YY" className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">CVV</label>
                        <input value={paymentData.cvv} onChange={(e) => handlePaymentChange("cvv", e.target.value)} placeholder="•••" className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Card Holder ID</label>
                      <input value={paymentData.cardholderId} onChange={(e) => handlePaymentChange("cardholderId", e.target.value)} placeholder="Document number" className="w-full rounded-xl px-4 py-4 bg-[#FBF7FB] border border-gray-100" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-[#FBF6FB] rounded-xl">
                      <Lock className="w-5 h-5 text-[#6D3FA6]" />
                      <div>
                        <div className="text-sm font-medium">100% secure</div>
                        <div className="text-xs text-gray-500">Your payment info is encrypted & safe</div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                      <button onClick={() => goTo("info")} className="flex-1 py-3 rounded-xl border border-gray-200">Cancel</button>
                      <button onClick={handleConfirmPayment} className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#6D3FA6] to-[#A66EE6] text-white font-semibold shadow-md">
                        {loading ? proText(lang, "loading") : proText(lang, "continue")}
                      </button>
                    </div>
                  </div>
                </CardWrap>
              </motion.section>
            )}
            {/* PAYMENT STEP END */}

            {/* ---------- WELCOME STEP ---------- */}
            {currentStep === "welcome" && (
              <motion.section
                key="welcome"
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="mb-8"
              >
                <CardWrap>
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-[#F3EBFB] to-[#FCEFF8] flex items-center justify-center mb-6">
                      <Zap className="w-24 h-24 text-[#6D3FA6]" />
                    </div>

                    <h2 className="text-3xl font-extrabold text-[#5F2E7F] mb-3">{proText(lang, "welcomeTitle")}</h2>
                    <p className="text-lg text-gray-600 mb-8">{proText(lang, "welcomeDesc")}</p>

                    <div className="flex gap-3 justify-center mb-6">
                      <div className="w-2 h-2 rounded-full bg-[#6D3FA6]" />
                      <div className="w-2 h-2 rounded-full bg-gray-200" />
                      <div className="w-2 h-2 rounded-full bg-gray-200" />
                    </div>

                    <div className="flex gap-4">
                      <button onClick={() => goTo("confirmation")} className="flex-1 py-3 rounded-xl border border-gray-200">Skip</button>
                      <button onClick={() => goTo("confirmation")} className="flex-1 py-3 rounded-xl bg-[#6D3FA6] text-white font-semibold">{proText(lang, "continue")}</button>
                    </div>
                  </div>
                </CardWrap>
              </motion.section>
            )}
            {/* WELCOME STEP END */}

            {/* ---------- CONFIRMATION STEP ---------- */}
            {currentStep === "confirmation" && (
              <motion.section
                key="confirmation"
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="mb-8"
              >
                <CardWrap>
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-[#F3EBFB] to-[#FCEFF8] flex items-center justify-center mb-6">
                      <Check className="w-24 h-24 text-[#6D3FA6]" />
                    </div>

                    <h2 className="text-3xl font-extrabold text-[#5F2E7F] mb-3">{proText(lang, "confirmedTitle")}</h2>
                    <p className="text-lg text-gray-600 mb-6">{proText(lang, "confirmedDesc")}</p>

                    <div className="bg-[#FBF6FB] rounded-xl p-6 text-left mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex justify-between"><span className="text-sm text-gray-500">Receipt number</span><span className="font-medium">#6508935-A</span></div>
                        <div className="flex justify-between"><span className="text-sm text-gray-500">Date and time</span><span className="font-medium">Nov 21, 2025 at 1:00 PM</span></div>
                        <div className="flex justify-between"><span className="text-sm text-gray-500">Plan purchased</span><span className="font-medium">{selectedPlan === "monthly" ? "Pro (Monthly)" : "Pro (Annual)"}</span></div>
                        <div className="flex justify-between"><span className="text-sm text-gray-500">Amount paid</span><span className="font-medium">{selectedPlan === "monthly" ? "$29.90" : "$239.90"}</span></div>
                        <div className="flex justify-between"><span className="text-sm text-gray-500">Payment method</span><span className="font-medium">Visa ending in 4242</span></div>
                        <div className="flex justify-between"><span className="text-sm text-gray-500">Validity</span><span className="font-medium">Nov 21, 2025 - Dec 21, 2025</span></div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-6">{proText(lang, "receiptNote")}</p>

                    <div className="flex gap-4">
                      <button onClick={() => router.push("/pro-dashboard")} className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#6D3FA6] to-[#A66EE6] text-white font-semibold">Go to PRO Home</button>
                      <button onClick={() => { /* stub for download */ }} className="flex-1 py-3 rounded-xl border border-gray-200">Download Receipt</button>
                    </div>
                  </div>
                </CardWrap>
              </motion.section>
            )}
            {/* CONFIRMATION STEP END */}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
