import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/api/weather", async (req, res) => {
  try {
    const city = req.query.city || "Dublin";
    const response = await axios.get("http://api.weatherstack.com/current", {
      params: {
        access_key: process.env.WEATHERSTACK_API_KEY,
        query: city,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Weather fetch failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
