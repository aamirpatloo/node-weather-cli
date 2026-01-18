import https from "https";

// Get city from command line
const city = process.argv[2];

if (!city) {
  console.log("❌ Please provide a city name.");
  console.log('Example: node index.js "London"');
  process.exit(1);
}

const url = `https://wttr.in/${encodeURIComponent(city)}?format=j1`;

function fetchWeather() {
  https.get(url, (res) => {
    let data = "";

    res.on("data", chunk => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        const weatherData = JSON.parse(data);

        if (!weatherData.current_condition) {
          console.log("❌ City not found.");
          return;
        }

        const temp = weatherData.current_condition[0].temp_C;
        const desc = weatherData.current_condition[0].weatherDesc[0].value;

        console.log(`Weather in ${city}: ${temp}°C, ${desc}`);
      } catch (error) {
        console.log("❌ Error parsing weather data.");
      }
    });

  }).on("error", () => {
    console.log("❌ Failed to fetch weather data.");
  });
}

fetchWeather();
