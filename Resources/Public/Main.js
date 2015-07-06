(function () {
	var mobile,addEvent,getClass,getRatio,initVideo,links;

	mobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))? true : false;
	addEvent = function(el, type, handler) {
		if (el.attachEvent) {
			el.attachEvent('on'+type, handler);
		} else {
			el.addEventListener(type, handler);
		}
	};
	if (typeof document.getElementsByClassName !== 'undefined') {
		getClass = function(value) {
			return document.getElementsByClassName(value);
		};
	} else if (typeof document.querySelectorAll !== 'undefined') {
		getClass = function(value) {
			return document.querySelectorAll('.' + value);
		};
	} else {
		getClass = function(value) {
			var
			a = [],
			re = new RegExp('(^| )' + value + '( |$)'),
			els = document.getElementsByTagName('*');
			for(var i=0,j=els.length; i<j; i++) {
				if(re.test(els[i].className))a.push(els[i]);
			}
			return a;
		};
	}
	getRatio = function (height, width) {
		return ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';
	};
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
			}
	};
	links = getClass('embed-youtube');

	for (var i = links.length - 1; i >= 0; i--) {
		if (mobile) {
			initVideo(links[i]);
		} else {
			/* jshint -W083 */
			addEvent(links[i],'click', function (event) {
				event.preventDefault();
				initVideo(this);
			});
			/* jshint +W083 */
		}
	}
})();
