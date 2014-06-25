function Tags() {}
/**
 * Get
 */
Tags.get = function (content, tags, strip) {
	if(typeof strip !== "boolean") {
		strip = false;
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

/**
 * Replace tags
 */
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