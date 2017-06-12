var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {
  
  var id = req.params.id;

  var q = keystone
    .list('Post')
    .model
    .find()
    .where({_id: id});

  q.exec(function(err, results) {
    if (err) {
      res.json({
        err: err,
        data: []
      });
    } else {
      var items = [];
      results.forEach(function (item) {
        // var img = item.image.url;
        // var parts = img.split('/');
        // parts[parts.length - 2] = 'c_fill,e_sharpen:200,g_faces,h_192,w_1166';
        // item.image.url = parts.join('/');

        items.push(item);
      });
      if (items.length <= 0) {
        res.json({
          err: '没找到数据',
          data:null
        })
      } else {
        res.json({
          err: null,
          data: items[0]
        });
      }
    }
  });
  
}