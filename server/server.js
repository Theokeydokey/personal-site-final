import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/api/weather", async (req, res) => {
  const city = req.query.city || "Dublin";
  const apiKey = process.env.WEATHERSTACK_API_KEY;
  const url = `https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Weather API fetch failed:", error.message);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
