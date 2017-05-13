'use strict'

var tabsModule = function(data) {

	this.data = {id:3};
	console.log('tabs');

	$h.d('.tabs-module', 'click', '.tab > a', function (e) {

		var activeEl = this.closest('.nav-tabs-custom.tabs-module').querySelectorAll('.tabs-active-class');

		activeEl.forEach(function(item) {

			item.classList.remove('tabs-active-class');
		});

		var containerId = this.getAttribute('href').replace('#tab_label-','');

		this.parentNode.classList.add('tabs-active-class');
		$h('.tab_container-' + containerId)[0].classList.add('tabs-active-class');
	});
}

tabsModule.prototype = Object.create(App.prototype);
tabsModule.prototype.constructor = tabsModule;


