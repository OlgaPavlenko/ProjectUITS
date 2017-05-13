'use strict' 

var accordeonModule = function (data) { 
	
		this.data = {id:2};
		console.log('accordeon');
	
			$h.d('.accordion-module', 'click', '.btn-box-tool', function(e) {
				
				var openElem = e.target.closest('.box-default');
				
				
					if (openElem.classList.contains('collapsed-box') === true) {

						openElem.classList.remove('collapsed-box');
						
						this.firstChild.classList.replace('fa-plus', 'fa-minus');
						
					}

					else if (openElem.classList.contains('collapsed-box') === false) {

						openElem.classList.add('collapsed-box');

						this.firstChild.classList.replace('fa-minus', 'fa-plus');
			
		}
	
			
	});


} 

accordeonModule.prototype = Object.create(App.prototype); 
accordeonModule.prototype.constructor = accordeonModule;