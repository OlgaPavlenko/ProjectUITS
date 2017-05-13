'use strict'

var bannerModule = function (data) {

	this.data = {id:4};
	console.log('banner');

}

bannerModule.prototype = Object.create(App.prototype);
bannerModule.prototype.constructor = bannerModule;