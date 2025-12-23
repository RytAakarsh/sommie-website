// "use client";

// import { createContext, useContext, useState } from "react";

// type ProView = "dashboard" | "profile";

// const ProViewContext = createContext<{
//   view: ProView;
//   setView: (v: ProView) => void;
// }>({
//   view: "dashboard",
//   setView: () => {},
// });

// export function ProViewProvider({ children }: { children: React.ReactNode }) {
//   const [view, setView] = useState<ProView>("dashboard");

//   return (
//     <ProViewContext.Provider value={{ view, setView }}>
//       {children}
//     </ProViewContext.Provider>
//   );
// }

// export function useProView() {
//   return useContext(ProViewContext);
// }


"use client";

import { createContext, useContext, useState } from "react";

type ProView =
  | "dashboard"
  | "profile"
  | "edit-profile";

interface ProViewContextType {
  view: ProView;
  setView: (view: ProView) => void;
}

const ProViewContext = createContext<ProViewContextType | null>(null);

export function ProViewProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState<ProView>("dashboard");

  return (
    <ProViewContext.Provider value={{ view, setView }}>
      {children}
    </ProViewContext.Provider>
  );
}

export function useProView() {
  const ctx = useContext(ProViewContext);
  if (!ctx) throw new Error("useProView must be used inside ProViewProvider");
  return ctx;
}
