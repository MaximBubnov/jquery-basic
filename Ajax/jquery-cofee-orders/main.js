var link = "https://learnwebcode.github.io/json-example/animals-1.json"

jQuery(document).ready(function() {
	var animal = $('#animal');
	var $name = $('#name');
	var $species = $('#sp');

	$.ajax({
		type: 'GET',
		url: 'https://learnwebcode.github.io/json-example/animals-1.json',
		success: function(data) {
			$.each(data, function(i, item){
				animal.append('<li>Name: ' + item.name + ', Species: ' + item.species + '</li>');
			})
		},
		error: function() {
			alert('error loading data');
		}
	});

	$('#add').click(function() {
		var addAnimal = {
			name: $name.val(),
			species: $species.val(),
		};

		$.ajax({
			type: 'POST',
			url: 'https://learnwebcode.github.io/json-example/animals-1.json',
			data: addAnimal,
			success: function(newAnimal) {
				animal.append('<li>Name: ' + newAnimal.name + ', Species: ' + newAnimal.species + '</li>');
			},
			error: function() {
				alert('error saving');
			}

		})
	})
});