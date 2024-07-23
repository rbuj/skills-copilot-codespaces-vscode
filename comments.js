// Create web server
// http.createServer([requestListener]) returns a new instance of http.Server
// requestListener is a function which is automatically added to the 'request' event
// http.createServer([requestListener]) is a shorthand for:
// const server = new http.Server();
// server.on('request', requestListener);
// server.listen(port);
// server.listen(port, hostname, backlog, callback);
// server.listen(path, backlog, callback);
// server.listen(handle, callback);
const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Send the response body "Hello World"
  res.end('Hello World\n');
});

// Listen on port 8080, IP defaults to