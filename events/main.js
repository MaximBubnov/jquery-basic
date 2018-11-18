jQuery(document).ready(function() {
	
	//СОБЫТИЯ
	//Клики мышью (click, dbclick)
	$('h2').click(function() {
		console.log('U click h2');
	});

	//Полеты над элементом :) (mouseenter, mouseleave)
	$('h2').mouseenter(function(){
		$(this).toggleClass('blue');
	});
	$('h2').mouseleave(function(){
		$(this).toggleClass('blue');
	});

	//Формы (focus, change)
	$('input').focus(function() {
		console.log('Field in focus');
	})

	//Что-то введем в инпут и нажмем Enter!!
	$('input').change(function() {
		$('#userName').text(', ' + $(this).val());
	})

	//Клавиатура (keypress, keydown, keyup)
	//Что-то пишем и это сразу пишется в span
	$('input').keyup(function() {
		$('#userName').text(', ' + $(this).val());
	})
});