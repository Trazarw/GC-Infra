var http = require('http');
var request = require('sync-request');

http.createServer(function (req, res) {
  var res = request('GET', 'http://0.0.0.0:8081');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Proxied Message:\n' + res.getBody());
}).listen(3000, '0.0.0.0');

	