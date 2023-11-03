import React from "react";
import MainMapComponent from "../components/MainMapComponent";

export default function Home() {
  return (
    <div className="p-4 h-full">
      <div className="flex h-full">
        <div className="w-7/12 h-auto">
          <MainMapComponent />
        </div>
        <div className="w-5/12 p-4 bg-white rounded-lg ml-4 border border-gray-300">
          <h2 className="text-2xl font-semibold mb-4">Devices</h2>
          <p>Device Inf.</p>
        </div>
      </div>
    </div>
  );
}
