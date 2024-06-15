const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	// let results = [];
	// const userInput = str.toLowerCase();
	// fruit.forEach(function(fruitName){
	// 	if(fruitName.toLowerCase().includes(userInput)){
	// 		results.push(fruitName);
	// 	}
	const userInput = str.toLowerCase();
	const results = fruit.filter(function(fruitName){
		return fruitName.toLowerCase().includes(userInput)
	});
	return results;
}

function searchHandler(e) { //triggered when keyup
	const userInput = e.target.value.toLowerCase();
	const results = search(userInput); //calls search function to get matching fruits based on user input
	showSuggestions(results); //calls the showSuggestions function to display matching fruits
};

function showSuggestions(results) {
    if (results.length === 0) {
        suggestions.innerHTML = ''; // clear suggestions when there are no matching results
        suggestions.style.display = 'none'; // hide the suggestions list
    } else {
        suggestions.innerHTML = ''; // clear previous suggestions
        results.forEach(function(fruitName) {
            const listItem = document.createElement('li'); //dynamically creates li rather than in html
            listItem.textContent = fruitName;
            suggestions.appendChild(listItem);
        });
        suggestions.style.display = 'block'; // show the suggestions list
    }
}


function useSuggestion(e) {
	if (e.target.tagName === 'LI'){
		input.value = e.target.textContent;
		suggestions.innerHTML = '';
		suggestions.style.display = 'none';
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);