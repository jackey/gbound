var http = require('http');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

  app.get('/rest/*', function (req, res) {


    var errorData = {
      err: '服务器异常',
      data: null
    };
    http.get({
      hostname: '127.0.0.1',
      port: '3000',
      path: req.url,
      agent: false
    }, function (apiRes) {
      var statusCode = apiRes.statusCode;
      if (statusCode != 200) {
        res.json(errorData);
        apiRes.resume();
      } else {
        apiRes.setEncoding('utf8');
        var rawData = '';
        apiRes.on('data', function (chunk) {
          rawData += chunk;
        });

        apiRes.on('end', function(){
          try {
            var jsonData = JSON.parse(rawData);
            res.json(jsonData);
          } catch (e) {
            console.log('后台转换接口 rawData -> json 失败' + e.toString());
            res.json(errorData);
          }
        });
      }
    });
  }).on('error', function (e) {
    console.log('请求后台接口失败');
    res.json(errorData);
  });


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};