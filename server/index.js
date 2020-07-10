const express = require("express");
const cors = require("cors");
const pdf = require("html-pdf");
const fs = require("fs");
const options = { format: "A3" };

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", express.static(__dirname + "/views"));

const html = fs.readFileSync("server/views/srt-resume.html", "utf-8");
pdf.create(html, options).toFile("server/public/test.pdf", function (err, res) {
  if (err) return console.log(err);
  console.log(res);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Listening on Port: ${port}`));
