var Router = Backbone.Router.extend({
	routes: {
		'' : 'index',
	 	':bookmarklet_id' : 'show'
	},
	
	index: function() {
		console.log("Index");
	},

	show: function(bookmarklet_id) {
		var bookmarklet = app.Bookmarklets.get(bookmarklet_id);

		console.log("Bookmarklet?");
		console.log(bookmarklet);
	}
});
