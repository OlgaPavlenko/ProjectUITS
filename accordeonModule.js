'use strict'

var accordeonModule = function (data) {

	this.data = {id: 2};
	
	var elem = document.querySelector('.content');

		elem.addEventListener('click', function (e) {

			if (e.target.classList.contains('fa-plus') ) {

					var openElem = e.target.closest('.box-default');
						openElem.classList.remove('collapsed-box');
			}

		});
}

accordeonModule.prototype = Object.create(App.prototype);
accordeonModule.constructor = accordeonModule;
