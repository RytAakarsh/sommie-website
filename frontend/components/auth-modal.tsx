// "use client"

// import type React from "react"
// import { useState } from "react"
// import { useLanguage } from "@/app/providers/LanguageProvider";

// import { X, ArrowRight } from "lucide-react"
// import SignupForm from "./signup-form"
// import PlanSelection from "./plan-selection"
// import FreemiumChat from "./freemium-chat"
// import ProPlanFlow from "./pro-plan-modal"

// interface AuthModalProps {
//   onClose: () => void
// }

// type AuthStep = "login" | "signup" | "plans" | "freemium" | "pro-flow"

// export default function AuthModal({ onClose }: AuthModalProps) {
//   const { t } = useLanguage()
//   const [isLogin, setIsLogin] = useState(true)
//   const [currentStep, setCurrentStep] = useState<AuthStep>("login")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [loading, setLoading] = useState(false)

//   const handleLoginSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setTimeout(() => {
//       setLoading(false)
//       console.log("[v0] Login submitted")
//       onClose()
//     }, 1500)
//   }

//   const handleSignupComplete = () => {
//     console.log("[v0] handleSignupComplete called, moving to plans")
//     setCurrentStep("plans")
//   }

//   const handlePlanSelected = (planType?: "freemium" | "pro") => {
//     console.log("[v0] handlePlanSelected called with plan:", planType)
//     if (planType === "pro") {
//       setCurrentStep("pro-flow")
//     } else {
//       setCurrentStep("freemium")
//     }
//   }

//   if (currentStep === "signup") {
//     console.log("[v0] Rendering SignupForm")
//     return <SignupForm onComplete={handleSignupComplete} onCancel={() => setCurrentStep("login")} />
//   }

//   if (currentStep === "plans") {
//     console.log("[v0] Rendering PlanSelection")
//     return <PlanSelection onPlanSelected={handlePlanSelected} onBack={() => setCurrentStep("signup")} />
//   }

//   if (currentStep === "freemium") {
//     console.log("[v0] Rendering FreemiumChat")
//     return <FreemiumChat onClose={onClose} />
//   }

//   if (currentStep === "pro-flow") {
//     console.log("[v0] Rendering ProPlanFlow")
//     return <ProPlanFlow onComplete={onClose} onBack={() => setCurrentStep("plans")} />
//   }

//   // Login view
//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up">
//       <div className="bg-card rounded-3xl border border-border max-w-md w-full shadow-2xl animate-fade-in-up overflow-hidden">
//         {/* Header with gradient */}
//         <div className="bg-gradient-to-r from-primary to-accent p-6 flex items-center justify-between">
//           <div className="flex gap-0">
//             <button
//               onClick={() => setIsLogin(true)}
//               className={`font-semibold px-4 py-2 rounded-l-lg transition-all ${
//                 isLogin
//                   ? "bg-primary-foreground text-primary shadow-lg"
//                   : "text-primary-foreground hover:bg-primary-foreground/20"
//               }`}
//             >
//               {t("auth.login")}
//             </button>
//             <button
//               onClick={() => {
//                 setIsLogin(false)
//                 setCurrentStep("signup")
//               }}
//               className={`font-semibold px-4 py-2 rounded-r-lg transition-all ${
//                 !isLogin
//                   ? "bg-primary-foreground text-primary shadow-lg"
//                   : "text-primary-foreground hover:bg-primary-foreground/20"
//               }`}
//             >
//               {t("auth.signup")}
//             </button>
//           </div>
//           <button onClick={onClose} className="p-2 hover:bg-primary-foreground/20 rounded-lg transition-colors">
//             <X className="w-5 h-5 text-primary-foreground" />
//           </button>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleLoginSubmit} className="p-8 space-y-5">
//           <div>
//             <label className="block text-sm font-semibold mb-2 text-foreground">{t("auth.email")}</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="you@example.com"
//               className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold mb-2 text-foreground">{t("auth.password")}</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="••••••••"
//               className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6 flex items-center justify-center gap-2 group"
//           >
//             {loading ? "Loading..." : t("auth.submit")}
//             {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
//           </button>
//         </form>

//         {/* Toggle */}
//         <div className="px-8 pb-8 text-center border-t border-border">
//           <p className="text-sm text-muted-foreground mt-6">
//             {isLogin ? t("auth.newUser") : t("auth.existingUser")}{" "}
//             <button
//               onClick={() => {
//                 setIsLogin(!isLogin)
//                 if (!isLogin) setCurrentStep("signup")
//               }}
//               className="text-primary hover:underline font-semibold"
//             >
//               {isLogin ? t("auth.signup") : t("auth.login")}
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client";

import type React from "react";
import { useState } from "react";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { X, ArrowRight } from "lucide-react";

import SignupForm from "./signup-form";
import PlanSelection from "./plan-selection";
import FreemiumChat from "./freemium-chat";
import ProPlanFlow from "./pro-plan-modal";

interface AuthModalProps {
  onClose: () => void;
}

type AuthStep = "login" | "signup" | "plans" | "freemium" | "pro-flow";

export default function AuthModal({ onClose }: AuthModalProps) {
  const { t } = useLanguage();

  const [isLogin, setIsLogin] = useState(true);
  const [currentStep, setCurrentStep] = useState<AuthStep>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ---------------- LOGIN ---------------- */
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
     
      const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }
);


      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // Save auth
      localStorage.setItem("sommie_token", data.token);
      localStorage.setItem("sommie_user", JSON.stringify(data.user));

      setLoading(false);

      // Route based on plan
      if (data.user.plan === "PRO") {
        setCurrentStep("pro-flow");
      } else {
        setCurrentStep("freemium");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Try again.");
      setLoading(false);
    }
  };

  /* ---------------- SIGNUP FLOW ---------------- */
  const handleSignupComplete = () => {
    setCurrentStep("plans");
  };

  const handlePlanSelected = (planType?: "freemium" | "pro") => {
    if (planType === "pro") {
      setCurrentStep("pro-flow");
    } else {
      setCurrentStep("freemium");
    }
  };

  /* ---------------- CONDITIONAL RENDERS ---------------- */
  if (currentStep === "signup") {
    return (
      <SignupForm
        onComplete={handleSignupComplete}
        onCancel={() => setCurrentStep("login")}
      />
    );
  }

  if (currentStep === "plans") {
    return (
      <PlanSelection
        onPlanSelected={handlePlanSelected}
        onBack={() => setCurrentStep("signup")}
      />
    );
  }

  if (currentStep === "freemium") {
    return <FreemiumChat onClose={onClose} />;
  }

  if (currentStep === "pro-flow") {
    return (
      <ProPlanFlow
        onComplete={onClose}
        onBack={() => setCurrentStep("plans")}
      />
    );
  }

  /* ---------------- LOGIN UI ---------------- */
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-3xl border border-border max-w-md w-full shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent p-6 flex items-center justify-between">
          <div className="flex">
            <button
              onClick={() => setIsLogin(true)}
              className={`font-semibold px-4 py-2 rounded-l-lg ${
                isLogin
                  ? "bg-primary-foreground text-primary"
                  : "text-primary-foreground"
              }`}
            >
              {t("auth.login")}
            </button>
            <button
              onClick={() => {
                setIsLogin(false);
                setCurrentStep("signup");
              }}
              className={`font-semibold px-4 py-2 rounded-r-lg ${
                !isLogin
                  ? "bg-primary-foreground text-primary"
                  : "text-primary-foreground"
              }`}
            >
              {t("auth.signup")}
            </button>
          </div>

          <button onClick={onClose}>
            <X className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLoginSubmit} className="p-8 space-y-5">
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <div>
            <label className="block text-sm font-semibold mb-2">
              {t("auth.email")}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              {t("auth.password")}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            {loading ? "Loading..." : t("auth.submit")}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        {/* Footer */}
        <div className="px-8 pb-8 text-center border-t">
          <p className="text-sm text-muted-foreground mt-6">
            {t("auth.newUser")}{" "}
            <button
              onClick={() => setCurrentStep("signup")}
              className="text-primary font-semibold"
            >
              {t("auth.signup")}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
