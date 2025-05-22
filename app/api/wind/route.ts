import { NextResponse } from "next/server";

// Nederlandse Kitesurf spots met correcte windrichtingen
const SPOTS = {
  // Zuid-Holland
  scheveningen: {
    lat: 52.104,
    lon: 4.2582,
    idealWind: ["SW", "W", "NW"],
    name: "Scheveningen",
    region: "Zuid-Holland",
    type: "zee",
    notes: "Let op stroming en drukte",
  },
  hoekVanHolland: {
    lat: 51.9775,
    lon: 4.1286,
    idealWind: ["SW", "W", "NW", "N"],
    name: "Hoek van Holland",
    region: "Zuid-Holland",
    type: "zee",
    notes: "Breed strand, beginner friendly bij ZW",
  },
  brouwersdamNoord: {
    lat: 51.75,
    lon: 3.85,
    idealWind: ["SW", "W", "NW"],
    name: "Brouwersdam (Noordzee)",
    region: "Zuid-Holland",
    type: "zee",
    notes: "Veel ruimte, ook lesgebied",
  },

  // Noord-Holland
  ijmuiden: {
    lat: 52.4586,
    lon: 4.5547,
    idealWind: ["SW", "W", "NW"],
    name: "IJmuiden (Noordpier)",
    region: "Noord-Holland",
    type: "zee",
    notes: "Goede swell bij harde wind",
  },
  zandvoort: {
    lat: 52.3676,
    lon: 4.5317,
    idealWind: ["SW", "W", "NW"],
    name: "Zandvoort",
    region: "Noord-Holland",
    type: "zee",
    notes: "Meestal druk, beperkte launch zones",
  },
  wijkAanZee: {
    lat: 52.4992,
    lon: 4.5939,
    idealWind: ["SW", "W", "NW"],
    name: "Wijk aan Zee",
    region: "Noord-Holland",
    type: "zee",
    notes: "Topspot voor wave-riders",
  },

  // Zeeland
  vrouwenpolder: {
    lat: 51.5436,
    lon: 3.6864,
    idealWind: ["SW", "W", "NW"],
    name: "Vrouwenpolder",
    region: "Zeeland",
    type: "zee",
    notes: "Breed strand, veilig voor beginners",
  },
  veerseMeer: {
    lat: 51.55,
    lon: 3.8,
    idealWind: ["SW", "W", "NE"],
    name: "Veerse Meer",
    region: "Zeeland",
    type: "binnenwater",
    notes: "Vlakwater, perfect voor lessen",
  },
  neeltjeJans: {
    lat: 51.65,
    lon: 3.69,
    idealWind: ["SW", "W"],
    name: "Neeltje Jans",
    region: "Zeeland",
    type: "zee",
    notes: "Alleen voor gevorderden (rotsen)",
  },
  brouwersdamGrevelingen: {
    lat: 51.74,
    lon: 3.86,
    idealWind: ["SW", "W", "NW"],
    name: "Brouwersdam (Grevelingen)",
    region: "Zeeland",
    type: "binnenwater",
    notes: "Vlakwater, perfecte freestyle spot",
  },

  // Friesland / Noord-Nederland
  workum: {
    lat: 52.9811,
    lon: 5.4444,
    idealWind: ["SW", "W", "NW", "N", "NE"],
    name: "Workum (IJsselmeer)",
    region: "Friesland",
    type: "binnenwater",
    notes: "Super vlak en ondiep water",
  },
  mirns: {
    lat: 52.95,
    lon: 5.52,
    idealWind: ["NW", "W", "SW"],
    name: "Mirns (IJsselmeer)",
    region: "Friesland",
    type: "binnenwater",
    notes: "Kleiner dan Workum, ondiep en rustig",
  },
  lauwersmeer: {
    lat: 53.34,
    lon: 6.2,
    idealWind: ["NW", "N", "NE"],
    name: "Lauwersmeer",
    region: "Noord-Nederland",
    type: "binnenwater",
    notes: "Vlakwater en beschut gebied",
  },

  // Randmeren / Midden-NL
  muiderberg: {
    lat: 52.33,
    lon: 5.11,
    idealWind: ["NE", "E", "SE"],
    name: "Muiderberg",
    region: "Midden-Nederland",
    type: "binnenwater",
    notes: "Klein, vlak water, rustig",
  },
  wijkBijDuurstede: {
    lat: 51.97,
    lon: 5.34,
    idealWind: ["E", "NE"],
    name: "Wijk bij Duurstede",
    region: "Midden-Nederland",
    type: "rivier",
    notes: "Alleen bij juiste waterstand & wind",
  },
};

// Check if wind direction is good for kitesurfing
function isGoodWindDirection(
  windDirection: number,
  idealDirections: string[]
): boolean {
  const directions = {
    N: [348.75, 11.25],
    NNE: [11.25, 33.75],
    NE: [33.75, 56.25],
    ENE: [56.25, 78.75],
    E: [78.75, 101.25],
    ESE: [101.25, 123.75],
    SE: [123.75, 146.25],
    SSE: [146.25, 168.75],
    S: [168.75, 191.25],
    SSW: [191.25, 213.75],
    SW: [213.75, 236.25],
    WSW: [236.25, 258.75],
    W: [258.75, 281.25],
    WNW: [281.25, 303.75],
    NW: [303.75, 326.25],
    NNW: [326.25, 348.75],
  };

  return idealDirections.some((direction) => {
    const [min, max] = directions[direction as keyof typeof directions];
    // Handle wrapping around 0/360 degrees for North
    if (direction === "N") {
      return windDirection >= min || windDirection < max;
    }
    return windDirection >= min && windDirection < max;
  });
}

// Convert m/s to knots
function msToKnots(ms: number): number {
  return ms * 1.944;
}

// Get wind direction as text
function getWindDirectionText(degrees: number): string {
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
}

export async function GET() {
  try {
    const API_KEY =
      process.env.OPENWEATHER_API_KEY || "f23efc31c471a69fd0677b03a7bd370e";

    console.log("Fetching wind data for ALL Nederlandse kitesurf spots...");

    const results = [];

    // Fetch data for each spot
    for (const [spotKey, spot] of Object.entries(SPOTS)) {
      try {
        console.log(`Fetching data for ${spot.name}...`);

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${spot.lat}&lon=${spot.lon}&appid=${API_KEY}&units=metric`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`OpenWeatherMap API error: ${response.status}`);
        }

        const data = await response.json();

        // Get wind data
        const windSpeedMs = data.wind?.speed || 0; // m/s
        const windDirection = data.wind?.deg || 0; // degrees

        const windSpeedKnots = msToKnots(windSpeedMs);
        const hasEnoughWind = windSpeedKnots >= 15;
        const hasGoodDirection = isGoodWindDirection(
          windDirection,
          spot.idealWind
        );

        results.push({
          spot: spot.name,
          spotKey: spotKey,
          region: spot.region,
          type: spot.type,
          windSpeed: Math.round(windSpeedKnots),
          windSpeedMs: Math.round(windSpeedMs * 10) / 10,
          windDirection: Math.round(windDirection),
          windDirectionText: getWindDirectionText(windDirection),
          canKite: hasEnoughWind && hasGoodDirection,
          hasEnoughWind,
          hasGoodDirection,
          idealWind: spot.idealWind.join("/"),
          weatherDescription: data.weather?.[0]?.description || "",
          temperature: Math.round(data.main?.temp || 0),
          timestamp: new Date().toISOString(),
          coordinates: { lat: spot.lat, lon: spot.lon },
          notes: spot.notes,
        });

        console.log(
          `${spot.name}: ${windSpeedKnots.toFixed(
            1
          )} knots ${getWindDirectionText(windDirection)}, canKite: ${
            hasEnoughWind && hasGoodDirection
          }`
        );
      } catch (error) {
        console.error(`Error fetching data for ${spot.name}:`, error);
        results.push({
          spot: spot.name,
          spotKey: spotKey,
          region: spot.region,
          type: spot.type,
          windSpeed: 0,
          windDirection: 0,
          windDirectionText: "N/A",
          canKite: false,
          hasEnoughWind: false,
          hasGoodDirection: false,
          idealWind: spot.idealWind.join("/"),
          error: "Data kon niet worden opgehaald",
          timestamp: new Date().toISOString(),
          coordinates: { lat: spot.lat, lon: spot.lon },
          notes: spot.notes,
        });
      }
    }

    // Sort by region and then by spot name
    results.sort((a, b) => {
      if (a.region !== b.region) {
        return a.region.localeCompare(b.region);
      }
      return a.spot.localeCompare(b.spot);
    });

    console.log(`Wind data fetch complete! ${results.length} spots processed.`);

    return NextResponse.json({
      success: true,
      data: results,
      totalSpots: results.length,
      spotsWithGoodWind: results.filter((spot) => spot.canKite).length,
      lastUpdated: new Date().toISOString(),
      source: "OpenWeatherMap",
    });
  } catch (error) {
    console.error("Wind API Error:", error);
    return NextResponse.json(
      {
        error: "Fout bij ophalen winddata",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
