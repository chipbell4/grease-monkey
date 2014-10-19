BookmarkletDetailView = Backbone.Marionette.ItemView.extend({

	template: '#bookmarklet-detail-template',

	events: {
		'keyup' : 'save',
		'click .delete-button' : 'deleteBookmarklet'
	},

	onRender: function() {
		var editor_div = this.$('#editor')[0];

		this.editor = ace.edit(editor_div);
		this.editor.setTheme('ace/theme/monokai');
		this.editor.getSession().setMode('ace/mode/javascript');

		// set the code on the editor
		this.editor.getSession().setValue(this.model.get('code'));
	},

	save: function() {
		// update model from view
		this.model.set({
			title: this.$('[name=title]').val().trim(),
			code: this.editor.getSession().getValue()
		});

		this.model.save();
	},

	deleteBookmarklet: function() {
		// Make sure to confirm first
		if(!confirm('Are you sure you want to delete? It\'s a forever commitment!')) {
			return;
		}

		this.model.destroy();
		this.destroy();
		app.router.navigate('/', { trigger: true });
	}
});
