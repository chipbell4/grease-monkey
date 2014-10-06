
var BookmarkletItemView = require('./BookmarkletItemView');

var BookmarkletCollectionView = Backbone.Marionette.CompositeView.extend({
	template: '#bookmarklet-collection-template',
});

module.exports = BookmarkletCollectionView;
