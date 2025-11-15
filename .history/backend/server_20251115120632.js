const http = require("http");

// 1) server olustur

http.createServer((req, res) => {
  res.end("Server Saglikli");
});
