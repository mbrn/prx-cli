var http = require('http');

module.exports = function runProxyServer(port, target) {
  http.createServer(onRequest).listen(port);  
  console.log("Server started");

  function onRequest(client_req, client_res) {
    console.log('Requested: ' + client_req.url);
  
    var options = {
      hostname: target,
      port: 80,
      path: client_req.url,
      method: client_req.method
    };
  
    var proxy = http.request(options, function (res) {
      res.pipe(client_res, {
        end: true
      });
    });
  
    client_req.pipe(proxy, {
      end: true
    });
  }
}
