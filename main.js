function sound() {
	var audio = new Audio(); // Создаём новый элемент Audio
	audio.src = 'nope.mp3'; // Указываем путь к звуку "клика"
	audio.autoplay = true; // Автоматически запускаем
	
}
function yes(count) {
	var audio = new Audio(); // Создаём новый элемент Audio
	audio.src = 'yes.mp3'; // Указываем путь к звуку "клика"
	audio.autoplay = true; // Автоматически запускаем
	for (var i = 1; i < count; i+=1) {
		try {
			var elem = document.getElementById(i);
			elem.parentNode.removeChild(elem);
		}
		catch {}
	}
	for (var i = count+1; i < 10; i+=1) {
		try {
			var elem = document.getElementById(i);
			elem.parentNode.removeChild(elem);
		}
		catch {}
	}
}
function d_1() {
	var elem = document.getElementById(1);
	elem.parentNode.removeChild(elem);
}
function d_2() {
	var elem = document.getElementById(2);
	elem.parentNode.removeChild(elem);
}
function d_3() {
	var elem = document.getElementById(3);
	elem.parentNode.removeChild(elem);
}
function d_4() {
	var elem = document.getElementById(4);
	elem.parentNode.removeChild(elem);
}
function d_5() {
	var elem = document.getElementById(5);
	elem.parentNode.removeChild(elem);
}
function d_6() {
	var elem = document.getElementById(6);
	elem.parentNode.removeChild(elem);
}
function d_7() {
	var elem = document.getElementById(7);
	elem.parentNode.removeChild(elem);
}
function d_8() {
	var elem = document.getElementById(8);
	elem.parentNode.removeChild(elem);
}
function d_9() {
	var elem = document.getElementById(9);
	elem.parentNode.removeChild(elem);
}