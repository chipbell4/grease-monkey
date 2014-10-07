BookmarkletDetailView = Backbone.Marionette.ItemView.extend({

	modelEvents: {
		'change' : 'render'
	},

	initialize: function() {
		this.editor = ace.edit('editor');
		this.editor.setTheme('ace/theme/monokai');
		this.editor.getSession().setMode('ace/mode/javascript');

		this.editor.on('change', this.refreshModelFromEditor);
	},

	refreshModelFromEditor: function() {
		this.model = this.model || new Bookmarklet();

		this.model.set('code', this.editor.getSession().getValue());
	}
});
