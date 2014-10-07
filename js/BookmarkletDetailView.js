BookmarkletDetailView = Backbone.Marionette.ItemView.extend({

	template: '#bookmarklet-detail-template',

	events: {
		'keyup' : 'save'
	},

	onRender: function() {
		var editor_div = this.$('#editor')[0];

		this.editor = ace.edit(editor_div);
		this.editor.setTheme('ace/theme/monokai');
		this.editor.getSession().setMode('ace/mode/javascript');
	},

	save: function() {
		// update model from view
		this.model.set({
			title: this.$('[name=title]').val().trim(),
			code: this.editor.getSession().getValue()
		});

		this.model.save();
	}
});
