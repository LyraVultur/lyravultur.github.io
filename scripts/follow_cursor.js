/*jshint esversion: 6 */
window.addEventListener('mousemove', babychao); 

function babychao(){ 
	"use strict";
	var _el = document.getElementById('lilbab'); 
	_el.style.top = (event.pageY + 16) + "px"; 
	_el.style.left = (event.pageX + 16) + "px"; 
} 