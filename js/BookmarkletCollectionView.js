BookmarkletCollectionView = Backbone.Marionette.CompositeView.extend({
	template: '#bookmarklet-collection-template',
	childView: BookmarkletItemView,
	childViewContainer: 'ul'
});
