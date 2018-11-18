$("h1").css('color', 'green');	

$('#start').click(function () {
	$('#message').html('Hello world! =)')
				 .css('background-color', 'red')
				 .parent()
				 .css('background-color', 'blue')
				 .width(150)
				 .height(50)
});

$('#reset').click(function () {
	$('#message').html('Buy world! =(')
				 .css('background-color', 'red')
				 .parent()
				 .css('background-color', 'black')
				 .width(150)
				 .height(50)
})