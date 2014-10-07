var Router = Backbone.Router.extend({
	routes: {
		'' : 'index',
	 	':bookmarklet_id' : 'show'
	},
	
	index: function() {
		app.detail.empty();
	},

	show: function(bookmarklet_id) {
		// set the bookmarklet as the current detail view
		app.detail.empty();
		app.detail.show(new BookmarkletDetailView({
			model: app.Bookmarklets.get(bookmarklet_id)
		}));
	}
});
