"use client"

import { useState, createContext, useContext } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import WhatsSommie from "@/components/whats-sommie"
import Recommendations from "@/components/recommendations"
import Experiences from "@/components/experiences"
import Footer from "@/components/footer"
import AuthModal from "@/components/auth-modal"
import ProPlanModal from "@/components/pro-plan-modal"

type Language = "en" | "pt"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { en: "Home", pt: "Início" },
  "nav.features": { en: "Features", pt: "Recursos" },
  "nav.about": { en: "About", pt: "Sobre" },
  "nav.getStarted": { en: "Get Started", pt: "Começar" },

  // Hero
  "hero.title": { en: "Your Personal Sommelier with AI", pt: "Seu Sommelier Pessoal com IA" },
  "hero.subtitle": {
    en: "Discover wines perfectly matched to your taste, curated by our advanced AI",
    pt: "Descubra vinhos perfeitamente ajustados ao seu paladar, selecionados por nossa IA avançada",
  },
  "hero.cta": { en: "Explore Now", pt: "Explorar Agora" },

  // What's Sommie
  "sommie.title": { en: "What's Sommie?", pt: "O Que É Sommie?" },
  "sommie.subtitle": {
    en: "Your personal sommelier with artificial intelligence",
    pt: "Seu sommelier pessoal com inteligência artificial",
  },
  "sommie.desc": {
    en: "Sommie learns what you like and suggests the ideal labels for every moment, from special dinners to toasts between friends.",
    pt: "Sommie aprende o que você gosta e sugere os rótulos ideais para cada momento, desde jantares especiais até brindes entre amigos.",
  },
  "sommie.feature1": {
    en: "Personalized recommendations based on your taste buds",
    pt: "Recomendações personalizadas com base em seus gostos",
  },
  "sommie.feature2": {
    en: "Perfect harmonizations for each type of wine",
    pt: "Harmonizações perfeitas para cada tipo de vinho",
  },
  "sommie.feature3": {
    en: "Suggestions of experiences and wine tourism itineraries",
    pt: "Sugestões de experiências e roteiros de turismo vinícola",
  },
  "sommie.feature4": {
    en: "Continuous learning to improve your recommendations",
    pt: "Aprendizado contínuo para melhorar suas recomendações",
  },

  // Features
  "features.title": { en: "Why Choose Sommie?", pt: "Por Que Escolher Sommie?" },
  "features.f1.title": { en: "AI-Powered Recommendations", pt: "Recomendações Alimentadas por IA" },
  "features.f1.desc": {
    en: "Machine learning algorithms personalized to your preferences",
    pt: "Algoritmos de aprendizado personalizados às suas preferências",
  },
  "features.f2.title": { en: "Expert Harmonizations", pt: "Harmonizações Especializadas" },
  "features.f2.desc": {
    en: "Perfect wine and food pairings for every occasion",
    pt: "Harmonizações perfeitas de vinho e comida para cada ocasião",
  },
  "features.f3.title": { en: "Wine Tourism Guides", pt: "Guias de Turismo de Vinho" },
  "features.f3.desc": {
    en: "Discover unique vineyard experiences worldwide",
    pt: "Descubra experiências vinícolas únicas em todo o mundo",
  },
  "features.f4.title": { en: "Adaptive Learning", pt: "Aprendizado Adaptativo" },
  "features.f4.desc": {
    en: "AI continuously improves based on your feedback",
    pt: "IA melhora continuamente com base em seu feedback",
  },

  // Recommendations
  "rec.title": { en: "Curated Selections", pt: "Seleções Curadas" },
  "rec.subtitle": {
    en: "Our AI-curated picks for wine connoisseurs",
    pt: "Seleções curadas por IA para apreciadores de vinho",
  },

  // Experiences
  "exp.title": { en: "Wine Experiences", pt: "Experiências de Vinho" },
  "exp.subtitle": { en: "Unforgettable moments with Sommie", pt: "Momentos inesquecíveis com Sommie" },

  // CTA
  "cta.title": { en: "Ready to Discover Your Perfect Wine?", pt: "Pronto para Descobrir Seu Vinho Perfeito?" },
  "cta.desc": {
    en: "Join thousands of wine enthusiasts using Sommie to elevate their wine experience",
    pt: "Junte-se a milhares de entusiastas de vinho usando Sommie para elevar sua experiência com vinho",
  },
  "cta.button": { en: "Start Your Journey", pt: "Comece Sua Jornada" },

  // Footer
  "footer.about": { en: "About", pt: "Sobre" },
  "footer.contact": { en: "Contact", pt: "Contato" },
  "footer.privacy": { en: "Privacy", pt: "Privacidade" },
  "footer.terms": { en: "Terms", pt: "Termos" },
  "footer.copyright": { en: "© 2025 Sommie. All rights reserved.", pt: "© 2025 Sommie. Todos os direitos reservados." },

  // Auth
  "auth.login": { en: "Login", pt: "Entrar" },
  "auth.signup": { en: "Sign Up", pt: "Cadastro" },
  "auth.newUser": { en: "New User?", pt: "Novo Usuário?" },
  "auth.existingUser": { en: "Already have an account?", pt: "Já tem uma conta?" },
  "auth.email": { en: "Email", pt: "Email" },
  "auth.password": { en: "Password", pt: "Senha" },
  "auth.submit": { en: "Submit", pt: "Enviar" },
  "auth.cancel": { en: "Cancel", pt: "Cancelar" },

  // Signup Form
  "signup.name": { en: "Full Name", pt: "Nome Completo" },
  "signup.age": { en: "Age", pt: "Idade" },
  "signup.ageError": { en: "Must be 18 or older", pt: "Deve ter 18 anos ou mais" },
  "signup.password": { en: "Password", pt: "Senha" },
  "signup.passwordError": {
    en: "Must include uppercase, number, and special character",
    pt: "Deve incluir letra maiúscula, número e caractere especial",
  },
  "signup.confirmPassword": { en: "Confirm Password", pt: "Confirmar Senha" },
  "signup.passwordMismatch": { en: "Passwords do not match", pt: "As senhas não correspondem" },
  "signup.country": { en: "Country", pt: "País" },
  "signup.selectCountry": { en: "Select your country", pt: "Selecione seu país" },
  "signup.signupComplete": { en: "Sign Up Complete", pt: "Cadastro Concluído" },
  "signup.nextStep": { en: "Next: Choose Your Plan", pt: "Próximo: Escolha Seu Plano" },

  // Plans
  "plan.title": { en: "Choose Your Plan", pt: "Escolha Seu Plano" },
  "plan.freemium": { en: "Freemium", pt: "Freemium" },
  "plan.pro": { en: "PRO", pt: "PRO" },
  "plan.freemiumDesc": { en: "Basic analysis", pt: "Análise Básica" },
  "plan.proDesc": { en: "Advanced analysis", pt: "Análise Avançada" },
  "plan.upgrade": { en: "Upgrade to PRO", pt: "Fazer Upgrade para PRO" },
  "plan.feature1": { en: "Up to 6 wines", pt: "Até 6 vinhos" },
  "plan.feature2": { en: "Up to 60 wines", pt: "Até 60 vinhos" },
  "plan.feature3": { en: "Simple AI chat", pt: "Chat de IA Simples" },
  "plan.feature4": { en: "Advanced AI chat", pt: "Chat de IA Avançado" },
  "plan.feature5": { en: "Sommie Game", pt: "Jogo Sommie" },
  "plan.feature6": { en: "Benefits Club", pt: "Clube de Benefícios" },
  "plan.feature7": { en: "Travel Assistant", pt: "Assistente de Viagem" },
  "plan.feature8": { en: "Restaurant Pocket Sommelier", pt: "Sommelier de Bolso para Restaurante" },
  "plan.selectPlan": { en: "Select Plan", pt: "Selecionar Plano" },
  "plan.upgradeLater": { en: "Upgrade Now", pt: "Fazer Upgrade Agora" },

  // Chat
  "chat.greeting": { en: "Hi! I'm Sommie, your virtual sommelier.", pt: "Olá! Sou a Sommie, sua sommelière virtual." },
  "chat.desc": {
    en: "I'm here to guide you through the world of wines, answer your questions, suggest harmonies and tell you about wines with clarity, culture and elegance.",
    pt: "Estou aqui para guiá-lo no mundo dos vinhos, tirar dúvidas, sugerir harmonizações, contar curiosidades sobre uvas, regiões e vinícolas, e indicar rótulos que combinam com seu paladar.",
  },
  "chat.explore": {
    en: "Let's explore together this full universe of aromas, histories and discoveries!",
    pt: "Vamos explorar juntos esse universo cheio de aromas, histórias e descobertas!",
  },
  "chat.suggestWine": { en: "Suggest a wine for me today.", pt: "Me indique um vinho para hoje." },
  "chat.harmonize": { en: "How do I harmonize this dish?", pt: "Como harmonizo esse prato?" },
  "chat.learnMore": { en: "I want to learn more about wines.", pt: "Quero aprender mais sobre vinhos." },
  "chat.itinerary": { en: "Plan a wine tourism itinerary for me.", pt: "Planeje um roteiro de enoturismo para mim." },
  "chat.message": { en: "Message", pt: "Mensagem" },

  // PRO Plan Flow
  "pro.monthlyPlan": { en: "Monthly Plan", pt: "Plano Mensal" },
  "pro.annualPlan": { en: "Annual Plan", pt: "Plano Anual" },
  "pro.chooseYourPlan": { en: "Choose Your Plan", pt: "Escolha Seu Plano" },
  "pro.automaticRenewal": { en: "Automatic renewal", pt: "Renovação automática" },
  "pro.monthlyPlanText": { en: "Monthly plan", pt: "Plano mensal" },
  "pro.cancelAnytime": { en: "Cancel any time", pt: "Cancelar a qualquer momento" },
  "pro.noHiddenFees": { en: "No hidden fees", pt: "Sem taxas ocultas" },
  "pro.bestValue": { en: "Best Value", pt: "Melhor Valor" },
  "pro.saveMoney": { en: "Save $188.80", pt: "Economize $188,80" },
  "pro.continueWithPlan": { en: "Continue With Plan", pt: "Continuar com o Plano" },
  "pro.recommended": { en: "⭐ RECOMMENDED", pt: "⭐ RECOMENDADO" },
  "pro.completeInfo": { en: "Complete Your Information", pt: "Complete Suas Informações" },
  "pro.cpfId": { en: "CPF/ID", pt: "CPF/ID" },
  "pro.phoneNumber": { en: "Phone number", pt: "Número de telefone" },
  "pro.street": { en: "Street", pt: "Rua" },
  "pro.number": { en: "Number", pt: "Número" },
  "pro.apartment": { en: "Apartment", pt: "Apartamento" },
  "pro.neighborhood": { en: "Neighborhood/District", pt: "Bairro/Distrito" },
  "pro.country": { en: "Country", pt: "País" },
  "pro.city": { en: "City", pt: "Cidade" },
  "pro.state": { en: "State", pt: "Estado" },
  "pro.zipCode": { en: "Zip Code", pt: "CEP" },
  "pro.gender": { en: "Gender", pt: "Gênero" },
  "pro.dateOfBirth": { en: "Date of Birth", pt: "Data de Nascimento" },
  "pro.uploadPhoto": { en: "Upload your photo", pt: "Envie sua foto" },
  "pro.payment": { en: "Payment", pt: "Pagamento" },
  "pro.selectPaymentMethod": { en: "Select Payment Method", pt: "Selecione Método de Pagamento" },
  "pro.cardNumber": { en: "Number", pt: "Número" },
  "pro.cardholderName": { en: "Cardholder Name", pt: "Nome do Titular" },
  "pro.expiry": { en: "Expiry", pt: "Expiração" },
  "pro.cvv": { en: "CVV", pt: "CVV" },
  "pro.cardholderId": { en: "Card Holder ID", pt: "ID do Titular do Cartão" },
  "pro.secure": { en: "100% secure", pt: "100% seguro" },
  "pro.confirmPayment": { en: "Confirm Payment", pt: "Confirmar Pagamento" },
  "pro.welcome": { en: "Well come 😊", pt: "Bem-vindo 😊" },
  "pro.unlockFeatures": {
    en: "Unlock exclusive features to explore the wine world",
    pt: "Desbloqueie recursos exclusivos para explorar o mundo do vinho",
  },
  "pro.paymentConfirmed": { en: "Payment Confirmed!", pt: "Pagamento Confirmado!" },
  "pro.subscriptionActive": { en: "Your subscription is now active.", pt: "Sua assinatura agora está ativa." },
  "pro.transactionDetails": { en: "Transaction Details:", pt: "Detalhes da Transação:" },
  "pro.receiptNumber": { en: "Receipt number", pt: "Número do recibo" },
  "pro.dateTime": { en: "Date and time", pt: "Data e hora" },
  "pro.planPurchased": { en: "Plan purchased", pt: "Plano adquirido" },
  "pro.amountPaid": { en: "Amount paid", pt: "Valor pago" },
  "pro.paymentMethod": { en: "Payment method", pt: "Método de pagamento" },
  "pro.validityPeriod": { en: "Validity period", pt: "Período de validade" },
  "pro.receiptEmail": {
    en: "A copy of your receipt has been emailed to your registered address. You can now proceed to manage your account settings and explore all the Pro features.",
    pt: "Uma cópia do seu recibo foi enviada para seu endereço registrado. Você agora pode gerenciar suas configurações de conta e explorar todos os recursos Pro.",
  },
  "pro.goToProHome": { en: "Go to PRO Home", pt: "Ir para Casa PRO" },
  "pro.back": { en: "Back", pt: "Voltar" },
  "pro.next": { en: "Next", pt: "Próximo" },
  "pro.skip": { en: "Skip", pt: "Pular" },
  "pro.cancel": { en: "Cancel", pt: "Cancelar" },
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en")
  const [showAuth, setShowAuth] = useState(false)
  const [showProPlan, setShowProPlan] = useState(false)

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translation[language] || key
  }

  const value: LanguageContextType = { language, setLanguage, t }

  return (
    <LanguageContext.Provider value={value}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar onGetStarted={() => setShowAuth(true)} />
        <Hero onCTA={() => setShowAuth(true)} />
        <WhatsSommie />
        <Features />
        <Recommendations />
        <Experiences />
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground text-balance">
              {t("cta.title")}
            </h2>
            <p className="text-lg md:text-xl mb-10 text-primary-foreground/90">{t("cta.desc")}</p>
            <button
              onClick={() => setShowAuth(true)}
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 transform shadow-lg"
            >
              {t("cta.button")}
            </button>
          </div>
        </section>
        <Footer />
        {showAuth && <AuthModal onClose={() => setShowAuth(false)} onUpgrade={() => setShowProPlan(true)} />}
        {showProPlan && <ProPlanModal onClose={() => setShowProPlan(false)} />}
      </div>
    </LanguageContext.Provider>
  )
}
