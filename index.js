const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  return res.send("Hello Du");
});

app.listen(port, () => console.log(`listening on ${port}`));
