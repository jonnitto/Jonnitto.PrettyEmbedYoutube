(function() {
	var html = document.documentElement;
	var $popup = false;
	var base = 'jonnitto-prettyembed-popup';
	var markup = '<div class="' + base + '-holder">' +
								'<iframe class="' + base + '-iframe" src="%src%" frameborder="0"%fs%></iframe>' +
							'</div>';
	var popup = document.createElement('div');
	popup.className = base;
	popup.innerHTML = '<div class="' + base + '-inner">' +
							'<button type="button" class="jonnitto-prettyembed-popup-close">&times;</button>' +
							'<div id="popup-youtube" class="' + base + '-content"></div>' +
						'</div>';

	function removeClass(element, cssClass) {
		element.className = element.className.replace(new RegExp('(?:^|\\s)' + cssClass + '(?!\\S)') ,'');
	}

	function closeModal() {
		removeClass(document.body, 'jonnitto-prettyembed-popup-visible');
		setTimeout(function() {
			$popup.innerHTML = '';
		}, 300);
	}

	function openModal(event) {
		var fullscreen = (this.getAttribute('data-fs') == 'true') ? ' allowfullscreen' : '';
		var embed = this.getAttribute('data-embed') || false;

		if (!$popup) {
			document.body.appendChild(popup);
			$popup = document.getElementById('popup-youtube');
		}

		if (embed) {
			event.preventDefault();
			$popup.innerHTML = markup.replace('%src%', embed).replace('%fs%', fullscreen);
			setTimeout(function() {
				document.body.className += ' jonnitto-prettyembed-popup-visible';
			}, 100);
		}
	}

	function closeOnESC(event) {
		if (event.keyCode == 27) {
			if (document.body.className.indexOf('jonnitto-prettyembed-popup-visible') !== -1) {
				closeModal();
			}
		}
	}

	// Attach the events to the html tag (because of the Google Tag Manager)
	Gator(html).on('click', 'a.popup-youtube', openModal);
	Gator(html).on('click', '.jonnitto-prettyembed-popup', closeModal);

	// Close on ESC
	Gator(html).on('keyup', closeOnESC);
})();
