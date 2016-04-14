(function() {
	var $popup = false;
	var removeClass = function(element, cssClass) {
		element.className = element.className.replace(new RegExp('(?:^|\\s)' + cssClass + '(?!\\S)') ,'');
	};
	var base = 'jonnitto-prettyembed-popup';
	var html = '<div class="' + base + '-holder">' +
								'<iframe class="' + base + '-iframe" src="%src%" frameborder="0"%fs%></iframe>' +
							'</div>';
	var popup = document.createElement('div');
	popup.className = base;
	popup.innerHTML = '<div class="' + base + '-inner">' +
							'<button type="button" class="jonnitto-prettyembed-popup-close">&times;</button>' +
							'<div id="popup-youtube" class="' + base + '-content"></div>' +
						'</div>';

	var closeModal = function() {
		removeClass(document.body, 'jonnitto-prettyembed-popup-visible');
		setTimeout(function() {
			$popup.innerHTML = '';
		}, 300);
	};

	var openModal = function(event) {
		if (!$popup) {
			document.body.appendChild(popup);
			$popup = document.getElementById('popup-youtube');
		}

		var fullscreen = (this.getAttribute('data-fs') == 'true') ? ' allowfullscreen' : '';
		var embed = this.getAttribute('data-embed') || false;
		if (embed) {
			event.preventDefault();
			$popup.innerHTML = html.replace('%src%', embed).replace('%fs%', fullscreen);
			setTimeout(function() {
				document.body.className += ' jonnitto-prettyembed-popup-visible';
			}, 100);
		}
	};

	Gator(document).on('click', 'a.popup-youtube', openModal);
	Gator(document).on('click', '.jonnitto-prettyembed-popup', closeModal);

	// Close on ESC
	Gator(document).on('keyup', function(event) {
		if (event.keyCode == 27) {
			if (document.body.className.indexOf('jonnitto-prettyembed-popup-visible') !== -1) {
				closeModal();
			}
		}
	});
})();
