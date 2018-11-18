jQuery(document).ready(function() {
	
	//СЕЛЕКТОРЫ

	//Базовые селекторы (#id, tagName, .class)
	$('p').css('border', 'solid 3px red');

	$('p.lead').css('border', 'solid 3px blue');

	//Селекторы взаимодествия(parent, child, +- etc)
	$('body h2').css('border', 'solid 3px green');

	//тэг h2 и ближайший к нему тэг p = h2 + p
	//все теги p рядом с тегом h2 = h2 ~ p
	$('h2 + p').css('border', 'solid 3px green');

	//Простые фильтры (:first, :last, even, add, eq)
	//первый тэг p из всех тегов p
	//p:eq(0) - обращение к первому р (как массим 0-1-2)
	$('p:first').css('border', 'solid 3px red');

	//Фильтры по содержимому (:has, :parent, :empty)
	//тэг h2, который имеет span
	//(.box:parent) те, кто являются родителями(т.е имеют что-то внутри себя)
	//(.box:empty)  те, кто являются пустыми
	$('h2:has(span)').css('border', 'solid 3px red');

	//Фильтры по атрибутам ([name ~= value] etc)
	//= равно
	//!= неравно
	//^= начинаются с
	//$= заканчиваются на 
	//*= содержат что-то
	$('a[href="http://google.com"]').css('border', 'solid 3px red');

});