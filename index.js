const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const allData = require('./data/chefData.json')


app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, Chef Recipe Hunter is running...");
});

app.get("/allData", (req, res) => {
    res.send(allData)
})

app.get('/allData/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const selectedData = allData.find(data => data.id === id);
  res.send(selectedData);
})

app.listen(port, () => {
  console.log(`Chef API is running on port ${port}`);
});
