const express = require("express");
const body = require("body-parser");
const axios = require("axios");
const app = express();
const http = axios.default.create();
app.get("/", async (req, res) => {
  try {
    const response = await http.get(process.env.LOCAL_ENDPOINT);
    res.json({ data: response.data });
  } catch (e) {
    res.json({ data: e.message });
  }
});

app.listen(process.env.PORT || 8080, "0.0.0.0", () => {
  console.log("listening in port " + (process.env.PORT || 8080));
});
