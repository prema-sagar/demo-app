const http = require("http");
const { add, greet, divide } = require("./math");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  if (req.url === "/health") {
    res.end(JSON.stringify({ status: "ok", message: "App is running!" }));
  } else if (req.url === "/demo") {
    const result = {
      greet: greet("World"),
      add: add(10, 32),
      divide: divide(100, 4),
    };
    res.end(JSON.stringify(result));
  } else {
    res.end(JSON.stringify({ message: "Welcome to CI/CD Demo App 🚀" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;
