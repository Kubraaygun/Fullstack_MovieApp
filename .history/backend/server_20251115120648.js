const http = require("http");

// 1) server olustur

const server = http.createServer((req, res) => {
  res.end("Server Saglikli");
});
