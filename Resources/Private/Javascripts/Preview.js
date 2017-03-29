(function() {
	function fixPreview(img) {
		var src = img.getAttribute('src');
		if (img.naturalHeight <= 90 && img.naturalWidth <= 120 && src.indexOf('/default.jpg') == -1) {
			src = src.replace('mqdefault', 'default').replace('hqdefault', 'mqdefault').replace('sddefault', 'hqdefault').replace('maxresdefault', 'sddefault')
			img.setAttribute('src', src);
			setTimeout(function () {
				img.onload = function() {
					fixPreview(img);
				}
			}, 10);
			setTimeout(function () {
				fixPreview(img);
			}, 5000);
		}
	}

	window.prettyEmbedYoutubeFixPreview = function(imgs) {
		// We are on not on a mobile device without autoplay
		if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			if (typeof imgs === 'undefined') {
				imgs = document.querySelectorAll('img.embed-youtube-youtube-preview');
			}
			for (var i = imgs.length - 1; i >= 0; i--) {
				fixPreview(imgs[i]);
			}
		}
	};

	Gator(window).on('load', function() {
		prettyEmbedYoutubeFixPreview();
	});
})();
