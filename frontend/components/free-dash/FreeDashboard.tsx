"use client";

import React from "react";
import { ArrowLeft, Globe } from "lucide-react";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();

  const t = {
    dashboard: language === "en" ? "Dashboard" : "Painel",
    perguntas: language === "en" ? "Questions" : "Perguntas",
    respostas: language === "en" ? "Answers" : "Respostas",
    conversas: language === "en" ? "Conversations" : "Conversas",
    usuarios: language === "en" ? "Users" : "Usuários",
    admins: language === "en" ? "Administrators" : "Administradores",
    suspensos: language === "en" ? "Suspended" : "Suspensos",
    topUsers: language === "en" ? "Users with most conversations" : "Usuários com mais conversas",
    consumo: language === "en" ? "Consumption" : "Consumo",
    reviews: language === "en" ? "Reviews" : "Avaliações",
    movimento: language === "en" ? "Daily Activity" : "Movimentação Diária",
  };

  return (
    <div className="min-h-screen bg-[#F6F3F8] px-4 md:px-8 py-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-lg hover:bg-white shadow-sm"
        >
          <ArrowLeft />
        </button>

        <h1 className="text-xl md:text-2xl font-bold">{t.dashboard}</h1>

        <button
          onClick={() => setLanguage(language === "en" ? "pt" : "en")}
          className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm uppercase">{language}</span>
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <Stat title={t.perguntas} value="11442" color="bg-green-500" />
        <Stat title={t.respostas} value="11412" color="bg-cyan-500" />
        <Stat title={t.conversas} value="3135" color="bg-orange-400" />
        <Stat title={t.usuarios} value="2418" color="bg-teal-600" />
        <Stat title={t.admins} value="7" color="bg-blue-500" />
        <Stat title={t.suspensos} value="0" color="bg-gray-400" />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow p-4 mb-6 overflow-x-auto">
        <h2 className="font-semibold mb-3">{t.topUsers}</h2>

        <table className="w-full text-sm">
          <thead className="border-b">
            <tr className="text-left text-gray-500">
              <th className="py-2">Usuário</th>
              <th>Pergunta</th>
              <th>Resposta</th>
              <th>Conversa</th>
              <th>Acesso</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Danilo dos Santos", 292, 292, 142, "10/12/25"],
              ["Silvestre Soares", 146, 146, 40, "12/12/25"],
              ["Adelaide Vieira", 144, 144, 57, "10/12/25"],
              ["Matheus", 137, 136, 4, "03/12/25"],
            ].map((u, i) => (
              <tr key={i} className="border-b last:border-none">
                <td className="py-2">{u[0]}</td>
                <td>{u[1]}</td>
                <td>{u[2]}</td>
                <td>{u[3]}</td>
                <td>{u[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard title={t.movimento} />
        <DonutCard title={t.consumo} />
        <DonutCard title={t.reviews} />
      </div>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function Stat({ title, value, color }: any) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-2">
      <span className="text-sm text-gray-500">{title}</span>
      <span className={`text-white ${color} rounded-xl px-3 py-1 w-fit font-semibold`}>
        {value}
      </span>
    </div>
  );
}

function ChartCard({ title }: any) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="h-[220px] bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center text-gray-400">
        Line Chart
      </div>
    </div>
  );
}

function DonutCard({ title }: any) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="h-[220px] bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
        Donut Chart
      </div>
    </div>
  );
}
