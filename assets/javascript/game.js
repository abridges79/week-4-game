var wins = 0;
var losses = 0;
var math = 0;
var number = Math.floor((Math.random()* 100) + 19);
var blue = Math.floor((Math.random()* 12) + 1);
var red = Math.floor((Math.random()* 12) + 1);
var orange = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);

// Game starts make vars for wins, losses, math, number and all gem colors




var reset = function(){
	math = 0;
    number = Math.floor((Math.random()* 100) + 19);

	$('.number').empty();
	$('.number').append(number);

	blue = Math.floor((Math.random()* 12) + 1);
    red = Math.floor((Math.random()* 12) + 1);
    orange = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    configmath();
}
// creates a reset function that sets math to zero, resets the number by declaring value as above emptying the array and appending, and coins value declared again and run configmath function
var configmath = function(){
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('.math').empty();
    $('.math').append(math);
    $('.number').empty();
	$('.number').append(number);
	
}
// writes a function that empties and appends wins, losses, math, and number, this deletes the old value and adds the current 
var config = function (){
	if (math == number) {
		wins = wins + 1;
		reset();
}
	else if(math > number){
		losses = losses + 1;
		reset();
}
	else{
		configmath();
}}
//creates config function that compares the added math total to the generated number, if equal then wins +1, if greater than losses +1, if not then run configmath and it displays updated values  
$(document).ready(function(){
	$('.math').append(math);
	$('.number').append(number);
// display the math and number variable by targeting the div and then appending the variable to that div 
	
	$('#blue').click(function(){
		math = math + red;
		config();
	})
	$('#red').click(function(){
		math  = math  + blue;
		config();
	})
	$('#orange').click(function(){
		math  = math  + orange;
		config();
	})
	$('#green').click(function(){
		math  = math  + green;
		config();
	})
});
// on click events that create a function to add the variable created from each function for the color to the variable math 




