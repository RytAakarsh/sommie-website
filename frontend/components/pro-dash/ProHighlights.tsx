
"use client";

import React from "react";

export default function ProHighlights() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-20">

      {/* Left Panel */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-slate-800">Your Highlights</h3>
          <button className="text-sm text-[#6D3FA6] font-medium">See all</button>
        </div>

        <div className="space-y-4">
          <div className="p-4 border rounded-xl bg-gray-50">
            <p className="font-semibold text-sm">Château Margaux 2018</p>
            <p className="text-xs text-gray-500">Bordeaux, France • Added 2 days ago</p>
          </div>

          <div className="p-4 border rounded-xl bg-gray-50">
            <p className="font-semibold text-sm">Screaming Eagle 2017</p>
            <p className="text-xs text-gray-500">Napa Valley, USA • Added 1 week ago</p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-slate-800">Latest Tourism Trips</h3>
          <button className="text-sm text-[#6D3FA6] font-medium">See all</button>
        </div>

        <div className="space-y-4">
          <div className="p-4 border rounded-xl bg-gray-50">
            <p className="font-semibold text-sm">Tuscany Vineyard Tour</p>
            <p className="text-xs text-gray-500">Italy • Completed Oct 2025</p>
          </div>

          <div className="p-4 border rounded-xl bg-gray-50">
            <p className="font-semibold text-sm">Willamette Valley Pinots</p>
            <p className="text-xs text-gray-500">Upcoming Dec 15th</p>
          </div>
        </div>
      </div>

    </div>
  );
}
