const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));
console.log(data);

app.get("/", (req, res) => {
  res.status(200).send(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
