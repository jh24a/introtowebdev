
var turn_X = true;
var score_X = 0;
var score_O = 0;
var tot_turns = 0;
var won = false;
var X_won = false;
var O_won = false;

button1 = document.getElementById(1);
button2 = document.getElementById(2);
button3 = document.getElementById(3);
button4 = document.getElementById(4);
button5 = document.getElementById(5);
button6 = document.getElementById(6);
button7 = document.getElementById(7);
button8 = document.getElementById(8);
button9 = document.getElementById(9);

function handle_click(id){
	button = document.getElementById(id);

	if (button.innerHTML == '' && turn_X ){
		button.innerHTML = 'X';
		turn_X = false;	
		tot_turns += 1;
		button.style.backgroundColor="blue"
	}
	else if (button.innerHTML == '' && !turn_X){
		button.innerHTML = 'O';
		turn_X = true;
		tot_turns += 1;
		button.style.backgroundColor="red"
	}
	//check board to see if someone has won
	check_board();
	if(won){
		won_game();
		return;
	}

	if (!won){ 	//nobody won ,but the board is filled, so its a tie
		if (tot_turns >= 9){
			tie();
		}
	}


}

function tie(){
	reset_board();

	tot_turns = 0;
	turn_X = true;

	alert("tie");
}

function reset_board(){
	document.getElementById(1).innerHTML = '';
	document.getElementById(2).innerHTML = '';
	document.getElementById(3).innerHTML = '';
	document.getElementById(4).innerHTML = '';
	document.getElementById(5).innerHTML = '';
	document.getElementById(6).innerHTML = '';
	document.getElementById(7).innerHTML = '';
	document.getElementById(8).innerHTML = '';
	document.getElementById(9).innerHTML = '';

	document.getElementById(1).style.backgroundColor = "white";
	document.getElementById(2).style.backgroundColor = "white";
	document.getElementById(3).style.backgroundColor = "white";
	document.getElementById(4).style.backgroundColor = "white";
	document.getElementById(5).style.backgroundColor = "white";
	document.getElementById(6).style.backgroundColor = "white";
	document.getElementById(7).style.backgroundColor = "white";
	document.getElementById(8).style.backgroundColor = "white";
	document.getElementById(9).style.backgroundColor = "white";
}

function score_update(){
	document.getElementById("X_scoreboard").innerHTML = score_X;
	document.getElementById("O_scoreboard").innerHTML = score_O;
}

function check_board(){

	//check horizontal possibilites 
		if (button1.innerHTML == 'X' &&
			button2.innerHTML == 'X' && 
			button3.innerHTML == 'X' ){
			alert("Congrats! X has won!")
			won = true;
			X_won = true;
		} 
		if (!won && 
			button1.innerHTML == 'O' &&
			button2.innerHTML == 'O' && 
			button3.innerHTML == 'O' ){
			alert("Congrats! O has won!")
			won = true;
			O_won = true;
		} 	

		if (!won && 
			button4.innerHTML == 'X' &&
			button5.innerHTML == 'X' && 
			button6.innerHTML == 'X' ){
			alert("Congrats! X has won!")
			won = true;
			X_won = true;
		} 
		if (!won && 
			button4.innerHTML == 'O' &&
			button5.innerHTML == 'O' && 
			button6.innerHTML == 'O' ){
			alert("Congrats! O has won!")
			won = true;
			O_won = true;
		} 
		
		
		if (!won && 
			button7.innerHTML == 'X' &&
			button8.innerHTML == 'X' && 
			button9.innerHTML == 'X' ){
			alert("Congrats! X has won!")
			won = true;
			X_won = true;
		} 
		if (!won && 
			button7.innerHTML == 'O' &&
			button8.innerHTML == 'O' && 
			button9.innerHTML == 'O' ){
			alert("Congrats! O has won!")
			won = true;
			O_won = true;
		} 


	//check vertical possibilities
		if (!won && 
			button1.innerHTML == 'X' &&
			button4.innerHTML == 'X' && 
			button7.innerHTML == 'X' ){
			alert("Congrats! X has won!")
			won = true;
			X_won = true;
		} 
		if (!won && 
			button1.innerHTML == 'O' &&
			button4.innerHTML == 'O' && 
			button7.innerHTML == 'O' ){
			alert("Congrats! O has won!")
			won = true;
			O_won = true;
		} 


		if (!won && 
			button2.innerHTML == 'X' &&
			button5.innerHTML == 'X' && 
			button8.innerHTML == 'X' ){
			alert("Congrats! X has won!")
			won = true;
			X_won = true;
		} 
		if (!won && 
			button2.innerHTML == 'O' &&
			button5.innerHTML == 'O' && 
			button8.innerHTML == 'O' ){
			alert("Congrats! O has won!")
			won = true;
			O_won = true;
		} 


		if (!won && 
			button3.innerHTML == 'X' &&
			button6.innerHTML == 'X' && 
			button9.innerHTML == 'X' ){
			alert("Congrats! X has won!")
			won = true;
			X_won = true;
		} 
		if (!won && 
			button3.innerHTML == 'O' &&
			button6.innerHTML == 'O' && 
			button9.innerHTML == 'O' ){
			alert("Congrats! O has won!")
			won = true;
			O_won = true;
		} 
	
	// diagonal possibilies 
		if (!won && 
			button1.innerHTML == 'X' &&
			button5.innerHTML == 'X' && 
			button9.innerHTML == 'X' ){
			alert("Congrats! X has won!")
			won = true;
			X_won = true;
		} 
		if (!won && 
			button1.innerHTML == 'O' &&
			button5.innerHTML == 'O' && 
			button9.innerHTML == 'O' ){
			alert("Congrats! O has won!")
			won = true;
			O_won = true;
		} 

		if (!won && 
			button7.innerHTML == 'X' &&
			button5.innerHTML == 'X' && 
			button3.innerHTML == 'X' ){
			alert("Congrats! X has won!")
			won = true;
			X_won = true;
		} 
		if (!won && 
			button7.innerHTML == 'O' &&
			button5.innerHTML == 'O' && 
			button3.innerHTML == 'O' ){
			alert("Congrats! O has won!")
			won = true;
			O_won = true;
		} 

}

function won_game(){
	if (X_won){
		score_X += 1;
	}
	else if (O_won){
		score_O += 1;
	}
	reset_board();
	score_update();
	won = false;
	X_won = false;
	O_won = false;
	tot_turns = 0;
	turn_X = true;
}

function replay_button(){
	reset_board();
	score_update();
	won = false;
	X_won = false;
	O_won = false;
	tot_turns = 0;
	turn_X = true;
}