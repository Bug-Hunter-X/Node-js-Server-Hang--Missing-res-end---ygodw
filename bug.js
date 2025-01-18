const http = require('http');

const server = http.createServer((req, res) => {
  // This is a common mistake: missing res.end() after sending the response.
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello, World!');
  // Missing res.end() here will keep the connection open indefinitely
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});