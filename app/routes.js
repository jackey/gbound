var http = require('http');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

  app.get('/backend/*', function (req, res) {
    console.log(req.url.replace('/backend', ''));
    http.get({
      hostname: '127.0.0.1',
      port: '3000',
      encoding: null,
      path: req.url.replace('/backend', ''),
      agent: false
    }, function (apiRes) {
      console.log('后台图片到手!');
      var statusCode = apiRes.statusCode;
      if (statusCode != 200) {
        res.write('404');
        apiRes.resume();
      } else {
        res.writeHead(200, {'Content-Type': 'image/png'});
        apiRes.on('data', function (chunk) {
          res.write(chunk);
        });
        apiRes.on('end', function() {
          console.log('图片内容获取完毕!');
          res.end();
        });
      }
    });
  }).on('error', function(e) {
    console.log('获取后台图片失败');
    res.send('404');
  });

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