jQuery(document).ready(function() {
	//Базовая анимация
	//delay(1000) - задержка в 1с
	//hide(2000) - прячем в течении 2с
	//show(2000) - появляем в течении 2с
	$('.box:first').delay(1000).hide(2000).delay(1000).show(2000);

	//сама анимация
	//{'width' : '200px'} - что изменяем
	//1000 - время
	$('.box:eq(1)').animate({'width' : '200px'}, 1000);

	//слайдер вверх сначала
	//потом вниз
	$('.box:eq(1)').slideUp(2000).slideDown(2000);

	//======================================================
	
	//Взаимодействия с Атрибутами

	//.attr('src') - обращение к атрибуту
	//.attr('src', "img2") - добавление атрибута и что там будет
	console.log($('img').attr('src'))

	//по клику изменим картику плавненько
	$('img').click(function() {
		$(this).fadeOut(500, function() {
			$(this).attr('src', 'https://cdn3.iconfinder.com/data/icons/materia-flat-halloween-free/24/039_025_cat_black_witch_halloween-128.png').fadeIn(500);
		})
	})

	//==========================================================

	//Взаимодействия с классами

	//Добавим класс add
	//Удалить класс remove
	//toogleClass('lead blue') - замена класса
	$('p.lead').click(function() {
		$(this).addClass('blue');
	})

	//===========================================================

	//Клонирование, добавление, перемещение элементов
	$('.lead').click(function() {
		//$(this).text('My text without HTML'); впишем свой текст (не html) вместого старого
		//$(this).html('My text with HTML'); если хотим html вписать, а также текст
		//$(this).append(' My text in the end'); добавим текст в конце
		//$(this).prepend('My text in start'); добавим текст в начале
		//$(this).after('<p>New paragrah</p>'); добавим еще одни тег после нашего тега
		//$(this).wrap('<div class="my"></div>'); обернем наш тег во что-то
		//$(this).unwrap('<div class="wrap"></div>'); убрать обертку над нашим тегом
		//$(this).empty(); очистить содержимое этого тега, но тег остается
		//$(this).remove(); удалить весь тег 
		//$(this).append('<br/>' + $(this).text()); доавляем абазц к нашему тексту 
	})
});