var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var File = new keystone.List('File', {
  label: 'File',
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
});

function range(begin, end) {
  let nums = [];
  for (var i = 0; i < end; i++ ) nums.push(i)

  return nums
}

var storage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  schema: {
    originalname: true,
    url: true
  },
  fs: {
    path: './uploads',
    publicPath: '/files',
  }
});

File.add({
  title: { type: String, required: true, },
  file1: { type: Types.File, storage: storage},
  file2: { type: Types.File, storage: storage},
  file3: { type: Types.File, storage: storage},
  file4: { type: Types.File, storage: storage},
  file5: { type: Types.File, storage: storage},
  file6: { type: Types.File, storage: storage},
  file7: { type: Types.File, storage: storage},
  file8: { type: Types.File, storage: storage},
  file9: { type: Types.File, storage: storage},
  file10: { type: Types.File, storage: storage},
});

File.register();
