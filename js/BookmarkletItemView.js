BookmarkletItemView = Backbone.Marionette.ItemView.extend({
	template: '#bookmarklet-item-template',
	tagName: 'li',
	modelEvents: {
		'change' : 'render'
	},
	events: {
		'click .edit' : 'edit'
	},
	edit: function(evt) {
		console.log('EDITING');
	}
});
