(function() {
	function replaceTag(element, tagName) {
		if (typeof element === 'object' && typeof tagName === 'string') {
			var originalElement = element;
			var originalTag = originalElement.tagName;
			var startRX = new RegExp('^<' + originalTag, 'i');
			var endRX = new RegExp(originalTag + '>$', 'i');
			var startSubst = '<' + tagName;
			var endSubst = tagName + '>';
			var wrapper = document.createElement('div');
			wrapper.innerHTML = originalElement.outerHTML.replace(startRX, startSubst).replace(endRX, endSubst);
			var newElement = wrapper.firstChild;
			element.parentNode.replaceChild(newElement, element);
			return newElement;
		}
	}

	function initVideo(link) {
		var fullscreen = (link.getAttribute('data-fs') == 'true') ? ' allowfullscreen' : '';
		var embed = link.getAttribute('data-embed') || false;
		var image = link.getElementsByTagName('img')[0];
		var imageSrc = image.getAttribute('src') || false;
		var w = image.width;
		var h = image.height;
		if (embed && w && h) {
			var element = replaceTag(link, 'div');
			var width = ' width="' + w + '"';
			var height = ' height="' + h + '"';
			element.setAttribute('data-img', imageSrc);
			element.className = element.className + ' play';
			element.style.paddingTop = (parseInt(h) / parseInt(w) * 100) + '%';
			element.innerHTML = '<iframe' + width + height + fullscreen + ' src="' + embed + '" frameborder="0"></iframe>';
		}
	}

	function openVideo(event) {
		event.preventDefault();
		initVideo(this);
	}

	window.prettyEmbedYoutubeRestore = function(element) {
		var img = element.getAttribute('data-img') || false;
		if (img) {
			var classesArray = element.className.split(' ');
			var classes = [];
			for (var i = 0; i < classesArray.length; i++) {
				if (classesArray[i] !== 'play') {
					classes[classes.length] = classesArray[i];
				}
			}
			element.className = classes.join(' ');
			element.removeAttribute('style');
			element.innerHTML = '<img src="' + img + '" />';
			replaceTag(element, 'a');
		}
	};

	window.prettyEmbedYoutubeInit = function(links) {
		// We are on a mobile device without autoplay
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			if (typeof links === 'undefined') {
				links = document.querySelectorAll('a.embed-youtube');
			}
			for (var i = links.length - 1; i >= 0; i--) {
				initVideo(links[i]);
			}
		}
	};

	Gator(window).on('load', function() {
		prettyEmbedYoutubeInit();
	});

	// Attach the events to the html tag (because of the Google Tag Manager)
	Gator(document.documentElement).on('click', 'a.embed-youtube', openVideo);
})();
