var keystone = require('keystone');
var async = require('async');
var url = require('url');

exports = module.exports = function (req, res) {
  
  var num = 1000; // 默认显示所有的新闻
  var parsedURL = url.parse(req.url, true);
  if (parsedURL) {
    num = parsedURL.query.num || num;
  }

  var q = keystone.list('Post').paginate({
    page: 1,
    perPage: num,
    filters: {
      state: 'published'
    },
  })
  .sort('+weight');

  q.exec(function(err, results) {
    if (err) {
      res.json({
        err: err,
        data: []
      });
    } else {
      var items = [];
      results.results.forEach(function (item) {
        // var img = item.image.url;
        // var parts = img.split('/');
        // parts[parts.length - 2] = 'c_fill,e_sharpen:200,g_faces,h_192,w_1166';
        // item.image.url = parts.join('/');

        items.push(item);

      });
      res.json({
        err: null,
        data: items
      });
    }
  });
  
}