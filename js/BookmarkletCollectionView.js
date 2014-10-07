BookmarkletCollectionView = Backbone.Marionette.CompositeView.extend({
	template: '#bookmarklet-collection-template',
	childView: BookmarkletItemView,
	childViewContainer: 'ul',
	events: {
		'click .add-bookmarklet' : 'addBookmarklet'
	},
	addBookmarklet: function() {
		var model = app.Bookmarklets.create({
			title: 'Untitled',
			code: 'console.log(\'Hello World\');'
		}, { wait: true });

		app.router.navigate(model.get('id'));
	}
});
