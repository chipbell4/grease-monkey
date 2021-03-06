var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

function utf8_to_b64( str ) {
	return encodeURIComponent( window.btoa( str ));
}

function b64_to_utf8( str ) {
	return  window.atob(decodeURIComponent( str ));
}

var title = document.getElementById('title');
var link = document.getElementById('link');
var static_link = document.getElementById('static_link');

// a function to update the javascript link
function updateLinkHref() {
	var codeHeader = "(function() {";
	var codeFooter = "})(); void 0;";
	var codeBody = editor.getSession().getValue();

	// minify
	var full_code = codeHeader + codeBody + codeFooter;
	full_code = full_code.replace(/\n/g, '').replace(/    /g, '');

	link.href = 'javascript: ' + full_code;

	var baseUrl = '';
	static_link.href = baseUrl + '#' + utf8_to_b64(codeBody);

}

function updateLinkTitle() {
	link.innerHTML = title.value;
}


// read the hash and update the text body (this is how the bookmarking workings)
editor.getSession().setValue(b64_to_utf8(window.location.hash.substring(1)));

updateLinkTitle();
updateLinkHref();

// setup events
editor.on('change', updateLinkHref);
title.onkeyup = updateLinkTitle;
