const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  if (req.url == "/") {
    fs.readFile("index.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
        console.log("data", data);
      }
    });
  } else if (req.url == "/login") {
    res.end("login successful");
  } else if (req.url == "/signup") {
    res.end("signup successful");
  } else if (req.url == "/contact") {
    res.end("contact successful");
  } else if (req.url == "/service") {
    res.end("service successful");
  }
});

server.listen(8090, () => {
  console.log("listening on port 8090");
});
