const http = require("http");
const fs = require("fs");

console.log(__dirname);
console.log(__filename);

global.tech = "node";
console.log(tech);
console.log(process.version);

fs.writeFileSync("demo.txt", "Hello Developer...");
fs.readFile("demo.txt", "utf8", (err, data) => {
  console.log(data);
});

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.write("Server is working...");
  res.end();
});

server.listen(5000, () => {
  console.log("Server is working");
});
