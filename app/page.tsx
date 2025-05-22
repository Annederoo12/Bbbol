"use client";

import KiteMap from "../src/components/KiteMap";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-20 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse delay-2000"></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-12 pb-8">
          <div className="text-center mb-12">
            {/* Main Title with Gradient */}
            <div className="mb-6">
              <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4 leading-tight">
                🪁 KITESURF
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 -mt-2">
                FORECAST
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              Kan ik vandaag{" "}
              <span className="font-bold text-cyan-600">kitesurfen</span>?
              <br />
              Check de wind op jouw favoriete spots!
            </p>

            {/* Stats Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50">
                <span className="text-sm font-semibold text-gray-600">
                  Live Data
                </span>
                <span className="ml-2 text-green-600">●</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50">
                <span className="text-sm font-semibold text-gray-600">
                  2 Spots
                </span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50">
                <span className="text-sm font-semibold text-gray-600">
                  Nederland
                </span>
              </div>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
              {/* Map Container */}
              <div className="mb-10">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-inner">
                  <KiteMap />
                </div>
              </div>

              {/* Legend */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
                  🌪️ Wind Condities
                </h3>

                <div className="flex flex-wrap justify-center gap-6">
                  {/* Perfect Conditions */}
                  <div className="flex items-center group hover:scale-105 transition-transform">
                    <div className="relative">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-lg"></div>
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-25"></div>
                    </div>
                    <span className="ml-3 font-semibold text-gray-700">
                      Perfect! (15+ knopen)
                    </span>
                  </div>

                  {/* Good Wind, Wrong Direction */}
                  <div className="flex items-center group hover:scale-105 transition-transform">
                    <div className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
                    <span className="ml-3 font-semibold text-gray-700">
                      Verkeerde richting
                    </span>
                  </div>

                  {/* Not Enough Wind */}
                  <div className="flex items-center group hover:scale-105 transition-transform">
                    <div className="w-5 h-5 bg-gradient-to-r from-red-400 to-red-600 rounded-full shadow-lg"></div>
                    <span className="ml-3 font-semibold text-gray-700">
                      Te weinig wind
                    </span>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="text-blue-500 mr-2">🌊</span>
                      <span>Workum: E/ESE/SE wind</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-cyan-500 mr-2">🏖️</span>
                      <span>Scheveningen: E wind</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">⚡</span>
                      <span>Live updates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              Data van OpenWeatherMap • Laatste update:{" "}
              {new Date().toLocaleTimeString("nl-NL")}
            </p>
          </div>
        </div>
      </main>

      {/* Floating Action Button for Refresh */}
      <button
        onClick={() => window.location.reload()}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-full shadow-2xl hover:shadow-cyan-500/25 hover:scale-110 transition-all duration-300 group z-20"
      >
        <svg
          className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </button>
    </div>
  );
}
