var myFavMovies = ['the lIOn king', 'monSTers inc', 'wall-e', 'chicken little', 'toy story', 'pirates OF THE caribbean', 'lord of the rings'];

function capitalize(aString) {
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
	}
	return tmpString; // return is called here after the for loop is done reiterating 
}



for (var i in myFavMovies) {
	myFavMovies[i] = capitalize(myFavMovies[i]);
	document.write(myFavMovies[i] + '<br />')
}