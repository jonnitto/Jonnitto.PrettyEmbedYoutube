(function () {
	var 
	mobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))? true : false,
	addEventListener = function (element, event, handler) {
		if (element.addEventListener) {
			element.addEventListener(event, function (e) {
				if (handler.call(this, e) === false) {
					e.preventDefault();
				}
			});
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, function (e) {
				if (handler.call(element, e) === false) {
					e.returnValue = false;
				}
			});
		}
	},
	getRatio = function (height, width) {
		return ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';
	},
	initVideo = function (link) {
			var
			fs = link.getAttribute('data-fs') || false,
			embed = link.getAttribute('data-embed') || false,
			w = link.childNodes[0].width,
			h = link.childNodes[0].height;
			if (embed) {
				var 
				width = w ? ' width="' + w + '"' : '',
				height = h ? ' height="' + h + '"' : '',
				fullscreen = fs ? ' allowfullscreen' :'';
				link.className += ' play';
				link.innerHTML = '<iframe' + width + height + fullscreen + '" src="' + embed + '" frameborder="0"></iframe>';
				link.style.paddingTop = getRatio(h,w);
				return false;
			}
	};

	addEventListener(document,'click',function (e) {
		var link = e.target.parentNode;
		if (link) {
			if (link.className.indexOf('embed-youtube') > -1) {
				initVideo(link);
				return false;
			}
		}
	});

	if (mobile) {
		var links = document.getElementsByClassName('embed-youtube');
		for (var i = links.length - 1; i >= 0; i--) {
			initVideo(links[i]);
		};
	}

})();