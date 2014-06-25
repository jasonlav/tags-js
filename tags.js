/*!
 * Tags.js - Minimalist Mustache-style tag replacement for simple strings.
 * (c) 2014 Jason Lavorante
 * MIT Licensed.
 *
 * https://github.com/jasonlav/tags-js
 */

function Tags() {}
Tags.get = function (content, tags, strip) {
	if(typeof strip !== "boolean") {
		strip = true;
	}

	if(typeof content === "object") {
		for(var key in content) {
			content[key] = this.get(content[key], tags, strip);
		}
	} else if(typeof content === "string") {
		content = this.replaceTags(content, tags, strip);
	}

	return content;
};

Tags.replaceTags = function(content, tags, strip) {
	return content.replace(/{{(.*?)}}/g, function(tag, key) {
		var replacement = false;

		if(typeof tags[key] === "string") {
			replacement = tags[key];
		}

		if(typeof replacement === "string") {
			return replacement;
		} else if(strip) {
			return "";
		} else {
			return tag;
		}
	});
};