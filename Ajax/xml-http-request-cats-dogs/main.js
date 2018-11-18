/*var myCat = {
	"name": "Meowsalat" ,
	"species": "cat",
	"favFood": "tuna"
}

var myFavColors = ["blue", "green", "purple"];
*/

//join object and arrays above

/*var thePets = [
	{
		"name": "Meowsalat" ,
		"species": "cat",
		"favFood": "tuna"
	},
	{
		"name": "Barky" ,
		"species": "dog",
		"favFood": "carrots"
	}
]*/

//var name = thePets[1].name // return Barky
var pageCounet = 1; 
var animalContainer = document.getElementById('animal-info');
var btn  = document.getElementById('btn');

btn.addEventListener('click', function () {

//ПЕРЕД СОЗДАНИЕМ ЗАПРОСОВ ОТКЛЮЧИ ADDBLOCK
//Создадим запрос
var ourRequest = new XMLHttpRequest();
//Откроем соединение
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounet + '.json');
//c тем, что получим - обработаем
ourRequest.onload = function () {
	/*//в консоле выведем, то что получили
	console.log(ourRequest.responseText); */

	//сохраним это все в переменную
	var ourData = JSON.parse(ourRequest.responseText);
	renderHTML(ourData);
	console.log(ourData[0])
};
//отправим запрос
ourRequest.send();
pageCounet++;

if(pageCounet > 3) {
	btn.classList.add("hide-me");
}

});

function renderHTML(data) {
	var htmlString = "";

	for(var i = 0; i < data.length; i++) {
		htmlString += "<p>" 
		+ data[i].name 
		+ "is a " 
		+ data[i].species
		+ "that likes to eat: ";

		for(var j = 0; j < data[i].foods.likes.length; j++) {
			if(j == 0) {
				htmlString += data[i].foods.likes[j];
			} else {
				htmlString += " and " + data[i].foods.likes[j];	
			}
		}

		htmlString += " | and dislakies| : ";

		for(var j = 0; j < data[i].foods.dislikes.length; j++) {
			if(j == 0) {
				htmlString += data[i].foods.dislikes[j];
			} else {
				htmlString += " and " + data[i].foods.dislikes[j];	
			}
		}

		htmlString += '</p>';
	}
	animalContainer.insertAdjacentHTML('beforeend', htmlString);
}


