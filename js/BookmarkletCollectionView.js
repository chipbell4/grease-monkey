BookmarkletCollectionView = Backbone.Marionette.CompositeView.extend({
	template: '#bookmarklet-collection-template',
	childView: BookmarkletItemView,
	childViewContainer: 'ul',
	events: {
		'click .add-bookmarklet' : 'addBookmarklet'
	},
	addBookmarklet: function() {
		var model_attributes = {
			title: 'Untitled',
			code: 'console.log(\'Hello World\');'
		};

		var model = app.Bookmarklets.create(model_attributes, {
			wait: true,
			success: function(model) {
				app.router.navigate('/' + model.get('id'), { trigger: true });
			}
		});
	}
});
