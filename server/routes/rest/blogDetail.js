var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {
  
  var id = req.params.id;
  var max = 1000;
  // 当前
  var q = keystone
    .list('Post')
    .paginate({
      page: 1,
      perPage: 1,
    })
    .find()
    .sort('-weight')
    .where({_id: id});

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
      if (items.length <= 0) {
        res.json({
          err: '没找到数据',
          data:null
        })
      } else {
        var crtitem = items[0].toObject();
        console.log(['crt weight', crtitem.weight]);

        // 把所有的取出来

        var weight = crtitem;
        var q = keystone
          .list('Post')
          .paginate({
              page: 1,
              perPage: max,
          })
          .select('_id')
          .sort('-weight')
          .lean();

        q.exec(function (err, results) {

          if (err) {
            res.json({
              err: err,
              data: []
            });
          } else {
            // 找上一个
            var previtem = null, nextitem = null;
            console.log(['results', results]);
            for (var i = 0; i < results.results.length; i++) {
              console.log(['yes', results.results[i]._id.toString() == crtitem._id.toString(), results.results[i]._id, crtitem._id]);
              if (results.results[i]._id.toString() == crtitem._id.toString()) {
                if (i > 0) previtem = results.results[i-1];
                if (i < results.results.length - 1) nextitem = results.results[i + 1]; 
              }
            }

            if (previtem) {
              crtitem.prev = previtem._id;
            } else {
              crtitem.prev = null;
            }
            if (nextitem) {
              crtitem.next = nextitem._id;
            } else {
              crtitem.next = null;
            }
            
            res.json({
              err: null,
              data: crtitem
            });
          }
        });


      }
    }
  });
  
}