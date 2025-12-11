"use client"

import { useLanguage } from "@/app/providers/LanguageProvider";

import { Wine } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary-foreground rounded-lg flex items-center justify-center">
                <Wine className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-lg">Sommie</span>
            </div>
            <p className="opacity-80 text-sm">Your personal AI sommelier for curated wine experiences</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h4 className="font-semibold mb-4">{t("footer.about")}</h4>
            <ul className="space-y-2 opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity text-sm">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity text-sm">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity text-sm">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity text-sm">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity text-sm">
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity text-sm">
                  {t("footer.terms")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-80">
          <p className="text-sm">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
