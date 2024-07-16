const cors_proxy = require('cors-anywhere');
const http = require('http');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
  }).emit('request', req, res);
});

server.listen(port, host, () => {
  console.log(`Running CORS Anywhere on ${host}:${port}`);
});
