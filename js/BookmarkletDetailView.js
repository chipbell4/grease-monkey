BookmarkletDetailView = Backbone.Marionette.ItemView.extend({

	template: '#bookmarklet-detail-template',

	onRender: function() {
		var editor_div = this.$('#editor')[0];

		this.editor = ace.edit(editor_div);
		this.editor.setTheme('ace/theme/monokai');
		this.editor.getSession().setMode('ace/mode/javascript');
	}
});
