'use strict'

var tabsModule = function(data) {

	this.data = {id:3};
	console.log('tabs');

		$h.d('.tabs-module', 'click', '.tab', function (e) {

			var open = document.querySelectorAll('.tab:not(.tabs-close)');


			for (var i = 0; i < open.length; i++ ) {

				open[i].classList.add('tabs-close');
	 		}

	 		//var openElem = this.closest('.tab');
			//openElem.classList.remove('tabs-close');
	})

}


tabsModule.prototype = Object.create(App.prototype);
tabsModule.prototype.constructor = tabsModule;


