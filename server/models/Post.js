var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	label: 'News',
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

Post.add({
	title: { type: String, required: true, },
	weight: {type: Types.Select, options: range(0, 100).join(','), default: '0', index: true},
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'Y', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	listImage: { type: Types.File, storage: storage, note: '1166 x 192', label: 'List Image (1166 x 192)'},
	bannerImagePC: {type: Types.File, storage: storage, note: '1164 x 454', label: 'PC Banner Image (1164 x 454)'},
	bannerImageMobile: {type: Types.File, storage: storage, note: '640 x 314', label: 'Mobile Banner Image (640 x 314)'},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	//categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
});

Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Post.defaultColumns = 'title, weight|20%, state|20%, author|20%, publishedDate|20%';
Post.register();
