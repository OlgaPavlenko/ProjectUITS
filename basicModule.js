'use strict'

var basicModule = function (data) {

	this.data = {id: 1};
	console.log(9999);
}

basicModule.prototype = Object.create(App.prototype);
basicModule.prototype.constructor = basicModule;

