/* App */

'use strict';

var App = function () {
	
	var modul1 = new basicModule(),
	    modul2 = new accordeonModule(),
	    modul3 = new tabsModule();
}

App.prototype.getData = function () {

	return this.data;

}

window.addEventListener('DOMContentLoaded', App);