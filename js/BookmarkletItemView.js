BookmarkletItemView = Backbone.Marionette.ItemView.extend({
	template: '#bookmarklet-item-template',
	tagName: 'li',
	events: {
		'click .edit' : 'edit'
	},
	edit: function(evt) {
		console.log('EDITING');
	}
});
