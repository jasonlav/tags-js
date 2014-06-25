#Tags.js
####Minimalist [Mustache]-style tag replacement for simple strings.

Installation
------------

Include tag.js in your HTML file; tag.js has no dependencies. Tag.js is incredibly lightweight (<1kb) and efficient.

``` html
<script src="tags.js"></script>
```

Usage
-----
Simple
``` javascript
var tags = {
	firstName: "John",
	lastName: "Smith"
};
var content = "Welcome {{firstName}} {{lastName}}.";
var message = Tags.get(content, tags); //"Welcome John Smith."
```

By default, Tags.js will remove all tags even if a matching value is not provided. Mustache and Handlebars function in the same manner. This behavior can be changed by disabling tag stripping.

Tag stripping enabled (default)
``` javascript
var tags = {
	lastName: "Smith"
};
var content = "Welcome {{first}} {{lastName}}.";
var message = Tags.get(content, tags); //"Welcome {{first}} Smith."
```

Tag stripping disabled
``` javascript
var tags = {
	lastName: "Smith"
};
var content = "Welcome {{first}} {{lastName}}.";
var message = Tags.get(content, tags, false); //"Welcome  Smith."
```

Tag.js does not escape strings like [Mustache] and [Handlebars]. This library is designed for tag replacement on simple strings such as paths and phases. For a complete template solution see [Mustache] or [Handlebars].

Compatibility
-------------
Tags.js has been tested in all modern browsers and Internet Explorer 7+.

License
-------------
Released under [MIT License].
[MIT License]: http://mit-license.org/
[Mustache]: http://mustache.github.io/
[Handlebars]: http://handlebarsjs.com/