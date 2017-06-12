var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {
  
  var q = keystone.list('Post').paginate({
    page: 1,
    perPage: 1000,
    filters: {
      state: 'published'
    },
  })
  .sort('-publishedDate');

  q.exec(function(err, results) {
    if (err) {
      res.json({
        err: err,
        data: []
      });
    } else {
      res.json({
        err: null,
        data: results.results
      });
    }
  });
  
}