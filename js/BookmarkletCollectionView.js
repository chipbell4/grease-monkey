BookmarkletCollectionView = Backbone.Marionette.CompositeView.extend({
	template: '#bookmarklet-collection-template',
	childView: BookmarkletItemView,
	childViewContainer: 'ul',
	events: {
		'click .add-bookmarklet' : 'addBookmarklet'
	},
	addBookmarklet: function() {
		var model = app.Bookmarklets.create({
			title: '',
			code: ''
		});

		app.router.navigate(model.get('id'));
	}
});
