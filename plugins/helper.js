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
		};

		elem.addEventListener(eventType, callback);
	}

	$h.d = function (parent, type, child, callback) {

	 	parent = document.querySelector(parent);

		if (parent == null) {

			console.warn('No elements found!');

			return;
		}

		parent.addEventListener(type, function(e) {

			var target = e.target;

			while(target != parent) {

				if(target.matches(child)) {

					callback.call(target, e);
					return;
				}

				target = target.parentNode;
			}
				
		});
	}
	

		window.$h = $h;
		
})();

	
