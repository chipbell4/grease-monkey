
var Bookmarklet = Backbone.Model.extend({
	defaults: {
		'code' : ''
	},
	getExecutableLinkHref: function() {
		var codeBody = this.get('code');

		var codeHeader = "(function() {";
		var codeFooter = "})(); void 0;";

		// minify
		var fullCode = codeHeader + codeBody + codeFooter;
		fullCode = fullCode.replace(/\n/g, '').replace(/    /g, '');

		return 'javascript:' + fullCode;
	}
});

modules.exports = Bookmarklet;
