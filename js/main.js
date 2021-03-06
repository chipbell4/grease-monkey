var app = new Backbone.Marionette.Application();

app.addRegions({
	sidebar: '#sidebar',
	detail: '#detail'
});

app.addInitializer(function() {
	// Setup the main collection
	app.Bookmarklets = new BookmarkletCollection();

	// Setup view
	var collection_view = new BookmarkletCollectionView({
		collection: app.Bookmarklets
	});
	collection_view.render();
	app.sidebar.show(collection_view);

	// now fetch the collection
	app.Bookmarklets.fetch({
		success: function() {
			// Start routing
			app.router = new Router();
			Backbone.history.start();
		}
	});
});

// create an app
app.start();
