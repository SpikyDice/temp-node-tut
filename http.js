const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log(req.url);
    res.end("Welcome to our Homepage");
  }
  if (req.url === "/about") {
    res.end("Here is our short story");
  } else {
    res.end(`
    <h1>OOps</h1>
    `);
  }
});

server.listen(5000);
