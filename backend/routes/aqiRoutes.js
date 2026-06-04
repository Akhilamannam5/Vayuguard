const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    city: "Bengaluru",
    aqi: 82,
    status: "Moderate",
    pm25: 45,
    pm10: 62
  });
});

module.exports = router;