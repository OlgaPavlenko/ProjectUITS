'use strict'

var tabsModule = function(data) {

	this.data = {id:3};
	console.log('tabs');

		$h.d('.tabs-module', 'click', '.tab', function (e) {

			var tabsLink = document.querySelectorAll('.tab'),
				  tabsContent = document.querySelectorAll('.tab-pane'),
				  tabsLinkId = this.closest('li').firstChild.getAttribute('href'),
				  cleartabsLinkId = tabsLinkId.replace('#', '');
				  

				for(var i = 0; i < tabsLink.length; i++) {

				  if (tabsLink[i].classList.contains('active')) {

				  	tabsLink[i].classList.remove('active');	

				  }	

				 }

				this.closest('li').classList.add('active');
	});

}


tabsModule.prototype = Object.create(App.prototype);
tabsModule.prototype.constructor = tabsModule;


