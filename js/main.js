//js file
(function() {
	console.log("js file loaded");

	//Vars
	var num1 = document.querySelector("#input1");
	var num2 = document.querySelector("#input2");
	var equal = document.querySelector("#trigger");
	var outcome = document.querySelector("#value");

	//console.log(num1);
	//console.log(num2);
	//console.log(equal);
	//console.log(outcome);

	//Functions
	function addStuff() {
		console.log("from addStuff");
	}



	//Listeners
	equal.addEventListener("click", addStuff, false);




})();