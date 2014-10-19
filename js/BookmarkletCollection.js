BookmarkletCollection = Backbone.Collection.extend({
	model: Bookmarklet,
	localStorage: new Backbone.LocalStorage("BookmarkletCollection")
});
