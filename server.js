const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql");




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));

app.get("*", (req, res) => {
  res.sendFile('index.html', {
    root
  });
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});



const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "chatDB"
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});