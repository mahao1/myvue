import {fillzero} from './fillzero.js';

export const date = function(input){
	var d = new Date();
	var year = d.getFullYear();
	var month = fillzero(d.getMonth()+1);
	var day = fillzero(d.getDate());
	var hours = fillzero(d.getHours());
	var minutes = fillzero(d.getMinutes());
	var seconds = fillzero(d.getSeconds());
	return year+'年'+month+'月'+day+'日'+' '+hours+':'+minutes+':'+seconds;
}
