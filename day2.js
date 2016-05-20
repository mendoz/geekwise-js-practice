function Hello() {
	console.log('Hello');
}

function aHello() {
	alert('Alert Hello');
}

function writeToConsole(YourMessage) {
	console.log(YourMessage);
}

function writeToAlert(YourMessage) {
	alert(YourMessage);
}

Hello();
aHello();
writeToConsole(1);
writeToAlert("Test Alert");


function myFirstFunction() {
	mySecondFunction();
}

function mySecondFunction() {
	myFirstFunction();
}

// myFirstFunction(); Error: mySecondFunction() hasn't been defined

if (!confirm('Do you like pizza?')) {
	alert('We can\'t be friends');
} else {
	alert('We can be friends');
}

var test = ['a', 'b', 'c', 'd', '1', '2', '3'];
console.log(test[test.length-1]);