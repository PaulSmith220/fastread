function highlight_w(word){
var h_num = 0;
	switch(word.length) {
		case 1: h_num = 0;
				break;
		case 2:
		case 3:
		case 4:
		case 5: h_num = 1;
				break;
		case 6:
		case 7:
		case 8:
		case 9: h_num = 2;
				break;
		case 10:
		case 11:
		case 12:
		case 13: h_num = 3;
				 break;
		default: h_num = 4;
	}
	var p_1 = word.slice(0, h_num)	;
	var b   = word.slice(h_num, h_num + 1);
	var p_2 = word.slice(h_num + 1, word.length);
	p_2 = p_2.replace('.','');
	var res = p_1 + '<span class="highlighted">' + b +'</span>' + p_2;
	var add = '';
	for (var i = 0; i < (4-h_num); i++){
		add += '_';
	}
	return '<span class="inv">'+add+'</span>' + res;
}

var div = document.getElementById('reader');
function show (time){
	var w = text_arr.shift();
	var t = time + w.length*(time/10);
	t += w.indexOf('.') != -1 ? time*2 : 0;
	div.innerHTML = highlight_w(w);
	if (text_arr.length > 0){
		setTimeout(function(){ show(time);}, t)
	}
}

function read(){
	div = document.getElementById('reader');
	text = document.getElementById('text').value;
	text.replace(/\n/g, ' ');
	text_arr = text.split(' ');
	show(100);
}
