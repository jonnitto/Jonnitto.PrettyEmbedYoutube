(function() {
	var initVideo = function(link) {
		var fullscreen = (link.getAttribute('data-fs') == 'true') ? ' allowfullscreen' : '';
		var embed = link.getAttribute('data-embed') || false;
		var w = link.clientWidth;
		var h = link.clientHeight;
		console.log(embed, w, h);
		if (embed && w && h) {
			var width = ' width="' + w + '"';
			var height = ' height="' + h + '"';
			var div = document.createElement('div');
			div.className = 'embed-youtube play';
			div.style.paddingTop = (parseInt(h) / parseInt(w) * 100) + '%';
			div.innerHTML = '<iframe' + width + height + fullscreen + ' src="' + embed + '" frameborder="0"></iframe>';
			link.parentNode.insertBefore(div, link);
			link.parentNode.removeChild(link);
		}
	};

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		Gator(window).on('load', function() {
			var links = document.querySelectorAll('.embed-youtube');
			for (var i = links.length - 1; i >= 0; i--) {
				initVideo(links[i]);
			}
		});
	} else {
		Gator(document).on('load', 'a.embed-youtube', function(event) {
			event.preventDefault();
			initVideo(this);
		});
	}
})();
