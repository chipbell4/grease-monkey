var Bookmarklet = require('./Bookmarklet.js');

var BookmarkletCollection = Backbone.Collection.extend({
	localStorage: new Backbone.LocalStorage("BookmarkletCollection")
});

module.exports = BookmarkletCollection;
