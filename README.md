# node-weather-cli

A small Node.js command-line tool that fetches the current weather for a given city using the public wttr.in API.

Usage

- Run the CLI from the project folder with a city name:

```powershell
node index.js "London"
```

Example output:

```
Weather in London: 7°C, Overcast
```

Notes

- Requires Node.js (v14+ recommended). The project uses ESM (`type": "module"` in `package.json`).
- The app queries `https://wttr.in/<city>?format=j1` and prints temperature and description.

Feel free to request nicer formatting or additional details (humidity, wind, etc.).
