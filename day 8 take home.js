function e(elementType, text, attributes, styles) {
	var newElement = document.createElement(elementType);
	newElement.textContent = text;
	//set the attributes on the tag
	for (var attr in attributes) {
		if (attributes.hasOwnProperty(attr)) {
			newElement.setAttribute(attr, attributes[attr]);
		}
	}
	//set the styles
	for (var style in styles) {
		if (styles.hasOwnProperty(style)) {
			newElement.style[style] = styles[style];
		}
	}
	return newElement;
}

function capitalize(aString) {
	aString = aString.trim();	// Removes whitespaces from the front and end 
	if (!aString) {  			// Checks if argument is empty  
		return;
	}
	var tmpString = "";
	aString = aString.toLowerCase().split(' '); // Converts string to lower case then into an array 
	for (var i in aString) { 
		switch (aString[i]) { 
			case 'the':  
			case 'of':   		// Cases we don't want to capitalize
			case 'and':  		// Break is ! used so every case gets evaluated 
			case 'a':   
			case 'an':
				if (i != 0) {	// Checks if the case is ! the first word in the string  
					tmpString += aString[i].slice(0) + ' ';
					break;		// Break is called inside the true scope to allow a jump to default if the condition is false 
				}
			default:
				tmpString += aString[i][0].toUpperCase() + aString[i].slice(1) + ' ';
				break;
		}
	}							// return is called after the for loop is done reiterating 
	return tmpString.trim();	// Removes the extra whitespace from the end
}

var movieConstructor = function (Title, runTimeInMin, Year, Genre, Desc) {
	this.Title = Title;
	this.Time = parseInt(runTimeInMin); 
	this.Year = parseInt(Year);
	this.Genre = Genre;
	this.Desc = (Desc) ? Desc : 'N/A';	// Sets description value to N/A if empty 
	this.runTimeInHours = function () { 
		return parseInt(this.Time / 60) + 'h ' + this.Time % 60 + 'm';	// Divide by 60 to get hours modulus 60 to get minutes
	}
	this.Preview = function () {		// Slices the first 50 characters of description then adds ... 
		return (this.Desc.length >= 50) ? this.Desc.slice(0, 50) + '...' : this.Desc;
	}
	
};

var submit = document.getElementById('newMovieForm'),
	ul = e('ul', '', {id: 'ulID'}, {}), // Creates an empty unordered list with an ID == ulID
	newMovies = []; 					// Creates an empty movie array for to store movie OBJs

submit.addEventListener('submit', function (evt) { 
	evt.preventDefault();					// Prevents page reload after submit event 
	if (!submit.movieTitle.value.trim()) { 	// Checks if user is submiting an empty title
		return alert('Please enter a valid movie title!'); // Prevents movie OBJ from being constructed if title is empty 
	}
	for (var i in newMovies) {
		if (submit.movieTitle.value.toLowerCase().trim() == newMovies[i].Title.toLowerCase()) { // Checks if input title already exists 
			return alert(newMovies[i].Title + ' is already in our database!');
		}
	}
	var currentTitle = capitalize(submit.movieTitle.value), 
		currentTime = submit.runTime.value,
		currentYear = submit.yearReleased.value, // Stores input values into local variables
		currentGenre = submit.genre,
		currentDesc = submit.desc.value;
	for (var i in currentGenre) {				 // Loops over every element in the currentGenre array 
		if (currentGenre[i].checked) {			
			currentGenre = currentGenre[i].value; // Overwrites the currentGenre array with the checked value
			break;
		}
	}
	
	// Creates a movie OBJ then adds it to the newMovies array
	newMovies.push(new movieConstructor(currentTitle, currentTime, currentYear, currentGenre, currentDesc)); 
	var li = e('li', currentTitle, {}, {color: 'green'}); // Creates a new list item with a value of the user entered movie title
	ul.appendChild(li);
	document.body.appendChild(ul);
	console.log(newMovies);
} );


ul.addEventListener('click', function (evt) {
	for (var i in newMovies) {
		if (newMovies[i].Title.toLowerCase() == evt.target.textContent.toLowerCase()) {	 // Checks if li user clicked on matches any movie
			alert(newMovies[i].Title + ' plot summary: \n' + newMovies[i].Preview() + '\n\nLength: ' + newMovies[i].runTimeInHours() + '\nReleased: ' + newMovies[i].Year + '\nGenre: ' + newMovies[i].Genre);
		}
	}
});