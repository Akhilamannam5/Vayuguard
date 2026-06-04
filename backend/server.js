const express = require("express");
const cors = require("cors");

const aqiRoutes = require("./routes/aqiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "VayuGuard Backend Running 🚀"
  });
});

app.use("/api/aqi", aqiRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});