"use client";

import React, { useEffect, useState } from "react";

interface SpotData {
  spot: string;
  spotKey: string;
  windSpeed: number;
  windSpeedMs: number;
  windDirection: number;
  canKite: boolean;
  hasEnoughWind: boolean;
  hasGoodDirection: boolean;
  idealWind: string;
  weatherDescription: string;
  temperature: number;
  timestamp: string;
  error?: string;
}

interface ApiResponse {
  success: boolean;
  data: SpotData[];
  lastUpdated: string;
  source: string;
}

export default function KiteMap() {
  const [spotData, setSpotData] = useState<SpotData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const fetchWindData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/wind");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: ApiResponse = await response.json();

      if (result.success) {
        setSpotData(result.data);
        setLastUpdated(
          new Date(result.lastUpdated).toLocaleTimeString("nl-NL")
        );
      } else {
        throw new Error("API returned unsuccessful response");
      }
    } catch (err) {
      console.error("Error fetching wind data:", err);
      setError(
        err instanceof Error ? err.message : "Fout bij ophalen winddata"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWindData();
  }, []);

  const getWindDirectionText = (degrees: number): string => {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
  };

  if (loading) {
    return (
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-6">
            🗺️ Kitespots Nederland
          </h2>
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Winddata ophalen...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-6">
            🗺️ Kitespots Nederland
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 mb-4">❌ Fout bij ophalen winddata</p>
            <p className="text-sm text-red-500 mb-4">{error}</p>
            <button
              onClick={fetchWindData}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Opnieuw proberen
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-2xl font-bold">🗺️ Kitespots Nederland</h2>
          <button
            onClick={fetchWindData}
            className="ml-4 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
            disabled={loading}
          >
            🔄 Refresh
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {spotData.map((spot) => (
            <div
              key={spot.spotKey}
              className={`p-6 rounded-lg shadow-lg border-2 ${
                spot.canKite
                  ? "bg-green-50 border-green-500"
                  : "bg-red-50 border-red-500"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{spot.spot}</h3>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    spot.canKite ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {spot.canKite ? "✓" : "✗"}
                </div>
              </div>

              {spot.error ? (
                <p className="text-red-600">{spot.error}</p>
              ) : (
                <>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-700">
                      <strong>Wind:</strong> {spot.windSpeed} knopen (
                      {spot.windSpeedMs} m/s)
                    </p>
                    <p className="text-gray-700">
                      <strong>Richting:</strong>{" "}
                      {getWindDirectionText(spot.windDirection)} (
                      {spot.windDirection}°)
                    </p>
                    <p className="text-gray-700">
                      <strong>Ideaal:</strong> {spot.idealWind}
                    </p>
                    <p className="text-gray-700">
                      <strong>Temperatuur:</strong> {spot.temperature}°C
                    </p>
                    {spot.weatherDescription && (
                      <p className="text-gray-700 capitalize">
                        <strong>Weer:</strong> {spot.weatherDescription}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1 text-sm">
                    <p
                      className={
                        spot.hasEnoughWind ? "text-green-600" : "text-red-600"
                      }
                    >
                      {spot.hasEnoughWind ? "✓" : "✗"} Wind{" "}
                      {spot.hasEnoughWind ? ">=" : "<"} 15 knopen
                    </p>
                    <p
                      className={
                        spot.hasGoodDirection
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {spot.hasGoodDirection ? "✓" : "✗"} Goede windrichting
                    </p>
                  </div>
                </>
              )}

              <p
                className={`font-bold text-lg mt-4 ${
                  spot.canKite ? "text-green-600" : "text-red-600"
                }`}
              >
                {spot.canKite
                  ? "🪁 Kitesurfen mogelijk!"
                  : "🚫 Niet geschikt voor kitesurfen"}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 text-gray-500">
          <p className="text-sm">
            Laatste update: {lastUpdated} | Powered by OpenWeatherMap
          </p>
          <p className="text-xs mt-1">🗺️ Interactieve kaart komt binnenkort!</p>
        </div>
      </div>
    </div>
  );
}
