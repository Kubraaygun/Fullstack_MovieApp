const http = require("http");

// 1) server olustur

const server = http.createServer((req, res) => {
  console.log('Istek Geldi', req.method')
  res.end("Server Saglikli");
});

// 2) belirli bir prota gelen istekleri dinle
const port = 4090;
server.listen(port, () => {
  console.log(`Sunucu port ${port} de calisiyor`);
});
