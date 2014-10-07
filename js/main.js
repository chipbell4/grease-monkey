var BookmarkletApp = Backbone.Marionette.Application.extend();

BookmarkletApp.addRegions({
	sidebar: '#sidebar',
	detail: '#detail'
});

BookmarkletApp.addInitializer(function() {
	// Setup the main collection
	BookmarkletApp.Bookmarklets = new BookmarkletCollection();

	// Setup view
	var collection_view = new BookmarkletCollectionView({
		collection: BookmarkletApp.Bookmarklets
	});
	collection_view.render();
	BookmarkletApp.sidebar.show(collection_view);

	// Start routing
	new Router();
	Backbone.history.start();

	// now fetch the collection
	BookmarkletApp.Bookmarklets.fetch();
});

// create an app
var app = new BookmarkletApp();
app.start();
