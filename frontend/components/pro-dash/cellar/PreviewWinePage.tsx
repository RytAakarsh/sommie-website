"use client";

import { useProView } from "../ProViewContext";

export default function PreviewWinePage() {
  const { setView } = useProView();

  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-xl font-semibold mb-4">Preview Label</h2>

      <img src="https://imgs.search.brave.com/rq4kWzwJG4Ydc8gkUfTocPJmBQVyx23OIvsWtg567q8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvcmFsOTNz/Y3kzYzVmMS5qcGVn" className="mx-auto w-40 mb-6 rounded-lg" />

      <button
        onClick={() => setView("cellar")}
        className="w-full py-3 bg-[#4B2B5F] text-white rounded-lg mb-3"
      >
        Confirm Photo & Scan
      </button>

      <button onClick={() => setView("cellar")} className="w-full py-3 border rounded-lg">
        Try Again
      </button>
    </div>
  );
}
