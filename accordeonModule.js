'use strict'

var accordeonModule = function (data) {

	this.data = {id: 2};
	
	$h.d('.accordion-module', 'click', '.item', function (e) {

			var open = document.querySelectorAll('.box:not(.collapsed-box)');


			for (var i = 0; i < open.length; i++ ) {

				open[i].classList.add('collapsed-box');
	 		}

	 		var openElem = this.closest('.box-default');
			openElem.classList.remove('collapsed-box');
	})

	

		};


accordeonModule.prototype = Object.create(App.prototype);
accordeonModule.constructor = accordeonModule;
