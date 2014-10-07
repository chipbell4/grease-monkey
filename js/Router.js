var Router = Backbone.Router.extend({
	routes: {
		'' : 'index',
	 	':bookmarklet_id' : 'show'
	},
	
	index: function() {
		app.detail.empty();
	},

	show: function(bookmarklet_id) {
		var bookmarklet = app.Bookmarklets.get(bookmarklet_id);

		// If no bookmarklet found, simply redirect
		if(bookmarklet == null) {
			app.router.navigate('/');
			return;
		}

		// set the bookmarklet as the current detail view
		app.detail.empty();
		var detail_view = new BookmarkletDetailView({
			model: app.Bookmarklets.get(bookmarklet_id)
		});
		detail_view.render();
		app.detail.show(detail_view);
	}
});
