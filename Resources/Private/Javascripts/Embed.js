(function() {
	var initVideo = function(link) {
		var fullscreen = (link.getAttribute('data-fs') == 'true') ? ' allowfullscreen' : '';
		var embed = link.getAttribute('data-embed') || false;
		var image = link.getElementsByTagName('img')[0];
		var imageSrc = image.getAttribute('src') || false;
		var w = image.width;
		var h = image.height;
		if (embed && w && h) {
			var width = ' width="' + w + '"';
			var height = ' height="' + h + '"';
			var div = document.createElement('div');
			div.setAttribute('data-img', imageSrc);
			div.setAttribute('data-embed', embed);
			div.setAttribute('href', link.getAttribute('href'));
			div.setAttribute('target', link.getAttribute('target'));
			if (fullscreen) {
				div.setAttribute('data-fs', 'true');
			}
			div.className = link.className + ' play';
			div.style.paddingTop = (parseInt(h) / parseInt(w) * 100) + '%';
			div.innerHTML = '<iframe' + width + height + fullscreen + ' src="' + embed + '" frameborder="0"></iframe>';
			link.parentNode.insertBefore(div, link);
			link.parentNode.removeChild(link);
		}
	};

	window.prettyEmbedYoutubeInit = function(links) {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			if (typeof links === 'undefined') {
				links = document.querySelectorAll('a.embed-youtube');
			}
			for (var i = links.length - 1; i >= 0; i--) {
				initVideo(links[i]);
			}
		}
	};
	Gator(window).on('load', prettyEmbedYoutubeInit);

	Gator(document).on('click', 'a.embed-youtube', function(event) {
		event.preventDefault();
		initVideo(this);
	});
})();
