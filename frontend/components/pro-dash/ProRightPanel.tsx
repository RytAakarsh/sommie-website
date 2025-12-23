"use client";

import { useProView } from "./ProViewContext";
import ProProfilePage from "./ProProfilePage";
import ProEditProfilePage from "./EditProfilePage";

export default function ProRightPanel() {
  const { view } = useProView();

  if (view === "profile") return <ProProfilePage />;
  if (view === "edit-profile") return <ProEditProfilePage />;

  return null; // dashboard shows cards only
}
