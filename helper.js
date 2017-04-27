'use strict';


(function () {

	var $h = function (seletor) {

		return document.querySelectorAll(seletor);
	};

	$h.on = function (selector, eventType, callback) {

		var elem = document.querySelector(selector);

		if (elem == null) {

			console.warn('No elements found!');
			return;
		}

		elem.addEventListener(eventType, callback);
	}

		window.$h = $h;
		
})();

	
